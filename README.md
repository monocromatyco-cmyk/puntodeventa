# Mono Cromat & Co. — Punto de venta

PWA responsive para ventas, clientes, inventario, cobranza y reportes. Funciona en modo local o con datos compartidos mediante Vercel Functions y Neon Postgres.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4173`. Sin variables de entorno, se abre el modo de demostración y los cambios quedan en el `localStorage` de ese navegador. Para usar Neon desde local, copia `.env.example` a `.env.local` y configura sus variables. No subas `.env.local` al repositorio.

## Desplegar en Vercel + Neon

1. Crea un proyecto Postgres en [Neon](https://neon.tech/) y copia la cadena de conexión **pooled** (`DATABASE_URL`). La API crea la tabla `mono_cromat_state` al primer inicio de sesión.
2. Importa este repositorio en Vercel y configura estas variables en **Project Settings → Environment Variables** para Production. Si habilitas Preview, usa otra rama/base de Neon y otra contraseña/secreto; no conectes las previews a la base de producción.
   - `DATABASE_URL`: cadena de conexión de Neon; solo la usa la función del servidor.
   - `APP_PASSWORD`: contraseña única del espacio, de al menos 12 caracteres.
   - `SESSION_SECRET`: secreto aleatorio de al menos 32 bytes. Puedes generarlo con `node -e "console.log(require('node:crypto').randomBytes(48).toString('base64url'))"`.
3. Despliega con `npx vercel --prod` o desde el panel de Vercel.

La interfaz migra al primer inicio de sesión los datos previos guardados en ese navegador, si existen. Luego, Neon es la fuente de verdad y los datos de clientes/ventas no se guardan en `localStorage`. La API usa una sesión firmada en cookie `HttpOnly`, controla cambios concurrentes mediante revisión y el service worker nunca cachea respuestas privadas.

### Alcance de autenticación actual

La primera versión usa **una contraseña compartida para un solo espacio de trabajo**. No tiene usuarios individuales, roles ni varias sucursales. Para un equipo o datos de producción con requisitos de auditoría, conviene reemplazarla por autenticación individual (por ejemplo, un proveedor OIDC) y controles de acceso por usuario; el límite de intentos incluido en la función es de mejor esfuerzo y debe complementarse con protección de tráfico en Vercel.

## Pruebas

```bash
npm test
```

Las pruebas cubren agregados por fecha, comparación semanal y aplicación de abonos a la venta abierta más antigua.

## Funciones

- Resumen, reportes y avisos operativos calculados a partir de los movimientos.
- Ventas: alta, detalle, entrega, recibos, exportación y seguimiento de saldo.
- Clientes: alta, búsqueda, ordenamiento, detalle e importación CSV validada.
- Inventario: alta/edición, categorías, alertas de mínimo, márgenes e importación CSV validada.
- Cobranza: registro de abonos aplicados a las ventas abiertas, saldos e historial.
- Ajustes del negocio y preferencias persistentes.
- Respaldo JSON completo e importación con confirmación; exportaciones CSV protegen contra fórmulas.
- Navegación de pantalla completa desde el menú flotante inferior derecho, accesible por teclado.
- PWA instalable, presentación responsive e indicadores de sincronización.
