const test = require('node:test');
const assert = require('node:assert/strict');
const { parseDate, getSalesBuckets, getSalesMetrics, applyPaymentToSales, isValidState } = require('../domain.js');

test('parseDate handles the POS local date format without timezone shifts', () => {
  const date = parseDate('17/09/2026');
  assert.equal(date.getFullYear(), 2026);
  assert.equal(date.getMonth(), 8);
  assert.equal(date.getDate(), 17);
});

test('sales buckets aggregate only matching local calendar days', () => {
  const now = new Date(2026, 8, 17, 12);
  const buckets = getSalesBuckets([
    { date: '17/09/2026', total: 120 },
    { date: '17/09/2026', total: 30 },
    { date: '16/09/2026', total: 80 },
    { date: '17/08/2026', total: 999 }
  ], 2, now);
  assert.deepEqual(buckets.map(({ total, count }) => ({ total, count })), [
    { total: 80, count: 1 },
    { total: 150, count: 2 }
  ]);
});

test('daily sales, ticket average, payments and week comparison are derived from records', () => {
  const now = new Date(2026, 8, 17, 12);
  const metrics = getSalesMetrics([
    { date: '17/09/2026', total: 300, status: 'paid', paymentMethod: 'Efectivo' },
    { date: '17/09/2026', total: 100, status: 'pending', paymentMethod: 'Crédito' },
    { date: '10/09/2026', total: 200 }
  ], [
    { date: '17/09/2026', amount: 125 },
    { date: '16/09/2026', amount: 50 }
  ], now);
  assert.equal(metrics.todayTotal, 400);
  assert.equal(metrics.todayCount, 2);
  assert.equal(metrics.todayAverage, 200);
  assert.equal(metrics.collectedToday, 425);
  assert.equal(metrics.weekTotal, 400);
  assert.equal(metrics.previousWeekTotal, 200);
  assert.equal(metrics.weekChange, 100);
});

test('payments reduce the oldest open sale first and update its payment status', () => {
  const sales = [
    { id: 'new', clientId: 'C1', date: '17/09/2026', total: 100, balance: 100, status: 'pending' },
    { id: 'old', clientId: 'C1', date: '01/09/2026', total: 80, balance: 80, status: 'overdue' },
    { id: 'other', clientId: 'C2', date: '01/09/2026', total: 50, balance: 50, status: 'pending' }
  ];
  const unapplied = applyPaymentToSales(sales, 'C1', 100);
  assert.equal(unapplied, 0);
  assert.equal(sales[1].balance, 0);
  assert.equal(sales[1].status, 'paid');
  assert.equal(sales[0].balance, 80);
  assert.equal(sales[0].status, 'partial');
  assert.equal(sales[2].balance, 50);
});

test('backup validation accepts a valid workspace and rejects unsafe identifiers or duplicates', () => {
  const state = {
    data: { clients: [{ id: 'C001', name: 'Cliente', purchases: 0, billed: 0, balance: 0, overdue: 0 }], products: [], sales: [], payments: [] },
    settings: { businessName: 'Negocio', rfc: '', phone: '', currency: 'MXN', address: '', preferences: { inventoryAlerts: true, collectionReminders: true, compactTables: false } }
  };
  assert.equal(isValidState(state), true);
  assert.equal(isValidState({ ...state, data: { ...state.data, clients: [{ ...state.data.clients[0], id: 'x\"><img src=x>' }] } }), false);
  assert.equal(isValidState({ ...state, data: { ...state.data, clients: [state.data.clients[0], state.data.clients[0]] } }), false);
});

test('zero sales produce safe zero metrics without NaN or Infinity', () => {
  const metrics = getSalesMetrics([], [], new Date(2026, 8, 17));
  assert.equal(metrics.todayAverage, 0);
  assert.equal(metrics.weekChange, null);
  assert.ok(metrics.buckets.every(bucket => bucket.total === 0));
});
