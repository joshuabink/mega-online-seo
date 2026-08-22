import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'
import '@/styles/pages/index.css'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: "MegaOnline.io | Websites die werken voor jouw bedrijf" },
      { name: 'description', content: "MegaOnline bouwt websites die vertrouwen uitstralen en bezoekers richting aanvraag of boeking brengen. Vraag een gratis websitescan aan." },
      { property: 'og:title', content: "MegaOnline.io | Websites die werken voor jouw bedrijf" },
      { property: 'og:description', content: "MegaOnline bouwt websites die vertrouwen uitstralen en bezoekers richting aanvraag of boeking brengen. Vraag een gratis websitescan aan." },
      { property: 'og:url', content: "https://megaonline.io/" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/" },
    ],
  }),
  component: Home,
})

/**
 * Bron voor zowel de zichtbare FAQ als de FAQPage-structured data. Eén lijst,
 * zodat de vragen op de pagina en het schema niet uit elkaar kunnen lopen.
 */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Wat kost een website bij MegaOnline?",
    a: "Een Conversie Website begint vanaf € 2.500. De uiteindelijke prijs hangt af van het aantal pagina's en de complexiteit. En van welke extra functionaliteiten je nodig hebt. In de gratis websitescan geven we je een eerlijke indicatie op basis van jouw situatie.",
  },
  {
    q: "Waarom niet kiezen voor een goedkope webbouwer?",
    a: "Een website bouwen is meer dan pagina's online zetten. Wij kijken naar vertrouwen, gebruiksgemak en hoe bezoekers daadwerkelijk actie ondernemen.",
  },
  {
    q: "Wat gebeurt er na livegang?",
    a: "Na livegang kunnen we blijven helpen met onderhoud, verbeteringen en het optimaliseren van de website.",
  },
  {
    q: "Hoe weten jullie of een website beter presteert?",
    a: "Door analytics en bezoekersgedrag te meten, krijgen we inzicht in wat werkt en waar kansen liggen.",
  },
  {
    q: "Kan ik mijn website straks zelf beheren?",
    a: "Ja. We bouwen je website zo op dat je teksten en foto’s eenvoudig zelf kunt aanpassen, zonder technische kennis.",
  },
  {
    q: "Hoe lang duurt het bouwen van een website?",
    a: "Een gemiddeld websiteproject duurt 4 tot 8 weken. Dit hangt af van hoe snel we samen de intake kunnen afronden, en van hoe snel de teksten en foto's beschikbaar zijn. We werken altijd met een duidelijke planning.",
  },
  {
    q: "Wij hebben al een website. Kunnen jullie die verbeteren?",
    a: "Ja. In sommige gevallen is een volledig nieuwe website de beste keuze. In andere gevallen kunnen gerichte verbeteringen al veel effect hebben. De websitescan helpt ons om te bepalen wat voor jou de slimste aanpak is.",
  },
  {
    q: "Wat als ik na livegang iets wil aanpassen?",
    a: "Kleine aanpassingen vallen vaak binnen het standaard beheer. Grotere uitbreidingen worden apart besproken en geprijsd. Met een Groei Partnership heb je sowieso een vaste maandelijkse capaciteit voor verbeteringen.",
  },
  {
    q: "Is het Groei Partnership verplicht na een nieuwe website?",
    a: "Nee. Sommige klanten kiezen voor een eenmalige website en regelen het beheer zelf of via een andere partij. We raden het Partnership wel aan, omdat websites die regelmatig verbeterd worden structureel beter presteren.",
  },
  {
    q: "Voor welke bedrijven werkt MegaOnline?",
    a: "We werken het liefst voor groeiende bedrijven, waarbij de website een directe rol speelt in het binnenhalen van aanvragen, reserveringen of boekingen. Denk aan activiteitenbedrijven, verhuurders, zakelijke dienstverleners, rijscholen en transportbedrijven. De branche is minder belangrijk dan het bedrijfsmodel.",
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

function Home() {
  return (
    <main id="top" data-page="index">
      <section className="section hero" id="scan" data-theme="dark" data-screen-label="Hero + scan-formulier">
        <div className="wrap">
          <div className="hero__grid">
            <div className="hero__copy">
              <Reveal as="div" className="hero__badge reveal">
                <span className="badge">
                  <span className="gdot" />
                  Websites voor groeiende bedrijven
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je website staat online. Maar
                {' '}
                <em>levert</em>
                {' '}
                hij ook aanvragen en boekingen op?
              </Reveal>
              {' '}
              <Reveal as="p" className="lead hero__sub reveal" data-d="2">
                Veel websites zien er prima uit, maar helpen bezoekers niet om actie te ondernemen. MegaOnline bouwt websites die vertrouwen uitstralen en bezoekers gericht naar meer aanvragen en boekingen begeleiden.
              </Reveal>
            </div>
            {' '}
            <SteppedLeadForm
              className="hero__form reveal"
              subject="Nieuwe websitescan-aanvraag - MegaOnline.io"
              head={
                <>
                  <span className="form__head-note">
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-text)", display: "inline-block" }} />
                    Gratis websitescan
                  </span>
                  {' '}
                  <h3>Vraag je gratis websitescan aan</h3>
                  {' '}
                  <p>
                    Begin met je website-adres. Daarna volgen nog twee korte stappen.
                  </p>
                </>
              }
              ok={
                <>
                <div className="ic">✓</div>
                {' '}
                <h3>Bedankt. Aanvraag ontvangen.</h3>
                {' '}
                <p style={{ color: "var(--muted)", marginTop: "10px" }}>
                  We nemen gemiddeld binnen 2 werkdagen contact met je op. Geen automatisch gegenereerd rapport.
                </p>
                </>
              }
            >
              <div className="form__progress">
                <span className="form__step-label">
                  Stap
                  {' '}
                  <b id="stepNum">1</b>
                  {' '}
                  van 3
                </span>
                {' '}
                <div className="form__bar">
                  <i id="stepBar" />
                </div>
              </div>
              {' '}
              <div className="fstep" data-step="1">
                <div className="field">
                  <label htmlFor="f-url">Wat is je website nu?</label>
                  {' '}
                  <input id="f-url" name="url" type="text" inputMode="url" placeholder="jouwwebsite.nl" required />
                </div>
                {' '}
                <button className="btn btn-primary" type="button" data-next="">
                  Volgende
                  {' '}
                  <span className="arr">→</span>
                </button>
              </div>
              {' '}
              <div className="fstep" data-step="2" hidden>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="f-naam">Je naam</label>
                    {' '}
                    <input id="f-naam" name="naam" type="text" placeholder="Voor- en achternaam" required />
                  </div>
                  {' '}
                  <div className="field">
                    <label htmlFor="f-bedrijf">Bedrijfsnaam</label>
                    {' '}
                    <input id="f-bedrijf" name="bedrijf" type="text" placeholder="Bedrijfsnaam" required />
                  </div>
                </div>
                {' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>
                  {' '}
                  <button className="btn btn-primary" type="button" data-next="">
                    Volgende
                    {' '}
                    <span className="arr">→</span>
                  </button>
                </div>
              </div>
              {' '}
              <div className="fstep" data-step="3" hidden>
                <div className="field">
                  <label htmlFor="f-email">E-mailadres</label>
                  {' '}
                  <input id="f-email" name="email" type="email" placeholder="jij@bedrijf.nl" required />
                </div>
                {' '}
                <div className="field">
                  <label htmlFor="f-branche">Branche</label>
                  {' '}
                  <select id="f-branche" name="branche" required defaultValue="">
                    <option value="" disabled>Kies je branche</option>
                    {' '}
                    <option value="Activiteiten / Recreatie">Activiteiten / Recreatie</option>
                    {' '}
                    <option value="Verhuur">Verhuur</option>
                    {' '}
                    <option value="Zakelijke dienstverlening">Zakelijke dienstverlening</option>
                    {' '}
                    <option value="Transport / Verhuizing">Transport / Verhuizing</option>
                    {' '}
                    <option value="Rijschool">Rijschool</option>
                    {' '}
                    <option value="Horeca / Catering">Horeca / Catering</option>
                    {' '}
                    <option value="Anders">Anders</option>
                  </select>
                </div>
                {' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>
                  {' '}
                  <button className="btn btn-primary" type="submit">
                    Stuur mijn gratis scan
                    {' '}
                    <span className="arr">→</span>
                  </button>
                </div>
                {' '}
                <p className="form__disc">
                  Je hoort binnen twee werkdagen van ons. We zetten je niet op een mailinglijst.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <div className="proof proof-band" data-theme="paper" data-screen-label="Vertrouwensbalk">
        <div className="wrap">
          <div className="proof__grid">
            <Reveal as="div" className="proof__item reveal">
              <span className="proof__ico">
                <Icon name="shield-check" />
              </span>
              {' '}
              <p>Meer vertrouwen bij bezoekers</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="1">
              <span className="proof__ico">
                <Icon name="calendar-check" />
              </span>
              {' '}
              <p>Makkelijker aanvragen en boekingen</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="2">
              <span className="proof__ico">
                <Icon name="target" />
              </span>
              {' '}
              <p>Een website die past bij je bedrijf</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="proof__item reveal" data-d="3">
              <span className="proof__ico">
                <Icon name="handshake" />
              </span>
              {' '}
              <p>Betrokken partner na livegang</p>
            </Reveal>
          </div>
        </div>
      </div>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Het probleem">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het probleem</span>
            {' '}
            <h2 className="h2">Waarom je bezoekers afhaken.</h2>
            {' '}
            <p className="lead">
              Veel bedrijven hebben een website die online staat, maar niet actief bijdraagt aan groei. Bezoekers haken af. Ze twijfelen of nemen geen contact op. Daardoor blijven aanvragen en boekingen liggen.
            </p>
          </Reveal>
          {' '}
          <div className="problist">
            <Reveal as="div" className="prob reveal">
              <span className="prob__no">01</span>
              {' '}
              <h3>Bezoekers begrijpen niet wat je doet</h3>
              {' '}
              <p>
                Als bezoekers binnen enkele seconden niet begrijpen wat je aanbiedt, haken ze af voordat ze contact opnemen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="prob reveal" data-d="1">
              <span className="prob__no">02</span>
              {' '}
              <h3>Je website straalt weinig vertrouwen uit</h3>
              {' '}
              <p>
                Bezoekers vergelijken je direct met concurrenten. Een verouderde uitstraling kost vertrouwen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="prob reveal">
              <span className="prob__no">03</span>
              {' '}
              <h3>De mobiele ervaring werkt tegen je</h3>
              {' '}
              <p>
                Het grootste deel van je bezoekers komt mobiel binnen. Als de ervaring niet soepel is, verlies je kansen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="prob reveal" data-d="1">
              <span className="prob__no">04</span>
              {' '}
              <h3>Aanvragen zijn te moeilijk gemaakt</h3>
              {' '}
              <p>
                Hoe meer stappen, hoe meer afhakers. Een website moet bezoekers helpen om eenvoudig actie te ondernemen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werkwijze" data-theme="dark" data-screen-label="Werkwijze">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label" style={{ padding: "6px 12px" }}>ONZE AANPAK</span>
            {' '}
            <h2 className="h2">Van eerste indruk tot meer aanvragen</h2>
            {' '}
            <p className="lead">
              Geen standaard webbureau dat een website bouwt en verdwijnt. Wij beginnen met begrijpen. We bouwen met een doel en blijven betrokken.
            </p>
          </Reveal>
          {' '}
          <Reveal as="figure" className="procband reveal">
            <Media id="werkwijze-foto" fit="cover" alt="Overleg over een website aan tafel" />
          </Reveal>
          {' '}
          <div className="steps">
            <Reveal as="div" className="step reveal">
              <span className="step__no">Stap 1</span>
              {' '}
              <div className="step__body">
                <h3>Begrijpen</h3>
                <p>
                  We leren jouw bedrijf, klanten en doelen kennen. Alleen zo kunnen we een website bouwen die aansluit bij wat bezoekers nodig hebben.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="1">
              <span className="step__no">Stap 2</span>
              {' '}
              <div className="step__body">
                <h3>Bouwen</h3>
                <p>
                  We ontwerpen en ontwikkelen een website die vertrouwen opbouwt en bezoekers makkelijker richting contact, aanvraag of boeking stuurt.
                </p>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="step reveal" data-d="2">
              <span className="step__no">Stap 3</span>
              {' '}
              <div className="step__body">
                <h3>Verbeteren</h3>
                <p>
                  Na livegang blijven we kijken wat bezoekers doen. Waar kansen liggen en hoe de website verder kan verbeteren.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="waarom" data-theme="paper" data-screen-label="Waarom MegaOnline">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ marginBottom: "56px" }}>
            <span className="label">Waarom MegaOnline</span>
            {' '}
            <h2 className="h2">
              Een mooie website is
              {' '}
              <em>niet genoeg.</em>
            </h2>
            {' '}
            <p className="lead">
              Een website kan er fantastisch uitzien en alsnog weinig opleveren. Daarom kijken we verder dan design alleen.
            </p>
          </Reveal>
          {' '}
          <div className="why">
            <Reveal as="div" className="whylist reveal">
              <div className="whyitem">
                <span className="wn">01</span>
                <div>
                  <h3>Begrijpt een bezoeker direct wat je doet?</h3>
                </div>
              </div>
              {' '}
              <div className="whyitem">
                <span className="wn">02</span>
                <div>
                  <h3>Weet een bezoeker waarom hij voor jou moet kiezen?</h3>
                </div>
              </div>
              {' '}
              <div className="whyitem">
                <span className="wn">03</span>
                <div>
                  <h3>Kan iemand eenvoudig contact opnemen of boeken?</h3>
                </div>
              </div>
              {' '}
              <div className="whyitem">
                <span className="wn">04</span>
                <div>
                  <h3>Straalt je website voldoende vertrouwen uit?</h3>
                </div>
              </div>
              {' '}
              <div className="whyitem">
                <span className="wn">05</span>
                <div>
                  <h3>Werkt alles goed op mobiel?</h3>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="aside" className="panel reveal" data-d="1">
              <p className="panel__quote">
                Wij snappen dat je geen website wilt om een website te hebben. Je wilt dat jouw online aanwezigheid
                {' '}
                <em>beter werkt</em>
                {' '}
                voor je bedrijf.
              </p>
              {' '}
              <p className="panel__support">
                MegaOnline werkt voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen. Bedrijven die begrijpen dat hun website daar een grote rol in speelt.
              </p>
              {' '}
              <div className="panel__stats">
                <div>
                  <div className="n">60%+</div>
                  <div className="l">van bezoekers komt via mobiel</div>
                </div>
                {' '}
                <div>
                  <div className="n">3 sec</div>
                  <div className="l">om een bezoeker te overtuigen of te verliezen</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werk" data-theme="light" data-screen-label="Werk / Cases">
        <div className="wrap">
          <Reveal as="div" className="shead shead--split reveal">
            <div className="shead">
              <span className="label">ONS WERK</span>
              {' '}
              <h2 className="h2">Wat we voor deze bedrijven oplosten.</h2>
            </div>
            {' '}
            <Link className="tlink" to="/gratis-websitescan" style={{ paddingBottom: "6px" }}>
              Start jouw project
              {' '}
              <span className="arr">→</span>
            </Link>
          </Reveal>
          {' '}
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="Screenshot van de website die we voor Q-Team Solutions bouwden" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 01</span>
                {' '}
                <h3 className="case__name">Q-Team Solutions</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">B2B</span>
                  <span className="tag">Softwarebedrijf</span>
                </div>
                {' '}
                <p className="case__context">
                  Een bedrijf dat eigen apps ontwikkelt voor zakelijke klanten.
                </p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>
                      De website liet onvoldoende zien welke apps het bedrijf ontwikkelt en welke waarde die bieden aan klanten.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We brachten de propositie terug naar een duidelijke boodschap en bouwden een structuur die bezoekers sneller naar de juiste informatie leidt.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Duidelijkere propositie</span>
                  {' '}
                  <span className="chip">Professionelere uitstraling</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="Screenshot van de website die we voor GuestRoomUtrecht bouwden" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 02</span>
                {' '}
                <h3 className="case__name">GuestRoomUtrecht</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">B2C</span>
                  <span className="tag">Bed & Breakfast</span>
                </div>
                {' '}
                <p className="case__context">Een verblijf dat draait op sfeer en de ervaring van gasten.</p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>
                      De website bracht de sfeer van het verblijf onvoldoende over.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We ontwikkelden een visuele website met een duidelijke boekingsroute en focus op beleving.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Sterker verhaal</span>
                  {' '}
                  <span className="chip">Betere gebruikerservaring</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-kerk" fit="cover" placeholder="[ Ontmoetingskerk ]" alt="Screenshot van de website die we voor Ontmoetingskerk bouwden" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 03</span>
                {' '}
                <h3 className="case__name">Ontmoetingskerk</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Non-profit</span>
                  <span className="tag">Gemeenschap</span>
                </div>
                {' '}
                <p className="case__context">
                  Een levendige gemeenschap met veel activiteiten en informatie.
                </p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>Veel informatie, maar weinig overzicht.</p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We brachten agenda, nieuws en activiteiten samen in een duidelijke structuur.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Meer overzicht</span>
                  {' '}
                  <span className="chip">Eenvoudiger beheer</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-africa" fit="cover" placeholder="[ LoveForAfrica ]" alt="Screenshot van de website die we voor LoveForAfrica bouwden" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 04</span>
                {' '}
                <h3 className="case__name">LoveForAfrica</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Non-profit</span>
                  <span className="tag">Goede doelen</span>
                </div>
                {' '}
                <p className="case__context">Een organisatie met projecten en verhalen die ertoe doen.</p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>
                      Het verhaal en de impact van de organisatie kwamen onvoldoende naar voren.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We ontwikkelden een website waarin projecten, verhalen en betrokkenheid centraal staan.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Sterker verhaal</span>
                  {' '}
                  <span className="chip">Meer vertrouwen</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="diensten" data-theme="dark" data-screen-label="Diensten">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Diensten</span>
            {' '}
            <h2 className="h2">
              De samenwerking stopt niet na
              {' '}
              <em>livegang.</em>
            </h2>
            {' '}
            <p className="lead">
              Een website is het startpunt. Daarna begint het echte optimaliseren. Je begint met een Conversie Website en kiest na livegang hoe betrokken we blijven.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="rm reveal" style={{ marginTop: "clamp(40px,4vw,56px)" }}>
            <div className="rm__node">
              <div className="rm__phase">
                Fase 1
                {' '}
                <b>· Start</b>
              </div>
              {' '}
              <span className="svcname rm__name">Conversie Website</span>
              {' '}
              <p>
                Een professionele website die vertrouwen wekt en bezoekers richting aanvraag of boeking begeleidt. Het fundament waarop alles daarna verdergaat.
              </p>
              {' '}
              <div className="svc__when">Ideaal wanneer</div>
              {' '}
              <ul className="svclist">
                <li>Je website verouderd is</li>
                {' '}
                <li>Je bedrijf harder groeit dan je website</li>
                {' '}
                <li>Je meer uit je website wilt halen</li>
              </ul>
              {' '}
              <div className="rm__foot">
                <span className="svcprice">Vanaf € 2.500</span>
                {' '}
                <Link className="flow-cta" to="/gratis-websitescan">Vraag je gratis scan aan →</Link>
              </div>
            </div>
            {' '}
            <div className="rm__connector">
              <span className="rm__track" />
              {' '}
              <span className="rm__badge">
                <span className="rm__arrow">→</span>
              </span>
              {' '}
              <span className="rm__live">Livegang</span>
              {' '}
              <span className="rm__track" />
            </div>
            {' '}
            <div className="rm__node rm__node--rec">
              <span className="svctag svctag--rec" style={{ position: "absolute", top: "-12px", left: "clamp(22px,2.2vw,30px)" }}>★ Aanbevolen</span>
              {' '}
              <div className="rm__phase">
                Fase 2
                {' '}
                <b>· Vervolgstap</b>
              </div>
              {' '}
              <span className="svcname rm__name">Groei Partnership</span>
              {' '}
              <p>
                Na livegang begint het echte werk. We meten waar bezoekers afhaken en verbeteren je website maand na maand. Hier zit de meeste waarde voor jouw bedrijf.
              </p>
              {' '}
              <div className="svc__when">Ideaal wanneer</div>
              {' '}
              <ul className="svclist">
                <li>Je meer uit bestaande bezoekers wilt halen</li>
                {' '}
                <li>Je wilt weten waar bezoekers afhaken</li>
                {' '}
                <li>Je continu wilt verbeteren</li>
              </ul>
              {' '}
              <div className="rm__foot">
                <span className="svcprice">
                  Vanaf € 150
                  <small>
                    {' '}
                    / maand
                  </small>
                </span>
                {' '}
                <Link className="flow-cta" to="/gratis-websitescan">Start het partnership →</Link>
              </div>
            </div>
          </Reveal>
          {' '}
          <div className="maints">
            <Reveal as="div" className="maint reveal">
            <div className="maint__txt">
              <b>Kleiner beginnen?</b>
              {' '}
              Voor starters en kleinere bedrijven bouwen we een compactere website, met
              dezelfde aandacht voor vertrouwen en een makkelijke aanvraag.
              {' '}
              <Link className="flow-cta" to="/diensten/starter-website">Bekijk de Starter Website →</Link>
            </div>
            {' '}
            <div className="maint__price">Starter Website · vanaf € 1.500</div>
          </Reveal>
          {' '}
          <Reveal as="div" className="maint reveal" data-d="1">
            <div className="maint__txt">
              <b>Niet op zoek naar actieve optimalisatie?</b>
              {' '}
              Ook onderhoud en technische support is mogelijk. We houden je website veilig en up-to-date.
            </div>
            {' '}
            <div className="maint__price">Onderhoud & Support · vanaf € 49 / mnd</div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Testimonials">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Referenties</span>
            {' '}
            <h2 className="h2">Wat klanten ervan merkten.</h2>
          </Reveal>
          {' '}
          <div className="quotes">
            <Reveal as="figure" className="quote reveal">
              <div className="quote__mark">”</div>
              {' '}
              <blockquote>
                <p>
                  Voor het eerst komen er aanvragen binnen waar we niets voor hoeven te doen. De site doet eindelijk het werk.
                </p>
              </blockquote>
              {' '}
              <figcaption className="quote__by">
                <span className="quote__logo">
                  <Media id="t1-logo" fit="contain" placeholder="LOGO" alt="" />
                </span>
                {' '}
                <span>
                  <span className="nm">Hennie</span>
                  <span className="rl">Eigenaar · Zakelijke dienstverlening</span>
                </span>
              </figcaption>
            </Reveal>
            {' '}
            <Reveal as="figure" className="quote reveal" data-d="1">
              <div className="quote__mark">”</div>
              {' '}
              <blockquote>
                <p>
                  Gasten boeken nu direct via de site. Ook 's avonds laat. Precies wat we nodig hadden.
                </p>
              </blockquote>
              {' '}
              <figcaption className="quote__by">
                <span className="quote__logo">
                  <Media id="t2-logo" fit="contain" placeholder="LOGO" alt="" />
                </span>
                {' '}
                <span>
                  <span className="nm">Margriet</span>
                  <span className="rl">Eigenaar · Bed & Breakfast</span>
                </span>
              </figcaption>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Team / Visie">
        <div className="wrap">
          <div className="vision">
            <Reveal as="div" className="vision__media reveal">
              <Media id="werkplek-portret" fit="cover" placeholder="[ WERKPLEK ]" alt="Werkplek waar de websites worden gebouwd" />
            </Reveal>
            {' '}
            <Reveal as="div" className="vision__body reveal" data-d="1">
              <span className="label">Zo werken we</span>
              {' '}
              <h2 className="h2">
                Klein van opzet.
                {' '}
                <em>Groot</em>
                {' '}
                in betrokkenheid.
              </h2>
              {' '}
              <p>
                MegaOnline is geen fabriek die websites uitspuugt. We werken met een beperkt aantal bedrijven tegelijk. Zo begrijpen we écht waar jouw klanten op afhaken en wat ze juist over de streep trekt.
              </p>
              {' '}
              <p>
                Geen accountmanagers en geen tussenlagen. Je werkt direct met de mensen die de strategie bepalen en de site bouwen. Dat houdt het scherp en eerlijk.
              </p>
              {' '}
              <p>
                Wij geloven dat de beste websites ontstaan wanneer je een bedrijf echt begrijpt. Daarom werken we niet als een anoniem bureau, maar als een betrokken partner die meedenkt over de lange termijn.
              </p>
              {' '}
              <div className="vision__sign">
                <span className="quote__av" style={{ width: "48px", height: "48px" }}>
                  <Media id="founder-av" fit="cover" shape="circle" placeholder="FOTO" alt="Joshua Bink, oprichter van MegaOnline" />
                </span>
                {' '}
                <span>
                  <span className="nm">Joshua Bink</span>
                  {' '}
                  <span className="rl" style={{ display: "block", marginTop: "3px" }}>OPRICHTER & WEBSITE NERD :)</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>
            {' '}
            <h2 className="h2">Wat je misschien nog wil weten</h2>
          </Reveal>
          {' '}
          <div className="faq">
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
          {/* FAQPage-schema uit dezelfde bron als de zichtbare vragen. */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
          />
        </div>
      </section>
      {' '}
      {' '}
      <section className="section final" data-theme="dark" data-screen-label="Afsluitende CTA">
        <div className="wrap">
          <Reveal as="h2" className="display reveal">Zullen we eens naar je website kijken?</Reveal>
          {' '}
          <Reveal as="p" className="lead reveal" data-d="1">
            Vraag een gratis websitescan aan en ontdek wat er beter kan. Zonder verplichtingen.
          </Reveal>
          {' '}
          <Link className="btn btn-primary reveal" data-d="2" to="/gratis-websitescan">
            Vraag je gratis scan aan
          </Link>
        </div>
      </section>
    </main>
  )
}
