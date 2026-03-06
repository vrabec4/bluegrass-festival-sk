#!/usr/bin/env node
const { execSync } = require('node:child_process');
const fs = require('node:fs');

function assertContains(file, search, errorMsg) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes(search)) {
    throw new Error(errorMsg);
  }
}

try {
  execSync('node --check assets/main.js', { stdio: 'inherit' });

  assertContains('index.html', 'lang="sk"', 'index.html musí mať lang="sk"');
  assertContains('index.html', 'Grass Device', 'Chýba potvrdená kapela Grass Device');
  assertContains('index.html', '5.9.2026', 'Chýba dátum 5.9.2026');
  assertContains('index.html', 'Bufet na dobrom mieste', 'Chýba miesto podujatia');

  console.log('Lint OK');
} catch (error) {
  console.error(`Lint failed: ${error.message}`);
  process.exit(1);
}
