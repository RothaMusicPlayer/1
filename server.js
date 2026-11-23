const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'store.json');
const POS_PUBLIC = path.join(__dirname, 'client-pos');
const CONTROL_PUBLIC = path.join(__dirname, 'control-admin');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const sessions = new Map();
const loginAttempts = new Map();
const sseClients = new Set();
fs.mkdirSync(DATA_DIR, { recursive: true });

const DEFAULT_STORE = {
  settings: { shopName: 'Coffee & Drinks', receiptFooter: 'សូមអរគុណ! Thank you!', qrEnabled: true,
    qrImageDataUrl: '', currency: 'USD', khrRate: 4000, tableCount: 5, enableTakeaway: true,
    lockMenuAndData: false, darkMode: false, lang: 'km', priceOverrides: {}, disabledItems: {} },
  cartItems: [], orders: [], dailyChartLog: {}
};
function clone(v) { return JSON.parse(JSON.stringify(v)); }
function readStore() {
  try {
    if (!fs.existsSync(DB_FILE)) { fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_STORE, null, 2)); return clone(DEFAULT_STORE); }
    const d = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    return { settings: { ...DEFAULT_STORE.settings, ...(d.settings || {}) }, cartItems: Array.isArray(d.cartItems) ? d.cartItems : [], orders: Array.isArray(d.orders) ? d.orders : [], dailyChartLog: d.dailyChartLog && typeof d.dailyChartLog === 'object' ? d.dailyChartLog : {} };
  } catch (e) { console.error('Database read error:', e); return clone(DEFAULT_STORE); }
}
function broadcast(store) {
  const msg = `data: ${JSON.stringify({ type: 'SYNC_STATE', store, updatedAt: Date.now() })}\n\n`;
  for (const c of sseClients) { try { c.res.write(msg); } catch { sseClients.delete(c); } }
}
function writeStore(store) {
  const tmp = DB_FILE + '.tmp'; fs.writeFileSync(tmp, JSON.stringify(store, null, 2)); fs.renameSync(tmp, DB_FILE); broadcast(store);
}
function json(res, status, body, headers = {}) { res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...headers }); res.end(JSON.stringify(body)); }
function body(req) { return new Promise((resolve, reject) => { let s=''; req.on('data', c => { s += c; if (s.length > 12*1024*1024) reject(new Error('Payload too large')); }); req.on('end', () => { try { resolve(s ? JSON.parse(s) : {}); } catch { reject(new Error('Invalid JSON')); } }); req.on('error', reject); }); }
function cookies(req) { return Object.fromEntries((req.headers.cookie || '').split(';').map(x => x.trim().split('=').map(decodeURIComponent)).filter(x => x.length === 2)); }
function session(req) { const token = cookies(req).coffee_admin_session; const s = token && sessions.get(token); if (s && s.expires > Date.now()) return token; if (token) sessions.delete(token); return null; }
function isAdmin(req) { return Boolean(session(req)); }
function sendFile(res, root, pathname) {
  let rel = decodeURIComponent(pathname || '/'); if (rel === '/') rel = '/index.html';
  const target = path.resolve(root, '.' + rel);
  if (!target.startsWith(path.resolve(root) + path.sep) && target !== path.resolve(root, 'index.html')) { res.writeHead(403); return res.end('Forbidden'); }
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) { res.writeHead(404); return res.end('Not found'); }
  const types = { '.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.ico':'image/x-icon' };
  res.writeHead(200, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff' }); fs.createReadStream(target).pipe(res);
}
async function api(req, res, pathname) {
  if (req.method === 'POST' && pathname === '/api/auth/login') {
    if (!ADMIN_PASSWORD) return json(res, 503, { ok:false, error:'Admin password is not configured. Set ADMIN_PASSWORD in cloud environment.' });
    const ip = req.socket.remoteAddress || 'unknown'; const a = loginAttempts.get(ip) || { count:0, until:0 };
    if (a.until > Date.now()) return json(res, 429, { ok:false, error:'Too many attempts. Try again later.' });
    try { const b = await body(req); const supplied = String(b.password || '');
      const ok = supplied.length <= 256 && crypto.timingSafeEqual(crypto.createHash('sha256').update(supplied).digest(), crypto.createHash('sha256').update(ADMIN_PASSWORD).digest());
      if (!ok) { a.count++; if (a.count >= 6) { a.count=0; a.until=Date.now()+10*60*1000; } loginAttempts.set(ip,a); return json(res,401,{ok:false,error:'ពាក្យសម្ងាត់មិនត្រឹមត្រូវ'}); }
      loginAttempts.delete(ip); const token=crypto.randomBytes(32).toString('hex'); sessions.set(token,{expires:Date.now()+12*60*60*1000});
      return json(res,200,{ok:true},{'Set-Cookie':`coffee_admin_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=43200${process.env.NODE_ENV==='production'?'; Secure':''}`});
    } catch(e) { return json(res,400,{ok:false,error:e.message}); }
  }
  if (req.method === 'POST' && pathname === '/api/auth/logout') { const t=session(req); if(t) sessions.delete(t); return json(res,200,{ok:true},{'Set-Cookie':'coffee_admin_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0'}); }
  if (req.method === 'GET' && pathname === '/api/auth/me') return json(res,200,{ok:isAdmin(req)});
  const adminOnly = pathname === '/api/settings' || pathname === '/api/reset' || (pathname === '/api/events' && req.headers['x-client-role'] === 'admin') || (pathname === '/api/state' && req.headers['x-client-role'] === 'admin');
  if (adminOnly && !isAdmin(req)) return json(res,401,{ok:false,error:'Admin login required'});
  if (req.method === 'GET' && pathname === '/api/events') {
    res.writeHead(200,{'Content-Type':'text/event-stream','Cache-Control':'no-cache, no-transform','Connection':'keep-alive','X-Accel-Buffering':'no'});
    res.write(`data: ${JSON.stringify({type:'CONNECTED',store:readStore()})}\n\n`); const client={res}; sseClients.add(client); req.on('close',()=>sseClients.delete(client)); return;
  }
  if (req.method === 'GET' && pathname === '/api/state') return json(res,200,{ok:true,store:readStore()});
  if (req.method === 'GET' && pathname === '/api/settings') return json(res,200,{ok:true,settings:readStore().settings});
  if (req.method === 'PUT' && pathname === '/api/settings') { try { const b=await body(req); const s=readStore(); s.settings={...s.settings,...b}; writeStore(s); return json(res,200,{ok:true,settings:s.settings}); } catch(e) { return json(res,400,{ok:false,error:e.message}); } }
  if (req.method === 'POST' && pathname === '/api/sync') { try { const b=await body(req); const s=readStore(); if(Array.isArray(b.cartItems))s.cartItems=b.cartItems; if(Array.isArray(b.orders))s.orders=b.orders; if(b.dailyChartLog && typeof b.dailyChartLog==='object')s.dailyChartLog=b.dailyChartLog; writeStore(s); return json(res,200,{ok:true}); } catch(e) { return json(res,400,{ok:false,error:e.message}); } }
  if (req.method === 'POST' && pathname === '/api/reset') { const s=clone(DEFAULT_STORE); writeStore(s); return json(res,200,{ok:true,store:s}); }
  return json(res,404,{ok:false,error:'API route not found'});
}
const server=http.createServer(async(req,res)=>{
  const pathname=new URL(req.url,'http://localhost').pathname;
  if(pathname.startsWith('/api/')) return api(req,res,pathname);
  if(pathname==='/admin') return sendFile(res,CONTROL_PUBLIC,'/index.html');
  if(pathname.startsWith('/admin/')) return sendFile(res,CONTROL_PUBLIC,pathname.slice(6));
  if(pathname==='/shared/recipes.js') return sendFile(res,path.join(__dirname,'shared'),'/recipes.js');
  return sendFile(res,POS_PUBLIC,pathname);
});
server.listen(PORT,'0.0.0.0',()=>console.log(`Coffee POS Cloud listening on ${PORT}; POS=/ ; Admin=/admin`));
