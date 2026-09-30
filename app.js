const ICONS = {
  grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  receipt: '<svg viewBox="0 0 24 24"><path d="M5 3h14v18l-2.8-1.8L13.5 21 11 19.2 8.5 21 5 19.2z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M16 20v-1.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 18.4V20"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M16 4.2a3.5 3.5 0 0 1 0 6.7M21 20v-1.6a3.4 3.4 0 0 0-2.7-3.3"/></svg>',
  package: '<svg viewBox="0 0 24 24"><path d="m12 3 8.5 4.8v8.4L12 21l-8.5-4.8V7.8z"/><path d="m3.8 7.8 8.2 4.7 8.2-4.7M12 12.5V21M7.8 5.4 16.4 10"/></svg>',
  wallet: '<svg viewBox="0 0 24 24"><path d="M4 6.2A2.2 2.2 0 0 1 6.2 4H19a1 1 0 0 1 1 1v15H5a2 2 0 0 1-2-2V6.2A2.2 2.2 0 0 1 5.2 4"/><path d="M3 7h15.5a1.5 1.5 0 0 1 1.5 1.5V13h-4.5a2.5 2.5 0 0 1 0-5H20"/><circle cx="15.5" cy="10.5" r=".7" fill="currentColor" stroke="none"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M4 19V5M4 19h17"/><path d="m7 15 3-4 3 2 5-7"/><path d="M18 6h2v2"/></svg>',
  settings: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.5V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.5h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.5v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2.5h-.2a1.7 1.7 0 0 0-1.6 1.3z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>',
  'chevron-right': '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  'arrow-left': '<svg viewBox="0 0 24 24"><path d="M20 12H5M11 18l-6-6 6-6"/></svg>',
  'arrow-up': '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  filter: '<svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="m4 16-.8 4.8L8 20l11.3-11.3a2.3 2.3 0 0 0-3.2-3.2zM14.5 7.5l2 2"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>',
  'plus-circle': '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.5"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>',
  cash: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 10h.01M18 14h.01"/></svg>',
  warning: '<svg viewBox="0 0 24 24"><path d="m12 3 9 17H3z"/><path d="M12 9v4M12 17h.01"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>',
  logout: '<svg viewBox="0 0 24 24"><path d="M10 4H5v16h5M14 8l4 4-4 4M18 12H9"/></svg>',
  refresh: '<svg viewBox="0 0 24 24"><path d="M20 11a8 8 0 0 0-14-5L4 8M4 5v3h3M4 13a8 8 0 0 0 14 5l2-2M20 19v-3h-3"/></svg>'
};

const initialData = {
  clients: [
    { id: 'C002', name: 'Tienda El Buen Pastor', segment: 'Ruta centro', contact: 'Jorge Ramírez', phone: '55 8765 4321', purchases: 1, billed: 1441.42, balance: 1141.42, overdue: 0, status: 'active', due: '26/09/2026' },
    { id: 'C001', name: 'Abarrotes Doña Mari', segment: 'Mayoreo', contact: 'María López', phone: '55 1234 5678', purchases: 2, billed: 1885, balance: 985, overdue: 276.24, status: 'overdue', due: 'vencido hace 12 días' },
    { id: 'C003', name: 'Mini Súper La Esquina', segment: 'Contado', contact: 'Ana Torres', phone: '55 3344 7788', purchases: 0, billed: 0, balance: 0, overdue: 0, status: 'inactive', due: 'Sin compras' }
  ],
  products: [
    { sku: 'ACE-900', name: 'Aceite vegetal 900 ml', category: 'Abarrotes', unit: 'pza', cost: 36.5, price: 44, stock: 36, min: 10 },
    { sku: 'AGU-1L', name: 'Agua purificada 1 L', category: 'Bebidas', unit: 'paquete', cost: 74, price: 96, stock: 60, min: 12 },
    { sku: 'ATU-LAT', name: 'Atún en lata 140 g', category: 'Abarrotes', unit: 'pza', cost: 17.8, price: 22.9, stock: 120, min: 20 },
    { sku: 'GAL-CU', name: 'Galleta cuadritos', category: 'Abarrotes', unit: 'paquete', cost: 21, price: 27.5, stock: 24, min: 8 },
    { sku: 'JAB-260', name: 'Jabón de barra 260 g', category: 'Limpieza', unit: 'docena', cost: 138, price: 168, stock: 18, min: 6 },
    { sku: 'PAP-200', name: 'Papel higiénico 200 hojas', category: 'Limpieza', unit: 'paquete', cost: 108, price: 132, stock: 3, min: 8 },
    { sku: 'REF-500', name: 'Refresco cola 500 ml', category: 'Bebidas', unit: 'caja', cost: 176, price: 210, stock: 48, min: 10 },
    { sku: 'SAL-1K', name: 'Sal de mesa 1 kg', category: 'Abarrotes', unit: 'paquete', cost: 12, price: 16.5, stock: 80, min: 12 }
  ],
  sales: [
    { id: 'V-0003', clientId: 'C001', date: '14/09/2026', status: 'pending', total: 708.76, balance: 708.76, delivery: 'Por entregar' },
    { id: 'V-0002', clientId: 'C002', date: '29/08/2026', status: 'partial', total: 1441.42, balance: 1141.42, delivery: 'Entregado' },
    { id: 'V-0001', clientId: 'C001', date: '17/08/2026', status: 'overdue', total: 1176.24, balance: 276.24, delivery: 'Entregado' }
  ],
  payments: [
    { id: 'COB-004', clientId: 'C001', date: '16/09/2026', amount: 200, method: 'Transferencia', reference: 'Abono parcial' },
    { id: 'COB-003', clientId: 'C002', date: '29/08/2026', amount: 300, method: 'Efectivo', reference: 'V-0002' }
  ]
};

let data = loadData();
let settingsState = loadSettings();
let cloudMode = false;
let cloudRevision = 0;
let persistenceQueue = Promise.resolve();
let persistenceErrorShown = false;
let currentRoute = routeFromHash();
let currentClientFilter = 'all';
let currentProductFilter = 'all';
let currentSalesFilter = 'all';
let currentClientSort = 'balance';
let currentProductCategory = 'all';
let searchTerm = '';

function loadData() {
  try {
    const saved = localStorage.getItem('mono-cromat-data');
    if (saved) return { ...initialData, ...JSON.parse(saved) };
  } catch (error) { /* fallback to demo data */ }
  return JSON.parse(JSON.stringify(initialData));
}
function saveData() {
  if (cloudMode) { queueCloudSave(); return; }
  try { localStorage.setItem('mono-cromat-data', JSON.stringify(data)); setSyncStatus('Guardado en este dispositivo', 'local'); }
  catch { toast('No se pudo guardar en este dispositivo. Exporta una copia de seguridad.', true); setSyncStatus('Error al guardar', 'error'); }
}
function loadSettings() {
  const defaults = { businessName: 'Mono Cromat & Co.', rfc: '', phone: '', currency: 'MXN — Peso mexicano', address: '', preferences: { inventoryAlerts: true, collectionReminders: true, compactTables: false } };
  try { const saved = JSON.parse(localStorage.getItem('mono-cromat-settings') || '{}'); return { ...defaults, ...saved, preferences: { ...defaults.preferences, ...(saved.preferences || {}) } }; } catch (error) { return defaults; }
}
function persistSettings(settings) {
  settingsState = { ...settings, preferences: { ...settingsState.preferences, ...(settings.preferences || {}) } };
  if (cloudMode) { queueCloudSave(); return; }
  try { localStorage.setItem('mono-cromat-settings', JSON.stringify(settingsState)); }
  catch { toast('No se pudieron guardar las preferencias.', true); }
}

let pendingCloudSnapshot = null;
let persistenceConflict = false;
let retryDelay = 2000;
let retryTimer = null;
function setSyncStatus(label, state = 'ok') {
  const labelNode = document.getElementById('sync-label');
  const dotNode = document.getElementById('sync-dot');
  const timeNode = document.getElementById('sync-time');
  if (labelNode) labelNode.textContent = label;
  if (dotNode) dotNode.dataset.state = state;
  if (timeNode) timeNode.textContent = state === 'ok' && cloudMode ? new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }) : '';
}
function queueCloudSave() {
  pendingCloudSnapshot = { data: JSON.parse(JSON.stringify(data)), settings: JSON.parse(JSON.stringify(settingsState)) };
  setSyncStatus('Sincronizando…', 'busy');
  persistenceQueue = persistenceQueue.then(flushCloudSave).catch(() => {});
}
function scheduleCloudRetry() {
  if (retryTimer || persistenceConflict) return;
  retryTimer = setTimeout(() => {
    retryTimer = null;
    persistenceQueue = persistenceQueue.then(flushCloudSave).catch(() => {});
  }, retryDelay);
  retryDelay = Math.min(retryDelay * 2, 30_000);
}
async function flushCloudSave() {
  if (!pendingCloudSnapshot || !cloudMode || persistenceConflict) return;
  const snapshot = pendingCloudSnapshot;
  try {
    const response = await fetch('/api/state', { method: 'PUT', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ state: snapshot, revision: cloudRevision }) });
    const result = await response.json();
    if (response.status === 409) { persistenceConflict = true; setSyncStatus('Conflicto · cambios sin guardar', 'error'); toast(`${result.error || 'Los datos cambiaron en otra sesión.'} Descarga un respaldo antes de recargar.`, true); return; }
    if (!response.ok) throw new Error(result.error || 'No se pudo sincronizar.');
    cloudRevision = result.revision;
    if (pendingCloudSnapshot === snapshot) pendingCloudSnapshot = null;
    persistenceErrorShown = false; retryDelay = 2000;
    setSyncStatus(pendingCloudSnapshot ? 'Cambios pendientes…' : 'Todo actualizado', pendingCloudSnapshot ? 'busy' : 'ok');
    if (pendingCloudSnapshot) return flushCloudSave();
  } catch (error) {
    setSyncStatus('Sin conexión · cambios pendientes', 'error');
    if (!persistenceErrorShown) { toast('No se pudo sincronizar. Conservamos los cambios en esta pantalla y volveremos a intentar automáticamente.', true); persistenceErrorShown = true; }
    scheduleCloudRetry();
  }
}

function showAuthGate(message = '', unavailable = false) {
  document.getElementById('boot-screen').hidden = true;
  const gate = document.getElementById('auth-gate');
  document.getElementById('app-shell').hidden = true;
  document.querySelector('.floating-menu-trigger').hidden = true;
  gate.hidden = false;
  gate.innerHTML = `<main class="auth-card"><img src="assets/logo-blue.png" alt="Mono Cromat &amp; Co." class="auth-logo"><span class="eyebrow">Punto de venta</span><h1>${unavailable ? 'No pudimos conectar' : 'Inicia sesión'}</h1><p>${unavailable ? 'Verifica tu conexión y la configuración del servicio para continuar.' : 'Ingresa la contraseña del espacio de trabajo para ver los datos.'}</p>${message ? `<div class="auth-message" role="alert">${esc(message)}</div>` : ''}${unavailable ? '<button class="button button-primary button-full" data-action="retry-connection">Reintentar</button>' : '<form id="login-form"><label for="login-password">Contraseña</label><div class="auth-password-row"><input id="login-password" name="password" type="password" autocomplete="current-password" required autofocus><button type="submit" class="button button-primary">Entrar</button></div><p class="auth-hint">La contraseña se valida en el servidor y no se guarda en este dispositivo.</p></form>'}</main>`;
  if (!unavailable) {
    document.getElementById('login-form').addEventListener('submit', async event => {
      event.preventDefault();
      const submit = event.currentTarget.querySelector('button[type="submit"]');
      const password = new FormData(event.currentTarget).get('password');
      submit.disabled = true; submit.textContent = 'Validando…';
      try {
        const response = await fetch('/api/auth/login', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password }) });
        const result = await response.json();
        if (!response.ok) { showAuthGate(result.error || 'No se pudo iniciar sesión.'); return; }
        await initializeCloudApp();
      } catch { showAuthGate('No se pudo conectar con el servidor. Inténtalo de nuevo.', true); }
    });
    requestAnimationFrame(() => document.getElementById('login-password')?.focus());
  }
}
function showMainApp() {
  document.getElementById('boot-screen').hidden = true;
  document.getElementById('auth-gate').hidden = true;
  document.getElementById('app-shell').hidden = false;
  document.querySelector('.floating-menu-trigger').hidden = false;
  document.querySelector('[data-action="logout"]').hidden = !cloudMode;
  const label = document.getElementById('today-label');
  if (label) label.textContent = new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(new Date());
  document.body.classList.toggle('compact-tables', Boolean(settingsState.preferences?.compactTables));
  render();
}
function enableLocalMode() {
  cloudMode = false; data = loadData(); settingsState = loadSettings();
  setSyncStatus('Guardado en este dispositivo', 'local');
  showMainApp();
}
async function initializeCloudApp() {
  const response = await fetch('/api/state', { credentials: 'same-origin', cache: 'no-store' });
  if (response.status === 401) { showAuthGate('Tu sesión venció. Inicia sesión de nuevo.'); return; }
  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'No se pudo cargar la información.');
  let localData = null; let localSettings = null;
  try { localData = localStorage.getItem('mono-cromat-data'); localSettings = localStorage.getItem('mono-cromat-settings'); } catch {}
  cloudRevision = result.revision;
  if (result.isNew && localData) {
    let migratedData; let migratedSettings;
    try { migratedData = JSON.parse(localData); migratedSettings = JSON.parse(localSettings || '{}'); }
    catch { migratedData = null; migratedSettings = {}; }
    if (migratedData && ['clients', 'products', 'sales', 'payments'].every(key => Array.isArray(migratedData[key]))) {
      const migrated = { data: migratedData, settings: { ...loadSettings(), ...migratedSettings } };
      const saved = await fetch('/api/state', { method: 'PUT', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ state: migrated, revision: cloudRevision }) });
      const savedResult = await saved.json();
      if (!saved.ok) throw new Error(savedResult.error || 'No se pudieron migrar los datos locales.');
      result.state = migrated; cloudRevision = savedResult.revision;
      toast('Los datos guardados anteriormente en este dispositivo se migraron a la nube.');
    }
  }
  data = result.state.data;
  settingsState = { ...loadSettings(), ...(result.state.settings || {}), preferences: { ...loadSettings().preferences, ...(result.state.settings?.preferences || {}) } };
  try { localStorage.removeItem('mono-cromat-data'); localStorage.removeItem('mono-cromat-settings'); } catch {}
  cloudMode = true;
  pendingCloudSnapshot = null; persistenceConflict = false; persistenceErrorShown = false; retryDelay = 2000; if (retryTimer) { clearTimeout(retryTimer); retryTimer = null; }
  setSyncStatus('Todo actualizado', 'ok');
  showMainApp();
}
async function startApp() {
  try {
    const response = await fetch('/api/auth/session', { credentials: 'same-origin', cache: 'no-store' });
    if (response.status === 404 && ['localhost', '127.0.0.1'].includes(location.hostname)) { enableLocalMode(); return; }
    const session = await response.json();
    if (session.localMode) { enableLocalMode(); return; }
    if (!response.ok || !session.configured) { showAuthGate(session.error || 'El servidor no está configurado.', true); return; }
    if (!session.authenticated) { showAuthGate(); return; }
    try { await initializeCloudApp(); } catch (error) { showAuthGate(error.message, true); }
  } catch {
    if (['localhost', '127.0.0.1'].includes(location.hostname)) enableLocalMode();
    else showAuthGate('No se pudo establecer conexión con la aplicación.', true);
  }
}
async function logout() {
  if (!cloudMode) { toast('El modo local no tiene una sesión que cerrar.'); return; }
  if (pendingCloudSnapshot && !window.confirm('Hay cambios pendientes de sincronización. Si cierras sesión ahora, podrías perderlos. ¿Cerrar sesión de todas formas?')) return;
  try { await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' }); } catch {}
  cloudMode = false; data = { clients: [], products: [], sales: [], payments: [] };
  settingsState = loadSettings(); showAuthGate();
}
window.addEventListener('online', () => { if (pendingCloudSnapshot && !persistenceConflict) { persistenceErrorShown = false; persistenceQueue = persistenceQueue.then(flushCloudSave).catch(() => {}); } });
window.addEventListener('beforeunload', event => { if (pendingCloudSnapshot) { event.preventDefault(); event.returnValue = ''; } });
function routeFromHash() { return (location.hash.replace(/^#\/?/, '').split('?')[0] || 'inicio'); }
function icon(name) { return ICONS[name] || ''; }
function esc(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function money(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(Number(value) || 0); }
function shortMoney(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(Number(value) || 0); }
function initials(name) { return esc(String(name).split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase()); }
function clientById(id) { return data.clients.find(client => client.id === id) || { name: 'Cliente general', phone: '' }; }
function statusBadge(status) {
  const badges = {
    pending: ['badge-warning', 'Pendiente'],
    partial: ['badge-info', 'Parcial'],
    overdue: ['badge-danger', 'Vencida'],
    paid: ['badge-success', 'Pagada'],
    delivered: ['badge-success', 'Entregada']
  };
  const [className, label] = badges[status] || ['badge-info', status];
  return `<span class="badge ${esc(className)}">${esc(label)}</span>`;
}
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach(node => {
    const name = node.getAttribute('data-icon');
    node.innerHTML = icon(name);
  });
}
function setPage(title, content) {
  document.title = `${title} · Mono Cromat & Co.`;
  document.getElementById('breadcrumb-current').textContent = title;
  document.getElementById('page-content').innerHTML = content;
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.route === currentRoute));
  updateNotificationBadge();
  hydrateIcons(document.getElementById('page-content'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function pageHeader(title, subtitle, actions = '') {
  return `<div class="page-heading"><div><h1>${title}</h1><p>${subtitle}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function button(label, action, type = 'secondary', iconName = '') {
  return `<button class="button button-${type}" data-action="${action}">${iconName ? icon(iconName) : ''}<span>${label}</span></button>`;
}
function statCard(label, value, meta, iconName, highlight = false) {
  return `<article class="stat-card ${highlight ? 'stat-card-highlight' : ''}"><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon">${icon(iconName)}</span></div><strong class="stat-value">${value}</strong><span class="stat-meta">${meta}</span></article>`;
}
function todayString() {
  return new Intl.DateTimeFormat('es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date());
}
function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches';
}
function renderSalesChart(metrics, gradientId) {
  const buckets = metrics.buckets;
  const max = Math.max(0, ...buckets.map(bucket => bucket.total));
  const points = buckets.map((bucket, index) => ({
    x: buckets.length < 2 ? 350 : (index / (buckets.length - 1)) * 700,
    y: max ? 150 - (bucket.total / max) * 116 : 150
  }));
  const linePath = points.map((point, index) => `${index ? 'L' : 'M'}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(' ');
  const areaPath = `${linePath} L700 180 L0 180 Z`;
  const labels = buckets.map(bucket => `<span>${bucket.date.toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }).replace('.', '')}</span>`).join('');
  const last = points[points.length - 1] || { x: 700, y: 150 };
  return `<div class="chart-wrap"><div class="chart-grid"><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span></div><svg class="line-chart" viewBox="0 0 700 180" preserveAspectRatio="none" role="img" aria-label="Ventas diarias de la última semana"><defs><linearGradient id="${gradientId}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#52e6ff" stop-opacity=".4"/><stop offset="1" stop-color="#52e6ff" stop-opacity="0"/></linearGradient></defs><path class="area" fill="url(#${gradientId})" d="${areaPath}"/><path class="line" d="${linePath}"/><circle class="point" cx="${last.x}" cy="${last.y}" r="4"/></svg><div class="chart-labels">${labels}</div></div>`;
}

function render() {
  currentRoute = routeFromHash();
  searchTerm = '';
  const pages = { inicio: renderDashboard, dashboard: renderDashboard, ventas: renderSales, clientes: renderClients, productos: renderProducts, cobranza: renderCollections, reportes: renderReports, ajustes: renderSettings };
  (pages[currentRoute] || renderDashboard)();
  closeMobileMenu();
}

function renderDashboard() {
  const receivable = data.clients.reduce((sum, client) => sum + client.balance, 0);
  const overdue = data.clients.reduce((sum, client) => sum + client.overdue, 0);
  const pendingOrders = data.sales.filter(sale => sale.delivery === 'Por entregar').length;
  const metrics = PosDomain.getSalesMetrics(data.sales, data.payments);
  const overdueClients = data.clients.filter(client => client.overdue > 0).length;
  const overduePercent = receivable ? Math.round((Math.min(overdue, receivable) / receivable) * 100) : 0;
  const currentPercent = 100 - overduePercent;
  const receivableRows = data.clients.filter(client => client.balance > 0).map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.phone)} · ${client.purchases} compra${client.purchases === 1 ? '' : 's'} abierta${client.purchases === 1 ? '' : 's'}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(client.due)}</td><td data-label="Acciones"><button class="table-action" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas por cobrar.</td></tr>';
  const latestSaleRows = data.sales.slice(0, 4).map(sale => `<tr><td data-label="Folio" class="money">${esc(sale.id)}</td><td data-label="Cliente"><strong>${esc(clientById(sale.clientId).name)}</strong><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Fecha">${esc(sale.date)}</td><td data-label="Estado">${statusBadge(sale.status)}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td></tr>`).join('') || '<tr><td class="empty-row" colspan="6">Aún no hay ventas registradas.</td></tr>';
  const hasOperationalData = data.clients.length || data.products.length || data.sales.length;
  setPage('Resumen', `
    ${pageHeader(`${greeting()}, Mick`, 'Aquí tienes una lectura rápida de la operación de Mono Cromat & Co.', button('Registrar venta', 'new-sale', 'primary', 'plus'))}
    <section class="stats-grid">
      ${statCard('Ventas de hoy', money(metrics.todayTotal), `${metrics.todayCount} tickets · promedio ${money(metrics.todayAverage)}`, 'receipt', true)}
      ${statCard('Cobrado hoy', money(metrics.collectedToday), 'Ventas pagadas y abonos recibidos hoy', 'cash')}
      ${statCard('Por cobrar', money(receivable), `${data.clients.filter(c => c.balance > 0).length} clientes con saldo`, 'wallet')}
      ${statCard('Vencido', money(overdue), `${overdueClients} cuenta${overdueClients === 1 ? '' : 's'} vencida${overdueClients === 1 ? '' : 's'} · ${pendingOrders} por entregar`, 'clock')}
    </section>
    <section class="content-grid">
      <article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ritmo de ventas</h2><p>Ventas registradas durante los últimos 7 días</p></div></div><div class="panel-body"><div class="chart-total"><strong>${money(metrics.weekTotal)}</strong><span>${metrics.weekChange === null ? 'Sin periodo anterior comparable' : `${metrics.weekChange >= 0 ? '+' : ''}${metrics.weekChange.toFixed(1)}% vs. semana anterior`}</span></div>${renderSalesChart(metrics, 'dashboard-fill')}</div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Acciones rápidas</h2><p>Lo más usado en la operación diaria</p></div></div><div class="panel-body"><div class="quick-actions"><button class="quick-action" data-action="new-sale">${icon('receipt')}<span>Registrar venta</span></button><button class="quick-action" data-action="new-client">${icon('users')}<span>Nuevo cliente</span></button><button class="quick-action" data-action="new-payment">${icon('wallet')}<span>Registrar abono</span></button><button class="quick-action" data-action="export-data">${icon('download')}<span>Exportar datos</span></button></div></div></article>
    </section>
    <section class="section-grid">
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas por cobrar</h2><p>Prioriza los saldos que necesitan seguimiento</p></div><a class="inline-link" href="#/cobranza">Ver todo ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo</th><th>Vencido</th><th>Antigüedad</th><th></th></tr></thead><tbody>${receivableRows}</tbody></table></div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Antigüedad de saldos</h2><p>Distribución de la cartera actual</p></div></div><div class="panel-body"><div class="age-list"><div class="age-row"><label>Sin vencer</label><div class="age-bar"><span style="width: ${currentPercent}%"></span></div><strong>${shortMoney(Math.max(receivable - overdue, 0))}</strong></div><div class="age-row"><label>Vencido</label><div class="age-bar"><span class="lime" style="width: ${overduePercent}%"></span></div><strong>${shortMoney(Math.min(overdue, receivable))}</strong></div></div><div class="age-total"><span>Total cartera</span><strong>${money(receivable)}</strong></div></div></article>
    </section>
    <section class="section-grid" style="margin-top:17px"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimas ventas</h2><p>Actividad comercial reciente</p></div><a class="inline-link" href="#/ventas">Ver recibos ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Estado</th><th>Total</th><th>Saldo</th></tr></thead><tbody>${latestSaleRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Actividad reciente</h2><p>Lo último que pasó en tu cuenta</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>${hasOperationalData ? 'Datos operativos disponibles' : 'Espacio listo para comenzar'}</strong><span>${hasOperationalData ? 'Puedes seguir registrando movimientos desde las acciones rápidas.' : 'Comienza agregando tu primer cliente, producto o venta.'}</span></div></div><div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>Seguimiento recomendado</strong><span>${data.clients.filter(c => c.overdue > 0).length} cuenta${data.clients.filter(c => c.overdue > 0).length === 1 ? '' : 's'} con saldo vencido.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>Revisa el inventario bajo</strong><span>${data.products.filter(p => p.stock <= p.min).length} producto${data.products.filter(p => p.stock <= p.min).length === 1 ? '' : 's'} necesitan reposición.</span></div></div></div></div></article></section>
  `);
  hydrateIcons();
}

function renderClients() {
  const term = searchTerm.toLowerCase();
  const clients = data.clients.filter(client => {
    const matchesFilter = currentClientFilter === 'all' || (currentClientFilter === 'balance' && client.balance > 0) || (currentClientFilter === 'overdue' && client.overdue > 0) || (currentClientFilter === 'active' && client.status === 'active');
    const matchesSearch = !term || `${client.name} ${client.contact} ${client.phone} ${esc(client.id)}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  }).sort((a, b) => currentClientSort === 'name' ? a.name.localeCompare(b.name, 'es-MX') : currentClientSort === 'recent' ? String(b.id).localeCompare(String(a.id), 'es-MX', { numeric: true }) : Number(b.balance) - Number(a.balance));
  const portfolio = data.clients.reduce((sum, client) => sum + client.balance, 0);
  setPage('Clientes', `${pageHeader('Clientes', `${data.clients.length} cuentas en tu cartera`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo cliente', 'new-client', 'primary', 'plus')}`)}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="client-search" type="search" placeholder="Buscar por nombre, teléfono o código" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentClientFilter === 'all' ? 'active' : ''}" data-filter-group="clients" data-filter="all">Todos</button><button class="filter-pill ${currentClientFilter === 'balance' ? 'active' : ''}" data-filter-group="clients" data-filter="balance">Con saldo</button><button class="filter-pill ${currentClientFilter === 'overdue' ? 'active' : ''}" data-filter-group="clients" data-filter="overdue">Vencidos</button><button class="filter-pill ${currentClientFilter === 'active' ? 'active' : ''}" data-filter-group="clients" data-filter="active">Activos</button></div><span class="select-control">Ordenar por <select id="client-sort"><option value="balance" ${currentClientSort === 'balance' ? 'selected' : ''}>Saldo</option><option value="name" ${currentClientSort === 'name' ? 'selected' : ''}>Nombre</option><option value="recent" ${currentClientSort === 'recent' ? 'selected' : ''}>Más recientes</option></select></span></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${clients.length} cliente${clients.length === 1 ? '' : 's'}</h2><p>Cartera mostrada: <strong>${money(portfolio)}</strong></p></div><span class="panel-count">Vista de cartera</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Código</th><th>Cliente</th><th>Contacto</th><th>Compras</th><th>Facturado</th><th>Saldo</th><th>Vencido</th><th>Acciones</th></tr></thead><tbody>${clients.length ? clients.map(client => `<tr><td data-label="Código" class="sub-text">${esc(client.id)}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.segment)}</span></div></div></td><td data-label="Contacto"><strong>${esc(client.contact)}</strong><span class="sub-text">${esc(client.phone)}</span></td><td data-label="Compras">${client.purchases}</td><td data-label="Facturado">${money(client.billed)}</td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Acciones"><div style="display:flex; gap:5px"><button class="table-action" data-action="collect-client" data-id="${esc(client.id)}" title="Registrar abono">${icon('cash')}</button><button class="table-action" data-action="view-client" data-id="${esc(client.id)}" title="Ver cliente">${icon('eye')}</button></div></td></tr>`).join('') : '<tr><td class="empty-row" colspan="8">No encontramos clientes con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${clients.length} de ${data.clients.length} clientes</span></div></article>`);
}

function renderProducts() {
  const term = searchTerm.toLowerCase();
  const products = data.products.filter(product => {
    const matchesFilter = (currentProductFilter === 'all' || (currentProductFilter === 'low' && product.stock <= product.min) || (currentProductFilter === 'healthy' && product.stock > product.min)) && (currentProductCategory === 'all' || product.category === currentProductCategory);
    const matchesSearch = !term || `${product.name} ${esc(product.sku)} ${product.category}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
  const lowStock = data.products.filter(product => product.stock <= product.min);
  const categories = [...new Set(data.products.map(product => product.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es-MX'));
  setPage('Inventario', `${pageHeader('Inventario', `${data.products.length} productos activos`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo producto', 'new-product', 'primary', 'plus')}`)}${lowStock.length ? `<div class="inventory-alert"><div class="alert-copy">${icon('warning')}<span><strong>Inventario bajo:</strong> ${lowStock.map(product => `${esc(product.name)} (${product.stock})`).join(', ')}</span></div><button class="table-action" data-filter-group="products" data-filter="low">Ver bajo inventario ${icon('arrow-right')}</button></div>` : ''}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="product-search" type="search" placeholder="Buscar por nombre o SKU" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentProductFilter === 'all' ? 'active' : ''}" data-filter-group="products" data-filter="all">Todos</button><button class="filter-pill ${currentProductFilter === 'low' ? 'active' : ''}" data-filter-group="products" data-filter="low">Bajo inventario</button><button class="filter-pill ${currentProductFilter === 'healthy' ? 'active' : ''}" data-filter-group="products" data-filter="healthy">Stock saludable</button></div><span class="select-control">Categoría <select id="product-category"><option value="all">Todas</option>${categories.map(category => `<option value="${esc(category)}" ${currentProductCategory === category ? 'selected' : ''}>${esc(category)}</option>`).join('')}</select></span></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${products.length} productos</h2><p>Inventario disponible y márgenes de venta</p></div><span class="panel-count">${lowStock.length} por reponer</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>SKU</th><th>Producto</th><th>Categoría</th><th>Unidad</th><th>Costo</th><th>Precio</th><th>Margen</th><th>Existencia</th><th>Acciones</th></tr></thead><tbody>${products.length ? products.map(product => { const margin = Math.round(safeMargin(product) * 100); const low = product.stock <= product.min; return `<tr><td data-label="SKU" class="sub-text">${esc(product.sku)}</td><td data-label="Producto"><strong>${esc(product.name)}</strong></td><td data-label="Categoría">${esc(product.category)}</td><td data-label="Unidad">${esc(product.unit)}</td><td data-label="Costo">${money(product.cost)}</td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Margen"><span class="badge ${margin >= 22 ? 'badge-success' : 'badge-info'}">${margin}%</span></td><td data-label="Existencia" class="${low ? 'overdue' : 'money'}">${product.stock} ${low ? '<span class="sub-text">Reponer</span>' : ''}</td><td data-label="Acciones"><button class="table-action" data-action="edit-product" data-id="${esc(product.sku)}">${icon('edit')} Editar</button></td></tr>`; }).join('') : '<tr><td class="empty-row" colspan="9">No encontramos productos con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${products.length} de ${data.products.length} productos</span></div></article>`);
}

function renderSales() {
  const term = searchTerm.toLowerCase();
  const sales = data.sales.filter(sale => {
    const client = clientById(sale.clientId);
    const matchesFilter = currentSalesFilter === 'all' || sale.status === currentSalesFilter;
    return matchesFilter && (!term || `${sale.id} ${client.name}`.toLowerCase().includes(term));
  });
  const total = data.sales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);
  const open = data.sales.reduce((sum, sale) => sum + Number(sale.balance || 0), 0);
  const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - 29); cutoff.setHours(0, 0, 0, 0);
  const recentSales = data.sales.filter(sale => { const date = PosDomain.parseDate(sale.date); return date && date >= cutoff; });
  const recentTotal = recentSales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);
  setPage('Ventas', `${pageHeader('Ventas', 'Registra, consulta y da seguimiento a tus pedidos', button('Registrar venta', 'new-sale', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Ventas acumuladas</span><strong class="mini-stat-value">${money(total)}</strong><span class="mini-stat-meta">${data.sales.length} tickets registrados</span></div><div class="mini-stat"><span class="mini-stat-label">Saldo pendiente</span><strong class="mini-stat-value">${money(open)}</strong><span class="mini-stat-meta">Por cobrar de pedidos abiertos</span></div><div class="mini-stat"><span class="mini-stat-label">Ticket promedio</span><strong class="mini-stat-value">${money(recentSales.length ? recentTotal / recentSales.length : 0)}</strong><span class="mini-stat-meta">${recentSales.length} tickets últimos 30 días</span></div></section><div class="filter-bar"><label class="search-box">${icon('search')}<input id="sales-search" type="search" placeholder="Buscar por folio o cliente" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentSalesFilter === 'all' ? 'active' : ''}" data-filter-group="sales" data-filter="all">Todas</button><button class="filter-pill ${currentSalesFilter === 'pending' ? 'active' : ''}" data-filter-group="sales" data-filter="pending">Pendientes</button><button class="filter-pill ${currentSalesFilter === 'partial' ? 'active' : ''}" data-filter-group="sales" data-filter="partial">Parciales</button><button class="filter-pill ${currentSalesFilter === 'paid' ? 'active' : ''}" data-filter-group="sales" data-filter="paid">Pagadas</button></div></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${sales.length} venta${sales.length === 1 ? '' : 's'}</h2><p>Historial comercial de tu operación</p></div><button class="table-action" data-action="export-sales">${icon('download')} Exportar</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Entrega</th><th>Estado</th><th>Total</th><th>Saldo</th><th>Acciones</th></tr></thead><tbody>${sales.length ? sales.map(sale => `<tr><td data-label="Folio" class="money">${esc(sale.id)}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(clientById(sale.clientId).name)}</span><div><strong>${esc(clientById(sale.clientId).name)}</strong><span>${esc(clientById(sale.clientId).phone || '')}</span></div></div></td><td data-label="Fecha">${esc(sale.date)}</td><td data-label="Entrega"><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Estado">${statusBadge(sale.status)}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td><td data-label="Acciones"><div style="display:flex; gap:5px"><button class="table-action" data-action="view-sale" data-id="${esc(sale.id)}" title="Ver venta">${icon('eye')}</button><button class="table-action" data-action="view-receipt" data-id="${esc(sale.id)}" title="Ver recibo">${icon('receipt')}</button>${sale.delivery === 'Por entregar' ? `<button class="table-action" data-action="mark-delivered" data-id="${esc(sale.id)}" title="Marcar entregada">${icon('truck')}</button>` : ''}</div></td></tr>`).join('') : '<tr><td class="empty-row" colspan="8">No hay ventas para mostrar.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${sales.length} de ${data.sales.length} ventas</span></div></article>`);
}

function renderCollections() {
  const clients = data.clients.filter(client => client.balance > 0).sort((a, b) => b.overdue - a.overdue);
  const collected = data.payments.reduce((sum, payment) => sum + payment.amount, 0);
  const openAccountRows = clients.map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.contact)} · ${esc(client.phone)}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(client.due)}</td><td data-label="Acciones"><button class="table-action" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas abiertas.</td></tr>';
  const paymentRows = data.payments.slice(0, 5).map(payment => `<div class="delivery-row"><div class="delivery-main"><span class="delivery-icon">${icon('cash')}</span><div><strong>${esc(clientById(payment.clientId).name)}</strong><span>${esc(payment.date)} · ${esc(payment.method)}</span></div></div><div class="delivery-value"><strong>${money(payment.amount)}</strong><span>${esc(payment.reference)}</span></div></div>`).join('') || '<div class="empty-state">Aún no hay abonos registrados.</div>';
  setPage('Cobranza', `${pageHeader('Cobranza', 'Controla abonos, saldos pendientes y próximos vencimientos', button('Registrar abono', 'new-payment', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Cartera total</span><strong class="mini-stat-value">${money(data.clients.reduce((sum, client) => sum + client.balance, 0))}</strong><span class="mini-stat-meta">${clients.length} cuentas abiertas</span></div><div class="mini-stat"><span class="mini-stat-label">Vencido</span><strong class="mini-stat-value">${money(data.clients.reduce((sum, client) => sum + client.overdue, 0))}</strong><span class="mini-stat-meta">Requiere seguimiento</span></div><div class="mini-stat"><span class="mini-stat-label">Abonos registrados</span><strong class="mini-stat-value">${money(collected)}</strong><span class="mini-stat-meta">${data.payments.length} movimientos históricos</span></div></section><div class="sales-layout"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas abiertas</h2><p>Ordenadas por prioridad de cobranza</p></div><button class="table-action" data-action="export-collections">${icon('download')} Exportar</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo total</th><th>Vencido</th><th>Próximo vencimiento</th><th>Acción</th></tr></thead><tbody>${openAccountRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimos abonos</h2><p>Movimientos recientes</p></div></div><div class="panel-body"><div class="delivery-list">${paymentRows}</div></div></article></div>`);
}

function renderReports() {
  const metrics = PosDomain.getSalesMetrics(data.sales, data.payments);
  const totalReceivable = data.clients.reduce((sum, client) => sum + Number(client.balance || 0), 0);
  const overdueTotal = data.clients.reduce((sum, client) => sum + Math.min(Number(client.overdue || 0), Number(client.balance || 0)), 0);
  const currentTotal = Math.max(0, totalReceivable - overdueTotal);
  const currentShare = totalReceivable ? Math.round((currentTotal / totalReceivable) * 100) : 0;
  const overdueShare = totalReceivable ? 100 - currentShare : 0;
  const profitableProducts = [...data.products].sort((a, b) => safeMargin(b) - safeMargin(a)).slice(0, 4);
  const productRows = profitableProducts.map(product => `<tr><td data-label="Producto"><strong>${esc(product.name)}</strong><span class="sub-text">${esc(product.sku)}</span></td><td data-label="Margen"><span class="badge badge-success">${Math.round(safeMargin(product) * 100)}%</span></td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Stock">${product.stock}</td></tr>`).join('') || '<tr><td class="empty-row" colspan="4">Agrega productos para ver su rentabilidad.</td></tr>';
  const overdueCount = data.clients.filter(client => Number(client.overdue) > 0).length;
  const lowStockCount = data.products.filter(product => Number(product.stock) <= Number(product.min)).length;
  const undeliveredCount = data.sales.filter(sale => sale.delivery === 'Por entregar').length;
  setPage('Reportes', `${pageHeader('Reportes', 'Indicadores calculados a partir de los movimientos registrados', button('Exportar reporte CSV', 'export-report', 'primary', 'download'))}<div class="report-grid"><article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ventas por periodo</h2><p>Facturación registrada en los últimos 7 días</p></div></div><div class="panel-body"><div class="chart-total"><strong>${money(metrics.weekTotal)}</strong><span>${metrics.weekChange === null ? 'Sin periodo anterior comparable' : `${metrics.weekChange >= 0 ? '+' : ''}${metrics.weekChange.toFixed(1)}% vs. semana anterior`}</span></div>${renderSalesChart(metrics, 'report-fill')}</div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Estado de cartera</h2><p>Basado en saldos y monto vencido registrados</p></div></div><div class="donut-wrap"><div class="donut" style="--current-share:${currentShare}%"><div class="donut-center"><strong>${shortMoney(totalReceivable)}</strong><span>Cartera total</span></div></div><div class="legend"><div class="legend-item"><i class="legend-dot"></i><span>Sin vencer</span><strong>${currentShare}%</strong></div><div class="legend-item"><i class="legend-dot lime"></i><span>Vencido</span><strong>${overdueShare}%</strong></div><div class="empty-state">${overdueCount} cuenta${overdueCount === 1 ? '' : 's'} con saldo vencido</div></div></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Productos más rentables</h2><p>Margen bruto por unidad</p></div><a class="inline-link" href="#/productos">Ver inventario ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Producto</th><th>Margen</th><th>Precio</th><th>Stock</th></tr></thead><tbody>${productRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Resumen operativo</h2><p>Alertas derivadas de la información actual</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>${lowStockCount} producto${lowStockCount === 1 ? '' : 's'} bajo mínimo</strong><span>${lowStockCount ? 'Conviene programar una reposición.' : 'No hay productos bajo el mínimo.'}</span></div></div><div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>${overdueCount} cuenta${overdueCount === 1 ? '' : 's'} vencida${overdueCount === 1 ? '' : 's'}</strong><span>${overdueTotal ? `Saldo vencido: ${money(overdueTotal)}.` : 'No hay saldos vencidos registrados.'}</span></div></div><div class="activity-item"><span class="activity-icon">${icon('truck')}</span><div class="activity-copy"><strong>${undeliveredCount} pedido${undeliveredCount === 1 ? '' : 's'} por entregar</strong><span>${undeliveredCount ? 'Actualiza su estado al completar la entrega.' : 'No hay entregas pendientes.'}</span></div></div></div></div></article></div>`);
}
function safeMargin(product) { const price = Number(product.price) || 0; return price > 0 ? (price - (Number(product.cost) || 0)) / price : 0; }

function renderSettings() {
  const settings = settingsState;
  const preferences = settings.preferences || {};
  const toggle = (key, label, description) => `<div class="toggle-row"><div class="toggle-copy"><strong>${label}</strong><span>${description}</span></div><button type="button" class="toggle ${preferences[key] ? 'on' : ''}" data-action="toggle-setting" data-preference="${key}" aria-label="${label}" aria-pressed="${Boolean(preferences[key])}"></button></div>`;
  setPage('Ajustes', `${pageHeader('Ajustes', 'Configura la información del negocio y las preferencias de operación', button('Guardar cambios', 'save-settings', 'primary', 'check'))}<div class="settings-layout"><nav class="settings-nav" aria-label="Secciones de ajustes"><button type="button" data-action="settings-jump" data-target="settings-business">Negocio</button><button type="button" data-action="settings-jump" data-target="settings-preferences">Preferencias</button><button type="button" data-action="settings-jump" data-target="settings-backup">Respaldo</button></nav><div><article class="settings-panel" id="settings-business"><h2>Información del negocio</h2><p>Estos datos aparecen en tus recibos y reportes.</p><div class="form-grid"><div class="form-field"><label for="setting-business-name">Nombre comercial</label><input id="setting-business-name" data-setting="businessName" value="${esc(settings.businessName)}" /></div><div class="form-field"><label for="setting-rfc">RFC</label><input id="setting-rfc" data-setting="rfc" value="${esc(settings.rfc)}" /></div><div class="form-field"><label for="setting-phone">Teléfono</label><input id="setting-phone" data-setting="phone" value="${esc(settings.phone)}" /></div><div class="form-field"><label for="setting-currency">Moneda</label><select id="setting-currency" data-setting="currency"><option ${settings.currency === 'MXN — Peso mexicano' ? 'selected' : ''}>MXN — Peso mexicano</option></select></div><div class="form-field full"><label for="setting-address">Dirección</label><input id="setting-address" data-setting="address" value="${esc(settings.address)}" /></div></div></article><article class="settings-panel" id="settings-preferences"><h2>Preferencias de operación</h2><p>Los cambios se guardan de inmediato.</p>${toggle('inventoryAlerts', 'Alertas de inventario', 'Muestra avisos cuando un producto llegue a su mínimo.')}${toggle('collectionReminders', 'Recordatorios de cobranza', 'Incluye cuentas vencidas en las alertas de operación.')}${toggle('compactTables', 'Modo compacto en tablas', 'Reduce el espacio vertical para ver más filas.')}</article><article class="settings-panel" id="settings-backup"><h2>Respaldo de información</h2><p>Descarga clientes, productos, ventas, abonos y ajustes para conservar una copia.</p><div class="heading-actions"><button class="button button-secondary" data-action="export-data">${icon('download')} Descargar respaldo</button><button class="button button-secondary" data-action="import-backup">${icon('upload')} Restaurar respaldo</button><button class="button button-danger" data-action="clear-data">${icon('trash')} Borrar todos los datos</button></div></article></div></div>`);
}

function getNotifications() {
  const preferences = settingsState.preferences || {};
  const alerts = [];
  const lowStock = data.products.filter(product => Number(product.stock) <= Number(product.min));
  const overdue = data.clients.filter(client => Number(client.overdue) > 0);
  const undelivered = data.sales.filter(sale => sale.delivery === 'Por entregar');
  if (preferences.inventoryAlerts && lowStock.length) alerts.push({ icon: 'package', title: `${lowStock.length} producto${lowStock.length === 1 ? '' : 's'} bajo mínimo`, detail: lowStock.slice(0, 3).map(product => `${product.name} (${product.stock} disponibles)`).join(' · '), route: 'productos', action: 'go-inventory', label: 'Revisar inventario' });
  if (preferences.collectionReminders && overdue.length) alerts.push({ icon: 'wallet', title: `${overdue.length} cuenta${overdue.length === 1 ? '' : 's'} con saldo vencido`, detail: `Monto vencido: ${money(overdue.reduce((sum, client) => sum + Number(client.overdue || 0), 0))}.`, route: 'cobranza', action: 'go-collections', label: 'Ver cobranza' });
  if (undelivered.length) alerts.push({ icon: 'truck', title: `${undelivered.length} pedido${undelivered.length === 1 ? '' : 's'} por entregar`, detail: 'Actualiza el estado cuando completes la entrega.', route: 'ventas', action: 'go-sales', label: 'Ver ventas' });
  return alerts;
}
function updateNotificationBadge() {
  const count = getNotifications().length;
  const dot = document.querySelector('.notification-dot');
  if (dot) dot.hidden = count === 0;
  const trigger = document.querySelector('.notification-trigger');
  if (trigger) trigger.setAttribute('aria-label', count ? `Notificaciones: ${count} avisos` : 'Notificaciones: sin avisos');
}
function showNotifications() {
  const alerts = getNotifications();
  const body = alerts.length ? `<div class="notification-list">${alerts.map(alert => `<article class="notification-item"><span class="activity-icon">${icon(alert.icon)}</span><div><strong>${esc(alert.title)}</strong><p>${esc(alert.detail)}</p><button class="inline-link notification-link" data-action="${alert.action}">${esc(alert.label)} ${icon('arrow-right')}</button></div></article>`).join('')}</div>` : '<div class="empty-state">No hay avisos pendientes. Tu operación está al día.</div>';
  openModal('Avisos operativos', 'Alertas basadas en el inventario, la cobranza y las entregas actuales.', body);
}

function openModal(title, description, body) {
  document.getElementById('modal-root').innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-inner><div class="modal-header"><div><h2 id="modal-title">${esc(title)}</h2><p>${esc(description)}</p></div><button class="icon-button modal-close" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div><div class="modal-body">${body}</div></div></div>`;
}
function closeModal() { document.getElementById('modal-root').innerHTML = ''; }
function formField(label, name, type = 'text', value = '', options = '') {
  const numberAttrs = name === 'sale-quantity' ? 'min="1" step="1"' : name === 'product-stock' || name === 'product-min' ? 'min="0" step="1"' : 'min="0" step="0.01"';
  const extraAttrs = type === 'number' ? numberAttrs : type === 'tel' ? 'inputmode="tel" autocomplete="tel"' : '';
  return `<div class="form-field"><label for="${name}">${label}</label>${type === 'select' ? `<select id="${name}" name="${name}" required>${options}</select>` : `<input id="${name}" name="${name}" type="${type}" value="${esc(value)}" ${extraAttrs} required />`}</div>`;
}
function newClientModal() {
  openModal('Nuevo cliente', 'Crea una cuenta para dar seguimiento a sus compras y saldos.', `<form data-form="client"><div class="form-grid">${formField('Nombre comercial', 'client-name')}${formField('Contacto', 'client-contact')}${formField('Teléfono', 'client-phone', 'tel')}${formField('Segmento', 'client-segment', 'select', '', '<option>Mayoreo</option><option>Ruta centro</option><option>Contado</option><option>Otro</option>')}<div class="form-field full"><label for="client-notes">Notas internas</label><textarea id="client-notes" name="client-notes" placeholder="Escribe una nota opcional"></textarea></div></div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">Guardar cliente</button></div></form>`);
}
function newProductModal(product = null) {
  const editing = Boolean(product);
  openModal(editing ? 'Editar producto' : 'Nuevo producto', editing ? 'Actualiza los datos y el inventario disponible.' : 'Agrega un producto para mantener tus existencias al día.', `<form data-form="product" data-edit-sku="${product ? esc(product.sku) : ''}"><div class="form-grid">${formField('Nombre del producto', 'product-name', 'text', product?.name || '')}${formField('SKU', 'product-sku', 'text', product?.sku || '')}${formField('Categoría', 'product-category-modal', 'select', '', `<option ${product?.category === 'Abarrotes' ? 'selected' : ''}>Abarrotes</option><option ${product?.category === 'Bebidas' ? 'selected' : ''}>Bebidas</option><option ${product?.category === 'Limpieza' ? 'selected' : ''}>Limpieza</option>`)}${formField('Unidad de venta', 'product-unit', 'text', product?.unit || 'pza')}${formField('Costo', 'product-cost', 'number', product?.cost || '', '')}${formField('Precio de venta', 'product-price', 'number', product?.price || '')}${formField('Existencia', 'product-stock', 'number', product?.stock || 0)}${formField('Mínimo sugerido', 'product-min', 'number', product?.min || 5)}</div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${editing ? 'Guardar cambios' : 'Agregar producto'}</button></div></form>`);
}
function newPaymentModal(clientId = '') {
  const selected = clientId ? clientById(clientId) : null;
  const openClients = data.clients.filter(c => c.balance > 0);
  const clientOptions = openClients.length ? openClients.map(client => `<option value="${esc(client.id)}" ${selected?.id === client.id ? 'selected' : ''}>${esc(client.name)} · ${money(client.balance)}</option>`).join('') : '<option value="" selected>No hay cuentas abiertas</option>';
  const disabled = openClients.length ? '' : 'disabled';
  const hint = openClients.length ? '' : '<p class="form-hint">Primero registra una venta a crédito para poder aplicar un abono.</p>';
  openModal('Registrar abono', 'Aplica un pago y actualiza el saldo de una cuenta.', `<form data-form="payment"><div class="form-grid">${formField('Cliente', 'payment-client', 'select', '', clientOptions)}${formField('Monto', 'payment-amount', 'number', '')}${formField('Método de pago', 'payment-method', 'select', '', '<option>Efectivo</option><option>Transferencia</option><option>Tarjeta</option>')}<div class="form-field full"><label for="payment-reference">Referencia o nota</label><input id="payment-reference" name="payment-reference" placeholder="Ej. Abono de ruta" /></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Registrar abono</button></div></form>`);
}
function newSaleModal() {
  const clientOptions = data.clients.map(client => `<option value="${esc(client.id)}">${esc(client.name)}</option>`).join('');
  const hasProducts = data.products.length > 0;
  const productOptions = hasProducts ? data.products.map(product => `<option value="${esc(product.sku)}">${esc(product.name)} · ${money(product.price)} · ${product.stock} disponibles</option>`).join('') : '<option value="" selected>No hay productos disponibles</option>';
  const disabled = hasProducts ? '' : 'disabled';
  const hint = hasProducts ? '<p class="form-hint">La existencia se descuenta automáticamente al guardar.</p>' : '<p class="form-hint">Agrega primero un producto en Inventario para registrar una venta.</p>';
  openModal('Registrar venta', 'Crea un pedido y elige cómo quieres cobrarlo.', `<form data-form="sale"><div class="form-grid">${formField('Cliente', 'sale-client', 'select', '', `<option value="general">Cliente general</option>${clientOptions}`)}${formField('Producto principal', 'sale-product', 'select', '', productOptions)}${formField('Cantidad', 'sale-quantity', 'number', '1')}${formField('Forma de pago', 'sale-payment', 'select', '', '<option>Crédito</option><option>Efectivo</option><option>Transferencia</option>')}<div class="form-field full"><label for="sale-delivery">Entrega</label><select id="sale-delivery" name="sale-delivery" required><option>Por entregar</option><option>Entregado</option></select></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Guardar venta</button></div></form>`);
}
function viewClientModal(client) {
  openModal(client.name, `${esc(client.id)} · ${client.segment}`, `<div class="form-grid"><div class="form-field"><label>Contacto</label><input value="${esc(client.contact)}" readonly /></div><div class="form-field"><label>Teléfono</label><input value="${esc(client.phone)}" readonly /></div><div class="form-field"><label>Facturado histórico</label><input value="${money(client.billed)}" readonly /></div><div class="form-field"><label>Saldo actual</label><input value="${money(client.balance)}" readonly /></div></div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-primary" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Registrar abono</button></div>`);
}
function viewSaleModal(sale) {
  const client = clientById(sale.clientId);
  openModal(`Venta ${sale.id}`, `${client.name} · ${sale.date}`, `<div class="form-grid"><div class="form-field"><label>Cliente</label><input value="${esc(client.name)}" readonly /></div><div class="form-field"><label>Estado</label><input value="${sale.status === 'pending' ? 'Pendiente' : sale.status === 'partial' ? 'Parcial' : sale.status === 'paid' ? 'Pagada' : 'Vencida'}" readonly /></div><div class="form-field"><label>Total</label><input value="${money(sale.total)}" readonly /></div><div class="form-field"><label>Saldo</label><input value="${money(sale.balance)}" readonly /></div></div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-secondary" data-action="view-receipt" data-id="${esc(sale.id)}">${icon('receipt')} Ver recibo</button>${sale.balance ? `<button class="button button-primary" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Registrar abono</button>` : ''}</div>`);
}
function saleReceiptItems(sale) {
  if (Array.isArray(sale.items) && sale.items.length) return sale.items;
  return [{ sku: sale.id, name: 'Pedido de venta', quantity: 1, price: sale.total, total: sale.total }];
}
function receiptStatus(sale) {
  return sale.status === 'pending' ? 'Pendiente' : sale.status === 'partial' ? 'Pago parcial' : sale.status === 'paid' ? 'Pagada' : 'Vencida';
}
function receiptCode(sale) {
  const dateDigits = String(sale.date || '').replace(/\D/g, '').slice(-6) || '260917';
  const saleDigits = String(sale.id || '').replace(/\D/g, '').padStart(4, '0');
  return `PO${dateDigits}${saleDigits}`;
}
function receiptHTML(sale) {
  const client = clientById(sale.clientId);
  const items = saleReceiptItems(sale);
  const subtotal = Number(sale.total) || items.reduce((sum, item) => sum + (Number(item.total) || 0), 0);
  const paymentMethod = sale.paymentMethod || (sale.balance ? 'Crédito' : 'Pago completo');
  const project = client.name === 'Cliente general' ? 'Operación general' : `Distribuciones 53X - ${client.name}`;
  const paid = Math.max(0, subtotal - (Number(sale.balance) || 0));
  return `<div class="receipt-preview-wrap"><article class="receipt-sheet"><header class="receipt-head"><img class="receipt-logo" src="assets/logo-blue.png" alt="Mono Cromat &amp; Co." /><div class="receipt-brand"><div class="receipt-title-row"><h3>${esc(settingsState.businessName || 'Mono Cromat & Co.').toUpperCase()}</h3><span class="receipt-studio">// estudio creativo</span></div><p>Distribución y operación comercial</p></div><div class="receipt-ticket"><div class="receipt-barcode"></div><div class="receipt-code">${receiptCode(sale)}</div></div></header><section class="receipt-meta-grid"><div class="receipt-meta-item"><label>Fecha</label><span>${esc(sale.date)}</span></div><div class="receipt-meta-item"><label>Proyecto</label><span>${esc(project)}</span></div><div class="receipt-meta-item"><label>Representante</label><span>Mick</span></div><div class="receipt-meta-item"><label>Teléfono</label><span>${esc(client.phone || 'Por confirmar')}</span></div><div class="receipt-meta-item"><label>Email</label><span>hola@monocromatyco.com</span></div><div class="receipt-meta-item"><label>Forma de pago</label><span>${esc(paymentMethod)}</span></div></section><section class="receipt-detail-zone"><table class="receipt-table"><thead><tr><th>ITEM</th><th>Q</th><th>$ U</th><th>SUB TOTAL</th></tr></thead><tbody>${items.map(item => `<tr><td><span class="receipt-product">${esc(item.name)}</span><span class="receipt-product-sub">${esc(item.sku || '')}</span></td><td>${item.quantity || 1}</td><td>${money(item.price || item.total)}</td><td class="receipt-amount">${money(item.total || 0)}</td></tr>`).join('')}</tbody></table><div class="receipt-summary"><div class="receipt-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="receipt-summary-row"><span>I.V.A.</span><strong>—</strong></div><div class="receipt-summary-row receipt-summary-total"><span>Total</span><strong>${money(sale.total)}</strong></div><div class="receipt-summary-row"><span>Descuento</span><strong>—</strong></div><div class="receipt-summary-row receipt-summary-payable"><span>Por pagar</span><strong>${money(sale.balance)}</strong></div></div></section><section class="receipt-track"><h4 class="receipt-track-title">P.O. TRACK</h4><div class="receipt-track-grid"><div class="receipt-track-item"><label>FECHA</label><span>${esc(sale.date)}</span></div><div class="receipt-track-item"><label>ABONO</label><span>${money(paid)}</span></div><div class="receipt-track-item"><label>SALDO</label><span>${money(sale.balance)}</span></div><div class="receipt-track-item"><label>ESTADO</label><span>${sale.balance ? 'ANTICIPO' : 'PAGADO'}</span></div></div></section><section class="receipt-lower"><div><h4 class="receipt-payment-title">PAGOS</h4><div class="receipt-payment-copy">TRANSFERENCIAS A<br />CUENTA<br />CLABE<br />BENEFICIARIO:<br />BANCO:</div><div class="receipt-payment-box"></div></div><div class="receipt-terms"><h4>TÉRMINOS &amp; CONDICIONES</h4><p><strong>Propiedad intelectual:</strong> Los derechos de diseño se ceden al cliente únicamente tras el pago total.</p><p><strong>Aprobación:</strong> Si tu diseño es final, no se aceptan cambios ni devoluciones tras autorizar la impresión o publicación.</p><p><strong>Presupuestos:</strong> Válidos por 15 días. Trabajos extra se cotizan por separado.</p><p><strong>Entregas:</strong> Los tiempos son estimados y no nos hacemos responsables por retrasos externos.</p><p><strong>Pagos:</strong> Requiere 50% de anticipo para iniciar producción y 50% restante contra entrega.</p><p><strong>Garantía:</strong> Reportar cualquier defecto dentro de los 15 días hábiles posteriores a la entrega.</p></div></section><footer class="receipt-footer"><span><strong>${esc(settingsState.businessName || 'Mono Cromat & Co.').toUpperCase()}</strong> · estudio creativo<br />${esc(settingsState.address || 'Ciudad de México, México')}</span><span>${esc(settingsState.phone || '(+52) 55 4929 1166')}<br />hola@monocromatyco.com</span><span>www.monocromatyco.com</span></footer></article></div>`;
}
function viewReceiptModal(sale) {
  if (!sale) return;
  document.getElementById('modal-root').innerHTML = `<div class="modal-backdrop receipt-modal" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" data-modal-inner><div class="modal-header"><div><h2>Recibo ${esc(sale.id)}</h2><p>Vista previa lista para imprimir o compartir</p></div><button class="icon-button modal-close" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div><div class="modal-body">${receiptHTML(sale)}</div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-secondary" data-action="download-receipt" data-id="${esc(sale.id)}">${icon('download')} Descargar HTML</button><button class="button button-primary" data-action="print-receipt" data-id="${esc(sale.id)}">${icon('receipt')} Imprimir recibo</button></div></div></div>`;
}
function printReceipt() { window.print(); }
function downloadReceipt(sale) {
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Recibo ${esc(sale.id)} · Mono Cromat &amp; Co.</title><link rel="stylesheet" href="receipt-styles.css"></head><body>${receiptHTML(sale)}</body></html>`;
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `recibo-${sale.id.toLowerCase()}.html`; link.click(); URL.revokeObjectURL(link.href);
  toast('Recibo descargado como HTML.');
}

function handleFormSubmit(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (form.dataset.form === 'client') {
    const name = String(values['client-name'] || '').trim();
    const contact = String(values['client-contact'] || '').trim();
    const phone = String(values['client-phone'] || '').trim();
    if (!name || !contact || !phone) return toast('Completa nombre, contacto y teléfono.', true);
    if (data.clients.some(client => client.name.toLowerCase() === name.toLowerCase())) return toast('Ya existe un cliente con ese nombre.', true);
    const nextNumber = Math.max(0, ...data.clients.map(c => Number(c.id.replace(/\D/g, '')) || 0)) + 1;
    data.clients.unshift({ id: `C${String(nextNumber).padStart(3, '0')}`, name, segment: values['client-segment'], contact, phone, purchases: 0, billed: 0, balance: 0, overdue: 0, status: 'active', due: 'Sin compras' });
    saveData(); closeModal(); render(); toast('Cliente agregado correctamente.');
  }
  if (form.dataset.form === 'product') {
    const sku = String(values['product-sku'] || '').trim().toUpperCase();
    const name = String(values['product-name'] || '').trim();
    const cost = Number(values['product-cost']);
    const price = Number(values['product-price']);
    const stock = Number(values['product-stock']);
    const min = Number(values['product-min']);
    if (!sku || !name || !Number.isFinite(cost) || !Number.isFinite(price) || !Number.isFinite(stock) || !Number.isFinite(min)) return toast('Completa todos los datos del producto.', true);
    if (cost < 0 || price <= 0 || stock < 0 || min < 0) return toast('Costo, precio e inventario deben ser valores válidos.', true);
    if (price < cost) return toast('El precio de venta no puede ser menor al costo.', true);
    if (data.products.some(item => item.sku === sku && item.sku !== form.dataset.editSku)) return toast('Ya existe un producto con ese SKU.', true);
    const product = { sku, name, category: values['product-category-modal'], unit: String(values['product-unit'] || '').trim(), cost, price, stock, min };
    const index = data.products.findIndex(item => item.sku === form.dataset.editSku);
    if (index >= 0) data.products[index] = product; else data.products.unshift(product);
    saveData(); closeModal(); render(); toast(index >= 0 ? 'Producto actualizado.' : 'Producto agregado correctamente.');
  }
  if (form.dataset.form === 'payment') {
    const amount = Number(values['payment-amount']);
    const client = data.clients.find(item => item.id === values['payment-client']);
    if (!client) return toast('Selecciona una cuenta abierta.', true);
    if (!Number.isFinite(amount) || amount <= 0) return toast('Escribe un monto válido.', true);
    if (amount > client.balance) return toast(`El abono no puede superar el saldo de ${money(client.balance)}.`, true);
    client.balance = Math.max(0, Number(client.balance) - amount);
    if (client.overdue > 0) client.overdue = Math.max(0, Number(client.overdue) - amount);
    PosDomain.applyPaymentToSales(data.sales, client.id, amount);
    const nextPaymentNumber = Math.max(0, ...data.payments.map(payment => Number(String(payment.id).replace(/\D/g, '')) || 0)) + 1;
    data.payments.unshift({ id: `COB-${String(nextPaymentNumber).padStart(3, '0')}`, clientId: client.id, date: todayString(), amount, method: values['payment-method'], reference: String(values['payment-reference'] || '').trim() || 'Abono registrado' });
    saveData(); closeModal(); render(); toast(`Abono de ${money(amount)} registrado.`);
  }
  if (form.dataset.form === 'sale') {
    const product = data.products.find(item => item.sku === values['sale-product']);
    const client = data.clients.find(item => item.id === values['sale-client']);
    const quantity = Number(values['sale-quantity']);
    if (!product) return toast('Selecciona un producto disponible.', true);
    if (!client && values['sale-payment'] === 'Crédito') return toast('Selecciona un cliente para registrar una venta a crédito y llevar su saldo.', true);
    if (!Number.isInteger(quantity) || quantity < 1) return toast('La cantidad debe ser un número entero mayor a cero.', true);
    if (quantity > product.stock) return toast(`Solo hay ${product.stock} unidades disponibles de ${product.name}.`, true);
    const total = product.price * quantity;
    const paid = values['sale-payment'] === 'Crédito' ? 0 : total;
    const status = paid === total ? 'paid' : 'pending';
    const nextNumber = Math.max(0, ...data.sales.map(sale => Number(sale.id.replace(/\D/g, '')) || 0)) + 1;
    data.sales.unshift({ id: `V-${String(nextNumber).padStart(4, '0')}`, clientId: client?.id || 'general', date: todayString(), status, total, balance: total - paid, delivery: values['sale-delivery'], paymentMethod: values['sale-payment'], items: product ? [{ sku: product.sku, name: product.name, quantity, price: product.price, total }] : [] });
    if (client) { client.purchases += 1; client.billed += total; client.balance += total - paid; }
    if (product) product.stock = Math.max(0, product.stock - quantity);
    saveData(); closeModal(); render(); toast('Venta registrada correctamente.');
  }
}

function exportCSV(rows, filename) {
  const csv = rows.map(row => row.map(value => {
    let text = String(value ?? '');
    if (/^[\s]*[=+@\-\t\r]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  }).join(',')).join('\r\n');
  const blob = new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = filename; link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  toast('Archivo CSV listo para descargar.');
}
function exportReport() {
  exportCSV([['Folio', 'Cliente', 'Fecha', 'Estado', 'Entrega', 'Forma de pago', 'Total', 'Saldo'], ...data.sales.map(sale => [sale.id, clientById(sale.clientId).name, sale.date, sale.status, sale.delivery, sale.paymentMethod || '', sale.total, sale.balance])], 'mono-cromat-reporte-ventas.csv');
}
function exportData() {
  const backup = { schemaVersion: 1, exportedAt: new Date().toISOString(), state: { data, settings: settingsState } };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = `mono-cromat-respaldo-${todayString().replace(/\//g, '-')}.json`; link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  toast('Respaldo completo listo para descargar.');
}
function importBackup() {
  const input = document.createElement('input'); input.type = 'file'; input.accept = '.json,application/json';
  input.onchange = async () => {
    const file = input.files?.[0]; if (!file) return;
    if (file.size > 10_000_000) return toast('El respaldo supera el límite de 10 MB.', true);
    try {
      const backup = JSON.parse(await file.text());
      const imported = backup?.state;
      if (!imported?.data || !imported.settings || typeof imported.settings !== 'object') return toast('El archivo no tiene un formato de respaldo válido.', true);
      const importedSettings = { ...loadSettings(), ...imported.settings, preferences: { ...loadSettings().preferences, ...(imported.settings.preferences || {}) } };
      const candidate = { data: imported.data, settings: importedSettings };
      if (!PosDomain.isValidState(candidate)) return toast('El respaldo contiene datos incompletos, duplicados o inválidos.', true);
      if (!window.confirm('Restaurar este respaldo reemplazará los clientes, productos, ventas, abonos y ajustes actuales. ¿Deseas continuar?')) return;
      data = candidate.data;
      persistSettings(candidate.settings);
      saveData(); render(); toast('Respaldo restaurado correctamente.');
    } catch { toast('No se pudo leer el archivo de respaldo.', true); }
  };
  input.click();
}
function parseCSV(text) {
  const rows = []; let row = []; let cell = ''; let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]; const next = text[i + 1];
    if (char === '"' && quoted && next === '"') { cell += '"'; i += 1; continue; }
    if (char === '"') { quoted = !quoted; continue; }
    if (char === ',' && !quoted) { row.push(cell.trim()); cell = ''; continue; }
    if ((char === '\n' || char === '\r') && !quoted) { if (char === '\r' && next === '\n') i += 1; row.push(cell.trim()); if (row.some(value => value)) rows.push(row); row = []; cell = ''; continue; }
    cell += char;
  }
  if (cell || row.length) { row.push(cell.trim()); if (row.some(value => value)) rows.push(row); }
  return rows;
}
function chooseCSV() {
  const input = document.createElement('input'); input.type = 'file'; input.accept = '.csv,text/csv';
  input.onchange = async () => {
    const file = input.files?.[0]; if (!file) return;
    if (file.size > 10_000_000) return toast('El CSV supera el límite de 10 MB.', true);
    const rows = parseCSV(await file.text());
    if (rows.length < 2) return toast('El CSV no contiene filas para importar.', true);
    const normalize = value => value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const headers = rows.shift().map(normalize);
    const value = (row, names) => { const index = headers.findIndex(header => names.some(name => normalize(name) === header)); return index >= 0 ? String(row[index] || '').trim() : ''; };
    let imported = 0; let skipped = 0;
    if (currentRoute === 'clientes') {
      for (const row of rows) {
        const name = value(row, ['cliente', 'nombre', 'nombre comercial']);
        const contact = value(row, ['contacto']); const phone = value(row, ['telefono']);
        if (!name || data.clients.some(client => client.name.toLowerCase() === name.toLowerCase())) { skipped += 1; continue; }
        const number = names => { const raw = value(row, names); return raw === '' ? 0 : Number(raw); };
        const billed = number(['facturado']); const balance = number(['saldo']); const overdue = number(['vencido']); const purchases = number(['compras']);
        if (![billed, balance, overdue, purchases].every(Number.isFinite) || [billed, balance, overdue, purchases].some(value => value < 0) || !Number.isInteger(purchases)) { skipped += 1; continue; }
        let id = value(row, ['codigo', 'id']);
        if (!/^[A-Za-z0-9_-]{1,40}$/.test(id) || data.clients.some(client => client.id === id)) {
          const next = Math.max(0, ...data.clients.map(client => Number(String(client.id).replace(/\D/g, '')) || 0)) + 1;
          id = `C${String(next).padStart(3, '0')}`;
        }
        data.clients.push({ id, name, segment: value(row, ['segmento', 'tipo']) || 'General', contact, phone, purchases, billed, balance, overdue, status: overdue ? 'overdue' : 'active', due: 'Por revisar' });
        imported += 1;
      }
    } else if (currentRoute === 'productos') {
      for (const row of rows) {
        const name = value(row, ['producto', 'nombre']);
        const sku = value(row, ['sku', 'codigo']).toUpperCase();
        const parseNumber = (names, fallback = 0) => { const raw = value(row, names); return raw === '' ? fallback : Number(raw); };
        const cost = parseNumber(['costo']); const price = parseNumber(['precio', 'precio de venta']);
        const stock = parseNumber(['existencia', 'stock']); const min = parseNumber(['minimo', 'min']);
        const validSku = /^[A-Z0-9_-]{1,40}$/.test(sku) && !data.products.some(product => product.sku === sku);
        if (!name || !validSku || ![cost, price, stock, min].every(Number.isFinite) || cost < 0 || price <= 0 || price < cost || stock < 0 || min < 0) { skipped += 1; continue; }
        data.products.push({ sku, name, category: value(row, ['categoria']) || 'General', unit: value(row, ['unidad']) || 'pza', cost, price, stock, min });
        imported += 1;
      }
    } else { return toast('Para importar un CSV entra primero a Clientes o Inventario.', true); }
    if (!imported) return toast('No se importaron filas: revisa las columnas requeridas, los valores y los duplicados.', true);
    saveData(); render();
    toast(`${imported} registro${imported === 1 ? '' : 's'} importado${imported === 1 ? '' : 's'}${skipped ? `; ${skipped} fila${skipped === 1 ? '' : 's'} omitida${skipped === 1 ? '' : 's'}` : ''}.`);
  };
  input.click();
}
function saveSettings() {
  const settings = { ...settingsState, preferences: { ...settingsState.preferences } };
  document.querySelectorAll('[data-setting]').forEach(field => { settings[field.dataset.setting] = field.value.trim(); });
  persistSettings(settings);
  toast(cloudMode ? 'Cambios en proceso de sincronización.' : 'Cambios guardados correctamente.');
}
function clearAllData() {
  data = { clients: [], products: [], sales: [], payments: [] };
  saveData(); closeModal(); render(); toast('Todos los datos del espacio de trabajo fueron borrados.');
}
function toast(message, error = false) {
  const region = document.getElementById('toast-region'); const node = document.createElement('div'); node.className = 'toast'; node.innerHTML = `${icon(error ? 'warning' : 'check')}<span>${esc(message)}</span>`; region.appendChild(node); setTimeout(() => node.remove(), 3400);
}
function closeMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar.classList.contains('open')) return;
  sidebar.classList.remove('open');
  sidebar.setAttribute('aria-hidden', 'true');
  sidebar.inert = true;
  document.body.classList.remove('menu-open');
  document.querySelector('.floating-menu-trigger')?.setAttribute('aria-expanded', 'false');
  document.getElementById('main-content')?.removeAttribute('inert');
  document.querySelector('.floating-menu-trigger')?.removeAttribute('inert');
  document.querySelector('.floating-menu-trigger')?.focus();
}
function openMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.add('open');
  sidebar.removeAttribute('aria-hidden');
  sidebar.inert = false;
  document.body.classList.add('menu-open');
  document.querySelector('.floating-menu-trigger')?.setAttribute('aria-expanded', 'true');
  document.getElementById('main-content')?.setAttribute('inert', '');
  document.querySelector('.floating-menu-trigger')?.setAttribute('inert', '');
  requestAnimationFrame(() => sidebar.querySelector('[data-action="close-menu"]')?.focus());
}

function handleClick(event) {
  const actionNode = event.target.closest('[data-action]');
  if (actionNode) {
    // The backdrop owns close-modal, but clicks inside the dialog must not bubble into it.
    if (actionNode.dataset.action === 'close-modal' && actionNode.classList.contains('modal-backdrop') && event.target !== actionNode) return;
    const action = actionNode.dataset.action;
    if (action === 'open-menu') openMobileMenu();
    if (action === 'close-menu') closeMobileMenu();
    if (action === 'close-modal') closeModal();
    if (action === 'new-client') newClientModal();
    if (action === 'new-product') newProductModal();
    if (action === 'new-payment') newPaymentModal();
    if (action === 'new-sale') newSaleModal();
    if (action === 'view-client') viewClientModal(data.clients.find(client => client.id === actionNode.dataset.id));
    if (action === 'view-sale') viewSaleModal(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'view-receipt') viewReceiptModal(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'print-receipt') printReceipt();
    if (action === 'download-receipt') downloadReceipt(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'collect-client') { closeModal(); newPaymentModal(actionNode.dataset.id); }
    if (action === 'edit-product') newProductModal(data.products.find(product => product.sku === actionNode.dataset.id));
    if (action === 'mark-delivered') { const sale = data.sales.find(item => item.id === actionNode.dataset.id); if (sale) { sale.delivery = 'Entregado'; saveData(); render(); toast('Pedido marcado como entregado.'); } }
    if (action === 'export-data') exportData();
    if (action === 'export-report') exportReport();
    if (action === 'import-backup') importBackup();
    if (action === 'show-notifications') showNotifications();
    if (action === 'retry-connection') startApp();
    if (action === 'logout') logout();
    if (action === 'go-inventory' || action === 'go-collections' || action === 'go-sales') { closeModal(); location.hash = `#/${action === 'go-inventory' ? 'productos' : action === 'go-collections' ? 'cobranza' : 'ventas'}`; }
    if (action === 'export-sales') exportCSV([['Folio', 'Cliente', 'Fecha', 'Estado', 'Total', 'Saldo'], ...data.sales.map(sale => [sale.id, clientById(sale.clientId).name, sale.date, sale.status, sale.total, sale.balance])], 'mono-cromat-ventas.csv');
    if (action === 'export-collections') exportCSV([['Cliente', 'Saldo', 'Vencido', 'Contacto'], ...data.clients.filter(c => c.balance > 0).map(client => [client.name, client.balance, client.overdue, client.phone])], 'mono-cromat-cobranza.csv');
    if (action === 'import-csv') chooseCSV();
    if (action === 'focus-search') document.querySelector('.search-box input')?.focus();
    if (action === 'save-settings') saveSettings();
    if (action === 'settings-jump') document.getElementById(actionNode.dataset.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (action === 'clear-data' && window.confirm('¿Borrar todos los clientes, productos, ventas y abonos? Esta acción no se puede deshacer.')) clearAllData();
    if (action === 'toggle-setting') {
      const key = actionNode.dataset.preference;
      if (key && Object.hasOwn(settingsState.preferences, key)) {
        settingsState.preferences[key] = !settingsState.preferences[key];
        actionNode.classList.toggle('on', settingsState.preferences[key]);
        actionNode.setAttribute('aria-pressed', String(settingsState.preferences[key]));
        if (key === 'compactTables') document.body.classList.toggle('compact-tables', settingsState.preferences[key]);
        persistSettings(settingsState); updateNotificationBadge();
      }
    }
    if (action === 'close-modal' && event.target.closest('.modal-backdrop') && !event.target.closest('[data-modal-inner]')) closeModal();
  }
  if (event.target.closest('.nav-item')) closeMobileMenu();
  const filterNode = event.target.closest('[data-filter-group]');
  if (filterNode) {
    const group = filterNode.dataset.filterGroup; const filter = filterNode.dataset.filter;
    if (group === 'clients') currentClientFilter = filter;
    if (group === 'products') currentProductFilter = filter;
    if (group === 'sales') currentSalesFilter = filter;
    render();
  }
}
function handleInput(event) {
  if (!['client-search', 'product-search', 'sales-search'].includes(event.target.id)) return;
  searchTerm = event.target.value; const route = currentRoute; if (route === 'clientes') renderClients(); if (route === 'productos') renderProducts(); if (route === 'ventas') renderSales();
  const input = document.getElementById(event.target.id); if (input) { input.focus(); input.setSelectionRange(searchTerm.length, searchTerm.length); }
}
function handleSubmit(event) { const form = event.target.closest('form[data-form]'); if (form) { event.preventDefault(); handleFormSubmit(form); } }
function handleChange(event) {
  if (event.target.id === 'client-sort') { currentClientSort = event.target.value; renderClients(); }
  if (event.target.id === 'product-category') { currentProductCategory = event.target.value; renderProducts(); }
}

document.addEventListener('click', handleClick);
document.addEventListener('keydown', event => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar.classList.contains('open')) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMobileMenu(); return; }
  if (event.key !== 'Tab') return;
  const focusable = [...sidebar.querySelectorAll('a[href], button:not([disabled])')];
  if (!focusable.length) return;
  const first = focusable[0]; const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.addEventListener('input', handleInput);
document.addEventListener('submit', handleSubmit);
document.addEventListener('change', handleChange);
window.addEventListener('hashchange', () => { if (!document.getElementById('app-shell').hidden) render(); });
startApp();

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
