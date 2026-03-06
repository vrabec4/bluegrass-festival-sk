# Bluegrass na dobrom mieste (Next.js + TypeScript)

Web pre kazdorocny bluegrass festival na Slovensku.

Aktualne potvrdene udaje:
- Nazov: **Bluegrass na dobrom mieste**
- Datum: **5.9.2026**
- Miesto: **Bufet na dobrom mieste**
- Vstupne: **dobrovolne**
- Potvrdena kapela: **Grass Device**

## Technologicky stack
- Next.js (App Router)
- TypeScript
- React
- GitHub Actions (CI + Pages deploy)

## Lokalne spustenie

```bash
npm install
npm run dev
```

Aplikacia bezi na `http://127.0.0.1:5173`.

## Skripty
- `npm run dev`: lokalny vyvoj
- `npm run lint`: TypeScript type-check
- `npm test`: kontrola klucoveho obsahu
- `npm run build`: staticky export do `out/`
- `npm run start`: produkcne spustenie

## Struktura rout
- `/`: aktualny rocnik
- `/2026`: konkretna edicia
- `/archiv`: prehlad rocnikov

## Dokumentacia
- Vyvojove fazy: `docs/development-phases.md`
- Technologie: `docs/technologies.md`
