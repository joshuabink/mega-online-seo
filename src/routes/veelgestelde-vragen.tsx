import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
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
              <Link to="/" hash="top">Kennisbank</Link>
              <span className="sep">/</span>
              <b>Veelgestelde vragen</b>
            </Reveal>
            {' '}
            <Reveal as="h1" className="reveal" data-d="1" style={{ marginTop: "18px" }}>Veelgestelde vragen</Reveal>
            {' '}
            <Reveal as="p" className="faqp__lead reveal" data-d="2">
              De vragen die we het vaakst krijgen, op een rij. Staat jouw vraag er niet bij? Neem gerust
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
              <Qa question="Voor wie werken jullie?" className="reveal">
                  We werken vooral voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen, van activiteitenbedrijven en verhuurders tot dienstverleners, horeca en non-profits. Wat ze gemeen hebben: hun website mag niet alleen mooi zijn, hij moet werk verzetten.
              </Qa>
              {' '}
              <Qa question="Wat maakt MegaOnline anders?" className="reveal">
                  We bouwen geen websites om het bouwen, maar om het resultaat. Je werkt direct met de mensen die de strategie bepalen én je site bouwen, geen tussenlagen, geen accountmanagers. We denken mee over je bedrijf, niet alleen over je pagina’s.
              </Qa>
              {' '}
              <Qa question="Werken jullie ook landelijk?" className="reveal">
                  Ja. We werken met klanten door heel Nederland. Het meeste verloopt online of telefonisch, en waar het nodig is plannen we een gesprek op locatie of via videocall.
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
              <Qa question="Wat kost een website bij jullie?" className="reveal">
                  Dat hangt af van wat je nodig hebt. Onze Starter Website begint vanaf €1.500 en is bedoeld voor starters die voordelig en snel online willen. Een volledige Conversie Website is maatwerk en wordt geprijsd op basis van omvang, strategie en koppelingen. In een gratis websitescan brengen we het vrijblijvend voor je in kaart.
              </Qa>
              {' '}
              <Qa question="Waarom is de Starter Website goedkoper?" className="reveal">
                  Omdat we daarbij werken met beproefde, herbruikbare bouwblokken en een vaste opzet. Dat scheelt veel ontwerp- en bouwuren, en dat voordeel geven we door. De kwaliteit van de basis blijft hetzelfde, alleen het proces is sneller.
              </Qa>
              {' '}
              <Qa question="Krijg ik vooraf een duidelijke prijs?" className="reveal">
                  Ja. Je krijgt vooraf een heldere offerte zonder kleine lettertjes. Bij de Starter Website werken we met een vaste prijs; bij maatwerk maken we de opbouw en investering vooraf transparant inzichtelijk.
              </Qa>
              {' '}
              <Qa question="Zijn er maandelijkse kosten?" className="reveal">
                  Hosting en onderhoud kun je optioneel bij ons afnemen, maar dat is geen verplichting. We bespreken vooraf wat past bij jouw situatie, zodat je niet voor verrassingen komt te staan.
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
              <h2>Hoe lang duurt een project?</h2>
            </Reveal>
            {' '}
            <div className="faq">
              <Qa question="Hoe lang duurt het om een website te bouwen?" className="reveal">
                  Een Starter Website staat doorgaans binnen enkele weken live, omdat we met vaste bouwblokken werken. Een volledige maatwerk-website duurt langer, afhankelijk van omvang en het aantal feedbackrondes. We maken vooraf een heldere planning.
              </Qa>
              {' '}
              <Qa question="Hoe verloopt het traject?" className="reveal">
                  Kort gezegd: kennismaking, aanleveren van teksten en beeld, bouwen, een feedbackronde en livegang. Bij maatwerk zitten daar meer ontwerp- en afstemmingsrondes in. Je weet steeds waar we staan en wat de volgende stap is.
              </Qa>
              {' '}
              <Qa question="Wat heb je van mij nodig?" className="reveal">
                  Vooral je teksten, je logo en een paar foto’s. Waar dat nodig is, denken we mee over de inhoud. Hoe sneller je aanlevert, hoe vlotter we live kunnen.
              </Qa>
              {' '}
              <Qa question="Kan ik later nog dingen aanpassen?" className="reveal">
                  Zeker. We bouwen je website zo op dat je teksten en foto’s eenvoudig zelf kunt bijwerken. Grotere uitbreidingen pakken we in overleg op.
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
                  Door bezoekers gericht te begeleiden naar één duidelijke volgende stap: een aanvraag, reservering of boeking. We werken aan vertrouwen, een heldere structuur en sterke call-to-actions, zodat meer bezoekers ook echt klant worden.
              </Qa>
              {' '}
              <Qa question="Doen jullie ook SEO?" className="reveal">
                  Ja. We zorgen voor een gezonde SEO-basis en kunnen verder gaan met lokale vindbaarheid, sterke landingspagina’s en techniek. We sturen daarbij op de juiste bezoekers, mensen die actief zoeken naar wat jij biedt, in plaats van op ijdele bezoekersaantallen.
              </Qa>
              {' '}
              <Qa question="Hoe snel zie ik resultaat?" className="reveal">
                  Een betere website werkt vaak direct: bezoekers vinden sneller hun weg naar contact. SEO-resultaat bouwt zich op over weken tot maanden. We sturen op gestage, duurzame groei.
              </Qa>
              {' '}
              <Qa question="Kunnen jullie mijn bestaande website verbeteren?" className="reveal">
                  Vaak wel. Met onze Website Optimalisatie verbeteren we structuur, snelheid, formulieren, de mobiele ervaring en de SEO-basis, zonder dat je site helemaal opnieuw gebouwd hoeft te worden.
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
                  Ja. We bouwen je website zo op dat je teksten, foto’s en nieuws eenvoudig zelf kunt aanpassen, ook zonder technische kennis.
              </Qa>
              {' '}
              <Qa question="Is mijn website veilig en snel?" className="reveal">
                  Daar zorgen we voor. Je website wordt snel, veilig en stabiel opgeleverd, en is volledig mobielvriendelijk, want de meeste bezoekers komen via hun telefoon.
              </Qa>
              {' '}
              <Qa question="Kunnen jullie koppelen met mijn systemen?" className="reveal">
                  Vaak wel. We koppelen je website aan bijvoorbeeld je CRM, boekingssysteem, agenda, betaaldienst of WhatsApp, zodat aanvragen automatisch op de juiste plek belanden.
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
            <h2 className="display">We denken graag met je mee.</h2>
            {' '}
            <p className="lead">
              Geen verkooppraat, gewoon eerlijk advies. Plan een vrijblijvende kennismaking of vraag een gratis websitescan aan.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag je gratis scan aan
              </Link>
              {' '}
              <Link className="tlink" to="/contact">
                Plan een kennismaking
                {' '}
                <span className="arr">→</span>
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
