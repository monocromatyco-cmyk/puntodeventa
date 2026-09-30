const fs = require('node:fs');
const vm = require('node:vm');
const PosDomain = require('../../domain.js');
const PosCloud = require('../../cloud.js');

function makeClassList() {
  const values = new Set();
  return { add(...items) { items.forEach(value => values.add(value)); }, remove(...items) { items.forEach(value => values.delete(value)); },
    contains: value => values.has(value), toggle(value, force = !values.has(value)) { force ? values.add(value) : values.delete(value); return force; } };
}
function bootApp({ fetch: fetcher, stored = new Map() } = {}) {
  const elements = new Map();
  const events = new Map();
  const getNode = id => {
    if (!elements.has(id)) elements.set(id, {
      id, hidden: false, dataset: {}, attributes: {}, classList: makeClassList(), innerHTML: '', value: '', isConnected: true,
      querySelectorAll() { return []; }, querySelector() { return null; },
      setAttribute(name, value) { this.attributes[name] = value; }, removeAttribute(name) { delete this.attributes[name]; },
      focus() {}, scrollIntoView() {}, appendChild() {}, remove() {}, addEventListener() {}, click() {}
    });
    return elements.get(id);
  };
  const document = {
    title: '', body: getNode('body'), activeElement: null, getElementById: getNode,
    querySelector(selector) {
      if (selector === '.menu-trigger' || selector === '.floating-menu-trigger') return getNode('floating-menu-trigger');
      if (selector === '[data-action="logout"]') return getNode('logout-button');
      if (selector === '.notification-dot' || selector === '.notification-trigger') return getNode(selector);
      return null;
    },
    querySelectorAll() { return []; }, addEventListener() {}, createElement: tag => getNode(`created-${tag}-${elements.size}`)
  };
  const location = { hash: '#/inicio', hostname: 'localhost' };
  const schedule = (fn, ms) => { const timer = setTimeout(fn, ms); timer.unref(); return timer; };
  const window = { PosDomain, PosCloud, location, innerWidth: 1024,
    addEventListener(name, callback) { events.set(name, callback); }, scrollTo() {}, confirm: () => true,
    requestAnimationFrame: callback => callback(), setTimeout: schedule
  };
  class FakeFormData {
    constructor(form) { this.values = form.values || {}; }
    entries() { return Object.entries(this.values)[Symbol.iterator](); }
    get(key) { return this.values[key] ?? null; }
  }
  const context = {
    document, window, location, navigator: {}, PosDomain, PosCloud,
    localStorage: { getItem: key => stored.get(key) ?? null, setItem: (key, value) => stored.set(key, value), removeItem: key => stored.delete(key) },
    fetch: fetcher || (async () => ({ ok: true, status: 200, json: async () => ({ localMode: true }) })),
    Intl, Date, Math, Number, String, Array, Object, JSON, Set, Map, RegExp, Error, Promise, URL, Blob, TextEncoder, AbortController,
    FormData: FakeFormData, console, setTimeout: schedule, clearTimeout
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(require.resolve('../../app.js'), 'utf8'), context);
  return { context, getNode, stored, events, run: source => vm.runInContext(source, context),
    ready: () => new Promise(resolve => setImmediate(resolve)) };
}

function form(type, values = {}, lines = [], extra = {}) {
  return { dataset: { form: type, ...extra }, values,
    querySelectorAll(selector) { return selector === '[data-sale-line]' ? lines.map(([sku, quantity]) => ({
      querySelector(field) { return { value: field === '[name="sale-product"]' ? sku : String(quantity) }; }
    })) : []; }
  };
}
module.exports = { bootApp, form };
