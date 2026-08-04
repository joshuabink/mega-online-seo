import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'
import '@/styles/pages/diensten-groei-partnership.css'

export const Route = createFileRoute('/diensten/groei-partnership')({
  head: () => ({
    meta: [
      { title: "Groei Partnership | MegaOnline.io" },
      { name: 'description', content: "Een website is geen eindpunt, maar een beginpunt. Een doorlopende samenwerking voor bedrijven die na livegang blijven meten, leren en verbeteren. Geen onderhoudsabonnement: een groeipartner." },
      { property: 'og:title', content: "Groei Partnership | MegaOnline.io" },
      { property: 'og:description', content: "Een website is geen eindpunt, maar een beginpunt. Een doorlopende samenwerking voor bedrijven die na livegang blijven meten, leren en verbeteren. Geen onderhoudsabonnement: een groeipartner." },
      { property: 'og:url', content: "https://megaonline.io/diensten/groei-partnership" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/groei-partnership" },
    ],
  }),
  component: GroeiPartnership,
})

function GroeiPartnership() {
  return (
    <main id="top" data-page="diensten-groei-partnership">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Groei Partnership">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <Link to="/" hash="diensten">Diensten</Link>
                <span className="sep">/</span>
                {' '}
                <b>Groei Partnership</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Doorlopende samenwerking · na livegang
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Een website is geen eindpunt. Het is een
                {' '}
                <em>beginpunt.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Na livegang blijven we kijken waar kansen liggen, waar bezoekers afhaken en hoe jouw website stap voor stap beter kan presteren. Geen abonnement op onderhoud, maar een partner die meegroeit.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
                {' '}
                <Link className="tlink" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
            </div>
            {' '}
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media id="gp-hero" fit="cover" placeholder="[ MAANDELIJKSE ANALYSE ]" alt="MAANDELIJKSE ANALYSE" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">↗</span>
                {' '}
                <span>
                  <span className="tt">Verbeterpunt doorgevoerd</span>
                  {' '}
                  <span className="ts">Op basis van data</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">+3</span>
                {' '}
                <span className="l">verbeteringen / maand</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waarom de meeste websites stil blijven staan">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Een website is nooit af</span>
            {' '}
            <h2 className="h2">
              De wereld beweegt. De meeste websites
              {' '}
              <em>blijven staan.</em>
            </h2>
            {' '}
            <p className="lead">
              Een website wordt één keer gebouwd en daarna jarenlang met rust gelaten. Maar alles eromheen verandert continu. Daar zit precies het probleem.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>
                Een website die stilstaat, gaat langzaam achteruit. Ook als je er niets aan verandert.
              </h3>
              {' '}
              <p>
                Niet omdat de website slechter wordt, maar omdat de wereld eromheen vooruit gaat. Je doelgroep, je concurrenten en het gedrag van bezoekers staan nooit stil.
              </p>
              {' '}
              <p>
                Wie zijn website met rust laat, valt niet stil, maar achterop. Stap voor stap, zonder dat je het direct merkt.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Doelgroepen veranderen</h4>
                <p>
                  Wat mensen verwachten van een website verschuift voortdurend.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Concurrenten verbeteren</h4>
                <p>
                  Stilstaan betekent ingehaald worden door wie wél doorontwikkelt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Bezoekers gedragen zich anders</h4>
                <p>
                  Hoe mensen klikken en zoeken verandert sneller dan je denkt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Nieuwe kansen ontstaan</h4>
                <p>Er komen continu mogelijkheden bij die nog onbenut blijven.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Bedrijven groeien</h4>
                <p>Je aanbod en ambitie veranderen, je website meestal niet.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Websites blijven hetzelfde</h4>
                <p>En precies daar loopt het langzaam scheef met de rest.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="De echte winst na livegang">
        <div className="wrap">
          <div className="why">
            <Reveal as="div" className="shead reveal" style={{ maxWidth: "none" }}>
              <span className="label">Na livegang</span>
              {' '}
              <h2 className="h2">
                De echte winst zit vaak in de maanden
                {' '}
                <em>ná</em>
                {' '}
                livegang.
              </h2>
              {' '}
              <p className="lead">
                De eerste versie van je website is gebouwd op kennis en aannames. Goede aannames, maar nog steeds aannames. Pas wanneer echte bezoekers de website gebruiken, ontstaat er waardevolle informatie.
              </p>
              {' '}
              <p className="lead">
                Vanaf dat moment hoeven we niet meer te gokken. We kunnen kijken, leren en gericht verbeteren.
              </p>
            </Reveal>
            {' '}
            <Reveal as="aside" className="panel reveal" data-d="1">
              <p className="panel__quote">
                De eerste versie is een
                {' '}
                <em>hypothese.</em>
                {' '}
                De data is het bewijs.
              </p>
              {' '}
              <p className="panel__support">
                Zodra bezoekers de website gebruiken, zien we wat er werkelijk gebeurt:
              </p>
              {' '}
              <ul className="considlist" style={{ gridTemplateColumns: "1fr", marginTop: "18px" }}>
                <li>Waar bezoekers afhaken</li>
                {' '}
                <li>Welke pagina's goed werken</li>
                {' '}
                <li>Welke pagina's minder presteren</li>
                {' '}
                <li>Welke vragen mensen hebben</li>
                {' '}
                <li>Welke onderdelen aandacht nodig hebben</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Wat we binnen het Groei Partnership doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">In het partnership</span>
            {' '}
            <h2 className="h2">
              Wat we binnen het Groei Partnership
              {' '}
              <em>doen.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen vage beloftes, maar een vast ritme van meten, signaleren en verbeteren. Maand na maand werken we aan een website die beter presteert.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="calendar-check" />
              </span>
              <h4>Maandelijkse analyse</h4>
              <p>Een vast moment waarop we naar de cijfers en kansen kijken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="activity" />
              </span>
              <h4>Bezoekersgedrag bekijken</h4>
              <p>Wat doen bezoekers echt, en waar lopen ze vast?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="alert-triangle" />
              </span>
              <h4>Verbeterpunten signaleren</h4>
              <p>We benoemen concreet waar de meeste winst te halen valt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="sliders-horizontal" />
              </span>
              <h4>Kleine aanpassingen doorvoeren</h4>
              <p>Gerichte verbeteringen die samen een groot verschil maken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="lightbulb" />
              </span>
              <h4>Nieuwe kansen ontdekken</h4>
              <p>We spotten mogelijkheden voordat je concurrent dat doet.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>SEO-verbeteringen</h4>
              <p>Stap voor stap beter vindbaar worden in Google.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Conversie-optimalisatie</h4>
              <p>Meer aanvragen en boekingen uit dezelfde bezoekers.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="settings" />
              </span>
              <h4>Technische verbeteringen</h4>
              <p>Snelheid, veiligheid en stabiliteit blijvend op orde.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="message-circle" />
              </span>
              <h4>Persoonlijke ondersteuning</h4>
              <p>Eén vast aanspreekpunt dat je bedrijf echt kent.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Van onderbuikgevoel naar inzicht">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Van gevoel naar inzicht</span>
            {' '}
            <h2 className="h2">
              Niet gokken.
              {' '}
              <em>Meten.</em>
            </h2>
            {' '}
            <p className="lead">
              Verbeteringen voeren we niet door omdat ze ons een goed idee lijken. We nemen beslissingen op basis van wat we daadwerkelijk zien gebeuren.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="exgrid reveal" style={{ gridTemplateColumns: "repeat(4,1fr)", marginTop: "clamp(34px,4vw,48px)" }}>
            <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="bar-chart-3" />
              </span>
              Data: de cijfers achter je website
            </div>
            {' '}
            <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="activity" />
              </span>
              Gedrag: wat bezoekers echt doen
            </div>
            {' '}
            <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="message-square-text" />
              </span>
              Feedback: wat mensen je vertellen
            </div>
            {' '}
            <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="lightbulb" />
              </span>
              Inzichten: de conclusies die we trekken
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe een samenwerking eruitziet (cyclus)">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Een continu proces</span>
            {' '}
            <h2 className="h2">
              Geen project met een einddatum. Een
              {' '}
              <em>cyclus.</em>
            </h2>
            {' '}
            <p className="lead">
              Meten, leren, verbeteren. En dan weer opnieuw. Elke ronde maakt je website een stukje beter dan de vorige.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="cycle reveal">
            <div className="cyclestep cyclestep--rec">
              <span className="cn">01</span>
              {' '}
              <h4>Website live</h4>
              {' '}
              <p>Het startpunt. Vanaf hier begint het echte werk pas.</p>
              {' '}
              <span className="cyclestep__arr">
                <Icon name="arrow-right" />
              </span>
            </div>
            {' '}
            <div className="cyclestep">
              <span className="cn">02</span>
              {' '}
              <h4>Meten</h4>
              {' '}
              <p>We verzamelen data over hoe bezoekers de website gebruiken.</p>
              {' '}
              <span className="cyclestep__arr">
                <Icon name="arrow-right" />
              </span>
            </div>
            {' '}
            <div className="cyclestep">
              <span className="cn">03</span>
              {' '}
              <h4>Analyseren</h4>
              {' '}
              <p>We leggen de knelpunten en kansen bloot.</p>
              {' '}
              <span className="cyclestep__arr">
                <Icon name="arrow-right" />
              </span>
            </div>
            {' '}
            <div className="cyclestep">
              <span className="cn">04</span>
              {' '}
              <h4>Verbeteren</h4>
              {' '}
              <p>We voeren gerichte aanpassingen door.</p>
              {' '}
              <span className="cyclestep__arr">
                <Icon name="arrow-right" />
              </span>
            </div>
            {' '}
            <div className="cyclestep">
              <span className="cn">05</span>
              {' '}
              <h4>Herhalen</h4>
              {' '}
              <p>En weer van voren af aan, elke keer een stap beter.</p>
            </div>
          </Reveal>
          {' '}
          <Reveal as="div" className="cycle__return reveal" data-d="1">
            <Icon name="refresh-cw" />
            {' '}
            En dan begint de cyclus opnieuw
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Zie het als onderhoud aan een raceauto">
        <div className="wrap">
          <div className="vision">
            <Reveal as="div" className="vision__media reveal">
              <Media id="gp-race" fit="cover" placeholder="[ PITSTOP / RACEAUTO ]" alt="PITSTOP / RACEAUTO" />
            </Reveal>
            {' '}
            <Reveal as="div" className="vision__body reveal" data-d="1">
              <span className="label">De metafoor</span>
              {' '}
              <h2 className="h2">
                Zie het als onderhoud aan een
                {' '}
                <em>raceauto.</em>
              </h2>
              {' '}
              <p>
                Een raceauto wordt niet één keer gebouwd en daarna vergeten. Tussen elke race door wordt hij gecontroleerd, afgesteld en verbeterd. Een paar tienden hier, een betere afstelling daar.
              </p>
              {' '}
              <p>
                Met een website is het precies zo. Het zijn zelden grote ingrepen. Het zijn de kleine, continue verbeteringen die op de lange termijn een groot verschil maken in wat je website oplevert.
              </p>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Stilstaande websites verliezen langzaam terrein. Bijgestuurde websites blijven
                {' '}
                <em>winnen.</em>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Voor wie is dit interessant?">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            {' '}
            <h2 className="h2">
              Voor wie is dit
              {' '}
              <em>interessant?</em>
            </h2>
            {' '}
            <p className="lead">
              Het Groei Partnership is bedoeld voor bedrijven waarvoor de website echt iets moet opleveren, niet alleen online moet staan.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="exgrid reveal" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="file-text" />
              </span>
              Bedrijven die afhankelijk zijn van aanvragen
            </div>
            {' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="calendar-clock" />
              </span>
              Bedrijven met reserveringen
            </div>
            {' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="calendar-check" />
              </span>
              Bedrijven met boekingen
            </div>
            {' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="trending-up" />
              </span>
              Bedrijven die willen groeien
            </div>
            {' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="bar-chart-3" />
              </span>
              Bedrijven die inzicht willen
            </div>
            {' '}
            <div className="exchip">
              <span className="iconbox iconbox--sm">
                <Icon name="handshake" />
              </span>
              Bedrijven die een online partner zoeken
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Alleen onderhoud nodig?">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "620px" }}>
            <span className="label">Lichtere optie</span>
            {' '}
            <h2 className="h2" style={{ fontSize: "clamp(1.5rem,2.6vw,2rem)" }}>Alleen ondersteuning en onderhoud nodig?</h2>
          </Reveal>
          {' '}
          <Reveal as="div" className="consider reveal" data-d="1" style={{ marginTop: "clamp(24px,3vw,34px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(24px,3vw,40px)", alignItems: "center" }}>
              <div>
                <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
                  Niet ieder bedrijf heeft behoefte aan doorlopende optimalisatie. Daarom bieden we ook een lichtere onderhoudsoptie, zodat je website veilig en up-to-date blijft, zonder actieve doorontwikkeling.
                </p>
                {' '}
                <ul className="considlist" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "20px" }}>
                  <li>Updates</li>
                  {' '}
                  <li>Beveiliging</li>
                  {' '}
                  <li>Back-ups</li>
                  {' '}
                  <li>Kleine wijzigingen</li>
                  {' '}
                  <li>Technische ondersteuning</li>
                </ul>
                {' '}
                <p className="brand__tag" style={{ marginTop: "22px", paddingTop: "0" }}>
                  Let op: dit is niet hetzelfde als het Groei Partnership. Bij onderhoud houden we je website draaiend, maar verbeteren we niet actief. Voor groei blijft het partnership de aanbevolen route.
                </p>
              </div>
              {' '}
              <div style={{ border: "1px solid var(--line)", borderRadius: "16px", background: "var(--card-2)", boxShadow: "var(--elev)", padding: "clamp(24px,2.6vw,32px)", textAlign: "center" }}>
                <span className="form__head-note" style={{ justifyContent: "center" }}>Onderhoud & Support</span>
                {' '}
                <div className="svcprice" style={{ fontSize: "2.2rem", marginTop: "6px" }}>
                  € 49
                  <small style={{ fontSize: "1rem" }}>
                    {' '}
                    / maand
                  </small>
                </div>
                {' '}
                <p style={{ color: "var(--faint)", fontSize: "0.86rem", marginTop: "8px", lineHeight: "1.5" }}>
                  Veilig, up-to-date en in goede handen. Zonder actieve optimalisatie.
                </p>
                {' '}
                <Link className="tlink" to="/gratis-websitescan" style={{ marginTop: "18px", justifyContent: "center" }}>
                  Meer weten
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Waarom klanten hiervoor kiezen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De waarde</span>
            {' '}
            <h2 className="h2">
              Waarom klanten hiervoor
              {' '}
              <em>kiezen.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="featgrid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="handshake" />
              </span>
              <h4>Betrokken partner</h4>
              <p>
                Iemand die je website kent en blijft meedenken, ook na livegang.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="zap" />
              </span>
              <h4>Snellere verbeteringen</h4>
              <p>Korte lijnen, dus aanpassingen zijn snel doorgevoerd.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="bar-chart-3" />
              </span>
              <h4>Meer inzicht</h4>
              <p>Je weet wat bezoekers doen en wat dat oplevert.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Minder zorgen</h4>
              <p>
                Techniek, veiligheid en updates regelen wij op de achtergrond.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="refresh-cw" />
              </span>
              <h4>Doorlopende optimalisatie</h4>
              <p>Je website wordt elke maand een stukje beter.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="user-check" />
              </span>
              <h4>Eén vast aanspreekpunt</h4>
              <p>Geen ticketsysteem, maar een vertrouwd gezicht.</p>
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
            <Qa question="Is het Groei Partnership verplicht?" className="reveal">
                Nee. Sommige klanten kiezen voor een eenmalige website en regelen het beheer zelf of via een andere partij. We raden het partnership wel aan, omdat websites die regelmatig verbeterd worden structureel beter presteren dan websites die blijven stilstaan.
            </Qa>
            {' '}
            <Qa question="Hoe vaak hebben we contact?" className="reveal">
                In de basis spreken we elke maand de analyse en verbeterpunten door. Daarnaast zijn de lijnen kort: heb je tussendoor een vraag of een wijziging, dan staan we voor je klaar. Je hebt één vast aanspreekpunt dat je bedrijf kent.
            </Qa>
            {' '}
            <Qa question="Wat gebeurt er iedere maand?" className="reveal">
                We kijken naar het bezoekersgedrag, signaleren verbeterpunten en kansen, voeren gerichte aanpassingen door en houden de techniek en SEO op orde. Daarna meten we het effect en sturen we bij. Steeds een stap beter dan de maand ervoor.
            </Qa>
            {' '}
            <Qa question="Kan ik opzeggen?" className="reveal">
                Ja. Het partnership is een samenwerking, geen gouden kooi. We werken met heldere afspraken en flexibele voorwaarden. We willen dat je blijft omdat het iets oplevert, niet omdat een contract je vasthoudt.
            </Qa>
            {' '}
            <Qa question="Doen jullie ook technische ondersteuning?" className="reveal">
                Zeker. Updates, beveiliging, back-ups en snelheid horen er gewoon bij. Binnen het Groei Partnership gaat dat samen met actieve optimalisatie. Heb je alleen het technische deel nodig, dan kan dat ook via onze lichtere onderhoudsoptie.
            </Qa>
            {' '}
            <Qa question="Wat als ik alleen onderhoud wil?" className="reveal">
                Dat kan. We bieden een lichtere onderhoudsoptie vanaf € 49 per maand, waarbij we je website veilig en up-to-date houden zonder actieve doorontwikkeling. Goed om te weten: dat is bewust iets anders dan het Groei Partnership, waarbij we je website juist maand na maand verbeteren.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="scan" data-theme="dark" data-screen-label="Eind-CTA + scan-formulier">
        <div className="wrap">
          <div className="endcta__grid">
            <div className="endcta__copy">
              <Reveal as="h2" className="display reveal">Klaar om meer uit je website te halen?</Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Een betere website ontstaat niet in één dag. Die ontstaat door continu te meten, leren en verbeteren.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2" style={{ marginTop: "28px" }}>
                <Link className="btn btn-primary" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
                {' '}
                <Link className="tlink" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
              {' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2" style={{ marginTop: "24px" }}>
                <span>Geen lange contracten</span>
                {' '}
                <span>Eén vast aanspreekpunt</span>
                {' '}
                <span>Maand na maand beter</span>
              </Reveal>
            </div>
            {' '}
            <SteppedLeadForm
              className="reveal"
              subject="Nieuwe websitescan-aanvraag - MegaOnline.io"
              head={
                <>
                  <span className="form__head-note">
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-text)", display: "inline-block" }} />
                    Gratis websitescan
                  </span>
                  {' '}
                  <h3>Vraag je websitescan aan</h3>
                  {' '}
                  <p>
                    Begin met je website-adres. De rest volgt in twee korte stappen.
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
                  <label htmlFor="f-doel">Wat wil je bereiken?</label>
                  {' '}
                  <select id="f-doel" name="doel" required defaultValue="">
                    <option value="" disabled>Kies je belangrijkste doel</option>
                    {' '}
                    <option value="Doorlopend blijven verbeteren">Doorlopend blijven verbeteren</option>
                    {' '}
                    <option value="Meer aanvragen / boekingen">Meer aanvragen / boekingen</option>
                    {' '}
                    <option value="Meer inzicht in bezoekers">Meer inzicht in bezoekers</option>
                    {' '}
                    <option value="Een vaste online partner">Een vaste online partner</option>
                    {' '}
                    <option value="Alleen onderhoud & support">Alleen onderhoud & support</option>
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
                  Geen spam. Geen verplichtingen. Gemiddeld binnen 2 werkdagen een reactie.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
