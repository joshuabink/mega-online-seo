import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import '@/styles/pages/dienst.css'

export const Route = createFileRoute('/diensten/website-redesign')({
  head: () => ({
    meta: [
      { title: "Website laten vernieuwen | MegaOnline" },
      { name: 'description', content: "Je bedrijf is gegroeid, je website niet. MegaOnline stemt je online uitstraling opnieuw af op waar je vandaag staat en waar je naartoe wilt." },
      { property: 'og:title', content: "Website laten vernieuwen | MegaOnline" },
      { property: 'og:description', content: "Je bedrijf is gegroeid, je website niet. MegaOnline stemt je online uitstraling opnieuw af op waar je vandaag staat en waar je naartoe wilt." },
      { property: 'og:url', content: "https://megaonline.io/diensten/website-redesign" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/website-redesign" },
    ],
  }),
  component: WebsiteRedesign,
})

const SIGNALEN = [
  { t: 'Je website voelt verouderd', p: 'De stijl is van een paar jaar terug. Dat zie je meteen en je bezoeker ook.' },
  { t: 'Concurrenten ogen professioneler', p: 'Naast hun site valt die van jou net wat minder op zijn plek.' },
  { t: 'Je bedrijf is veranderd', p: 'Wie je nu bent, staat niet meer goed op je website.' },
  { t: 'Je aanbod is uitgebreid', p: 'Nieuwe diensten passen niet meer logisch in de oude opzet.' },
  { t: 'Sluit niet meer aan op je doelgroep', p: 'De toon en uitstraling passen niet bij wie je nu wilt bereiken.' },
  { t: 'Je bent er niet trots meer op', p: 'Je deelt de link liever niet. Dat zegt eigenlijk genoeg.' },
]

const BEKIJKEN: { icon: string; t: string }[] = [
  { icon: 'eye', t: 'Huidige uitstraling' },
  { icon: 'layout', t: 'Structuur en opbouw' },
  { icon: 'users', t: 'Je doelgroep van nu' },
  { icon: 'flag', t: 'Je concurrenten' },
  { icon: 'smartphone', t: 'Mobiele ervaring' },
  { icon: 'shield-check', t: 'Signalen van vertrouwen' },
  { icon: 'file-text', t: 'Route naar aanvraag of boeking' },
  { icon: 'search-check', t: 'Wat goed scoort in Google' },
]

const BETER = [
  'Duidelijkere boodschap',
  'Modernere uitstraling',
  'Meer vertrouwen',
  'Logischere structuur',
  'Betere mobiele ervaring',
  'Sterkere volgende stap',
  'Zelf te beheren',
  'Groeit met je mee',
]

const STAPPEN = [
  { t: 'Analyseren', p: 'MegaOnline kijkt wat er nu staat: wat werkt, waar bezoekers afhaken en wat zeker behouden moet blijven.' },
  { t: 'Begrijpen', p: 'Wie ben je vandaag, wat maakt je anders en waar wil je naartoe? Dat is het uitgangspunt.' },
  { t: 'Structureren', p: 'MegaOnline bepaalt welke informatie waar komt en hoe bezoekers richting contact bewegen.' },
  { t: 'Ontwerpen en bouwen', p: 'Een nieuwe uitstraling die past bij je bedrijf van nu. Snel, veilig en zelf te beheren.' },
  { t: 'Live zetten', p: 'Met doorverwijzingen van oude naar nieuwe pagina’s, zodat bezoekers en Google je blijven vinden.' },
]

const WANNEER = [
  'De uitstraling past niet meer bij het niveau van je bedrijf',
  'Het fundament is niet meer veilig, snel of houdbaar',
  'De website vertelt niet meer het juiste verhaal',
  'Je bent gegroeid, maar de site kan niet meegroeien',
  'Losse aanpassingen lossen het echte probleem niet op',
]

const VOOR_WIE = [
  { to: '/branches/dienstverleners', t: 'Dienstverleners', p: 'Het werk is groter geworden, de site praat nog tegen je eerste klanten.' },
  { to: '/branches/verhuurbedrijven', t: 'Verhuurbedrijven', p: 'Het assortiment is uitgebreid, de structuur van de site is nooit meegegroeid.' },
  { to: '/branches/non-profits', t: 'Stichtingen en verenigingen', p: "Jaren aan losse pagina's die samen geen verhaal meer vertellen." },
] as const

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Moet mijn website volledig opnieuw gebouwd worden?',
    a: 'Niet altijd. Soms volstaat een grondige restyling op de bestaande basis, soms is opnieuw opbouwen slimmer. Dat hangt af van de technische en strategische staat van je huidige website. MegaOnline is daar eerlijk over.',
  },
  {
    q: 'Kan MegaOnline bestaande content overnemen?',
    a: "Ja. Goede teksten, foto's en pagina's neemt MegaOnline mee. Vaak scherpt MegaOnline ze aan zodat ze beter aansluiten bij je bedrijf van nu, maar je begint zelden vanaf nul.",
  },
  {
    q: 'Wat gebeurt er met mijn vindbaarheid in Google?',
    a: 'Daar let MegaOnline bewust op. MegaOnline houdt pagina’s die goed scoren in stand, zet doorverwijzingen van oude naar nieuwe adressen en houdt de technische basis op orde. Zo verlies je niet zomaar wat je al hebt opgebouwd.',
  },
  {
    q: 'Hoe lang duurt een redesign?',
    a: 'Dat hangt af van de omvang en van hoe snel teksten en feedback rond zijn. Na een eerste gesprek krijg je een realistische planning voor jouw situatie.',
  },
  {
    q: 'Is een redesign altijd beter dan optimaliseren?',
    a: (
      <>
        Nee. Is je website technisch in orde en ziet hij er nog goed uit, dan zijn gerichte verbeteringen vaak slimmer en goedkoper. Bekijk dan{' '}
        <Link to="/diensten/website-optimalisatie">Website Optimalisatie</Link>.
      </>
    ),
  },
  {
    q: 'Kan ik mijn website daarna zelf beheren?',
    a: 'Ja. Teksten en foto’s pas je gemakkelijk zelf aan. Je zit nooit vast aan één leverancier: de website blijft van jou.',
  },
  {
    q: 'Hoe begin ik?',
    a: 'Vraag het gratis homepageontwerp aan. Je ziet dan meteen hoe je vernieuwde homepage eruit kan zien. Daarna bespreekt MegaOnline met jou of en hoe het verder gaat.',
  },
]

function WebsiteRedesign() {
  return (
    <main id="top" data-page="redesign" data-dienst>
      <section className="section hero" id="ontwerp" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Website Redesign</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Website Redesign
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Website vernieuwen als je bedrijf is <em>gegroeid</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Veel websites zijn gebouwd voor het bedrijf dat je jaren geleden was. MegaOnline stemt je website opnieuw af op waar je vandaag staat en waar je naartoe wilt.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>MegaOnline neemt mee wat nu al goed werkt</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Met aandacht voor je vindbaarheid in Google</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Teksten en foto’s pas je gemakkelijk zelf aan</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="ontwerp" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Herken je dit?">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Herken je dit?</span>
              <h2 className="h2">
                Je bedrijf is verder dan je <em>website.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Niet omdat je iets fout doet, maar omdat je bent doorgegroeid. De website bleef staan waar hij stond. Bezoekers vormen in een paar seconden een oordeel. Een verouderde site laat ze twijfelen.
              </p>
              <Link className="tlink" to="/kennisbank/$slug" params={{ slug: 'vertrouwen-wekken-zakelijke-website' }}>
                Lees waar bezoekers op letten <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {SIGNALEN.map((x, i) => (
              <Reveal as="li" key={x.t} className="cw-problem reveal" data-d={String(i % 3)}>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">
              Eerst kijken wat er is. <em>Dan</em> pas bouwen.
            </h2>
            <p className="lead">Een redesign die alleen mooier is, lost weinig op. MegaOnline grijpt het moment aan om je hele website scherper te maken.</p>
          </Reveal>
          <ol className="v2-steps cw-steps">
            {STAPPEN.map((s, i) => (
              <Reveal as="li" key={s.t} className="v2-step reveal" data-d={String(i % 3)}>
                <span className="v2-step__no">0{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Wat we bekijken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Meer dan een nieuw jasje</span>
            <h2 className="h2">
              MegaOnline vervangt niet alleen de uitstraling. MegaOnline verbetert de <em>ervaring.</em>
            </h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Wat MegaOnline eerst bekijkt</h3>
              <ul className="cw-incl">
                {BEKIJKEN.map((x) => (
                  <li key={x.t}>
                    <span className="cw-incl__ico">
                      <Icon name={x.icon} />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <h3>Wat er beter wordt</h3>
              <p>Een website die weer past bij het niveau van je werk en bezoekers duidelijk naar de volgende stap brengt.</p>
              <ul className="cw-chips">
                {BETER.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Geen beloftes over percentages</h3>
              <p>Wel een website die op alle fronten beter aansluit bij je bedrijf en je bezoekers. Na livegang kijkt MegaOnline samen met jou wat bezoekers echt doen.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Eerlijk advies">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk advies</span>
            <h2 className="h2">Niet elke website hoeft opnieuw.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Redesign of optimaliseren?</span>
              <p className="cw-prijs__uitleg">
                Sommige websites hebben vooral kleine verbeteringen nodig. Andere zijn visueel, technisch of strategisch zo verouderd dat opnieuw opbouwen de betere investering is.
              </p>
              <p className="cw-prijs__uitleg">
                Heb je vooral gerichte verbeteringen nodig? Dan is optimaliseren waarschijnlijk slimmer dan een redesign.
              </p>
              <Link className="btn btn-primary" to="/diensten/website-optimalisatie">
                Bekijk Website Optimalisatie
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Een redesign is slimmer als</span>
              <ul className="cw-list">
                {WANNEER.map((x) => (
                  <li key={x}>
                    <Icon name="check" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="werk" data-theme="paper" data-screen-label="Cases">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Redesign projecten</span>
            <h2 className="h2">
              Van <em>verouderd</em> naar van nu.
            </h2>
          </Reveal>
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="De vernieuwde website van Q-Team Solutions" />
              </div>
              <div className="case__body">
                <h3 className="case__name">Q-Team Solutions</h3>
                <div className="case__meta">
                  <span className="tag">Redesign</span>
                  <span className="tag">B2B software</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Wat was verouderd</span>
                    <p>De site was niet meegegroeid met het aanbod en liet onvoldoende zien welke apps het bedrijf ontwikkelt.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat MegaOnline deed</span>
                    <p>MegaOnline bracht de propositie terug naar een duidelijke boodschap en bouwde een structuur die bezoekers sneller naar de juiste informatie leidt.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="De vernieuwde website van GuestRoomUtrecht" />
              </div>
              <div className="case__body">
                <h3 className="case__name">GuestRoomUtrecht</h3>
                <div className="case__meta">
                  <span className="tag">Redesign</span>
                  <span className="tag">Bed &amp; Breakfast</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Wat was verouderd</span>
                    <p>De sfeer van het verblijf kwam onvoldoende over en de route naar een boeking was onduidelijk.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat MegaOnline deed</span>
                    <p>Een visuele website met een duidelijke boekingsroute en focus op beleving.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="faq" data-theme="light" data-screen-label="FAQ">
        <div className="wrap cw-faq">
          <Reveal as="div" className="shead reveal">
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Wat je misschien nog wil weten</h2>
            <p className="cw-faq__mail">
              Staat je vraag er niet bij? Mail naar <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
          </Reveal>
          <div className="faq">
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" data-theme="paper" data-screen-label="Voor wie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            <h2 className="h2">Waar MegaOnline een redesign het vaakst ziet.</h2>
          </Reveal>
          <ul className="cw-problems">
            {VOOR_WIE.map((x, i) => (
              <Reveal as="li" key={x.to} className="cw-problem reveal" data-d={String(i)}>
                <h3>
                  <Link to={x.to}>{x.t}</Link>
                </h3>
                <p>{x.p}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd hoe je vernieuwde homepage eruit kan zien?
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            MegaOnline ontwerpt gratis een homepage voor je bedrijf. Zo zie je wat een redesign kan doen, zonder verplichtingen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#ontwerp">
            Vraag je gratis homepageontwerp aan
          </Reveal>
        </div>
      </section>
    </main>
  )
}
