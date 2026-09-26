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
    { id: 'V-0003', clientId: 'C001', date: '14/09/2026', dueDate: '2026-09-30', status: 'pending', total: 708.76, balance: 708.76, delivery: 'Por entregar' },
    { id: 'V-0002', clientId: 'C002', date: '29/08/2026', dueDate: '2026-09-26', status: 'partial', total: 1441.42, balance: 1141.42, delivery: 'Entregado' },
    { id: 'V-0001', clientId: 'C001', date: '17/08/2026', dueDate: '2026-09-14', status: 'overdue', total: 1176.24, balance: 276.24, delivery: 'Entregado' }
  ],
  payments: [
    { id: 'COB-004', clientId: 'C001', date: '16/09/2026', amount: 200, method: 'Transferencia', reference: 'Abono parcial · V-0001', saleId: 'V-0001', allocations: [{ saleId: 'V-0001', amount: 200 }] },
    { id: 'COB-003', clientId: 'C002', date: '29/08/2026', amount: 300, method: 'Efectivo', reference: 'V-0002', saleId: 'V-0002', allocations: [{ saleId: 'V-0002', amount: 300 }] },
    { id: 'COB-002', clientId: 'C001', date: '17/08/2026', amount: 700, method: 'Transferencia', reference: 'Anticipo · V-0001', saleId: 'V-0001', allocations: [{ saleId: 'V-0001', amount: 700 }] }
  ]
};

let data = loadData();
let lastSavedDataSnapshot = JSON.stringify(data);
let currentRoute = routeFromHash();
let currentClientFilter = 'all';
let currentProductFilter = 'all';
let currentSalesFilter = 'all';
let currentClientSort = 'balance';
let currentProductCategory = 'all';
let dashboardPeriod = 7;
let reportPeriod = 30;
let searchTerm = '';
let modalReturnFocus = null;

function loadData() {
  const fallback = JSON.parse(JSON.stringify(initialData));
  try {
    const saved = localStorage.getItem('mono-cromat-data');
    if (!saved) return fallback;
    const parsed = JSON.parse(saved);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return fallback;
    return normalizeData({
      clients: Array.isArray(parsed.clients) ? parsed.clients : fallback.clients,
      products: Array.isArray(parsed.products) ? parsed.products : fallback.products,
      sales: Array.isArray(parsed.sales) ? parsed.sales : fallback.sales,
      payments: Array.isArray(parsed.payments) ? parsed.payments : fallback.payments
    });
  } catch (error) {
    console.warn('No se pudieron leer los datos locales; se cargará la información de demo.', error);
    return fallback;
  }
}
function normalizeData(value) {
  const asText = (input, fallback = '') => String(input ?? fallback).trim();
  const asNumber = (input, fallback = 0) => {
    const parsed = Number(input);
    return Number.isFinite(parsed) ? parsed : fallback;
  };
  return {
    clients: (value.clients || []).filter(item => item && typeof item === 'object').map((item, index) => ({
      ...item,
      id: asText(item.id, `C${String(index + 1).padStart(3, '0')}`),
      name: asText(item.name, 'Cliente sin nombre'),
      segment: asText(item.segment, 'General'),
      contact: asText(item.contact),
      phone: asText(item.phone),
      notes: asText(item.notes),
      purchases: Math.max(0, asNumber(item.purchases)),
      billed: Math.max(0, asNumber(item.billed)),
      balance: Math.max(0, asNumber(item.balance)),
      overdue: Math.min(Math.max(0, asNumber(item.balance)), Math.max(0, asNumber(item.overdue))),
      status: ['active', 'inactive', 'overdue'].includes(item.status) ? item.status : 'active',
      due: asText(item.due, 'Por revisar')
    })),
    products: (value.products || []).filter(item => item && typeof item === 'object').map((item, index) => ({
      ...item,
      sku: asText(item.sku, `SKU-${index + 1}`).toUpperCase(),
      name: asText(item.name, 'Producto sin nombre'),
      category: asText(item.category, 'General'),
      unit: asText(item.unit, 'pza'),
      cost: Math.max(0, asNumber(item.cost)),
      price: Math.max(0, asNumber(item.price)),
      stock: Math.max(0, asNumber(item.stock)),
      min: Math.max(0, asNumber(item.min))
    })),
    sales: (value.sales || []).filter(item => item && typeof item === 'object').map((item, index) => ({
      ...item,
      id: asText(item.id, `V-${String(index + 1).padStart(4, '0')}`),
      clientId: asText(item.clientId, 'general'),
      date: asText(item.date, todayISO()),
      dueDate: (() => { const date = parseAppDate(item.dueDate); return date ? todayISO(date) : ''; })(),
      status: ['pending', 'partial', 'overdue', 'paid'].includes(item.status) ? item.status : 'pending',
      total: Math.max(0, asNumber(item.total)),
      balance: Math.max(0, Math.min(asNumber(item.total), asNumber(item.balance))),
      delivery: asText(item.delivery, 'Por entregar'),
      items: Array.isArray(item.items) ? item.items.filter(line => line && typeof line === 'object').map(line => ({
        ...line,
        sku: asText(line.sku),
        name: asText(line.name, 'Producto'),
        quantity: Math.max(1, asNumber(line.quantity, 1)),
        price: Math.max(0, asNumber(line.price)),
        total: Math.max(0, asNumber(line.total))
      })) : []
    })),
    payments: (value.payments || []).filter(item => item && typeof item === 'object').map((item, index) => ({
      ...item,
      id: asText(item.id, `COB-${String(index + 1).padStart(3, '0')}`),
      clientId: asText(item.clientId, 'general'),
      date: asText(item.date, todayISO()),
      amount: Math.max(0, asNumber(item.amount)),
      method: asText(item.method, 'Otro'),
      reference: asText(item.reference)
    }))
  };
}
function saveData() {
  try {
    const snapshot = JSON.stringify(data);
    localStorage.setItem('mono-cromat-data', snapshot);
    lastSavedDataSnapshot = snapshot;
    return true;
  } catch (error) {
    console.error('No fue posible guardar los datos en este dispositivo.', error);
    if (lastSavedDataSnapshot) data = normalizeData(JSON.parse(lastSavedDataSnapshot));
    toast('No se pudo guardar. Se revirtieron los cambios; libera espacio o descarga un respaldo.', true);
    return false;
  }
}
function loadSettings() {
  const defaults = {
    businessName: 'Mono Cromat & Co.',
    rfc: 'MCO240101AB1',
    phone: '55 4000 2080',
    email: 'hola@monocromatyco.com',
    currency: 'MXN — Peso mexicano',
    address: 'Ciudad de México, México',
    preferences: { inventoryAlerts: true, collectionAlerts: true, compactTables: false }
  };
  try {
    const stored = JSON.parse(localStorage.getItem('mono-cromat-settings') || '{}');
    return { ...defaults, ...stored, preferences: { ...defaults.preferences, ...(stored.preferences || {}) } };
  } catch (error) {
    return defaults;
  }
}
function persistSettings(settings) {
  try {
    localStorage.setItem('mono-cromat-settings', JSON.stringify(settings));
    return true;
  } catch (error) {
    toast('No se pudieron guardar los ajustes en este dispositivo.', true);
    return false;
  }
}
function routeFromHash() { return (location.hash.replace(/^#\/?/, '').split('?')[0] || 'inicio'); }
function icon(name) { return ICONS[name] || ''; }
function esc(value) { return String(value ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function money(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 }).format(Number(value) || 0); }
function shortMoney(value) { return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(Number(value) || 0); }
function roundMoney(value) { return Math.round((Number(value) + Number.EPSILON) * 100) / 100; }
function todayISO(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function parseAppDate(value) {
  if (value instanceof Date) return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  const raw = String(value || '').trim();
  let match = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (match) return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  match = raw.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/);
  if (match) return new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]));
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
}
function parseDateInput(value) {
  const raw = String(value || '').trim();
  const date = parseAppDate(raw);
  return date && todayISO(date) === raw ? date : null;
}
function dateKey(value) {
  const date = parseAppDate(value);
  return date ? todayISO(date) : '';
}
function formatDate(value, options = { day: 'numeric', month: 'short', year: 'numeric' }) {
  const date = parseAppDate(value);
  return date ? new Intl.DateTimeFormat('es-MX', options).format(date) : String(value || '—');
}
function shiftDate(date, days) {
  const shifted = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  shifted.setDate(shifted.getDate() + days);
  return shifted;
}
function salesForPeriod(days, offset = 0) {
  const today = parseAppDate(todayISO());
  const end = shiftDate(today, -offset);
  const start = shiftDate(end, -(days - 1));
  return data.sales.filter(sale => {
    const date = parseAppDate(sale.date);
    return date && date >= start && date <= end;
  });
}
function sumSales(sales) { return roundMoney(sales.reduce((sum, sale) => sum + (Number(sale.total) || 0), 0)); }
function saleIsOverdue(sale) {
  if (!sale || Number(sale.balance) <= 0) return false;
  if (sale.status === 'overdue') return true;
  const dueDate = parseAppDate(sale.dueDate);
  const today = parseAppDate(todayISO());
  return Boolean(dueDate && today && dueDate < today);
}
function effectiveSaleStatus(sale) {
  if (Number(sale.balance) <= 0) return 'paid';
  if (saleIsOverdue(sale)) return 'overdue';
  return sale.status === 'partial' ? 'partial' : 'pending';
}
function saleDueLabel(sale) {
  if (sale?.dueDate) return formatDate(sale.dueDate);
  return Number(sale?.balance) > 0 && sale.clientId !== 'general' ? 'Sin registrar' : 'No aplica';
}
function clientOverdueBalance(client) {
  const linkedOverdue = data.sales
    .filter(sale => sale.clientId === client.id && saleIsOverdue(sale))
    .reduce((sum, sale) => sum + (Number(sale.balance) || 0), 0);
  const accountBalance = Math.max(0, Number(client.balance) || 0);
  return roundMoney(Math.min(accountBalance, Math.max(Number(client.overdue) || 0, linkedOverdue)));
}
function totalOverdueBalance() {
  return roundMoney(data.clients.reduce((sum, client) => sum + clientOverdueBalance(client), 0));
}
function overdueClientCount() {
  return data.clients.filter(client => clientOverdueBalance(client) > 0).length;
}
function clientDueLabel(client) {
  const openSales = data.sales.filter(sale => sale.clientId === client.id && Number(sale.balance) > 0 && parseAppDate(sale.dueDate));
  const dueSales = openSales.filter(saleIsOverdue).sort((a, b) => parseAppDate(a.dueDate) - parseAppDate(b.dueDate));
  const upcomingSales = openSales.filter(sale => !saleIsOverdue(sale)).sort((a, b) => parseAppDate(a.dueDate) - parseAppDate(b.dueDate));
  const nextSale = dueSales[0] || upcomingSales[0];
  return nextSale ? formatDate(nextSale.dueDate) : String(client.due || 'Por revisar');
}
function periodChange(current, previous) {
  if (previous <= 0) return current > 0 ? 'Primera venta del periodo' : 'Sin ventas en este periodo';
  const change = Math.round(((current - previous) / previous) * 1000) / 10;
  return `${change > 0 ? '+' : ''}${change}% vs. periodo anterior`;
}
function chartMarkup(sales, days, gradientId) {
  const end = parseAppDate(todayISO());
  const start = shiftDate(end, -(days - 1));
  const totals = Array.from({ length: days }, (_, index) => {
    const date = shiftDate(start, index);
    const key = todayISO(date);
    return roundMoney(sales.filter(sale => dateKey(sale.date) === key).reduce((sum, sale) => sum + (Number(sale.total) || 0), 0));
  });
  const max = Math.max(...totals, 0);
  const points = totals.map((value, index) => {
    const x = days === 1 ? 350 : (index * 700) / (days - 1);
    const y = max > 0 ? 154 - (value / max) * 122 : 154;
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
  });
  const line = points.map((point, index) => `${index ? 'L' : 'M'}${point.x} ${point.y}`).join(' ');
  const area = `${line} L700 174 L0 174Z`;
  const ticks = Array.from({ length: 7 }, (_, index) => {
    const pointIndex = Math.round((index * (days - 1)) / 6);
    return formatDate(shiftDate(start, pointIndex), { day: 'numeric', month: 'short' });
  });
  return `<svg class="line-chart" viewBox="0 0 700 180" preserveAspectRatio="none" role="img" aria-label="Ventas por día durante ${days} días"><defs><linearGradient id="${gradientId}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#52e6ff" stop-opacity=".38"/><stop offset="1" stop-color="#52e6ff" stop-opacity="0"/></linearGradient></defs><path class="area" fill="url(#${gradientId})" d="${area}"/><path class="line" d="${line}"/><circle class="point" cx="${points[points.length - 1].x}" cy="${points[points.length - 1].y}" r="4"/></svg><div class="chart-labels">${ticks.map(label => `<span>${esc(label)}</span>`).join('')}</div>`;
}
function updateNotificationIndicator() {
  const overdueCount = overdueClientCount();
  const lowStockCount = data.products.filter(product => product.stock <= product.min).length;
  const count = overdueCount + lowStockCount;
  const dot = document.querySelector('.notification-dot');
  if (dot) dot.hidden = count === 0;
  const button = document.querySelector('.notification-trigger');
  if (button) button.setAttribute('aria-label', count ? `Notificaciones: ${count} alertas operativas` : 'Notificaciones: sin alertas pendientes');
  const badge = document.getElementById('collections-badge');
  const openAccounts = data.clients.filter(client => client.balance > 0).length;
  if (badge) {
    badge.textContent = openAccounts ? String(openAccounts) : '';
    badge.hidden = openAccounts === 0;
    badge.setAttribute('aria-label', `${openAccounts} cuentas abiertas`);
  }
}
function applyPreferences() {
  const settings = loadSettings();
  document.body.classList.toggle('compact-tables', Boolean(settings.preferences.compactTables));
}
function nextRecordId(prefix, records, width = 3) {
  const max = Math.max(0, ...records.map(record => Number(String(record.id ?? record.sku ?? '').replace(/\D/g, '')) || 0));
  return `${prefix}${String(max + 1).padStart(width, '0')}`;
}
function initials(name) {
  return esc(String(name || 'MC').trim().split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase() || 'MC');
}
function clientById(id) { return data.clients.find(client => client.id === id) || { name: 'Cliente general', phone: '' }; }
function statusBadge(status) {
  const badges = {
    pending: ['badge-warning', 'Pendiente'],
    partial: ['badge-info', 'Parcial'],
    overdue: ['badge-danger', 'Vencida'],
    paid: ['badge-success', 'Pagada'],
    delivered: ['badge-success', 'Entregada']
  };
  const [className, label] = badges[status] || ['badge-info', esc(status || 'Sin estado')];
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
  const dateLabel = document.getElementById('topbar-date-label');
  if (dateLabel) dateLabel.textContent = new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  document.getElementById('page-content').innerHTML = content;
  document.querySelectorAll('.nav-item').forEach(item => {
    const active = item.dataset.route === currentRoute || (currentRoute === 'dashboard' && item.dataset.route === 'inicio');
    item.classList.toggle('active', active);
    if (active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });
  hydrateIcons(document);
  updateNotificationIndicator();
  applyPreferences();
  window.scrollTo(0, 0);
}
function pageHeader(title, subtitle, actions = '') {
  return `<div class="page-heading"><div><h1 tabindex="-1">${title}</h1><p>${subtitle}</p></div><div class="heading-actions">${actions}</div></div>`;
}
function button(label, action, type = 'secondary', iconName = '') {
  return `<button type="button" class="button button-${type}" data-action="${action}">${iconName ? icon(iconName) : ''}<span>${label}</span></button>`;
}
function statCard(label, value, meta, iconName, highlight = false) {
  return `<article class="stat-card ${highlight ? 'stat-card-highlight' : ''}"><div class="stat-top"><span class="stat-label">${label}</span><span class="stat-icon">${icon(iconName)}</span></div><strong class="stat-value">${value}</strong><span class="stat-meta">${meta}</span></article>`;
}

function renderCurrentPage() {
  const pages = { inicio: renderDashboard, dashboard: renderDashboard, ventas: renderSales, clientes: renderClients, productos: renderProducts, cobranza: renderCollections, reportes: renderReports, ajustes: renderSettings };
  (pages[currentRoute] || renderDashboard)();
}
function render() {
  currentRoute = routeFromHash();
  searchTerm = '';
  renderCurrentPage();
  closeMobileMenu(false);
}

function renderDashboard() {
  const receivable = data.clients.reduce((sum, client) => sum + (Number(client.balance) || 0), 0);
  const overdue = totalOverdueBalance();
  const overdueClients = overdueClientCount();
  const pendingOrders = data.sales.filter(sale => sale.delivery === 'Por entregar').length;
  const todaySales = salesForPeriod(1);
  const todayTotal = sumSales(todaySales);
  const todayPayments = data.payments.filter(payment => dateKey(payment.date) === todayISO());
  const cashCollectedToday = roundMoney(todayPayments.reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0));
  const periodSales = salesForPeriod(dashboardPeriod);
  const previousSales = salesForPeriod(dashboardPeriod, dashboardPeriod);
  const periodTotal = sumSales(periodSales);
  const previousTotal = sumSales(previousSales);
  const chartChange = periodChange(periodTotal, previousTotal);
  const currentBalance = Math.max(0, receivable - overdue);
  const currentShare = receivable > 0 ? Math.round((currentBalance / receivable) * 100) : 0;
  const overdueShare = receivable > 0 ? 100 - currentShare : 0;
  const preferences = loadSettings().preferences;
  const receivableRows = data.clients.filter(client => client.balance > 0).map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.phone)} · ${client.purchases} compra${client.purchases === 1 ? '' : 's'}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${clientOverdueBalance(client) ? 'overdue' : ''}">${clientOverdueBalance(client) ? money(clientOverdueBalance(client)) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(clientDueLabel(client))}</td><td data-label="Acciones"><button type="button" class="table-action" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas por cobrar.</td></tr>';
  const latestSaleRows = [...data.sales].sort((a, b) => (parseAppDate(b.date)?.getTime() || 0) - (parseAppDate(a.date)?.getTime() || 0)).slice(0, 4).map(sale => `<tr><td data-label="Folio" class="money">${esc(sale.id)}</td><td data-label="Cliente"><strong>${esc(clientById(sale.clientId).name)}</strong><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Fecha">${esc(formatDate(sale.date))}</td><td data-label="Estado">${statusBadge(effectiveSaleStatus(sale))}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td></tr>`).join('') || '<tr><td class="empty-row" colspan="6">Aún no hay ventas registradas.</td></tr>';
  const hasOperationalData = Boolean(data.clients.length || data.products.length || data.sales.length);
  const operationalAlerts = [
    preferences.collectionAlerts ? `<div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>${overdueClients} cuenta${overdueClients === 1 ? '' : 's'} con saldo vencido</strong><span>${overdueClients ? 'Revisa la cartera y prioriza el seguimiento.' : 'No hay saldos vencidos registrados.'}</span></div></div>` : '',
    preferences.inventoryAlerts ? `<div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>${data.products.filter(product => product.stock <= product.min).length} producto${data.products.filter(product => product.stock <= product.min).length === 1 ? '' : 's'} bajo mínimo</strong><span>Comprueba la existencia y programa reposición cuando corresponda.</span></div></div>` : ''
  ].filter(Boolean).join('');
  const greeting = new Date().getHours() < 12 ? 'Buenos días' : new Date().getHours() < 19 ? 'Buenas tardes' : 'Buenas noches';
  setPage('Resumen', `
    ${pageHeader(`${greeting}, Mick`, 'Lectura rápida de la operación de Mono Cromat & Co.', button('Registrar venta', 'new-sale', 'primary', 'plus'))}
    <section class="stats-grid" aria-label="Indicadores del día">
      ${statCard('Ventas de hoy', money(todayTotal), `${todaySales.length} ticket${todaySales.length === 1 ? '' : 's'} · promedio ${money(todaySales.length ? todayTotal / todaySales.length : 0)}`, 'receipt', true)}
      ${statCard('Cobrado hoy', money(cashCollectedToday), `${todayPayments.length} movimiento${todayPayments.length === 1 ? '' : 's'} registrado${todayPayments.length === 1 ? '' : 's'}`, 'cash')}
      ${statCard('Por cobrar', money(receivable), `${data.clients.filter(client => client.balance > 0).length} clientes con saldo`, 'wallet')}
      ${statCard('Vencido', money(overdue), `${overdueClients} cuenta${overdueClients === 1 ? '' : 's'} con vencimiento`, 'clock')}
    </section>
    <section class="content-grid">
      <article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ritmo de ventas</h2><p>Importe de pedidos en los últimos ${dashboardPeriod} días</p></div><div class="chart-toolbar" role="group" aria-label="Periodo de ventas"><button type="button" class="chart-period ${dashboardPeriod === 7 ? 'active' : ''}" data-action="dashboard-period" data-period="7" aria-pressed="${dashboardPeriod === 7}">7 días</button><button type="button" class="chart-period ${dashboardPeriod === 30 ? 'active' : ''}" data-action="dashboard-period" data-period="30" aria-pressed="${dashboardPeriod === 30}">30 días</button></div></div><div class="panel-body"><div class="chart-total"><strong>${money(periodTotal)}</strong><span>${esc(chartChange)}</span></div><div class="chart-wrap"><div class="chart-grid"><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span></div>${chartMarkup(periodSales, dashboardPeriod, 'dashboard-area-fill')}</div></div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Acciones rápidas</h2><p>Operación diaria</p></div></div><div class="panel-body"><div class="quick-actions"><button class="quick-action" data-action="new-sale">${icon('receipt')}<span>Registrar venta</span></button><button class="quick-action" data-action="new-client">${icon('users')}<span>Nuevo cliente</span></button><button class="quick-action" data-action="new-payment">${icon('wallet')}<span>Registrar abono</span></button><button class="quick-action" data-action="export-backup">${icon('download')}<span>Crear respaldo</span></button></div></div></article>
    </section>
    <section class="section-grid">
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas por cobrar</h2><p>Clientes con saldo pendiente</p></div><a class="inline-link" href="#/cobranza">Ver todo ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo</th><th>Vencido</th><th>Vencimiento registrado</th><th></th></tr></thead><tbody>${receivableRows}</tbody></table></div></article>
      <article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Estado de cartera</h2><p>Solo se muestra lo que está capturado en el sistema</p></div></div><div class="panel-body"><div class="age-list"><div class="age-row"><label>Al corriente</label><div class="age-bar"><span style="width: ${currentShare}%"></span></div><strong>${money(currentBalance)}</strong></div><div class="age-row"><label>Vencido</label><div class="age-bar"><span class="lime" style="width: ${overdueShare}%"></span></div><strong>${money(overdue)}</strong></div></div><div class="age-total"><span>Total cartera</span><strong>${money(receivable)}</strong></div></div></article>
    </section>
    <section class="section-grid" style="margin-top:17px"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimas ventas</h2><p>Actividad comercial reciente</p></div><a class="inline-link" href="#/ventas">Ver ventas ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Estado</th><th>Total</th><th>Saldo</th></tr></thead><tbody>${latestSaleRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Revisión operativa</h2><p>Alertas basadas en tus registros</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('check')}</span><div class="activity-copy"><strong>${hasOperationalData ? 'Información operativa cargada' : 'Espacio listo para comenzar'}</strong><span>${hasOperationalData ? `${pendingOrders} pedido${pendingOrders === 1 ? '' : 's'} por entregar.` : 'Comienza agregando productos y clientes.'}</span></div></div>${operationalAlerts}</div></div></article></section>
  `);
}
function renderClients() {
  const term = searchTerm.toLowerCase().trim();
  let clients = data.clients.filter(client => {
    const matchesFilter = currentClientFilter === 'all'
      || (currentClientFilter === 'balance' && client.balance > 0)
      || (currentClientFilter === 'overdue' && clientOverdueBalance(client) > 0)
      || (currentClientFilter === 'active' && client.status !== 'inactive');
    const matchesSearch = !term || `${client.name} ${client.contact} ${client.phone} ${client.id}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });
  clients = [...clients].sort((a, b) => {
    if (currentClientSort === 'name') return a.name.localeCompare(b.name, 'es');
    if (currentClientSort === 'recent') return (Number(String(b.id).replace(/\D/g, '')) || 0) - (Number(String(a.id).replace(/\D/g, '')) || 0);
    return b.balance - a.balance;
  });
  const portfolio = data.clients.reduce((sum, client) => sum + client.balance, 0);
  const rows = clients.map(client => `<tr><td data-label="Código" class="sub-text">${esc(client.id)}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.segment)}</span></div></div></td><td data-label="Contacto"><strong>${esc(client.contact || 'Sin contacto')}</strong><span class="sub-text">${esc(client.phone || 'Sin teléfono')}</span></td><td data-label="Compras">${client.purchases}</td><td data-label="Facturado">${money(client.billed)}</td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${clientOverdueBalance(client) ? 'overdue' : ''}">${clientOverdueBalance(client) ? money(clientOverdueBalance(client)) : '—'}</td><td data-label="Acciones"><div class="table-actions"><button type="button" class="table-action" data-action="collect-client" data-id="${esc(client.id)}" title="Registrar abono" aria-label="Registrar abono a ${esc(client.name)}">${icon('cash')}</button><button type="button" class="table-action" data-action="view-client" data-id="${esc(client.id)}" title="Ver cliente" aria-label="Ver ${esc(client.name)}">${icon('eye')}</button></div></td></tr>`).join('');
  setPage('Clientes', `${pageHeader('Clientes', `${data.clients.length} cuentas en tu cartera`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo cliente', 'new-client', 'primary', 'plus')}`)}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="client-search" type="search" placeholder="Buscar por nombre, teléfono o código" value="${esc(searchTerm)}" /></label><div class="filter-pills" role="group" aria-label="Filtrar clientes"><button type="button" class="filter-pill ${currentClientFilter === 'all' ? 'active' : ''}" data-filter-group="clients" data-filter="all" aria-pressed="${currentClientFilter === 'all'}">Todos</button><button type="button" class="filter-pill ${currentClientFilter === 'balance' ? 'active' : ''}" data-filter-group="clients" data-filter="balance" aria-pressed="${currentClientFilter === 'balance'}">Con saldo</button><button type="button" class="filter-pill ${currentClientFilter === 'overdue' ? 'active' : ''}" data-filter-group="clients" data-filter="overdue" aria-pressed="${currentClientFilter === 'overdue'}">Vencidos</button><button type="button" class="filter-pill ${currentClientFilter === 'active' ? 'active' : ''}" data-filter-group="clients" data-filter="active" aria-pressed="${currentClientFilter === 'active'}">Activos</button></div><label class="select-control">Ordenar por <select id="client-sort"><option value="balance" ${currentClientSort === 'balance' ? 'selected' : ''}>Saldo</option><option value="name" ${currentClientSort === 'name' ? 'selected' : ''}>Nombre</option><option value="recent" ${currentClientSort === 'recent' ? 'selected' : ''}>Más recientes</option></select></label></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${clients.length} cliente${clients.length === 1 ? '' : 's'}</h2><p>Cartera total: <strong>${money(portfolio)}</strong></p></div><span class="panel-count">${clients.length} resultado${clients.length === 1 ? '' : 's'}</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Código</th><th>Cliente</th><th>Contacto</th><th>Compras</th><th>Facturado</th><th>Saldo</th><th>Vencido</th><th>Acciones</th></tr></thead><tbody>${rows || '<tr><td class="empty-row" colspan="8">No encontramos clientes con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${clients.length} de ${data.clients.length} clientes</span></div></article>`);
}
function renderProducts() {
  const term = searchTerm.toLowerCase().trim();
  const categories = [...new Set(data.products.map(product => product.category).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'es'));
  const products = data.products.filter(product => {
    const matchesFilter = currentProductFilter === 'all' || (currentProductFilter === 'low' && product.stock <= product.min) || (currentProductFilter === 'healthy' && product.stock > product.min);
    const matchesSearch = !term || `${product.name} ${product.sku} ${product.category}`.toLowerCase().includes(term);
    const matchesCategory = currentProductCategory === 'all' || product.category === currentProductCategory;
    return matchesFilter && matchesSearch && matchesCategory;
  });
  const lowStock = data.products.filter(product => product.stock <= product.min);
  const preferences = loadSettings().preferences;
  const categoryOptions = categories.map(category => `<option value="${esc(category)}" ${currentProductCategory === category ? 'selected' : ''}>${esc(category)}</option>`).join('');
  const rows = products.map(product => {
    const margin = product.price > 0 ? Math.round(((product.price - product.cost) / product.price) * 100) : null;
    const low = product.stock <= product.min;
    return `<tr><td data-label="SKU" class="sub-text">${esc(product.sku)}</td><td data-label="Producto"><strong>${esc(product.name)}</strong></td><td data-label="Categoría">${esc(product.category)}</td><td data-label="Unidad">${esc(product.unit)}</td><td data-label="Costo">${money(product.cost)}</td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Margen">${margin === null ? '—' : `<span class="badge ${margin >= 22 ? 'badge-success' : 'badge-info'}">${margin}%</span>`}</td><td data-label="Existencia" class="${low ? 'overdue' : 'money'}">${product.stock} <span class="sub-text">${low ? 'Reponer' : esc(product.unit)}</span></td><td data-label="Acciones"><button type="button" class="table-action" data-action="edit-product" data-id="${esc(product.sku)}">${icon('edit')} Editar</button></td></tr>`;
  }).join('');
  setPage('Inventario', `${pageHeader('Inventario', `${data.products.length} productos registrados`, `${button('Importar CSV', 'import-csv', 'secondary', 'upload')}${button('Nuevo producto', 'new-product', 'primary', 'plus')}`)}${lowStock.length && preferences.inventoryAlerts ? `<div class="inventory-alert"><div class="alert-copy">${icon('warning')}<span><strong>${lowStock.length} producto${lowStock.length === 1 ? '' : 's'} en o bajo mínimo:</strong> ${lowStock.slice(0, 3).map(product => `${esc(product.name)} (${product.stock})`).join(', ')}${lowStock.length > 3 ? ` y ${lowStock.length - 3} más` : ''}</span></div><button type="button" class="table-action" data-filter-group="products" data-filter="low">Ver bajo inventario ${icon('arrow-right')}</button></div>` : ''}<div class="filter-bar"><label class="search-box">${icon('search')}<input id="product-search" type="search" placeholder="Buscar por nombre, SKU o categoría" value="${esc(searchTerm)}" /></label><div class="filter-pills" role="group" aria-label="Filtrar inventario"><button type="button" class="filter-pill ${currentProductFilter === 'all' ? 'active' : ''}" data-filter-group="products" data-filter="all" aria-pressed="${currentProductFilter === 'all'}">Todos</button><button type="button" class="filter-pill ${currentProductFilter === 'low' ? 'active' : ''}" data-filter-group="products" data-filter="low" aria-pressed="${currentProductFilter === 'low'}">Bajo inventario</button><button type="button" class="filter-pill ${currentProductFilter === 'healthy' ? 'active' : ''}" data-filter-group="products" data-filter="healthy" aria-pressed="${currentProductFilter === 'healthy'}">Stock saludable</button></div><label class="select-control">Categoría <select id="product-category"><option value="all" ${currentProductCategory === 'all' ? 'selected' : ''}>Todas</option>${categoryOptions}</select></label></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${products.length} producto${products.length === 1 ? '' : 's'}</h2><p>Existencias, costo, precio y margen unitario</p></div><span class="panel-count">${lowStock.length} en/bajo mínimo</span></div><div class="table-scroll"><table class="data-table"><thead><tr><th>SKU</th><th>Producto</th><th>Categoría</th><th>Unidad</th><th>Costo</th><th>Precio</th><th>Margen</th><th>Existencia</th><th>Acciones</th></tr></thead><tbody>${rows || '<tr><td class="empty-row" colspan="9">No encontramos productos con esos criterios.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${products.length} de ${data.products.length} productos</span></div></article>`);
}
function renderSales() {
  const term = searchTerm.toLowerCase().trim();
  const sales = data.sales.filter(sale => {
    const client = clientById(sale.clientId);
    const matchesFilter = currentSalesFilter === 'all' || effectiveSaleStatus(sale) === currentSalesFilter;
    return matchesFilter && (!term || `${sale.id} ${client.name} ${client.phone || ''}`.toLowerCase().includes(term));
  }).sort((a, b) => (parseAppDate(b.date)?.getTime() || 0) - (parseAppDate(a.date)?.getTime() || 0));
  const total = sumSales(data.sales);
  const open = roundMoney(data.sales.reduce((sum, sale) => sum + (Number(sale.balance) || 0), 0));
  const rows = sales.map(sale => {
    const client = clientById(sale.clientId);
    const actions = `<div class="table-actions"><button type="button" class="table-action" data-action="view-sale" data-id="${esc(sale.id)}" title="Ver venta" aria-label="Ver venta ${esc(sale.id)}">${icon('eye')}</button><button type="button" class="table-action" data-action="view-receipt" data-id="${esc(sale.id)}" title="Ver recibo" aria-label="Ver recibo ${esc(sale.id)}">${icon('receipt')}</button>${sale.delivery === 'Por entregar' ? `<button type="button" class="table-action" data-action="mark-delivered" data-id="${esc(sale.id)}" title="Marcar entregada" aria-label="Marcar venta ${esc(sale.id)} como entregada">${icon('truck')}</button>` : ''}</div>`;
    return `<tr><td data-label="Folio" class="money">${esc(sale.id)}</td><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.phone || '')}</span></div></div></td><td data-label="Fecha">${esc(formatDate(sale.date))}</td><td data-label="Vence">${esc(saleDueLabel(sale))}</td><td data-label="Entrega"><span class="sub-text">${esc(sale.delivery)}</span></td><td data-label="Estado">${statusBadge(effectiveSaleStatus(sale))}</td><td data-label="Total" class="money">${money(sale.total)}</td><td data-label="Saldo" class="${sale.balance ? 'overdue' : ''}">${money(sale.balance)}</td><td data-label="Acciones">${actions}</td></tr>`;
  }).join('');
  setPage('Ventas', `${pageHeader('Ventas', 'Registra, consulta y da seguimiento a tus pedidos', button('Registrar venta', 'new-sale', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Ventas acumuladas</span><strong class="mini-stat-value">${money(total)}</strong><span class="mini-stat-meta">${data.sales.length} tickets registrados</span></div><div class="mini-stat"><span class="mini-stat-label">Saldo en pedidos</span><strong class="mini-stat-value">${money(open)}</strong><span class="mini-stat-meta">Saldo pendiente de ventas registradas</span></div><div class="mini-stat"><span class="mini-stat-label">Ticket promedio</span><strong class="mini-stat-value">${money(data.sales.length ? total / data.sales.length : 0)}</strong><span class="mini-stat-meta">Promedio histórico</span></div></section><div class="filter-bar"><label class="search-box">${icon('search')}<input id="sales-search" type="search" placeholder="Buscar por folio, cliente o teléfono" value="${esc(searchTerm)}" /></label><div class="filter-pills" role="group" aria-label="Filtrar ventas"><button type="button" class="filter-pill ${currentSalesFilter === 'all' ? 'active' : ''}" data-filter-group="sales" data-filter="all" aria-pressed="${currentSalesFilter === 'all'}">Todas</button><button type="button" class="filter-pill ${currentSalesFilter === 'pending' ? 'active' : ''}" data-filter-group="sales" data-filter="pending" aria-pressed="${currentSalesFilter === 'pending'}">Pendientes</button><button type="button" class="filter-pill ${currentSalesFilter === 'partial' ? 'active' : ''}" data-filter-group="sales" data-filter="partial" aria-pressed="${currentSalesFilter === 'partial'}">Parciales</button><button type="button" class="filter-pill ${currentSalesFilter === 'overdue' ? 'active' : ''}" data-filter-group="sales" data-filter="overdue" aria-pressed="${currentSalesFilter === 'overdue'}">Vencidas</button><button type="button" class="filter-pill ${currentSalesFilter === 'paid' ? 'active' : ''}" data-filter-group="sales" data-filter="paid" aria-pressed="${currentSalesFilter === 'paid'}">Pagadas</button></div></div><article class="panel table-panel"><div class="panel-header"><div class="panel-heading"><h2>${sales.length} venta${sales.length === 1 ? '' : 's'}</h2><p>Historial comercial de la operación</p></div><button type="button" class="table-action" data-action="export-sales">${icon('download')} Exportar CSV</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Folio</th><th>Cliente</th><th>Fecha</th><th>Vence</th><th>Entrega</th><th>Estado</th><th>Total</th><th>Saldo</th><th>Acciones</th></tr></thead><tbody>${rows || '<tr><td class="empty-row" colspan="9">No hay ventas para mostrar.</td></tr>'}</tbody></table></div><div class="pagination"><span>Mostrando ${sales.length} de ${data.sales.length} ventas</span></div></article>`);
}
function renderCollections() {
  const clients = data.clients.filter(client => client.balance > 0).sort((a, b) => clientOverdueBalance(b) - clientOverdueBalance(a) || b.balance - a.balance);
  const collected = roundMoney(data.payments.reduce((sum, payment) => sum + (Number(payment.amount) || 0), 0));
  const openAccountRows = clients.map(client => `<tr><td data-label="Cliente"><div class="primary-cell"><span class="row-avatar">${initials(client.name)}</span><div><strong>${esc(client.name)}</strong><span>${esc(client.contact || 'Sin contacto')} · ${esc(client.phone || 'Sin teléfono')}</span></div></div></td><td data-label="Saldo" class="money">${money(client.balance)}</td><td data-label="Vencido" class="${clientOverdueBalance(client) ? 'overdue' : ''}">${clientOverdueBalance(client) ? money(clientOverdueBalance(client)) : '—'}</td><td data-label="Vencimiento" class="sub-text">${esc(clientDueLabel(client))}</td><td data-label="Acciones"><button type="button" class="table-action" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Abonar</button></td></tr>`).join('') || '<tr><td class="empty-row" colspan="5">No hay cuentas abiertas.</td></tr>';
  const recentPayments = [...data.payments].sort((a, b) => (parseAppDate(b.date)?.getTime() || 0) - (parseAppDate(a.date)?.getTime() || 0)).slice(0, 8);
  const paymentRows = recentPayments.map(payment => `<div class="delivery-row"><div class="delivery-main"><span class="delivery-icon">${icon('cash')}</span><div><strong>${esc(clientById(payment.clientId).name)}</strong><span>${esc(formatDate(payment.date))} · ${esc(payment.method)}</span></div></div><div class="delivery-value"><strong>${money(payment.amount)}</strong><span>${esc(payment.reference || 'Sin referencia')}</span></div></div>`).join('') || '<div class="empty-state">Aún no hay abonos registrados.</div>';
  setPage('Cobranza', `${pageHeader('Cobranza', 'Consulta saldos, vencimientos y abonos registrados', button('Registrar abono', 'new-payment', 'primary', 'plus'))}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Cartera total</span><strong class="mini-stat-value">${money(data.clients.reduce((sum, client) => sum + client.balance, 0))}</strong><span class="mini-stat-meta">${clients.length} cuentas abiertas</span></div><div class="mini-stat"><span class="mini-stat-label">Vencido</span><strong class="mini-stat-value">${money(totalOverdueBalance())}</strong><span class="mini-stat-meta">${overdueClientCount()} cuentas con vencimiento</span></div><div class="mini-stat"><span class="mini-stat-label">Cobros registrados</span><strong class="mini-stat-value">${money(collected)}</strong><span class="mini-stat-meta">${data.payments.length} movimientos de pago</span></div></section><div class="sales-layout"><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Cuentas abiertas</h2><p>Ordenadas por saldo vencido y saldo total</p></div><button type="button" class="table-action" data-action="export-collections">${icon('download')} Exportar CSV</button></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Cliente</th><th>Saldo total</th><th>Vencido</th><th>Vencimiento registrado</th><th>Acción</th></tr></thead><tbody>${openAccountRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Últimos movimientos</h2><p>Pagos y cobros registrados</p></div></div><div class="panel-body"><div class="delivery-list">${paymentRows}</div></div></article></div>`);
}
function renderReports() {
  const periodSales = salesForPeriod(reportPeriod);
  const previousSales = salesForPeriod(reportPeriod, reportPeriod);
  const periodTotal = sumSales(periodSales);
  const previousTotal = sumSales(previousSales);
  const receivable = data.clients.reduce((sum, client) => sum + client.balance, 0);
  const overdue = totalOverdueBalance();
  const current = Math.max(0, receivable - overdue);
  const currentShare = receivable > 0 ? Math.round((current / receivable) * 100) : 0;
  const overdueShare = receivable > 0 ? 100 - currentShare : 0;
  const products = data.products.filter(product => product.price > 0).map(product => ({
    ...product,
    margin: Math.round(((product.price - product.cost) / product.price) * 100)
  })).sort((a, b) => b.margin - a.margin).slice(0, 5);
  const productRows = products.map(product => `<tr><td data-label="Producto"><strong>${esc(product.name)}</strong><span class="sub-text">${esc(product.sku)}</span></td><td data-label="Margen"><span class="badge ${product.margin >= 0 ? 'badge-success' : 'badge-danger'}">${product.margin}%</span></td><td data-label="Precio" class="money">${money(product.price)}</td><td data-label="Stock">${product.stock} ${esc(product.unit)}</td></tr>`).join('') || '<tr><td class="empty-row" colspan="4">Agrega productos con precio para generar este indicador.</td></tr>';
  setPage('Reportes', `${pageHeader('Reportes', 'Indicadores calculados a partir de los registros locales', `${button('Exportar ventas CSV', 'export-sales', 'secondary', 'download')}${button('Crear respaldo', 'export-backup', 'primary', 'download')}`)}<section class="sales-summary"><div class="mini-stat"><span class="mini-stat-label">Ventas · últimos ${reportPeriod} días</span><strong class="mini-stat-value">${money(periodTotal)}</strong><span class="mini-stat-meta">${periodSales.length} tickets · ${esc(periodChange(periodTotal, previousTotal))}</span></div><div class="mini-stat"><span class="mini-stat-label">Ticket promedio</span><strong class="mini-stat-value">${money(periodSales.length ? periodTotal / periodSales.length : 0)}</strong><span class="mini-stat-meta">En el periodo seleccionado</span></div><div class="mini-stat"><span class="mini-stat-label">Cartera vencida</span><strong class="mini-stat-value">${money(overdue)}</strong><span class="mini-stat-meta">Saldo total por cobrar: ${money(receivable)}</span></div></section><div class="report-grid"><article class="panel chart-card"><div class="panel-header"><div class="panel-heading"><h2>Ventas por periodo</h2><p>Importe de las ventas registradas</p></div><div class="chart-toolbar" role="group" aria-label="Periodo del reporte"><button type="button" class="chart-period ${reportPeriod === 7 ? 'active' : ''}" data-action="report-period" data-period="7" aria-pressed="${reportPeriod === 7}">7 días</button><button type="button" class="chart-period ${reportPeriod === 30 ? 'active' : ''}" data-action="report-period" data-period="30" aria-pressed="${reportPeriod === 30}">30 días</button></div></div><div class="panel-body"><div class="chart-total"><strong>${money(periodTotal)}</strong><span>${esc(periodChange(periodTotal, previousTotal))}</span></div><div class="chart-wrap"><div class="chart-grid"><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span><span class="grid-line"></span></div>${chartMarkup(periodSales, reportPeriod, 'report-area-fill')}</div></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Composición de cartera</h2><p>Al corriente frente a vencido</p></div></div><div class="donut-wrap"><div class="donut" role="img" aria-label="${currentShare}% al corriente y ${overdueShare}% vencido" style="background: conic-gradient(var(--ink) 0 ${currentShare}%, var(--lime-deep) ${currentShare}% 100%)"><div class="donut-center"><strong>${shortMoney(receivable)}</strong><span>Total cartera</span></div></div><div class="legend"><div class="legend-item"><i class="legend-dot"></i><span>Al corriente</span><strong>${currentShare}%</strong></div><div class="legend-item"><i class="legend-dot lime"></i><span>Vencido</span><strong>${overdueShare}%</strong></div></div></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Mejor margen por producto</h2><p>Margen bruto estimado con costo y precio capturados</p></div><a class="inline-link" href="#/productos">Ver inventario ${icon('arrow-right')}</a></div><div class="table-scroll"><table class="data-table"><thead><tr><th>Producto</th><th>Margen</th><th>Precio</th><th>Stock</th></tr></thead><tbody>${productRows}</tbody></table></div></article><article class="panel"><div class="panel-header"><div class="panel-heading"><h2>Revisión operativa</h2><p>Prioridades a partir del inventario y la cartera</p></div></div><div class="panel-body"><div class="activity-list"><div class="activity-item"><span class="activity-icon">${icon('package')}</span><div class="activity-copy"><strong>${data.products.filter(product => product.stock <= product.min).length} producto${data.products.filter(product => product.stock <= product.min).length === 1 ? '' : 's'} en o bajo mínimo</strong><span>Inventario que requiere verificación.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('wallet')}</span><div class="activity-copy"><strong>${overdueClientCount()} cuenta${overdueClientCount() === 1 ? '' : 's'} con vencido</strong><span>Saldo vencido registrado: ${money(overdue)}.</span></div></div><div class="activity-item"><span class="activity-icon">${icon('truck')}</span><div class="activity-copy"><strong>${data.sales.filter(sale => sale.delivery === 'Por entregar').length} pedido${data.sales.filter(sale => sale.delivery === 'Por entregar').length === 1 ? '' : 's'} por entregar</strong><span>Actualiza el estado al completar cada entrega.</span></div></div></div></div></article></div>`);
}
function renderSettings() {
  const settings = loadSettings();
  const preferences = settings.preferences;
  setPage('Ajustes', `${pageHeader('Ajustes', 'Configura los datos del negocio y respalda la información local', button('Guardar cambios', 'save-settings', 'primary', 'check'))}<div class="settings-layout"><nav class="settings-nav" aria-label="Secciones de ajustes"><button type="button" class="active" aria-current="true" data-action="scroll-settings" data-target="settings-general">Negocio</button><button type="button" data-action="scroll-settings" data-target="settings-preferences">Preferencias</button><button type="button" data-action="scroll-settings" data-target="settings-backup">Respaldo y datos</button></nav><div><article class="settings-panel" id="settings-general"><h2>Información del negocio</h2><p>Estos datos se usan en recibos y referencias internas.</p><div class="form-grid"><div class="form-field"><label for="setting-businessName">Nombre comercial</label><input id="setting-businessName" data-setting="businessName" value="${esc(settings.businessName)}" autocomplete="organization" /></div><div class="form-field"><label for="setting-rfc">RFC</label><input id="setting-rfc" data-setting="rfc" value="${esc(settings.rfc)}" autocomplete="off" /></div><div class="form-field"><label for="setting-phone">Teléfono</label><input id="setting-phone" data-setting="phone" type="tel" value="${esc(settings.phone)}" autocomplete="tel" /></div><div class="form-field"><label for="setting-email">Correo electrónico</label><input id="setting-email" data-setting="email" type="email" value="${esc(settings.email)}" autocomplete="email" /></div><div class="form-field"><label for="setting-currency">Moneda</label><select id="setting-currency" data-setting="currency"><option ${settings.currency === 'MXN — Peso mexicano' ? 'selected' : ''}>MXN — Peso mexicano</option></select></div><div class="form-field full"><label for="setting-address">Dirección</label><input id="setting-address" data-setting="address" value="${esc(settings.address)}" autocomplete="street-address" /></div></div></article><article class="settings-panel" id="settings-preferences"><h2>Preferencias de operación</h2><p>Controlan avisos visibles en el panel; no activan notificaciones del sistema.</p><div class="toggle-row"><div class="toggle-copy"><strong>Alertas de inventario</strong><span>Muestra avisos cuando un producto está en o bajo el mínimo.</span></div><button type="button" class="toggle ${preferences.inventoryAlerts ? 'on' : ''}" data-action="toggle-setting" data-setting-toggle="inventoryAlerts" aria-label="Cambiar alertas de inventario" aria-pressed="${Boolean(preferences.inventoryAlerts)}"></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Alertas de cobranza</strong><span>Muestra el seguimiento de saldos vencidos en el resumen.</span></div><button type="button" class="toggle ${preferences.collectionAlerts ? 'on' : ''}" data-action="toggle-setting" data-setting-toggle="collectionAlerts" aria-label="Cambiar alertas de cobranza" aria-pressed="${Boolean(preferences.collectionAlerts)}"></button></div><div class="toggle-row"><div class="toggle-copy"><strong>Tablas compactas</strong><span>Reduce el espacio entre filas para consultar más registros.</span></div><button type="button" class="toggle ${preferences.compactTables ? 'on' : ''}" data-action="toggle-setting" data-setting-toggle="compactTables" aria-label="Cambiar modo compacto" aria-pressed="${Boolean(preferences.compactTables)}"></button></div></article><article class="settings-panel" id="settings-backup"><h2>Respaldo y datos</h2><p>Esta versión guarda la información en el almacenamiento local de este navegador. El respaldo JSON incluye clientes, productos, ventas, abonos y ajustes. No hay sincronización entre dispositivos ni usuarios.</p><div class="heading-actions"><button type="button" class="button button-primary" data-action="export-backup">${icon('download')} Descargar respaldo completo</button><button type="button" class="button button-secondary" data-action="import-backup">${icon('upload')} Restaurar respaldo JSON</button><button type="button" class="button button-secondary" data-action="export-data">${icon('download')} Exportar lista CSV</button></div><details class="settings-danger-zone"><summary>Acciones de mantenimiento</summary><p>Estas acciones reemplazan o eliminan información de este dispositivo.</p><div class="heading-actions"><button type="button" class="button button-secondary" data-action="reset-demo">${icon('refresh')} Reemplazar por datos demo</button><button type="button" class="button button-danger" data-action="clear-data">${icon('trash')} Borrar datos locales</button></div></details></article></div></div>`);
}
function openModal(title, description, body, modalClass = '') {
  if (!document.querySelector('#modal-root [data-modal-inner]')) modalReturnFocus = document.activeElement;
  document.body.classList.add('modal-open');
  const root = document.getElementById('modal-root');
  root.innerHTML = `<div class="modal-backdrop ${modalClass}" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" data-modal-inner><div class="modal-header"><div><h2 id="modal-title">${esc(title)}</h2><p id="modal-description">${esc(description)}</p></div><button type="button" class="icon-button modal-close" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div><div class="modal-body">${body}</div></div></div>`;
  const firstField = root.querySelector('input:not([type="hidden"]), select, textarea, [data-action="close-modal"]');
  window.requestAnimationFrame(() => firstField?.focus());
}
function closeModal(restoreFocus = true) {
  const root = document.getElementById('modal-root');
  if (!root || !root.innerHTML) return;
  root.innerHTML = '';
  document.body.classList.remove('modal-open');
  if (restoreFocus && modalReturnFocus?.isConnected) modalReturnFocus.focus();
  modalReturnFocus = null;
}
function formField(label, name, type = 'text', value = '', options = '', required = true) {
  const numberAttrs = name === 'sale-quantity' ? 'min="1" step="1"' : name === 'product-stock' || name === 'product-min' ? 'min="0" step="1"' : 'min="0" step="0.01"';
  const extraAttrs = type === 'number' ? numberAttrs : type === 'tel' ? 'inputmode="tel" autocomplete="tel"' : '';
  const requiredAttr = required ? 'required' : '';
  return `<div class="form-field"><label for="${esc(name)}">${esc(label)}</label>${type === 'select' ? `<select id="${esc(name)}" name="${esc(name)}" ${requiredAttr}>${options}</select>` : `<input id="${esc(name)}" name="${esc(name)}" type="${esc(type)}" value="${esc(value)}" ${extraAttrs} ${requiredAttr} />`}</div>`;
}
function newClientModal(client = null) {
  const editing = Boolean(client);
  const baseSegments = ['Mayoreo', 'Ruta centro', 'Contado', 'Otro'];
  const options = [...new Set([...baseSegments, ...(client?.segment ? [client.segment] : [])])];
  const segmentOptions = options.map(segment => `<option value="${esc(segment)}" ${client?.segment === segment ? 'selected' : ''}>${esc(segment)}</option>`).join('');
  openModal(editing ? 'Editar cliente' : 'Nuevo cliente', editing ? 'Actualiza los datos de contacto y las notas operativas.' : 'Crea una cuenta para dar seguimiento a sus compras y saldos.', `<form data-form="client" data-edit-id="${client ? esc(client.id) : ''}"><div class="form-grid">${formField('Nombre comercial', 'client-name', 'text', client?.name || '')}${formField('Contacto (opcional)', 'client-contact', 'text', client?.contact || '', '', false)}${formField('Teléfono (opcional)', 'client-phone', 'tel', client?.phone || '', '', false)}${formField('Segmento', 'client-segment', 'select', '', segmentOptions)}<div class="form-field full"><label for="client-notes">Notas internas (opcional)</label><textarea id="client-notes" name="client-notes" maxlength="500" placeholder="Horario, dirección de entrega u otra nota operativa">${esc(client?.notes || '')}</textarea></div></div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${editing ? 'Guardar cambios' : 'Guardar cliente'}</button></div></form>`);
}
function newProductModal(product = null) {
  const editing = Boolean(product);
  const categories = [...new Set(['Abarrotes', 'Bebidas', 'Limpieza', ...data.products.map(item => item.category).filter(Boolean)])];
  const categoryOptions = categories.map(category => `<option value="${esc(category)}" ${product?.category === category ? 'selected' : ''}>${esc(category)}</option>`).join('');
  openModal(editing ? 'Editar producto' : 'Nuevo producto', editing ? 'Actualiza los datos y el inventario disponible.' : 'Agrega un producto para mantener tus existencias al día.', `<form data-form="product" data-edit-sku="${product ? esc(product.sku) : ''}"><div class="form-grid">${formField('Nombre del producto', 'product-name', 'text', product?.name || '')}${formField('SKU', 'product-sku', 'text', product?.sku || '')}${formField('Categoría', 'product-category-modal', 'select', '', categoryOptions)}${formField('Unidad de venta', 'product-unit', 'text', product?.unit || 'pza')}${formField('Costo', 'product-cost', 'number', product ? product.cost : '')}${formField('Precio de venta', 'product-price', 'number', product ? product.price : '')}${formField('Existencia', 'product-stock', 'number', product ? product.stock : 0)}${formField('Mínimo sugerido', 'product-min', 'number', product ? product.min : 5)}</div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">${editing ? 'Guardar cambios' : 'Agregar producto'}</button></div></form>`);
}
function newPaymentModal(clientId = '') {
  const selected = clientId ? clientById(clientId) : null;
  const openClients = data.clients.filter(client => client.balance > 0);
  const clientOptions = openClients.length ? openClients.map(client => `<option value="${esc(client.id)}" ${selected?.id === client.id ? 'selected' : ''}>${esc(client.name)} · ${money(client.balance)}</option>`).join('') : '<option value="" selected>No hay cuentas abiertas</option>';
  const disabled = openClients.length ? '' : 'disabled';
  const hint = openClients.length ? '<p class="form-hint">El abono se aplicará primero a los pedidos vencidos y luego a los más antiguos.</p>' : '<p class="form-hint">Primero registra una venta a crédito para poder aplicar un abono.</p>';
  openModal('Registrar abono', 'Aplica un pago y actualiza el saldo de la cuenta y sus ventas.', `<form data-form="payment"><div class="form-grid">${formField('Cliente', 'payment-client', 'select', '', `<option value="" ${selected ? '' : 'selected'} disabled>Selecciona un cliente</option>${clientOptions}`)}${formField('Monto', 'payment-amount', 'number', '')}${formField('Método de pago', 'payment-method', 'select', '', '<option>Efectivo</option><option>Transferencia</option><option>Tarjeta</option><option>Otro</option>')}<div class="form-field full"><label for="payment-reference">Referencia o nota</label><input id="payment-reference" name="payment-reference" maxlength="120" placeholder="Ej. Abono de ruta o folio de transferencia" /></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Registrar abono</button></div></form>`);
  const amountField = document.getElementById('payment-amount');
  if (amountField && selected) amountField.max = String(selected.balance);
}
function saleLineMarkup() {
  const available = data.products.filter(product => product.stock > 0);
  const options = available.map(product => `<option value="${esc(product.sku)}">${esc(product.name)} · ${money(product.price)} · ${product.stock} disponibles</option>`).join('');
  return `<div class="sale-line" data-sale-line><label class="visually-hidden">Producto</label><select name="sale-product" aria-label="Producto" required><option value="" selected disabled>Selecciona un producto</option>${options}</select><label class="visually-hidden">Cantidad</label><input name="sale-quantity" type="number" inputmode="numeric" min="1" step="1" value="1" aria-label="Cantidad" required /><button type="button" class="sale-line-remove" data-action="remove-sale-line" aria-label="Quitar producto">${icon('trash')}</button><div class="sale-line-meta"><span>Existencia y precio vigentes al guardar</span><strong data-line-total>${money(0)}</strong></div></div>`;
}
function syncSalePaymentFields(form) {
  if (!form) return;
  const isCredit = form.querySelector('#sale-payment')?.value === 'Crédito';
  const dueField = form.querySelector('#sale-due-field');
  const dueInput = form.querySelector('#sale-due-date');
  if (dueField) dueField.hidden = !isCredit;
  if (dueInput) {
    dueInput.required = isCredit;
    dueInput.disabled = !isCredit;
    if (isCredit) dueInput.min = todayISO();
    else dueInput.value = '';
  }
}
function updateSalePreview(form) {
  if (!form) return;
  let total = 0;
  form.querySelectorAll('[data-sale-line]').forEach(line => {
    const product = data.products.find(item => item.sku === line.querySelector('[name="sale-product"]')?.value);
    const quantity = Number(line.querySelector('[name="sale-quantity"]')?.value) || 0;
    const lineTotal = product && Number.isInteger(quantity) && quantity > 0 ? roundMoney(product.price * quantity) : 0;
    total += lineTotal;
    const lineValue = line.querySelector('[data-line-total]');
    if (lineValue) lineValue.textContent = money(lineTotal);
  });
  const totalValue = form.querySelector('[data-sale-total]');
  if (totalValue) totalValue.textContent = money(total);
}
function newSaleModal() {
  const clients = data.clients.filter(client => client.status !== 'inactive');
  const clientOptions = clients.map(client => `<option value="${esc(client.id)}">${esc(client.name)}</option>`).join('');
  const hasProducts = data.products.some(product => product.stock > 0);
  const disabled = hasProducts ? '' : 'disabled';
  const hint = hasProducts ? '<p class="form-hint">El total se calcula con el precio y la existencia actuales. Para crédito selecciona un cliente y captura la fecha acordada de vencimiento.</p>' : '<p class="form-hint">No hay productos con existencia disponible. Agrega inventario antes de registrar una venta.</p>';
  openModal('Registrar venta', 'Agrega los productos del pedido, valida el total y registra el cobro.', `<form data-form="sale"><div class="form-grid">${formField('Cliente', 'sale-client', 'select', '', `<option value="general" selected>Cliente general · contado</option>${clientOptions}`)}<div class="form-field full"><label>Productos y cantidades</label><div class="sale-lines" data-sale-lines>${saleLineMarkup()}</div><button type="button" class="sale-add-line" data-action="add-sale-line">${icon('plus')} Agregar otro producto</button><div class="sale-total"><span>Total estimado</span><strong data-sale-total>${money(0)}</strong></div></div>${formField('Forma de pago', 'sale-payment', 'select', '', '<option>Crédito</option><option selected>Efectivo</option><option>Transferencia</option><option>Tarjeta</option>')}<div class="form-field full" id="sale-due-field" hidden><label for="sale-due-date">Fecha de vencimiento del crédito</label><input id="sale-due-date" name="sale-due-date" type="date" min="${todayISO()}" disabled /><span class="field-help">Captura la fecha acordada con el cliente; evita marcar vencimientos estimados.</span></div><div class="form-field"><label for="sale-delivery">Entrega</label><select id="sale-delivery" name="sale-delivery" required><option>Por entregar</option><option>Entregado</option></select></div></div>${hint}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit" ${disabled}>Guardar venta</button></div></form>`);
  const form = document.querySelector('#modal-root form[data-form="sale"]');
  syncSalePaymentFields(form);
  updateSalePreview(form);
}
function viewClientModal(client) {
  if (!client) return;
  const sales = data.sales.filter(sale => sale.clientId === client.id).slice(0, 4);
  const history = sales.map(sale => `<div class="delivery-row"><div class="delivery-main"><span class="delivery-icon">${icon('receipt')}</span><div><strong>${esc(sale.id)}</strong><span>${esc(formatDate(sale.date))} · ${receiptStatus(sale)}</span></div></div><div class="delivery-value"><strong>${money(sale.total)}</strong><span>Saldo ${money(sale.balance)}</span></div></div>`).join('') || '<div class="empty-state">Este cliente aún no tiene ventas registradas.</div>';
  openModal(client.name, `${client.id} · ${client.segment}`, `<div class="form-grid"><div class="form-field"><label>Contacto</label><input value="${esc(client.contact || 'Sin contacto')}" readonly /></div><div class="form-field"><label>Teléfono</label><input value="${esc(client.phone || 'Sin teléfono')}" readonly /></div><div class="form-field"><label>Facturado histórico</label><input value="${money(client.billed)}" readonly /></div><div class="form-field"><label>Saldo actual</label><input value="${money(client.balance)}" readonly /></div><div class="form-field"><label>Saldo vencido</label><input value="${money(clientOverdueBalance(client))}" readonly /></div><div class="form-field"><label>Vencimiento registrado</label><input value="${esc(clientDueLabel(client))}" readonly /></div><div class="form-field full"><label>Notas internas</label><textarea readonly>${esc(client.notes || 'Sin notas')}</textarea></div></div><section class="client-history"><h3>Ventas recientes</h3><div class="delivery-list">${history}</div></section><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cerrar</button><button type="button" class="button button-secondary" data-action="edit-client" data-id="${esc(client.id)}">${icon('edit')} Editar cliente</button>${client.balance > 0 ? `<button type="button" class="button button-primary" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Registrar abono</button>` : ''}</div>`);
}
function viewSaleModal(sale) {
  if (!sale) return;
  const client = clientById(sale.clientId);
  const itemRows = saleReceiptItems(sale).map(item => `<tr><td data-label="Producto"><strong>${esc(item.name)}</strong><span class="sub-text">${esc(item.sku || '')}</span></td><td data-label="Cantidad">${Number(item.quantity) || 1}</td><td data-label="Precio">${money(item.price || 0)}</td><td data-label="Importe" class="money">${money(item.total || 0)}</td></tr>`).join('');
  const collectionHistory = data.payments.filter(payment => payment.saleId === sale.id || payment.clientId === sale.clientId).slice(0, 4);
  const actions = `<button type="button" class="button button-secondary" data-action="close-modal">Cerrar</button><button type="button" class="button button-secondary" data-action="view-receipt" data-id="${esc(sale.id)}">${icon('receipt')} Ver recibo</button>${sale.balance > 0 && sale.clientId !== 'general' ? `<button type="button" class="button button-primary" data-action="collect-client" data-id="${esc(client.id)}">${icon('cash')} Registrar abono</button>` : ''}`;
  const dueDateAction = sale.balance > 0 && sale.clientId !== 'general' ? `<button type="button" class="button button-secondary" data-action="edit-sale-due" data-id="${esc(sale.id)}">${icon('calendar')} Editar vencimiento</button>` : '';
  openModal(`Venta ${sale.id}`, `${client.name} · ${formatDate(sale.date)}`, `<div class="form-grid"><div class="form-field"><label>Cliente</label><input value="${esc(client.name)}" readonly /></div><div class="form-field"><label>Estado de pago</label><input value="${esc(receiptStatus(sale))}" readonly /></div><div class="form-field"><label>Entrega</label><input value="${esc(sale.delivery)}" readonly /></div><div class="form-field"><label>Vencimiento</label><input value="${esc(saleDueLabel(sale))}" readonly /></div><div class="form-field"><label>Forma de pago</label><input value="${esc(sale.paymentMethod || 'No registrada')}" readonly /></div></div><div class="table-scroll modal-items"><table class="data-table"><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>Importe</th></tr></thead><tbody>${itemRows}</tbody></table></div><div class="sale-total"><span>Total · saldo pendiente</span><strong>${money(sale.total)} · ${money(sale.balance)}</strong></div>${collectionHistory.length ? `<section class="client-history"><h3>Movimientos de cobranza recientes</h3><div class="delivery-list">${collectionHistory.map(payment => `<div class="delivery-row"><div class="delivery-main"><span class="delivery-icon">${icon('cash')}</span><div><strong>${esc(formatDate(payment.date))} · ${esc(payment.method)}</strong><span>${esc(payment.reference || 'Sin referencia')}</span></div></div><div class="delivery-value"><strong>${money(payment.amount)}</strong></div></div>`).join('')}</div></section>` : ''}<div class="form-actions">${actions}${dueDateAction}</div>`);
}
function editSaleDueModal(sale) {
  if (!sale || Number(sale.balance) <= 0 || sale.clientId === 'general') return toast('Solo puedes cambiar el vencimiento de una venta a crédito con saldo.', true);
  openModal(`Vencimiento · ${sale.id}`, 'Registra la fecha acordada para liquidar esta venta a crédito.', `<form data-form="sale-due" data-sale-id="${esc(sale.id)}"><div class="form-grid"><div class="form-field full"><label for="sale-due-date">Fecha de vencimiento</label><input id="sale-due-date" name="sale-due-date" type="date" value="${esc(sale.dueDate || '')}" required /><span class="field-help">Puedes capturar una fecha pasada para regularizar una cuenta existente.</span></div></div><div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cancelar</button><button class="button button-primary" type="submit">Guardar vencimiento</button></div></form>`);
}
function saleReceiptItems(sale) {
  if (Array.isArray(sale.items) && sale.items.length) return sale.items;
  return [{ sku: sale.id, name: 'Pedido de venta', quantity: 1, price: sale.total, total: sale.total }];
}
function receiptStatus(sale) {
  const status = effectiveSaleStatus(sale);
  return status === 'pending' ? 'Pendiente' : status === 'partial' ? 'Pago parcial' : status === 'paid' ? 'Pagada' : 'Vencida';
}
function receiptCode(sale) {
  const dateDigits = String(sale.date || '').replace(/\D/g, '').slice(-6) || '260917';
  const saleDigits = String(sale.id || '').replace(/\D/g, '').padStart(4, '0');
  return `PO${dateDigits}${saleDigits}`;
}
function receiptHTML(sale) {
  const client = clientById(sale.clientId);
  const settings = loadSettings();
  const items = saleReceiptItems(sale);
  const subtotal = roundMoney(items.reduce((sum, item) => sum + (Number(item.total) || 0), 0));
  const paymentMethod = sale.paymentMethod || (sale.balance ? 'Crédito' : 'Pago completo');
  const paid = Math.max(0, roundMoney((Number(sale.total) || 0) - (Number(sale.balance) || 0)));
  const businessName = settings.businessName || 'Mono Cromat & Co.';
  const businessAddress = settings.address || 'Dirección por configurar';
  return `<div class="receipt-preview-wrap"><article class="receipt-sheet"><header class="receipt-head"><img class="receipt-logo" src="assets/logo-blue.png" alt="${esc(businessName)}" /><div class="receipt-brand"><div class="receipt-title-row"><h3>${esc(businessName.toUpperCase())}</h3><span class="receipt-studio">Comprobante de venta</span></div><p>${esc(businessAddress)} · RFC ${esc(settings.rfc || 'Por configurar')}</p></div><div class="receipt-ticket"><div class="receipt-barcode" aria-hidden="true"></div><div class="receipt-code">${esc(receiptCode(sale))}</div></div></header><section class="receipt-meta-grid"><div class="receipt-meta-item"><label>Fecha</label><span>${esc(formatDate(sale.date))}</span></div><div class="receipt-meta-item"><label>Cliente</label><span>${esc(client.name)}</span></div><div class="receipt-meta-item"><label>Folio</label><span>${esc(sale.id)}</span></div><div class="receipt-meta-item"><label>Teléfono</label><span>${esc(client.phone || 'Por confirmar')}</span></div><div class="receipt-meta-item"><label>Correo</label><span>${esc(settings.email || 'Por configurar')}</span></div><div class="receipt-meta-item"><label>Forma de pago</label><span>${esc(paymentMethod)}</span></div></section><section class="receipt-detail-zone"><table class="receipt-table"><thead><tr><th>PRODUCTO</th><th>CANT.</th><th>PRECIO U.</th><th>IMPORTE</th></tr></thead><tbody>${items.map(item => `<tr><td><span class="receipt-product">${esc(item.name)}</span><span class="receipt-product-sub">${esc(item.sku || '')}</span></td><td>${Number(item.quantity) || 1}</td><td>${money(item.price || 0)}</td><td class="receipt-amount">${money(item.total || 0)}</td></tr>`).join('')}</tbody></table><div class="receipt-summary"><div class="receipt-summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="receipt-summary-row receipt-summary-total"><span>Total</span><strong>${money(sale.total)}</strong></div><div class="receipt-summary-row"><span>Pagado</span><strong>${money(paid)}</strong></div><div class="receipt-summary-row receipt-summary-payable"><span>Saldo</span><strong>${money(sale.balance)}</strong></div></div></section><section class="receipt-track"><h4 class="receipt-track-title">DETALLE DE PAGO</h4><div class="receipt-track-grid"><div class="receipt-track-item"><label>FECHA</label><span>${esc(formatDate(sale.date))}</span></div><div class="receipt-track-item"><label>MÉTODO</label><span>${esc(paymentMethod)}</span></div><div class="receipt-track-item"><label>SALDO</label><span>${money(sale.balance)}</span></div><div class="receipt-track-item"><label>ESTADO</label><span>${esc(receiptStatus(sale).toUpperCase())}</span></div></div></section><section class="receipt-lower"><div><h4 class="receipt-payment-title">GRACIAS</h4><div class="receipt-payment-copy">Conserva este comprobante<br />para cualquier aclaración.</div></div><div class="receipt-terms"><h4>INFORMACIÓN IMPORTANTE</h4><p>Verifica productos, cantidades y precios al recibir tu pedido.</p><p>Fecha de vencimiento: <strong>${esc(saleDueLabel(sale))}</strong>.</p><p>Este documento es un comprobante interno de operación; <strong>no sustituye un CFDI</strong> ni acredita por sí mismo requisitos fiscales.</p><p>Para facturación, contacta al negocio con el folio de esta venta.</p></div></section><footer class="receipt-footer"><span><strong>${esc(businessName.toUpperCase())}</strong><br />${esc(businessAddress)}</span><span>${esc(settings.phone || 'Teléfono por configurar')}<br />${esc(settings.email || 'Correo por configurar')}</span><span>Folio ${esc(sale.id)}<br />${esc(formatDate(sale.date))}</span></footer></article></div>`;
}
function viewReceiptModal(sale) {
  if (!sale) return;
  openModal(`Recibo ${sale.id}`, 'Vista previa de comprobante interno; imprime o descarga el HTML.', `${receiptHTML(sale)}<div class="form-actions"><button type="button" class="button button-secondary" data-action="close-modal">Cerrar</button><button type="button" class="button button-secondary" data-action="download-receipt" data-id="${esc(sale.id)}">${icon('download')} Descargar HTML</button><button type="button" class="button button-primary" data-action="print-receipt" data-id="${esc(sale.id)}">${icon('receipt')} Imprimir recibo</button></div>`, 'receipt-modal');
}
function printReceipt() { window.print(); }
async function downloadReceipt(sale) {
  if (!sale) return toast('No se encontró la venta para generar el recibo.', true);
  try {
    const [cssResponse, logoResponse] = await Promise.all([fetch('./receipt-styles.css'), fetch('./assets/logo-blue.png')]);
    if (!cssResponse.ok || !logoResponse.ok) throw new Error('No se pudieron cargar los recursos del recibo.');
    const css = (await cssResponse.text()).replace(/@import[^;]+;/g, '');
    const logoBlob = await logoResponse.blob();
    const logoData = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error || new Error('No se pudo leer el logo.'));
      reader.readAsDataURL(logoBlob);
    });
    const embeddedCSS = css.replaceAll('assets/logo-blue.png', String(logoData));
    const receipt = receiptHTML(sale).replaceAll('src="assets/logo-blue.png"', `src="${logoData}"`);
    const html = `<!doctype html><html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Recibo ${esc(sale.id)} · Mono Cromat &amp; Co.</title><style>${embeddedCSS}</style></head><body>${receipt}</body></html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const link = document.createElement('a');
    const safeId = String(sale.id).toLowerCase().replace(/[^a-z0-9-]/g, '-');
    link.href = URL.createObjectURL(blob);
    link.download = `recibo-${safeId}.html`;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1500);
    toast('Recibo HTML descargado con sus estilos y logo incluidos.');
  } catch (error) {
    console.error('No se pudo generar el recibo descargable.', error);
    toast('No se pudo descargar el recibo. Comprueba la conexión y vuelve a intentarlo.', true);
  }
}
function handleFormSubmit(form) {
  const values = Object.fromEntries(new FormData(form).entries());
  if (form.dataset.form === 'client') {
    const name = String(values['client-name'] || '').trim();
    const contact = String(values['client-contact'] || '').trim();
    const phone = String(values['client-phone'] || '').trim();
    const editId = form.dataset.editId;
    const existing = editId ? data.clients.find(client => client.id === editId) : null;
    if (!name) return toast('El nombre del cliente es obligatorio.', true);
    if (data.clients.some(client => client.id !== editId && client.name.toLowerCase() === name.toLowerCase())) return toast('Ya existe un cliente con ese nombre.', true);
    if (existing) {
      Object.assign(existing, { name, segment: values['client-segment'], contact, phone, notes: String(values['client-notes'] || '').trim() });
    } else {
      data.clients.unshift({ id: nextRecordId('C', data.clients), name, segment: values['client-segment'], contact, phone, notes: String(values['client-notes'] || '').trim(), purchases: 0, billed: 0, balance: 0, overdue: 0, status: 'active', due: 'Sin compras' });
    }
    if (!saveData()) return;
    closeModal(); render(); toast(existing ? 'Cliente actualizado correctamente.' : 'Cliente agregado correctamente.');
    return;
  }

  if (form.dataset.form === 'product') {
    const sku = String(values['product-sku'] || '').trim().toUpperCase();
    const name = String(values['product-name'] || '').trim();
    const cost = roundMoney(Number(values['product-cost']));
    const price = roundMoney(Number(values['product-price']));
    const stock = Number(values['product-stock']);
    const min = Number(values['product-min']);
    const editSku = form.dataset.editSku;
    if (!sku || !name || !Number.isFinite(cost) || !Number.isFinite(price) || !Number.isFinite(stock) || !Number.isFinite(min)) return toast('Completa todos los datos del producto.', true);
    if (cost < 0 || price <= 0 || !Number.isInteger(stock) || !Number.isInteger(min) || stock < 0 || min < 0) return toast('El precio debe ser mayor a cero y las existencias deben ser enteros no negativos.', true);
    if (price < cost) return toast('El precio de venta no puede ser menor al costo.', true);
    if (data.products.some(item => item.sku.toUpperCase() === sku && item.sku !== editSku)) return toast('Ya existe un producto con ese SKU.', true);
    const product = { sku, name, category: values['product-category-modal'], unit: String(values['product-unit'] || '').trim(), cost, price, stock, min };
    const index = data.products.findIndex(item => item.sku === editSku);
    if (index >= 0) data.products[index] = product; else data.products.unshift(product);
    if (!saveData()) return;
    closeModal(); render(); toast(index >= 0 ? 'Producto actualizado.' : 'Producto agregado correctamente.');
    return;
  }

  if (form.dataset.form === 'payment') {
    const amount = roundMoney(Number(values['payment-amount']));
    const client = data.clients.find(item => item.id === values['payment-client']);
    if (!client) return toast('Selecciona una cuenta abierta.', true);
    if (!Number.isFinite(amount) || amount <= 0) return toast('Escribe un monto válido.', true);
    if (amount > client.balance + 0.001) return toast(`El abono no puede superar el saldo de ${money(client.balance)}.`, true);

    const openSalesBefore = data.sales.filter(sale => sale.clientId === client.id && sale.balance > 0);
    const totalLinkedBalance = roundMoney(openSalesBefore.reduce((sum, sale) => sum + sale.balance, 0));
    const unlinkedBalance = Math.max(0, roundMoney(client.balance - totalLinkedBalance));
    const overdueBefore = clientOverdueBalance(client);
    const linkedOverdueBefore = roundMoney(openSalesBefore.filter(saleIsOverdue).reduce((sum, sale) => sum + sale.balance, 0));
    const unlinkedOverdueBefore = Math.max(0, roundMoney(overdueBefore - linkedOverdueBefore));
    const allocations = [];
    let remaining = amount;
    let overdueApplied = 0;
    const orderedSales = [...openSalesBefore].sort((a, b) => {
      const overdueOrder = Number(saleIsOverdue(b)) - Number(saleIsOverdue(a));
      return overdueOrder || (parseAppDate(a.date)?.getTime() || 0) - (parseAppDate(b.date)?.getTime() || 0);
    });
    orderedSales.forEach(sale => {
      if (remaining <= 0) return;
      const wasOverdue = saleIsOverdue(sale);
      const applied = roundMoney(Math.min(sale.balance, remaining));
      if (applied <= 0) return;
      sale.balance = Math.max(0, roundMoney(sale.balance - applied));
      allocations.push({ saleId: sale.id, amount: applied });
      if (wasOverdue) overdueApplied += applied;
      if (sale.balance <= 0.001) { sale.balance = 0; sale.status = 'paid'; }
      else if (saleIsOverdue(sale)) sale.status = 'overdue';
      else if (sale.status !== 'overdue') sale.status = 'partial';
      remaining = Math.max(0, roundMoney(remaining - applied));
    });
    const appliedToUnlinked = Math.min(remaining, unlinkedBalance);
    const unlinkedOverdueApplied = Math.min(unlinkedOverdueBefore, appliedToUnlinked);
    client.balance = Math.max(0, roundMoney(client.balance - amount));
    client.overdue = Math.min(client.balance, Math.max(0, roundMoney(overdueBefore - overdueApplied - unlinkedOverdueApplied)));
    if (client.status !== 'inactive') client.status = clientOverdueBalance(client) > 0 ? 'overdue' : 'active';
    if (client.balance === 0) client.due = 'Sin saldo';
    data.payments.unshift({
      id: nextRecordId('COB-', data.payments, 3),
      clientId: client.id,
      date: todayISO(),
      amount,
      method: values['payment-method'],
      reference: String(values['payment-reference'] || '').trim() || 'Abono registrado',
      allocations
    });
    if (!saveData()) return;
    closeModal(); render(); toast(`Abono de ${money(amount)} registrado y aplicado a la cuenta.`);
    return;
  }

  if (form.dataset.form === 'sale-due') {
    const sale = data.sales.find(item => item.id === form.dataset.saleId);
    if (!sale || Number(sale.balance) <= 0 || sale.clientId === 'general') return toast('No se encontró una venta a crédito abierta.', true);
    const client = data.clients.find(item => item.id === sale.clientId);
    const dueDate = String(values['sale-due-date'] || '');
    const parsedDueDate = parseDateInput(dueDate);
    if (!parsedDueDate) return toast('Selecciona una fecha de vencimiento válida.', true);
    const previousLinkedOverdue = data.sales
      .filter(item => item.clientId === sale.clientId && saleIsOverdue(item))
      .reduce((sum, item) => sum + (Number(item.balance) || 0), 0);
    const legacyOverdue = Math.max(0, roundMoney((Number(client?.overdue) || 0) - previousLinkedOverdue));
    sale.dueDate = dueDate;
    const isPastDue = parsedDueDate < parseAppDate(todayISO());
    const paidAmount = Math.max(0, roundMoney((Number(sale.total) || 0) - (Number(sale.balance) || 0)));
    sale.status = Number(sale.balance) <= 0 ? 'paid' : isPastDue ? 'overdue' : paidAmount > 0 ? 'partial' : 'pending';
    if (client) {
      const updatedLinkedOverdue = data.sales
        .filter(item => item.clientId === sale.clientId && saleIsOverdue(item))
        .reduce((sum, item) => sum + (Number(item.balance) || 0), 0);
      client.overdue = Math.min(client.balance, roundMoney(legacyOverdue + updatedLinkedOverdue));
      if (client.status !== 'inactive') client.status = client.overdue > 0 ? 'overdue' : 'active';
      client.due = client.balance > 0 ? clientDueLabel(client) : 'Sin saldo';
    }
    if (!saveData()) return;
    closeModal(); render(); toast(`Vencimiento de la venta ${sale.id} actualizado.`);
    return;
  }

  if (form.dataset.form === 'sale') {
    const clientId = values['sale-client'];
    const client = data.clients.find(item => item.id === clientId);
    const paymentMethod = values['sale-payment'];
    const isCredit = paymentMethod === 'Crédito';
    const dueDate = String(values['sale-due-date'] || '');
    const lineNodes = [...form.querySelectorAll('[data-sale-line]')];
    if (!lineNodes.length) return toast('Agrega al menos un producto a la venta.', true);
    if (isCredit && !client) return toast('Las ventas a crédito requieren seleccionar un cliente registrado.', true);
    const parsedDueDate = parseDateInput(dueDate);
    if (isCredit && (!parsedDueDate || parsedDueDate < parseAppDate(todayISO()))) return toast('Selecciona una fecha de vencimiento igual o posterior a hoy.', true);

    const items = [];
    const quantitiesBySku = new Map();
    for (const line of lineNodes) {
      const sku = line.querySelector('[name="sale-product"]')?.value;
      const quantity = Number(line.querySelector('[name="sale-quantity"]')?.value);
      const product = data.products.find(item => item.sku === sku);
      if (!product) return toast('Selecciona un producto válido en cada renglón.', true);
      if (!Number.isInteger(quantity) || quantity < 1) return toast('Cada cantidad debe ser un entero mayor a cero.', true);
      quantitiesBySku.set(product.sku, (quantitiesBySku.get(product.sku) || 0) + quantity);
      items.push({ sku: product.sku, name: product.name, quantity, price: product.price, total: roundMoney(product.price * quantity) });
    }
    for (const [sku, quantity] of quantitiesBySku) {
      const product = data.products.find(item => item.sku === sku);
      if (!product || quantity > product.stock) return toast(`Existencia insuficiente de ${product?.name || sku}. Disponible: ${product?.stock || 0}.`, true);
    }
    const total = roundMoney(items.reduce((sum, item) => sum + item.total, 0));
    if (total <= 0) return toast('El total de la venta debe ser mayor a cero.', true);
    const saleId = nextRecordId('V-', data.sales, 4);
    const sale = {
      id: saleId,
      clientId: client?.id || 'general',
      date: todayISO(),
      dueDate: isCredit ? dueDate : '',
      status: isCredit ? 'pending' : 'paid',
      total,
      balance: isCredit ? total : 0,
      delivery: values['sale-delivery'],
      paymentMethod,
      items
    };
    data.sales.unshift(sale);
    if (client) {
      client.purchases += 1;
      client.billed = roundMoney(client.billed + total);
      if (isCredit) {
        client.balance = roundMoney(client.balance + total);
        if (clientOverdueBalance(client) === 0) client.due = formatDate(dueDate);
      }
    }
    quantitiesBySku.forEach((quantity, sku) => {
      const product = data.products.find(item => item.sku === sku);
      product.stock -= quantity;
    });
    if (!isCredit) {
      data.payments.unshift({ id: nextRecordId('COB-', data.payments, 3), clientId: client?.id || 'general', date: todayISO(), amount: total, method: paymentMethod, reference: `Cobro de venta ${saleId}`, saleId, allocations: [{ saleId, amount: total }] });
    }
    if (!saveData()) return;
    closeModal(); render(); toast(`Venta ${saleId} registrada correctamente.`);
  }
}
function downloadBlob(blob, filename) {
  const link = document.createElement('a');
  const objectUrl = URL.createObjectURL(blob);
  link.href = objectUrl;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
}
function exportCSV(rows, filename) {
  const csvCell = value => {
    const isNumber = typeof value === 'number' && Number.isFinite(value);
    let text = String(value ?? '');
    if (!isNumber && /^[\s\u0000-\u001f]*[=+@-]/.test(text)) text = `'${text}`;
    return `"${text.replace(/"/g, '""')}"`;
  };
  const csv = rows.map(row => row.map(csvCell).join(',')).join('\r\n');
  downloadBlob(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' }), filename);
  toast('Archivo CSV listo para descargar.');
}
function exportData() {
  exportCSV([
    ['Tipo', 'Identificador', 'Nombre', 'Contacto / categoría', 'Teléfono / unidad', 'Cantidad', 'Facturado / costo', 'Saldo / precio', 'Vencido / mínimo'],
    ...data.clients.map(client => ['Cliente', client.id, client.name, client.contact, client.phone, client.purchases, client.billed, client.balance, clientOverdueBalance(client)]),
    ...data.products.map(product => ['Producto', product.sku, product.name, product.category, product.unit, product.stock, product.cost, product.price, product.min])
  ], 'mono-cromat-listas.csv');
}
function exportBackup() {
  const backup = {
    format: 'mono-cromat-backup',
    version: 1,
    exportedAt: new Date().toISOString(),
    data,
    settings: loadSettings()
  };
  const date = todayISO();
  downloadBlob(new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json;charset=utf-8' }), `mono-cromat-respaldo-${date}.json`);
  toast('Respaldo completo descargado. Guárdalo fuera de este dispositivo.');
}
function chooseBackup() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const backup = JSON.parse(await file.text());
      if (backup?.format !== 'mono-cromat-backup' || !backup.data || !Array.isArray(backup.data.clients) || !Array.isArray(backup.data.products) || !Array.isArray(backup.data.sales) || !Array.isArray(backup.data.payments)) {
        return toast('El archivo no es un respaldo válido de Mono Cromat.', true);
      }
      if (!window.confirm('Restaurar este respaldo reemplazará clientes, productos, ventas, abonos y ajustes locales. ¿Deseas continuar?')) return;
      const previousSettings = loadSettings();
      const restoredSettings = { ...previousSettings, ...(backup.settings || {}), preferences: { ...previousSettings.preferences, ...(backup.settings?.preferences || {}) } };
      data = normalizeData(backup.data);
      if (!persistSettings(restoredSettings)) return;
      if (!saveData()) {
        persistSettings(previousSettings);
        return;
      }
      render();
      toast('Respaldo restaurado correctamente.');
    } catch (error) {
      console.error('No se pudo restaurar el respaldo.', error);
      toast('No se pudo leer el archivo de respaldo. Verifica que sea un JSON válido.', true);
    }
  };
  input.click();
}
function parseCSV(text) {
  const source = String(text || '').replace(/^\uFEFF/, '');
  let delimiter = ',';
  let quoted = false;
  let counts = { ',': 0, ';': 0, '\t': 0 };
  for (let i = 0; i < source.length && source[i] !== '\n' && source[i] !== '\r'; i += 1) {
    const char = source[i];
    if (char === '"' && source[i + 1] === '"' && quoted) { i += 1; continue; }
    if (char === '"') { quoted = !quoted; continue; }
    if (!quoted && Object.hasOwn(counts, char)) counts[char] += 1;
  }
  delimiter = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const rows = [];
  let row = [];
  let cell = '';
  quoted = false;
  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];
    if (char === '"' && quoted && next === '"') { cell += '"'; i += 1; continue; }
    if (char === '"' && !quoted && cell.length === 0) { quoted = true; continue; }
    if (char === '"' && quoted) { quoted = false; continue; }
    if (char === delimiter && !quoted) { row.push(cell.trim()); cell = ''; continue; }
    if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(cell.trim());
      if (row.some(value => value !== '')) rows.push(row);
      row = []; cell = '';
      continue;
    }
    cell += char;
  }
  if (quoted) throw new Error('El CSV tiene comillas sin cerrar.');
  if (cell.length || row.length) { row.push(cell.trim()); if (row.some(value => value !== '')) rows.push(row); }
  return rows;
}
function csvNumber(value, fallback = 0) {
  const raw = String(value ?? '').trim();
  if (!raw) return fallback;
  let normalized = raw.replace(/[^0-9,.-]/g, '');
  if (normalized.includes(',') && normalized.includes('.')) {
    normalized = normalized.lastIndexOf(',') > normalized.lastIndexOf('.')
      ? normalized.replace(/\./g, '').replace(',', '.')
      : normalized.replace(/,/g, '');
  } else if (normalized.includes(',')) {
    normalized = normalized.replace(',', '.');
  }
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}
function chooseCSV() {
  const importRoute = currentRoute;
  if (!['clientes', 'productos'].includes(importRoute)) return toast('Para importar un CSV entra primero a Clientes o Inventario.', true);
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.csv,text/csv';
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const rows = parseCSV(await file.text());
      if (rows.length < 2) return toast('El CSV no contiene filas para importar.', true);
      const headers = rows.shift().map(header => String(header).replace(/^\uFEFF/, '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim());
      const headerIndex = names => headers.findIndex(header => names.includes(header));
      const value = (row, names) => { const index = headerIndex(names); return index >= 0 ? String(row[index] ?? '').trim() : ''; };
      if (importRoute === 'clientes' && headerIndex(['cliente', 'nombre', 'nombre comercial']) < 0) return toast('El CSV de clientes debe incluir una columna Cliente o Nombre.', true);
      if (importRoute === 'productos' && (headerIndex(['producto', 'nombre']) < 0 || headerIndex(['precio', 'precio de venta']) < 0)) return toast('El CSV de inventario debe incluir Producto/Nombre y Precio.', true);

      let imported = 0;
      let skipped = 0;
      rows.forEach(row => {
        if (importRoute === 'clientes') {
          const name = value(row, ['cliente', 'nombre', 'nombre comercial']);
          const givenId = value(row, ['codigo', 'id']);
          const id = givenId || nextRecordId('C', data.clients);
          const billed = csvNumber(value(row, ['facturado', 'ventas']), 0);
          const balance = csvNumber(value(row, ['saldo']), 0);
          const overdue = csvNumber(value(row, ['vencido']), 0);
          const purchases = csvNumber(value(row, ['compras']), 0);
          if (!name || !Number.isFinite(billed) || !Number.isFinite(balance) || !Number.isFinite(overdue) || !Number.isInteger(purchases) || billed < 0 || balance < 0 || overdue < 0 || overdue > balance || purchases < 0 || data.clients.some(client => client.id.toLowerCase() === id.toLowerCase() || client.name.toLowerCase() === name.toLowerCase())) { skipped += 1; return; }
          data.clients.push({ id, name, segment: value(row, ['segmento', 'tipo']) || 'General', contact: value(row, ['contacto']), phone: value(row, ['telefono']), purchases, billed, balance, overdue, status: overdue > 0 ? 'overdue' : 'active', due: value(row, ['vencimiento', 'fecha de vencimiento']) || (balance ? 'Por revisar' : 'Sin compras') });
          imported += 1;
          return;
        }
        const name = value(row, ['producto', 'nombre']);
        const givenSku = value(row, ['sku', 'codigo']);
        const sku = (givenSku || nextRecordId('SKU-', data.products, 4)).toUpperCase();
        const price = csvNumber(value(row, ['precio', 'precio de venta']), NaN);
        const cost = csvNumber(value(row, ['costo']), 0);
        const stock = csvNumber(value(row, ['existencia', 'stock']), 0);
        const min = csvNumber(value(row, ['minimo', 'min']), 5);
        if (!name || !Number.isFinite(price) || !Number.isFinite(cost) || !Number.isInteger(stock) || !Number.isInteger(min) || price <= 0 || cost < 0 || price < cost || stock < 0 || min < 0 || data.products.some(product => product.sku.toLowerCase() === sku.toLowerCase())) { skipped += 1; return; }
        data.products.push({ sku, name, category: value(row, ['categoria']) || 'General', unit: value(row, ['unidad']) || 'pza', cost, price, stock, min });
        imported += 1;
      });
      if (!imported) return toast('No se importaron filas. Revisa los encabezados, importes e identificadores duplicados.', true);
      if (!saveData()) return;
      renderCurrentPage();
      toast(`${imported} registro${imported === 1 ? '' : 's'} importado${imported === 1 ? '' : 's'}${skipped ? `; ${skipped} fila${skipped === 1 ? '' : 's'} omitida${skipped === 1 ? '' : 's'}` : ''}.`);
    } catch (error) {
      console.error('Error al importar CSV.', error);
      toast(error.message || 'No se pudo leer el CSV.', true);
    }
  };
  input.click();
}
function saveSettings() {
  const settings = loadSettings();
  const fields = [...document.querySelectorAll('[data-setting]')];
  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      field.focus();
      return toast('Revisa los campos del negocio antes de guardar.', true);
    }
    settings[field.dataset.setting] = field.value.trim();
  }
  if (!settings.businessName) return toast('El nombre comercial es obligatorio.', true);
  if (!persistSettings(settings)) return;
  applyPreferences();
  toast('Cambios guardados correctamente.');
}
function clearAllData() {
  data = { clients: [], products: [], sales: [], payments: [] };
  currentClientFilter = 'all'; currentClientSort = 'balance'; currentProductFilter = 'all'; currentProductCategory = 'all'; currentSalesFilter = 'all'; searchTerm = '';
  if (!saveData()) return;
  closeModal(); render(); toast('Los datos locales se borraron correctamente.');
}
function toast(message, error = false) {
  const region = document.getElementById('toast-region');
  const node = document.createElement('div');
  node.className = 'toast';
  node.setAttribute('role', error ? 'alert' : 'status');
  node.setAttribute('aria-atomic', 'true');
  node.innerHTML = `${icon(error ? 'warning' : 'check')}<span>${esc(message)}</span>`;
  region.appendChild(node);
  setTimeout(() => node.remove(), 3400);
}
function isMobileViewport() {
  return window.matchMedia ? window.matchMedia('(max-width: 780px)').matches : Number(window.innerWidth || 1024) <= 780;
}
function closeMobileMenu(restoreFocus = false) {
  const sidebar = document.getElementById('sidebar');
  const trigger = document.querySelector('.menu-trigger');
  const wasOpen = sidebar?.classList.contains('open');
  sidebar?.classList.remove('open');
  document.body.classList.remove('menu-open');
  trigger?.setAttribute('aria-expanded', 'false');
  const mobile = isMobileViewport();
  if (sidebar) {
    sidebar.inert = mobile;
    sidebar.setAttribute('aria-hidden', String(mobile));
  }
  if (restoreFocus && wasOpen) trigger?.focus();
  else if (wasOpen) window.requestAnimationFrame(() => document.querySelector('#page-content h1')?.focus());
}
function openMobileMenu() {
  const sidebar = document.getElementById('sidebar');
  const trigger = document.querySelector('.menu-trigger');
  if (sidebar) {
    sidebar.inert = false;
    sidebar.setAttribute('aria-hidden', 'false');
    sidebar.classList.add('open');
  }
  document.body.classList.add('menu-open');
  trigger?.setAttribute('aria-expanded', 'true');
  window.requestAnimationFrame(() => sidebar?.querySelector('.mobile-close')?.focus());
}
function syncMobileNavigation() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  if (!isMobileViewport()) {
    sidebar.inert = false;
    sidebar.setAttribute('aria-hidden', 'false');
    sidebar.classList.remove('open');
    document.body.classList.remove('menu-open');
    document.querySelector('.menu-trigger')?.setAttribute('aria-expanded', 'false');
  } else if (!sidebar.classList.contains('open')) {
    sidebar.inert = true;
    sidebar.setAttribute('aria-hidden', 'true');
  }
}

function showNotifications() {
  const low = data.products.filter(product => product.stock <= product.min);
  const overdue = data.clients.filter(client => clientOverdueBalance(client) > 0);
  const messages = [];
  if (low.length) messages.push(`${low.length} producto${low.length === 1 ? '' : 's'} en o bajo mínimo`);
  if (overdue.length) messages.push(`${overdue.length} cuenta${overdue.length === 1 ? '' : 's'} con saldo vencido`);
  toast(messages.length ? `Alertas operativas: ${messages.join('; ')}.` : 'No hay alertas operativas pendientes.');
}
function handleClick(event) {
  const actionNode = event.target.closest?.('[data-action]');
  if (actionNode) {
    if (actionNode.dataset.action === 'close-modal' && actionNode.classList.contains('modal-backdrop') && event.target !== actionNode) return;
    const action = actionNode.dataset.action;
    if (action === 'open-menu') openMobileMenu();
    if (action === 'close-menu') closeMobileMenu(true);
    if (action === 'close-modal') closeModal(true);
    if (action === 'new-client') newClientModal();
    if (action === 'edit-client') { const client = data.clients.find(item => item.id === actionNode.dataset.id); if (client) newClientModal(client); }
    if (action === 'new-product') newProductModal();
    if (action === 'new-payment') newPaymentModal();
    if (action === 'new-sale') newSaleModal();
    if (action === 'add-sale-line') {
      const lines = actionNode.closest('form[data-form="sale"]')?.querySelector('[data-sale-lines]');
      lines?.insertAdjacentHTML('beforeend', saleLineMarkup());
      updateSalePreview(actionNode.closest('form[data-form="sale"]'));
    }
    if (action === 'remove-sale-line') {
      const form = actionNode.closest('form[data-form="sale"]');
      const line = actionNode.closest('[data-sale-line]');
      const lines = form?.querySelectorAll('[data-sale-line]') || [];
      if (lines.length <= 1 && line) {
        line.querySelector('[name="sale-product"]').value = '';
        line.querySelector('[name="sale-quantity"]').value = '1';
      } else line?.remove();
      updateSalePreview(form);
    }
    if (action === 'view-client') viewClientModal(data.clients.find(client => client.id === actionNode.dataset.id));
    if (action === 'view-sale') viewSaleModal(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'edit-sale-due') editSaleDueModal(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'view-receipt') viewReceiptModal(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'print-receipt') printReceipt();
    if (action === 'download-receipt') downloadReceipt(data.sales.find(sale => sale.id === actionNode.dataset.id));
    if (action === 'collect-client') {
      const clientId = actionNode.dataset.id;
      if (document.getElementById('modal-root').innerHTML) closeModal(false);
      newPaymentModal(clientId);
    }
    if (action === 'edit-product') newProductModal(data.products.find(product => product.sku === actionNode.dataset.id));
    if (action === 'mark-delivered') {
      const sale = data.sales.find(item => item.id === actionNode.dataset.id);
      if (sale && sale.delivery !== 'Entregado') {
        sale.delivery = 'Entregado';
        if (!saveData()) return;
        renderCurrentPage();
        toast(`Pedido ${sale.id} marcado como entregado.`);
      }
    }
    if (action === 'export-data') exportData();
    if (action === 'export-backup') exportBackup();
    if (action === 'import-backup') chooseBackup();
    if (action === 'export-sales') exportCSV([['Folio', 'Cliente', 'Fecha', 'Vencimiento', 'Estado', 'Entrega', 'Total', 'Saldo'], ...data.sales.map(sale => [sale.id, clientById(sale.clientId).name, formatDate(sale.date), saleDueLabel(sale), effectiveSaleStatus(sale), sale.delivery, sale.total, sale.balance])], 'mono-cromat-ventas.csv');
    if (action === 'export-collections') exportCSV([['Cliente', 'Saldo', 'Vencido', 'Contacto', 'Teléfono'], ...data.clients.filter(client => client.balance > 0).map(client => [client.name, client.balance, clientOverdueBalance(client), client.contact, client.phone])], 'mono-cromat-cobranza.csv');
    if (action === 'import-csv') chooseCSV();
    if (action === 'show-notifications') showNotifications();
    if (action === 'focus-search') {
      const search = document.querySelector('.search-box input');
      if (search) search.focus(); else toast('Abre Clientes, Ventas o Inventario para buscar registros.');
    }
    if (action === 'save-settings') saveSettings();
    if (action === 'scroll-settings') {
      const target = document.getElementById(actionNode.dataset.target);
      if (target) {
        document.querySelectorAll('.settings-nav button').forEach(buttonNode => {
          buttonNode.classList.toggle('active', buttonNode === actionNode);
          if (buttonNode === actionNode) buttonNode.setAttribute('aria-current', 'true'); else buttonNode.removeAttribute('aria-current');
        });
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (action === 'dashboard-period') {
      dashboardPeriod = Number(actionNode.dataset.period) === 30 ? 30 : 7;
      renderCurrentPage();
    }
    if (action === 'report-period') {
      reportPeriod = Number(actionNode.dataset.period) === 7 ? 7 : 30;
      renderCurrentPage();
    }
    if (action === 'reset-demo') {
      if (window.confirm('Esto reemplazará todos los datos locales por registros de demostración. Descarga un respaldo si necesitas conservarlos. ¿Continuar?')) {
        data = normalizeData(JSON.parse(JSON.stringify(initialData)));
        currentClientFilter = 'all'; currentClientSort = 'balance'; currentProductFilter = 'all'; currentProductCategory = 'all'; currentSalesFilter = 'all'; searchTerm = '';
        if (!saveData()) return;
        render(); toast('Se restauraron los datos de demostración.');
      }
    }
    if (action === 'clear-data' && window.confirm('¿Eliminar todos los clientes, productos, ventas y abonos de este dispositivo? Esta acción no se puede deshacer.')) clearAllData();
    if (action === 'toggle-setting') {
      const setting = actionNode.dataset.settingToggle;
      const allowed = ['inventoryAlerts', 'collectionAlerts', 'compactTables'];
      if (allowed.includes(setting)) {
        const settings = loadSettings();
        settings.preferences[setting] = !settings.preferences[setting];
        if (!persistSettings(settings)) return;
        actionNode.classList.toggle('on', settings.preferences[setting]);
        actionNode.setAttribute('aria-pressed', String(settings.preferences[setting]));
        applyPreferences();
        if (currentRoute === 'ajustes') renderSettings();
        else renderCurrentPage();
      }
    }
  }

  const filterNode = event.target.closest?.('[data-filter-group]');
  if (filterNode) {
    const group = filterNode.dataset.filterGroup;
    const filter = filterNode.dataset.filter;
    if (group === 'clients') currentClientFilter = filter;
    if (group === 'products') currentProductFilter = filter;
    if (group === 'sales') currentSalesFilter = filter;
    renderCurrentPage();
  }
  if (event.target.closest?.('.main-nav a') && document.getElementById('sidebar')?.classList.contains('open')) closeMobileMenu(false);
}
function handleInput(event) {
  const saleForm = event.target.closest?.('form[data-form="sale"]');
  if (saleForm) updateSalePreview(saleForm);
  if (!['client-search', 'product-search', 'sales-search'].includes(event.target.id)) return;
  searchTerm = event.target.value;
  if (currentRoute === 'clientes') renderClients();
  if (currentRoute === 'productos') renderProducts();
  if (currentRoute === 'ventas') renderSales();
  const input = document.getElementById(event.target.id);
  if (input) { input.focus(); input.setSelectionRange(searchTerm.length, searchTerm.length); }
}
function handleChange(event) {
  const saleForm = event.target.closest?.('form[data-form="sale"]');
  if (saleForm) {
    syncSalePaymentFields(saleForm);
    updateSalePreview(saleForm);
  }
  if (event.target.id === 'client-sort') {
    currentClientSort = event.target.value;
    renderClients();
  }
  if (event.target.id === 'product-category') {
    currentProductCategory = event.target.value;
    renderProducts();
  }
  if (event.target.id === 'payment-client') {
    const client = data.clients.find(item => item.id === event.target.value);
    const amountField = document.getElementById('payment-amount');
    if (amountField && client) amountField.max = String(client.balance);
  }
}
function handleKeydown(event) {
  const modal = document.querySelector('#modal-root [data-modal-inner]');
  const sidebar = document.getElementById('sidebar');
  const menuIsModal = Boolean(isMobileViewport() && sidebar?.classList.contains('open'));
  if (event.key === 'Escape') {
    if (modal) { event.preventDefault(); closeModal(true); return; }
    if (menuIsModal) { event.preventDefault(); closeMobileMenu(true); return; }
  }
  if (event.key !== 'Tab') return;
  const focusRoot = modal || (menuIsModal ? sidebar : null);
  if (!focusRoot) return;
  const focusable = [...focusRoot.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && (document.activeElement === first || !focusRoot.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && (document.activeElement === last || !focusRoot.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
}
function handleSubmit(event) {
  const form = event.target.closest?.('form[data-form]');
  if (form) { event.preventDefault(); handleFormSubmit(form); }
}

document.addEventListener('click', handleClick);
document.addEventListener('input', handleInput);
document.addEventListener('change', handleChange);
document.addEventListener('keydown', handleKeydown);
document.addEventListener('submit', handleSubmit);
window.addEventListener('hashchange', render);
window.addEventListener('resize', syncMobileNavigation);
render();
syncMobileNavigation();

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(error => console.warn('No se pudo registrar el service worker.', error)));
