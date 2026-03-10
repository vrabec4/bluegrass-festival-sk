# Bluegrass na dobrom mieste (Next.js + TypeScript)

Website for an annual bluegrass festival in Slovakia.

Currently confirmed details:
- Name: **Bluegrass na dobrom mieste**
- Date: **5.9.2026**
- Venue: **Bufet na dobrom mieste**
- Entry: **voluntary**
- Confirmed band: **Grass Device**

## Tech stack
- Next.js (App Router)
- TypeScript
- React
- GitHub Actions (CI + Pages deploy)

## Local development

```bash
npm install
npm run dev
```

The app runs at `http://127.0.0.1:5173`.

## Scripts
- `npm run dev`: local development
- `npm run lint`: TypeScript type-check
- `npm test`: key content checks
- `npm run build`: static export to `out/`
- `npm run start`: production run

## Route structure
- `/`: current edition
- `/2026`: specific edition
- `/archiv`: editions archive

## Documentation
- Development phases: `docs/development-phases.md`
- Technologies: `docs/technologies.md`

## Netlify deployment

This project is ready for static deployment on Netlify.

1. In Netlify, click **Add new site** > **Import an existing project**.
2. Connect the GitHub repository `vrabec4/bluegrass-festival-sk`.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `22` (also set in `netlify.toml`)
4. Click **Deploy site**.

After the repo is connected, Netlify will auto-deploy on every push to `main`.
