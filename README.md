# Bluegrass Festival SK (placeholder project)

Jednoduchý one-page web pre bluegrass festival na Slovensku.

Aktuálne potvrdené údaje:
- Dátum: **5.9.2026**
- Miesto: **Bufet na dobrom mieste**
- Vstupné: **dobrovoľné**
- Potvrdená kapela: **Grass Device**

## Rýchly štart

```bash
npm ci
npm run lint
npm test
npm run build
npm run dev
```

## Skripty
- `npm run dev`: lokálny server na `http://localhost:5173`
- `npm run lint`: kontrola JS syntaxe + obsahových povinných textov
- `npm test`: základná kontrola placeholder obsahu
- `npm run build`: vytvorí produkčný priečinok `dist/`

## Dokumentácia
- Vývojové fázy: `docs/development-phases.md`
- Technológie: `docs/technologies.md`

## GitHub Actions
- `CI` workflow: lint/test/build na push a PR
- `Deploy to GitHub Pages`: automatický deploy `dist/` z `main`
