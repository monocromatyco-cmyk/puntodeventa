(function attachPosCloud(root) {
  const domain = typeof module !== 'undefined' && module.exports ? require('./domain.js') : root.PosDomain;
  const DATA_KEY = 'mono-cromat-data';
  const SETTINGS_KEY = 'mono-cromat-settings';
  const clone = value => JSON.parse(JSON.stringify(value));

  class CloudError extends Error {
    constructor(message, status = 0) { super(message); this.name = 'CloudError'; this.status = status; }
  }

  function createStore(options = {}) {
    const fetcher = options.fetch || root.fetch.bind(root);
    const storage = options.storage || root.localStorage;
    const setTimer = options.setTimer || root.setTimeout.bind(root);
    const clearTimer = options.clearTimer || root.clearTimeout.bind(root);
    const onStatus = options.onStatus || (() => {});
    const onNotice = options.onNotice || (() => {});
    const onUnauthorized = options.onUnauthorized || (() => {});
    const prepareLocalState = options.prepareLocalState || ((data, settings) => ({ data, settings: domain.normalizeSettings(settings) }));
    const controllers = new Set();
    let revision = 0;
    let connected = false;
    let generation = 0;
    let pending = null;
    let blocked = null;
    let inFlight = null;
    let retryTimer = null;
    let retryDelay = 2000;
    let errorNoticed = false;
    let legacyNoticed = false;

    function clearRetry() {
      if (retryTimer !== null) clearTimer(retryTimer);
      retryTimer = null;
    }
    function cancelRequests() {
      for (const controller of controllers) controller.abort();
      controllers.clear();
    }
    async function request(url, init = {}) {
      const controller = new AbortController();
      controllers.add(controller);
      const timeout = setTimer(() => controller.abort(), options.timeoutMs ?? 15_000);
      timeout?.unref?.();
      try {
        const response = await fetcher(url, { credentials: 'same-origin', cache: 'no-store', ...init, signal: controller.signal });
        const body = await response.json();
        if (!response.ok) throw new CloudError(body.error || 'No se pudo conectar con el servicio.', response.status);
        return body;
      } catch (error) {
        if (error.name === 'AbortError') throw new CloudError('La conexión tardó demasiado. Tus datos se conservaron.', 408);
        throw error;
      } finally {
        clearTimer(timeout);
        controllers.delete(controller);
      }
    }
    function validRevision(value) { return Number.isSafeInteger(value) && value >= 0; }
    function validateSnapshot(state, expectedRevision) {
      if (!domain.isValidState(state)) throw new CloudError('Los datos no tienen un formato válido. Se conservaron sin modificar.', 400);
      if (domain.stateByteLength({ state, revision: expectedRevision }) > domain.MAX_STATE_BYTES) {
        throw new CloudError('El espacio supera el límite de 1 MB. Descarga un respaldo antes de continuar.', 413);
      }
    }
    async function write(state, expectedRevision) {
      validateSnapshot(state, expectedRevision);
      const result = await request('/api/state', {
        method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ state, revision: expectedRevision })
      });
      if (result.revision !== expectedRevision + 1) throw new CloudError('El servidor no confirmó el guardado. Conserva tu respaldo.', 502);
      return result;
    }
    function readLegacy() {
      try { return { data: storage.getItem(DATA_KEY), settings: storage.getItem(SETTINGS_KEY) }; }
      catch { throw new CloudError('No se pudo leer el respaldo local. No se borró información del dispositivo.'); }
    }
    function prepareLegacy(legacy) {
      const rawData = legacy.data === null ? domain.createEmptyState().data : JSON.parse(legacy.data);
      const rawSettings = legacy.settings === null ? {} : JSON.parse(legacy.settings);
      if (!rawData || !['clients', 'products', 'sales', 'payments'].every(key => Array.isArray(rawData[key]))) {
        throw new CloudError('El respaldo local necesita revisión. Descárgalo antes de continuar.', 400);
      }
      const state = prepareLocalState(rawData, rawSettings);
      // Normalization may add missing fields, but must never silently drop records.
      if (!['clients', 'products', 'sales', 'payments'].every(key => state.data[key].length === rawData[key].length)
        || rawData.sales.some((sale, index) => Array.isArray(sale?.items) && state.data.sales[index].items?.length !== sale.items.length)) {
        throw new CloudError('El respaldo local contiene registros que necesitan revisión. Se conserva intacto.', 400);
      }
      validateSnapshot(state, revision);
      return state;
    }
    function removeConfirmedLegacy(legacy) {
      // A second tab can modify localStorage while migration is in flight.
      // Remove only the exact source that the server has confirmed receiving.
      try {
        if (storage.getItem(DATA_KEY) !== legacy.data || storage.getItem(SETTINGS_KEY) !== legacy.settings) {
          onNotice('Hay datos locales más recientes. Se conservaron para que puedas descargarlos.', true);
          return;
        }
        if (legacy.data !== null) storage.removeItem(DATA_KEY);
        if (legacy.settings !== null) storage.removeItem(SETTINGS_KEY);
      } catch { onNotice('Los datos ya están en Neon, pero no se pudo retirar la copia local.', true); }
    }

    async function load() {
      const epoch = ++generation;
      const previousRevision = revision;
      const pendingBefore = pending;
      connected = false;
      clearRetry(); cancelRequests(); inFlight = null;
      onStatus('Cargando datos…', 'busy');
      const result = await request('/api/state');
      if (!validRevision(result.revision) || !domain.isValidState(result.state)) throw new CloudError('La respuesta del servidor no es válida. No se modificaron tus datos.');
      if (epoch !== generation) throw new CloudError('La carga fue cancelada.');
      let state = { ...result.state, settings: domain.normalizeSettings(result.state.settings) };
      revision = result.revision;
      const legacy = readLegacy();
      const hasLegacy = legacy.data !== null || legacy.settings !== null;
      if (hasLegacy) {
        let localState;
        try { localState = prepareLegacy(legacy); }
        catch (error) {
          if (result.isNew) throw new CloudError(`No se pudieron migrar los datos locales. ${error.message} Puedes descargar una copia desde esta pantalla.`, error.status);
        }
        if (result.isNew && localState) {
          const saved = await write(localState, revision);
          if (epoch !== generation) throw new CloudError('La migración fue cancelada. Tu copia local se conserva.');
          state = localState; revision = saved.revision;
          removeConfirmedLegacy(legacy);
          onNotice('Los datos de este dispositivo se migraron a Neon y su guardado fue confirmado.');
        } else if (localState && domain.statesEqual(localState, state)) {
          // Also handles a write that succeeded but whose response was lost.
          removeConfirmedLegacy(legacy);
        } else if (!legacyNoticed) {
          legacyNoticed = true;
          onNotice('Neon ya contiene datos distintos. Conservamos tu copia local; puedes descargarla desde Ajustes sin sobrescribir la nube.', true);
        }
      }
      if (epoch !== generation) throw new CloudError('La carga fue cancelada.');
      connected = true; blocked = null; errorNoticed = false; retryDelay = 2000;
      if (pendingBefore && !domain.statesEqual(pendingBefore, state)) {
        pending = pendingBefore;
        state = clone(pendingBefore);
        if (result.revision !== previousRevision) {
          blocked = 'conflict';
          onStatus('Conflicto · cambios sin guardar', 'error');
          onNotice('Otra sesión cambió los datos. Conservamos tus cambios en esta pantalla; descarga un respaldo antes de recargar.', true);
        } else {
          onStatus('Cambios pendientes de sincronización', 'busy');
        }
      } else {
        pending = null;
        onStatus('Todo actualizado', 'ok');
      }
      return clone(state);
    }

    function scheduleRetry() {
      if (retryTimer !== null || blocked || !connected) return;
      retryTimer = setTimer(() => { retryTimer = null; void flush(); }, retryDelay);
      retryTimer?.unref?.();
      retryDelay = Math.min(retryDelay * 2, 30_000);
    }
    async function drain(epoch) {
      while (pending && connected && !blocked && epoch === generation) {
        const snapshot = pending;
        try {
          const result = await write(snapshot, revision);
          if (epoch !== generation) return;
          revision = result.revision;
          if (pending === snapshot) pending = null;
          errorNoticed = false; retryDelay = 2000; clearRetry();
          onStatus(pending ? 'Cambios pendientes…' : 'Todo actualizado', pending ? 'busy' : 'ok');
        } catch (error) {
          if (epoch !== generation) return;
          if (error.status === 409) {
            blocked = 'conflict';
            onStatus('Conflicto · cambios sin guardar', 'error');
            onNotice('Los datos cambiaron en otra sesión. Descarga un respaldo de tus cambios antes de recargar; no sobrescribimos Neon.', true);
          } else if (error.status === 401) {
            blocked = 'unauthorized';
            onStatus('Sesión vencida · cambios sin guardar', 'error');
            onUnauthorized('Tu sesión venció. Inicia sesión de nuevo; tus cambios pendientes se conservan en esta pantalla.');
          } else if ([400, 413].includes(error.status)) {
            blocked = 'invalid';
            onStatus('Cambios sin guardar · revisa el respaldo', 'error');
            onNotice(error.message, true);
          } else {
            onStatus('Sin conexión · cambios pendientes', 'error');
            if (!errorNoticed) {
              onNotice('No se pudo sincronizar. Conservamos los cambios en esta pantalla y reintentaremos. No cierres ni recargues sin descargar un respaldo.', true);
              errorNoticed = true;
            }
            scheduleRetry();
          }
          return;
        }
      }
    }
    function flush() {
      if (!pending || !connected || blocked) return Promise.resolve();
      if (inFlight) return inFlight;
      const epoch = generation;
      inFlight = drain(epoch).finally(() => { if (epoch === generation) inFlight = null; });
      return inFlight;
    }
    function save(state) {
      if (!connected || blocked) {
        onNotice('No se aceptaron nuevos cambios. Resuelve la sesión o el conflicto y descarga un respaldo antes de recargar.', true);
        return false;
      }
      try { validateSnapshot(state, revision); }
      catch (error) { onNotice(error.message, true); return false; }
      pending = clone(state);
      onStatus('Sincronizando…', 'busy');
      void flush();
      return true;
    }
    function disconnect({ discardPending = false } = {}) {
      generation += 1; connected = false; blocked = null;
      clearRetry(); cancelRequests(); inFlight = null;
      if (discardPending) { pending = null; revision = 0; }
    }

    return { load, save, flush, disconnect, hasPending: () => Boolean(pending), hasConflict: () => blocked === 'conflict', getRevision: () => revision };
  }

  const cloud = { CloudError, createStore };
  if (typeof module !== 'undefined' && module.exports) module.exports = cloud;
  if (root) root.PosCloud = cloud;
})(typeof globalThis !== 'undefined' ? globalThis : this);
