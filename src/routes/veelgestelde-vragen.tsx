import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { CTA_SCAN } from '@/lib/cta'
import '@/styles/pages/veelgestelde-vragen.css'

export const Route = createFileRoute('/veelgestelde-vragen')({
  head: () => ({
    meta: [
      { title: "Veelgestelde vragen | MegaOnline.io" },
      { name: 'description', content: "Antwoord op de meestgestelde vragen over websites bij MegaOnline: wat het kost, hoe lang een project duurt, hoe je meer aanvragen krijgt, techniek en beheer." },
      { property: 'og:title', content: "Veelgestelde vragen | MegaOnline.io" },
      { property: 'og:description', content: "Antwoord op de meestgestelde vragen over websites bij MegaOnline: wat het kost, hoe lang een project duurt, hoe je meer aanvragen krijgt, techniek en beheer." },
      { property: 'og:url', content: "https://megaonline.io/veelgestelde-vragen" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/veelgestelde-vragen" },
    ],
  }),
  staticData: { lightNav: true },
  component: VeelgesteldeVragen,
})

function VeelgesteldeVragen() {
  return (
    <main id="top" data-page="veelgestelde-vragen">
      <section className="section faqp" data-theme="light" data-screen-label="Veelgestelde vragen">
        <div className="wrap">
          <div className="faqp__head">
            <Reveal as="div" className="crumb reveal">
              <Link to="/" hash="top">Home</Link>
              <span className="sep">/</span>
              <Link to="/kennisbank">Kennisbank</Link>
              <span className="sep">/</span>
              <b>Veelgestelde vragen</b>
            </Reveal>
            {' '}
            <Reveal as="h1" className="reveal" data-d="1" style={{ marginTop: "18px" }}>Veelgestelde vragen</Reveal>
            {' '}
            <Reveal as="p" className="faqp__lead reveal" data-d="2">
              De vragen die MegaOnline het vaakst krijgt, op een rij. Staat jouw vraag er niet bij? Neem gerust
              {' '}
              <Link to="/contact" style={{ color: "var(--accent-text)" }}>contact</Link>
              {' '}
              op, je krijgt altijd eerlijk antwoord.
            </Reveal>
            {' '}
            <Reveal as="nav" className="faqp__nav reveal" data-d="2" aria-label="Categorieën">
              <a className="faqp__chip" href="#algemeen">
                <Icon name="info" />
                Algemeen
              </a>
              {' '}
              <a className="faqp__chip" href="#prijs">
                <Icon name="euro" />
                Prijs
              </a>
              {' '}
              <a className="faqp__chip" href="#traject">
                <Icon name="calendar-clock" />
                Traject
              </a>
              {' '}
              <a className="faqp__chip" href="#resultaat">
                <Icon name="trending-up" />
                Resultaat & SEO
              </a>
              {' '}
              <a className="faqp__chip" href="#techniek">
                <Icon name="settings" />
                Techniek & beheer
              </a>
            </Reveal>
          </div>
          {' '}
          <div className="faqp__cat" id="algemeen">
            <Reveal as="div" className="faqp__cat-head reveal">
              <span className="iconbox">
                <Icon name="info" />
              </span>
              {' '}
              <h2>Algemeen</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Voor wie is MegaOnline?" className="reveal">
                  MegaOnline werkt vooral voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen, van activiteitenbedrijven en verhuurders tot dienstverleners, horeca en non-profits. Wat ze gemeen hebben: hun website mag niet alleen mooi zijn, hij moet werk verzetten.
              </Qa>
              {' '}
              <Qa question="Wat maakt MegaOnline anders?" className="reveal">
                  MegaOnline bouwt geen websites om het bouwen, maar om het resultaat. Je werkt direct met wie de strategie bepaalt én je site bouwt. Geen tussenlagen, geen accountmanagers. MegaOnline denkt mee over je bedrijf, niet alleen over je pagina’s.
              </Qa>
              {' '}
              <Qa question="Werkt MegaOnline ook landelijk?" className="reveal">
                  Ja. MegaOnline werkt met klanten door heel Nederland. Het meeste verloopt online of telefonisch. Waar het nodig is, plant MegaOnline een gesprek op locatie of via videocall.
              </Qa>
            </div>
          </div>
          {' '}
          <div className="faqp__cat" id="prijs">
            <Reveal as="div" className="faqp__cat-head reveal">
              <span className="iconbox">
                <Icon name="euro" />
              </span>
              {' '}
              <h2>Wat kost een website?</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Wat kost een website bij MegaOnline?" className="reveal">
                  Dat hangt af van wat je nodig hebt. De Starter Website begint vanaf €1.500 en is bedoeld voor starters die voordelig en snel online willen. Een Conversie Website wordt geprijsd op basis van omvang, strategie en koppelingen. In een gratis website scan brengt MegaOnline het vrijblijvend voor je in kaart.
              </Qa>
              {' '}
              <Qa question="Waarom is de Starter Website goedkoper?" className="reveal">
                  Omdat de website compacter is: tot ongeveer 5 pagina's, één feedbackronde en een kortere voorbereiding. Ontwerp en bouw blijven maatwerk. Minder uren betekent een lagere prijs.
              </Qa>
              {' '}
              <Qa question="Krijg ik vooraf een duidelijke prijs?" className="reveal">
                  Ja. Je krijgt vooraf een heldere offerte zonder kleine lettertjes. Bij de Starter Website werkt MegaOnline met een vaste prijs. Bij een Conversie Website maakt MegaOnline de opbouw en investering vooraf inzichtelijk.
              </Qa>
              {' '}
              <Qa question="Zijn er maandelijkse kosten?" className="reveal">
                  Hosting en onderhoud kun je optioneel bij MegaOnline afnemen, maar dat is geen verplichting. MegaOnline bespreekt vooraf met je wat past bij jouw situatie, zodat je niet voor verrassingen komt te staan.
              </Qa>
            </div>
          </div>
          {' '}
          <div className="faqp__cat" id="traject">
            <Reveal as="div" className="faqp__cat-head reveal">
              <span className="iconbox">
                <Icon name="calendar-clock" />
              </span>
              {' '}
              <h2>Hoe verloopt een project?</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Wat bepaalt de planning van een website?" className="reveal">
                  Een Starter Website is compacter dan een Conversie Website. De planning hangt af van de omvang en het aantal feedbackrondes. MegaOnline maakt vooraf een heldere planning.
              </Qa>
              {' '}
              <Qa question="Hoe verloopt het traject?" className="reveal">
                  Kort gezegd: kennismaking, aanleveren van teksten en beeld, bouwen, een feedbackronde en livegang. Bij een Conversie Website zitten daar meer ontwerp- en afstemmingsrondes in. Je weet steeds hoe je project ervoor staat en wat de volgende stap is.
              </Qa>
              {' '}
              <Qa question="Wat heb je van mij nodig?" className="reveal">
                  Vooral je teksten, je logo en een paar foto’s. Waar dat nodig is, denkt MegaOnline mee over de inhoud. Hoe sneller je aanlevert, hoe eerder MegaOnline verder kan.
              </Qa>
              {' '}
              <Qa question="Kan ik later nog dingen aanpassen?" className="reveal">
                  Zeker. MegaOnline bouwt je website zo op dat je teksten en foto’s eenvoudig zelf kunt bijwerken. Grotere uitbreidingen pakt MegaOnline in overleg op.
              </Qa>
            </div>
          </div>
          {' '}
          <div className="faqp__cat" id="resultaat">
            <Reveal as="div" className="faqp__cat-head reveal">
              <span className="iconbox">
                <Icon name="trending-up" />
              </span>
              {' '}
              <h2>Hoe krijg je meer aanvragen?</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Hoe zorgt een website voor meer aanvragen?" className="reveal">
                  Door bezoekers gericht te begeleiden naar één duidelijke volgende stap: een aanvraag, reservering of boeking. MegaOnline werkt aan vertrouwen, een heldere structuur en sterke call-to-actions, zodat meer bezoekers ook echt klant worden. Lees over <Link to="/kennisbank/$slug" params={{ slug: 'website-levert-geen-aanvragen-op' }}>zes plekken waar een website aanvragen laat liggen</Link>.
              </Qa>
              {' '}
              <Qa question="Doet MegaOnline ook SEO?" className="reveal">
                  Ja. MegaOnline zorgt voor een gezonde SEO-basis en kan verder gaan met lokale vindbaarheid, sterke landingspagina’s en techniek. MegaOnline stuurt daarbij op de juiste bezoekers, mensen die actief zoeken naar wat jij biedt, in plaats van op ijdele bezoekersaantallen.
              </Qa>
              {' '}
              <Qa question="Wanneer is een betere website merkbaar?" className="reveal">
                  Een betere website helpt bezoekers sneller hun weg naar contact te vinden. Vindbaarheid bouwt zich op de lange termijn op. MegaOnline stuurt op gestage, duurzame groei.
              </Qa>
              {' '}
              <Qa question="Kan MegaOnline mijn bestaande website verbeteren?" className="reveal">
                  Vaak wel. Met Website Optimalisatie verbetert MegaOnline structuur, snelheid, formulieren, de mobiele ervaring en de SEO-basis, zonder je site helemaal opnieuw te bouwen.
              </Qa>
            </div>
          </div>
          {' '}
          <div className="faqp__cat" id="techniek">
            <Reveal as="div" className="faqp__cat-head reveal">
              <span className="iconbox">
                <Icon name="settings" />
              </span>
              {' '}
              <h2>Techniek & beheer</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Kan ik de website zelf beheren?" className="reveal">
                  Ja. MegaOnline bouwt je website zo op dat je teksten, foto’s en nieuws eenvoudig zelf kunt aanpassen, ook zonder technische kennis.
              </Qa>
              {' '}
              <Qa question="Is mijn website veilig en snel?" className="reveal">
                  Daar zorgt MegaOnline voor. Je website wordt snel, veilig en stabiel opgeleverd, en is volledig mobielvriendelijk, want de meeste bezoekers komen via hun telefoon.
              </Qa>
              {' '}
              <Qa question="Kan MegaOnline koppelen met mijn systemen?" className="reveal">
                  Vaak wel. MegaOnline koppelt je website aan bijvoorbeeld je CRM, boekingssysteem, agenda, betaaldienst of WhatsApp, zodat aanvragen automatisch op de juiste plek belanden.
              </Qa>
              {' '}
              <Qa question="Blijft de website van mij?" className="reveal">
                  Ja. Na oplevering en betaling is de website van jou. Je zit nooit vast aan één leverancier.
              </Qa>
            </div>
          </div>
          {' '}
          <Reveal as="div" className="shead shead--center reveal faqp__cta">
            <span className="label">Nog een vraag?</span>
            {' '}
            <h2 className="display">MegaOnline denkt graag met je mee.</h2>
            {' '}
            <p className="lead">
              Geen verkooppraat, gewoon eerlijk advies. Plan een vrijblijvende kennismaking of vraag een gratis website scan aan.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/gratis-websitescan">
                {CTA_SCAN}
              </Link>
              {' '}
              <Link className="tlink" to="/contact">
                Plan een kennismaking
                {' '}
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
