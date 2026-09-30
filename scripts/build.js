const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const files = [
  'index.html', 'styles.css', 'mobile-operations.css', 'receipt-styles.css',
  'domain.js', 'cloud.js', 'app.js', 'manifest.json', 'sw.js',
  'assets/logo-blue.png', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/pwa-icon.svg'
];

// Only public assets are copied: no .env, API source, test fixtures or uploads.
fs.rmSync(output, { recursive: true, force: true });
for (const file of files) {
  const destination = path.join(output, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}
console.log(`Built ${files.length} public assets in dist/. Vercel deploys api/ separately.`);
