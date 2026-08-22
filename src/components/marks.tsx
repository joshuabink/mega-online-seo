/**
 * Eigen iconenset — vervangt Lucide op de plekken waar een icoon zichtbaar
 * naast tekst staat.
 *
 * Waarom eigen tekeningen: Lucide is de standaardset van shadcn/ui en dus van
 * vrijwel elke gegenereerde site. De vorm zelf is herkenbaar, ongeacht welk
 * icoon je kiest.
 *
 * Het systeem, in drie regels:
 *   1. Alleen rechte lijnen en hele cirkels. Geen bezier-curves.
 *   2. Stompe uiteinden en scherpe hoeken (butt caps, miter joins) — Lucide
 *      gebruikt overal ronde. Dat verschil zie je al op 18px.
 *   3. Eén lijndikte (1.6 op een 24-raster), geen vullingen.
 *
 * `stroke="currentColor"` zonder vaste maat, zodat de bestaande CSS
 * (`.proof__ico svg { width: … }`) blijft bepalen hoe groot en welke kleur.
 */
import type { ComponentType, SVGProps } from 'react'

type MarkProps = SVGProps<SVGSVGElement>

function Svg({ children, ...rest }: MarkProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

/** Vertrouwen — een zegel met rechte zijden in plaats van Lucide's schild. */
function Vertrouwen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6 4.4 5.4v6.2L12 21.4l7.6-9.8V5.4Z" />
      <path d="M8.4 11.7 11 14.3l4.8-4.9" />
    </Svg>
  )
}

/** Aanvragen en boekingen — een blad met datumrand, afgevinkt. */
function Boeking(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 5.8h16.8v14.6H3.6Z" />
      <path d="M3.6 10.2h16.8" />
      <path d="M8.6 2.8v5M15.4 2.8v5" />
      <path d="M8.4 15.1 10.8 17.5l4.6-4.7" />
    </Svg>
  )
}

/** Past bij je bedrijf — raakvlak: twee cirkels met een gedeeld midden. */
function Raakvlak(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 1.2v2.4M12 20.4v2.4M1.2 12h2.4M20.4 12h2.4" />
    </Svg>
  )
}

/** Betrokken partner — twee ringen die elkaar overlappen. */
function Schakel(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="8.6" cy="12" r="5.6" />
      <circle cx="15.4" cy="12" r="5.6" />
    </Svg>
  )
}

/**
 * Registry op dezelfde namen als de Lucide-iconen die ze vervangen, zodat de
 * pagina's ongewijzigd blijven: `<Icon name="shield-check" />` pakt nu deze
 * tekening. Voeg hier een naam toe en Lucide wordt voor die naam overgeslagen.
 */
export const MARKS: Record<string, ComponentType<MarkProps>> = {
  'shield-check': Vertrouwen,
  'calendar-check': Boeking,
  target: Raakvlak,
  handshake: Schakel,
}
