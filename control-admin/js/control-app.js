let currentStore = null;
let draftQrImageDataUrl = "";

function renderQrGraphicHtml(dataUrl) {
  if (dataUrl && typeof dataUrl === "string" && dataUrl.startsWith("data:image/")) {
    return `<img src="${dataUrl}" alt="Payment QR Code" />`;
  }
  return DEFAULT_QR_SVG;
}

function getLocalDateKey(dateObj = new Date()) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getRecipePrice(r, settings) {
  if (settings.priceOverrides && typeof settings.priceOverrides[r.id] === "number") {
    return Math.max(0, settings.priceOverrides[r.id]);
  }
  return typeof r.price === "number" ? r.price : 1.75;
}

function updateStats(store) {
  const settings = store.settings || {};
  const orders = store.orders || [];
  const chart = store.dailyChartLog || {};
  const todayKey = getLocalDateKey();

  const activeCups = orders.reduce((sum, o) => sum + (o.qty || 1), 0);
  const todayCups = (chart[todayKey] && chart[todayKey].cups) || 0;
  const disabledCount = Object.keys(settings.disabledItems || {}).filter(k => settings.disabledItems[k]).length;
  const enabledCount = DEFAULT_RECIPES.length - disabledCount;

  document.getElementById("statActiveOrders").textContent = `${activeCups} កែវ (${orders.length} មុខ)`;
  document.getElementById("statTodayCups").textContent = `${todayCups} កែវ`;
  document.getElementById("statEnabledItems").textContent = `${enabledCount} / ${DEFAULT_RECIPES.length} មុខ`;
  const lockEl = document.getElementById("statPosLockState");
  lockEl.textContent = settings.lockMenuAndData ? "🔒 កំពុងបិទ (Locked)" : "🟢 បើកដំណើរការ";
  lockEl.style.color = settings.lockMenuAndData ? "#C92A3E" : "#1B8045";
}

function renderControlForms(store) {
  const settings = store.settings || {};
  document.getElementById("setShopNameInput").value = settings.shopName || "Coffee & Drinks";
  document.getElementById("setReceiptNoteInput").value = settings.receiptFooter || "";
  document.getElementById("setQrEnabledToggle").checked = settings.qrEnabled !== false;
  draftQrImageDataUrl = settings.qrImageDataUrl || "";
  updateQrPreview();

  document.getElementById("setCurrencySelect").value = settings.currency || "USD";
  document.getElementById("setKhrRateInput").value = settings.khrRate || 4000;
  document.getElementById("khrRateRow").style.display = settings.currency === "KHR" ? "flex" : "none";

  document.getElementById("setTableCountInput").value = settings.tableCount || 5;
  document.getElementById("setTakeawayToggle").checked = settings.enableTakeaway !== false;
  document.getElementById("setLockModeToggle").checked = Boolean(settings.lockMenuAndData);
  document.getElementById("setDarkModeToggle").checked = Boolean(settings.darkMode);
  document.getElementById("setLangSelect").value = settings.lang === "en" ? "en" : "km";

  // 1. Prices list
  const pricesContainer = document.getElementById("itemPricesContainer");
  pricesContainer.innerHTML = DEFAULT_RECIPES.map(r => {
    const secLabel = r.section === "drinks" ? "ភេសជ្ជៈ" : "Coffee";
    const priceVal = getRecipePrice(r, settings).toFixed(2);
    return `
      <div class="item-row">
        <div class="item-meta">
          <span class="tag">${secLabel}</span>
          <strong>${r.nameKm} (${r.nameEn})</strong>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">
          <span>$</span>
          <input type="number" class="ios-input item-price-input" data-price-id="${r.id}" step="0.25" min="0" value="${priceVal}" style="width:90px; text-align:right;" />
        </div>
      </div>
    `;
  }).join("");

  // 2. Availability list
  const availContainer = document.getElementById("itemAvailabilityContainer");
  availContainer.innerHTML = DEFAULT_RECIPES.map(r => {
    const secLabel = r.section === "drinks" ? "ភេសជ្ជៈ" : "Coffee";
    const isEnabled = !(settings.disabledItems && settings.disabledItems[r.id] === true);
    return `
      <div class="item-row">
        <div class="item-meta">
          <span class="tag">${secLabel}</span>
          <strong>${r.nameKm} (${r.nameEn})</strong>
          <span class="status-pill-mini ${isEnabled ? "on" : "off"}" data-status-pill="${r.id}">${isEnabled ? "បើក" : "បិទ"}</span>
        </div>
        <label class="ios-switch">
          <input type="checkbox" class="item-avail-checkbox" data-avail-id="${r.id}" ${isEnabled ? "checked" : ""} />
          <span class="ios-slider"></span>
        </label>
      </div>
    `;
  }).join("");

  availContainer.querySelectorAll(".item-avail-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      const pill = availContainer.querySelector(`[data-status-pill="${cb.dataset.availId}"]`);
      if (pill) {
        pill.textContent = cb.checked ? "បើក" : "បិទ";
        pill.classList.toggle("on", cb.checked);
        pill.classList.toggle("off", !cb.checked);
      }
    });
  });
}

function updateQrPreview() {
  const previewEl = document.getElementById("qrSettingsPreview");
  previewEl.innerHTML = renderQrGraphicHtml(draftQrImageDataUrl);
  const enabled = document.getElementById("setQrEnabledToggle").checked;
  const box = document.getElementById("qrUploadBox");
  box.style.opacity = enabled ? "1" : "0.45";
  box.style.pointerEvents = enabled ? "auto" : "none";
}

function collectSettingsFromForm() {
  const priceOverrides = {};
  document.querySelectorAll("#itemPricesContainer .item-price-input").forEach(inp => {
    const val = parseFloat(inp.value);
    if (inp.dataset.priceId && !isNaN(val) && val >= 0) {
      priceOverrides[inp.dataset.priceId] = Number(val.toFixed(2));
    }
  });

  const disabledItems = {};
  document.querySelectorAll("#itemAvailabilityContainer .item-avail-checkbox").forEach(cb => {
    if (cb.dataset.availId && !cb.checked) {
      disabledItems[cb.dataset.availId] = true;
    }
  });

  return {
    shopName: document.getElementById("setShopNameInput").value.trim() || "Coffee & Drinks",
    receiptFooter: document.getElementById("setReceiptNoteInput").value.trim(),
    qrEnabled: document.getElementById("setQrEnabledToggle").checked,
    qrImageDataUrl: draftQrImageDataUrl,
    currency: document.getElementById("setCurrencySelect").value === "KHR" ? "KHR" : "USD",
    khrRate: Math.max(1000, parseInt(document.getElementById("setKhrRateInput").value, 10) || 4000),
    tableCount: Math.min(15, Math.max(1, parseInt(document.getElementById("setTableCountInput").value, 10) || 5)),
    enableTakeaway: document.getElementById("setTakeawayToggle").checked,
    lockMenuAndData: document.getElementById("setLockModeToggle").checked,
    darkMode: document.getElementById("setDarkModeToggle").checked,
    lang: document.getElementById("setLangSelect").value === "en" ? "en" : "km",
    priceOverrides,
    disabledItems
  };
}

async function saveControlSettings(customToastMsg) {
  const nextSettings = collectSettingsFromForm();
  try {
    const res = await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'X-Client-Role': 'admin' },
      body: JSON.stringify(nextSettings)
    });
    const data = await res.json();
    if (data.ok) {
      showToast(customToastMsg || "✅ បានរក្សាទុក និងបញ្ជូនទៅ POS Server រួចរាល់!");
    } else {
      showToast("❌ Error: " + (data.error || "Failed"));
    }
  } catch (err) {
    showToast("❌ មិនអាចភ្ជាប់ទៅ Server បានទេ");
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2400);
}

function initControlEvents() {
  document.getElementById("saveAllControlBtn").addEventListener("click", () => saveControlSettings());

  document.getElementById("setCurrencySelect").addEventListener("change", (e) => {
    document.getElementById("khrRateRow").style.display = e.target.value === "KHR" ? "flex" : "none";
  });

  document.getElementById("setQrEnabledToggle").addEventListener("change", updateQrPreview);

  document.getElementById("uploadQrBtn").addEventListener("click", () => {
    document.getElementById("setQrFileInput").click();
  });

  document.getElementById("setQrFileInput").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      draftQrImageDataUrl = String(ev.target.result || "");
      updateQrPreview();
      saveControlSettings("✅ បានបញ្ចូលរូប QR និងធ្វើបច្ចុប្បន្នភាពទៅ POS");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  });

  document.getElementById("removeQrBtn").addEventListener("click", () => {
    draftQrImageDataUrl = "";
    updateQrPreview();
    saveControlSettings("✅ បានប្តូរទៅ QR គំរូ");
  });

  // Instant push when toggling remote lock switch
  document.getElementById("setLockModeToggle").addEventListener("change", (e) => {
    saveControlSettings(e.target.checked ? "🔒 បានចាក់សោ POS ពីចម្ងាយ" : "🟢 បានបើក POS ឡើងវិញ");
  });

  document.getElementById("exportDataBtn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(currentStore, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `coffee-pos-backup-${getLocalDateKey()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast("📥 បានទាញយកឯកសារ Backup រួចរាល់");
  });

  document.getElementById("resetAllDataBtn").addEventListener("click", async () => {
    if (!window.confirm("តើអ្នកពិតជាចង់សម្អាតការកំណត់ កន្ត្រក និងការកុម្ម៉ង់ទាំងអស់មែនទេ?")) return;
    const res = await fetch('/api/reset', { method: 'POST', headers: { 'X-Client-Role': 'admin' } });
    const data = await res.json();
    if (data.ok) {
      currentStore = data.store;
      renderControlForms(currentStore);
      updateStats(currentStore);
      showToast("🔄 បានកំណត់ប្រព័ន្ធឡើងវិញរួចរាល់");
    }
  });
}

function connectRealtime() {
  fetch('/api/state', { headers: { 'X-Client-Role': 'admin' } })
    .then(r => r.json())
    .then(data => {
      if (data && data.store) {
        currentStore = data.store;
        renderControlForms(currentStore);
        updateStats(currentStore);
      }
    });

  const evt = new EventSource('/api/events?role=admin');
  evt.onmessage = (e) => {
    try {
      const msg = JSON.parse(e.data);
      if (msg.store) {
        currentStore = msg.store;
        updateStats(currentStore);
      }
    } catch {}
  };
}

async function startAdminAfterLogin() { const bar=document.createElement('div'); bar.style='position:fixed;right:12px;top:12px;z-index:9999'; bar.innerHTML='<button id=adminLogout style="padding:9px 14px;border:0;border-radius:10px;background:#183b32;color:white">ចាកចេញ</button>'; document.body.appendChild(bar); document.getElementById('adminLogout').onclick=async()=>{await fetch('/api/auth/logout',{method:'POST'});location.reload()}; initControlEvents(); connectRealtime(); }
function showAdminLogin() {
  document.body.innerHTML = `<main style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#f3f6f4;font-family:system-ui,sans-serif"><form id="adminLoginForm" style="width:min(420px,100%);background:white;padding:28px;border-radius:22px;box-shadow:0 12px 40px #183b321a"><div style="font-size:34px;text-align:center">☕</div><h2 style="text-align:center;margin:8px 0">Coffee POS Admin</h2><p style="text-align:center;color:#66736d">ចូលប្រើប្រាស់សម្រាប់ម្ចាស់ហាង</p><label for="adminPassword">Admin Password</label><input id="adminPassword" type="password" required autocomplete="current-password" style="box-sizing:border-box;width:100%;padding:14px;border:1px solid #ccd6d0;border-radius:12px;margin:8px 0 14px"><button style="width:100%;padding:14px;background:#183b32;color:white;border:0;border-radius:12px;font-weight:700">ចូលប្រព័ន្ធ</button><p id="loginError" style="color:#c62828"></p></form></main>`;
  document.getElementById('adminLoginForm').addEventListener('submit', async e => { e.preventDefault(); const btn=e.currentTarget.querySelector('button'); btn.disabled=true; try { const r=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:document.getElementById('adminPassword').value})}); const d=await r.json(); if(!d.ok) throw new Error(d.error||'Login failed'); location.reload(); } catch(err) { document.getElementById('loginError').textContent=err.message; btn.disabled=false; } });
}
(async()=>{ try { const r=await fetch('/api/auth/me'); const d=await r.json(); if(d.ok) await startAdminAfterLogin(); else showAdminLogin(); } catch { showAdminLogin(); } })();
