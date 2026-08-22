import { MARKS } from './marks'

/**
 * Vervangt de Lucide CDN-runtime (`<i data-lucide="naam">`) uit de prototypes.
 * De iconen zijn nu gebundeld, dus geen extra request en geen DOM-scan na
 * page load — het icoon staat meteen in de server-rendered HTML.
 *
 * Sinds de eigen set compleet is haalt deze component niets meer uit Lucide.
 * `MARKS` kent elke naam die de site ooit gebruikte, dus `lucide-react` zit
 * niet langer in de bundel. De namen bleven staan zoals ze waren, zodat de
 * pagina's niet aangepast hoefden te worden om van tekening te wisselen.
 *
 * Grootte, lijndikte en kleur komen uit de bestaande CSS
 * (`.mlink__ico svg { width: …; stroke: … }`), precies zoals bij de
 * CDN-versie. Daarom zetten we hier bewust geen size/strokeWidth.
 */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MARKS[name]

  if (!Cmp) {
    if (import.meta.env.DEV) {
      console.warn(`[Icon] onbekend icoon "${name}" — voeg het toe aan marks.tsx`)
    }
    return null
  }

  return <Cmp className={className} aria-hidden="true" />
}
