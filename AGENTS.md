<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## MegaOnline design system — lees dit voor je iets aan de site wijzigt

De pagina's in `src/routes/` zijn een 1-op-1 herbouw van de Claude
Design-handoff. Vormgeving en copy zijn door de klant goedgekeurd en definitief.

**Styling gaat níet via Tailwind.** Het design system staat in `src/styles/`
(`styles.css` is de bron van waarheid) en werkt met CSS custom properties plus
een `data-theme` per `<section>` — `dark`, `light` of `paper`. Alle tokens
(`--bg --fg --muted --card --line --accent …`) wisselen daarmee mee.

Daaruit volgt:

- Style met de bestaande klassen (`.section`, `.wrap`, `.shead`, `.btn`,
  `.case`, `.qa`, …) en tokens (`var(--fg)`), nooit met hardcoded hex of
  Tailwind-utilities op deze pagina's.
- Zet op elke nieuwe `<section>` een `data-theme`, anders erft hij de verkeerde
  kleuren.
- Tailwind en shadcn/ui blijven beschikbaar voor nieuwe, losstaande UI, maar
  meng ze niet in de bestaande pagina's.
- `<em>` binnen `.display` / `.h2` wordt accentkleur, niet cursief. Dat is een
  bewuste systeemregel — gebruik geen losse gekleurde spans.

**Copy niet herschrijven.** De Nederlandse teksten zijn definitief.

**Interactie zit in componenten**, niet in losse DOM-scripts:
`SiteHeader` (megamenu + mobiel menu), `LeadForm`, `Qa` (FAQ-accordeon),
`Reveal` (scroll-reveals), `Media` (beeld met placeholder-fallback), `Icon`
(gebundelde Lucide-iconen uit `src/components/icons.ts`).

Zet scroll-reveals nooit terug naar het rechtstreeks toevoegen van een klasse
op het DOM-element: dat gaf een hydration-mismatch waarbij React de klasse er
weer af gooide en secties onzichtbaar terugklapten.

**Formulieren** posten via `src/lib/submit-lead.ts` (server function) naar het
Google Apps Script van de klant. Veldnamen, `_subject` en `_pagina` moeten
exact blijven, anders breekt de bestaande Sheet. De endpoint is te overschrijven
met de environment variable `MO_LEAD_ENDPOINT`.

**Oude URL's.** `src/routes/$.tsx` stuurt elk oud `.html`-pad met een 301 door
naar de nieuwe slug. Laat die tabel (`src/lib/legacy-urls.ts`) intact.

**Concept-pagina's** onder `/concept/**` komen uit een eerdere ontwerprichting
en staan bewust los: eigen stylesheet, gescoped onder `.legacy-concept`, niet in
de navigatie en op `Disallow` in `robots.txt`.

Tests: `node scripts/mock-endpoint.mjs` en dan
`MO_LEAD_ENDPOINT=http://localhost:3101/mock` bij de dev-server, gevolgd door
`node scripts/smoke.mjs`. Draai de smoketest nooit zonder die mock — anders
belandt de testinzending in de échte Sheet van de klant.
