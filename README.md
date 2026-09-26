# Mono Cromat & Co. — PWA de punto de venta

Frontend responsive instalable para ventas, inventario, clientes y cobranza.

## Ejecutar localmente

Sirve los archivos por HTTP (el service worker no funciona abriendo `index.html` como `file://`):

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Abre `http://localhost:4173`. Para instalarla, publícala en un origen HTTPS y usa la opción **Instalar aplicación** del navegador.

## Mejoras incluidas

- En móvil, el botón **Menú** queda fijo en la esquina inferior derecha. La navegación se despliega a pantalla completa, respeta las áreas seguras del dispositivo y se puede cerrar con la X o con Escape.
- Ventas con varios productos, cantidades, cálculo del total, verificación de existencia y descuento automático del inventario.
- Cobros con fecha actual, registro del método y referencia, aplicación del abono a los pedidos vencidos y después a los más antiguos, y actualización de sus saldos.
- Ventas de contado guardadas también como movimiento de cobro; el crédito requiere un cliente registrado y una fecha de vencimiento por venta. Las cuentas se marcan vencidas automáticamente al día siguiente de esa fecha; la fecha se puede corregir desde el detalle de una venta abierta y los abonos priorizan esos saldos.
- Clientes editables con notas e historial breve; filtros, orden y categoría de inventario funcionales.
- Indicadores, gráfica, cartera y reportes calculados a partir de los registros, sin cifras ilustrativas fijas.
- Respaldo/restauración JSON de clientes, productos, ventas, abonos y ajustes; exportación CSV de listas, ventas y cobranza. La importación valida filas y omite duplicados o datos no válidos.
- Recibos con datos configurables del negocio, lista completa de artículos e importe, descarga HTML autocontenida e impresión. Se indica expresamente que el comprobante no sustituye un CFDI.
- Formularios y diálogos con controles básicos de foco/teclado, mensajes accesibles, fechas locales, validaciones y manejo de errores de almacenamiento.
- Manifest con iconos de 192 y 512 px y service worker con caché del shell, modo sin conexión y limpieza acotada de versiones propias.

## Importante antes de operar en producción

Esta entrega sigue siendo una **PWA frontend de un solo dispositivo**. Los registros se guardan en `localStorage` del navegador; no hay servidor, base de datos central, inicio de sesión, permisos por empleado, sincronización entre equipos, bitácora/auditoría ni control de concurrencia. Borrar los datos del navegador, perder el dispositivo o trabajar desde otro navegador puede dejar la operación sin esos registros. Descarga respaldos JSON frecuentes y guárdalos fuera del dispositivo.

Antes de usarla como fuente oficial de una operación real, hace falta conectar una API y base de datos con autenticación, roles, respaldos automáticos, auditoría y transacciones seguras de inventario/cobranza. También se deben confirmar las reglas del negocio (impuestos, devoluciones, precios, crédito y vencimientos) y conectar facturación CFDI por separado si se requiere. Los datos incluidos inicialmente son de demostración: reemplázalos y valida el flujo completo con el equipo antes de vender.
