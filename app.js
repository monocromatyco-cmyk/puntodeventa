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
let currentRoute = routeFromHash();
let currentClientFilter = 'all';
let currentProductFilter = 'all';
let currentSalesFilter = 'all';
let searchTerm = '';

function loadData() {
  try {
    const saved = localStorage.getItem('mono-cromat-data');
    if (saved) return { ...initialData, ...JSON.parse(saved) };
  } catch (error) { /* fallback to demo data */ }
  return JSON.parse(JSON.stringify(initialData));
}
function saveData() { localStorage.setItem('mono-cromat-data', JSON.stringify(data)); }
function loadSettings() {
  const defaults = { businessName: 'Mono Cromat & Co.', rfc: 'MCO240101AB1', phone: '55 4000 2080', currency: 'MXN — Peso mexicano', address: 'Ciudad de México, México' };
  try { return { ...defaults, ...(JSON.parse(localStorage.getItem('mono-cromat-settings') || '{}')) }; } catch (error) { return defaults; }
}
function persistSettings(settings) { localStorage.setItem('mono-cromat-settings', JSON.stringify(settings)); }
function routeFromHash() { return (location.hash.replace(/^#\/?/, '').split('?')[0] || 'inicio'); }
function icon(name) { return ICONS[name] || ''; }
function esc(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function money(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(Number(value) || 0); }
function shortMoney(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(Number(value) || 0); }
function initials(name) { return String(name).split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
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
  return `<span class="badge ${className}">${label}</span>`;
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
  const currentMonth = money(0);
  const receivableRows = data.clients.filter(client => client.balance > 0).map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.phone)} · ${client.purchases} compra${client.purchases === 1 ? '' : 's'} abierta${client.purchases === 1 ? '' : 's'}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(client.due)}</td><td data-label="Acciones"><button class="table-action" data-action="collect-client" data-id="${client.id}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas por cobrar.</td></tr>';
  const latestSaleRows = data.sales.slice(0, 4).map(sale => `<tr><td data-label="Folio" class="money">${sale.id}</td><td data-label="Cliente"><strong>${esc(clientById(sale.clientId).name)}</strong><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Fecha">${sale.date}</td><td data-label="Estado">${statusBadge(sale.status)}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td></tr>`).join('') || '<tr><td class="empty-row" colspan="6">Aún no hay ventas registradas.</td></tr>';
  const hasOperationalData = data.clients.length || data.products.length || data.sales.length;
  setPage('Resumen', `
    ${pageHeader('Buenos días, Mick', 'Aquí tienes una lectura rápida de la operación de Mono Cromat & Co.', button('Registrar venta', 'new-sale', 'primary', 'plus'))}
    <section class="stats-grid">
      ${statCard('Ventas de hoy', currentMonth, '0 tickets · ticket promedio $0', 'receipt', true)}
      ${statCard('Cobrado hoy', '$0.00', 'Efectivo $0 · cambio $0', 'cash')}
      ${statCard('Por cobrar', money(receivable), `${data.clients.filter(c => c.balance > 0).length} clientes con saldo`, 'wallet')}
      ${statCard('Vencido', money(overdue), `${pendingOrders} pedido${pendingOrders === 1 ? '' : 's'} por entregar`, 'clock')}
    </section>
    <section class="content-grid">
      <article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ritmo de ventas</h2><p>Ingresos registrados en los últimos 7 días</p></div><div class="chart-toolbar"><button class="chart-period active">7 días</button><button class="chart-period">30 días</button></div></div><div class="panel-body"><div class="chart-total"><strong>$4,012</strong><span>+12.8% <span data-icon="arrow-up"></span></span></div><div class="chart-wrap"><div class="chart-grid"><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span></div><svg class="line-chart" viewBox="0 0 700 180" preserveAspectRatio="none" aria-label="Gráfica de ventas"><defs><linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#52e6ff" stop-opacity=".38"/><stop offset="1" stop-color="#52e6ff" stop-opacity="0"/></linearGradient></defs><path class="area" d="M0 153 C42 145 55 130 95 137 S150 119 191 128 S252 91 286 106 S337 86 380 101 S426 53 466 74 S514 42 548 64 S600 39 645 46 S676 31 700 34 L700 180 L0 180Z"/><path class="line" d="M0 153 C42 145 55 130 95 137 S150 119 191 128 S252 91 286 106 S337 86 380 101 S426 53 466 74 S514 42 548 64 S600 39 645 46 S676 31 700 34"/><circle class="point" cx="700" cy="34" r="4"/></svg><div class="chart-labels"><span>11 sep</span><span>12 sep</span><span>13 sep</span><span>14 sep</span><span>15 sep</span><span>16 sep</span><span>17 sep</span></div></div></div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Acciones rápidas</h2><p>Lo más usado en la operación diaria</p></div></div><div class="panel-body"><div class="quick-actions"><button class="quick-action" data-action="new-sale">${icon('receipt')}<span>Registrar venta</span></button><button class="quick-action" data-action="new-client">${icon('users')}<span>Nuevo cliente</span></button><button class="quick-action" data-action="new-payment">${icon('wallet')}<span>Registrar abono</span></button><button class="quick-action" data-action="export-data">${icon('download')}<span>Exportar datos</span></button></div></div></article>
    </section>
    <section class="section-grid">
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas por cobrar</h2><p>Prioriza los saldos que necesitan seguimiento</p></div><a class="inline-link" href="#/cobranza">Ver todo ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo</th><th>Vencido</th><th>Antigüedad</th><th></th></tr></thead><tbody>${receivableRows}</tbody></table></div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Antigüedad de saldos</h2><p>Distribución de la cartera actual</p></div></div><div class="panel-body"><div class="age-list"><div class="age-row"><label>0–30 días</label><div class="age-bar"><span style="width: 87%"></span></div><strong>${shortMoney(Math.max(receivable - overdue, 0))}</strong></div><div class="age-row"><label>31–60</label><div class="age-bar"><span class="lime" style="width: 22%"></span></div><strong>${shortMoney(overdue)}</strong></div><div class="age-row"><label>61–90</label><div class="age-bar"><span class="gray" style="width: 4%"></span></div><strong>$0</strong></div><div class="age-row"><label>+90</label><div class="age-bar"><span class="gray" style="width: 2%"></span></div><strong>$0</strong></div></div><div class="age-total"><span>Total cartera</span><strong>${money(receivable)}</strong></div></div></article>
    </section>
    <section class="section-grid" style="margin-top:17px"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimas ventas</h2><p>Actividad comercial reciente</p></div><a class="inline-link" href="#/ventas">Ver recibos ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Estado</th><th>Total</th><th>Saldo</th></tr></thead><tbody>${latestSaleRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Actividad reciente</h2><p>Lo último que pasó en tu cuenta</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>${hasOperationalData ? 'Datos operativos disponibles' : 'Espacio listo para comenzar'}</strong><span>${hasOperationalData ? 'Puedes seguir registrando movimientos desde las acciones rápidas.' : 'Comienza agregando tu primer cliente, producto o venta.'}</span></div></div><div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>Seguimiento recomendado</strong><span>${data.clients.filter(c => c.overdue > 0).length} cuenta${data.clients.filter(c => c.overdue > 0).length === 1 ? '' : 's'} con saldo vencido.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>Revisa el inventario bajo</strong><span>${data.products.filter(p => p.stock <= p.min).length} producto${data.products.filter(p => p.stock <= p.min).length === 1 ? '' : 's'} necesitan reposición.</span></div></div></div></div></article></section>
  `);
  hydrateIcons();
}

function renderClients() {
  const term = searchTerm.toLowerCase();
  const clients = data.clients.filter(client => {
    const matchesFilter = currentClientFilter === 'all' || (currentClientFilter === 'balance' && client.balance > 0) || (currentClientFilter === 'overdue' && client.overdue > 0) || (currentClientFilter === 'active' && client.status === 'active');
    const matchesSearch = !term || `${client.name} ${client.contact} ${client.phone} ${client.id}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
  const portfolio = data.clients.reduce((sum, client) => sum + client.balance, 0);
  setPage('Clientes', `${pageHeader('Clientes', `${data.clients.length} cuentas en tu cartera`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo cliente', 'new-client', 'primary', 'plus')}`)}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="client-search" type="search" placeholder="Buscar por nombre, teléfono o código" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentClientFilter === 'all' ? 'active' : ''}" data-filter-group="clients" data-filter="all">Todos</button><button class="filter-pill ${currentClientFilter === 'balance' ? 'active' : ''}" data-filter-group="clients" data-filter="balance">Con saldo</button><button class="filter-pill ${currentClientFilter === 'overdue' ? 'active' : ''}" data-filter-group="clients" data-filter="overdue">Vencidos</button><button class="filter-pill ${currentClientFilter === 'active' ? 'active' : ''}" data-filter-group="clients" data-filter="active">Activos</button></div><span class="select-control">Ordenar por <select id="client-sort"><option value="balance">Saldo</option><option value="name">Nombre</option><option value="recent">Más recientes</option></select></span></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${clients.length} cliente${clients.length === 1 ? '' : 's'}</h2><p>Cartera mostrada: <strong>${money(portfolio)}</strong></p></div><span class="panel-count">Vista de cartera</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Código</th><th>Cliente</th><th>Contacto</th><th>Compras</th><th>Facturado</th><th>Saldo</th><th>Vencido</th><th>Acciones</th></tr></thead><tbody>${clients.length ? clients.map(client => `<tr><td data-label="Código" class="sub-text">${client.id}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.segment)}</span></div></div></td><td data-label="Contacto"><strong>${esc(client.contact)}</strong><span class="sub-text">${esc(client.phone)}</span></td><td data-label="Compras">${client.purchases}</td><td data-label="Facturado">${money(client.billed)}</td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Acciones"><div style="display:flex; gap:5px"><button class="table-action" data-action="collect-client" data-id="${client.id}" title="Registrar abono">${icon('cash')}</button><button class="table-action" data-action="view-client" data-id="${client.id}" title="Ver cliente">${icon('eye')}</button></div></td></tr>`).join('') : '<tr><td class="empty-row" colspan="8">No encontramos clientes con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${clients.length} de ${data.clients.length}</span><div class="pagination-actions"><button class="page-btn active">1</button><button class="page-btn">2</button></div></div></article>`);
}

function renderProducts() {
  const term = searchTerm.toLowerCase();
  const products = data.products.filter(product => {
    const matchesFilter = currentProductFilter === 'all' || (currentProductFilter === 'low' && product.stock <= product.min) || (currentProductFilter === 'healthy' && product.stock > product.min);
    const matchesSearch = !term || `${product.name} ${product.sku} ${product.category}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
  const lowStock = data.products.filter(product => product.stock <= product.min);
  setPage('Inventario', `${pageHeader('Inventario', `${data.products.length} productos activos`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo producto', 'new-product', 'primary', 'plus')}`)}${lowStock.length ? `<div class="inventory-alert"><div class="alert-copy">${icon('warning')}<span><strong>Inventario bajo:</strong> ${lowStock.map(product => `${esc(product.name)} (${product.stock})`).join(', ')}</span></div><button class="table-action" data-filter-group="products" data-filter="low">Ver bajo inventario ${icon('arrow-right')}</button></div>` : ''}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="product-search" type="search" placeholder="Buscar por nombre o SKU" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentProductFilter === 'all' ? 'active' : ''}" data-filter-group="products" data-filter="all">Todos</button><button class="filter-pill ${currentProductFilter === 'low' ? 'active' : ''}" data-filter-group="products" data-filter="low">Bajo inventario</button><button class="filter-pill ${currentProductFilter === 'healthy' ? 'active' : ''}" data-filter-group="products" data-filter="healthy">Stock saludable</button></div><span class="select-control">Categoría <select id="product-category"><option>Todas</option><option>Abarrotes</option><option>Bebidas</option><option>Limpieza</option></select></span></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${products.length} productos</h2><p>Inventario disponible y márgenes de venta</p></div><span class="panel-count">Actualizado hace 2 min</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>SKU</th><th>Producto</th><th>Categoría</th><th>Unidad</th><th>Costo</th><th>Precio</th><th>Margen</th><th>Existencia</th><th>Acciones</th></tr></thead><tbody>${products.length ? products.map(product => { const margin = Math.round(((product.price - product.cost) / product.price) * 100); const low = product.stock <= product.min; return `<tr><td data-label="SKU" class="sub-text">${esc(product.sku)}</td><td data-label="Producto"><strong>${esc(product.name)}</strong></td><td data-label="Categoría">${esc(product.category)}</td><td data-label="Unidad">${esc(product.unit)}</td><td data-label="Costo">${money(product.cost)}</td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Margen"><span class="badge ${margin >= 22 ? 'badge-success' : 'badge-info'}">${margin}%</span></td><td data-label="Existencia" class="${low ? 'overdue' : 'money'}">${product.stock} ${low ? '<span class="sub-text">Reponer</span>' : ''}</td><td data-label="Acciones"><button class="table-action" data-action="edit-product" data-id="${esc(product.sku)}">${icon('edit')} Editar</button></td></tr>`; }).join('') : '<tr><td class="empty-row" colspan="9">No encontramos productos con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${products.length} de ${data.products.length}</span><div class="pagination-actions"><button class="page-btn active">1</button><button class="page-btn">2</button></div></div></article>`);
}

function renderSales() {
  const term = searchTerm.toLowerCase();
  const sales = data.sales.filter(sale => {
    const client = clientById(sale.clientId);
    const matchesFilter = currentSalesFilter === 'all' || sale.status === currentSalesFilter;
    return matchesFilter && (!term || `${sale.id} ${client.name}`.toLowerCase().includes(term));
  });
  const total = data.sales.reduce((sum, sale) => sum + sale.total, 0);
  const open = data.sales.reduce((sum, sale) => sum + sale.balance, 0);
  setPage('Ventas', `${pageHeader('Ventas', 'Registra, consulta y da seguimiento a tus pedidos', button('Registrar venta', 'new-sale', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Ventas acumuladas</span><strong class="mini-stat-value">${money(total)}</strong><span class="mini-stat-meta">${data.sales.length} tickets registrados</span></div><div class="mini-stat"><span class="mini-stat-label">Saldo pendiente</span><strong class="mini-stat-value">${money(open)}</strong><span class="mini-stat-meta">Por cobrar de pedidos abiertos</span></div><div class="mini-stat"><span class="mini-stat-label">Ticket promedio</span><strong class="mini-stat-value">${money(data.sales.length ? total / data.sales.length : 0)}</strong><span class="mini-stat-meta">Últimos 30 días</span></div></section><div class="filter-bar"><label class="search-box">${icon('search')}<input id="sales-search" type="search" placeholder="Buscar por folio o cliente" value="${esc(searchTerm)}" /></label><div class="filter-pills"><button class="filter-pill ${currentSalesFilter === 'all' ? 'active' : ''}" data-filter-group="sales" data-filter="all">Todas</button><button class="filter-pill ${currentSalesFilter === 'pending' ? 'active' : ''}" data-filter-group="sales" data-filter="pending">Pendientes</button><button class="filter-pill ${currentSalesFilter === 'partial' ? 'active' : ''}" data-filter-group="sales" data-filter="partial">Parciales</button><button class="filter-pill ${currentSalesFilter === 'paid' ? 'active' : ''}" data-filter-group="sales" data-filter="paid">Pagadas</button></div></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${sales.length} venta${sales.length === 1 ? '' : 's'}</h2><p>Historial comercial de tu operación</p></div><button class="table-action" data-action="export-sales">${icon('download')} Exportar</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Entrega</th><th>Estado</th><th>Total</th><th>Saldo</th><th>Acciones</th></tr></thead><tbody>${sales.length ? sales.map(sale => `<tr><td data-label="Folio" class="money">${sale.id}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(clientById(sale.clientId).name)}</span><div><strong>${esc(clientById(sale.clientId).name)}</strong><span>${esc(clientById(sale.clientId).phone || '')}</span></div></div></td><td data-label="Fecha">${sale.date}</td><td data-label="Entrega"><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Estado">${statusBadge(sale.status)}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td><td data-label="Acciones"><div style="display:flex; gap:5px"><button class="table-action" data-action="view-sale" data-id="${sale.id}" title="Ver venta">${icon('eye')}</button><button class="table-action" data-action="view-receipt" data-id="${sale.id}" title="Ver recibo">${icon('receipt')}</button>${sale.delivery === 'Por entregar' ? `<button class="table-action" data-action="mark-delivered" data-id="${sale.id}" title="Marcar entregada">${icon('truck')}</button>` : ''}</div></td></tr>`).join('') : '<tr><td class="empty-row" colspan="8">No hay ventas para mostrar.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${sales.length} de ${data.sales.length}</span><div class="pagination-actions"><button class="page-btn active">1</button><button class="page-btn">2</button></div></div></article>`);
}

function renderCollections() {
  const clients = data.clients.filter(client => client.balance > 0).sort((a, b) => b.overdue - a.overdue);
  const collected = data.payments.reduce((sum, payment) => sum + payment.amount, 0);
  const openAccountRows = clients.map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.contact)} · ${esc(client.phone)}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${client.overdue ? 'overdue' : ''}">${client.overdue ? money(client.overdue) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(client.due)}</td><td data-label="Acciones"><button class="table-action" data-action="collect-client" data-id="${client.id}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas abiertas.</td></tr>';
  const paymentRows = data.payments.slice(0, 5).map(payment => `<div class="delivery-row"><div class="delivery-main"><span class="delivery-icon">${icon('cash')}</span><div><strong>${esc(clientById(payment.clientId).name)}</strong><span>${payment.date} · ${esc(payment.method)}</span></div></div><div class="delivery-value"><strong>${money(payment.amount)}</strong><span>${esc(payment.reference)}</span></div></div>`).join('') || '<div class="empty-state">Aún no hay abonos registrados.</div>';
  setPage('Cobranza', `${pageHeader('Cobranza', 'Controla abonos, saldos pendientes y próximos vencimientos', button('Registrar abono', 'new-payment', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Cartera total</span><strong class="mini-stat-value">${money(data.clients.reduce((sum, client) => sum + client.balance, 0))}</strong><span class="mini-stat-meta">${clients.length} cuentas abiertas</span></div><div class="mini-stat"><span class="mini-stat-label">Vencido</span><strong class="mini-stat-value">${money(data.clients.reduce((sum, client) => sum + client.overdue, 0))}</strong><span class="mini-stat-meta">Requiere seguimiento</span></div><div class="mini-stat"><span class="mini-stat-label">Abonos registrados</span><strong class="mini-stat-value">${money(collected)}</strong><span class="mini-stat-meta">${data.payments.length} movimientos históricos</span></div></section><div class="sales-layout"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas abiertas</h2><p>Ordenadas por prioridad de cobranza</p></div><button class="table-action" data-action="export-collections">${icon('download')} Exportar</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo total</th><th>Vencido</th><th>Próximo vencimiento</th><th>Acción</th></tr></thead><tbody>${openAccountRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimos abonos</h2><p>Movimientos recientes</p></div></div><div class="panel-body"><div class="delivery-list">${paymentRows}</div></div></article></div>`);
}

function renderReports() {
  setPage('Reportes', `${pageHeader('Reportes', 'Analiza ventas, margen, inventario y cobranza en un mismo lugar', `${button('Exportar reporte', 'export-data', 'secondary', 'download')}${button('Crear reporte', 'show-report-toast', 'primary', 'plus')}`)}<div class="report-grid"><article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ventas por periodo</h2><p>Comparativa de facturación estimada</p></div><span class="badge badge-success">+12.8%</span></div><div class="panel-body"><div class="chart-total"><strong>${money(4012)}</strong><span>vs. periodo anterior</span></div><div class="chart-wrap"><div class="chart-grid"><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span></div><svg class="line-chart" viewBox="0 0 700 180" preserveAspectRatio="none"><defs><linearGradient id="report-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#52e6ff" stop-opacity=".42"/><stop offset="1" stop-color="#52e6ff" stop-opacity="0"/></linearGradient></defs><path class="area" fill="url(#report-fill)" d="M0 150 C60 142 78 114 125 124 S193 92 240 114 S305 70 349 86 S412 68 457 80 S524 42 560 64 S625 24 700 42 L700 180 L0 180Z"/><path class="line" d="M0 150 C60 142 78 114 125 124 S193 92 240 114 S305 70 349 86 S412 68 457 80 S524 42 560 64 S625 24 700 42"/><circle class="point" cx="700" cy="42" r="4"/></svg><div class="chart-labels"><span>11 sep</span><span>12 sep</span><span>13 sep</span><span>14 sep</span><span>15 sep</span><span>16 sep</span><span>17 sep</span></div></div></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Distribución de cartera</h2><p>Saldos por antigüedad</p></div></div><div class="donut-wrap"><div class="donut"><div class="donut-center"><strong>${shortMoney(data.clients.reduce((sum, client) => sum + client.balance, 0))}</strong><span>Total cartera</span></div></div><div class="legend"><div class="legend-item"><i class="legend-dot"></i><span>0–30 días</span><strong>87%</strong></div><div class="legend-item"><i class="legend-dot lime"></i><span>31–60 días</span><strong>13%</strong></div><div class="legend-item"><i class="legend-dot gray"></i><span>61–90 días</span><strong>0%</strong></div><div class="legend-item"><i class="legend-dot soft"></i><span>+90 días</span><strong>0%</strong></div></div></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Productos más rentables</h2><p>Margen bruto por unidad</p></div><a class="inline-link" href="#/productos">Ver inventario ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Producto</th><th>Margen</th><th>Precio</th><th>Stock</th></tr></thead><tbody>${[...data.products].sort((a,b) => ((b.price-b.cost)/b.price)-((a.price-a.cost)/a.price)).slice(0, 4).map(product => `<tr><td data-label="Producto"><strong>${esc(product.name)}</strong><span class="sub-text">${esc(product.sku)}</span></td><td data-label="Margen"><span class="badge badge-success">${Math.round(((product.price - product.cost) / product.price) * 100)}%</span></td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Stock">${product.stock}</td></tr>`).join('')}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Resumen operativo</h2><p>Indicadores para la siguiente acción</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>${data.products.filter(p => p.stock <= p.min).length} productos bajo mínimo</strong><span>Conviene programar una reposición esta semana.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>${data.clients.filter(c => c.overdue > 0).length} cuenta vencida</strong><span>Contacta a las cuentas con prioridad alta.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('truck')}</span><div class="activity-copy"><strong>${data.sales.filter(s => s.delivery === 'Por entregar').length} pedido por entregar</strong><span>Actualiza el estado al completar la ruta.</span></div></div></div></div></article></div>`);
}

function renderSettings() {
  const settings = loadSettings();
  setPage('Ajustes', `${pageHeader('Ajustes', 'Configura tu espacio de trabajo y la experiencia de tu equipo', button('Guardar cambios', 'save-settings', 'primary', 'check'))}<div class="settings-layout"><nav class="settings-nav"><button class="active">General</button><button>Equipo y permisos</button><button>Notificaciones</button><button>Datos y respaldo</button></nav><div><article class="settings-panel"><h2>Información del negocio</h2><p>Estos datos aparecen en tus recibos y reportes.</p><div class="form-grid"><div class="form-field"><label>Nombre comercial</label><input data-setting="businessName" value="${esc(settings.businessName)}" /></div><div class="form-field"><label>RFC</label><input data-setting="rfc" value="${esc(settings.rfc)}" /></div><div class="form-field"><label>Teléfono</label><input data-setting="phone" value="${esc(settings.phone)}" /></div><div class="form-field"><label>Moneda</label><select data-setting="currency"><option ${settings.currency === 'MXN — Peso mexicano' ? 'selected' : ''}>MXN — Peso mexicano</option></select></div><div class="form-field full"><label>Dirección</label><input data-setting="address" value="${esc(settings.address)}" /></div></div></article><article class="settings-panel"><h2>Preferencias de operación</h2><p>Personaliza cómo quieres trabajar dentro del panel.</p><div class="toggle-row"><div class="toggle-copy"><strong>Alertas de inventario</strong><span>Recibe una alerta cuando un producto llegue a su mínimo.</span></div><button class="toggle on" data-action="toggle-setting" aria-label="Cambiar alertas de inventario"></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Recordatorios de cobranza</strong><span>Marca las cuentas vencidas para darles seguimiento.</span></div><button class="toggle on" data-action="toggle-setting" aria-label="Cambiar recordatorios"></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Modo compacto en tablas</strong><span>Reduce el espacio vertical para ver más filas.</span></div><button class="toggle" data-action="toggle-setting" aria-label="Cambiar modo compacto"></button></div></article><article class="settings-panel"><h2>Respaldo de información</h2><p>Exporta tus datos para mantener una copia local de tu operación.</p><div class="heading-actions"><button class="button button-secondary" data-action="export-data">${icon('download')} Exportar datos</button><button class="button button-secondary" data-action="reset-demo">${icon('refresh')} Restaurar demo</button><button class="button button-danger" data-action="clear-data">${icon('trash')} Borrar datos de ejemplo</button></div></article></div></div>`);
}

function openModal(title, description, body) {
  document.getElementById('modal-root').innerHTML = `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-inner><div class="modal-header"><div><h2 id="modal-title">${title}</h2><p>${description}</p></div><button class="icon-button modal-close" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div><div class="modal-body">${body}</div></div></div>`;
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
  const clientOptions = openClients.length ? openClients.map(client => `<option value="${client.id}" ${selected?.id === client.id ? 'selected' : ''}>${esc(client.name)} · ${money(client.balance)}</option>`).join('') : '<option value="" selected>No hay cuentas abiertas</option>';
  const disabled = openClients.length ? '' : 'disabled';
  const hint = openClients.length ? '' : '<p class="form-hint">Primero registra una venta a crédito para poder aplicar un abono.</p>';
  openModal('Registrar abono', 'Aplica un pago y actualiza el saldo de una cuenta.', `<form data-form="payment"><div class="form-grid">${formField('Cliente', 'payment-client', 'select', '', clientOptions)}${formField('Monto', 'payment-amount', 'number', '')}${formField('Método de pago', 'payment-method', 'select', '', '<option>Efectivo</option><option>Transferencia</option><option>Tarjeta</option>')}<div class="form-field full"><label for="payment-reference">Referencia o nota</label><input id="payment-reference" name="payment-reference" placeholder="Ej. Abono de ruta" /></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Registrar abono</button></div></form>`);
}
function newSaleModal() {
  const clientOptions = data.clients.map(client => `<option value="${client.id}">${esc(client.name)}</option>`).join('');
  const hasProducts = data.products.length > 0;
  const productOptions = hasProducts ? data.products.map(product => `<option value="${product.sku}">${esc(product.name)} · ${money(product.price)} · ${product.stock} disponibles</option>`).join('') : '<option value="" selected>No hay productos disponibles</option>';
  const disabled = hasProducts ? '' : 'disabled';
  const hint = hasProducts ? '<p class="form-hint">La existencia se descuenta automáticamente al guardar.</p>' : '<p class="form-hint">Agrega primero un producto en Inventario para registrar una venta.</p>';
  openModal('Registrar venta', 'Crea un pedido y elige cómo quieres cobrarlo.', `<form data-form="sale"><div class="form-grid">${formField('Cliente', 'sale-client', 'select', '', `<option value="general">Cliente general</option>${clientOptions}`)}${formField('Producto principal', 'sale-product', 'select', '', productOptions)}${formField('Cantidad', 'sale-quantity', 'number', '1')}${formField('Forma de pago', 'sale-payment', 'select', '', '<option>Crédito</option><option>Efectivo</option><option>Transferencia</option>')}<div class="form-field full"><label for="sale-delivery">Entrega</label><select id="sale-delivery" name="sale-delivery" required><option>Por entregar</option><option>Entregado</option></select></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Guardar venta</button></div></form>`);
}
function viewClientModal(client) {
  openModal(client.name, `${client.id} · ${client.segment}`, `<div class="form-grid"><div class="form-field"><label>Contacto</label><input value="${esc(client.contact)}" readonly /></div><div class="form-field"><label>Teléfono</label><input value="${esc(client.phone)}" readonly /></div><div class="form-field"><label>Facturado histórico</label><input value="${money(client.billed)}" readonly /></div><div class="form-field"><label>Saldo actual</label><input value="${money(client.balance)}" readonly /></div></div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-primary" data-action="collect-client" data-id="${client.id}">${icon('cash')} Registrar abono</button></div>`);
}
function viewSaleModal(sale) {
  const client = clientById(sale.clientId);
  openModal(`Venta ${sale.id}`, `${client.name} · ${sale.date}`, `<div class="form-grid"><div class="form-field"><label>Cliente</label><input value="${esc(client.name)}" readonly /></div><div class="form-field"><label>Estado</label><input value="${sale.status === 'pending' ? 'Pendiente' : sale.status === 'partial' ? 'Parcial' : sale.status === 'paid' ? 'Pagada' : 'Vencida'}" readonly /></div><div class="form-field"><label>Total</label><input value="${money(sale.total)}" readonly /></div><div class="form-field"><label>Saldo</label><input value="${money(sale.balance)}" readonly /></div></div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-secondary" data-action="view-receipt" data-id="${sale.id}">${icon('receipt')} Ver recibo</button>${sale.balance ? `<button class="button button-primary" data-action="collect-client" data-id="${client.id}">${icon('cash')} Registrar abono</button>` : ''}</div>`);
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
  return `<div class="receipt-preview-wrap"><article class="receipt-sheet"><header class="receipt-head"><img class="receipt-logo" src="assets/logo-blue.png" alt="Mono Cromat &amp; Co." /><div class="receipt-brand"><div class="receipt-title-row"><h3>MONO CROMAT &amp; CO.</h3><span class="receipt-studio">// estudio creativo</span></div><p>Distribución y operación comercial</p></div><div class="receipt-ticket"><div class="receipt-barcode"></div><div class="receipt-code">${receiptCode(sale)}</div></div></header><section class="receipt-meta-grid"><div class="receipt-meta-item"><label>Fecha</label><span>${esc(sale.date)}</span></div><div class="receipt-meta-item"><label>Proyecto</label><span>${esc(project)}</span></div><div class="receipt-meta-item"><label>Representante</label><span>Mick</span></div><div class="receipt-meta-item"><label>Teléfono</label><span>${esc(client.phone || 'Por confirmar')}</span></div><div class="receipt-meta-item"><label>Email</label><span>hola@monocromatyco.com</span></div><div class="receipt-meta-item"><label>Forma de pago</label><span>${esc(paymentMethod)}</span></div></section><section class="receipt-detail-zone"><table class="receipt-table"><thead><tr><th>ITEM</th><th>Q</th><th>$ U</th><th>SUB TOTAL</th></tr></thead><tbody>${items.map(item => `<tr><td><span class="receipt-product">${esc(item.name)}</span><span class="receipt-product-sub">${esc(item.sku || '')}</span></td><td>${item.quantity || 1}</td><td>${money(item.price || item.total)}</td><td class="receipt-amount">${money(item.total || 0)}</td></tr>`).join('')}</tbody></table><div class="receipt-summary"><div class="receipt-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="receipt-summary-row"><span>I.V.A.</span><strong>—</strong></div><div class="receipt-summary-row receipt-summary-total"><span>Total</span><strong>${money(sale.total)}</strong></div><div class="receipt-summary-row"><span>Descuento</span><strong>—</strong></div><div class="receipt-summary-row receipt-summary-payable"><span>Por pagar</span><strong>${money(sale.balance)}</strong></div></div></section><section class="receipt-track"><h4 class="receipt-track-title">P.O. TRACK</h4><div class="receipt-track-grid"><div class="receipt-track-item"><label>FECHA</label><span>${esc(sale.date)}</span></div><div class="receipt-track-item"><label>ABONO</label><span>${money(paid)}</span></div><div class="receipt-track-item"><label>SALDO</label><span>${money(sale.balance)}</span></div><div class="receipt-track-item"><label>ESTADO</label><span>${sale.balance ? 'ANTICIPO' : 'PAGADO'}</span></div></div></section><section class="receipt-lower"><div><h4 class="receipt-payment-title">PAGOS</h4><div class="receipt-payment-copy">TRANSFERENCIAS A<br />CUENTA<br />CLABE<br />BENEFICIARIO:<br />BANCO:</div><div class="receipt-payment-box"></div></div><div class="receipt-terms"><h4>TÉRMINOS &amp; CONDICIONES</h4><p><strong>Propiedad intelectual:</strong> Los derechos de diseño se ceden al cliente únicamente tras el pago total.</p><p><strong>Aprobación:</strong> Si tu diseño es final, no se aceptan cambios ni devoluciones tras autorizar la impresión o publicación.</p><p><strong>Presupuestos:</strong> Válidos por 15 días. Trabajos extra se cotizan por separado.</p><p><strong>Entregas:</strong> Los tiempos son estimados y no nos hacemos responsables por retrasos externos.</p><p><strong>Pagos:</strong> Requiere 50% de anticipo para iniciar producción y 50% restante contra entrega.</p><p><strong>Garantía:</strong> Reportar cualquier defecto dentro de los 15 días hábiles posteriores a la entrega.</p></div></section><footer class="receipt-footer"><span><strong>MONO CROMAT &amp; CO.</strong> · estudio creativo<br />CDMX, México</span><span>(+52) 55 4929 1166<br />hola@monocromatyco.com</span><span>www.monocromatyco.com</span></footer></article></div>`;
}
function viewReceiptModal(sale) {
  if (!sale) return;
  document.getElementById('modal-root').innerHTML = `<div class="modal-backdrop receipt-modal" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" data-modal-inner><div class="modal-header"><div><h2>Recibo ${esc(sale.id)}</h2><p>Vista previa lista para imprimir o compartir</p></div><button class="icon-button modal-close" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div><div class="modal-body">${receiptHTML(sale)}</div><div class="form-actions"><button class="button button-secondary" data-action="close-modal">Cerrar</button><button class="button button-secondary" data-action="download-receipt" data-id="${sale.id}">${icon('download')} Descargar HTML</button><button class="button button-primary" data-action="print-receipt" data-id="${sale.id}">${icon('receipt')} Imprimir recibo</button></div></div></div>`;
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
    client.balance = Math.max(0, client.balance - amount);
    if (client.overdue > 0) client.overdue = Math.max(0, client.overdue - amount);
    data.payments.unshift({ id: `COB-${String(data.payments.length + 5).padStart(3, '0')}`, clientId: client.id, date: '17/09/2026', amount, method: values['payment-method'], reference: String(values['payment-reference'] || '').trim() || 'Abono registrado' });
    saveData(); closeModal(); render(); toast(`Abono de ${money(amount)} registrado.`);
  }
  if (form.dataset.form === 'sale') {
    const product = data.products.find(item => item.sku === values['sale-product']);
    const client = data.clients.find(item => item.id === values['sale-client']);
    const quantity = Number(values['sale-quantity']);
    if (!product) return toast('Selecciona un producto disponible.', true);
    if (!Number.isInteger(quantity) || quantity < 1) return toast('La cantidad debe ser un número entero mayor a cero.', true);
    if (quantity > product.stock) return toast(`Solo hay ${product.stock} unidades disponibles de ${product.name}.`, true);
    const total = product.price * quantity;
    const paid = values['sale-payment'] === 'Crédito' ? 0 : total;
    const status = paid === total ? 'paid' : 'pending';
    const nextNumber = Math.max(0, ...data.sales.map(sale => Number(sale.id.replace(/\D/g, '')) || 0)) + 1;
    data.sales.unshift({ id: `V-${String(nextNumber).padStart(4, '0')}`, clientId: client?.id || 'general', date: '17/09/2026', status, total, balance: total - paid, delivery: values['sale-delivery'], paymentMethod: values['sale-payment'], items: product ? [{ sku: product.sku, name: product.name, quantity, price: product.price, total }] : [] });
    if (client) { client.purchases += 1; client.billed += total; client.balance += total - paid; }
    if (product) product.stock = Math.max(0, product.stock - quantity);
    saveData(); closeModal(); render(); toast('Venta registrada correctamente.');
  }
}

function exportCSV(rows, filename) {
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = filename; link.click(); URL.revokeObjectURL(link.href);
  toast('Archivo CSV listo para descargar.');
}
function exportData() { exportCSV([['Tipo', 'Identificador', 'Nombre', 'Saldo', 'Estado'], ...data.clients.map(client => ['Cliente', client.id, client.name, client.balance, client.status]), ...data.products.map(product => ['Producto', product.sku, product.name, product.stock, product.stock <= product.min ? 'Bajo' : 'Disponible'])], 'mono-cromat-respaldo.csv'); }
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
    const rows = parseCSV(await file.text()); if (rows.length < 2) return toast('El CSV no contiene filas para importar.', true);
    const headers = rows.shift().map(header => header.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    const value = (row, names) => { const index = headers.findIndex(header => names.includes(header)); return index >= 0 ? row[index] : ''; };
    if (currentRoute === 'clientes') {
      rows.forEach(row => data.clients.push({ id: value(row, ['codigo', 'id']) || `C${String(data.clients.length + 1).padStart(3, '0')}`, name: value(row, ['cliente', 'nombre', 'nombre comercial']) || 'Cliente importado', segment: value(row, ['segmento', 'tipo']) || 'General', contact: value(row, ['contacto']) || '', phone: value(row, ['telefono', 'teléfono']) || '', purchases: Number(value(row, ['compras'])) || 0, billed: Number(value(row, ['facturado'])) || 0, balance: Number(value(row, ['saldo'])) || 0, overdue: Number(value(row, ['vencido'])) || 0, status: 'active', due: 'Por revisar' }));
    } else if (currentRoute === 'productos') {
      rows.forEach(row => data.products.push({ sku: value(row, ['sku', 'codigo']) || `SKU-${data.products.length + 1}`, name: value(row, ['producto', 'nombre']) || 'Producto importado', category: value(row, ['categoria', 'categoría']) || 'General', unit: value(row, ['unidad']) || 'pza', cost: Number(value(row, ['costo'])) || 0, price: Number(value(row, ['precio', 'precio de venta'])) || 0, stock: Number(value(row, ['existencia', 'stock'])) || 0, min: Number(value(row, ['minimo', 'mínimo', 'min'])) || 5 }));
    } else { return toast('Para importar un CSV entra primero a Clientes o Inventario.', true); }
    saveData(); render(); toast(`${rows.length} registro${rows.length === 1 ? '' : 's'} importado${rows.length === 1 ? '' : 's'}.`);
  };
  input.click();
}
function saveSettings() {
  const settings = loadSettings();
  document.querySelectorAll('[data-setting]').forEach(field => { settings[field.dataset.setting] = field.value.trim(); });
  persistSettings(settings);
  toast('Cambios guardados correctamente.');
}
function clearAllData() {
  data = { clients: [], products: [], sales: [], payments: [] };
  saveData(); closeModal(); render(); toast('Todos los datos de ejemplo fueron borrados.');
}
function toast(message, error = false) {
  const region = document.getElementById('toast-region'); const node = document.createElement('div'); node.className = 'toast'; node.innerHTML = `${icon(error ? 'warning' : 'check')}<span>${esc(message)}</span>`; region.appendChild(node); setTimeout(() => node.remove(), 3400);
}
function closeMobileMenu() { document.getElementById('sidebar').classList.remove('open'); }
function openMobileMenu() { document.getElementById('sidebar').classList.add('open'); }

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
    if (action === 'export-sales') exportCSV([['Folio', 'Cliente', 'Fecha', 'Estado', 'Total', 'Saldo'], ...data.sales.map(sale => [sale.id, clientById(sale.clientId).name, sale.date, sale.status, sale.total, sale.balance])], 'mono-cromat-ventas.csv');
    if (action === 'export-collections') exportCSV([['Cliente', 'Saldo', 'Vencido', 'Contacto'], ...data.clients.filter(c => c.balance > 0).map(client => [client.name, client.balance, client.overdue, client.phone])], 'mono-cromat-cobranza.csv');
    if (action === 'import-csv') chooseCSV();
    if (action === 'show-notifications') toast('No hay notificaciones nuevas.');
    if (action === 'focus-search') document.querySelector('.search-box input')?.focus();
    if (action === 'show-report-toast') toast('Reporte preparado. Puedes exportarlo cuando quieras.');
    if (action === 'save-settings') saveSettings();
    if (action === 'reset-demo') { data = JSON.parse(JSON.stringify(initialData)); saveData(); render(); toast('Datos de demo restaurados.'); }
    if (action === 'clear-data' && window.confirm('¿Borrar todos los clientes, productos, ventas y abonos de ejemplo? Esta acción no se puede deshacer.')) clearAllData();
    if (action === 'toggle-setting') actionNode.classList.toggle('on');
    if (action === 'close-modal' && event.target.closest('.modal-backdrop') && !event.target.closest('[data-modal-inner]')) closeModal();
  }
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

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('submit', handleSubmit);
window.addEventListener('hashchange', render);
render();

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
