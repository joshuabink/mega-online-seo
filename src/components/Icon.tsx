import { ICONS } from './icons'

/**
 * Vervangt de Lucide CDN-runtime (`<i data-lucide="naam">`) uit de prototypes.
 * De iconen zijn nu gebundeld, dus geen extra request en geen DOM-scan na
 * page load — het icoon staat meteen in de server-rendered HTML.
 *
 * Grootte, lijndikte en kleur komen uit de bestaande CSS
 * (`.mlink__ico svg { width: …; stroke: … }`), precies zoals bij de
 * CDN-versie. Daarom zetten we hier bewust geen size/strokeWidth.
 */
export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = ICONS[name]

  if (!Cmp) {
    if (import.meta.env.DEV) {
      console.warn(
        `[Icon] onbekend icoon "${name}" — draai \`node scripts/build-icons.mjs\``,
      )
    }
    return null
  }

  return <Cmp className={className} aria-hidden="true" />
}
