import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import '@/styles/pages/conversie-website.css'

export const Route = createFileRoute('/diensten/conversie-website')({
  head: () => ({
    meta: [
      { title: "Conversiegerichte website laten maken | MegaOnline" },
      { name: 'description', content: "Een conversiegerichte website die niet alleen mooi is, maar ook zijn werk doet. Voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen." },
      { property: 'og:title', content: "Conversiegerichte website laten maken | MegaOnline" },
      { property: 'og:description', content: "Een conversiegerichte website die niet alleen mooi is, maar ook zijn werk doet. Voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen." },
      { property: 'og:url', content: "https://megaonline.io/diensten/conversie-website" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/conversie-website" },
    ],
  }),
  component: ConversieWebsite,
})

const PROBLEMEN = [
  { t: 'Bezoekers begrijpen niet wat je doet', p: 'Is het binnen enkele seconden niet duidelijk, dan zijn ze weg voordat ze iets vragen.' },
  { t: 'Te weinig vertrouwen', p: 'Een verouderde uitstraling laat bezoekers twijfelen of ze hier wel goed zitten.' },
  { t: 'Onduidelijke structuur', p: 'Wie moet zoeken naar informatie, klikt vaker weg dan door.' },
  { t: 'Slechte mobiele ervaring', p: 'Bijna iedereen gaat ook met de telefoon online. Werkt dat stroef, dan verlies je ze.' },
  { t: 'Te veel stappen richting contact', p: 'Hoe meer drempels, hoe meer afhakers vlak voor de aanvraag.' },
  { t: 'Geen duidelijke volgende stap', p: 'Een bezoeker die niet weet wat hij moet doen, doet meestal niets.' },
]

const STAPPEN = [
  { t: 'Begrijpen', p: 'We leren je bedrijf, je doelgroep en je doelen kennen. Waar twijfelen bezoekers en waarom kiezen klanten voor jou?' },
  { t: 'Structureren', p: 'We bepalen welke informatie bezoekers nodig hebben en hoe ze door de site naar contact bewegen.' },
  { t: 'Ontwerpen', p: 'Een ontwerp dat vertrouwen uitstraalt en past bij hoe jouw bedrijf over wil komen.' },
  { t: 'Ontwikkelen', p: 'We bouwen de site technisch uit: snel, veilig en eenvoudig zelf te beheren.' },
  { t: 'Verbeteren', p: 'Na livegang kijken we waar bezoekers afhaken en waar nog kansen liggen.' },
]

const INBEGREPEN: { icon: string; t: string }[] = [
  { icon: 'phone-call', t: 'Werkt goed op mobiel' },
  { icon: 'trending-up', t: 'Snel en gebruiksvriendelijk' },
  { icon: 'pen-tool', t: 'Zelf teksten en foto’s aanpassen' },
  { icon: 'bar-chart-3', t: 'Bezoekersstatistieken ingericht' },
  { icon: 'shield-check', t: 'Veilig opgezet, met updates' },
  { icon: 'search-check', t: 'Technische basis voor Google' },
  { icon: 'link-2', t: 'Te koppelen aan je systemen' },
  { icon: 'layout-template', t: 'Groeit mee met je bedrijf' },
]

const AANVRAGEN = [
  'Offerteaanvragen',
  'Boekingen',
  'Reserveringen',
  'Kennismakingsgesprekken',
  'Adviesgesprekken',
  'Proeflessen',
  'Contactaanvragen',
  'Terugbelverzoeken',
]

const KOPPELINGEN = ['CRM', 'Boekingssystemen', "Agenda's", 'WhatsApp', 'E-mailsoftware', 'Betaalsystemen']

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Wat kost een Conversie Website?',
    a: "Een Conversie Website begint vanaf € 2.500. De prijs hangt af van het aantal pagina's, de complexiteit en de extra functies die je nodig hebt. In de gratis website scan krijg je een eerlijke indicatie voor jouw situatie.",
  },
  {
    q: 'Wat is het verschil met een Starter Website?',
    a: "De Starter Website is compact: tot ongeveer 5 pagina's, gebouwd met vaste bouwblokken en met één feedbackronde. De Conversie Website is volledig maatwerk, met een strategie voor je doelgroep, je aanvragen en je vindbaarheid. Er zijn meerdere ontwerp- en feedbackrondes.",
  },
  {
    q: 'Waarom niet kiezen voor een goedkope webbouwer?',
    a: (
      <>
        Een goedkope website ziet er soms prima uit, maar denkt niet na over vertrouwen, gebruiksgemak en hoe bezoekers tot een aanvraag komen. Wij bouwen vanuit dat doel. Lees ook{' '}
        <Link to="/kennisbank/$slug" params={{ slug: 'freelance-webdesigner-of-webbureau' }}>
          freelancer of webbureau: wat past bij jou?
        </Link>
      </>
    ),
  },
  {
    q: 'Kan ik mijn website zelf beheren?',
    a: 'Ja. Teksten en foto’s pas je eenvoudig zelf aan. Je zit nooit vast aan één leverancier: de website blijft van jou.',
  },
  {
    q: 'Kan mijn website gekoppeld worden aan bestaande software?',
    a: "In de meeste gevallen wel. Denk aan CRM-systemen, boekingssystemen, agenda's, WhatsApp, e-mailsoftware en betaalsystemen. Werk je met iets specifieks, dan kijken we samen wat mogelijk is.",
  },
  {
    q: 'Zit ik na livegang ergens aan vast?',
    a: 'Nee. Na livegang kies je zelf: onderhoud, online marketing of het beheer in eigen hand.',
  },
  {
    q: "Helpen jullie ook met foto's, video's of een huisstijl?",
    a: "Ja. We kunnen helpen met fotografie op locatie, bedrijfsvideo's en dronebeelden. Heb je nog geen sterke huisstijl, dan helpen we samen met gespecialiseerde ontwerpers met een logo, kleuren en lettertypes.",
  },
  {
    q: 'Hoe begin ik?',
    a: 'Vraag het gratis homepageontwerp aan. Je ziet dan meteen hoe een homepage voor jouw bedrijf eruit kan zien. Daarna bespreken we samen of en hoe we verder gaan.',
  },
]

function ConversieWebsite() {
  return (
    <main id="top" data-page="conversie">
      <section className="section hero" id="ontwerp" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>Conversie Website</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Kerndienst
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Website laten maken gericht op <em>aanvragen en boekingen</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Een conversiegerichte website is gebouwd om bezoekers naar een aanvraag of boeking te brengen. Voor bedrijven die leven van aanvragen, reserveringen en boekingen.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Volledig maatwerk, vanaf € 2.500</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Live in gemiddeld 4 tot 8 weken</span>
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

      <section className="section" data-theme="light" data-screen-label="Het probleem">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Het probleem</span>
              <h2 className="h2">
                De meeste websites <em>staan</em> alleen maar online.
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Veel websites zien er prima uit, maar helpen bezoekers nergens naartoe. Het zijn zelden grote dingen: het zijn kleine momenten waarop een bezoeker afhaakt.
              </p>
              <Link className="tlink" to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>
                Lees waar een website aanvragen laat weglekken <span className="arr">&rarr;</span>
              </Link>
            </div>
          </Reveal>
          <ul className="cw-problems">
            {PROBLEMEN.map((x, i) => (
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
              Een goede website begint met <em>begrijpen.</em> Niet met bouwen.
            </h2>
            <p className="lead">We beginnen niet bij het ontwerp, maar bij je bedrijf, je klanten en wat een bezoeker nodig heeft om in actie te komen.</p>
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

      <section className="section" data-theme="paper" data-screen-label="Wat je krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je krijgt</span>
            <h2 className="h2">
              Gebouwd voor jouw soort <em>aanvraag.</em>
            </h2>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Standaard in elke Conversie Website</h3>
              <ul className="cw-incl">
                {INBEGREPEN.map((x) => (
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
              <h3>Waar je bezoeker naartoe gaat</h3>
              <p>We ontwerpen elke pagina naar de aanvraag die jij wilt binnenkrijgen.</p>
              <ul className="cw-chips">
                {AANVRAGEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3 className="cw-card__sub">Gekoppeld aan hoe je werkt</h3>
              <p>Aanvragen komen direct terecht waar jij ze wilt hebben.</p>
              <ul className="cw-chips cw-chips--line">
                {KOPPELINGEN.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Prijs">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Investering</span>
            <h2 className="h2">Eén keer goed bouwen. Daarna kies je zelf.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Conversie Website</span>
              <p className="cw-prijs__bedrag">vanaf € 2.500</p>
              <p className="cw-prijs__uitleg">De prijs hangt af van het aantal pagina's en de functies die je nodig hebt. Je krijgt vooraf een duidelijke prijs.</p>
              <ul className="hero__ticks">
                <li><Icon name="check" className="ck" /><span>Strategie, ontwerp en bouw op maat</span></li>
                <li><Icon name="check" className="ck" /><span>Meerdere ontwerp- en feedbackrondes</span></li>
                <li><Icon name="check" className="ck" /><span>Alles wat standaard inbegrepen is</span></li>
              </ul>
              <a className="btn btn-primary" href="#ontwerp">
                Vraag je gratis homepageontwerp aan
              </a>
            </Reveal>
            <div className="cw-prijs__na">
              <Reveal as="div" className="cw-card reveal" data-d="1">
                <span className="cw-card__tag">Na livegang</span>
                <h3>Online marketing</h3>
                <p>Elke maand blogs en landingspagina's op de vragen van jouw klanten. Wil je sneller aanvragen? Dan zetten we ook Google Ads in.</p>
                <p className="cw-card__prijs">SEO-pakket: vanaf € 75 per maand</p>
                <Link className="tlink" to="/diensten/seo">Bekijk de dienst <span className="arr">&rarr;</span></Link>
              </Reveal>
              <Reveal as="div" className="cw-card reveal" data-d="2">
                <span className="cw-card__tag">Na livegang</span>
                <h3>Onderhoud &amp; Support</h3>
                <p>Updates, beveiliging en back-ups geregeld. Gaat er toch iets mis, dan heb je direct iemand die het oplost.</p>
                <p className="cw-card__prijs">vanaf € 50 per maand</p>
              </Reveal>
              <Reveal as="p" className="cw-prijs__extra reveal" data-d="2">
                Kleiner beginnen? Bekijk de <Link to="/diensten/starter-website">Starter Website</Link>, vanaf € 1.500.
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="werk" data-theme="paper" data-screen-label="Cases">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Werk van MegaOnline</span>
            <h2 className="h2">
              Echte uitdagingen. <em>Echt</em> opgelost.
            </h2>
          </Reveal>
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="Q-Team Solutions" />
              </div>
              <div className="case__body">
                <h3 className="case__name">Q-Team Solutions</h3>
                <div className="case__meta">
                  <span className="tag">B2B</span>
                  <span className="tag">Softwarebedrijf</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>De website liet onvoldoende zien welke apps het bedrijf ontwikkelt en welke waarde die bieden aan klanten.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>We brachten de propositie terug naar een duidelijke boodschap en bouwden een structuur die bezoekers sneller naar de juiste informatie leidt.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="GuestRoomUtrecht" />
              </div>
              <div className="case__body">
                <h3 className="case__name">GuestRoomUtrecht</h3>
                <div className="case__meta">
                  <span className="tag">B2C</span>
                  <span className="tag">Bed &amp; Breakfast</span>
                </div>
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>De website bracht de sfeer van het verblijf onvoldoende over.</p>
                  </div>
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
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

      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd hoe jouw homepage eruit kan zien?
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            We ontwerpen gratis een homepage voor je bedrijf. Zo zie je wat we voor je kunnen maken, zonder verplichtingen.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#ontwerp">
            Vraag je gratis homepageontwerp aan
          </Reveal>
        </div>
      </section>
    </main>
  )
}
