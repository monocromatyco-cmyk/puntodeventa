const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const PosDomain = require('../domain.js');

function makeClassList() {
  const values = new Set();
  return {
    add(value) { values.add(value); },
    remove(value) { values.delete(value); },
    contains(value) { return values.has(value); },
    toggle(value, force = !values.has(value)) { force ? values.add(value) : values.delete(value); return force; }
  };
}
function bootApp() {
  const elements = new Map();
  const getNode = id => {
    if (!elements.has(id)) elements.set(id, {
      id, hidden: false, dataset: {}, attributes: {}, classList: makeClassList(), innerHTML: '', value: '',
      querySelectorAll() { return []; }, setAttribute(name, value) { this.attributes[name] = value; },
      removeAttribute(name) { delete this.attributes[name]; }, focus() {}, scrollIntoView() {}
    });
    return elements.get(id);
  };
  const document = {
    title: '', body: { classList: makeClassList() }, activeElement: null,
    getElementById: getNode, querySelector(selector) {
      if (selector === '.floating-menu-trigger') return getNode('floating-menu-trigger');
      if (selector === '[data-action="logout"]') return getNode('logout-button');
      return null;
    },
    querySelectorAll() { return []; }, addEventListener() {}
  };
  const location = { hash: '#/inicio', hostname: 'localhost' };
  const window = { PosDomain, location, addEventListener() {}, scrollTo() {} };
  const context = {
    document, window, location, navigator: {}, PosDomain,
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    fetch: async () => ({ status: 200, json: async () => ({ localMode: true }) }),
    Intl, Date, Math, Number, String, Array, Object, JSON, Set, Map, RegExp, Error, Promise, URL, Blob,
    console, setTimeout, clearTimeout, requestAnimationFrame: callback => callback(), confirm: () => true
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(require.resolve('../app.js'), 'utf8'), context);
  return { context, getNode };
}

test('demo dashboard and report screens render with computed, not fixture-only totals', async () => {
  const { context, getNode } = bootApp();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(vm.runInContext('PosDomain.isValidState({ data: initialData, settings: settingsState })', context), true);
  assert.match(getNode('page-content').innerHTML, /Ventas de hoy/);
  assert.doesNotMatch(getNode('page-content').innerHTML, /\$4,012|12\.8%/);
  context.location.hash = '#/reportes';
  context.renderReports();
  assert.match(getNode('page-content').innerHTML, /Ventas por periodo/);
  assert.match(getNode('page-content').innerHTML, /Estado de cartera/);
  assert.doesNotMatch(getNode('page-content').innerHTML, /\$4,012|12\.8%/);
  for (const [renderPage, heading] of [['renderClients', 'Clientes'], ['renderProducts', 'Inventario'], ['renderSales', 'Ventas'], ['renderCollections', 'Cobranza']]) {
    context[renderPage]();
    assert.match(getNode('page-content').innerHTML, new RegExp(`<h1>${heading}</h1>`));
  }
});

test('settings screen offers working sections and persistent preference controls', async () => {
  const { context, getNode } = bootApp();
  await new Promise(resolve => setImmediate(resolve));
  context.renderSettings();
  const html = getNode('page-content').innerHTML;
  assert.match(html, /data-target="settings-preferences"/);
  assert.match(html, /data-preference="compactTables"/);
  assert.doesNotMatch(html, /Equipo y permisos/);
});
