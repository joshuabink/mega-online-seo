import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/concepten.css'

const TITLE = 'NS concept: abonnementen als hoofddoel | MegaOnline'
const DESCRIPTION = 'Een concept op eigen initiatief voor NS, met abonnementen als belangrijkste doel van de homepage.'

export const Route = createFileRoute('/concepten/$slug')({
  beforeLoad: ({ params }) => {
    if (params.slug !== 'ns') throw notFound()
  },
  head: ({ params }) => {
    if (params.slug !== 'ns') {
      return { meta: [{ title: 'Concept niet gevonden | MegaOnline' }, { name: 'robots', content: 'noindex' }] }
    }
    return {
      meta: [
        { title: TITLE },
        { name: 'description', content: DESCRIPTION },
        { property: 'og:title', content: TITLE },
        { property: 'og:description', content: DESCRIPTION },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: 'https://megaonline.io/concepten/ns' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [{ rel: 'canonical', href: 'https://megaonline.io/concepten/ns' }],
    }
  },
  component: NsConcept,
})

function BrowserImage({ src, alt, phone = false }: { src: string; alt: string; phone?: boolean }) {
  return (
    <figure className={`concept-browser${phone ? ' concept-browser--phone' : ''}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

function NsConcept() {
  return (
    <main id="top" data-page="concept-ns">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero NS concept">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <Link to="/concepten">Concepten</Link>
                <span className="sep">/</span>
                <b>NS</b>
              </Reveal>
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">Concept · eigen initiatief</span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Wat als NS abonnementen het belangrijkste doel van de site maakt?
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Dit is geen opdracht. Het is een vraag die ik mezelf stelde: wat verandert er aan een website als je één doel kiest en de hele pagina daarop afstemt? Bij NS koos ik voor abonnementen. Dit is hoe ik het zou aanpakken.
              </Reveal>
            </div>
          </div>
          <Reveal as="div" className="concept-hero__image reveal" data-d="2">
            <BrowserImage src="/images/ns-concept-hero.webp" alt="Concept voor de NS-homepage met reisplanner en abonnementen als hoofddoel" />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" data-theme="paper" data-screen-label="Waar ik begon">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Waar ik begon</h2>
          </Reveal>
          <Reveal as="div" className="concept-copy reveal" data-d="1">
            <p>Op ns.nl vind je de abonnementen via het menu, netjes ingedeeld per doelgroep. Toen ik keek stond er op de homepage één aanbieding uitgelicht. Wie wil weten welk abonnement bij hem past, moet dus zelf gaan zoeken.</p>
            <p>Terwijl iemand op de homepage al aan het nadenken is over reizen. Hij plant een rit, ziet wat het kost en vraagt zich af of het goedkoper kan. Dat is het moment. Mijn vraag was: wat als de homepage dat antwoord meteen geeft?</p>
          </Reveal>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Welke keuzes ik maakte">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Welke keuzes ik maakte</h2>
          </Reveal>

          <div className="concept-layout">
            <Reveal as="div" className="concept-choice reveal">
              <h3>Keuze 1 · Kiezen op wie je bent, niet op productnaam.</h3>
              <p>Kids Vrij, Dal Voordeel, Traject Vrij: voor de meeste mensen zeggen die namen niets. Daarom begint de pagina direct onder de reisplanner met één vraag: voor wie reis je? Vier perronborden, van spoor 1 tot spoor 4. Kids, jongeren, 65-plussers en dagelijks reizen. Op elk bord staat eerst het voordeel in grote letters, zoals "Gratis meereizen" of "Onbeperkt op je traject". De productnaam komt pas daarna.</p>
            </Reveal>
            <Reveal as="div" className="reveal" data-d="1">
              <BrowserImage src="/images/ns-concept-sporen.webp" alt="Vier perronborden die NS-abonnementen indelen voor kids, jongeren, 65-plussers en dagelijkse reizigers" />
            </Reveal>
          </div>

          <div className="concept-layout">
            <div className="concept-stack">
              <Reveal as="div" className="concept-choice reveal">
                <h3>Keuze 2 · Eerst uitleggen waar alles om draait.</h3>
                <p>Bijna elk abonnement hangt af van één begrip: het daluur. Dat staat bij de meeste uitleg in een bijzin. Hier staat het als een balk over de hele dag, met de spits en de daluren in kleur. Wie in één oogopslag ziet wanneer hij goedkoper reist, kan pas echt kiezen.</p>
              </Reveal>
              <Reveal as="div" className="concept-choice reveal" data-d="1">
                <h3>Keuze 3 · Prijzen staan er gewoon.</h3>
                <p>Elke abonnementskaart toont de prijs per maand. Daarboven staat in gewone taal voor wie hij is: af en toe reizen, vooral in het weekend, elke dag ook in de spits. Eén kaart is uitgelicht, zodat wie twijfelt een vertrekpunt heeft. Wie moet doorklikken om te zien wat iets kost, haakt eerder af.</p>
              </Reveal>
            </div>
            <Reveal as="div" className="reveal" data-d="2">
              <BrowserImage src="/images/ns-concept-abonnementen.webp" alt="Overzicht van NS-abonnementen met daluren, prijzen en voordelen duidelijk in beeld" />
            </Reveal>
          </div>

          <div className="concept-layout concept-layout--mobile">
            <Reveal as="div" className="concept-choice reveal">
              <h3>Keuze 4 · Het voelt als de trein.</h3>
              <p>De stationsklok in de reisplanner loopt echt, met de rode secondewijzer die even wacht op de twaalf. Tussen de secties rijdt een trein het station binnen. Kleine dingen, maar ze maken dat de site vertrouwd voelt voordat je ook maar iets hebt gelezen. Vertrouwen komt vóór techniek, ook bij een organisatie die iedereen al kent.</p>
            </Reveal>
            <Reveal as="div" className="reveal" data-d="1">
              <BrowserImage src="/images/ns-concept-mobiel.webp" alt="Mobiele uitwerking van het NS-concept met reisplanner en stationsklok" phone />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="paper" data-screen-label="Wat dit zegt over jouw website">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat dit zegt over jouw website</h2>
          </Reveal>
          <Reveal as="div" className="concept-copy reveal" data-d="1">
            <p>NS is groot, maar het principe is hetzelfde voor een kartbaan, een verhuurbedrijf of een installateur. De meeste websites proberen alles tegelijk te doen. Daardoor helpen ze niemand echt verder.</p>
            <p>Kies één doel. Zoek het moment waarop een bezoeker er het dichtst bij is. Zet de volgende stap precies daar neer, in zijn woorden en met de prijs erbij.</p>
            <p><Link className="btn btn-primary" to="/gratis-websitescan">Wil je weten waar dat moment op jouw site zit? Ik kijk er kosteloos naar en stuur je de punten die ik zie.</Link></p>
            <p className="concept-disclaimer">Dit concept is gemaakt op eigen initiatief en niet in opdracht van of in samenwerking met NS. De naam NS is eigendom van NS. Prijzen zoals op ns.nl op 27 september 2026. Het ontwerp is een studie en geen bestaande of geplande website.</p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}