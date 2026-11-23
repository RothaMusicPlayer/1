const UI_STRINGS = {
  km: {
    docTitle: "Coffee & Drinks",
    headerTitle: "Coffee & Drinks",
    langBadge: "EN",
    themeDark: "ងងឹត",
    themeLight: "ភ្លឺ",
    lockBannerText: "កំពុងបិទការកុម្ម៉ង់ មើលគ្រឿងផ្សំ Chart និង Orders ពី Control Server",
    filterCoffee: () => "Coffee",
    filterDrinks: () => "ភេសជ្ជៈ",
    filterCart: () => "កន្ត្រក",
    showingPrefix: "កំពុងបង្ហាញ៖",
    showingMid: "មុខ ក្នុងចំណោម",
    showingSuffix: "មុខ",
    hotFull: "ក្តៅ",
    iceFull: "ត្រជាក់",
    bothFull: "",
    navMenu: () => "ម៉ឺនុយ",
    navOrder: () => "All Order",
    navCalc: "ក្រាហ្វប្រចាំថ្ងៃ",
    emptyTitle: "រកមិនឃើញមុខទំនិញ",
    emptyDesc: "សាកល្បងប្តូរផ្ទាំង Coffee ឬ ភេសជ្ជៈ ឬបើកមុខទំនិញក្នុង Control Server។",
    cartTitle: "កន្ត្រក",
    cartSubtitle: "ពិនិត្យមុខទំនិញក្នុងកន្ត្រក រួចចុចបញ្ជាក់ការកុម្ម៉ង់ ដើម្បីបញ្ជូនទៅ All Order",
    confirmCartBtn: "បញ្ជាក់ការកុម្ម៉ង់",
    cartEmptyTitle: "កន្ត្រកនៅទំនេរ",
    cartEmptyDesc: "ចុចលើតម្លៃ ឬមុខកាហ្វេ/ភេសជ្ជៈក្នុងម៉ឺនុយ ដើម្បីមើលរូបមន្ត និងដាក់ចូលកន្ត្រក។",
    cartTotalCups: (cups, totalPriceFmt) => `សរុបក្នុងកន្ត្រក៖ ${cups} កែវ — ${totalPriceFmt}`,
    orderTitle: "All Order",
    orderSubtitle: "បញ្ជីការកុម្ម៉ង់ដែលបានបញ្ជាក់រួចរាល់",
    backToCartBtn: "← កន្ត្រក",
    orderEmptyTitle: "មិនទាន់មានការកុម្ម៉ង់ទេ",
    orderEmptyDesc: "បញ្ចូលមុខទំនិញទៅកន្ត្រក ហើយចុចបញ្ជាក់ ដើម្បីដាក់ទៅ All Order។",
    orderStatusPending: "កំពុងធ្វើ",
    orderStatusDone: "ធ្វើរួច",
    markDoneBtn: "ធ្វើរួច",
    confirmDoneTitle: "បញ្ជាក់ថាធ្វើរួច?",
    confirmDoneDesc: "សម្គាល់ថាភេសជ្ជៈនេះធ្វើរួចរាល់ (ទិន្នន័យក្រាហ្វនឹងបញ្ចូលពេលគិតលុយរួច)។",
    cancelDoneBtn: "បោះបង់",
    acceptDoneBtn: "បញ្ជាក់",
    orderEditBtn: "កែ",
    orderRemoveBtn: "លុប",
    orderDoneSummary: (doneCount, totalCount) => `ធ្វើរួច៖ ${doneCount}/${totalCount} មុខ`,
    tableBillsTitle: "វិក័យប័ត្រសរុបតម្លៃតាមតុ & QR គិតលុយ",
    tableBillsSubtitle: "ចុចបង្ហាញ QR គិតលុយតាមតុនីមួយៗ និងកត់ត្រាចំនួនកែវចូលក្រាហ្វពេលគិតលុយរួច",
    billEmptyText: "មិនទាន់មានការកុម្ម៉ង់សម្រាប់តុនេះទេ",
    billItemsCount: (n) => `${n} មុខ`,
    viewBillBtn: "បង្ហាញ QR គិតលុយ",
    clearTableBtn: "គិតលុយរួច",
    receiptEmptyModal: "គ្មានមុខទំនិញក្នុងវិក័យប័ត្រតុនេះទេ។",
    receiptTotalLabel: "តម្លៃសរុប",
    receiptQrScanLabel: "ស្កេន QR ដើម្បីបង់ប្រាក់",
    closeBtnLabel: "បិទ",
    cupSizeLabel: "ទំហំកែវ",
    tableNumberLabel: "លេខតុ",
    tableChipLabel: (tNum) => (!tNum || tNum === "takeaway") ? "ខ្ចប់" : `${tNum}`,
    tableOptionLabel: (tNum) => (!tNum || tNum === "takeaway") ? "ខ្ចប់" : `តុលេខ ${tNum}`,
    recipeLockedNotice: "មុខងារកុម្ម៉ង់ និងមើលគ្រឿងផ្សំត្រូវបានបិទដោយ Control Server។",
    ingHeading: "គ្រឿងផ្សំ និងរង្វាស់",
    sweetSliderTitle: "កម្រិតផ្អែម",
    sweetBadgeText: (pct) => {
      if (pct === 0) return "0% (មិនផ្អែម)";
      if (pct < 50) return `${pct}% (ផ្អែមតិចបំផុត)`;
      if (pct < 85) return `${pct}% (ផ្អែមតិច)`;
      if (pct <= 105) return `${pct}% (ធម្មតា)`;
      return `${pct}% (ផ្អែមខ្លាំង)`;
    },
    sweetPillLabel: (pct) => `កម្រិតផ្អែម ${pct}%`,
    sweetOrderBadge: (pct) => `ផ្អែម ${pct}%`,
    stepsHeading: "របៀបធ្វើ",
    tipPrefix: "គន្លឹះ៖",
    defaultTip: "ឆុង ឬលាយឱ្យមានរង្វាស់ច្បាស់លាស់ដើម្បីរក្សារសជាតិថេរ។",
    addOrderBtnLabel: "+ ដាក់ចូលកន្ត្រក",
    chartPanelTitle: "ក្រាហ្វចំនួនកែវប្រចាំថ្ងៃ",
    chartPanelSubtitle: "កត់ត្រាចំនួនកែវដែលបានគិតលុយរួចពីវិក័យប័ត្រតុដោយស្វ័យប្រវត្តិ",
    resetChartBtn: "សម្អាតក្រាហ្វ",
    resTodayCupsLabel: "ចំនួនកែវថ្ងៃនេះ",
    cupUnit: "កែវ",
    chartWdShort: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហ", "សុក្រ", "សៅរ៍"],
    toastFeatureLocked: "មុខងារនេះត្រូវបានបិទពី Control Server",
    toastAddedToCart: (name) => `បានដាក់ "${name}" ចូលកន្ត្រក`,
    toastCartEmpty: "កន្ត្រកនៅទំនេរ — សូមជ្រើសរើសមុខទំនិញជាមុន",
    toastConfirmedOrder: (cups) => `បានបញ្ជាក់ ${cups} កែវ ទៅ All Order`,
    toastMarkedDoneOnly: (name) => `បានបញ្ជាក់ «${name}» ធ្វើរួចរាល់`,
    toastChartCleared: "បានសម្អាតទិន្នន័យក្រាហ្វរួចរាល់",
    toastTableClearedAndChart: (label, cups) => `បានគិតលុយ ${label} រួច (+${cups} កែវ ក្នុងក្រាហ្វ)`,
    toastLangSwitched: "បានប្តូរទៅភាសាខ្មែរ",
    toastThemeDark: "បានប្តូរទៅមុខងារងងឹត",
    toastThemeLight: "បានប្តូរទៅមុខងារភ្លឺ",
    toastSettingsSynced: "បានធ្វើបច្ចុប្បន្នភាពការកំណត់ថ្មីពី Control Server"
  },
  en: {
    docTitle: "Coffee & Drinks",
    headerTitle: "Coffee & Drinks",
    langBadge: "ខ្មែរ",
    themeDark: "Dark",
    themeLight: "Light",
    lockBannerText: "Ordering, Ingredients, Chart & Orders are locked by Control Server",
    filterCoffee: () => "Coffee",
    filterDrinks: () => "Drinks",
    filterCart: () => "Cart",
    showingPrefix: "Showing",
    showingMid: "of",
    showingSuffix: "items",
    hotFull: "Hot",
    iceFull: "Ice",
    bothFull: "",
    navMenu: () => "Menu",
    navOrder: () => "All Order",
    navCalc: "Daily Chart",
    emptyTitle: "No items found",
    emptyDesc: "Try switching tabs or re-enable items on the Control Server.",
    cartTitle: "Cart",
    cartSubtitle: "Review items in your cart, then tap confirm to send to All Order",
    confirmCartBtn: "Confirm Order",
    cartEmptyTitle: "Cart is empty",
    cartEmptyDesc: "Tap any price or drink card in Menu to view the recipe and add to cart.",
    cartTotalCups: (cups, totalPriceFmt) => `Cart Total: ${cups} cups — ${totalPriceFmt}`,
    orderTitle: "All Order",
    orderSubtitle: "Confirmed orders list",
    backToCartBtn: "← Cart",
    orderEmptyTitle: "No confirmed orders yet",
    orderEmptyDesc: "Add items to Cart and tap confirm to send them to All Order.",
    orderStatusPending: "Pending",
    orderStatusDone: "Done",
    markDoneBtn: "Done",
    confirmDoneTitle: "Confirm Done?",
    confirmDoneDesc: "Mark this drink as prepared (cups will be recorded to Daily Chart upon payment).",
    cancelDoneBtn: "Cancel",
    acceptDoneBtn: "Confirm",
    orderEditBtn: "Edit",
    orderRemoveBtn: "Remove",
    orderDoneSummary: (doneCount, totalCount) => `Done: ${doneCount}/${totalCount} items`,
    tableBillsTitle: "Table Bills & Payment QR",
    tableBillsSubtitle: "Tap Show Payment QR per table and record cups to Daily Chart once paid",
    billEmptyText: "No orders for this table yet",
    billItemsCount: (n) => `${n} items`,
    viewBillBtn: "Show Payment QR",
    clearTableBtn: "Paid & Settle",
    receiptEmptyModal: "No items on this table bill.",
    receiptTotalLabel: "Total Amount",
    receiptQrScanLabel: "Scan QR to Pay",
    closeBtnLabel: "Close",
    cupSizeLabel: "Cup Size",
    tableNumberLabel: "Table",
    tableChipLabel: (tNum) => (!tNum || tNum === "takeaway") ? "Takeaway" : `${tNum}`,
    tableOptionLabel: (tNum) => (!tNum || tNum === "takeaway") ? "Takeaway" : `Table ${tNum}`,
    recipeLockedNotice: "Ordering and ingredients are locked by Control Server.",
    ingHeading: "Ingredients & Measurements",
    sweetSliderTitle: "Sweetness Level",
    sweetBadgeText: (pct) => {
      if (pct === 0) return "0% (Unsweetened)";
      if (pct < 50) return `${pct}% (Quarter Sweet)`;
      if (pct < 85) return `${pct}% (Less Sweet)`;
      if (pct <= 105) return `${pct}% (Normal)`;
      return `${pct}% (Extra Sweet)`;
    },
    sweetPillLabel: (pct) => `Sweetness ${pct}%`,
    sweetOrderBadge: (pct) => `Sweet ${pct}%`,
    stepsHeading: "Instructions",
    tipPrefix: "Tip:",
    defaultTip: "Measure consistently to keep balanced flavor in every cup.",
    addOrderBtnLabel: "+ Add to Cart",
    chartPanelTitle: "Daily Cups Chart",
    chartPanelSubtitle: "Automatically records cups once paid from table bills",
    resetChartBtn: "Clear Chart",
    resTodayCupsLabel: "Today Cups",
    cupUnit: "cups",
    chartWdShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    toastFeatureLocked: "This feature is locked by Control Server",
    toastAddedToCart: (name) => `Added "${name}" to Cart`,
    toastCartEmpty: "Cart is empty — add an item first",
    toastConfirmedOrder: (cups) => `Confirmed ${cups} cups into All Order`,
    toastMarkedDoneOnly: (name) => `Marked "${name}" as Done`,
    toastChartCleared: "Daily chart data cleared",
    toastTableClearedAndChart: (label, cups) => `Paid ${label} (+${cups} cups recorded in chart)`,
    toastLangSwitched: "Switched to English",
    toastThemeDark: "Switched to Dark Mode",
    toastThemeLight: "Switched to Light Mode",
    toastSettingsSynced: "Settings updated from Control Server"
  }
};

let appSettings = {
  shopName: "Coffee & Drinks",
  receiptFooter: "សូមអរគុណ! Thank you!",
  qrEnabled: true,
  qrImageDataUrl: "",
  currency: "USD",
  khrRate: 4000,
  tableCount: 5,
  enableTakeaway: true,
  lockMenuAndData: false,
  darkMode: false,
  lang: "km",
  priceOverrides: {},
  disabledItems: {}
};

let cartItems = [];
let orders = [];
let dailyChartLog = {};
let pendingDoneOrderId = null;
let activeReceiptTableNo = null;

let state = {
  lang: "km",
  theme: "light",
  tab: "all",
  filter: "coffee",
  activeRecipeId: null,
  editingCartItemId: null,
  activeMode: "ice",
  cupSize: "16oz",
  tableNo: "1",
  sweetPct: 100
};

const CUP_SIZE_MULTIPLIER = { "12oz": 0.8, "16oz": 1.0, "22oz": 1.3 };
const SWEETENER_KEYWORDS = [
  "ផ្អែម", "ទឹកដោះគោខាប់ផ្អែម", "សេរ៉ូ", "សូកូឡា", "ទឹកឃ្មុំ",
  "puree", "jam", "sweet", "syrup", "condensed milk", "sweetened condensed",
  "chocolate", "caramel", "vanilla", "honey"
];

function t() {
  return UI_STRINGS[state.lang] || UI_STRINGS.km;
}

async function syncOperationalDataToServer() {
  try {
    await fetch('/api/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartItems, orders, dailyChartLog })
    });
  } catch (err) {
    console.warn('Sync error:', err);
  }
}

function applyServerStore(store, isLiveUpdate = false) {
  if (!store) return;
  const prevSettingsJson = JSON.stringify(appSettings);
  if (store.settings) {
    appSettings = Object.assign({}, appSettings, store.settings);
    if (store.settings.lang) state.lang = store.settings.lang;
    if (typeof store.settings.darkMode === 'boolean') {
      state.theme = store.settings.darkMode ? 'dark' : 'light';
    }
  }
  if (Array.isArray(store.cartItems)) cartItems = store.cartItems;
  if (Array.isArray(store.orders)) orders = store.orders;
  if (store.dailyChartLog) dailyChartLog = store.dailyChartLog;

  applyStaticTranslations();
  refreshActiveView();

  if (state.activeRecipeId && document.getElementById("recipeModal").classList.contains("open")) {
    openRecipeModal(state.activeRecipeId, state.activeMode, state.sweetPct, state.cupSize, state.tableNo, state.editingCartItemId);
  }
  if (activeReceiptTableNo && document.getElementById("receiptModal").classList.contains("open")) {
    openReceiptModal(activeReceiptTableNo);
  }

  if (isLiveUpdate && prevSettingsJson !== JSON.stringify(appSettings)) {
    showToast(t().toastSettingsSynced);
  }
}

function initServerRealtimeSync() {
  const badge = document.getElementById('serverSyncBadge');
  fetch('/api/state')
    .then(r => r.json())
    .then(data => {
      if (data && data.store) applyServerStore(data.store, false);
    })
    .catch(() => {});

  const evtSource = new EventSource('/api/events');
  evtSource.onopen = () => {
    if (badge) {
      badge.textContent = '● Live';
      badge.classList.remove('offline');
    }
  };
  evtSource.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data);
      if (msg.store) {
        applyServerStore(msg.store, msg.type === 'SYNC_STATE');
      }
    } catch {}
  };
  evtSource.onerror = () => {
    if (badge) {
      badge.textContent = '● Offline';
      badge.classList.add('offline');
    }
  };
}

function renderQrGraphicHtml(dataUrl) {
  if (dataUrl && typeof dataUrl === "string" && dataUrl.startsWith("data:image/")) {
    return `<img src="${dataUrl}" alt="Payment QR Code" />`;
  }
  return DEFAULT_QR_SVG;
}

function isMenuLocked() {
  return Boolean(appSettings.lockMenuAndData);
}

function applyLockStateUI() {
  const locked = isMenuLocked();
  const s = t();
  document.body.classList.toggle("menu-locked", locked);

  const bannerText = document.getElementById("lockBannerText");
  if (bannerText) bannerText.textContent = s.lockBannerText;

  const cartPill = document.getElementById("filterCartPill");
  if (cartPill) cartPill.disabled = locked;

  const detailsBlock = document.getElementById("recipeDetailsBlock");
  const lockedNotice = document.getElementById("recipeLockedNotice");
  if (detailsBlock) detailsBlock.classList.toggle("locked-hidden", locked);
  if (lockedNotice) lockedNotice.textContent = s.recipeLockedNotice;

  if (locked && (state.tab === "cart" || state.tab === "order" || state.tab === "calc")) {
    switchTab("all");
  }
}

function getTableOptions() {
  const count = Math.min(15, Math.max(1, parseInt(appSettings.tableCount, 10) || 5));
  const list = [];
  for (let i = 1; i <= count; i++) list.push(String(i));
  if (appSettings.enableTakeaway !== false) list.push("takeaway");
  return list;
}

function getLocalDateKey(dateObj = new Date()) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatChartDayParts(dateObj) {
  const s = t();
  return {
    wd: s.chartWdShort[dateObj.getDay()] || "",
    dt: `${dateObj.getDate()}/${dateObj.getMonth() + 1}`
  };
}

function recordPaidCupsToChart(cups) {
  const added = Number(cups) || 0;
  if (added <= 0) return;
  const key = getLocalDateKey();
  const current = dailyChartLog[key] || { cups: 0 };
  dailyChartLog[key] = { cups: (current.cups || 0) + added };
}

function normalizeTableNo(val) {
  const opts = getTableOptions();
  const str = String(val);
  return opts.includes(str) ? str : (opts[0] || "1");
}

function isItemDisabled(recipeId) {
  return Boolean(appSettings.disabledItems && appSettings.disabledItems[recipeId] === true);
}

function getRecipePrice(r) {
  if (!r) return 1.75;
  if (appSettings.priceOverrides && typeof appSettings.priceOverrides[r.id] === "number" && !isNaN(appSettings.priceOverrides[r.id])) {
    return Math.max(0, appSettings.priceOverrides[r.id]);
  }
  return Math.max(0, typeof r.price === "number" ? r.price : 1.75);
}

function formatPrice(amountUsd) {
  const num = Number(amountUsd) || 0;
  if (appSettings.currency === "KHR") {
    const rate = Number(appSettings.khrRate) || 4000;
    const riel = Math.round((num * rate) / 100) * 100;
    return `${riel.toLocaleString()} ៛`;
  }
  return `$${num.toFixed(2)}`;
}

function isSweetenerIngredient(ing) {
  if (!ing) return false;
  if (ing.isSweet === true || ing.isSugar === true) return true;
  const text = `${ing.nameKm || ""} ${ing.nameEn || ""} ${ing.name || ""}`.toLowerCase();
  if (text.includes("មិនផ្អែម") || text.includes("evaporated")) return false;
  return SWEETENER_KEYWORDS.some((kw) => text.includes(kw));
}

function getRecipeSection(r) {
  if (r && r.section) return r.section;
  if (r && ["drinks", "soda", "smoothie", "milk-drink", "tea", "juice"].includes(r.category)) return "drinks";
  return "coffee";
}

function supportsTemp(recipe, temp) { return Boolean(recipe && recipe.variants && recipe.variants[temp]); }
function getDefaultVariantKey(recipe) { return supportsTemp(recipe, "ice") ? "ice" : "hot"; }
function getActiveVariant(recipe, mode = state.activeMode) {
  if (!recipe || !recipe.variants) return null;
  return recipe.variants[mode] || recipe.variants.ice || recipe.variants.hot;
}

function getCardBadgeInfo(recipe) {
  const hasHot = supportsTemp(recipe, "hot");
  const hasIce = supportsTemp(recipe, "ice");
  if (hasHot && hasIce) return { cls: "temp-both", label: t().bothFull };
  if (hasHot) return { cls: "temp-hot", label: t().hotFull };
  return { cls: "temp-ice", label: t().iceFull };
}

function getRecipeNamePrimary(r) { return state.lang === "en" ? (r.nameEn || r.nameKm) : (r.nameKm || r.nameEn); }
function getRecipeDesc(r, variant) {
  const desc = state.lang === "en" ? (r.descEn || r.descKm || "") : (r.descKm || r.descEn || "");
  if (desc) return desc;
  return variant ? (state.lang === "en" ? (variant.descEn || variant.descKm || "") : (variant.descKm || variant.descEn || "")) : "";
}
function getRecipeSteps(variant) {
  if (!variant) return [];
  return state.lang === "en" ? (variant.stepsEn || variant.stepsKm || []) : (variant.stepsKm || variant.stepsEn || []);
}
function getRecipeTip(variant) {
  if (!variant) return t().defaultTip;
  return state.lang === "en" ? (variant.tipEn || variant.tipKm || t().defaultTip) : (variant.tipKm || variant.tipEn || t().defaultTip);
}
function getIngredientName(ing) {
  return state.lang === "en" ? (ing.nameEn || ing.nameKm || ing.name || "") : (ing.nameKm || ing.nameEn || ing.name || "");
}
function getTotalCartCups() { return cartItems.reduce((sum, item) => sum + (item.qty || 1), 0); }
function getTotalCartPrice() {
  return cartItems.reduce((sum, item) => {
    const r = DEFAULT_RECIPES.find((x) => x.id === item.recipeId);
    return sum + (r ? getRecipePrice(r) : 1.75) * (item.qty || 1);
  }, 0);
}

function applyThemeUI() {
  const isDark = state.theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  const s = t();
  const labelEl = document.getElementById("themeBtnLabel");
  const iconSvg = document.getElementById("themeIconSvg");
  if (labelEl) labelEl.textContent = isDark ? s.themeLight : s.themeDark;
  if (iconSvg) {
    iconSvg.innerHTML = isDark
      ? `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`
      : `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  }
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyThemeUI();
  showToast(state.theme === "dark" ? t().toastThemeDark : t().toastThemeLight);
}

function renderTablePillGroup() {
  const s = t();
  const opts = getTableOptions();
  const activeTable = normalizeTableNo(state.tableNo);
  state.tableNo = activeTable;

  const modalGroup = document.getElementById("tableNumberGroup");
  if (modalGroup) {
    modalGroup.innerHTML = opts.map(
      (num) => `<button type="button" class="seg-btn ${num === activeTable ? "active" : ""}" data-table="${num}">${escapeHtml(s.tableChipLabel(num))}</button>`
    ).join("");
    modalGroup.querySelectorAll(".seg-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.tableNo = normalizeTableNo(btn.dataset.table);
        syncTableSelectionUI();
      });
    });
  }
}

function syncTableSelectionUI() {
  const activeTable = normalizeTableNo(state.tableNo);
  document.querySelectorAll("#tableNumberGroup .seg-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.table === activeTable);
  });
}

function updateSweetSliderUI() {
  const s = t();
  const pct = state.sweetPct;
  const slider = document.getElementById("sweetRangeInput");
  const badge = document.getElementById("sweetPctBadge");
  const title = document.getElementById("sweetSliderTitle");
  if (title) title.textContent = s.sweetSliderTitle;
  if (slider) {
    slider.value = pct;
    const fillPct = Math.min(100, Math.max(0, (pct / 150) * 100));
    slider.style.background = `linear-gradient(90deg, #C67D3B 0%, #C67D3B ${fillPct}%, rgba(118, 118, 128, 0.2) ${fillPct}%, rgba(118, 118, 128, 0.2) 100%)`;
  }
  if (badge) badge.textContent = s.sweetBadgeText(pct);
  document.querySelectorAll("#sweetPresetsRow .sweet-preset-btn").forEach((btn) => {
    btn.classList.toggle("active", parseInt(btn.dataset.sweet, 10) === pct);
  });
}

function applyStaticTranslations() {
  const s = t();
  const shopTitle = (appSettings.shopName && appSettings.shopName.trim()) ? appSettings.shopName.trim() : s.headerTitle;
  document.documentElement.lang = state.lang;
  document.title = `${shopTitle} — POS`;
  document.getElementById("mainHeaderTitle").textContent = shopTitle;
  document.getElementById("langBadgeText").textContent = s.langBadge;
  applyThemeUI();

  document.getElementById("navAllLabel").textContent = s.navMenu();
  document.getElementById("navOrderLabel").textContent = s.navOrder();
  document.getElementById("navCalcLabel").textContent = s.navCalc;

  document.querySelectorAll("#tempFilterGroup .temp-pill").forEach((btn) => {
    if (btn.dataset.filter === "coffee") btn.textContent = s.filterCoffee();
    if (btn.dataset.filter === "drinks") btn.textContent = s.filterDrinks();
    if (btn.dataset.filter === "cart") btn.textContent = s.filterCart();
  });

  document.getElementById("cartTitle").textContent = s.cartTitle;
  document.getElementById("cartSubtitle").textContent = s.cartSubtitle;
  document.getElementById("confirmCartToOrderBtn").textContent = s.confirmCartBtn;

  document.getElementById("orderTitle").textContent = s.orderTitle;
  document.getElementById("orderSubtitle").textContent = s.orderSubtitle;
  document.getElementById("backToCartBtn").textContent = s.backToCartBtn;
  document.getElementById("tableBillsTitle").textContent = s.tableBillsTitle;
  document.getElementById("tableBillsSubtitle").textContent = s.tableBillsSubtitle;

  document.getElementById("confirmDoneTitle").textContent = s.confirmDoneTitle;
  document.getElementById("confirmDoneDesc").textContent = s.confirmDoneDesc;
  document.getElementById("cancelDoneBtn").textContent = s.cancelDoneBtn;
  document.getElementById("acceptDoneBtn").textContent = s.acceptDoneBtn;

  document.getElementById("closeReceiptBtn").textContent = s.closeBtnLabel;
  document.getElementById("clearTableBillBtn").textContent = s.clearTableBtn;

  renderTablePillGroup();

  document.getElementById("modeHotBtn").textContent = s.hotFull;
  document.getElementById("modeIceBtn").textContent = s.iceFull;
  document.getElementById("modalAddOrderBtn").textContent = s.addOrderBtnLabel;

  document.getElementById("cupSizeLabel").textContent = s.cupSizeLabel;
  document.getElementById("tableNumberLabel").textContent = s.tableNumberLabel;
  document.getElementById("ingSectionHeading").textContent = s.ingHeading;
  document.getElementById("stepsSectionHeading").textContent = s.stepsHeading;

  updateSweetSliderUI();

  document.getElementById("chartPanelTitle").textContent = s.chartPanelTitle;
  document.getElementById("chartPanelSubtitle").textContent = s.chartPanelSubtitle;
  document.getElementById("resetChartBtn").textContent = s.resetChartBtn;
  document.getElementById("resTodayCupsLabel").textContent = s.resTodayCupsLabel;

  applyLockStateUI();
}

function toggleLanguage() {
  state.lang = state.lang === "km" ? "en" : "km";
  applyStaticTranslations();
  refreshActiveView();
  if (state.activeRecipeId && document.getElementById("recipeModal").classList.contains("open")) {
    openRecipeModal(state.activeRecipeId, state.activeMode, state.sweetPct, state.cupSize, state.tableNo, state.editingCartItemId);
  }
  if (activeReceiptTableNo && document.getElementById("receiptModal").classList.contains("open")) {
    openReceiptModal(activeReceiptTableNo);
  }
  showToast(t().toastLangSwitched);
}

function refreshActiveView() {
  if (state.tab === "cart") renderCart();
  else if (state.tab === "order") renderOrders();
  else if (state.tab === "calc") renderDailyChart();
  else renderMenu();
}

function getFilteredRecipes() {
  return DEFAULT_RECIPES.filter((r) => {
    if (isItemDisabled(r.id)) return false;
    if (state.filter === "drinks") return getRecipeSection(r) === "drinks";
    return getRecipeSection(r) === "coffee";
  });
}

function addToCart(recipeId, mode, cupSize = "16oz", qtyToAdd = 1, sweetPct = 100, tableNo = "1", replaceCartItemId = null) {
  if (isMenuLocked()) return showToast(t().toastFeatureLocked);
  const s = t();
  const recipe = DEFAULT_RECIPES.find((r) => r.id === recipeId);
  if (!recipe) return;

  const resolvedMode = supportsTemp(recipe, mode) ? mode : getDefaultVariantKey(recipe);
  const resolvedTable = normalizeTableNo(tableNo);

  if (replaceCartItemId) {
    cartItems = cartItems.filter((item) => item.id !== replaceCartItemId);
  }

  const existing = cartItems.find(
    (o) =>
      o.recipeId === recipeId &&
      o.mode === resolvedMode &&
      o.cupSize === cupSize &&
      (o.sweetPct ?? 100) === sweetPct &&
      normalizeTableNo(o.tableNo) === resolvedTable
  );

  if (existing) {
    existing.qty = (existing.qty || 1) + qtyToAdd;
  } else {
    cartItems.unshift({
      id: "cart_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
      recipeId,
      mode: resolvedMode,
      cupSize,
      sweetPct,
      tableNo: resolvedTable,
      qty: qtyToAdd,
      createdAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });
  }

  syncOperationalDataToServer();
  if (state.tab === "cart") renderCart();
  const modeLabel = resolvedMode === "hot" ? s.hotFull : s.iceFull;
  const tableLabel = s.tableOptionLabel(resolvedTable);
  showToast(s.toastAddedToCart(`${getRecipeNamePrimary(recipe)} (${tableLabel}, ${modeLabel}, ${s.sweetOrderBadge(sweetPct)})`));
}

function confirmCartToOrder() {
  if (isMenuLocked()) return showToast(t().toastFeatureLocked);
  const s = t();
  if (cartItems.length === 0) return showToast(s.toastCartEmpty);

  const addedCups = getTotalCartCups();
  const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  cartItems.forEach((cItem) => {
    const cTable = normalizeTableNo(cItem.tableNo);
    const cSweet = cItem.sweetPct ?? 100;
    const match = orders.find(
      (o) =>
        o.recipeId === cItem.recipeId &&
        o.mode === cItem.mode &&
        o.cupSize === cItem.cupSize &&
        (o.sweetPct ?? 100) === cSweet &&
        normalizeTableNo(o.tableNo) === cTable &&
        !o.done
    );
    if (match) {
      match.qty = (match.qty || 1) + (cItem.qty || 1);
    } else {
      orders.unshift({
        id: "ord_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
        recipeId: cItem.recipeId,
        mode: cItem.mode,
        cupSize: cItem.cupSize,
        sweetPct: cSweet,
        tableNo: cTable,
        qty: cItem.qty || 1,
        done: false,
        createdAt: nowTime
      });
    }
  });

  cartItems = [];
  syncOperationalDataToServer();
  showToast(s.toastConfirmedOrder(addedCups));
  switchTab("order");
}

function openConfirmDoneModal(orderId) {
  const ord = orders.find((o) => o.id === orderId);
  if (!ord || ord.done) return;
  const s = t();
  const recipe = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
  const name = recipe ? getRecipeNamePrimary(recipe) : ord.recipeId;
  const tableLabel = s.tableOptionLabel(normalizeTableNo(ord.tableNo));
  pendingDoneOrderId = orderId;
  document.getElementById("confirmDoneItemText").textContent = `${tableLabel} • ${name}`;
  document.getElementById("confirmDoneModal").classList.add("open");
}

function closeConfirmDoneModal() {
  pendingDoneOrderId = null;
  document.getElementById("confirmDoneModal").classList.remove("open");
}

function acceptConfirmDone() {
  if (!pendingDoneOrderId) return;
  const ord = orders.find((o) => o.id === pendingDoneOrderId);
  if (ord && !ord.done) {
    ord.done = true;
    const recipe = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
    const name = recipe ? getRecipeNamePrimary(recipe) : ord.recipeId;
    syncOperationalDataToServer();
    renderOrders();
    showToast(t().toastMarkedDoneOnly(name));
  }
  closeConfirmDoneModal();
}

function renderMenu() {
  const s = t();
  const grid = document.getElementById("menuGrid");
  const list = getFilteredRecipes();
  const sectionTotal = DEFAULT_RECIPES.filter((r) => getRecipeSection(r) === state.filter && !isItemDisabled(r.id)).length;

  document.getElementById("summaryCountText").innerHTML =
    `${s.showingPrefix} <strong>${list.length}</strong> ${s.showingMid} <span>${sectionTotal}</span> ${s.showingSuffix}`;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3 style="margin:0 0 6px;">${escapeHtml(s.emptyTitle)}</h3>
        <p style="margin:0; font-size:0.86rem; color:var(--text-secondary);">${escapeHtml(s.emptyDesc)}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map((r) => {
    const defaultMode = getDefaultVariantKey(r);
    const badgeInfo = getCardBadgeInfo(r);
    const defaultVar = getActiveVariant(r, defaultMode);
    const primaryName = getRecipeNamePrimary(r);
    const priceText = formatPrice(getRecipePrice(r));
    const modeTagHtml = badgeInfo.label ? `<span class="drink-tag ${badgeInfo.cls}">${escapeHtml(badgeInfo.label)}</span>` : "";

    return `
      <article class="drink-card" data-id="${r.id}">
        <div class="drink-info">
          <div class="drink-top-meta">${modeTagHtml}</div>
          <h3 class="drink-name-main">${escapeHtml(primaryName)}</h3>
          <p class="drink-desc">${escapeHtml(getRecipeDesc(r, defaultVar))}</p>
        </div>
        <button type="button" class="price-pill-btn" data-price-id="${r.id}" title="${escapeHtml(primaryName)}" aria-label="${escapeHtml(priceText)}">
          <span>${escapeHtml(priceText)}</span>
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".drink-card").forEach((card) => {
    card.addEventListener("click", () => {
      const recipe = DEFAULT_RECIPES.find((x) => x.id === card.dataset.id);
      openRecipeModal(card.dataset.id, recipe ? getDefaultVariantKey(recipe) : "ice", 100);
    });
  });

  grid.querySelectorAll(".price-pill-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const recipe = DEFAULT_RECIPES.find((x) => x.id === btn.dataset.priceId);
      openRecipeModal(btn.dataset.priceId, recipe ? getDefaultVariantKey(recipe) : "ice", 100);
    });
  });
}

function renderCart() {
  const s = t();
  const listEl = document.getElementById("cartList");

  if (cartItems.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <h3 style="margin:0 0 6px;">${escapeHtml(s.cartEmptyTitle)}</h3>
        <p style="margin:0; font-size:0.86rem; color:var(--text-secondary);">${escapeHtml(s.cartEmptyDesc)}</p>
      </div>
    `;
  } else {
    listEl.innerHTML = cartItems.map((item) => {
      const recipe = DEFAULT_RECIPES.find((r) => r.id === item.recipeId);
      const name = recipe ? getRecipeNamePrimary(recipe) : item.recipeId;
      const unitPrice = recipe ? getRecipePrice(recipe) : 1.75;
      const modeLabel = item.mode === "hot" ? s.hotFull : s.iceFull;
      const sweetPct = item.sweetPct ?? 100;
      const tableLabel = s.tableOptionLabel(normalizeTableNo(item.tableNo));
      const qty = item.qty || 1;
      const lineTotal = formatPrice(unitPrice * qty);

      return `
        <div class="order-row-card" data-cart-id="${item.id}">
          <div class="order-row-main">
            <h3 class="order-row-title">
              <span class="drink-tag table-tag">${escapeHtml(tableLabel)}</span>
              <span class="order-row-name">${escapeHtml(name)}</span>
              <span class="drink-tag sweet-tag">${escapeHtml(lineTotal)}</span>
              <span class="drink-tag ${item.mode === "hot" ? "temp-hot" : "temp-ice"}">${escapeHtml(modeLabel)}</span>
              <span class="drink-tag">${escapeHtml(item.cupSize || "16oz")}</span>
              <span class="drink-tag sweet-tag">${escapeHtml(s.sweetOrderBadge(sweetPct))}</span>
            </h3>
          </div>
          <div class="order-row-actions">
            <button type="button" class="icon-btn small-action-btn" data-action="edit">${escapeHtml(s.orderEditBtn)}</button>
            <button type="button" class="icon-btn small-action-btn" data-action="remove" style="color:#B81D37;">${escapeHtml(s.orderRemoveBtn)}</button>
          </div>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll(".order-row-card").forEach((row) => {
      const cId = row.dataset.cartId;
      row.querySelector('[data-action="edit"]').addEventListener("click", () => {
        const target = cartItems.find((o) => o.id === cId);
        if (!target) return;
        openRecipeModal(target.recipeId, target.mode || "ice", target.sweetPct ?? 100, target.cupSize || "16oz", normalizeTableNo(target.tableNo), target.id);
      });
      row.querySelector('[data-action="remove"]').addEventListener("click", () => {
        cartItems = cartItems.filter((o) => o.id !== cId);
        syncOperationalDataToServer();
        renderCart();
      });
    });
  }

  document.getElementById("cartTotalCupsText").textContent = s.cartTotalCups(getTotalCartCups(), formatPrice(getTotalCartPrice()));
}

function renderTableBills() {
  const s = t();
  const gridEl = document.getElementById("tableBillsGrid");
  const tableList = getTableOptions();

  gridEl.innerHTML = tableList.map((tNum) => {
    const tableOrders = orders.filter((o) => normalizeTableNo(o.tableNo) === tNum);
    const totalAmt = tableOrders.reduce((sum, ord) => {
      const rec = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
      return sum + (rec ? getRecipePrice(rec) : 1.75) * (ord.qty || 1);
    }, 0);

    const previewHtml = tableOrders.length === 0
      ? `<div style="font-size:0.82rem; color:var(--text-muted); padding:6px 0;">${escapeHtml(s.billEmptyText)}</div>`
      : tableOrders.map((ord) => {
          const rec = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
          const recName = rec ? getRecipeNamePrimary(rec) : ord.recipeId;
          const lineAmt = (rec ? getRecipePrice(rec) : 1.75) * (ord.qty || 1);
          return `
            <div class="bill-item-line">
              <span>${escapeHtml(recName)} (${escapeHtml(ord.cupSize || "16oz")})</span>
              <strong>${escapeHtml(formatPrice(lineAmt))}</strong>
            </div>
          `;
        }).join("");

    return `
      <div class="bill-card" data-bill-table="${tNum}">
        <div>
          <div class="bill-card-header">
            <span class="bill-table-name">${escapeHtml(s.tableOptionLabel(tNum))}</span>
            <span class="bill-total-amount">${escapeHtml(formatPrice(totalAmt))}</span>
          </div>
          <div class="bill-items-preview">${previewHtml}</div>
        </div>
        <div class="bill-card-footer">
          <span style="font-size:0.76rem; color:var(--text-muted); font-weight:700;">${escapeHtml(s.billItemsCount(tableOrders.length))}</span>
          <button type="button" class="icon-btn small-action-btn ${tableOrders.length > 0 ? "qr-pay-btn" : ""}" data-action="open-bill">${escapeHtml(s.viewBillBtn)}</button>
        </div>
      </div>
    `;
  }).join("");

  gridEl.querySelectorAll('[data-action="open-bill"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".bill-card");
      if (card && card.dataset.billTable) openReceiptModal(card.dataset.billTable);
    });
  });
}

function openReceiptModal(tNum) {
  const s = t();
  const normalized = normalizeTableNo(tNum);
  activeReceiptTableNo = normalized;
  const tableOrders = orders.filter((o) => normalizeTableNo(o.tableNo) === normalized);
  const label = s.tableOptionLabel(normalized);
  const shopTitle = (appSettings.shopName && appSettings.shopName.trim()) ? appSettings.shopName.trim() : s.headerTitle;

  document.getElementById("receiptModalTitle").textContent = `${shopTitle} • ${label}`;
  document.getElementById("receiptModalSub").textContent = s.billItemsCount(tableOrders.length);

  const container = document.getElementById("receiptLinesContainer");
  const clearBtn = document.getElementById("clearTableBillBtn");

  if (tableOrders.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:14px 0; font-size:0.86rem;">${escapeHtml(s.receiptEmptyModal)}</div>`;
    if (clearBtn) clearBtn.disabled = true;
  } else {
    if (clearBtn) clearBtn.disabled = false;
    let totalSum = 0;
    const linesHtml = tableOrders.map((ord) => {
      const rec = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
      const recName = rec ? getRecipeNamePrimary(rec) : ord.recipeId;
      const lineAmt = (rec ? getRecipePrice(rec) : 1.75) * (ord.qty || 1);
      totalSum += lineAmt;
      const modeLabel = ord.mode === "hot" ? s.hotFull : s.iceFull;
      return `
        <div class="receipt-line">
          <div>
            <div style="font-weight:700;">${escapeHtml(recName)}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(modeLabel)} • ${escapeHtml(ord.cupSize || "16oz")} • ${escapeHtml(s.sweetOrderBadge(ord.sweetPct ?? 100))}</div>
          </div>
          <strong>${escapeHtml(formatPrice(lineAmt))}</strong>
        </div>
      `;
    }).join("");

    const formattedTotal = formatPrice(totalSum);
    const qrSectionHtml = appSettings.qrEnabled !== false
      ? `
        <div class="receipt-qr-section">
          <div class="receipt-qr-title">${escapeHtml(s.receiptQrScanLabel)}</div>
          <div class="receipt-qr-frame">${renderQrGraphicHtml(appSettings.qrImageDataUrl)}</div>
          <div class="receipt-qr-amount-chip">${escapeHtml(formattedTotal)}</div>
        </div>
      `
      : "";

    const footerNoteHtml = appSettings.receiptFooter && appSettings.receiptFooter.trim()
      ? `<div class="receipt-footer-note">${escapeHtml(appSettings.receiptFooter.trim())}</div>`
      : "";

    container.innerHTML = `
      ${linesHtml}
      <div class="receipt-total-row">
        <span>${escapeHtml(s.receiptTotalLabel)}</span>
        <span>${escapeHtml(formattedTotal)}</span>
      </div>
      ${qrSectionHtml}
      ${footerNoteHtml}
    `;
  }

  document.getElementById("receiptModal").classList.add("open");
}

function closeReceiptModal() {
  activeReceiptTableNo = null;
  document.getElementById("receiptModal").classList.remove("open");
}

function clearActiveTableBill() {
  if (!activeReceiptTableNo) return;
  const s = t();
  const label = s.tableOptionLabel(activeReceiptTableNo);
  const tableOrders = orders.filter((o) => normalizeTableNo(o.tableNo) === activeReceiptTableNo);
  const paidCups = tableOrders.reduce((sum, ord) => sum + (ord.qty || 1), 0);

  if (paidCups > 0) recordPaidCupsToChart(paidCups);

  orders = orders.filter((o) => normalizeTableNo(o.tableNo) !== activeReceiptTableNo);
  syncOperationalDataToServer();
  closeReceiptModal();
  renderOrders();
  showToast(s.toastTableClearedAndChart(label, paidCups));
}

function renderOrders() {
  const s = t();
  const listEl = document.getElementById("orderList");

  if (orders.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <h3 style="margin:0 0 6px;">${escapeHtml(s.orderEmptyTitle)}</h3>
        <p style="margin:0; font-size:0.86rem; color:var(--text-secondary);">${escapeHtml(s.orderEmptyDesc)}</p>
      </div>
    `;
  } else {
    listEl.innerHTML = orders.map((ord) => {
      const recipe = DEFAULT_RECIPES.find((r) => r.id === ord.recipeId);
      const name = recipe ? getRecipeNamePrimary(recipe) : ord.recipeId;
      const unitPrice = recipe ? getRecipePrice(recipe) : 1.75;
      const modeLabel = ord.mode === "hot" ? s.hotFull : s.iceFull;
      const sweetPct = ord.sweetPct ?? 100;
      const tableLabel = s.tableOptionLabel(normalizeTableNo(ord.tableNo));
      const statusCls = ord.done ? "done" : "pending";
      const statusText = ord.done ? s.orderStatusDone : s.orderStatusPending;
      const qty = ord.qty || 1;
      const lineTotal = formatPrice(unitPrice * qty);

      const doneBtnHtml = !ord.done
        ? `<button type="button" class="icon-btn done-action-btn" data-action="mark-done">${escapeHtml(s.markDoneBtn)}</button>`
        : "";

      return `
        <div class="order-row-card clean-order-card ${ord.done ? "done" : ""}" data-order-id="${ord.id}">
          <div class="order-card-top">
            <div class="order-card-badges">
              <span class="drink-tag table-tag">${escapeHtml(tableLabel)}</span>
              <span class="drink-tag ${ord.mode === "hot" ? "temp-hot" : "temp-ice"}">${escapeHtml(modeLabel)}</span>
              <span class="drink-tag">${escapeHtml(ord.cupSize || "16oz")}</span>
              <span class="drink-tag sweet-tag">${escapeHtml(s.sweetOrderBadge(sweetPct))}</span>
              <span class="order-status-badge ${statusCls}">${escapeHtml(statusText)}</span>
            </div>
            <span class="order-card-time">${escapeHtml(ord.createdAt || "")}</span>
          </div>
          <div class="order-card-title-row">
            <h3 class="order-row-title">${escapeHtml(name)}</h3>
            <div class="order-card-right-meta">
              <span class="drink-tag sweet-tag">${escapeHtml(lineTotal)}</span>
              ${doneBtnHtml}
            </div>
          </div>
        </div>
      `;
    }).join("");

    listEl.querySelectorAll('[data-action="mark-done"]').forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const card = btn.closest(".order-row-card");
        if (card && card.dataset.orderId) openConfirmDoneModal(card.dataset.orderId);
      });
    });
  }

  const doneCount = orders.filter((o) => o.done).length;
  document.getElementById("orderDoneCountText").textContent = s.orderDoneSummary(doneCount, orders.length);
  renderTableBills();
}

function renderDailyChart() {
  const s = t();
  const todayKey = getLocalDateKey();
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const dt = new Date();
    dt.setDate(dt.getDate() - i);
    const key = getLocalDateKey(dt);
    const entry = dailyChartLog[key] || { cups: 0 };
    const dayParts = formatChartDayParts(dt);
    days.push({ key, wd: dayParts.wd, dt: dayParts.dt, cups: entry.cups || 0 });
  }

  const todayEntry = dailyChartLog[todayKey] || { cups: 0 };
  document.getElementById("resTodayCups").textContent = `${todayEntry.cups} ${s.cupUnit}`;

  const maxCups = Math.max(1, ...days.map((d) => d.cups));
  const barsWrap = document.getElementById("dailyChartBars");
  barsWrap.innerHTML = days.map((d) => {
    const heightPct = d.cups > 0 ? Math.max(12, Math.round((d.cups / maxCups) * 100)) : 0;
    return `
      <div class="chart-col">
        <span class="chart-val-label">${d.cups}</span>
        <div class="chart-bar-track">
          <div class="chart-bar-fill" style="height: ${heightPct}%;"></div>
        </div>
        <div class="chart-day-label">
          <span class="chart-day-wd">${escapeHtml(d.wd)}</span>
          <span class="chart-day-dt">${escapeHtml(d.dt)}</span>
        </div>
      </div>
    `;
  }).join("");
}

function syncTopFilterPills() {
  document.querySelectorAll("#tempFilterGroup .temp-pill").forEach((btn) => {
    if (state.tab === "cart") btn.classList.toggle("active", btn.dataset.filter === "cart");
    else if (state.tab === "all") btn.classList.toggle("active", btn.dataset.filter === state.filter);
    else btn.classList.remove("active");
  });
}

function switchTab(tabName) {
  if (isMenuLocked() && (tabName === "cart" || tabName === "order" || tabName === "calc")) {
    return showToast(t().toastFeatureLocked);
  }
  state.tab = tabName;
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
  syncTopFilterPills();

  const isCart = tabName === "cart";
  const isOrder = tabName === "order";
  const isCalc = tabName === "calc";
  document.getElementById("menuView").style.display = (!isCart && !isOrder && !isCalc) ? "block" : "none";
  document.getElementById("cartView").style.display = isCart ? "block" : "none";
  document.getElementById("orderView").style.display = isOrder ? "block" : "none";
  document.getElementById("calculatorView").style.display = isCalc ? "block" : "none";
  document.getElementById("summaryStrip").style.display = (!isCart && !isOrder && !isCalc) ? "flex" : "none";

  refreshActiveView();
}

function formatScaledAmount(baseAmt, unit, isSweet = false) {
  if (typeof baseAmt !== "number" || isNaN(baseAmt)) return "";
  const sweetFactor = isSweet ? (state.sweetPct / 100) : 1;
  const mult = CUP_SIZE_MULTIPLIER[state.cupSize] * sweetFactor;
  const val = baseAmt * mult;
  const rounded = val >= 50 ? Math.round(val) : Math.round(val * 10) / 10;
  return `${rounded} ${unit || ""}`.trim();
}

function openRecipeModal(id, preferredMode, preserveSweetPct, cupSize = "16oz", tableNo = null, editingCartItemId = null) {
  const recipe = DEFAULT_RECIPES.find((r) => r.id === id);
  if (!recipe) return;

  state.activeRecipeId = id;
  state.editingCartItemId = editingCartItemId;
  const targetMode = supportsTemp(recipe, preferredMode) ? preferredMode : getDefaultVariantKey(recipe);
  state.activeMode = targetMode;
  state.cupSize = ["12oz", "16oz", "22oz"].includes(cupSize) ? cupSize : "16oz";
  state.tableNo = normalizeTableNo(tableNo !== null ? tableNo : state.tableNo);
  state.sweetPct = typeof preserveSweetPct === "number" ? preserveSweetPct : 100;

  document.querySelectorAll("#cupSizeGroup .seg-btn").forEach((b) => b.classList.toggle("active", b.dataset.size === state.cupSize));
  syncTableSelectionUI();
  updateSweetSliderUI();

  const hotBtn = document.getElementById("modeHotBtn");
  const iceBtn = document.getElementById("modeIceBtn");
  const hasHot = supportsTemp(recipe, "hot");
  const hasIce = supportsTemp(recipe, "ice");

  hotBtn.disabled = !hasHot;
  hotBtn.classList.toggle("disabled-mode", !hasHot);
  iceBtn.disabled = !hasIce;
  iceBtn.classList.toggle("disabled-mode", !hasIce);

  document.getElementById("modalTitleMain").textContent = getRecipeNamePrimary(recipe);
  document.getElementById("modalPriceTag").textContent = formatPrice(getRecipePrice(recipe));

  renderModalVariantContent(recipe, targetMode);
  applyLockStateUI();
  document.getElementById("recipeModal").classList.add("open");
}

function renderModalVariantContent(recipe, mode) {
  const s = t();
  const variant = getActiveVariant(recipe, mode);
  if (!variant) return;

  document.querySelectorAll("#modalModeSwitchBar .mode-option-btn").forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === mode));

  const isHot = mode === "hot";
  const tempTag = document.getElementById("modalTempTag");
  tempTag.textContent = isHot ? s.hotFull : s.iceFull;
  tempTag.className = "drink-tag " + (isHot ? "temp-hot" : "temp-ice");

  document.getElementById("modalDesc").textContent = state.lang === "en"
    ? (variant.descEn || variant.descKm || recipe.descEn || recipe.descKm || "")
    : (variant.descKm || variant.descEn || recipe.descKm || recipe.descEn || "");
  document.getElementById("modalTip").innerHTML = `<strong>${escapeHtml(s.tipPrefix)}</strong> ${escapeHtml(getRecipeTip(variant))}`;

  const stepsOl = document.getElementById("modalSteps");
  stepsOl.innerHTML = getRecipeSteps(variant).map((st) => `<li>${escapeHtml(st)}</li>`).join("");

  renderModalIngredients(variant);
}

function renderModalIngredients(variant) {
  const s = t();
  const ul = document.getElementById("modalIngredients");
  const items = variant.ingredients || [];
  const hasSweetener = items.some((ing) => isSweetenerIngredient(ing));

  ul.innerHTML = items.map((ing, idx) => {
    const ingName = getIngredientName(ing);
    const sweetener = isSweetenerIngredient(ing);
    const amtText = formatScaledAmount(ing.amount, ing.unit, sweetener);
    const sweetTagHtml = sweetener ? `<span class="ing-sweet-pill">${escapeHtml(s.sweetPillLabel(state.sweetPct))}</span>` : "";
    return `
      <li class="ing-item ${sweetener ? "is-sweetener" : ""}" data-idx="${idx}">
        <div class="ing-left"><span>${escapeHtml(ingName)}</span>${sweetTagHtml}</div>
        <span class="ing-amount">${escapeHtml(amtText)}</span>
      </li>
    `;
  }).join("");

  if (!hasSweetener && state.sweetPct > 0) {
    const extraSweetAmt = formatScaledAmount(15, "ml", true);
    const extraLabel = state.lang === "en" ? "Sweetness Level" : "កម្រិតផ្អែម";
    ul.insertAdjacentHTML("beforeend", `
      <li class="ing-item is-sweetener" data-idx="extra-sweet">
        <div class="ing-left"><span>${escapeHtml(extraLabel)}</span><span class="ing-sweet-pill">${escapeHtml(s.sweetPillLabel(state.sweetPct))}</span></div>
        <span class="ing-amount">${escapeHtml(extraSweetAmt)}</span>
      </li>
    `);
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function initEvents() {
  document.getElementById("langToggleBtn").addEventListener("click", toggleLanguage);
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);

  document.querySelectorAll("#tempFilterGroup .temp-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.filter;
      if (val === "cart") switchTab("cart");
      else {
        state.filter = val;
        switchTab("all");
      }
    });
  });

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  document.getElementById("confirmCartToOrderBtn").addEventListener("click", confirmCartToOrder);
  document.getElementById("backToCartBtn").addEventListener("click", () => switchTab("cart"));

  document.getElementById("resetChartBtn").addEventListener("click", () => {
    dailyChartLog = {};
    syncOperationalDataToServer();
    renderDailyChart();
    showToast(t().toastChartCleared);
  });

  document.getElementById("closeRecipeModal").addEventListener("click", () => {
    state.editingCartItemId = null;
    document.getElementById("recipeModal").classList.remove("open");
  });
  document.getElementById("recipeModal").addEventListener("click", (e) => {
    if (e.target.id === "recipeModal") {
      state.editingCartItemId = null;
      e.currentTarget.classList.remove("open");
    }
  });

  document.querySelectorAll("#modalModeSwitchBar .mode-option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled || !state.activeRecipeId) return;
      const recipe = DEFAULT_RECIPES.find((r) => r.id === state.activeRecipeId);
      if (!recipe || !supportsTemp(recipe, btn.dataset.mode)) return;
      state.activeMode = btn.dataset.mode;
      renderModalVariantContent(recipe, state.activeMode);
    });
  });

  document.querySelectorAll("#cupSizeGroup .seg-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#cupSizeGroup .seg-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.cupSize = btn.dataset.size;
      const recipe = DEFAULT_RECIPES.find((r) => r.id === state.activeRecipeId);
      if (recipe) renderModalIngredients(getActiveVariant(recipe, state.activeMode));
    });
  });

  function applySweetnessChange(newPct) {
    const clamped = Math.min(150, Math.max(0, parseInt(newPct, 10) || 0));
    state.sweetPct = clamped;
    updateSweetSliderUI();
    const recipe = DEFAULT_RECIPES.find((r) => r.id === state.activeRecipeId);
    if (recipe) renderModalIngredients(getActiveVariant(recipe, state.activeMode));
  }

  document.getElementById("sweetRangeInput").addEventListener("input", (e) => applySweetnessChange(e.target.value));
  document.querySelectorAll("#sweetPresetsRow .sweet-preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => applySweetnessChange(btn.dataset.sweet));
  });

  document.getElementById("modalAddOrderBtn").addEventListener("click", () => {
    if (state.activeRecipeId) {
      addToCart(state.activeRecipeId, state.activeMode, state.cupSize, 1, state.sweetPct, state.tableNo, state.editingCartItemId);
      state.editingCartItemId = null;
      document.getElementById("recipeModal").classList.remove("open");
    }
  });

  document.getElementById("cancelDoneBtn").addEventListener("click", closeConfirmDoneModal);
  document.getElementById("acceptDoneBtn").addEventListener("click", acceptConfirmDone);
  document.getElementById("confirmDoneModal").addEventListener("click", (e) => {
    if (e.target.id === "confirmDoneModal") closeConfirmDoneModal();
  });

  document.getElementById("closeReceiptModal").addEventListener("click", closeReceiptModal);
  document.getElementById("closeReceiptBtn").addEventListener("click", closeReceiptModal);
  document.getElementById("clearTableBillBtn").addEventListener("click", clearActiveTableBill);
  document.getElementById("receiptModal").addEventListener("click", (e) => {
    if (e.target.id === "receiptModal") closeReceiptModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeConfirmDoneModal();
      closeReceiptModal();
      state.editingCartItemId = null;
      document.getElementById("recipeModal").classList.remove("open");
    }
  });
}

initEvents();
applyStaticTranslations();
renderMenu();
initServerRealtimeSync();
