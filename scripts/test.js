#!/usr/bin/env node
const fs = require('node:fs');

function read(path) {
  return fs.readFileSync(path, 'utf8');
}

function assertContains(content, expected, file) {
  if (!content.includes(expected)) {
    console.error(`Test failed: ${file} missing text -> ${expected}`);
    process.exit(1);
  }
}

const page = read('components/festival-page.tsx');
const data = read('data/festivals.ts');

assertContains(page, 'Mapa parkovania aut', 'components/festival-page.tsx');
assertContains(page, 'Mala mapa k Bufetu na dobrom mieste', 'components/festival-page.tsx');
assertContains(data, 'Bluegrass na dobrom mieste', 'data/festivals.ts');
assertContains(data, 'Grass Device', 'data/festivals.ts');
assertContains(data, '5.9.2026', 'data/festivals.ts');
assertContains(data, 'Vstupne dobrovolne', 'data/festivals.ts');

console.log('Test OK');
