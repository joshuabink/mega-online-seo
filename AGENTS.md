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
(eigen iconenset uit `src/components/marks.tsx` — Lucide zit bewust niet meer in
de bundel; voeg een nieuw icoon daar toe, ga niet terug naar `lucide-react`).

Zet scroll-reveals nooit terug naar het rechtstreeks toevoegen van een klasse
op het DOM-element: dat gaf een hydration-mismatch waarbij React de klasse er
weer af gooide en secties onzichtbaar terugklapten.

**Formulieren** posten via `src/lib/submit-lead.ts` (server function) naar het
Google Apps Script van de klant. Veldnamen, `_subject` en `_pagina` moeten
exact blijven, anders breekt de bestaande Sheet. De endpoint is te overschrijven
met de environment variable `MO_LEAD_ENDPOINT`.

Daarnaast gaat elke lead als mail naar FormSubmit (`MO_LEAD_MAIL_ENDPOINT`).
Twee dingen daaraan zijn niet vanzelfsprekend en hebben de mail eerder
maandenlang stil laten falen:

- FormSubmit weigert elke POST **zonder `Referer`-header**. Wij posten vanaf de
  server, dus die header wordt handmatig meegegeven (`MAIL_REFERER`). Haal hem
  er niet uit, en maak hem niet afhankelijk van de pagina van de bezoeker:
  FormSubmit activeert per domein, dus een preview- of staging-URL geldt als
  nieuw, niet-geactiveerd formulier.
- Bij een weigering antwoordt FormSubmit met **HTTP 200** en de fout in de
  pagina zelf. Alleen op de statuscode controleren betekent dat een mislukte
  mail als geslaagd telt. Daarom kijkt `formSubmitWeigering()` naar de body.
  Laat die check staan.

Staat `MO_RESEND_API_KEY` ingesteld, dan gaat de mail via Resend en wordt
FormSubmit helemaal overgeslagen — dat is de bedoelde eindsituatie. Mail vanaf
het eigen domein, dus SPF/DKIM kloppen, en fouten komen als leesbare JSON terug
in plaats van als een HTML-pagina met status 200. Verder in te stellen met
`MO_MAIL_FROM`, `MO_MAIL_TO` en `MO_RESEND_ENDPOINT`; die laatste bestaat zodat
de smoketest tegen een mock kan draaien in plaats van tegen de echte provider.
Verstuur bij het testen nooit via de echte provider — zet `MO_RESEND_ENDPOINT`
naar een lokale mock, net zoals `MO_LEAD_ENDPOINT` dat voor de Sheet doet.

**Oude URL's.** `src/routes/$.tsx` stuurt elk oud `.html`-pad met een 301 door
naar de nieuwe slug. Laat die tabel (`src/lib/legacy-urls.ts`) intact.

**Concept-pagina's** onder `/concept/**` komen uit een eerdere ontwerprichting
en staan bewust los: eigen stylesheet, gescoped onder `.legacy-concept`, niet in
de navigatie en op `Disallow` in `robots.txt`.

Tests: `node scripts/mock-endpoint.mjs` en dan
`MO_LEAD_ENDPOINT=http://localhost:3101/mock` bij de dev-server, gevolgd door
`node scripts/smoke.mjs`. Draai de smoketest nooit zonder die mock — anders
belandt de testinzending in de échte Sheet van de klant.
