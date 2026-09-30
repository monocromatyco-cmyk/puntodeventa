const test = require('node:test');
const assert = require('node:assert/strict');
const PosDomain = require('../domain.js');
const { bootApp, form } = require('./helpers/app-harness.js');
const { makeApi } = require('./helpers/fake-api.js');

function workspace() {
  const state = PosDomain.createEmptyState();
  state.data.clients.push({ id: 'C001', name: 'Cliente de prueba', purchases: 0, billed: 0, balance: 0, overdue: 0 });
  state.data.products.push(
    { sku: 'ACE-900', name: 'Aceite', category: 'Abarrotes', unit: 'pza', cost: 30, price: 44, stock: 10, min: 2 },
    { sku: 'AGU-1L', name: 'Agua', category: 'Bebidas', unit: 'pza', cost: 60, price: 96, stock: 10, min: 2 }
  );
  return state;
}
function installWorkspace(app) {
  app.context.fixture = workspace();
  app.run('data = normalizeData(fixture.data); settingsState = PosDomain.normalizeSettings(fixture.settings); lastSavedDataSnapshot = JSON.stringify(data);');
}
function saleForm(app, payment = 'Crédito', lines = [['ACE-900', 2], ['AGU-1L', 1]]) {
  return form('sale', { 'sale-client': 'C001', 'sale-payment': payment,
    'sale-delivery': 'Por entregar', 'sale-due-date': app.run('todayISO()') }, lines);
}

test('demo dashboard and all seven screens render computed totals', async () => {
  const app = bootApp();
  await app.ready();
  assert.equal(app.run('PosDomain.isValidState({ data: initialData, settings: settingsState })'), true);
  assert.match(app.getNode('page-content').innerHTML, /Ventas de hoy/);
  assert.doesNotMatch(app.getNode('page-content').innerHTML, /\$4,012|12\.8%/);
  for (const [renderPage, heading] of [['renderReports', 'Reportes'], ['renderClients', 'Clientes'], ['renderProducts', 'Inventario'], ['renderSales', 'Ventas'], ['renderCollections', 'Cobranza'], ['renderSettings', 'Ajustes']]) {
    app.context[renderPage]();
    assert.match(app.getNode('page-content').innerHTML, new RegExp(`<h1[^>]*>${heading}</h1>`));
  }
  app.context.renderReports();
  assert.match(app.getNode('page-content').innerHTML, /Ventas por periodo/);
  assert.match(app.getNode('page-content').innerHTML, /Estado de cartera/);
});

test('settings preserve both versions of collection preferences and offer backups', async () => {
  const stored = new Map([['mono-cromat-settings', JSON.stringify({ preferences: { collectionAlerts: false } })]]);
  const app = bootApp({ stored });
  await app.ready();
  app.context.renderSettings();
  assert.equal(app.run('loadSettings().preferences.collectionReminders'), false);
  const html = app.getNode('page-content').innerHTML;
  assert.match(html, /data-target="settings-preferences"/);
  assert.match(html, /data-preference="compactTables"/);
  assert.match(html, /data-action="export-backup"/);
  assert.doesNotMatch(html, /Equipo y permisos/);
});

test('multi-item credit sales preserve due dates and update stock and customer balances', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  app.context.handleFormSubmit(saleForm(app));
  const result = app.run('JSON.stringify(data)');
  const data = JSON.parse(result);
  assert.equal(data.sales[0].items.length, 2);
  assert.equal(data.sales[0].total, 184);
  assert.equal(data.sales[0].balance, 184);
  assert.equal(data.sales[0].dueDate, app.run('todayISO()'));
  assert.equal(data.clients[0].balance, 184);
  assert.deepEqual(data.products.map(product => product.stock), [8, 9]);
  assert.equal(data.payments.length, 0);
  assert.equal(app.run('PosDomain.isValidState({ data, settings: settingsState })'), true);
});

test('credit requires a due date and duplicate product lines cannot oversell stock', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  const missingDue = saleForm(app); missingDue.values['sale-due-date'] = '';
  app.context.handleFormSubmit(missingDue);
  assert.equal(app.run('data.sales.length'), 0);
  app.context.handleFormSubmit(saleForm(app, 'Efectivo', [['ACE-900', 6], ['ACE-900', 6]]));
  assert.equal(app.run('data.sales.length'), 0);
  assert.equal(app.run('data.products[0].stock'), 10);
});

test('cash sales create one linked payment without doubling the daily collection total', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  app.context.handleFormSubmit(saleForm(app, 'Efectivo'));
  assert.equal(app.run('data.payments.length'), 1);
  assert.equal(app.run('data.payments[0].saleId === data.sales[0].id'), true);
  assert.equal(app.run('PosDomain.getSalesMetrics(data.sales, data.payments).collectedToday'), 184);
});

test('editing credit due dates and recording payments retains allocation history', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  app.context.handleFormSubmit(saleForm(app));
  const id = app.run('data.sales[0].id');
  const yesterday = app.run('todayISO(shiftDate(new Date(), -1))');
  app.context.handleFormSubmit(form('sale-due', { 'sale-due-date': yesterday }, [], { saleId: id }));
  assert.equal(app.run('effectiveSaleStatus(data.sales[0])'), 'overdue');
  app.context.handleFormSubmit(form('payment', { 'payment-client': 'C001', 'payment-amount': '84', 'payment-method': 'Transferencia' }));
  assert.equal(app.run('data.sales[0].balance'), 100);
  assert.equal(app.run('data.clients[0].balance'), 100);
  assert.equal(app.run('data.payments[0].allocations[0].amount'), 84);
  assert.equal(app.run('data.payments[0].allocations[0].saleId'), id);
});

test('storage errors roll back a multi-item sale instead of changing only in-memory stock', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  const before = app.run('JSON.stringify(data)');
  app.context.localStorage.setItem = () => { throw Error('Storage full'); };
  app.context.handleFormSubmit(saleForm(app));
  assert.equal(app.run('JSON.stringify(data)'), before);
});

test('receipt rendering includes every item and editable business data', async () => {
  const app = bootApp(); await app.ready(); installWorkspace(app);
  app.context.handleFormSubmit(saleForm(app));
  app.run('settingsState.businessName = "Negocio consolidado"; settingsState.email = "ventas@example.test";');
  const html = app.run('receiptHTML(data.sales[0])');
  assert.match(html, /Aceite/); assert.match(html, /Agua/);
  assert.match(html, /NEGOCIO CONSOLIDADO/); assert.match(html, /ventas@example.test/);
  assert.match(html, /CFDI/);
});

test('CSV parser handles escaped quotes, semicolons, BOMs and malformed files', async () => {
  const app = bootApp(); await app.ready();
  assert.deepEqual(JSON.parse(JSON.stringify(app.context.parseCSV('\uFEFFNombre;Contacto\r\n"Tienda; Centro";"Ana ""López"""'))),
    [['Nombre', 'Contacto'], ['Tienda; Centro', 'Ana "López"']]);
  assert.throws(() => app.context.parseCSV('Nombre\n"sin cierre'), /comillas/);
});

test('unsynced cloud changes warn before closing and are not stored as private local data', async () => {
  const api = makeApi(); const cookie = await api.authenticate();
  const app = bootApp({ fetch: async (url, init = {}) => api.request(url, { ...init, headers: { ...init.headers, cookie } }) });
  await app.ready(); installWorkspace(app);
  api.failNextWrite();
  assert.equal(app.run('saveData()'), true);
  await app.run('cloudStore.flush()');
  assert.equal(app.run('cloudStore.hasPending()'), true);
  let prevented = false;
  const event = { preventDefault() { prevented = true; } };
  app.events.get('beforeunload')(event);
  assert.equal(prevented, true);
  assert.equal(event.returnValue, '');
  assert.equal(app.stored.has('mono-cromat-data'), false);
  app.run('cloudStore.disconnect({ discardPending: true })');
});
