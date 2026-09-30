const { test, expect } = require('@playwright/test');
const fs = require('node:fs/promises');
const { createEmptyState } = require('../domain.js');

function workspace(name = 'Cliente real guardado') {
  const state = createEmptyState();
  state.data.clients.push({ id: 'C001', name, contact: '', phone: '', purchases: 0, billed: 0, balance: 0, overdue: 0, status: 'active' });
  state.data.products.push(
    { sku: 'ACE-900', name: 'Aceite', category: 'Abarrotes', unit: 'pza', cost: 30, price: 44, stock: 10, min: 2 },
    { sku: 'AGU-1L', name: 'Agua', category: 'Bebidas', unit: 'pza', cost: 60, price: 96, stock: 10, min: 2 }
  );
  return state;
}
async function seed(context, state) {
  await context.addInitScript(value => {
    if (!localStorage.getItem('e2e-seeded')) {
      localStorage.setItem('mono-cromat-data', JSON.stringify(value.data));
      localStorage.setItem('mono-cromat-settings', JSON.stringify(value.settings));
      localStorage.setItem('e2e-seeded', 'true');
    }
  }, state);
}
async function openSale(page, payment = 'Crédito') {
  await page.goto('/#/ventas');
  await page.getByRole('button', { name: 'Registrar venta', exact: true }).click();
  await page.getByLabel('Cliente', { exact: true }).selectOption('C001');
  await page.getByLabel('Forma de pago', { exact: true }).selectOption(payment);
  const lines = page.locator('[data-sale-line]');
  await lines.nth(0).locator('[name="sale-product"]').selectOption('ACE-900');
  await lines.nth(0).locator('[name="sale-quantity"]').fill('2');
  await page.getByRole('button', { name: 'Agregar otro producto' }).click();
  await lines.nth(1).locator('[name="sale-product"]').selectOption('AGU-1L');
  await lines.nth(1).locator('[name="sale-quantity"]').fill('1');
  if (payment === 'Crédito') await page.getByLabel('Fecha de vencimiento del crédito').fill(await page.evaluate(() => todayISO()));
  await page.getByRole('button', { name: 'Guardar venta', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
}

test.beforeEach(async ({ context }) => {
  // The fonts are optional; keep test results independent of third-party CDNs.
  await context.route('https://fonts.googleapis.com/**', route => route.abort());
  await context.route('https://fonts.gstatic.com/**', route => route.abort());
});

test('full-screen menu, keyboard focus and all seven routes work without JS errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Abrir menú de navegación' });
  await trigger.click();
  const sidebar = page.locator('#sidebar');
  await expect(sidebar).toBeVisible();
  const box = await sidebar.boundingBox();
  expect(Math.round(box.width)).toBe(page.viewportSize().width);
  expect(Math.round(box.height)).toBe(page.viewportSize().height);
  await expect(page.locator('#main-content')).toHaveJSProperty('inert', true);
  await page.keyboard.press('Escape');
  await expect(sidebar).toBeHidden();
  await expect(trigger).toBeFocused();
  for (const [route, heading] of [['ventas', 'Ventas'], ['clientes', 'Clientes'], ['productos', 'Inventario'], ['cobranza', 'Cobranza'], ['reportes', 'Reportes'], ['ajustes', 'Ajustes'], ['inicio', /Buenos|Buenas/]]) {
    await trigger.click();
    await page.locator(`.nav-item[data-route="${route}"]`).click();
    await expect(page.locator('#page-content h1')).toHaveText(heading);
    await expect(sidebar).toBeHidden();
  }
  expect(errors).toEqual([]);
});

test('multi-item credit sales save stock, balances, due dates and printable receipts', async ({ page, context }) => {
  await seed(context, workspace());
  await openSale(page);
  const data = await page.evaluate(() => JSON.parse(localStorage.getItem('mono-cromat-data')));
  expect(data.sales[0].items).toHaveLength(2);
  expect(data.sales[0].total).toBe(184);
  expect(data.sales[0].balance).toBe(184);
  expect(data.sales[0].dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  expect(data.products.map(product => product.stock)).toEqual([8, 9]);
  expect(data.clients[0].balance).toBe(184);
  await page.getByRole('button', { name: 'Ver recibo V-0001', exact: true }).click();
  await expect(page.locator('.receipt-sheet')).toContainText('Aceite');
  await expect(page.locator('.receipt-sheet')).toContainText('Agua');
  await expect(page.locator('.receipt-sheet')).toContainText('CFDI');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar HTML', exact: true }).click();
  const download = await downloadPromise;
  const html = await fs.readFile(await download.path(), 'utf8');
  expect(html).toContain('<style>');
  expect(html).toContain('data:image/png;base64,');
  expect(html).not.toContain('href="receipt-styles.css"');
});

test('cash sales are counted once and preferences survive reloads and backups', async ({ page, context }) => {
  await seed(context, workspace());
  await openSale(page, 'Efectivo');
  expect(await page.evaluate(() => PosDomain.getSalesMetrics(data.sales, data.payments).collectedToday)).toBe(184);
  await page.goto('/#/ajustes');
  await page.getByRole('button', { name: 'Cambiar modo compacto', exact: true }).click();
  await expect(page.locator('body')).toHaveClass(/compact-tables/);
  await page.reload();
  await expect(page.getByRole('button', { name: 'Cambiar modo compacto', exact: true })).toHaveAttribute('aria-pressed', 'true');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar respaldo completo', exact: true }).click();
  const backup = JSON.parse(await fs.readFile(await (await downloadPromise).path(), 'utf8'));
  expect(backup.format).toBe('mono-cromat-backup');
  expect(backup.data.sales[0].items).toHaveLength(2);
  expect(backup.settings.preferences.compactTables).toBe(true);
});

test('cloud login gates private views until authentication succeeds', async ({ page, context }) => {
  let authenticated = false; let stateReads = 0;
  await context.route('**/api/**', async route => {
    const url = new URL(route.request().url());
    if (url.pathname === '/api/auth/session') return route.fulfill({ json: { configured: true, authenticated, localMode: false } });
    if (url.pathname === '/api/auth/login') {
      const correct = route.request().postDataJSON().password === 'fixture-password';
      authenticated = correct;
      return route.fulfill({ status: correct ? 200 : 401, json: correct ? { authenticated: true } : { error: 'Contraseña incorrecta' } });
    }
    if (url.pathname === '/api/state') { stateReads += 1; return route.fulfill({ json: { state: createEmptyState(), revision: 0, isNew: true } }); }
    return route.fulfill({ status: 404, json: {} });
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Inicia sesión' })).toBeVisible();
  await expect(page.locator('#app-shell')).toBeHidden();
  expect(stateReads).toBe(0);
  await page.getByLabel('Contraseña', { exact: true }).fill('wrong');
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await expect(page.getByRole('alert')).toHaveText('Contraseña incorrecta');
  await page.getByLabel('Contraseña', { exact: true }).fill('fixture-password');
  await page.getByRole('button', { name: 'Entrar', exact: true }).click();
  await expect(page.locator('#app-shell')).toBeVisible();
  expect(stateReads).toBe(1);
});

test('failed cloud migration can be retried without losing the original local records', async ({ page, context }) => {
  const original = workspace();
  await seed(context, original);
  let saved = null; let writes = 0;
  await context.route('**/api/**', async route => {
    const url = new URL(route.request().url());
    if (url.pathname === '/api/auth/session') return route.fulfill({ json: { configured: true, authenticated: true, localMode: false } });
    if (url.pathname === '/api/state' && route.request().method() === 'GET') {
      return route.fulfill({ json: { state: saved || createEmptyState(), revision: saved ? 1 : 0, isNew: !saved } });
    }
    if (url.pathname === '/api/state' && route.request().method() === 'PUT') {
      writes += 1;
      if (writes === 1) return route.fulfill({ status: 503, json: { error: 'Fallo temporal de Neon' } });
      saved = route.request().postDataJSON().state;
      return route.fulfill({ json: { revision: 1 } });
    }
    return route.fulfill({ status: 404, json: {} });
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'No pudimos conectar' })).toBeVisible();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('mono-cromat-data')).clients[0].name)).toBe('Cliente real guardado');
  await expect(page.getByRole('button', { name: 'Descargar copia local sin borrar datos' })).toBeVisible();
  await page.getByRole('button', { name: 'Reintentar conexión', exact: true }).click();
  await expect(page.locator('#app-shell')).toBeVisible();
  expect(writes).toBe(2);
  expect(saved.data.clients[0].name).toBe('Cliente real guardado');
  expect(await page.evaluate(() => localStorage.getItem('mono-cromat-data'))).toBeNull();
  await page.goto('/#/clientes');
  await expect(page.locator('#page-content')).toContainText('Cliente real guardado');
});

test('an existing cloud workspace preserves and exports a different local backup', async ({ page, context }) => {
  await seed(context, workspace('Cliente del navegador'));
  const cloud = workspace('Cliente de Neon');
  await context.route('**/api/**', route => {
    const session = new URL(route.request().url()).pathname === '/api/auth/session';
    return route.fulfill({ json: session ? { configured: true, authenticated: true, localMode: false } : { state: cloud, revision: 2, isNew: false } });
  });
  await page.goto('/#/ajustes');
  await expect(page.locator('#app-shell')).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar copia local', exact: true }).click();
  const backup = JSON.parse(await fs.readFile(await (await downloadPromise).path(), 'utf8'));
  expect(backup.data.clients[0].name).toBe('Cliente del navegador');
  expect(await page.evaluate(() => data.clients[0].name)).toBe('Cliente de Neon');
  expect(await page.evaluate(() => localStorage.getItem('mono-cromat-data'))).not.toBeNull();
});

test('PWA caches only its public shell and local mode still opens offline', async ({ page, context }) => {
  await page.goto('/');
  await expect(page.locator('#app-shell')).toBeVisible();
  await page.evaluate(async () => { await navigator.serviceWorker.ready; });
  await page.reload();
  await expect(page.locator('#app-shell')).toBeVisible();
  const urls = await page.evaluate(async () => {
    const cache = await caches.open('mono-cromat-v8-consolidated');
    return (await cache.keys()).map(request => new URL(request.url).pathname);
  });
  expect(urls).toContain('/domain.js'); expect(urls).toContain('/cloud.js');
  expect(urls).toContain('/mobile-operations.css'); expect(urls).toContain('/assets/icon-512.png');
  expect(urls.some(url => url.startsWith('/api/'))).toBe(false);
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#app-shell')).toBeVisible();
  await expect(page.locator('#page-content h1')).toContainText(/Buenos|Buenas/);
  await context.setOffline(false);
});

test('development server does not expose environment, backend or uploaded files', async ({ request }) => {
  for (const url of ['/.env.example', '/server.js', '/package.json', '/api/%5B...path%5D.js', '/tests/api.test.js', '/uploads/image-1.png']) {
    const response = await request.get(url);
    expect([401, 404]).toContain(response.status());
  }
  expect((await request.get('/manifest.json')).status()).toBe(200);
  expect((await request.get('/sw.js')).headers()['cache-control']).toContain('no-store');
});

test('credit due-date editing and payment allocation work through the dialogs', async ({ page, context }) => {
  await seed(context, workspace());
  await openSale(page);
  await page.getByRole('button', { name: 'Ver venta V-0001', exact: true }).click();
  await page.getByRole('button', { name: 'Editar vencimiento', exact: true }).click();
  await page.getByLabel('Fecha de vencimiento', { exact: true }).fill(await page.evaluate(() => todayISO(shiftDate(new Date(), -1))));
  await page.getByRole('button', { name: 'Guardar vencimiento', exact: true }).click();
  await expect(page.locator('#page-content')).toContainText('Vencida');
  await page.getByRole('button', { name: 'Ver venta V-0001', exact: true }).click();
  await page.getByRole('button', { name: 'Registrar abono', exact: true }).click();
  await page.getByLabel('Monto', { exact: true }).fill('84');
  await page.getByLabel('Método de pago', { exact: true }).selectOption('Transferencia');
  await page.getByRole('dialog').getByRole('button', { name: 'Registrar abono', exact: true }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('mono-cromat-data')));
  expect(state.sales[0].balance).toBe(100);
  expect(state.clients[0].balance).toBe(100);
  expect(state.payments[0].allocations).toEqual([{ saleId: 'V-0001', amount: 84 }]);
});

test('JSON restoration accepts backups from both PRs and rejects malformed backups', async ({ page, context }) => {
  await seed(context, workspace());
  await page.goto('/#/ajustes');
  const restore = async (backup, confirm = true) => {
    const chooser = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Restaurar respaldo JSON', exact: true }).click();
    if (confirm) page.once('dialog', dialog => dialog.accept());
    await (await chooser).setFiles({ name: 'backup.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(backup)) });
  };
  const pr1 = workspace('Respaldo PR1');
  pr1.settings.preferences = { inventoryAlerts: true, collectionAlerts: false, compactTables: true };
  await restore({ format: 'mono-cromat-backup', version: 1, ...pr1 });
  await expect(page.locator('body')).toHaveClass(/compact-tables/);
  expect(await page.evaluate(() => data.clients[0].name)).toBe('Respaldo PR1');
  const pr2 = workspace('Respaldo PR2');
  await restore({ schemaVersion: 1, state: pr2 });
  await expect(page.locator('body')).not.toHaveClass(/compact-tables/);
  expect(await page.evaluate(() => data.clients[0].name)).toBe('Respaldo PR2');
  await restore({ schemaVersion: 1, state: { data: {} } }, false);
  await expect(page.locator('#toast-region')).toContainText('No se restauró ningún dato');
  expect(await page.evaluate(() => data.clients[0].name)).toBe('Respaldo PR2');
});
