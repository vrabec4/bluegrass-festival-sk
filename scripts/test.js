#!/usr/bin/env node
const fs = require('node:fs');

function fail(message) {
  console.error(`Test failed: ${message}`);
  process.exit(1);
}

const html = fs.readFileSync('index.html', 'utf8');

const requiredTexts = [
  'Vstupné dobrovoľné',
  'Mapa parkovania áut',
  'Malá mapa k Bufetu na dobrom mieste',
  'Kapela #2',
  'Kapela #3',
  'Kapela #4',
  'Kapela #5',
];

for (const text of requiredTexts) {
  if (!html.includes(text)) {
    fail(`Chýba povinný text: ${text}`);
  }
}

console.log('Test OK');
