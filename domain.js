(function attachPosDomain(root) {
  const MAX_STATE_BYTES = 1_000_000;
  const roundMoney = value => Math.round((Number(value) + Number.EPSILON) * 100) / 100;

  function parseDate(value) {
    if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
    if (typeof value !== 'string' || !value.trim()) return null;
    const text = value.trim();
    const localMatch = text.match(/^(\d{1,2})[/.\-](\d{1,2})[/.\-](\d{4})$/);
    const isoMatch = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (localMatch || isoMatch) {
      const [year, month, day] = localMatch
        ? [Number(localMatch[3]), Number(localMatch[2]), Number(localMatch[1])]
        : [Number(isoMatch[1]), Number(isoMatch[2]), Number(isoMatch[3])];
      const date = new Date(year, month - 1, day);
      return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day ? date : null;
    }
    // Timestamp support is for reporting only; stored dates are validated separately.
    const date = new Date(text);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function normalizeSettings(value = {}) {
    const stored = value && typeof value === 'object' && !Array.isArray(value) ? value : {};
    const preferences = stored.preferences && typeof stored.preferences === 'object' ? stored.preferences : {};
    const normalized = {
      businessName: 'Mono Cromat & Co.', rfc: '', phone: '', email: '',
      currency: 'MXN — Peso mexicano', address: '', ...stored,
      preferences: {
        inventoryAlerts: preferences.inventoryAlerts ?? true,
        collectionReminders: preferences.collectionReminders ?? preferences.collectionAlerts ?? true,
        compactTables: preferences.compactTables ?? false
      }
    };
    return normalized;
  }

  function createEmptyState() {
    return { data: { clients: [], products: [], sales: [], payments: [] }, settings: normalizeSettings() };
  }

  function sumBy(items, selector) {
    return roundMoney(items.reduce((sum, item) => sum + (Number(selector(item)) || 0), 0));
  }

  function getSalesBuckets(sales, days = 7, now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Array.from({ length: days }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() - days + 1 + index);
      const matching = sales.filter(sale => {
        const saleDate = parseDate(sale.date);
        return saleDate && saleDate.getFullYear() === date.getFullYear()
          && saleDate.getMonth() === date.getMonth() && saleDate.getDate() === date.getDate();
      });
      return { date, total: sumBy(matching, sale => sale.total), count: matching.length };
    });
  }

  function getSalesMetrics(sales = [], payments = [], now = new Date()) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const isSameDay = value => {
      const date = parseDate(value);
      return date && date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
    };
    const todaySales = sales.filter(sale => isSameDay(sale.date));
    const todayPayments = payments.filter(payment => isSameDay(payment.date));
    const buckets = getSalesBuckets(sales, 7, now);
    const previousStart = new Date(today);
    previousStart.setDate(today.getDate() - 13);
    const previousEnd = new Date(today);
    previousEnd.setDate(today.getDate() - 6);
    const previousSales = sales.filter(sale => {
      const date = parseDate(sale.date);
      return date && date >= previousStart && date < previousEnd;
    });
    // PR1 records cash sales as payments; older versions did not. Only add the
    // portion of a paid cash sale that is not already represented by a payment.
    const unrecordedCash = sumBy(todaySales.filter(sale => sale.status === 'paid' && sale.paymentMethod !== 'Crédito'), sale => {
      const recorded = sumBy(payments, payment => {
        if (payment.saleId && payment.saleId === sale.id) return payment.amount;
        return sumBy((payment.allocations || []).filter(line => line.saleId === sale.id), line => line.amount);
      });
      return Math.max(0, Number(sale.total) - recorded);
    });
    const todayTotal = sumBy(todaySales, sale => sale.total);
    const weekTotal = sumBy(buckets, bucket => bucket.total);
    const previousTotal = sumBy(previousSales, sale => sale.total);
    return {
      todayTotal, todayCount: todaySales.length,
      todayAverage: todaySales.length ? todayTotal / todaySales.length : 0,
      collectedToday: roundMoney(sumBy(todayPayments, payment => payment.amount) + unrecordedCash),
      weekTotal, previousWeekTotal: previousTotal,
      weekChange: previousTotal ? ((weekTotal - previousTotal) / previousTotal) * 100 : null,
      buckets
    };
  }

  function isValidIdentifier(value) {
    return typeof value === 'string' && value.length > 0 && value.length <= 40
      && value === value.trim() && /^[\p{L}\p{N}_. /-]+$/u.test(value);
  }

  function isValidState(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value) || !value.data || Array.isArray(value.data)
      || !['clients', 'products', 'sales', 'payments'].every(key => Array.isArray(value.data[key]) && value.data[key].length <= 20_000)
      || !value.settings || typeof value.settings !== 'object' || Array.isArray(value.settings)) return false;
    const text = (item, limit = 200, required = false) => typeof item === 'string' && item.length <= limit && (!required || item.trim().length > 0);
    const optionalText = (item, limit = 200) => item === undefined || text(item, limit);
    const amount = item => typeof item === 'number' && Number.isFinite(item) && item >= 0 && item <= 1_000_000_000;
    const date = item => text(item, 20) && /^(\d{1,2}[/.\-]\d{1,2}[/.\-]\d{4}|\d{4}-\d{1,2}-\d{1,2})$/.test(item) && Boolean(parseDate(item));
    const unique = values => new Set(values.map(item => String(item).toLowerCase())).size === values.length;
    const { clients, products, sales, payments } = value.data;
    const clientIds = new Set(clients.map(client => client?.id));
    const saleIds = new Set(sales.map(sale => sale?.id));
    const validClients = clients.every(client => client && isValidIdentifier(client.id) && text(client.name, 200, true)
      && optionalText(client.segment, 100) && optionalText(client.contact) && optionalText(client.phone, 50)
      && optionalText(client.due, 100) && optionalText(client.notes, 2000)
      && ['purchases', 'billed', 'balance', 'overdue'].every(key => amount(client[key]))
      && Number.isInteger(client.purchases) && client.overdue <= client.balance)
      && unique(clients.map(client => client.id));
    const validProducts = products.every(product => product && isValidIdentifier(product.sku) && text(product.name, 200, true)
      && optionalText(product.category, 100) && optionalText(product.unit, 40)
      && ['cost', 'price', 'stock', 'min'].every(key => amount(product[key]))
      && Number.isInteger(product.stock) && Number.isInteger(product.min)) && unique(products.map(product => product.sku));
    const validSales = sales.every(sale => sale && isValidIdentifier(sale.id) && (sale.clientId === 'general' || clientIds.has(sale.clientId))
      && date(sale.date) && (!sale.dueDate || date(sale.dueDate))
      && ['total', 'balance'].every(key => amount(sale[key])) && sale.balance <= sale.total
      && ['pending', 'partial', 'paid', 'overdue'].includes(sale.status)
      && optionalText(sale.delivery, 40) && optionalText(sale.paymentMethod, 80)
      && (sale.items === undefined || (Array.isArray(sale.items) && sale.items.length <= 500 && sale.items.every(item => item
        && text(item.name, 200, true) && optionalText(item.sku, 40)
        && ['quantity', 'price', 'total'].every(key => amount(item[key])) && item.quantity > 0)))) && unique(sales.map(sale => sale.id));
    const validPayments = payments.every(payment => payment && isValidIdentifier(payment.id)
      && (payment.clientId === 'general' || clientIds.has(payment.clientId)) && date(payment.date) && amount(payment.amount)
      && optionalText(payment.method, 80) && optionalText(payment.reference, 300)
      && (payment.saleId === undefined || saleIds.has(payment.saleId))
      && (payment.allocations === undefined || (Array.isArray(payment.allocations) && payment.allocations.length <= 500
        && payment.allocations.every(line => line && saleIds.has(line.saleId) && amount(line.amount))
        && sumBy(payment.allocations, line => line.amount) <= payment.amount + 0.001))) && unique(payments.map(payment => payment.id));
    const preferences = value.settings.preferences || {};
    const validSettings = text(value.settings.businessName, 200, true)
      && ['rfc', 'currency'].every(key => optionalText(value.settings[key]))
      && optionalText(value.settings.phone, 50) && optionalText(value.settings.email, 254) && optionalText(value.settings.address, 500)
      && ['inventoryAlerts', 'collectionReminders', 'compactTables'].every(key => typeof preferences[key] === 'boolean');
    return validClients && validProducts && validSales && validPayments && validSettings;
  }

  function stateByteLength(value) {
    const json = JSON.stringify(value);
    return typeof Buffer !== 'undefined' ? Buffer.byteLength(json) : new TextEncoder().encode(json).length;
  }

  function statesEqual(left, right) {
    const canonical = value => {
      if (Array.isArray(value)) return value.map(canonical);
      if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]));
      return value;
    };
    return JSON.stringify(canonical(left)) === JSON.stringify(canonical(right));
  }

  function applyPaymentToSales(sales, clientId, amount, now = new Date()) {
    let remaining = roundMoney(Math.max(0, Number(amount) || 0));
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const overdue = sale => sale.status === 'overdue' || Boolean(parseDate(sale.dueDate) && parseDate(sale.dueDate) < today);
    const openSales = sales.filter(sale => sale.clientId === clientId && Number(sale.balance) > 0)
      .sort((a, b) => Number(overdue(b)) - Number(overdue(a)) || (parseDate(a.date)?.getTime() || 0) - (parseDate(b.date)?.getTime() || 0));
    for (const sale of openSales) {
      if (!remaining) break;
      const applied = roundMoney(Math.min(remaining, Number(sale.balance) || 0));
      sale.balance = Math.max(0, roundMoney(Number(sale.balance) - applied));
      remaining = Math.max(0, roundMoney(remaining - applied));
      sale.status = sale.balance === 0 ? 'paid' : overdue(sale) ? 'overdue' : 'partial';
    }
    return remaining;
  }

  function readBackup(backup) {
    let state;
    if (backup?.format === 'mono-cromat-backup' && backup.version === 1) state = { data: backup.data, settings: normalizeSettings(backup.settings) };
    else if (backup?.schemaVersion === 1 && backup.state) state = { data: backup.state.data, settings: normalizeSettings(backup.state.settings) };
    else throw new Error('El archivo no es un respaldo compatible de Mono Cromat.');
    if (!isValidState(state)) throw new Error('El respaldo contiene datos incompletos, duplicados o inválidos.');
    if (stateByteLength({ state, revision: 0 }) > MAX_STATE_BYTES) throw new Error('Los datos del respaldo superan el límite de 1 MB.');
    return state;
  }

  const domain = { MAX_STATE_BYTES, parseDate, normalizeSettings, createEmptyState, sumBy, getSalesBuckets, getSalesMetrics,
    isValidIdentifier, isValidState, stateByteLength, statesEqual, applyPaymentToSales, readBackup };
  if (typeof module !== 'undefined' && module.exports) module.exports = domain;
  if (root) root.PosDomain = domain;
})(typeof globalThis !== 'undefined' ? globalThis : this);
