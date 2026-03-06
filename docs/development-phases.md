# Fazy vyvoja

## Faza 1: Data rocnikov
- Potvrdzovat line-up pre aktualny rocnik.
- Pridavat dalsie rocniky do `data/festivals.ts`.
- Udrziavat konzistentnu strukturu: kapely, harmonogram, FAQ, mapy.

## Faza 2: Obsah a UX
- Vyplnit placeholder texty realnym obsahom.
- Doplnenie map (parkovanie + mini mapa k Bufetu na dobrom mieste).
- Finalizovat mobilny a desktop rendering.

## Faza 3: Kvalita
- Type-check (`npm run lint`) a obsahovy test (`npm test`).
- Kontrola semantiky a pristupnosti.
- Kontrola ci je vsetko v slovenskom jazyku.

## Faza 4: Release
- Merge do `main`.
- Automaticky CI build.
- Automaticky deploy na GitHub Pages.
