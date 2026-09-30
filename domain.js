(function attachPosDomain(root) {
  function parseDate(value) {
    if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
    if (typeof value !== 'string' || !value.trim()) return null;
    const text = value.trim();
    const localMatch = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
    const isoDateMatch = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    const date = localMatch
      ? new Date(Number(localMatch[3]), Number(localMatch[2]) - 1, Number(localMatch[1]))
      : isoDateMatch
        ? new Date(Number(isoDateMatch[1]), Number(isoDateMatch[2]) - 1, Number(isoDateMatch[3]))
        : new Date(text);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function sumBy(items, selector) {
    return items.reduce((sum, item) => sum + (Number(selector(item)) || 0), 0);
  }

  function getSalesBuckets(sales, days = 7, now = new Date()) {
    const buckets = [];
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    for (let offset = days - 1; offset >= 0; offset -= 1) {
      const date = new Date(today);
      date.setDate(today.getDate() - offset);
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      const matchingSales = sales.filter(sale => {
        const saleDate = parseDate(sale.date);
        return saleDate && `${saleDate.getFullYear()}-${saleDate.getMonth()}-${saleDate.getDate()}` === key;
      });
      buckets.push({ date, total: sumBy(matchingSales, sale => sale.total), count: matchingSales.length });
    }
    return buckets;
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
    const currentTotal = sumBy(todaySales, sale => sale.total);
    const previousTotal = sumBy(previousSales, sale => sale.total);
    return {
      todayTotal: currentTotal,
      todayCount: todaySales.length,
      todayAverage: todaySales.length ? currentTotal / todaySales.length : 0,
      collectedToday: sumBy(todayPayments, payment => payment.amount) + sumBy(todaySales.filter(sale => sale.status === 'paid' || (sale.paymentMethod && sale.paymentMethod !== 'Crédito')), sale => sale.total),
      weekTotal: sumBy(buckets, bucket => bucket.total),
      previousWeekTotal: previousTotal,
      weekChange: previousTotal ? ((sumBy(buckets, bucket => bucket.total) - previousTotal) / previousTotal) * 100 : null,
      buckets
    };
  }

  function isValidState(value) {
    if (!value || typeof value !== 'object' || !value.data || typeof value.data !== 'object'
      || !['clients', 'products', 'sales', 'payments'].every(key => Array.isArray(value.data[key]) && value.data[key].length <= 20_000)
      || !value.settings || typeof value.settings !== 'object' || Array.isArray(value.settings)) return false;
    const text = (item, limit = 200, required = false) => typeof item === 'string' && item.length <= limit && (!required || item.trim().length > 0);
    const id = item => text(item, 40, true) && /^[A-Za-z0-9_-]+$/.test(item);
    const unique = values => new Set(values).size === values.length;
    const amount = item => Number.isFinite(Number(item)) && Number(item) >= 0 && Number(item) <= 1_000_000_000;
    const clients = value.data.clients; const products = value.data.products; const sales = value.data.sales; const payments = value.data.payments;
    const clientIds = new Set(clients.map(client => client?.id));
    const validClients = clients.every(client => client && id(client.id) && text(client.name, 200, true) && text(client.segment || '', 100)
      && text(client.contact || '', 200) && text(client.phone || '', 50) && text(client.due || '', 100)
      && ['purchases', 'billed', 'balance', 'overdue'].every(key => amount(client[key])) && Number.isInteger(Number(client.purchases)))
      && unique(clients.map(client => client.id));
    const validProducts = products.every(product => product && id(product.sku) && text(product.name, 200, true) && text(product.category || '', 100)
      && text(product.unit || '', 40) && ['cost', 'price', 'stock', 'min'].every(key => amount(product[key])))
      && unique(products.map(product => product.sku));
    const validSales = sales.every(sale => sale && id(sale.id) && (sale.clientId === 'general' || clientIds.has(sale.clientId))
      && text(sale.date, 20) && /^(\d{1,2}[/-]\d{1,2}[/-]\d{4}|\d{4}-\d{2}-\d{2})$/.test(sale.date)
      && ['total', 'balance'].every(key => amount(sale[key])) && ['pending', 'partial', 'paid', 'overdue'].includes(sale.status)
      && text(sale.delivery || '', 40) && Array.isArray(sale.items || []) && (sale.items || []).every(item => item && text(item.name, 200, true)
        && text(item.sku || '', 40) && ['quantity', 'price', 'total'].every(key => amount(item[key])))) && unique(sales.map(sale => sale.id));
    const validPayments = payments.every(payment => payment && id(payment.id) && (payment.clientId === 'general' || clientIds.has(payment.clientId))
      && text(payment.date, 20) && amount(payment.amount) && text(payment.method || '', 80) && text(payment.reference || '', 300))
      && unique(payments.map(payment => payment.id));
    const preferences = value.settings.preferences || {};
    const validSettings = ['businessName', 'rfc', 'phone', 'currency', 'address'].every(key => text(value.settings[key] || '', 200))
      && ['inventoryAlerts', 'collectionReminders', 'compactTables'].every(key => typeof preferences[key] === 'boolean');
    return validClients && validProducts && validSales && validPayments && validSettings;
  }

  function applyPaymentToSales(sales, clientId, amount) {
    let remaining = Math.max(0, Number(amount) || 0);
    const openSales = sales.filter(sale => sale.clientId === clientId && Number(sale.balance) > 0)
      .sort((a, b) => (parseDate(a.date)?.getTime() || 0) - (parseDate(b.date)?.getTime() || 0));
    for (const sale of openSales) {
      if (!remaining) break;
      const applied = Math.min(remaining, Number(sale.balance) || 0);
      sale.balance = Math.max(0, Number(sale.balance) - applied);
      remaining -= applied;
      if (sale.balance === 0) sale.status = 'paid';
      else if (sale.status !== 'overdue') sale.status = 'partial';
    }
    return remaining;
  }

  const domain = { parseDate, sumBy, getSalesBuckets, getSalesMetrics, applyPaymentToSales, isValidState };
  if (typeof module !== 'undefined' && module.exports) module.exports = domain;
  if (root) root.PosDomain = domain;
})(typeof globalThis !== 'undefined' ? globalThis : this);
