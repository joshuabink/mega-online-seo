/**
 * Sitemap-dekking voor de smoketest. Puur, zodat de controle dit kan
 * nagaan zonder een pagina te openen.
 *
 * De ondergrens is het huidige aantal in public/sitemap.xml. Verdwijnt
 * een url uit het bestand én uit de routes, dan zakt het aantal eronder.
 * Een route die blijft bestaan maar uit de sitemap verdwijnt, valt door
 * de andere richting. Twee paden horen er bewust niet in.
 */
export const SITEMAP_ONDERGRENS = 44

export const SITEMAP_UITZONDERINGEN = ['/gratis-websiteconcept', '/megasmart']

export function sitemapDekking(routes, paden) {
  const uitzondering = new Set(SITEMAP_UITZONDERINGEN)
  const aanwezig = new Set(paden)
  const ontbreekt = [...routes].filter((pad) => !uitzondering.has(pad) && !aanwezig.has(pad)).sort()
  return {
    aantal: paden.length,
    ondergrens: paden.length >= SITEMAP_ONDERGRENS,
    ontbreekt,
  }
}
