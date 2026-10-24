import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { ConceptFormKort } from '@/components/ConceptFormKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/homepage-v2.css'

/**
 * Testversie van een nieuwe homepage. Staat los van `/` zodat Joshua hem
 * op de echte site kan bekijken voordat hij de homepage vervangt.
 * Niet in de sitemap en op noindex.
 */
export const Route = createFileRoute('/homepage-v2')({
  head: () => ({
    meta: [
      { title: 'Homepage (testversie) | MegaOnline.io' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  }),
  component: HomepageV2,
})

const DIENSTEN: {
  icon: string
  tag: string
  name: string
  text: string
  price: string
  to: string
  linkText: string
  dark?: boolean
}[] = [
  {
    icon: 'target',
    tag: 'Kerndienst',
    name: 'Conversie Website',
    text: 'Een nieuwe website die laat zien waarom klanten voor jou moeten kiezen. Daarna staan ze in een paar klikken bij een aanvraag of boeking.',
    price: 'vanaf € 2.500',
    to: '/diensten/conversie-website',
    linkText: 'Bekijk de dienst',
    dark: true,
  },
  {
    icon: 'trending-up',
    tag: 'SEO · GEO · Google Ads',
    name: 'Online marketing',
    text: "Gevonden worden door mensen die zoeken naar wat jij doet. Elke maand schrijven we blogs en landingspagina's op de vragen van jouw klanten. Haast? Dan zetten we Google Ads in.",
    price: 'SEO-pakket: vanaf € 75 per maand',
    to: '/diensten/seo',
    linkText: 'Bekijk de dienst',
  },
  {
    icon: 'refresh-cw',
    tag: 'Bestaande site',
    name: 'Website Redesign',
    text: 'Je site werkt nog, maar oogt gedateerd of past niet meer bij je bedrijf. We vernieuwen hem en houden vast aan wat nu al goed werkt.',
    price: 'prijs na de scan',
    to: '/diensten/website-redesign',
    linkText: 'Bekijk de dienst',
  },
  {
    icon: 'layout-template',
    tag: 'Voor starters',
    name: 'Starter Website',
    text: 'Net begonnen of een kleiner bedrijf? Een compacte site met de basis op orde: wie je bent, wat je doet en hoe je makkelijk contact opneemt.',
    price: 'vanaf € 1.500',
    to: '/diensten/starter-website',
    linkText: 'Bekijk de dienst',
  },
  {
    icon: 'calendar-check',
    tag: 'Boekingssysteem',
    name: 'Online boeken en reserveren',
    text: "Klanten boeken zelf, ook 's avonds en in het weekend. Van een belafspraak tot een ticket met extra's, ingericht op jouw diensten en gekoppeld aan je agenda, CRM of WhatsApp.",
    price: 'prijs na de scan',
    to: '/diensten/integraties',
    linkText: 'Bekijk de dienst',
  },
  {
    icon: 'shield-check',
    tag: 'Zorgeloos',
    name: 'Onderhoud & Support',
    text: 'Updates, beveiliging en back-ups geregeld. Gaat er toch iets mis, dan heb je direct iemand die het oplost.',
    price: 'vanaf € 50 per maand',
    to: '/contact',
    linkText: 'Stel je vraag',
  },
]

const STAPPEN = [
  {
    no: '01',
    name: 'Begrijpen',
    text: 'We leren je bedrijf en je klanten kennen. Wie is je klant, wat zoekt hij en wat trekt hem over de streep?',
    meta: 'Intake · doelgroep · structuur',
  },
  {
    no: '02',
    name: 'Bouwen',
    text: 'We ontwerpen en bouwen een site die vertrouwen opbouwt en bezoekers zonder omwegen naar een aanvraag of boeking leidt.',
    meta: 'Gemiddeld 4 tot 8 weken',
  },
  {
    no: '03',
    name: 'Verbeteren',
    text: 'Na livegang kijken we wat bezoekers doen. Waar haken ze af? Elke maand pakken we de grootste groeikans.',
    meta: 'Meten · bijsturen · rapporteren',
  },
]

const VERSCHIL = [
  {
    k: 'Startpunt',
    them: 'Jouw wensenlijst: welke pagina’s, welke kleuren.',
    us: 'Je klant: wie hij is, wat hij zoekt en wat hem over de streep trekt.',
  },
  { k: 'Doel', them: 'Een site die er goed uitziet.', us: 'Een site die aanvragen en boekingen oplevert.' },
  { k: 'Na livegang', them: 'Project af, factuur verstuurd.', us: 'Doorlopend bijsturen op de grootste groeikans.' },
  {
    k: 'Meten',
    them: 'Bezoekersaantallen, als je erom vraagt.',
    us: 'Elke maand zwart op wit wat het opleverde in aanvragen.',
  },
]

const CHECKS = [
  {
    t: 'Bezoekers snappen niet wat je doet',
    c: 'laat iemand je homepage vijf seconden zien. Kan hij zeggen wat je doet en voor wie?',
  },
  {
    t: 'Er is geen reden om jou te vertrouwen',
    c: 'zie je wie er achter het bedrijf zit, wat iets ongeveer kost en wat klanten ervan vonden?',
  },
  {
    t: 'Op de telefoon loopt het vast',
    c: 'vraag via je eigen telefoon een offerte of boeking aan. Hoeveel tikken had je nodig?',
  },
  {
    t: 'Het formulier vraagt te veel, te vroeg',
    c: 'tel de velden. Welke heb je pas na het eerste gesprek echt nodig?',
  },
]

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'Wat kost een website bij MegaOnline?',
    a: "Een Conversie Website begint vanaf € 2.500. De prijs hangt af van het aantal pagina's en de functies die je nodig hebt. In de gratis scan krijg je een eerlijke indicatie.",
  },
  {
    q: 'Hoe lang duurt het bouwen?',
    a: "Gemiddeld 4 tot 8 weken. Dat hangt vooral af van hoe snel teksten en foto's beschikbaar zijn.",
  },
  {
    q: 'Wij hebben al een website. Kunnen jullie die verbeteren?',
    a: 'Ja. Soms is een nieuwe site de beste keuze, soms leveren gerichte verbeteringen al veel op. De scan laat zien wat voor jou het slimst is.',
  },
  {
    q: 'Kan ik mijn website zelf beheren?',
    a: "Ja. Teksten en foto's pas je zelf aan, zonder technische kennis.",
  },
  {
    q: 'Zit ik na livegang ergens aan vast?',
    a: 'Nee. Na livegang kies je zelf: onderhoud, online marketing of het beheer in eigen hand.',
  },
  {
    q: 'Voor welke bedrijven werken jullie?',
    a: 'Voor bedrijven die leven van aanvragen, reserveringen of boekingen. Denk aan activiteitenbedrijven, verhuurders, zakelijke dienstverleners en rijscholen. Het bedrijfsmodel telt meer dan de branche.',
  },
]

function HomepageV2() {
  return (
    <main id="top" data-page="homepage-v2">
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + scan-formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="p" className="v2-eyebrow reveal">
                Websites voor bedrijven die leven van aanvragen
              </Reveal>{' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je website staat online. Maar <em>levert</em> hij ook aanvragen en boekingen op?
              </Reveal>{' '}
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Veel websites zien er prima uit, maar helpen bezoekers niet om actie te ondernemen. Wij bouwen websites die vertrouwen wekken en bezoekers naar een aanvraag of boeking leiden. Daarna blijven we bijsturen.
              </Reveal>{' '}
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Direct contact met wie je site bouwt</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Gebouwd op vertrouwen en makkelijk aanvragen</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Betrokken partner na livegang</span>
                </li>
              </Reveal>
            </div>{' '}
            <ConceptFormKort className="hero__form reveal" />
          </div>
        </div>
      </section>{' '}
      <section className="section" id="diensten" data-theme="paper" data-screen-label="Diensten">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Diensten</span>
              <h2 className="h2">Eerst een website die werkt. Daarna blijven we bijsturen.</h2>
            </div>
            <div className="v2-head__side">
              <p>Je begint met een website die vertrouwen wekt. Na livegang kies je zelf hoe betrokken we blijven.</p>
            </div>
          </Reveal>{' '}
          <div className="v2-svcs">
            {DIENSTEN.map((d, i) => (
              <Reveal
                as="article"
                key={d.name}
                className="v2-svc reveal"
                data-d={String(i % 3)}
                {...(d.dark ? { 'data-theme': 'dark' } : {})}
              >
                <span className="v2-svc__ico">
                  <Icon name={d.icon} />
                </span>
                <span className="v2-svc__tag">{d.tag}</span>
                <h3>{d.name}</h3>
                <p>{d.text}</p>
                <span className="v2-svc__price">{d.price}</span>
                <Link className="tlink" to={d.to}>
                  {d.linkText} <span className="arr">&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{' '}
      <section className="section" id="werkwijze" data-theme="dark" data-screen-label="Werkwijze">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo werken we</span>
            <h2 className="h2">Begrijpen. Bouwen. Verbeteren.</h2>
            <p className="lead">Geen bureau dat oplevert en vertrekt. We beginnen bij je klant en blijven na livegang betrokken.</p>
          </Reveal>{' '}
          <ol className="v2-steps">
            {STAPPEN.map((s, i) => (
              <Reveal as="li" key={s.no} className="v2-step reveal" data-d={String(i)}>
                <span className="v2-step__no">{s.no}</span>
                <h3>{s.name}</h3>
                <p>{s.text}</p>
                <span className="v2-step__meta">{s.meta}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>{' '}
      <section className="section" id="verschil" data-theme="paper" data-screen-label="Vergelijking websitebouwer">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het verschil</span>
            <h2 className="h2">
              Een websitebouwer maakt wat jij vraagt. Wij bouwen wat jouw klant nodig heeft om <em>aan te vragen.</em>
            </h2>
          </Reveal>{' '}
          <Reveal as="div" className="v2-table reveal" data-d="1">
            <table>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Onderdeel</span>
                  </th>
                  <th scope="col">Gemiddelde websitebouwer</th>
                  <th scope="col" className="us">MegaOnline</th>
                </tr>
              </thead>
              <tbody>
                {VERSCHIL.map((r) => (
                  <tr key={r.k}>
                    <th scope="row">{r.k}</th>
                    <td>{r.them}</td>
                    <td className="us">{r.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>{' '}
      <section className="section section--tight" id="zelf-checken" data-theme="light" data-screen-label="Zelf aan de slag">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Zelf aan de slag</span>
              <h2 className="h2">Waarom je website niets oplevert. En hoe je dat zelf checkt.</h2>
            </div>
            <div className="v2-head__side">
              <p>Dit zien we het vaakst terug in scans. Tien minuten en je telefoon zijn genoeg om het te controleren.</p>
              <Link className="tlink" to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>
                Lees: waarom je website geen aanvragen oplevert <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>{' '}
          <ol className="v2-checks">
            {CHECKS.map((c, i) => (
              <Reveal as="li" key={c.t} className="v2-check reveal" data-d={String(i)}>
                <span className="v2-check__no">0{i + 1}</span>
                <h3>{c.t}</h3>
                <p>
                  <b>Check:</b> {c.c}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>{' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Testimonials">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Referenties</span>
            <h2 className="h2">Wat klanten ervan merkten.</h2>
          </Reveal>{' '}
          <div className="quotes">
            <Reveal as="figure" className="quote reveal">
              <div className="quote__mark">”</div>
              <blockquote>
                <p>Voor het eerst komen er aanvragen binnen waar we niets voor hoeven te doen. De site doet eindelijk het werk.</p>
              </blockquote>
              <figcaption className="quote__by">
                <span className="quote__logo">
                  <Media id="t1-logo" fit="contain" placeholder="LOGO" alt="" />
                </span>{' '}
                <span>
                  <span className="nm">Hennie</span>
                  <span className="rl">Eigenaar · Zakelijke dienstverlening</span>
                </span>
              </figcaption>
            </Reveal>{' '}
            <Reveal as="figure" className="quote reveal" data-d="1">
              <div className="quote__mark">”</div>
              <blockquote>
                <p>Gasten boeken nu direct via de site. Ook 's avonds laat. Precies wat we nodig hadden.</p>
              </blockquote>
              <figcaption className="quote__by">
                <span className="quote__logo">
                  <Media id="t2-logo" fit="contain" placeholder="LOGO" alt="" />
                </span>{' '}
                <span>
                  <span className="nm">Margriet</span>
                  <span className="rl">Eigenaar · Bed & Breakfast</span>
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>{' '}
      <section className="section" id="faq" data-theme="light" data-screen-label="FAQ">
        <div className="wrap v2-faq">
          <Reveal as="div" className="shead v2-faq__side reveal">
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Wat je misschien nog wil weten</h2>
            <p>
              Staat je vraag er niet bij? Mail naar <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
          </Reveal>{' '}
          <div className="faq">
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
        </div>
      </section>{' '}
      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd wat er beter kan aan je website?
          </Reveal>{' '}
          <Reveal as="p" className="lead reveal" data-d="1">
            We kijken persoonlijk naar je site en sturen je de punten die we zien. Zonder verplichtingen.
          </Reveal>{' '}
          <Reveal as={Link} className="btn btn-primary reveal" data-d="2" to="/gratis-websitescan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
