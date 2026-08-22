import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'
import '@/styles/pages/diensten-starter-website.css'

export const Route = createFileRoute('/diensten/starter-website')({
  head: () => ({
    meta: [
      { title: "Starter Website | MegaOnline.io" },
      { name: 'description', content: "Een professionele website voor starters. Sneller gebouwd en voordeliger, dankzij beproefde, herbruikbare bouwblokken. Een eerlijke instapoptie vanaf €1.500." },
      { property: 'og:title', content: "Starter Website | MegaOnline.io" },
      { property: 'og:description', content: "Een professionele website voor starters. Sneller gebouwd en voordeliger, dankzij beproefde, herbruikbare bouwblokken. Een eerlijke instapoptie vanaf €1.500." },
      { property: 'og:url', content: "https://megaonline.io/diensten/starter-website" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/starter-website" },
    ],
  }),
  component: StarterWebsite,
})

function StarterWebsite() {
  return (
    <main id="top" data-page="diensten-starter-website">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Starter Website">
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
                <b>Starter Website</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  De voordelige instapoptie voor starters
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Net begonnen? Een nette website hoeft
                {' '}
                <em>niet duur</em>
                {' '}
                te zijn.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                De Starter Website is onze bewust voordeligere optie. Sneller gebouwd op beproefde, herbruikbare bouwblokken, zodat je als startende ondernemer professioneel online staat zonder een groot budget.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href="#prijs">
                  Bekijk wat het kost
                  {' '}
                  <span className="arr">→</span>
                </a>
                {' '}
                <Link className="tlink" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
            </div>
            {' '}
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media id="st-hero" fit="cover" placeholder="[ STARTERSWEBSITE ]" alt="Voorbeeld van een starterswebsite" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">€</span>
                {' '}
                <span>
                  <span className="tt">Vanaf € 1.500</span>
                  {' '}
                  <span className="ts">Heldere instapprijs</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">Snel</span>
                {' '}
                <span className="l">live in weken</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat een Starter Website wel en niet is">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk vanaf het begin</span>
            {' '}
            <h2 className="h2">
              Een
              {' '}
              <em>bewust voordeligere</em>
              {' '}
              optie. En dat zeggen we ook gewoon.
            </h2>
            {' '}
            <p className="lead">
              De Starter Website is geen uitgekleed product, maar wél een andere keuze dan onze volledige Conversie Website. Goedkoper en sneller, omdat we slim hergebruiken wat zich al bewezen heeft. We zijn er open over waar dat verschil zit.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>
                Voor starters die professioneel online willen, zonder groot budget.
              </h3>
              {' '}
              <p>
                Als je net begint, heb je vaak nog geen ruimte voor een volledig maatwerktraject. Maar een rommelige doe-het-zelf-site of een gratis bouwertje doet je net zo goed tekort.
              </p>
              {' '}
              <p>
                De Starter Website zit daar bewust tussenin: een verzorgde, betrouwbare website tegen een eerlijke instapprijs, gebouwd op een basis die we al honderden keren scherp hebben gekregen.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Je bent net gestart</h4>
                <p>
                  Je hebt een nette online plek nodig, maar nog geen groot marketingbudget.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Snel online willen</h4>
                <p>
                  Je wilt niet weken wachten, maar binnen afzienbare tijd live staan.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Overzichtelijk aanbod</h4>
                <p>
                  Een paar diensten of producten, geen complexe website met tientallen pagina's.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Vooral gevonden worden</h4>
                <p>
                  Mensen die je naam horen, willen je makkelijk kunnen vinden en bereiken.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Helder budget</h4>
                <p>
                  Je wilt vooraf weten waar je aan toe bent, zonder verrassingen achteraf.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Ruimte om te groeien</h4>
                <p>
                  Later doorgroeien naar meer maatwerk moet gewoon mogelijk blijven.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Waarom een Starter Website voordeliger kan">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom het goedkoper kan</span>
            {' '}
            <h2 className="h2">
              Geen knip in de kwaliteit.
              <br />
              Wel slim met de
              {' '}
              <em>bouwtijd.</em>
            </h2>
            {' '}
            <p className="lead">
              Een lagere prijs betekent niet minder zorg. Het betekent dat we niet elke keer het wiel opnieuw uitvinden. We werken met beproefde, herbruikbare bouwblokken en een vaste, efficiënte aanpak.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">Het verschil</span>
                  {' '}
                  <span className="iconbox">
                    <Icon name="blocks" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Herbruikbare bouwblokken</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  In plaats van elke website vanaf nul te ontwerpen, stellen we hem samen uit beproefde onderdelen: een sterke hero, een dienstenblok, een contactsectie. Stuk voor stuk al verfijnd op eerdere projecten en afgestemd op jouw kleuren, teksten en logo.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Minder uren in opbouw,
                {' '}
                <em>meer</em>
                {' '}
                overgehouden voor jouw budget.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Voordeel 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="layout-template" />
                </span>
              </div>
              {' '}
              <h3>Beproefde structuur</h3>
              {' '}
              <p>
                Een opbouw die zich al heeft bewezen, dus geen lang ontwerpproces vooraf.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Voordeel 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="zap" />
                </span>
              </div>
              {' '}
              <h3>Sneller traject</h3>
              {' '}
              <p>
                Minder afstemmingsrondes en een strakke planning, dus eerder live.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Voordeel 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="package-check" />
                </span>
              </div>
              {' '}
              <h3>Vaste opzet</h3>
              {' '}
              <p>
                Een helder pakket met een duidelijke omvang, dus een eerlijke vaste prijs.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Voordeel 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="sparkles" />
                </span>
              </div>
              {' '}
              <h3>Toch jouw uitstraling</h3>
              {' '}
              <p>
                De blokken zijn herbruikbaar, de kleuren, teksten en beelden zijn van jou.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat je krijgt bij een Starter Website">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">In het pakket</span>
            {' '}
            <h2 className="h2">
              Wat je bij een Starter Website
              {' '}
              <em>krijgt.</em>
            </h2>
            {' '}
            <p className="lead">
              Een volwaardige, professionele website. Compact in omvang, maar compleet in wat een startende ondernemer nodig heeft om online gevonden en vertrouwd te worden.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="files" />
              </span>
              <h4>Tot ± 5 pagina's</h4>
              <p>
                Home, over, diensten en contact. Genoeg om je verhaal helder te vertellen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="palette" />
              </span>
              <h4>Eigen kleuren & logo</h4>
              <p>
                We stemmen de bouwblokken af op jouw huisstijl en uitstraling.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobielvriendelijk</h4>
              <p>
                Soepel en logisch op de telefoon, waar de meeste bezoekers binnenkomen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="mail" />
              </span>
              <h4>Contactformulier</h4>
              <p>
                Een duidelijke route zodat mensen je makkelijk kunnen bereiken.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>SEO-basis</h4>
              <p>
                Een gezond fundament zodat je vindbaar bent op je eigen naam en dienst.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="gauge" />
              </span>
              <h4>Snel & veilig</h4>
              <p>Snel ladend, veilig en stabiel.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="settings" />
              </span>
              <h4>Zelf te beheren</h4>
              <p>Teksten en foto's pas je later eenvoudig zelf aan.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="trending-up" />
              </span>
              <h4>Ruimte om te groeien</h4>
              <p>Later uitbreiden of doorgroeien naar maatwerk kan altijd.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe een Starter traject eruitziet">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het traject</span>
            {' '}
            <h2 className="h2">
              Een kort, helder traject.
              {' '}
              <em>Snel</em>
              {' '}
              live.
            </h2>
            {' '}
            <p className="lead">
              Doordat we met vaste bouwblokken en een beproefde opzet werken, hoeft er veel minder bedacht te worden. Dat scheelt tijd, en dus geld.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="tl reveal" style={{ marginTop: "clamp(40px,4.5vw,60px)" }}>
            <div className="tl__row">
              <span className="tl__dot">01</span>
              {' '}
              <div className="tl__phase">Stap 01 · Kennismaking</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Korte intake</span>
                </div>
                {' '}
                <p>
                  We bespreken wat je doet, wat je nodig hebt en welke pagina's er moeten komen. Helder en to-the-point.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row">
              <span className="tl__dot">02</span>
              {' '}
              <div className="tl__phase">Stap 02 · Aanleveren</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Teksten, logo & beeld</span>
                </div>
                {' '}
                <p>
                  Jij levert de basis aan: je teksten, je logo en een paar foto's. Wij denken mee waar dat nodig is.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row tl__row--rec">
              <span className="tl__dot">03</span>
              {' '}
              <div className="tl__phase">Stap 03 · Samenstellen</div>
              {' '}
              <div className="tl__card tl__card--rec">
                <div className="tl__cardhead">
                  <span className="svcname">Bouwblokken op maat gezet</span>
                </div>
                {' '}
                <p>
                  We stellen je website samen uit de beproefde bouwblokken en stemmen alles af op jouw huisstijl en inhoud.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row">
              <span className="tl__dot">04</span>
              {' '}
              <div className="tl__phase">Stap 04 · Bijschaven</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Één feedbackronde</span>
                </div>
                {' '}
                <p>
                  Je bekijkt het resultaat en we verwerken je opmerkingen in één gerichte ronde. Kort en doelgericht.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__liverow">
              <span className="tl__live">
                <Icon name="rocket" />
              </span>
              {' '}
              <span className="tl__livelabel">Stap 05 · Livegang</span>
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Starter Website vs Conversie Website">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerlijk vergelijken</span>
            {' '}
            <h2 className="h2">
              Wat je inlevert, en wat je
              {' '}
              <em>ervoor terugkrijgt.</em>
            </h2>
            {' '}
            <p className="lead">
              De Starter Website is goedkoper omdat we andere keuzes maken dan bij onze volledige Conversie Website. Hieronder zie je precies waar dat verschil zit, zonder mooie praatjes.
            </p>
          </Reveal>
          {' '}
          <div className="compare">
            <Reveal as="div" className="cmp cmp--plain reveal">
              <span className="cmp__tag">Starter Website · vanaf € 1.500</span>
              {' '}
              <h3>Voordelig & snel</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">✓</span>
                  Gebouwd op beproefde, herbruikbare bouwblokken
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Vaste opzet, vaste prijs, snel live
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Afgestemd op jouw kleuren, teksten en logo
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  Geen volledig maatwerkontwerp vanaf nul
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  Compact in omvang (± 5 pagina's)
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  Eén feedbackronde in plaats van een uitgebreid traject
                </li>
                {' '}
                <li>
                  <span className="ic">–</span>
                  Geen diepgaande conversie- en doelgroepstrategie
                </li>
              </ul>
            </Reveal>
            {' '}
            <Reveal as="div" className="cmp cmp--us reveal" data-d="1">
              <span className="cmp__badge">Onze kerndienst</span>
              {' '}
              <span className="cmp__tag">Conversie Website · maatwerk</span>
              {' '}
              <h3>Volledig op groei gericht</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">✓</span>
                  Volledig maatwerk, ontworpen rond jouw bedrijf
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Strategie op doelgroep, conversie en vindbaarheid
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Onbeperkt in omvang en opbouw
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Meerdere ontwerp- en feedbackrondes
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Gericht op meer aanvragen, reserveringen en boekingen
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Voor bedrijven die echt willen doorgroeien
                </li>
              </ul>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="shead reveal" style={{ marginTop: "clamp(28px,3vw,40px)", maxWidth: "none" }}>
            <p className="lead" style={{ fontSize: "1rem" }}>
              Twijfel je welke optie bij je past? Begin met een Starter Website en groei later door, of
              {' '}
              <Link to="/diensten/conversie-website" style={{ color: "var(--accent-text)" }}>bekijk meteen de Conversie Website</Link>
              . We adviseren je er eerlijk in.
            </p>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="prijs" data-theme="paper" data-screen-label="Prijs van een Starter Website">
        <div className="wrap">
          <div className="price-wrap">
            <Reveal as="div" className="shead reveal" style={{ maxWidth: "none" }}>
              <span className="label">De prijs</span>
              {' '}
              <h2 className="h2">
                Een eerlijke instapprijs,
                {' '}
                <em>vooraf duidelijk.</em>
              </h2>
              {' '}
              <p className="lead">
                Geen vage offertes of verrassingen achteraf. De Starter Website heeft een heldere vaste opzet en daarmee een voorspelbare prijs. De exacte investering hangt af van het aantal pagina's en wat je zelf aanlevert.
              </p>
              {' '}
              <div className="pullnote">
                Je weet vooraf waar je aan toe bent.
                {' '}
                <em>Geen</em>
                {' '}
                kleine lettertjes.
              </div>
              {' '}
              <ul className="minilist" style={{ marginTop: "24px", gap: "10px" }}>
                <li>Vaste prijs op basis van een helder pakket</li>
                {' '}
                <li>Inclusief inrichting, basis-SEO en livegang</li>
                {' '}
                <li>Hosting en onderhoud optioneel bij te nemen</li>
                {' '}
                <li>Later doorgroeien naar maatwerk altijd mogelijk</li>
              </ul>
            </Reveal>
            {' '}
            <Reveal as="div" className="price-card reveal" data-d="1">
              <span className="price-card__tag">
                <span className="gdot" />
                {' '}
                Starter Website
              </span>
              {' '}
              <div className="price-card__amount">
                <span className="price-card__from">vanaf</span>
                {' '}
                <span className="price-card__num">€ 1.500</span>
              </div>
              {' '}
              <p className="price-card__note">
                Een complete, verzorgde website voor starters, gebouwd op beproefde bouwblokken en afgestemd op jouw huisstijl.
              </p>
              {' '}
              <ul className="price-card__list">
                <li>
                  <span className="ic">✓</span>
                  Tot ± 5 pagina's, mobielvriendelijk
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Eigen kleuren, logo en teksten
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Contactformulier & SEO-basis
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Zelf te beheren
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Eén feedbackronde en livegang
                </li>
              </ul>
              {' '}
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag een vrijblijvende offerte aan
                {' '}
                <span className="arr">→</span>
              </Link>
              {' '}
              <p className="price-card__fine">Vrijblijvend · Reactie binnen 2 werkdagen</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>
            {' '}
            <h2 className="h2">Wat je misschien nog wil weten</h2>
          </Reveal>
          {' '}
          <div className="faq">
            <Qa question="Waarom is een Starter Website goedkoper?" className="reveal">
                Omdat we niet elke website vanaf nul ontwerpen. We werken met beproefde, herbruikbare bouwblokken en een vaste opzet die zich al heeft bewezen. Dat scheelt veel ontwerp- en bouwuren, en dat voordeel geven we door in de prijs. De kwaliteit van de basis blijft hetzelfde, alleen het proces is sneller.
            </Qa>
            {' '}
            <Qa question="Wordt mijn website dan hetzelfde als die van anderen?" className="reveal">
                Nee. De bouwblokken zijn herbruikbaar, maar jouw kleuren, logo, teksten en foto's zijn dat niet. We stemmen alles af op jouw huisstijl en bedrijf, zodat de website herkenbaar van jou is. Het is geen kant-en-klaar sjabloontje, maar een op maat ingerichte website op een slimme basis.
            </Qa>
            {' '}
            <Qa question="Wat kost een Starter Website precies?" className="reveal">
                De Starter Website begint vanaf € 1.500. De exacte prijs hangt af van het aantal pagina's en wat je zelf aanlevert aan teksten en beeld. Omdat we met een vaste opzet werken, weet je vooraf waar je aan toe bent. Geen verrassingen achteraf.
            </Qa>
            {' '}
            <Qa question="Kan ik later uitbreiden of doorgroeien?" className="reveal">
                Zeker. Je kunt later pagina's toevoegen of doorgroeien naar een volledige Conversie Website met maatwerk en strategie. Je begint klein en bouwt rustig verder wanneer je bedrijf daar klaar voor is.
            </Qa>
            {' '}
            <Qa question="Voor wie is de Starter Website bedoeld?" className="reveal">
                Vooral voor startende ondernemers en zzp'ers die professioneel online willen, maar nog geen groot budget hebben. Heb je een overzichtelijk aanbod en wil je vooral goed gevonden en bereikt worden, dan past deze optie goed. Wil je echt sturen op groei en conversie, dan is de Conversie Website een betere keuze. We zijn daar eerlijk over.
            </Qa>
            {' '}
            <Qa question="Hoe snel staat mijn website online?" className="reveal">
                Doordat we met vaste bouwblokken werken, gaat het bouwen een stuk sneller dan bij een maatwerktraject. Zodra je teksten, logo en beeld zijn aangeleverd, kunnen we vlot samenstellen. In de praktijk sta je doorgaans binnen enkele weken live.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA + scan-formulier">
        <div className="wrap">
          <div className="endcta__grid">
            <div className="endcta__copy">
              <Reveal as="h2" className="display reveal">Je eerste website hoeft geen gok te zijn.</Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Vraag een vrijblijvende offerte aan of plan een korte kennismaking. We kijken samen of de Starter Website bij je past, of dat een andere optie slimmer is.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2" style={{ marginTop: "28px" }}>
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  Vraag een vrijblijvende offerte aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
                {' '}
                <Link className="tlink" to="/contact">
                  Plan een kennismaking
                  {' '}
                  <span className="arr">→</span>
                </Link>
              </Reveal>
              {' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2" style={{ marginTop: "24px" }}>
                <span>Geen verplichtingen</span>
                {' '}
                <span>Eerlijk advies</span>
                {' '}
                <span>Reactie binnen 2 werkdagen</span>
              </Reveal>
            </div>
            {' '}
            <SteppedLeadForm
              className="reveal"
              subject="Nieuwe offerteaanvraag - Starter Website"
              head={
                <>
                  <span className="form__head-note">
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--accent-text)", display: "inline-block" }} />
                    Starter Website
                  </span>
                  {' '}
                  <h3>Vraag je offerte aan</h3>
                  {' '}
                  <p>Begin met je gegevens. De rest volgt in twee korte stappen.</p>
                </>
              }
              ok={
                <>
                <div className="ic">✓</div>
                {' '}
                <h3>Bedankt. Aanvraag ontvangen.</h3>
                {' '}
                <p style={{ color: "var(--muted)", marginTop: "10px" }}>
                  We nemen gemiddeld binnen 2 werkdagen contact met je op met een vrijblijvende offerte op maat.
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
                  <label htmlFor="f-naam">Je naam</label>
                  {' '}
                  <input id="f-naam" name="naam" type="text" placeholder="Voor- en achternaam" required />
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
                    <label htmlFor="f-bedrijf">Bedrijfsnaam</label>
                    {' '}
                    <input id="f-bedrijf" name="bedrijf" type="text" placeholder="Bedrijfsnaam (of in oprichting)" required />
                  </div>
                  {' '}
                  <div className="field">
                    <label htmlFor="f-email">E-mailadres</label>
                    {' '}
                    <input id="f-email" name="email" type="email" placeholder="jij@bedrijf.nl" required />
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
                  <label htmlFor="f-pagina">Hoeveel pagina's heb je ongeveer nodig?</label>
                  {' '}
                  <select id="f-pagina" name="pagina" required defaultValue="">
                    <option value="" disabled>Kies wat het beste past</option>
                    {' '}
                    <option value="1 pagina (one-pager)">1 pagina (one-pager)</option>
                    {' '}
                    <option value="2 tot 3 pagina's">2 tot 3 pagina's</option>
                    {' '}
                    <option value="4 tot 5 pagina's">4 tot 5 pagina's</option>
                    {' '}
                    <option value="Weet ik nog niet, adviseer mij">Weet ik nog niet, adviseer mij</option>
                  </select>
                </div>
                {' '}
                <div className="field">
                  <label htmlFor="f-toel">Waar gaat je bedrijf over? (optioneel)</label>
                  {' '}
                  <input id="f-toel" name="toel" type="text" placeholder="In één zin" />
                </div>
                {' '}
                <div className="form__nav">
                  <button className="btn btn-ghost" type="button" data-prev="">← Terug</button>
                  {' '}
                  <button className="btn btn-primary" type="submit">
                    Stuur mijn aanvraag
                    {' '}
                    <span className="arr">→</span>
                  </button>
                </div>
                {' '}
                <p className="form__disc">
                  Binnen twee werkdagen een reactie, en een eerlijk antwoord als je beter af bent met iets anders.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
