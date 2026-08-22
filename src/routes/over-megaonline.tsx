import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/over-megaonline')({
  head: () => ({
    meta: [
      { title: "Over MegaOnline | Websites die bijdragen aan groei" },
      { name: 'description', content: "Achter iedere website zit een bedrijf met een verhaal. Ontdek waarom MegaOnline bestaat, hoe wij naar websites kijken en waarom klanten met ons samenwerken." },
      { property: 'og:title', content: "Over MegaOnline | Websites die bijdragen aan groei" },
      { property: 'og:description', content: "Achter iedere website zit een bedrijf met een verhaal. Ontdek waarom MegaOnline bestaat, hoe wij naar websites kijken en waarom klanten met ons samenwerken." },
      { property: 'og:url', content: "https://megaonline.io/over-megaonline" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/over-megaonline" },
    ],
  }),
  component: OverMegaonline,
})

function OverMegaonline() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Over MegaOnline">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <b>Over MegaOnline</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Over MegaOnline
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Achter iedere website zit een bedrijf met een
                {' '}
                <em>verhaal.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                MegaOnline helpt bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen met websites die vertrouwen uitstralen, gebruiksvriendelijk zijn en bijdragen aan groei.
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
                  Vraag je gratis scan aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="bestaan" data-theme="paper" data-screen-label="Waarom MegaOnline bestaat">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom wij bestaan</span>
            {' '}
            <h2 className="h2">
              Wij geloven dat websites meer moeten doen dan alleen online
              {' '}
              <em>staan.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="ethos">
            <Reveal as="div" className="ethos__card reveal">
              <span className="ethos__mark">“</span>
              {' '}
              <h3>
                Een website hoort een actief onderdeel van je bedrijf te zijn. Geen digitaal visitekaartje.
              </h3>
              {' '}
              <p>
                Veel bedrijven hebben een website. Maar te vaak staat die er vooral mooi bij, zonder bezoekers verder te helpen. Wij geloven dat het anders kan en moet.
              </p>
              {' '}
              <div className="ethos__pull">
                Een plek die vertrouwen opbouwt en bezoekers
                {' '}
                <em>helpt</em>
                {' '}
                om de volgende stap te zetten.
              </div>
            </Reveal>
            {' '}
            <div className="ethos__mini">
              <Reveal as="div" className="emini reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="help-circle" />
                </span>
                <h4>Bezoekers begrijpen niet wat je doet</h4>
                <p>Onduidelijk binnen enkele seconden? Dan zijn ze weg.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="emini reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="clock" />
                </span>
                <h4>Websites voelen verouderd</h4>
                <p>Een gedateerde uitstraling laat bezoekers twijfelen.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="emini reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="log-out" />
                </span>
                <h4>Bezoekers haken af</h4>
                <p>Zonder duidelijke route klikken ze sneller weg dan door.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="emini reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="inbox" />
                </span>
                <h4>Aanvragen blijven liggen</h4>
                <p>Klanten die je al binnen had, haken af vlak voor contact.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werkwijze" data-theme="dark" data-screen-label="Hoe wij naar websites kijken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Hoe wij kijken</span>
            {' '}
            <h2 className="h2">
              Wij beginnen niet met
              {' '}
              <em>bouwen.</em>
            </h2>
            {' '}
            <p className="lead">
              Eerst begrijpen, dan pas bouwen. Zo ontstaat een website die niet alleen goed oogt, maar ook echt iets oplevert.
            </p>
          </Reveal>
          {' '}
          <div className="process">
            <Reveal as="div" className="pstep reveal">
              <h3>Begrijpen</h3>
              <p>
                Eerst leren we het bedrijf kennen: wat je doet, waar je voor staat en wat je wilt bereiken.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="1">
              <h3>Doelgroep</h3>
              <p>
                Daarna verdiepen we ons in de klant. Wat zoekt een bezoeker en waar twijfelt hij?
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="2">
              <h3>Structuur</h3>
              <p>
                Dan bepalen we wat bezoekers moeten zien en hoe zij naar contact bewegen.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="3">
              <h3>Ontwikkeling</h3>
              <p>
                Pas daarna bouwen we de website. Snel, veilig en eenvoudig zelf te beheren.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="process__note reveal">
            <div className="pullnote">
              Wij kijken verder dan design. We bouwen pas als helder is wat een bezoeker écht nodig heeft.
            </div>
          </Reveal>
          {' '}
          <Reveal as="figure" className="procband reveal">
            <Media id="sfeer-overleg" fit="cover" alt="Kort overleg tijdens het werken aan een website" />
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Waar wij het verschil maken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar wij het verschil maken</span>
            {' '}
            <h2 className="h2">
              Geen techniek.
              {' '}
              <em>Uitkomsten.</em>
            </h2>
            {' '}
            <p className="lead">
              Waar wij ons op richten, vertaalt zich niet in features, maar in wat het jouw bedrijf oplevert.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Meer vertrouwen</h4>
              <p>
                Een professionele uitstraling waardoor bezoekers zich op hun gemak voelen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="inbox" />
              </span>
              <h4>Makkelijker aanvragen en boekingen</h4>
              <p>
                Een heldere route die bezoekers soepel naar de volgende stap brengt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="sparkles" />
              </span>
              <h4>Professionele uitstraling</h4>
              <p>
                Een website die past bij hoe jouw bedrijf gezien wil worden.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="hand" />
              </span>
              <h4>Gebruiksvriendelijke websites</h4>
              <p>
                Logisch en prettig in gebruik, op elk scherm en voor iedereen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="trending-up" />
              </span>
              <h4>Groei na livegang</h4>
              <p>
                We blijven kijken waar kansen liggen, ook nadat de site live is.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="handshake" />
              </span>
              <h4>Lange termijn samenwerking</h4>
              <p>
                Geen eenmalig project, maar een partner die met je meegroeit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="waarom" data-theme="paper" data-screen-label="Waarom klanten kiezen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom klanten kiezen</span>
            {' '}
            <h2 className="h2">
              Niet zomaar een
              {' '}
              <em>webbouwer.</em>
            </h2>
            {' '}
            <p className="lead">
              Het verschil zit niet in de techniek, maar in hoe wij naar jouw bedrijf en je bezoekers kijken.
            </p>
          </Reveal>
          {' '}
          <div className="compare">
            <Reveal as="div" className="cmp cmp--plain reveal">
              <span className="cmp__tag">Een standaard webbouwer</span>
              {' '}
              <h3>Bouwt wat gevraagd wordt</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">–</span>
                  Bouwt precies wat er gevraagd wordt
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  Levert de website op
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  En verdwijnt daarna uit beeld
                </li>
              </ul>
            </Reveal>
            {' '}
            <Reveal as="div" className="cmp cmp--us reveal" data-d="1">
              <span className="cmp__badge">Onze aanpak</span>
              {' '}
              <span className="cmp__tag">MegaOnline</span>
              {' '}
              <h3>Denkt mee en blijft betrokken</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">✓</span>
                  Denkt mee over wat je bedrijf nodig heeft
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Verdiept zich in jouw bedrijf en doelen
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Kijkt naar de bezoeker en zijn route
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Blijft betrokken, ook na livegang
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="visie" data-theme="dark" data-screen-label="Onze visie">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze visie</span>
            {' '}
            <h2 className="h2">
              Waar we naartoe
              {' '}
              <em>groeien.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="vision">
            <Reveal as="div" className="vision__txt reveal">
              <h3>
                Vandaag helpen we bedrijven met websites. Maar onze visie reikt verder.
              </h3>
              {' '}
              <p>
                We willen bedrijven helpen groeien met alles wat een sterke online aanwezigheid raakt, met de website altijd als fundament.
              </p>
              {' '}
              <p className="honest">
                Eerlijk: niet alles hieronder bestaat vandaag al. Het is de richting waarin MegaOnline groeit, stap voor stap.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="vtrack reveal" data-d="1">
              <div className="vrow">
                <span className="vrow__ico">
                  <Icon name="layout-dashboard" />
                </span>
                <span className="vrow__txt">
                  <h4>Websites</h4>
                  <p>Onze kern. Het fundament onder alles.</p>
                </span>
                <span className="vrow__when nu">Nu</span>
              </div>
              {' '}
              <div className="vrow">
                <span className="vrow__ico">
                  <Icon name="gauge" />
                </span>
                <span className="vrow__txt">
                  <h4>Optimalisatie</h4>
                  <p>Bestaande websites beter laten presteren.</p>
                </span>
                <span className="vrow__when next">Volgende</span>
              </div>
              {' '}
              <div className="vrow">
                <span className="vrow__ico">
                  <Icon name="plug" />
                </span>
                <span className="vrow__txt">
                  <h4>Koppelingen</h4>
                  <p>Websites verbinden met bestaande systemen.</p>
                </span>
                <span className="vrow__when next">Volgende</span>
              </div>
              {' '}
              <div className="vrow">
                <span className="vrow__ico">
                  <Icon name="workflow" />
                </span>
                <span className="vrow__txt">
                  <h4>Automatisering</h4>
                  <p>Terugkerend werk slimmer en sneller maken.</p>
                </span>
                <span className="vrow__when next">Toekomst</span>
              </div>
              {' '}
              <div className="vrow">
                <span className="vrow__ico">
                  <Icon name="boxes" />
                </span>
                <span className="vrow__txt">
                  <h4>Softwareoplossingen</h4>
                  <p>Maatwerk dat met het bedrijf meegroeit.</p>
                </span>
                <span className="vrow__when next">Toekomst</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="team" data-theme="paper" data-screen-label="De persoon achter MegaOnline">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De persoon erachter</span>
            {' '}
            <h2 className="h2">
              Gebouwd door iemand die
              {' '}
              <em>online groei</em>
              {' '}
              leeft.
            </h2>
          </Reveal>
          {' '}
          <div className="founder">
            <Reveal as="div" className="founder__media reveal">
              <div className="founder__portrait">
                <Media id="founder-portret" fit="cover" placeholder="[ PORTRET JOSHUA ]" alt="Joshua Bink, oprichter van MegaOnline" />
              </div>
              {' '}
              <div className="founder__sig">
                <div className="nm">Joshua</div>
                <div className="rl">Oprichter · MegaOnline</div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="founder__body reveal" data-d="1">
              <h3>Passie voor websites die écht iets opleveren.</h3>
              {' '}
              <p>
                MegaOnline is niet ontstaan vanuit de wens om websites te maken, maar vanuit de overtuiging dat een goede website bedrijven echt verder helpt.
                {' '}
                <em>Daar zit de drijfveer.</em>
              </p>
              {' '}
              <p>
                Met een technische achtergrond en een continue interesse in online groei is er altijd dezelfde reflex: hoe kan dit beter? Niet om de techniek, maar omdat een betere website meer klanten voor jou betekent. En dat begint bij betrokkenheid bij elk bedrijf waar we mee werken.
              </p>
              {' '}
              <div className="traits">
                <span className="trait">
                  <Icon name="heart" />
                  Passie voor websites
                </span>
                {' '}
                <span className="trait">
                  <Icon name="line-chart" />
                  Gericht op online groei
                </span>
                {' '}
                <span className="trait">
                  <Icon name="code-2" />
                  Technische achtergrond
                </span>
                {' '}
                <span className="trait">
                  <Icon name="refresh-cw" />
                  Altijd bezig met verbeteren
                </span>
                {' '}
                <span className="trait">
                  <Icon name="users" />
                  Betrokken bij klanten
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="groei" data-theme="light" data-screen-label="Hoe een samenwerking eruitziet">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De samenwerking</span>
            {' '}
            <h2 className="h2">
              Eerst bouwen. Daarna
              {' '}
              <em>verbeteren.</em>
            </h2>
            {' '}
            <p className="lead">
              Een website is meestal het beginpunt van de samenwerking, niet het einde.
            </p>
          </Reveal>
          {' '}
          <div className="journey">
            <Reveal as="div" className="jnode reveal">
              <span className="jnode__ico">
                <Icon name="handshake" />
              </span>
              <span className="jnode__step">Stap 1</span>
              <h4>Kennismaking</h4>
              <p>We leren elkaar kennen en kijken of er een klik is.</p>
              <span className="jnode__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="jnode reveal" data-d="1">
              <span className="jnode__ico">
                <Icon name="compass" />
              </span>
              <span className="jnode__step">Stap 2</span>
              <h4>Strategie</h4>
              <p>We bepalen wat de website moet doen en voor wie.</p>
              <span className="jnode__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="jnode reveal" data-d="2">
              <span className="jnode__ico">
                <Icon name="layout-dashboard" />
              </span>
              <span className="jnode__step">Stap 3</span>
              <h4>Website</h4>
              <p>We bouwen een site die vertrouwen wekt en helpt.</p>
              <span className="jnode__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="jnode reveal" data-d="3">
              <span className="jnode__ico">
                <Icon name="rocket" />
              </span>
              <span className="jnode__step">Stap 4</span>
              <h4>Livegang</h4>
              <p>De website gaat live, klaar voor je bezoekers.</p>
              <span className="jnode__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="jnode jnode--last reveal" data-d="4">
              <span className="jnode__ico">
                <Icon name="trending-up" />
              </span>
              <span className="jnode__step">Stap 5</span>
              <h4>Groei Partnership</h4>
              <p>Daarna verbeteren we de site maand na maand.</p>
              <span className="jnode__arrow">→</span>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="journey__note reveal">
            <span className="iconbox iconbox--sm">
              <Icon name="repeat" />
            </span>
            De echte winst zit in wat er ná livegang gebeurt. Daar blijven we aan werken.
          </Reveal>
          {' '}
          <div className="photoduo">
            <Reveal as="figure" className="reveal">
              <Media id="over-klantgesprek" fit="cover" alt="Gesprek aan tafel over een websiteproject" />
            </Reveal>
            {' '}
            <Reveal as="figure" className="reveal" data-d="1">
              <Media id="over-werkplek" fit="cover" alt="Werkplek met schermen waarop aan een website wordt gewerkt" />
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werk" data-theme="paper" data-screen-label="Cases">
        <div className="wrap">
          <Reveal as="div" className="shead shead--split reveal">
            <div className="shead">
              <span className="label">Ons werk</span>
              {' '}
              <h2 className="h2">
                Echte uitdagingen.
                {' '}
                <em>Echt</em>
                {' '}
                opgelost.
              </h2>
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
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="Q-Team Solutions" />
              </div>
              {' '}
              <div className="case__body">
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
                      De website liet onvoldoende zien welke apps het bedrijf ontwikkelt en welke waarde die bieden.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Aanpak</span>
                    <p>
                      We brachten de propositie terug naar een duidelijke boodschap en bouwden een structuur die bezoekers sneller naar de juiste informatie leidt.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  <span className="chip">Duidelijkere propositie</span>
                  <span className="chip">Professionelere uitstraling</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="GuestRoomUtrecht" />
              </div>
              {' '}
              <div className="case__body">
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
                    <span className="k">Aanpak</span>
                    <p>
                      We ontwikkelden een visuele website met een duidelijke boekingsroute en focus op beleving.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  <span className="chip">Sterker verhaal</span>
                  <span className="chip">Betere gebruikerservaring</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-kerk" fit="cover" placeholder="[ Ontmoetingskerk ]" alt="Ontmoetingskerk" />
              </div>
              {' '}
              <div className="case__body">
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
                    <span className="k">Aanpak</span>
                    <p>
                      We brachten agenda, nieuws en activiteiten samen in een duidelijke structuur.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  <span className="chip">Meer overzicht</span>
                  <span className="chip">Eenvoudiger beheer</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="case-africa" fit="cover" placeholder="[ LoveForAfrica ]" alt="LoveForAfrica" />
              </div>
              {' '}
              <div className="case__body">
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
                    <span className="k">Aanpak</span>
                    <p>
                      We ontwikkelden een website waarin projecten, verhalen en betrokkenheid centraal staan.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  <span className="chip">Sterker verhaal</span>
                  <span className="chip">Meer vertrouwen</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="contact" data-theme="dark" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="overcta reveal">
            <h2 className="display">Laten we een keer kennismaken.</h2>
            {' '}
            <p className="lead">
              Laten we kijken waar jouw grootste online kansen liggen. Zonder verplichtingen.
            </p>
            {' '}
            <div className="overcta__ctas">
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag je gratis scan aan
              </Link>
              {' '}
              <Link className="btn btn-outline" to="/contact">Plan een kennismaking</Link>
            </div>
            {' '}
            <div className="overcta__trust">
              <span>Geen verplichtingen</span>
              {' '}
              <span>Persoonlijk contact</span>
              {' '}
              <span>Reactie binnen 2 werkdagen</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
