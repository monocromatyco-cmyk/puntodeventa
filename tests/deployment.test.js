const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');

function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory()
    ? filesIn(path.join(dir, entry.name)).map(file => `${entry.name}/${file}`) : [entry.name]);
}

test('production build publishes only the intended public PWA assets', () => {
  execFileSync(process.execPath, ['scripts/build.js'], { cwd: root });
  const output = path.join(root, 'dist');
  const files = filesIn(output);
  assert.equal(files.length, 13);
  for (const file of ['index.html', 'domain.js', 'cloud.js', 'app.js', 'mobile-operations.css', 'sw.js', 'assets/icon-192.png', 'assets/icon-512.png']) assert.ok(files.includes(file));
  assert.ok(files.every(file => !/^\.|^(api|tests|uploads|scripts)\/|^(server|package)/.test(file)));
  const html = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
  for (const [, resource] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (!resource.startsWith('http') && !resource.startsWith('data:')) assert.ok(fs.existsSync(path.join(output, resource)), resource);
  }
});

test('manifest references real installable-size PNG icons', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  assert.equal(manifest.scope, './');
  for (const size of [192, 512]) {
    const icon = manifest.icons.find(value => value.sizes === `${size}x${size}`);
    assert.ok(icon);
    const png = fs.readFileSync(path.join(root, icon.src));
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
  }
});
