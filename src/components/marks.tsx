/**
 * Eigen iconenset — vervangt Lucide op de hele site.
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
 * En een vierde regel die over de set gaat in plaats van over de tekening:
 * de site gebruikte 106 verschillende iconen op 337 plekken. Dat is geen set
 * maar een greep uit een bibliotheek. Hieronder staan er 43; de bijna-
 * dubbelingen (zes soorten kalender, vier soorten grafiek) delen er nu één.
 * Herhaling maakt een set herkenbaar.
 *
 * De clichés zijn niet nagetekend maar vervangen. Een raket voor groei, een
 * sprankeling voor uitstraling en een bliksemschicht voor snelheid zeggen
 * niets over websites; ze zeggen alleen dat de pagina uit een generator komt.
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

/* --------------------------------------------------------------- vertrouwen */

/** Vertrouwen — een zegel met rechte zijden in plaats van Lucide's schild. */
function Vertrouwen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6 4.4 5.4v6.2L12 21.4l7.6-9.8V5.4Z" />
      <path d="M8.4 11.7 11 14.3l4.8-4.9" />
    </Svg>
  )
}

/** Klopt — de kale vink, voor bevestigingen in lijsten. */
function Vink(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M4.2 12.4 9.4 17.6 19.8 6.8" />
    </Svg>
  )
}

/* --------------------------------------------------------------------- tijd */

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

/** Agenda — hetzelfde blad, maar met data in plaats van een vink. */
function Kalender(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 5.8h16.8v14.6H3.6Z" />
      <path d="M3.6 10.2h16.8" />
      <path d="M8.6 2.8v5M15.4 2.8v5" />
      <path d="M7.4 13.8h2.4M14.2 13.8h2.4M7.4 17.2h2.4M14.2 17.2h2.4" />
    </Svg>
  )
}

/** Tijd — cirkel met twee rechte wijzers. */
function Klok(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 6.6V12h4.8" />
    </Svg>
  )
}

/* ----------------------------------------------------------------- richting */

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

/** Doel gehaald — een vlag op een rechte mast. */
function Vlag(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M5.6 21.4V2.6" />
      <path d="M5.6 3.6h13.4l-3 4.4 3 4.4H5.6" />
    </Svg>
  )
}

/* -------------------------------------------------------------------- groei */

/**
 * Groei — drie staven die oplopen vanaf één basislijn.
 *
 * Lucide's `trending-up` is een zigzag met een pijlpunt: een beurskoers.
 * Hier staat wat er groeit, zonder de belofte dat het omhoog blijft gaan.
 */
function Groei(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 20.6h18.4" />
      <path d="M6.8 20.6v-4.8M12 20.6v-9.4M17.2 20.6v-14" />
    </Svg>
  )
}

/**
 * Snelheid — een dubbele punthaak naar rechts.
 *
 * In plaats van Lucide's bliksemschicht, die snelheid met energie verwart.
 */
function Snelheid(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M5.4 4.8 12.6 12l-7.2 7.2" />
      <path d="M12.4 4.8 19.6 12l-7.2 7.2" />
    </Svg>
  )
}

/**
 * Uitstraling — een vlak dat licht geeft.
 *
 * Vervangt `sparkles`, `star`, `sun` en `award`: vier iconen die op deze site
 * allemaal hetzelfde betekenden, namelijk dat iets er verzorgd uitziet.
 */
function Uitstraling(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M7.4 7.4h9.2v9.2H7.4Z" />
      <path d="M12 1.6v3.2M12 19.2v3.2M1.6 12h3.2M19.2 12h3.2" />
    </Svg>
  )
}

/**
 * Ruimte om te groeien — een vlak waar een tweede vlak tegenaan komt.
 *
 * Vervangt de raket. Een website die meegroeit wordt uitgebreid, niet
 * gelanceerd.
 */
function Uitbreiding(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 2.8h11.2v11.2H2.8Z" />
      <path d="M14 14h7.2v7.2H14Z" />
    </Svg>
  )
}

/** Beginnen — een kiem met twee rechte blaadjes. */
function Kiem(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 21.4v-8.8" />
      <path d="M11.2 14 4.6 10.4V5l6.6 3.6Z" />
      <path d="M12.8 14l6.6-3.6V5l-6.6 3.6Z" />
    </Svg>
  )
}

/** Herhalen — twee lijnen die tegen elkaar in lopen. */
function Herhalen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 8.6h17.2l-4-4" />
      <path d="M20.6 15.4H3.4l4 4" />
    </Svg>
  )
}

/* ------------------------------------------------------------------- mensen */

/** Mensen — koppen met rechte schouders, geen ronde bogen. */
function Mensen(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="9.4" cy="7.8" r="3.6" />
      <path d="M2.6 20.8v-3l3-3h7.6l3 3v3" />
      <circle cx="18.2" cy="8.6" r="2.4" />
      <path d="M17.4 14.8h1.8l2.2 2.2v3.8" />
    </Svg>
  )
}

/** Eén persoon — voor plekken waar het om een individu gaat. */
function Persoon(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="7.8" r="4" />
      <path d="M4.4 20.8v-3.2l3.2-3.2h8.8l3.2 3.2v3.2" />
    </Svg>
  )
}

/* ------------------------------------------------------------------- kanaal */

/** Mobiel — waar de meeste bezoekers binnenkomen. */
function Mobiel(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M6.6 2.6h10.8v18.8H6.6Z" />
      <path d="M6.6 5.8h10.8M6.6 18.2h10.8" />
      <path d="M10.8 20h2.4" />
    </Svg>
  )
}

/** Bericht — een envelop met een rechte vouw. */
function Envelop(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 5.4h18.8v13.2H2.6Z" />
      <path d="M2.6 5.4 12 12.8l9.4-7.4" />
    </Svg>
  )
}

/** Verzenden — een vlucht met rechte vouwen. */
function Verzenden(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 12 21.4 3.2l-4.2 17.6-5-5.4Z" />
      <path d="M7.2 15.4 21.4 3.2" />
    </Svg>
  )
}

/** Gesprek — een blad met een staart, in rechte hoeken. */
function Gesprek(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 3.8h18.4v12.4H9.2l-4.6 4.4v-4.4H2.8Z" />
    </Svg>
  )
}

/** Melding — een bel opgebouwd uit rechte vlakken. */
function Bel(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M6.2 17.4v-7.2L12 4.4l5.8 5.8v7.2" />
      <path d="M3.6 17.4h16.8" />
      <path d="M10.2 20.2h3.6" />
    </Svg>
  )
}

/* ------------------------------------------------------------------- vinden */

/** Zoeken — een cirkel met een rechte steel. */
function Zoeken(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="10.4" cy="10.4" r="6.6" />
      <path d="M15.2 15.2 20.8 20.8" />
    </Svg>
  )
}

/** Gevonden — dezelfde loep, met het antwoord erin. */
function ZoekenKlopt(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="10.4" cy="10.4" r="6.6" />
      <path d="M15.2 15.2 20.8 20.8" />
      <path d="M7.4 10.5 9.7 12.8l3.7-3.8" />
    </Svg>
  )
}

/** Zichtbaar — een facet met een pupil, geen ooglid van bogen. */
function Oog(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.4 12 12 6.2 21.6 12 12 17.8Z" />
      <circle cx="12" cy="12" r="2.6" />
    </Svg>
  )
}

/* ------------------------------------------------------------------- inhoud */

/** Document — een blad met een omgeslagen hoek. */
function Document(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M5.4 2.6h8.8l4.4 4.4v14.4H5.4Z" />
      <path d="M14.2 2.6v4.4h4.4" />
      <path d="M8.4 12.2h7.2M8.4 15.6h7.2M8.4 19h4.4" />
    </Svg>
  )
}

/** Lijst — regels met een aanduiding ervoor. */
function Lijst(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 6.6h1.8M3.4 12h1.8M3.4 17.4h1.8" />
      <path d="M8.6 6.6h12M8.6 12h12M8.6 17.4h8" />
    </Svg>
  )
}

/** Opmaak — een pagina met een kop en een kolom. */
function Layout(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 4.2h18.4v15.6H2.8Z" />
      <path d="M2.8 9h18.4" />
      <path d="M9.6 9v10.8" />
    </Svg>
  )
}

/** Beeld — een kader met een horizon erin. */
function Beeld(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.8 4.8h18.4v14.4H2.8Z" />
      <path d="M2.8 16.4 9 10.2l3.6 3.6 3.2-3.2 5.4 5.4" />
      <circle cx="7.8" cy="8.8" r="1.4" />
    </Svg>
  )
}

/** Citaat — twee blokken die aanhalingstekens zijn. */
function Citaat(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.6 15.2V8.4h6.2v6.8l-2.6 4.2h-2.2" />
      <path d="M14.2 15.2V8.4h6.2v6.8l-2.6 4.2h-2.2" />
    </Svg>
  )
}

/* ----------------------------------------------------------------- handelen */

/** Aanwijzen — de cursor, met rechte flanken. */
function Aanwijzen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M6.6 2.8v16.6l3.8-4.2h5.8Z" />
      <path d="M12.6 15.2 17.4 21.4" />
    </Svg>
  )
}

/** Instellen — drie rails met een greep erop. */
function Instellen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 6.8h17.2M3.4 12h17.2M3.4 17.2h17.2" />
      <path d="M8 4.6v4.4M15.4 9.8v4.4M6.8 15v4.4" />
    </Svg>
  )
}

/** Techniek — de haken die om code staan. */
function Code(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M8.4 6.4 3.2 12l5.2 5.6" />
      <path d="M15.6 6.4 20.8 12l-5.2 5.6" />
    </Svg>
  )
}

/** Bedenken — een lamp met een rechte voet. */
function Idee(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="9.4" r="5.8" />
      <path d="M9 16.8h6M9.8 19.8h4.4" />
    </Svg>
  )
}

/** Vormgeven — een pen met een rechte punt. */
function Pen(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 20.6v-3.8L16.2 4l3.8 3.8L7.2 20.6Z" />
      <path d="M13.6 6.6 17.4 10.4" />
    </Svg>
  )
}

/* -------------------------------------------------------------------- zaken */

/** Werk — een koffer met rechte hoeken. */
function Koffer(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 7h18.8v13.4H2.6Z" />
      <path d="M8.6 7V3.6h6.8V7" />
      <path d="M2.6 12.4h18.8" />
    </Svg>
  )
}

/** Prijs — een kaart met een strook. */
function Geld(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M2.6 5h18.8v14H2.6Z" />
      <path d="M2.6 9.4h18.8" />
      <path d="M6 14.6h4.6" />
    </Svg>
  )
}

/** Levering — een doos in doorzicht. */
function Pakket(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.6 21.4 7.4v9.2L12 21.4 2.6 16.6V7.4Z" />
      <path d="M2.6 7.4 12 12.2l9.4-4.8" />
      <path d="M12 12.2v9.2" />
    </Svg>
  )
}

/** Plaats — een baken met een punt. */
function Locatie(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 21.6 4.6 11 12 2.4l7.4 8.6Z" />
      <circle cx="12" cy="10.6" r="2.6" />
    </Svg>
  )
}

/** Steun — een hart uit rechte vlakken. */
function Hart(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 21 3 12V7.4l4-3.4 5 4 5-4 4 3.4V12Z" />
    </Svg>
  )
}

/** Werkwijze — een route met haltes onderweg. */
function Route(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6.2" r="2.6" />
      <path d="M6 8.8v9h9.4" />
      <circle cx="18" cy="17.8" r="2.6" />
    </Svg>
  )
}

/* ----------------------------------------------------------------- signalen */

/** Toelichting — een cirkel met een i. */
function Info(props: MarkProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 11.2v5.4" />
      <path d="M12 7.4v1.4" />
    </Svg>
  )
}

/** Let op — een driehoek met een uitroepteken. */
function LetOp(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 3 21.8 20.6H2.2Z" />
      <path d="M12 10v4.6" />
      <path d="M12 17.2v1.4" />
    </Svg>
  )
}

/* ----------------------------------------------------------------------- UI */

/** Verder — een rechte pijl. */
function PijlRechts(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 12h17.2" />
      <path d="M14 5.4 20.6 12 14 18.6" />
    </Svg>
  )
}

/** Naar buiten — een pijl schuin omhoog. */
function PijlSchuin(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M6.4 17.6 17.6 6.4" />
      <path d="M8.6 6.4h9v9" />
    </Svg>
  )
}

/** Uitklappen — een punthaak omlaag. */
function ChevronOmlaag(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M5 8.8 12 15.8l7-7" />
    </Svg>
  )
}

/** Menu — drie regels. */
function Menu(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M3.4 6.6h17.2M3.4 12h17.2M3.4 17.4h17.2" />
    </Svg>
  )
}

/** Sluiten — twee kruisende lijnen. */
function Sluiten(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M5.4 5.4 18.6 18.6M18.6 5.4 5.4 18.6" />
    </Svg>
  )
}

/** Toevoegen — een plus. */
function Plus(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.8v16.4M3.8 12h16.4" />
    </Svg>
  )
}

/** Uitgang — een deur met een pijl eruit. */
function Uitgang(props: MarkProps) {
  return (
    <Svg {...props}>
      <path d="M13.4 3.4H3.6v17.2h9.8" />
      <path d="M9.4 12h11" />
      <path d="M16.6 8.2 20.4 12l-3.8 3.8" />
    </Svg>
  )
}

/**
 * Registry op dezelfde namen als de Lucide-iconen die ze vervangen, zodat de
 * pagina's ongewijzigd blijven: `<Icon name="shield-check" />` pakt nu deze
 * tekening. Staat een naam hier, dan wordt Lucide voor die naam overgeslagen.
 *
 * Meerdere namen wijzen bewust naar dezelfde tekening. Zes soorten kalender en
 * vier soorten grafiek maakten het onderscheid niet duidelijker, alleen de set
 * groter.
 */
export const MARKS: Record<string, ComponentType<MarkProps>> = {
  // vertrouwen
  'shield-check': Vertrouwen,
  'badge-check': Vertrouwen,
  'user-check': Vertrouwen,
  'file-check': Vertrouwen,
  'package-check': Vertrouwen,
  check: Vink,
  'check-circle': Vink,
  'list-checks': Vink,

  // tijd
  'calendar-check': Boeking,
  ticket: Boeking,
  calendar: Kalender,
  'calendar-days': Kalender,
  'calendar-range': Kalender,
  'calendar-plus': Kalender,
  'calendar-clock': Klok,
  clock: Klok,
  'alarm-clock': Klok,

  // richting
  target: Raakvlak,
  compass: Raakvlak,
  handshake: Schakel,
  'heart-handshake': Schakel,
  'hand-heart': Schakel,
  'link-2': Schakel,
  'git-merge': Schakel,
  plug: Schakel,
  workflow: Schakel,
  flag: Vlag,

  // groei
  'trending-up': Groei,
  'line-chart': Groei,
  'bar-chart-3': Groei,
  'bar-chart-2': Groei,
  activity: Groei,
  sprout: Kiem,
  leaf: Kiem,
  zap: Snelheid,
  gauge: Snelheid,
  wind: Snelheid,
  sparkles: Uitstraling,
  star: Uitstraling,
  sun: Uitstraling,
  award: Uitstraling,
  smile: Uitstraling,
  rocket: Uitbreiding,
  blocks: Uitbreiding,
  boxes: Uitbreiding,
  'layout-grid': Uitbreiding,
  repeat: Herhalen,
  'refresh-cw': Herhalen,

  // mensen
  users: Mensen,
  'user-plus': Mensen,
  'user-search': Mensen,
  'graduation-cap': Mensen,
  'hard-hat': Mensen,
  user: Persoon,

  // kanaal
  smartphone: Mobiel,
  phone: Mobiel,
  'phone-call': Mobiel,
  mail: Envelop,
  inbox: Envelop,
  send: Verzenden,
  'message-circle': Gesprek,
  'message-square': Gesprek,
  'message-square-text': Gesprek,
  bell: Bel,

  // vinden
  search: Zoeken,
  'search-check': ZoekenKlopt,
  eye: Oog,

  // inhoud
  'file-text': Document,
  files: Document,
  newspaper: Document,
  'clipboard-list': Lijst,
  list: Lijst,
  'list-ordered': Lijst,
  layout: Layout,
  'layout-template': Layout,
  'layout-dashboard': Layout,
  images: Beeld,
  camera: Beeld,
  quote: Citaat,

  // handelen
  'mouse-pointer-click': Aanwijzen,
  hand: Aanwijzen,
  settings: Instellen,
  cog: Instellen,
  wrench: Instellen,
  'sliders-horizontal': Instellen,
  filter: Instellen,
  'code-2': Code,
  lightbulb: Idee,
  brain: Idee,
  'pen-tool': Pen,
  paintbrush: Pen,
  palette: Pen,
  'edit-3': Pen,

  // zaken
  briefcase: Koffer,
  euro: Geld,
  'credit-card': Geld,
  'hand-coins': Geld,
  percent: Geld,
  package: Pakket,
  gift: Pakket,
  truck: Pakket,
  'map-pin': Locatie,
  route: Route,
  heart: Hart,

  // signalen
  info: Info,
  'help-circle': Info,
  'alert-triangle': LetOp,

  // UI
  'arrow-right': PijlRechts,
  'arrow-up-right': PijlSchuin,
  'chevron-down': ChevronOmlaag,
  menu: Menu,
  x: Sluiten,
  plus: Plus,
  'log-out': Uitgang,
  // Namen die de oude Lucide-registry nog kende maar die nergens meer op de
  // site staan. Ze wijzen hier naar de dichtstbijzijnde tekening, zodat een
  // pagina die er later een gebruikt niet leeg blijft — en zodat Lucide
  // helemaal uit de bundel kan.
  anchor: Locatie,
  'book-open': Document,
  bot: Persoon,
  'building-2': Koffer,
  calculator: Geld,
  'calendar-x': Kalender,
  car: Pakket,
  circle: Raakvlak,
  clipboard: Lijst,
  cloud: Code,
  contact: Persoon,
  database: Pakket,
  droplets: Uitstraling,
  dumbbell: Groei,
  'file-spreadsheet': Document,
  film: Beeld,
  'filter-x': Instellen,
  globe: Raakvlak,
  grid: Layout,
  hammer: Instellen,
  home: Locatie,
  hourglass: Klok,
  image: Beeld,
  instagram: Beeld,
  languages: Document,
  layers: Uitbreiding,
  link: Schakel,
  'mail-x': Envelop,
  map: Locatie,
  monitor: Layout,
  'phone-off': Mobiel,
  'pie-chart': Groei,
  play: PijlRechts,
  receipt: Geld,
  scroll: Document,
  'search-x': Zoeken,
  'settings-2': Instellen,
  shield: Vertrouwen,
  ship: Pakket,
  'shopping-bag': Pakket,
  'shopping-cart': Pakket,
  shuffle: Herhalen,
  sliders: Instellen,
  tag: Geld,
  'trending-down': Groei,
  type: Document,
  'upload-cloud': Verzenden,
  'user-x': Persoon,
  video: Beeld,
  wallet: Geld,
  'zap-off': Snelheid,
}
