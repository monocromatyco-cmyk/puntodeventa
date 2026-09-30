const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const files = ['app.js', 'cloud.js', 'domain.js', 'sw.js', 'server.js', 'api/[...path].js', 'scripts/build.js'];
for (const file of files) execFileSync(process.execPath, ['--check', path.join(root, file)], { stdio: 'inherit' });
for (const file of ['manifest.json', 'vercel.json']) JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
console.log('JavaScript syntax and deployment/PWA JSON are valid.');
