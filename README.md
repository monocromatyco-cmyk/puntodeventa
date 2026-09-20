# Mono Cromat & Co. — PWA

Versión frontend responsive inspirada en la PWA de referencia de Distrito 53X.

## Ejecutar localmente

```bash
python3 -m http.server 4173
```

Abre `http://localhost:4173`.

## Incluye

- Resumen operativo con indicadores, gráfica, cartera y actividad.
- Ventas: alta de pedidos, filtros, detalle y entrega.
- Clientes: alta, búsqueda, filtros, detalle y abonos.
- Inventario: alta/edición, filtros, alertas de mínimo y márgenes.
- Cobranza: cartera abierta, abonos e historial.
- Reportes: ventas, cartera, rentabilidad e indicadores operativos.
- Ajustes, exportación CSV e importación CSV en Clientes e Inventario.
- Persistencia local con `localStorage`.
- Logo oficial integrado en la navegación y en recibos.
- Vista previa, impresión y descarga HTML de recibos desde Ventas.
- Manifest y service worker para instalar como PWA.
- Diseño responsive con Archivo, escala de pesos tipográficos, iconografía SVG lineal y sin emojis.

La app está preparada como base funcional de frontend; para producción habría que conectar autenticación, API y base de datos.
