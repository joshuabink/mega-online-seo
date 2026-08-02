/**
 * Bron-bestandsnaam (uit de Claude Design handoff) → definitieve route.
 *
 * De prototypes linkten naar elkaar via bestandsnamen met spaties
 * ("Conversie Website.html"). Die zijn hier vervangen door schone slugs;
 * `vercel.json` zet 301-redirects vanaf elk oud pad zodat bestaande links
 * en indexering blijven werken.
 */
export const PAGE_ROUTES: Record<string, string> = {
  'MegaOnline Homepage.html': '/',
  'index.html': '/',

  // Diensten
  'Conversie Website.html': '/diensten/conversie-website',
  'Website Redesign.html': '/diensten/website-redesign',
  'Website Optimalisatie.html': '/diensten/website-optimalisatie',
  'Starter Website.html': '/diensten/starter-website',
  'Werken-bij Websites.html': '/diensten/werken-bij-websites',
  'SEO.html': '/diensten/seo',
  'Integraties.html': '/diensten/integraties',
  'Groei Partnership.html': '/diensten/groei-partnership',

  // Branches
  'Branche - Dienstverleners.html': '/branches/dienstverleners',
  'Branche - Bedrijven met offerteaanvragen.html': '/branches/offerteaanvragen',
  'Branche - Bedrijven met reserveringen.html': '/branches/reserveringen',
  'Branche - Verhuurbedrijven.html': '/branches/verhuurbedrijven',
  'Branche - Activiteitenbedrijven.html': '/branches/activiteitenbedrijven',
  'Branche - Non-profits.html': '/branches/non-profits',

  // Bedrijf & conversie
  'Over MegaOnline.html': '/over-megaonline',
  'Contact.html': '/contact',
  'Gratis Websitescan.html': '/gratis-websitescan',
  'Veelgestelde Vragen.html': '/veelgestelde-vragen',

  // Juridisch
  'Algemene Voorwaarden.html': '/algemene-voorwaarden',
  'Privacyverklaring.html': '/privacyverklaring',
}

/** Legacy concept-pagina's uit de oude Caveat/DM Sans-richting. */
export const LEGACY_ROUTES: Record<string, string> = {
  'branches/index.html': '/concept/branches',
  'branches/aannemers.html': '/concept/branches/aannemers',
  'branches/agencies.html': '/concept/branches/agencies',
  'branches/bootverhuur.html': '/concept/branches/bootverhuur',
  'branches/detailing-wrap.html': '/concept/branches/detailing-wrap',
  'branches/installateurs.html': '/concept/branches/installateurs',
  'branches/lokale-diensten.html': '/concept/branches/lokale-diensten',
  'branches/schoonmaakbedrijven.html': '/concept/branches/schoonmaakbedrijven',
  'branches/sportscholen.html': '/concept/branches/sportscholen',
  'branches/zonnepanelen.html': '/concept/branches/zonnepanelen',

  'diensten/websites.html': '/concept/diensten/websites',
  'diensten/webshops.html': '/concept/diensten/webshops',
  'diensten/webapps.html': '/concept/diensten/webapps',
  'diensten/mobiele-apps.html': '/concept/diensten/mobiele-apps',
  'diensten/huisstijl.html': '/concept/diensten/huisstijl',
  'diensten/systeemkoppelingen.html': '/concept/diensten/systeemkoppelingen',
  'diensten/automatiseringen.html': '/concept/diensten/automatiseringen',
  'diensten/ai-chatbot.html': '/concept/diensten/ai-chatbot',
  'diensten/bedrijfssoftware.html': '/concept/diensten/bedrijfssoftware',
  'diensten/content.html': '/concept/diensten/content',
}

/**
 * Zet een href uit een prototype om naar de definitieve route.
 * Behoudt hash-fragmenten; laat externe links, mailto:, tel: en wa.me ongemoeid.
 */
export function resolveHref(href: string, opts: { legacy?: boolean } = {}): string {
  if (!href) return href
  if (/^(https?:|mailto:|tel:|wa\.me|\/\/)/i.test(href)) return href

  // Puur een fragment (#werk) blijft zoals het is.
  if (href.startsWith('#')) return href

  const [rawPath, hash] = href.split('#')
  const path = decodeURIComponent(rawPath.replace(/^\.\//, ''))
  const table = opts.legacy ? { ...PAGE_ROUTES, ...LEGACY_ROUTES } : PAGE_ROUTES

  // Directe treffer, of een pad met map-prefix ("../Contact.html").
  const key = Object.keys(table).find(
    (k) => path === k || path.endsWith('/' + k),
  )
  if (key) return table[key] + (hash ? '#' + hash : '')

  return href
}
