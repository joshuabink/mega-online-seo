import { type ReactNode } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { FaqSchema } from '@/components/FaqSchema'
import { Reveal } from '@/components/Reveal'
import { AanvraagKort } from '@/components/AanvraagKort'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/dienst.css'

const TITLE = 'WordPress website optimaliseren: sneller en overzichtelijker | MegaOnline'
const DESC =
  'Is je WordPress-site traag of is de backend een doolhof van plugins en velden? We maken hem sneller, ruimen de backend op en richten hem in op hoe jij werkt.'
const URL = 'https://megaonline.io/diensten/wordpress-optimalisatie'

export const Route = createFileRoute('/diensten/wordpress-optimalisatie')({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: 'description', content: DESC },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESC },
      { property: 'og:url', content: URL },
    ],
    links: [{ rel: 'canonical', href: URL }],
  }),
  component: WordpressOptimalisatie,
})

const SIGNALEN = [
  { t: 'Pagina’s laden traag', p: 'Vooral op de telefoon wacht een bezoeker te lang. Een deel haakt af voordat hij ziet wat je doet.' },
  { t: 'Tientallen plugins', p: 'Niemand weet nog precies wat ze allemaal doen. Verwijderen durft ook niemand.' },
  { t: 'Updates voelen als een gok', p: 'Elke update kan iets breken, dus blijven ze liggen. Dat is precies hoe sites onveilig worden.' },
  { t: 'Het dashboard staat vol', p: 'Meldingen, menu’s en knoppen die je nooit gebruikt. Wat je wel zoekt, kost tijd om te vinden.' },
  { t: 'Bewerken is een zoektocht', p: 'Een tekst aanpassen betekent door de opmaak heen klikken en hopen dat er niets verschuift.' },
  { t: 'Alles is een losse pagina', p: 'Vacatures, projecten of diensten worden telkens met de hand gekopieerd. Daardoor ziet geen pagina er hetzelfde uit.' },
]

const SNELHEID: { icon: string; t: string }[] = [
  { icon: 'images', t: 'Afbeeldingen in het juiste formaat en compact opgeslagen' },
  { icon: 'zap', t: 'Caching, zodat pagina’s niet bij elk bezoek opnieuw worden opgebouwd' },
  { icon: 'blocks', t: 'Scripts en stijlen alleen laden op de pagina’s die ze nodig hebben' },
  { icon: 'layout', t: 'Een lichtere opbouw van zware pagina’s' },
  { icon: 'settings', t: 'Een database zonder oude revisies en restanten van verwijderde plugins' },
  { icon: 'smartphone', t: 'Testen op de telefoon, want daar komen de meeste bezoekers binnen' },
]

const BACKEND: { icon: string; t: string }[] = [
  { icon: 'list-checks', t: 'Elke plugin nagelopen: houden, vervangen of verwijderen' },
  { icon: 'boxes', t: 'Vaste inhoudstypes voor vacatures, projecten, diensten of cases' },
  { icon: 'eye', t: 'Functies die je niet gebruikt uitgezet' },
  { icon: 'list-ordered', t: 'Het menu gesorteerd, met alleen wat jij nodig hebt' },
  { icon: 'shield-check', t: 'Updates bijgewerkt en de basis weer veilig' },
  { icon: 'user-check', t: 'Rollen zo ingesteld dat iedereen alleen ziet wat hij nodig heeft' },
]

const LOS = [
  'Je ontwerpt een nieuwe pagina voor elke vacature of elk project',
  'Elke pagina ziet er net iets anders uit',
  'Een kleine wijziging moet je op tientallen plekken doorvoeren',
  'Een overzicht of filter bouwen is handwerk',
]

const VAST = [
  'Eén template, één keer ontworpen',
  'Je vult alleen velden in, zoals functie, uren en locatie',
  'Pas je het template aan, dan verandert elke pagina mee',
  'Overzichten en filters vullen zich vanzelf',
]

const INGEBOUWD = [
  'Een sitemap voor Google',
  'Afbeeldingen pas laden als je ernaartoe scrolt',
  'Een site-icoon in de browsertab',
  'Video’s van YouTube of Vimeo insluiten',
  'Herbruikbare blokken voor terugkerende onderdelen',
  'Eigen CSS voor kleine aanpassingen in de opmaak',
]

const STAPPEN = [
  { t: 'Inventariseren', p: 'We meten hoe snel je site nu is en lopen elke plugin, elk thema en elke instelling na.' },
  { t: 'Back-up en testkopie', p: 'Voordat we iets aanraken staat er een back-up. Grote wijzigingen testen we eerst op een kopie van je site.' },
  { t: 'Opruimen', p: 'Overbodige plugins gaan eruit, dubbele functies worden samengevoegd en wat blijft wordt bijgewerkt.' },
  { t: 'Inrichten', p: 'We zetten de inhoud in vaste types met heldere velden, zodat bewerken voortaan logisch voelt.' },
  { t: 'Versnellen en opleveren', p: 'We meten opnieuw, laten je het verschil zien en leggen uit hoe je de nieuwe backend gebruikt.' },
]

const PLUGIN = [
  'Gebruikersnamen afgeschermd, zodat niemand ze van buitenaf kan opvragen',
  'Onnodige scripts en functies die WordPress standaard meelaadt uitgezet',
  'Het menu in je eigen volgorde, met kopjes en zonder wat je niet gebruikt',
  'Meldingen van andere plugins gebundeld op één plek',
  'Een inzichtenpagina met bezoekers, zoekprestaties en snelheid',
  'Een sitecheck die laat zien wat er nog openstaat en waar je het oplost',
]

const OPNIEUW = [
  'De site draait op een thema of paginabouwer die niet meer wordt onderhouden',
  'De opbouw is zo verweven met plugins dat opruimen meer kost dan opnieuw bouwen',
  'De structuur van de site past niet meer bij je bedrijf',
  'De site ziet er verouderd uit en wekt daardoor te weinig vertrouwen',
]

const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: 'Waarom is mijn WordPress-site zo traag?',
    a: 'Meestal is het een optelsom: te grote afbeeldingen, plugins die op elke pagina hun eigen scripts laden, een zware paginabouwer, geen caching en een database vol oude revisies. Zelden is het één ding. Daarom meten we eerst waar de tijd echt in gaat voordat we iets aanpassen.',
  },
  {
    q: 'Hoeveel plugins is te veel?',
    a: 'Er is geen magisch getal, maar elke plugin die je niet nodig hebt is er één te veel. Hij laadt code, vraagt om updates en kan botsen met andere plugins. Veel sites draaien tientallen plugins voor dingen die WordPress zelf al kan. Wat telt is wat een plugin doet, of hij nog wordt onderhouden en of iets anders hetzelfde al doet.',
  },
  {
    q: 'Wat is een custom post type?',
    a: 'Een vast inhoudstype naast gewone pagina’s en berichten. Denk aan een type Vacature met vaste velden voor functie, uren en locatie. Je vult alleen de velden in en de opmaak regelt zich vanzelf. Elke vacature ziet er dan hetzelfde uit en je kunt ze makkelijk filteren of in een overzicht tonen.',
  },
  {
    q: 'Gaat er niets kapot als jullie plugins verwijderen?',
    a: 'Daarom maken we eerst een back-up en testen we grote wijzigingen op een kopie van je site. Pas als alles daar werkt, zetten we het door op de live site. Je website blijft in de tussentijd gewoon online.',
  },
  {
    q: 'Werken jullie ook aan WordPress-sites die iemand anders heeft gebouwd?',
    a: 'Ja, dat is juist het meest voorkomende geval. We kijken eerst wat er staat en hoe het in elkaar zit. Daarna bepalen we wat opruimen oplevert en wat je beter kunt laten staan.',
  },
  {
    q: 'Kan ik zelf alvast iets doen?',
    a: 'Ja. Open in je dashboard de lijst met plugins en kijk welke uitgeschakeld staan. Een plugin die al maanden uit staat gebruik je niet. Verwijder die, nadat je een back-up hebt gemaakt. Kijk daarna bij elke actieve plugin wanneer hij voor het laatst is bijgewerkt. Is dat langer dan een jaar geleden, dan is het tijd voor een vervanger.',
  },
]

function WordpressOptimalisatie() {
  return (
    <main id="top" data-page="wordpress-optimalisatie" data-dienst>
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <b>WordPress Optimalisatie</b>
              </Reveal>
              <Reveal as="p" className="v2-eyebrow reveal">
                Voor wie een WordPress-site heeft
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                WordPress website laten <em>optimaliseren</em>
              </Reveal>
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Een snellere site voor je bezoekers en een opgeruimde backend voor jezelf. We schrappen plugins die je niet nodig hebt, richten je inhoud in met vaste templates en zetten uit wat je niet gebruikt.
              </Reveal>
              <Reveal as="ul" className="hero__ticks reveal" data-d="3">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Eerst meten, dan pas aanpassen</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Back-up en testkopie vooraf</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Ook voor sites die we niet zelf bouwden</span>
                </li>
              </Reveal>
            </div>
            <AanvraagKort soort="scan" className="hero__form reveal" />
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Signalen">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Herkenbaar?</span>
              <h2 className="h2">
                Een WordPress-site groeit <em>dicht.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Elke nieuwe wens kreeg een plugin. Elke bouwer liet iets achter. Na een paar jaar is de site traag voor je bezoekers en onoverzichtelijk voor jezelf. Dat ligt niet aan WordPress, maar aan wat er in de loop der jaren is bijgekomen.
              </p>
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

      <section className="section" data-theme="paper" data-screen-label="Wat we doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we aanpakken</span>
            <h2 className="h2">
              Sneller voor je bezoeker. <em>Rustiger</em> voor jou.
            </h2>
            <p className="lead">
              Een trage site kost je aanvragen, een rommelige backend kost je tijd. We pakken allebei aan, want ze hebben vaak dezelfde oorzaak.
            </p>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <h3>Snelheid</h3>
              <ul className="cw-incl">
                {SNELHEID.map((x) => (
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
              <h3>De backend opruimen</h3>
              <ul className="cw-incl">
                {BACKEND.map((x) => (
                  <li key={x.t}>
                    <span className="cw-incl__ico">
                      <Icon name={x.icon} />
                    </span>
                    {x.t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Inhoudstypes">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Inhoud inrichten</span>
              <h2 className="h2">
                Eén keer ontwerpen. <em>Daarna alleen invullen.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Op veel WordPress-sites is alles een losse pagina. Voor elke nieuwe vacature, elk project of elke dienst wordt een bestaande pagina gekopieerd en aangepast. We zetten zulke inhoud in een vast inhoudstype, in WordPress een custom post type genoemd. Je ontwerpt het template één keer en vult daarna alleen nog velden in.
              </p>
            </div>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <span className="cw-card__tag">Elke keer een nieuwe pagina</span>
              <ul className="cw-list">
                {LOS.map((x) => (
                  <li key={x}>
                    <Icon name="info" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Met een vast inhoudstype</span>
              <ul className="cw-list">
                {VAST.map((x) => (
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

      <section className="section" data-theme="paper" data-screen-label="Plugins">
        <div className="wrap">
          <Reveal as="div" className="v2-head reveal">
            <div className="shead">
              <span className="label">Plugins opruimen</span>
              <h2 className="h2">
                Je hebt minder plugins nodig <em>dan je denkt.</em>
              </h2>
            </div>
            <div className="v2-head__side">
              <p>
                Elke plugin laadt extra code, vraagt om updates en is een plek waar iets mis kan gaan. Hoe meer plugins, hoe trager en kwetsbaarder je site wordt. Veel kleine functies zitten al in WordPress zelf. Je moet alleen weten waar.
              </p>
            </div>
          </Reveal>
          <div className="cw-krijgt">
            <Reveal as="div" className="cw-card reveal">
              <span className="cw-card__tag">Hier heb je geen plugin voor nodig</span>
              <ul className="cw-list">
                {INGEBOUWD.map((x) => (
                  <li key={x}>
                    <Icon name="check" className="ck" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <h3>Zo bepalen we wat blijft</h3>
              <p>Per plugin kijken we wat hij doet, of WordPress dat zelf al kan, of een andere plugin hetzelfde doet en of hij nog wordt onderhouden. Wat overblijft is een korte lijst die je kunt uitleggen.</p>
              <h3 className="cw-card__sub">Een vuistregel</h3>
              <p>Installeer geen plugin voor iets dat je één keer instelt. Zoek eerst of WordPress het zelf kan.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De aanpak</span>
            <h2 className="h2">
              Eerst weten wat er staat. <em>Dan</em> pas opruimen.
            </h2>
            <p className="lead">Lukraak plugins uitzetten is de snelste manier om een site te breken. Daarom werken we in een vaste volgorde.</p>
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

      <section className="section" data-theme="light" data-screen-label="Beheerplugin">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Na het opruimen</span>
            <h2 className="h2">
              Een backend die <em>opgeruimd blijft.</em>
            </h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">De MegaOnline-beheerplugin</span>
              <p className="cw-prijs__uitleg">
                Opruimen is één keer werk. Opgeruimd houden is het echte doel. Daarom installeren we op de sites die we beheren onze eigen beheerplugin. Die vervangt een handvol losse plugins en houdt de backend rustig.
              </p>
              <p className="cw-prijs__uitleg">
                Je logt in en ziet wat je nodig hebt om je site bij te houden. Hoe je site ervoor staat zie je in je eigen dashboard, zonder in te loggen bij allerlei losse diensten.
              </p>
              <Link className="btn btn-primary" to="/diensten/website-optimalisatie">
                Meer over website optimalisatie
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Wat de plugin doet</span>
              <ul className="cw-list">
                {PLUGIN.map((x) => (
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

      <section className="section" data-theme="paper" data-screen-label="Eerlijk advies">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk advies</span>
            <h2 className="h2">Soms is opruimen niet genoeg.</h2>
          </Reveal>
          <div className="cw-prijs">
            <Reveal as="div" className="cw-prijs__main reveal" data-theme="dark">
              <span className="v2-eyebrow">Opruimen of opnieuw bouwen?</span>
              <p className="cw-prijs__uitleg">
                De meeste WordPress-sites zijn met opruimen en inrichten weer prima op orde. Soms zit het probleem dieper en is een nieuwe site de betere investering.
              </p>
              <p className="cw-prijs__uitleg">Dat zeggen we je eerlijk na de scan, voordat je ergens aan vastzit.</p>
              <Link className="btn btn-primary" to="/diensten/website-redesign">
                Bekijk Website Redesign
              </Link>
            </Reveal>
            <Reveal as="div" className="cw-card reveal" data-d="1">
              <span className="cw-card__tag">Opnieuw bouwen is slimmer als</span>
              <ul className="cw-list">
                {OPNIEUW.map((x) => (
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

      <section className="section" id="faq" data-theme="light" data-screen-label="FAQ">
        <div className="wrap cw-faq">
          <Reveal as="div" className="shead reveal">
            <span className="label">Veelgestelde vragen</span>
            <h2 className="h2">Wat je misschien nog wil weten</h2>
            <p className="cw-faq__mail">
              Staat je vraag er niet bij? Mail naar <a href="mailto:info@megaonline.io">info@megaonline.io</a>.
            </p>
          </Reveal>
          <FaqSchema>
            <div className="faq">
              {FAQ_ITEMS.map(({ q, a }) => (
                <Qa key={q} question={q} className="reveal">
                  {a}
                </Qa>
              ))}
            </div>
          </FaqSchema>
        </div>
      </section>

      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">
            Benieuwd wat er in je WordPress-site opgeruimd kan worden?
          </Reveal>
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis website scan aan. Ik kijk naar de snelheid en de opbouw van je site en stuur je de punten die ik zie.
          </Reveal>
          <Reveal as="a" className="btn btn-primary reveal" data-d="2" href="#scan">
            {CTA_SCAN}
          </Reveal>
        </div>
      </section>
    </main>
  )
}
