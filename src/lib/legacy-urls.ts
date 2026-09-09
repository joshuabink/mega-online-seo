import { PAGE_ROUTES, LEGACY_ROUTES } from './routes'

/**
 * Oude prototype-paden → nieuwe routes.
 *
 * De statische site draaide op bestandsnamen met spaties
 * (`/Conversie Website.html`). Die URL's staan in Google, in offertes en in
 * eerder gedeelde links, dus ze moeten blijven werken. Deze tabel voedt zowel
 * de in-app redirect (`src/routes/$.tsx`) als de redirects in `vercel.json`.
 */
export const REDIRECTS: Record<string, string> = (() => {
  const map: Record<string, string> = {}

  for (const [file, route] of Object.entries(PAGE_ROUTES)) {
    map['/' + file] = route
  }
  for (const [file, route] of Object.entries(LEGACY_ROUTES)) {
    map['/' + file] = route
  }

  // De oude Vercel-deploy serveerde de homepage ook op /index.html.
  map['/index.html'] = '/'

  // De vacatures stonden eerder op /vacatures; ze leven nu onder /werken-bij.
  map['/vacatures'] = '/werken-bij'
  // Links de oude slug, rechts de huidige: twee rollen zijn onderweg hernoemd.
  // Wijzig de rechterkant alleen samen met `src/lib/vacatures.ts`.
  const VACATURE_SLUGS: Record<string, string> = {
    'seo-stage': 'seo-stage',
    'webdesign-stage': 'webdesign-stage',
    'webdevelopment-stage': 'webdevelopment-stage',
    'ai-ontwikkeling-stage': 'ai-ontwikkeling',
    'seo-specialist': 'seo-specialist',
    'sea-stage': 'sea-stage',
    'web-consultant': 'web-consultant',
    'web-app-architect': 'app-web-architect',
  }
  for (const [oud, nieuw] of Object.entries(VACATURE_SLUGS)) {
    map[`/vacatures/${oud}`] = `/werken-bij/${nieuw}`
  }

  return map
})()

/**
 * Zoekt de nieuwe route bij een oud pad. Ongevoelig voor URL-encoding
 * (`%20` vs spatie) en een eventuele trailing slash.
 */
export function findRedirect(pathname: string): string | null {
  let p = pathname
  try {
    p = decodeURIComponent(pathname)
  } catch {
    // Ongeldige encoding: val terug op de ruwe waarde.
  }
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1)

  if (REDIRECTS[p]) return REDIRECTS[p]

  // Case-insensitieve fallback — oude links zijn niet altijd exact overgetypt.
  const lower = p.toLowerCase()
  for (const [from, to] of Object.entries(REDIRECTS)) {
    if (from.toLowerCase() === lower) return to
  }

  return null
}
