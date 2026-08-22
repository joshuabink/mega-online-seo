import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/diensten/website-optimalisatie')({
  head: () => ({
    meta: [
      { title: "Website Optimalisatie | MegaOnline.io" },
      { name: 'description', content: "Je website staat online, maar haalt er nog niet alles uit. Ontdek waar bezoekers afhaken en welke verbeteringen meer aanvragen opleveren." },
      { property: 'og:title', content: "Website Optimalisatie | MegaOnline.io" },
      { property: 'og:description', content: "Je website staat online, maar haalt er nog niet alles uit. Ontdek waar bezoekers afhaken en welke verbeteringen meer aanvragen opleveren." },
      { property: 'og:url', content: "https://megaonline.io/diensten/website-optimalisatie" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/website-optimalisatie" },
    ],
  }),
  component: WebsiteOptimalisatie,
})

function WebsiteOptimalisatie() {
  return (
    <main id="top">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Website Optimalisatie">
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
                <b>Website Optimalisatie</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Voor wie al een website heeft
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je website werkt. Maar werkt hij ook
                {' '}
                <em>optimaal?</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Ontdek waar bezoekers afhaken, welke kansen blijven liggen en hoe kleine verbeteringen kunnen leiden tot meer aanvragen, boekingen en contactmomenten. Vaak hoef je niet opnieuw te beginnen.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
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
            </div>
            {' '}
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media id="wo-hero" fit="cover" placeholder="[ JE HUIDIGE WEBSITE ]" alt="Voorbeeld van een bestaande website" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">↗</span>
                {' '}
                <span>
                  <span className="tt">Quick win gevonden</span>
                  {' '}
                  <span className="ts">Op de contactpagina</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">12</span>
                {' '}
                <span className="l">kansen in kaart</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wanneer optimaliseren slimmer is dan vervangen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Verbeteren vs. vervangen</span>
            {' '}
            <h2 className="h2">
              Misschien hoef je niet
              {' '}
              <em>opnieuw te beginnen.</em>
            </h2>
            {' '}
            <p className="lead">
              Een nieuwe website is niet altijd het antwoord. Soms zit de winst gewoon al in je huidige site. Dit zijn de signalen dat optimaliseren slimmer is dan vervangen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>
                Je website is niet kapot. Hij presteert alleen nog niet zoals hij zou kunnen.
              </h3>
              {' '}
              <p>
                Veel bedrijven denken bij tegenvallende resultaten meteen aan een compleet nieuwe website. Maar dat is vaak een dure oplossing voor een probleem dat kleiner is dan het lijkt.
              </p>
              {' '}
              <p>
                De basis staat er al. De vraag is niet of je opnieuw moet beginnen, maar waar bezoekers nu precies afhaken en wat er nodig is om dat te verhelpen.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Je website ziet er nog goed uit</h4>
                <p>
                  De uitstraling is prima, dus volledig vervangen voelt onnodig en zonde.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Bezoekers, maar weinig aanvragen</h4>
                <p>
                  Het verkeer is er wel, maar het zet niet om in contact of een boeking.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>De structuur voelt onduidelijk</h4>
                <p>
                  Bezoekers moeten zoeken naar wat ze nodig hebben en haken daardoor af.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Formulieren worden weinig ingevuld</h4>
                <p>
                  Mensen komen tot het formulier, maar maken de laatste stap niet af.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Bezoekers verlaten de site snel</h4>
                <p>
                  Een hoge uitstroom wijst op twijfel of een onduidelijke volgende stap.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Je weet niet wat bezoekers doen</h4>
                <p>
                  Zonder inzicht in gedrag blijft verbeteren gokken in plaats van weten.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Wat we optimaliseren">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar we naar kijken</span>
            {' '}
            <h2 className="h2">
              Wat we
              {' '}
              <em>optimaliseren.</em>
            </h2>
            {' '}
            <p className="lead">
              Optimaliseren is zelden één grote ingreep. Het is het slim aanscherpen van de plekken waar bezoekers nu afhaken of twijfelen.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="layout" />
              </span>
              <h4>Structuur</h4>
              <p>
                Een logische opbouw die bezoekers vanzelf de juiste kant op leidt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="compass" />
              </span>
              <h4>Navigatie</h4>
              <p>Mensen vinden in één oogopslag waar ze naartoe moeten.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Call-to-actions</h4>
              <p>Duidelijke knoppen die uitnodigen tot de volgende stap.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Formulieren</h4>
              <p>Korter en eenvoudiger, zodat meer bezoekers ze afmaken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="calendar-check" />
              </span>
              <h4>Boekingsroutes</h4>
              <p>Een soepele weg van interesse naar een ingeplande afspraak.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiele ervaring</h4>
              <p>Alles voelt logisch en soepel aan op de telefoon.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Vertrouwen</h4>
              <p>
                Signalen die bezoekers het laatste duwtje geven om contact op te nemen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="gauge" />
              </span>
              <h4>Snelheid</h4>
              <p>
                Snellere pagina's houden bezoekers vast en verlagen de drempel.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>SEO-basis</h4>
              <p>
                Een gezond fundament zodat je beter vindbaar wordt in Google.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="layout-template" />
              </span>
              <h4>Pagina-opbouw</h4>
              <p>De juiste informatie op de juiste plek, zonder ruis.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="dark" data-screen-label="Meer aanvragen begint met begrijpen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerst begrijpen</span>
            {' '}
            <h2 className="h2">
              Meer aanvragen begint met
              {' '}
              <em>begrijpen.</em>
            </h2>
            {' '}
            <p className="lead">
              We passen niet zomaar dingen aan. Lukraak knoppen verschuiven levert niets op. We beginnen altijd met analyseren: pas als helder is wáár het misgaat, weten we wat verbeteren oplevert.
            </p>
          </Reveal>
          {' '}
          <div className="builtfor">
            <Reveal as="div" className="exgrid reveal">
              <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                <span className="iconbox iconbox--sm">
                  <Icon name="activity" />
                </span>
                Gedrag: wat doen bezoekers echt?
              </div>
              {' '}
              <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                <span className="iconbox iconbox--sm">
                  <Icon name="alert-triangle" />
                </span>
                Knelpunten: waar haken ze af?
              </div>
              {' '}
              <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                <span className="iconbox iconbox--sm">
                  <Icon name="lightbulb" />
                </span>
                Kansen: wat blijft er liggen?
              </div>
              {' '}
              <div className="exchip" style={{ flexDirection: "column", alignItems: "flex-start", gap: "14px" }}>
                <span className="iconbox iconbox--sm">
                  <Icon name="hand-heart" />
                </span>
                Gebruikerservaring: voelt het soepel?
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="consider reveal" data-d="1">
              <h3>Verbeteren op basis van inzicht, niet op gevoel</h3>
              {' '}
              <p>
                Een aanpassing die op de ene website wonderen doet, kan op de andere niets opleveren. Daarom rusten onze keuzes op wat bezoekers daadwerkelijk doen, niet op aannames.
              </p>
              {' '}
              <ul className="considlist" style={{ gridTemplateColumns: "1fr" }}>
                <li>We analyseren het werkelijke bezoekersgedrag</li>
                {' '}
                <li>We leggen de knelpunten bloot</li>
                {' '}
                <li>We brengen de grootste kansen in kaart</li>
                {' '}
                <li>Pas daarna verbeteren we gericht</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Veel websites hebben dezelfde problemen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ marginBottom: "8px" }}>
            <span className="label">Veelvoorkomende patronen</span>
            {' '}
            <h2 className="h2">
              Veel websites lopen tegen
              {' '}
              <em>dezelfde dingen</em>
              {' '}
              aan.
            </h2>
          </Reveal>
          {' '}
          <div className="media">
            <Reveal as="div" className="mediagal reveal">
              <div className="mslot mslot--tall">
                <Media id="wo-prob-1" fit="cover" placeholder="[ ONDUIDELIJKE HOMEPAGE ]" alt="Homepage zonder duidelijke boodschap" />
              </div>
              {' '}
              <div className="mslot mslot--sq">
                <Media id="wo-prob-2" fit="cover" placeholder="[ VERSTOPT CONTACT ]" alt="Contactgegevens die moeilijk te vinden zijn" />
              </div>
              {' '}
              <div className="mslot mslot--sq">
                <Media id="wo-prob-3" fit="cover" placeholder="[ MOBIEL ]" alt="Website op een mobiel scherm" />
              </div>
              {' '}
              <div className="mslot mslot--wide">
                <Media id="wo-prob-4" fit="cover" placeholder="[ TE VEEL INFORMATIE ]" alt="Pagina met te veel informatie tegelijk" />
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="media__body reveal" data-d="1">
              <h3>Herken je deze patronen op je eigen website?</h3>
              {' '}
              <p>
                Het zijn zelden grote fouten. Het zijn de kleine dingen die samen net het verschil maken tussen een bezoeker die contact opneemt en eentje die wegklikt.
              </p>
              {' '}
              <div className="twocol" style={{ gridTemplateColumns: "1fr" }}>
                <ul className="minilist" style={{ gap: "12px" }}>
                  <li>Onduidelijke homepage</li>
                  {' '}
                  <li>Geen duidelijke volgende stap</li>
                  {' '}
                  <li>Te veel informatie tegelijk</li>
                  {' '}
                  <li>Te weinig vertrouwen</li>
                  {' '}
                  <li>Slechte mobiele ervaring</li>
                  {' '}
                  <li>Verborgen contactmogelijkheden</li>
                </ul>
              </div>
              {' '}
              <p style={{ marginTop: "22px", fontSize: "0.94rem" }}>
                Stuk voor stuk verbeterpunten die je zelden hoeven te leiden tot een volledig nieuwe website.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="aanpak" data-theme="dark" data-screen-label="Hoe wij werken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze aanpak</span>
            {' '}
            <h2 className="h2">
              Van
              {' '}
              <em>analyse</em>
              {' '}
              naar meetbare verbetering.
            </h2>
            {' '}
            <p className="lead">
              Een vaste, rustige aanpak. Geen losse trucs, maar een proces dat verbetering onderbouwt en zichtbaar maakt.
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
                <h3 style={{ marginTop: "18px" }}>Analyse</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  We brengen in kaart wat bezoekers op je website doen: waar ze binnenkomen, waar ze afhaken en welke kansen blijven liggen. De basis voor elke verbetering die volgt.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Eerst weten waar het misgaat.
                {' '}
                <em>Dan</em>
                {' '}
                pas verbeteren.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Stap 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="clipboard-list" />
                </span>
              </div>
              {' '}
              <h3>Verbeterpunten</h3>
              {' '}
              <p>
                We benoemen concreet welke knelpunten en kansen we zien op je website.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Stap 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="list-ordered" />
                </span>
              </div>
              {' '}
              <h3>Prioriteiten bepalen</h3>
              {' '}
              <p>
                We beginnen bij wat de meeste impact heeft voor de minste moeite.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Stap 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="sliders-horizontal" />
                </span>
              </div>
              {' '}
              <h3>Optimaliseren</h3>
              {' '}
              <p>
                We voeren de verbeteringen gericht door, zonder je website overhoop te halen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Stap 05</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="line-chart" />
                </span>
              </div>
              {' '}
              <h3>Meten</h3>
              {' '}
              <p>
                We kijken wat de aanpassingen opleveren en sturen bij waar dat nodig is.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Wanneer een nieuwe website slimmer is">
        <div className="wrap">
          <div className="wp">
            <Reveal as="div" className="wp__panel reveal">
              <span className="label">Eerlijk advies</span>
              {' '}
              <h2 className="h2" style={{ marginTop: "18px", fontSize: "clamp(1.7rem,2.8vw,2.6rem)" }}>Soms is optimaliseren niet genoeg.</h2>
              {' '}
              <p className="lead" style={{ marginTop: "16px", fontSize: "1.05rem" }}>
                We zeggen het liever eerlijk: niet elke website is het verbeteren waard. Soms is een site technisch of strategisch zo verouderd dat een nieuwe website simpelweg de betere investering is.
              </p>
              {' '}
              <div className="pullnote">
                Verbeteren op een verouderd fundament is dweilen met de kraan open. Dan is opnieuw bouwen
                {' '}
                <em>slimmer.</em>
              </div>
              {' '}
              <Link className="btn btn-primary" to="/diensten/conversie-website" style={{ marginTop: "26px" }}>
                Bekijk de Conversie Website
                {' '}
                <span className="arr">→</span>
              </Link>
            </Reveal>
            {' '}
            <Reveal as="ul" className="wplist reveal" data-d="1">
              <li>
                <span className="wn">01</span>
                <h4>Verouderde techniek</h4>
                <p>
                  De website draait op een fundament dat niet meer veilig of houdbaar is.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">02</span>
                <h4>Niet schaalbaar</h4>
                <p>
                  Je bedrijf is gegroeid, maar de website kan simpelweg niet meegroeien.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">03</span>
                <h4>Verkeerde basis</h4>
                <p>
                  De structuur klopt fundamenteel niet, los verbeteren heeft weinig zin.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">04</span>
                <h4>Onbeheersbaar</h4>
                <p>
                  Aanpassen kost steeds meer moeite en kan eigenlijk niet zonder gedoe.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">05</span>
                <h4>Strategisch verouderd</h4>
                <p>
                  De website past niet meer bij wie je nu bent en wat je nu aanbiedt.
                </p>
              </li>
              {' '}
              <li>
                <span className="wn">06</span>
                <h4>Te veel losse pleisters</h4>
                <p>
                  Er is al zo vaak bijgewerkt dat opnieuw beginnen rustiger en goedkoper is.
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
                Kleine ingrepen,
                {' '}
                <em>merkbaar</em>
                {' '}
                verschil.
              </h2>
            </div>
            {' '}
            <Link className="tlink" to="/gratis-websitescan" style={{ paddingBottom: "6px" }}>
              Start jouw scan
              {' '}
              <span className="arr">→</span>
            </Link>
          </Reveal>
          {' '}
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ Q-Team Solutions ]" alt="Website van Q-Team Solutions" />
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
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="Website van GuestRoomUtrecht" />
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
            <Qa question="Heb ik een nieuwe website nodig?" className="reveal">
                Vaak niet. Als je website er nog goed uitziet en technisch in orde is, zit de winst meestal in gerichte verbeteringen, niet in opnieuw beginnen. Een nieuwe website is alleen slimmer wanneer het fundament technisch of strategisch echt verouderd is. De gratis websitescan maakt dat onderscheid voor je helder.
            </Qa>
            {' '}
            <Qa question="Hoe weet ik of optimalisatie genoeg is?" className="reveal">
                Dat begint met een analyse. We kijken naar bezoekersgedrag, knelpunten en kansen. Op basis daarvan zien we of gerichte verbeteringen voldoende zijn, of dat de basis te veel beperkingen heeft. We zijn daar eerlijk over: we adviseren geen nieuwe website als het niet nodig is.
            </Qa>
            {' '}
            <Qa question="Kunnen jullie ook mijn bestaande website verbeteren?" className="reveal">
                Ja. De meeste websites zijn uitstekend te optimaliseren. We kunnen structuur, formulieren, snelheid, de mobiele ervaring en de SEO-basis verbeteren zonder dat je website helemaal opnieuw gebouwd hoeft te worden.
            </Qa>
            {' '}
            <Qa question="Hoe snel zie ik resultaat?" className="reveal">
                Sommige verbeteringen, zoals een duidelijkere call-to-action of een eenvoudiger formulier, kunnen al snel merkbaar zijn. Andere, zoals de SEO-basis, hebben wat meer tijd nodig. We sturen op basis van wat we meten, zodat verbetering onderbouwd is en niet op gevoel.
            </Qa>
            {' '}
            <Qa question="Werken jullie ook met websites die jullie niet gebouwd hebben?" className="reveal">
                Zeker. Veel optimalisatietrajecten gaan juist over bestaande websites die door iemand anders zijn gebouwd. We kijken eerst wat er staat en bepalen daarna wat de slimste verbeteringen zijn.
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
              <Reveal as="h2" className="display reveal">Benieuwd hoeveel potentie er nog in je website zit?</Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Vraag een gratis websitescan aan en ontdek waar de winst in je huidige website zit, zonder meteen opnieuw te beginnen.
              </Reveal>
              {' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2">
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
                  <label htmlFor="f-doel">Wat wil je verbeteren?</label>
                  {' '}
                  <select id="f-doel" name="doel" required defaultValue="">
                    <option value="" disabled>Kies je belangrijkste doel</option>
                    {' '}
                    <option value="Meer aanvragen">Meer aanvragen</option>
                    {' '}
                    <option value="Meer boekingen / reserveringen">Meer boekingen / reserveringen</option>
                    {' '}
                    <option value="Meer contactmomenten">Meer contactmomenten</option>
                    {' '}
                    <option value="Betere mobiele ervaring">Betere mobiele ervaring</option>
                    {' '}
                    <option value="Beter vindbaar (SEO)">Beter vindbaar (SEO)</option>
                    {' '}
                    <option value="Weet ik nog niet, adviseer mij">Weet ik nog niet, adviseer mij</option>
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
                  Binnen twee werkdagen laten we weten wat we zouden aanpakken, en in welke volgorde.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
