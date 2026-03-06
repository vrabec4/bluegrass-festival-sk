# Technologie

## Frontend
- Next.js (App Router): framework pre viacrocny obsah festivalu.
- TypeScript: typova bezpecnost pri data modeloch a komponentoch.
- React: komponentovy UI pristup.

## Obsahovy model
- `data/festivals.ts`: centralny zdroj pre jednotlive rocniky (lineup, program, FAQ, metadata).
- `app/[year]/page.tsx`: routa pre rocniky.
- `app/archiv/page.tsx`: archiv rocnikov.

## CI/CD
- GitHub Actions `ci.yml`: `npm ci`, `npm run lint`, `npm test`, `npm run build`.
- GitHub Actions `pages.yml`: build a deploy statickeho exportu z `out/` na GitHub Pages.

## Nasadenie
- Staticky export (`output: export`) vhodny pre GitHub Pages.
- Automaticke nastavenie `basePath` a `assetPrefix` pocas build-u v GitHub Actions.
