require('dotenv').config({ path: '.env.local', quiet: true });
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const apiHandler = require('./api/[...path].js');

const root = __dirname;
const port = Number(process.env.PORT) || 4173;
const publicFiles = new Set([
  'index.html', 'styles.css', 'mobile-operations.css', 'receipt-styles.css', 'domain.js', 'cloud.js',
  'app.js', 'manifest.json', 'sw.js', 'assets/logo-blue.png', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/pwa-icon.svg'
]);
const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml'
};

const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/api' || pathname.startsWith('/api/')) {
      const chunks = [];
      let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > 1_000_000) {
          res.writeHead(413, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }).end(JSON.stringify({ error: 'La solicitud supera el límite de 1 MB.' }));
          return;
        }
        chunks.push(chunk);
      }
      const body = Buffer.concat(chunks).toString('utf8');
      if (body) { try { req.body = JSON.parse(body); } catch { req.body = body; } }
      await apiHandler(req, res);
      return;
    }
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }).end(); return; }
    const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    if (!publicFiles.has(requested)) { res.writeHead(404).end('Not found'); return; }
    const contents = await fs.promises.readFile(path.join(root, requested));
    res.writeHead(200, {
      'Content-Type': contentTypes[path.extname(requested)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': requested === 'sw.js' ? 'no-cache, no-store, must-revalidate' : 'no-cache'
    });
    res.end(req.method === 'HEAD' ? undefined : contents);
  } catch {
    if (!res.headersSent) res.writeHead(400, { 'Cache-Control': 'no-store' });
    res.end('Invalid request');
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Punto de venta listo en http://0.0.0.0:${port}`));
