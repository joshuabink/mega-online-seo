import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/diensten/werken-bij-websites')({
  head: () => ({
    meta: [
      { title: "Werken-bij Websites — MegaOnline.io" },
      { name: 'description', content: "Werken-bij websites die vertrouwen opbouwen, je bedrijf aantrekkelijk presenteren en het makkelijker maken voor de juiste mensen om te solliciteren." },
      { property: 'og:title', content: "Werken-bij Websites — MegaOnline.io" },
      { property: 'og:description', content: "Werken-bij websites die vertrouwen opbouwen, je bedrijf aantrekkelijk presenteren en het makkelijker maken voor de juiste mensen om te solliciteren." },
      { property: 'og:url', content: "https://megaonline.io/diensten/werken-bij-websites" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/werken-bij-websites" },
    ],
  }),
  component: WerkenBijWebsites,
})

function WerkenBijWebsites() {
  return (
    <main id="top">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Werken-bij Websites">
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
                <b>Werken-bij Websites</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Voor bedrijven die personeel zoeken
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je website kost je misschien niet alleen klanten, maar ook
                {' '}
                <em>medewerkers.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Wij bouwen werken-bij websites die vertrouwen opbouwen, jouw bedrijf aantrekkelijk presenteren en het makkelijker maken voor de juiste mensen om te solliciteren.
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
                <Media id="wb-hero" fit="cover" placeholder="[ TEAMFOTO OP DE WERKVLOER ]" alt="TEAMFOTO OP DE WERKVLOER" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">✓</span>
                {' '}
                <span>
                  <span className="tt">Nieuwe sollicitatie binnen</span>
                  {' '}
                  <span className="ts">Via de werken-bij pagina</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">8 sec</span>
                {' '}
                <span className="l">om te overtuigen</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waarom werken-bij pagina's niet werken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het probleem</span>
            {' '}
            <h2 className="h2">
              Misschien hebben jullie niet alleen een
              {' '}
              <em>personeelstekort.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>
                Misschien maakt jullie website solliciteren onnodig moeilijk.
              </h3>
              {' '}
              <p>
                Goede mensen vinden is zwaar. Maar vaak ligt het niet alleen aan de arbeidsmarkt. Het ligt ook aan wat iemand ziet wanneer hij jouw bedrijf opzoekt.
              </p>
              {' '}
              <p>
                Een twijfelende sollicitant haakt net zo geruisloos af als een twijfelende klant. Geen gezichten, geen sfeer, geen idee hoe het is om bij je te werken. En dus stuurt hij die sollicitatie nooit.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Geen idee hoe het is om bij je te werken</h4>
                <p>Wie zich er niets bij kan voorstellen, stapt niet op je af.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Alleen een lijstje vacatures</h4>
                <p>
                  Functietitels en eisen vertellen niets over de mensen of de sfeer.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Solliciteren kost te veel moeite</h4>
                <p>
                  Lange formulieren en onduidelijke stappen schrikken juist goede mensen af.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Het bedrijf voelt onpersoonlijk</h4>
                <p>
                  Een afstandelijke pagina maakt twijfel groter in plaats van kleiner.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Er is geen vertrouwen</h4>
                <p>
                  Zonder echte verhalen blijft het gissen of dit een fijne werkgever is.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Geen echte foto's van het team</h4>
                <p>
                  Stockfoto's of geen beeld laten zien dat je iets te verbergen lijkt te hebben.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Meer dan een vacaturelijst">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Meer dan een vacaturelijst</span>
            {' '}
            <h2 className="h2">
              Mensen solliciteren niet op vacatures.
              <br />
              Mensen solliciteren op een
              {' '}
              <em>toekomst.</em>
            </h2>
            {' '}
            <p className="lead">
              Voordat iemand op 'solliciteren' klikt, wil hij eigenlijk maar één ding weten: word ik hier gelukkig? Dat antwoord geef je niet met een functie-omschrijving, maar met een beeld van het echte werk.
            </p>
          </Reveal>
          {' '}
          <div className="exgrid" style={{ gridTemplateColumns: "repeat(5,1fr)", marginTop: "clamp(34px,4vw,48px)" }}>
            <Reveal as="div" className="exchip reveal" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="users" />
              </span>
              Met wie ze werken
            </Reveal>
            {' '}
            <Reveal as="div" className="exchip reveal" data-d="1" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="sun" />
              </span>
              Hoe een werkdag eruitziet
            </Reveal>
            {' '}
            <Reveal as="div" className="exchip reveal" data-d="2" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="smile" />
              </span>
              Wat de sfeer is
            </Reveal>
            {' '}
            <Reveal as="div" className="exchip reveal" data-d="3" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="heart" />
              </span>
              Waarom collega's blijven
            </Reveal>
            {' '}
            <Reveal as="div" className="exchip reveal" data-d="4" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
              <span className="iconbox iconbox--sm">
                <Icon name="sparkles" />
              </span>
              Wat het bedrijf bijzonder maakt
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Wat een goede werken-bij website nodig heeft">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De bouwstenen</span>
            {' '}
            <h2 className="h2">
              Wat een goede werken-bij website echt
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen technische checklist, maar de dingen die een twijfelende sollicitant over de streep trekken. Dit zit doordacht in elke werken-bij website die we bouwen.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Vertrouwen</h4>
              <p>
                Een eerlijke, kloppende uitstraling die laat zien dat dit een goede werkgever is.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Echte mensen</h4>
              <p>
                Gezichten en verhalen van collega's, niet anonieme functietitels.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="camera" />
              </span>
              <h4>Goede foto's</h4>
              <p>
                Authentiek beeld van de werkvloer dat de sfeer voelbaar maakt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="list-checks" />
              </span>
              <h4>Heldere verwachtingen</h4>
              <p>
                Duidelijk wat het werk inhoudt, zodat de juiste mensen reageren.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="send" />
              </span>
              <h4>Eenvoudig solliciteren</h4>
              <p>
                Een korte, drempelvrije route naar dat ene moment: de sollicitatie.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Sterke employer branding</h4>
              <p>
                Een herkenbaar verhaal over wie je bent en waarom mensen blijven.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiel gebruiksgemak</h4>
              <p>
                De meeste sollicitanten oriënteren zich op hun telefoon, in de avond.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="phone-call" />
              </span>
              <h4>Snelle contactmogelijkheden</h4>
              <p>
                Even appen of bellen, voor wie nog geen volledige sollicitatie wil sturen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Content maakt het verschil — fotografie & video">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ marginBottom: "8px" }}>
            <span className="label">Beeld & content</span>
            {' '}
            <h2 className="h2">
              Laat zien hoe het
              {' '}
              <em>echt</em>
              {' '}
              is.
            </h2>
          </Reveal>
          {' '}
          <div className="media">
            <Reveal as="div" className="mediagal reveal">
              <div className="mslot mslot--tall">
                <Media id="cw-media-1" fit="cover" placeholder="[ TEAMFOTO ]" alt="Collega's samen aan het werk op kantoor" />
              </div>
              {' '}
              <div className="mslot mslot--sq">
                <Media id="cw-media-2" fit="cover" placeholder="[ WERKDAG ]" alt="Monteur aan het werk op locatie" />
              </div>
              {' '}
              <div className="mslot mslot--sq">
                <Media id="cw-media-3" fit="cover" placeholder="[ INTERVIEW ]" alt="Gesprek tussen twee collega's" />
              </div>
              {' '}
              <div className="mslot mslot--wide">
                <Media id="cw-media-4" fit="cover" placeholder="[ VIDEO / SFEER ]" alt="Medewerker in het magazijn" />
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="media__body reveal" data-d="1">
              <h3>
                Bij werken-bij websites zijn beeld en video vaak belangrijker dan tekst.
              </h3>
              {' '}
              <p>
                Niemand voelt de sfeer van een bedrijf door een vacaturetekst te lezen. Maar één eerlijke teamfoto of een korte video van een werkdag zegt in seconden meer dan een hele pagina aan woorden.
              </p>
              {' '}
              <div className="twocol">
                <div>
                  <div className="ttl">Waar het vaak misgaat</div>
                  {' '}
                  <ul className="minilist">
                    <li>Geen of verouderde foto's</li>
                    {' '}
                    <li>Generieke stockbeelden</li>
                    {' '}
                    <li>Geen gezichten van het team</li>
                    {' '}
                    <li>Geen beeld van de werkvloer</li>
                  </ul>
                </div>
                {' '}
                <div>
                  <div className="ttl">Wat wij laten zien</div>
                  {' '}
                  <ul className="minilist minilist--do">
                    <li>Teamfoto's</li>
                    {' '}
                    <li>Werkdagbeelden</li>
                    {' '}
                    <li>Interviews met collega's</li>
                    {' '}
                    <li>Bedrijfsvideo's</li>
                    {' '}
                    <li>Sfeerbeelden</li>
                  </ul>
                </div>
              </div>
              {' '}
              <p style={{ marginTop: "22px", fontSize: "0.94rem" }}>
                Eenmalig bij de bouw van je website, of periodiek om je verhaal vers te houden.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="aanpak" data-theme="paper" data-screen-label="Hoe wij werken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze aanpak</span>
            {' '}
            <h2 className="h2">
              We beginnen bij de mensen. Niet bij de
              {' '}
              <em>vacatures.</em>
            </h2>
            {' '}
            <p className="lead">
              Een werken-bij website werkt pas als hij klopt met wie je bent en wie je zoekt. Daarom beginnen we altijd met begrijpen.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">Stap 01</span>
                  {' '}
                  <span className="iconbox">
                    <Icon name="search" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Begrijpen</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  We leren jouw bedrijf kennen. Wat maakt het werk leuk? Waarom blijven collega's? Wat maakt jullie anders dan de werkgever verderop? Pas als dat helder is, weten we welk verhaal de website moet vertellen.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Het doel is niet "meer sollicitaties". Het doel is dat de
                {' '}
                <em>juiste</em>
                {' '}
                mensen denken: hier wil ik werken.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Stap 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="user-search" />
                </span>
              </div>
              {' '}
              <h3>Mensen begrijpen</h3>
              {' '}
              <p>
                We onderzoeken wie je wilt aantrekken en wat die mensen nodig hebben om over de streep te gaan.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Stap 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="layout" />
                </span>
              </div>
              {' '}
              <h3>Structuur</h3>
              {' '}
              <p>
                We bepalen welke informatie en welk beeld nodig zijn en hoe iemand naar de sollicitatie beweegt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Stap 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="code-2" />
                </span>
              </div>
              {' '}
              <h3>Ontwikkeling</h3>
              {' '}
              <p>
                We bouwen een website die solliciteren makkelijker maakt en die je eenvoudig zelf bijhoudt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Voor welke bedrijven?">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie we bouwen</span>
            {' '}
            <h2 className="h2">
              Voor bedrijven die moeite hebben om
              {' '}
              <em>goede mensen</em>
              {' '}
              te vinden.
            </h2>
            {' '}
            <p className="lead">
              Juist in sectoren waar vakmensen schaars zijn, maakt een sterke werken-bij website het verschil tussen opvallen en vergeten worden.
            </p>
          </Reveal>
          {' '}
          <div className="builtfor">
            <Reveal as="div" className="exgrid reveal">
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="wrench" />
                </span>
                Installatiebedrijven
              </div>
              {' '}
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="hard-hat" />
                </span>
                Bouwbedrijven
              </div>
              {' '}
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="truck" />
                </span>
                Transportbedrijven
              </div>
              {' '}
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="leaf" />
                </span>
                Hoveniers
              </div>
              {' '}
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="cog" />
                </span>
                Technische bedrijven
              </div>
              {' '}
              <div className="exchip">
                <span className="iconbox iconbox--sm">
                  <Icon name="briefcase" />
                </span>
                Dienstverleners
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="consider reveal" data-d="1">
              <h3>Herken je dit?</h3>
              {' '}
              <p>
                Het werk is er, de klanten zijn er, maar de handen om het uit te voeren ontbreken. En de sollicitaties die wél binnenkomen, passen lang niet altijd.
              </p>
              {' '}
              <ul className="considlist" style={{ gridTemplateColumns: "1fr" }}>
                <li>Vacatures blijven lang openstaan</li>
                {' '}
                <li>Goede mensen kennen je bedrijf niet</li>
                {' '}
                <li>Je concurreert met grotere werkgevers</li>
                {' '}
                <li>Je website laat het werk niet zien</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Koppelingen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Koppelingen</span>
            {' '}
            <h2 className="h2">
              Past in jouw bestaande
              {' '}
              <em>manier van werken.</em>
            </h2>
            {' '}
            <p className="lead">
              Sollicitaties komen niet op een eilandje binnen. We verbinden je werken-bij website met de systemen waarmee jij of je recruiter al werkt, zodat opvolgen moeiteloos gaat.
            </p>
          </Reveal>
          {' '}
          <div className="integ">
            <Reveal as="div" className="integ__item reveal">
              <span className="iconbox iconbox--sm">
                <Icon name="briefcase" />
              </span>
              <h4>ATS-systemen</h4>
              <p>Sollicitaties landen direct in je wervingssysteem.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="1">
              <span className="iconbox iconbox--sm">
                <Icon name="file-text" />
              </span>
              <h4>Sollicitatieformulieren</h4>
              <p>Kort en drempelvrij, afgestemd op de functie.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="2">
              <span className="iconbox iconbox--sm">
                <Icon name="calendar-days" />
              </span>
              <h4>Agenda's</h4>
              <p>
                Kennismakingsgesprekken meteen ingepland, zonder heen-en-weer.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="3">
              <span className="iconbox iconbox--sm">
                <Icon name="users" />
              </span>
              <h4>CRM-systemen</h4>
              <p>Kandidaten netjes geregistreerd en opgevolgd.</p>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="integ__note reveal">
            <span className="iconbox iconbox--sm">
              <Icon name="link-2" />
            </span>
            Geen technisch gedoe voor jou. Het draait om gebruiksgemak: voor de sollicitant én voor jou.
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Een sollicitatie is ook een conversie">
        <div className="wrap">
          <div className="wp">
            <Reveal as="div" className="wp__panel reveal">
              <span className="label">Dezelfde filosofie</span>
              {' '}
              <h2 className="h2" style={{ marginTop: "18px", fontSize: "clamp(1.7rem,2.8vw,2.6rem)" }}>Sollicitaties ontstaan niet vanzelf.</h2>
              {' '}
              <p className="lead" style={{ marginTop: "16px", fontSize: "1.05rem" }}>
                Een sollicitatie is, net als een aanvraag of boeking, een conversie. Dezelfde principes die zorgen voor meer klanten, zorgen ook voor meer en betere sollicitaties.
              </p>
              {' '}
              <div className="pullnote">
                Wie online klanten weet te overtuigen, kan met dezelfde aanpak ook
                {' '}
                <em>medewerkers</em>
                {' '}
                overtuigen.
              </div>
            </Reveal>
            {' '}
            <Reveal as="ul" className="wplist reveal" data-d="1">
              <li>
                <span className="wn">01</span>
                <h4>Vertrouwen</h4>
                <p>
                  Een eerlijke uitstraling waardoor mensen durven te reageren.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">02</span>
                <h4>Duidelijkheid</h4>
                <p>Helder wat het werk is en wat de volgende stap is.</p>
              </li>
              {' '}
              <li>
                <span className="wn">03</span>
                <h4>Gebruiksgemak</h4>
                <p>Solliciteren zonder onnodige drempels of lange formulieren.</p>
              </li>
              {' '}
              <li>
                <span className="wn">04</span>
                <h4>Sociale bewijskracht</h4>
                <p>Verhalen van collega's die laten zien hoe het echt is.</p>
              </li>
              {' '}
              <li>
                <span className="wn">05</span>
                <h4>Sterke call-to-actions</h4>
                <p>Een duidelijke uitnodiging om de stap te zetten.</p>
              </li>
              {' '}
              <li>
                <span className="wn">06</span>
                <h4>Het juiste beeld</h4>
                <p>
                  Foto's en video die de twijfel wegnemen in plaats van vergroten.
                </p>
              </li>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werk" data-theme="light" data-screen-label="Cases">
        <div className="wrap">
          <Reveal as="div" className="shead shead--split reveal">
            <div className="shead">
              <span className="label">Ons werk</span>
              {' '}
              <h2 className="h2">
                Werken-bij websites die
                {' '}
                <em>aantrekken.</em>
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
                <Media id="wb-case-1" fit="cover" placeholder="[ INSTALLATIEBEDRIJF ]" alt="INSTALLATIEBEDRIJF" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 01</span>
                {' '}
                <h3 className="case__name">Binnenkort</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Installatie</span>
                  <span className="tag">Techniek</span>
                </div>
                {' '}
                <p className="case__context">
                  Een technisch bedrijf dat continu monteurs zoekt in een krappe markt.
                </p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>
                      Vacatures bleven lang openstaan en de website liet niet zien hoe het is om er te werken.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We tonen hier binnenkort een recruitment-gerelateerde case zodra het project live is.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Volgt</span>
                </div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="article" className="case reveal" data-d="1">
              <div className="case__media">
                <Media id="wb-case-2" fit="cover" placeholder="[ BOUWBEDRIJF ]" alt="BOUWBEDRIJF" />
              </div>
              {' '}
              <div className="case__body">
                <span className="case__no">CASE 02</span>
                {' '}
                <h3 className="case__name">Binnenkort</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Bouw</span>
                  <span className="tag">Vakmensen</span>
                </div>
                {' '}
                <p className="case__context">
                  Een bouwbedrijf dat wil opvallen bij vakmensen die volop keuze hebben.
                </p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Uitdaging</span>
                    <p>
                      Het bedrijf voelde online onpersoonlijk en concurreerde met grotere werkgevers.
                    </p>
                  </div>
                  {' '}
                  <div className="case__step">
                    <span className="k">Wat we deden</span>
                    <p>
                      We tonen hier binnenkort een recruitment-gerelateerde case zodra het project live is.
                    </p>
                  </div>
                </div>
                {' '}
                <div className="case__chips">
                  <span className="k">Resultaat</span>
                  {' '}
                  <span className="chip">Volgt</span>
                </div>
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
            <Qa question="Heb ik een aparte werken-bij website nodig?" className="reveal">
                Niet per se. Soms is een sterke werken-bij sectie binnen je bestaande website precies genoeg, soms werkt een aparte werken-bij website beter omdat je daar volledig kunt focussen op sfeer, mensen en solliciteren. In de gratis websitescan kijken we wat voor jouw situatie het slimst is.
            </Qa>
            {' '}
            <Qa question="Kunnen vacatures automatisch worden bijgewerkt?" className="reveal">
                Ja. We kunnen je vacatures koppelen aan je ATS of wervingssysteem, zodat nieuwe of gesloten vacatures automatisch op de website verschijnen of verdwijnen. Je kunt ze ook eenvoudig zelf beheren, zonder technische kennis.
            </Qa>
            {' '}
            <Qa question="Helpen jullie ook met fotografie?" className="reveal">
                Zeker. Bij werken-bij websites is beeld vaak belangrijker dan tekst. We kunnen helpen met teamfoto's, werkdagbeelden, interviews en bedrijfsvideo's, eenmalig bij de bouw of periodiek via contentdagen om je verhaal vers te houden.
            </Qa>
            {' '}
            <Qa question="Kunnen medewerkers hun verhaal delen?" className="reveal">
                Graag zelfs. Verhalen van collega's zijn de sterkste vorm van sociale bewijskracht. We bouwen ruimte in voor portretten, quotes en interviews, zodat sollicitanten een eerlijk beeld krijgen van hoe het is om bij je te werken.
            </Qa>
            {' '}
            <Qa question="Kunnen sollicitaties gekoppeld worden aan onze software?" className="reveal">
                In de meeste gevallen wel. Denk aan ATS-systemen, sollicitatieformulieren, agenda's voor kennismakingsgesprekken en CRM-systemen. Zo komt elke sollicitatie meteen op de juiste plek terecht en valt niemand tussen wal en schip.
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
              <Reveal as="h2" className="display reveal">Maak solliciteren makkelijker voor de juiste mensen.</Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Ontdek hoe een betere werken-bij website kan bijdragen aan meer en betere sollicitaties.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2" style={{ marginTop: "28px" }}>
                <Link className="btn btn-primary" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
              {' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2" style={{ marginTop: "24px" }}>
                <span>Geen verplichtingen</span>
                {' '}
                <span>Geen automatisch rapport</span>
                {' '}
                <span>Reactie binnen 2 werkdagen</span>
              </Reveal>
            </div>
            {' '}
            <SteppedLeadForm
              className="reveal"
              subject="Nieuwe websitescan-aanvraag — MegaOnline.io"
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
                  <label htmlFor="f-branche">Branche</label>
                  {' '}
                  <select id="f-branche" name="branche" required defaultValue="">
                    <option value="" disabled>Kies je branche</option>
                    {' '}
                    <option value="Installatie / Techniek">Installatie / Techniek</option>
                    {' '}
                    <option value="Bouw">Bouw</option>
                    {' '}
                    <option value="Transport / Logistiek">Transport / Logistiek</option>
                    {' '}
                    <option value="Hoveniers / Groen">Hoveniers / Groen</option>
                    {' '}
                    <option value="Zakelijke dienstverlening">Zakelijke dienstverlening</option>
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
