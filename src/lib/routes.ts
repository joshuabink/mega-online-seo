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

/**
 * Oude concept-pagina's uit de vorige ontwerprichting. Die pagina's zijn
 * verwijderd; deze tabel stuurt de oude URL's door naar de dichtstbijzijnde
 * bestaande pagina zodat er geen 404 ontstaat.
 */
export const LEGACY_ROUTES: Record<string, string> = {
  'branches/index.html': '/',
  'branches/aannemers.html': '/branches/offerteaanvragen',
  'branches/installateurs.html': '/branches/offerteaanvragen',
  'branches/schoonmaakbedrijven.html': '/branches/offerteaanvragen',
  'branches/zonnepanelen.html': '/branches/offerteaanvragen',
  'branches/agencies.html': '/branches/dienstverleners',
  'branches/lokale-diensten.html': '/branches/dienstverleners',
  'branches/detailing-wrap.html': '/branches/dienstverleners',
  'branches/sportscholen.html': '/branches/reserveringen',
  'branches/bootverhuur.html': '/branches/verhuurbedrijven',

  'diensten/websites.html': '/diensten/conversie-website',
  'diensten/huisstijl.html': '/diensten/conversie-website',
  'diensten/content.html': '/diensten/conversie-website',
  'diensten/systeemkoppelingen.html': '/diensten/integraties',
  'diensten/automatiseringen.html': '/diensten/integraties',
  'diensten/webshops.html': '/',
  'diensten/webapps.html': '/',
  'diensten/mobiele-apps.html': '/',
  'diensten/bedrijfssoftware.html': '/',
  'diensten/ai-chatbot.html': '/',
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
