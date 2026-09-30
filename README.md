# Mono Cromat & Co. — Punto de venta

PWA responsive para ventas, clientes, inventario, cobranza y reportes. Esta versión consolida las mejoras de los PR **#1 (POS/PWA)** y **#2 (Vercel/Neon)**, conservando ventas multítem y vencimientos junto con la persistencia compartida.

## Desarrollo local

Requiere Node.js 20 o superior (validado con Node.js 22).

```bash
npm ci
npm run dev
```

Abre `http://localhost:4173`. El servidor escucha en `0.0.0.0` y el frontend usa URLs relativas para la API, por lo que también funciona en previews remotas.

Sin variables de entorno, el servidor de desarrollo habilita **modo local de demostración**: los datos se guardan en el `localStorage` de ese navegador, no se sincronizan y los registros iniciales son ficticios. Descarga respaldos antes de borrar los datos del navegador. La PWA puede volver a abrir ese modo local sin conexión después de una primera carga online.

Para probar Neon localmente, copia `.env.example` a `.env.local` y configura sus valores. No subas `.env.local` ni compartas sus secretos en mensajes o capturas. En Vercel/producción, una configuración incompleta **bloquea el acceso**; nunca abre silenciosamente el demo.

## Funciones consolidadas

- Ventas con varios productos, cantidades, total redondeado, validación conjunta de existencias y descuento de inventario.
- Crédito con cliente registrado y fecha de vencimiento obligatoria por venta; vencimiento automático al día siguiente y edición desde el detalle.
- Abonos aplicados primero a créditos vencidos y después a los más antiguos, con historial de asignaciones y actualización de saldos.
- Ventas de contado registradas como cobros vinculados, sin contarlas dos veces en los indicadores del día.
- Clientes editables con contacto, notas e historial; búsquedas, filtros, ordenamiento y categorías de inventario.
- Resumen, gráficas de 7/30 días, reportes, cartera y alertas calculados con movimientos reales.
- Preferencias guardadas en el dispositivo o en Neon, según el modo; compatibilidad con las preferencias antiguas de cobranza.
- Avisos operativos con enlaces al inventario, la cobranza y las entregas.
- Respaldo JSON completo y restauración validada, compatible con los formatos de ambos PR; exportación CSV de listas, ventas, cobranza y reportes. Los CSV protegen contra fórmulas y validan filas/duplicados al importar.
- Recibos con todos los artículos y datos configurables del negocio, impresión y descarga HTML autocontenida. No sustituyen un CFDI.
- Menú flotante inferior derecho, navegación a pantalla completa, áreas seguras y controles de foco/teclado en móvil y escritorio.
- PWA con iconos de 192/512 px y shell offline. El service worker no intercepta ni cachea autenticación, clientes, pagos u otras respuestas de API; usa una versión de caché distinta a las de los PR anteriores y red primero para actualizar los recursos públicos.

## Vercel + Neon

`vercel.json` define instalación con `npm ci`, build con `npm run build` y salida estática en `dist/`. El build copia **solo** los recursos públicos; no publica `.env`, código del servidor, pruebas, capturas de referencia ni archivos de `uploads/`. Vercel despliega `api/[...path].js` como función Node separada.

1. Crea una base Postgres en Neon y copia su cadena de conexión **pooled**.
2. En **Vercel → Project Settings → Environment Variables**, configura para **Production**:
   - `DATABASE_URL`: conexión de Neon, usada solo en el servidor.
   - `APP_PASSWORD`: contraseña única del espacio, entre 12 y 256 caracteres.
   - `SESSION_SECRET`: secreto aleatorio de al menos 32 bytes. Genera uno localmente con `node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"` y guárdalo directamente en Vercel.
3. Para **Preview**, usa una rama/base distinta de Neon y otra contraseña/secreto. **Nunca conectes las previews a la base de producción.** Mantén la protección de deployments de Vercel.
4. Despliega la Preview del PR y valida la lista siguiente antes de fusionar. La producción se actualizará cuando este PR llegue a `main`, si esa es la rama de producción configurada en Vercel.

### Checklist antes de fusionar a `main`

- [ ] Configurar las tres variables en Production y en una Preview aislada; redesplegar si se cambiaron después del build.
- [ ] Exportar un respaldo JSON desde el navegador/dominio donde hoy están los datos reales. El `localStorage` no se comparte entre el dominio de producción y las previews.
- [ ] En la Preview aislada, probar inicio/cierre de sesión, lectura y guardado **contra Neon real**, recarga y lectura desde un segundo dispositivo. Las pruebas automáticas de persistencia usan una API/SQL simulada, no la base real.
- [ ] Revisar venta multítem, stock, crédito/vencimiento, abono, restauración de respaldo e impresión de recibo con datos de prueba.
- [ ] Confirmar checks de CI y deployment Vercel en verde. Fusionar **solo el PR consolidado**; no fusionar después los PR #1/#2 antiguos.
- [ ] Hacer el primer inicio en producción desde el navegador con los datos que se desean migrar y conservar el respaldo descargado fuera del dispositivo.

### Migración segura de datos anteriores

La tabla `mono_cromat_state` se crea al primer acceso autenticado. **Consultar un espacio nuevo no crea una fila ni consume la oportunidad de migrar.** El primer guardado crea el estado de manera atómica con revisión 1. También se recuperan las filas vacías de revisión 0 que pudiera haber creado la versión del PR #2.

Si el espacio está nuevo y hay datos locales válidos, se migran automáticamente. La copia local se retira **solo después de que el servidor confirma el guardado**, y solo si otra pestaña no la modificó mientras se migraba. Una falla temporal permite reintentar sin perder esos registros. Si la respuesta se pierde después de un guardado exitoso, la siguiente lectura puede confirmar el mismo estado sin duplicar la migración.

Si Neon ya contiene información distinta, la app **no reemplaza la nube ni borra la copia local**: permite descargarla en Ajustes. Los registros locales inválidos se conservan y pueden descargarse desde la pantalla de acceso para revisarlos. Restaurar un respaldo sobre un espacio existente requiere confirmación explícita y reemplaza el estado completo; no mezcla automáticamente las cuentas de varios dispositivos.

### Sincronización y límites operativos

- Sesión firmada en cookie `HttpOnly`, `Secure` en producción y `SameSite=Lax`; escritura limitada al mismo origen.
- Guardados serializados y control de revisión en Postgres: un conflicto devuelve `409`, conserva los cambios pendientes en la pantalla y no sobrescribe la otra sesión.
- En modo nube no se almacenan nuevos datos de clientes/ventas en `localStorage`. Si falla la conexión, los cambios pendientes viven **solo en memoria**; se reintenta y se advierte antes de cerrar/recargar. Descarga un respaldo si no aparece **Todo actualizado**. Cerrar forzosamente la aplicación o perder el dispositivo puede perder cambios aún no confirmados.
- Límite de solicitud/estado: **1 MB**. Archivos de respaldo: hasta **10 MB**, siempre que el estado a restaurar quepa en 1 MB. Esta primera versión guarda un único documento JSON del espacio, no un modelo transaccional multi-sucursal.
- La autenticación es de **contraseña compartida, un solo espacio**, sin usuarios individuales, roles ni bitácora por empleado. El límite de intentos es por instancia y de mejor esfuerzo; configura protección de tráfico en Vercel y respaldos/recuperación de Neon antes del uso operativo.
- No incluye impuestos, devoluciones ni facturación CFDI. Para necesidades de auditoría o varios operadores concurrentes, se requieren autenticación individual y un modelo de datos/transacciones más granular.

## Pruebas y build

```bash
npm run check              # Sintaxis JS y JSON de Vercel/PWA
npm test                   # Dominio, API, migración, concurrencia, UI y service worker
npx playwright install --with-deps chromium
npm run test:e2e            # Chromium real: escritorio y móvil
npm run build
npm audit --omit=dev
```

Las pruebas de navegador cubren las siete vistas, menú/foco, ventas multítem, cobros sin duplicación, vencimientos/abonos, preferencias, recibos autocontenidos, ambos formatos de respaldo, acceso, fallo/reintento de migración, preservación de una copia local diferente y shell offline sin respuestas privadas en caché.

GitHub Actions ejecuta sintaxis, pruebas unitarias/integración, build, auditoría de dependencias de producción y pruebas de navegador en cada PR. Los secretos reales no son necesarios para esas pruebas.
