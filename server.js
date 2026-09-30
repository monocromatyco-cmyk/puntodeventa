require('dotenv').config({ path: '.env.local' });
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const apiHandler = require('./api/[...path].js');

const root = __dirname;
const port = Number(process.env.PORT) || 4173;
const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.pdf': 'application/pdf'
};

const server = http.createServer(async (req, res) => {
  if (req.url.startsWith('/api/')) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 1_000_000) { res.writeHead(413).end(); return; }
      chunks.push(chunk);
    }
    const body = Buffer.concat(chunks).toString('utf8');
    if (body) { try { req.body = JSON.parse(body); } catch { req.body = body; } }
    return apiHandler(req, res);
  }

  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const requested = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const filePath = path.resolve(root, requested);
  const relativePath = path.relative(root, filePath);
  const blockedSegment = relativePath.split(path.sep).some(segment => segment.startsWith('.') || ['api', 'node_modules', 'tests'].includes(segment));
  if (!relativePath || relativePath.startsWith('..') || path.isAbsolute(relativePath) || blockedSegment) {
    res.writeHead(404).end('Not found'); return;
  }
  fs.readFile(filePath, (error, contents) => {
    if (error) { res.writeHead(404).end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' });
    res.end(contents);
  });
});

server.listen(port, '0.0.0.0', () => console.log(`Punto de venta listo en http://0.0.0.0:${port}`));
