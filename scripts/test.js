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
const hero = read('components/hero-slider.tsx');
const sponsors = read('components/sponsors-slider.tsx');
const header = read('components/site-header.tsx');
const featured = read('components/featured-artists-slider.tsx');
const i18nMessages = read('lib/i18n/messages.ts');

assertContains(page, "t('festival.liveMapTitle')", 'components/festival-page.tsx');
assertContains(page, "t('festival.openDrivingMapLink')", 'components/festival-page.tsx');
assertContains(hero, 'banner-slider-item', 'components/hero-slider.tsx');
assertContains(hero, 'banner-slider-bottom-strip', 'components/hero-slider.tsx');
assertContains(featured, "t('featured.sliderLabel')", 'components/featured-artists-slider.tsx');
assertContains(sponsors, 'multi-sections-blocks-inner-item-sponsor-logos', 'components/sponsors-slider.tsx');
assertContains(header, 'slide-nav-main', 'components/site-header.tsx');
assertContains(i18nMessages, "walkGuideTitle: 'Ako sa dostať pešo na festival'", 'lib/i18n/messages.ts');
assertContains(data, 'Bluegrass na dobrom mieste', 'data/festivals.ts');
assertContains(data, 'Grass Device', 'data/festivals.ts');
assertContains(data, '5.9.2026', 'data/festivals.ts');
assertContains(data, 'Vstupné dobrovoľné', 'data/festivals.ts');

console.log('Test OK');
