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

test('invalid calendar dates are rejected while leap days are accepted', () => {
  assert.equal(parseDate('31/02/2026'), null);
  assert.equal(parseDate('2026-13-01'), null);
  assert.equal(parseDate('2026-02-29'), null);
  assert.equal(parseDate('2024-02-29').getDate(), 29);
});

test('paid cash sales with linked payments are not counted twice', () => {
  const now = new Date(2026, 8, 30);
  const sales = [{ id: 'V-1', date: '2026-09-30', total: 184, balance: 0, status: 'paid', paymentMethod: 'Efectivo' }];
  const payments = [{ id: 'P-1', date: '2026-09-30', amount: 184, saleId: 'V-1', allocations: [{ saleId: 'V-1', amount: 184 }] }];
  assert.equal(getSalesMetrics(sales, payments, now).collectedToday, 184);
  assert.equal(getSalesMetrics(sales, [], now).collectedToday, 184);
});

test('date-based payment allocation prioritizes overdue credit before older current credit', () => {
  const sales = [
    { id: 'current', clientId: 'C1', date: '2026-01-01', dueDate: '2026-12-31', total: 100, balance: 100, status: 'pending' },
    { id: 'overdue', clientId: 'C1', date: '2026-09-01', dueDate: '2026-09-15', total: 100, balance: 100, status: 'pending' }
  ];
  applyPaymentToSales(sales, 'C1', 40, new Date(2026, 8, 30));
  assert.equal(sales[0].balance, 100);
  assert.equal(sales[1].balance, 60);
  assert.equal(sales[1].status, 'overdue');
});

test('both PR1 and PR2 backup formats restore without dropping their preferences', () => {
  const { createEmptyState, readBackup } = require('../domain.js');
  const legacy = createEmptyState();
  legacy.settings.preferences = { inventoryAlerts: true, collectionAlerts: false, compactTables: true };
  const fromPr1 = readBackup({ format: 'mono-cromat-backup', version: 1, ...legacy });
  assert.equal(fromPr1.settings.preferences.collectionReminders, false);
  assert.equal(fromPr1.settings.preferences.compactTables, true);
  const fromPr2 = readBackup({ schemaVersion: 1, state: createEmptyState() });
  assert.equal(isValidState(fromPr2), true);
  assert.throws(() => readBackup({ format: 'mono-cromat-backup', version: 99, ...legacy }), /compatible/);
  assert.throws(() => readBackup({ schemaVersion: 1, state: { ...legacy, data: {} } }), /inválidos/);
});

test('validation rejects impossible dates, excessive balances and non-numeric money', () => {
  const { createEmptyState } = require('../domain.js');
  const state = createEmptyState();
  state.data.sales.push({ id: 'V-1', clientId: 'general', date: '2026-02-31', total: 20, balance: 0, status: 'paid' });
  assert.equal(isValidState(state), false);
  state.data.sales[0].date = '2026-09-30';
  state.data.sales[0].balance = 21;
  assert.equal(isValidState(state), false);
  state.data.sales[0].balance = 0;
  state.data.sales[0].total = true;
  assert.equal(isValidState(state), false);
});

test('state comparison is independent of JSONB object key order', () => {
  const { statesEqual } = require('../domain.js');
  assert.equal(statesEqual({ data: { clients: [], sales: [] }, settings: {} }, { settings: {}, data: { sales: [], clients: [] } }), true);
  assert.equal(statesEqual({ clients: ['a', 'b'] }, { clients: ['b', 'a'] }), false);
});
