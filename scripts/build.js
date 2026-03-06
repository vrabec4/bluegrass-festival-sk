#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const dist = path.join(root, 'dist');

function removeIfExists(targetPath) {
  if (fs.existsSync(targetPath)) {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

removeIfExists(dist);
fs.mkdirSync(dist, { recursive: true });
fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });

fs.copyFileSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));
fs.copyFileSync(path.join(root, 'assets', 'styles.css'), path.join(dist, 'assets', 'styles.css'));
fs.copyFileSync(path.join(root, 'assets', 'main.js'), path.join(dist, 'assets', 'main.js'));

console.log('Build OK: dist/');
