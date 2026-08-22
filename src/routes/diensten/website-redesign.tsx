import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/diensten/website-redesign')({
  head: () => ({
    meta: [
      { title: "Website Redesign | MegaOnline.io" },
      { name: 'description', content: "Je bedrijf is gegroeid, je website niet. Wij stemmen je online uitstraling opnieuw af op waar je vandaag staat en waar je naartoe wilt." },
      { property: 'og:title', content: "Website Redesign | MegaOnline.io" },
      { property: 'og:description', content: "Je bedrijf is gegroeid, je website niet. Wij stemmen je online uitstraling opnieuw af op waar je vandaag staat en waar je naartoe wilt." },
      { property: 'og:url', content: "https://megaonline.io/diensten/website-redesign" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/website-redesign" },
    ],
  }),
  component: WebsiteRedesign,
})

function WebsiteRedesign() {
  return (
    <main id="top">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Website Redesign">
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
                <b>Website Redesign</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Voor wie ontgroeid is aan zijn website
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je bedrijf is gegroeid. Is je website
                {' '}
                <em>meegegroeid?</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Veel websites zijn gebouwd voor het bedrijf dat je jaren geleden was. Wij helpen bedrijven hun online uitstraling opnieuw af te stemmen op waar ze vandaag staan en waar ze naartoe willen.
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
                <Media id="rd-hero" fit="cover" placeholder="[ VOOR → NA ]" alt="Website voor en na het redesign" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">↑</span>
                {' '}
                <span>
                  <span className="tt">Nieuwe uitstraling live</span>
                  {' '}
                  <span className="ts">Afgestemd op nu</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">8 sec</span>
                {' '}
                <span className="l">eerste indruk</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Herken je dit?">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Herken je dit?</span>
            {' '}
            <h2 className="h2">
              Je bedrijf is verder dan je
              {' '}
              <em>website.</em>
            </h2>
            {' '}
            <p className="lead">
              Niet omdat je iets fout doet, maar omdat je doorgegroeid bent. De website bleef staan waar hij stond. Dit zijn de momenten waarop dat begint te wringen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>Je website laat niet meer zien wie je vandaag bent.</h3>
              {' '}
              <p>
                Je hebt hard gewerkt aan je bedrijf. Je dienstverlening is gegroeid, je klanten zijn veranderd, je ambitie is groter geworden. Maar online ziet niemand dat terug.
              </p>
              {' '}
              <p>
                Een website die achterloopt op het bedrijf erachter, doet je tekort. Niet omdat het werk niet goed is, maar omdat de presentatie het verhaal niet meer vertelt.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <h4>Je website voelt verouderd</h4>
                <p>
                  De stijl is van een paar jaar terug en dat zie en voel je meteen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Concurrenten ogen professioneler</h4>
                <p>
                  Naast hun site valt die van jou net wat minder op zijn plek.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Je bedrijf is veranderd</h4>
                <p>Wie je nu bent staat niet meer goed op je website.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Je aanbod is uitgebreid</h4>
                <p>Nieuwe diensten passen niet meer logisch in de oude opzet.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <h4>Sluit niet meer aan op je doelgroep</h4>
                <p>
                  De toon en uitstraling passen niet meer bij wie je wilt bereiken.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <h4>Je bent er niet trots meer op</h4>
                <p>Je deelt de link liever niet, en dat zegt eigenlijk genoeg.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Meer dan een nieuw design">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Meer dan een nieuw jasje</span>
            {' '}
            <h2 className="h2">
              We vervangen niet alleen de uitstraling.
              <br />
              We verbeteren de
              {' '}
              <em>ervaring.</em>
            </h2>
            {' '}
            <p className="lead">
              Een redesign die alleen mooier is, lost weinig op. Wij grijpen het moment aan om je hele online presentatie scherper en sterker te maken.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="message-square-text" />
              </span>
              <h4>Duidelijkere boodschap</h4>
              <p>In één oogopslag helder wat je doet en voor wie.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="sparkles" />
              </span>
              <h4>Modernere uitstraling</h4>
              <p>Een look die past bij het niveau van je bedrijf vandaag.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Meer vertrouwen</h4>
              <p>Een verzorgde presentatie die twijfel wegneemt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Betere mobiele ervaring</h4>
              <p>
                Soepel en logisch op het scherm waar de meesten binnenkomen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="layout" />
              </span>
              <h4>Logischere structuur</h4>
              <p>Bezoekers vinden moeiteloos hun weg naar de juiste plek.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Sterkere call-to-actions</h4>
              <p>Een duidelijke uitnodiging tot de volgende stap.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Professionelere presentatie</h4>
              <p>Je werk en je bedrijf eindelijk goed in beeld.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="rocket" />
              </span>
              <h4>Groeit met je mee</h4>
              <p>Een fundament dat meebeweegt met waar je naartoe wilt.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Waarom bedrijven kiezen voor een redesign">
        <div className="wrap">
          <div className="why">
            <Reveal as="div" className="shead reveal" style={{ maxWidth: "none" }}>
              <span className="label">Waarom een redesign</span>
              {' '}
              <h2 className="h2">
                Bezoekers vormen binnen
                {' '}
                <em>enkele seconden</em>
                {' '}
                een oordeel.
              </h2>
              {' '}
              <p className="lead">
                Nog voordat iemand één zin leest, is de eerste indruk al gevormd. Een website die niet aansluit bij het niveau van je bedrijf kan vertrouwen kosten. Niet omdat je bedrijf slecht is, maar omdat de presentatie achterloopt.
              </p>
              {' '}
              <p className="lead">
                Een redesign sluit dat gat. Het brengt online weer in lijn met de kwaliteit die je offline allang levert.
              </p>
            </Reveal>
            {' '}
            <Reveal as="aside" className="panel reveal" data-d="1">
              <p className="panel__quote">
                Je website is vaak het
                {' '}
                <em>eerste</em>
                {' '}
                wat een klant van je ziet. En soms het enige.
              </p>
              {' '}
              <p className="panel__support">
                Een verouderde uitstraling laat mensen onbewust twijfelen. Een verzorgde, actuele website doet precies het tegenovergestelde: die bevestigt dat ze bij de juiste partij zijn.
              </p>
              {' '}
              <div className="panel__stats">
                <div>
                  <span className="n">1ste</span>
                  <span className="l">indruk telt het zwaarst</span>
                </div>
                {' '}
                <div>
                  <span className="n">Mobiel</span>
                  <span className="l">waar de meesten binnenkomen</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat we tijdens een redesign bekijken">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Eerst kijken, dan bouwen</span>
            {' '}
            <h2 className="h2">
              Wat we tijdens een redesign
              {' '}
              <em>bekijken.</em>
            </h2>
            {' '}
            <p className="lead">
              We beginnen nooit bij het ontwerp. Eerst brengen we in kaart wat er is, wat werkt en wat beter moet. Pas als dat helder is, bouwen we.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="eye" />
              </span>
              <h4>Huidige uitstraling</h4>
              <p>
                Wat straalt je website nu uit, en klopt dat met wie je bent?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="layout" />
              </span>
              <h4>Structuur</h4>
              <p>Is de opbouw nog logisch voor je huidige aanbod?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="hand-heart" />
              </span>
              <h4>Gebruiksvriendelijkheid</h4>
              <p>Beweegt een bezoeker soepel naar wat hij zoekt?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Doelgroep</h4>
              <p>Wie wil je vandaag bereiken, en sluit de site daarop aan?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="flag" />
              </span>
              <h4>Concurrenten</h4>
              <p>
                Hoe val je op tussen de bedrijven waarmee je vergeleken wordt?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiele ervaring</h4>
              <p>Werkt alles even goed op de telefoon als op desktop?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Vertrouwen</h4>
              <p>
                Welke signalen geven bezoekers het gevoel: hier zit ik goed?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Aanvragen & boekingen</h4>
              <p>
                Hoe makkelijk is het nu om contact op te nemen of te boeken?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>SEO-basis</h4>
              <p>
                Wat moet behouden blijven zodat je vindbaarheid niet inzakt?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="settings" />
              </span>
              <h4>Technische staat</h4>
              <p>Is het fundament gezond, of zit daar juist het probleem?</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe een redesign traject eruitziet">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het traject</span>
            {' '}
            <h2 className="h2">
              Hoe een redesign-traject
              {' '}
              <em>eruitziet.</em>
            </h2>
            {' '}
            <p className="lead">
              Een rustig, doordacht proces. Stap voor stap, van begrijpen naar bouwen naar livegang, zonder verrassingen onderweg.
            </p>
          </Reveal>
          {' '}
          <Reveal as="div" className="tl reveal" style={{ marginTop: "clamp(40px,4.5vw,60px)" }}>
            <div className="tl__row">
              <span className="tl__dot" />
              {' '}
              <div className="tl__phase">Stap 1 · Analyse</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Analyse van de huidige website</span>
                </div>
                {' '}
                <p>
                  We kijken wat er nu staat: wat werkt, wat haakt af en wat absoluut behouden moet blijven.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row">
              <span className="tl__dot" />
              {' '}
              <div className="tl__phase">Stap 2 · Begrijpen</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Het bedrijf begrijpen</span>
                </div>
                {' '}
                <p>
                  Wie ben je vandaag, wat maakt je anders en waar wil je naartoe? Dat is het uitgangspunt.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row">
              <span className="tl__dot" />
              {' '}
              <div className="tl__phase">Stap 3 · Onderzoek</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Doelgroep en concurrenten</span>
                </div>
                {' '}
                <p>
                  We onderzoeken wie je wilt bereiken en hoe je je onderscheidt van de bedrijven om je heen.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row">
              <span className="tl__dot" />
              {' '}
              <div className="tl__phase">Stap 4 · Structuur</div>
              {' '}
              <div className="tl__card">
                <div className="tl__cardhead">
                  <span className="svcname">Nieuwe structuur bepalen</span>
                </div>
                {' '}
                <p>
                  We bepalen welke informatie waar komt en hoe bezoekers richting contact bewegen.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__row tl__row--rec">
              <span className="tl__dot" />
              {' '}
              <div className="tl__phase">Stap 5 · Creatie</div>
              {' '}
              <div className="tl__card tl__card--rec">
                <div className="tl__cardhead">
                  <span className="svcname">Ontwerp en ontwikkeling</span>
                </div>
                {' '}
                <p>
                  We ontwerpen de nieuwe uitstraling en bouwen die uit: modern, snel en zelf te beheren.
                </p>
              </div>
            </div>
            {' '}
            <div className="tl__liverow">
              <span className="tl__live">
                <Icon name="rocket" />
              </span>
              {' '}
              <span className="tl__livelabel">Stap 6 · Livegang</span>
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Wanneer een redesign slimmer is dan optimaliseren">
        <div className="wrap">
          <div className="wp">
            <Reveal as="div" className="wp__panel reveal">
              <span className="label">Eerlijk advies</span>
              {' '}
              <h2 className="h2" style={{ marginTop: "18px", fontSize: "clamp(1.7rem,2.8vw,2.6rem)" }}>Niet elke website hoeft opnieuw.</h2>
              {' '}
              <p className="lead" style={{ marginTop: "16px", fontSize: "1.05rem" }}>
                Sommige websites hebben vooral kleine verbeteringen nodig. Andere zijn visueel, technisch of strategisch zo verouderd dat opnieuw opbouwen simpelweg de betere investering is.
              </p>
              {' '}
              <div className="pullnote">
                Heb je vooral gerichte verbeteringen nodig? Dan is
                {' '}
                <em>optimaliseren</em>
                {' '}
                waarschijnlijk slimmer dan een redesign.
              </div>
              {' '}
              <Link className="btn btn-primary" to="/diensten/website-optimalisatie" style={{ marginTop: "26px" }}>
                Bekijk Website Optimalisatie
                {' '}
                <span className="arr">→</span>
              </Link>
            </Reveal>
            {' '}
            <Reveal as="ul" className="wplist reveal" data-d="1">
              <li>
                <h4>Visueel verouderd</h4>
                <p>
                  De uitstraling past niet meer bij het niveau van je bedrijf.
                </p>
              </li>
              {' '}
              <li>
                <h4>Technisch verouderd</h4>
                <p>Het fundament is niet meer veilig, snel of houdbaar.</p>
              </li>
              {' '}
              <li>
                <h4>Strategisch verouderd</h4>
                <p>De website vertelt niet meer het juiste verhaal.</p>
              </li>
              {' '}
              <li>
                <h4>Niet meer schaalbaar</h4>
                <p>Je bent gegroeid, maar de site kan niet meegroeien.</p>
              </li>
              {' '}
              <li>
                <h4>Structureel onlogisch</h4>
                <p>Losse aanpassingen lossen het echte probleem niet op.</p>
              </li>
              {' '}
              <li>
                <h4>Niet meer trots</h4>
                <p>Je deelt je website liever niet, en dat zegt genoeg.</p>
              </li>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="werk" data-theme="dark" data-screen-label="Voorbeelden van redesign projecten">
        <div className="wrap">
          <Reveal as="div" className="shead shead--split reveal">
            <div className="shead">
              <span className="label">Redesign projecten</span>
              {' '}
              <h2 className="h2">
                Van
                {' '}
                <em>verouderd</em>
                {' '}
                naar van nu.
              </h2>
            </div>
            {' '}
            <Link className="tlink" to="/gratis-websitescan" style={{ paddingBottom: "6px" }}>
              Start jouw redesign
              {' '}
              <span className="arr">→</span>
            </Link>
          </Reveal>
          {' '}
          <div className="cases">
            <Reveal as="article" className="case reveal">
              <div className="case__media">
                <Media id="case-qteam" fit="cover" placeholder="[ VOOR - NA ]" alt="De vernieuwde website van Q-Team Solutions" />
              </div>
                            {' '}
              <div className="case__body">
                <h3 className="case__name">Q-Team Solutions</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Redesign</span>
                  <span className="tag">B2B software</span>
                </div>
                {' '}
                <p className="case__context">Een bedrijf dat eigen apps ontwikkelt voor zakelijke klanten.</p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Situatie</span>
                    <p>Een softwarebedrijf waarvan de website niet was meegegroeid met het aanbod.</p>
                  </div>
                {' '}
                  <div className="case__step">
                    <span className="k">Wat was verouderd</span>
                    <p>De site liet onvoldoende zien welke apps het bedrijf ontwikkelt en welke waarde die bieden aan klanten.</p>
                  </div>
                {' '}
                  <div className="case__step">
                    <span className="k">Wat we veranderden</span>
                    <p>We brachten de propositie terug naar een duidelijke boodschap en bouwden een structuur die bezoekers sneller naar de juiste informatie leidt.</p>
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
                <Media id="case-guestroom" fit="cover" placeholder="[ VOOR - NA ]" alt="De vernieuwde website van GuestRoomUtrecht" />
              </div>
                            {' '}
              <div className="case__body">
                <h3 className="case__name">GuestRoomUtrecht</h3>
                {' '}
                <div className="case__meta">
                  <span className="tag">Redesign</span>
                  <span className="tag">Bed &amp; Breakfast</span>
                </div>
                {' '}
                <p className="case__context">Een verblijf dat draait op sfeer en de ervaring van gasten.</p>
                {' '}
                <div className="case__steps">
                  <div className="case__step">
                    <span className="k">Situatie</span>
                    <p>Een bed &amp; breakfast waarvan de website de beleving niet overbracht.</p>
                  </div>
                {' '}
                  <div className="case__step">
                    <span className="k">Wat was verouderd</span>
                    <p>De sfeer van het verblijf kwam onvoldoende over en de route naar een boeking was onduidelijk.</p>
                  </div>
                {' '}
                  <div className="case__step">
                    <span className="k">Wat we veranderden</span>
                    <p>We ontwikkelden een visuele website met een duidelijke boekingsroute en focus op beleving.</p>
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
          </div>        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Wat verandert er na een redesign?">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Na de livegang</span>
            {' '}
            <h2 className="h2">
              Wat er meestal verandert na een
              {' '}
              <em>redesign.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen beloftes over harde percentages, wel een website die op alle fronten beter aansluit bij je bedrijf en je bezoekers.
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
                Bezoekers voelen sneller dat ze bij de juiste partij zitten.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Professionelere uitstraling</h4>
              <p>Je website past weer bij het niveau van je werk.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="message-square-text" />
              </span>
              <h4>Duidelijkere communicatie</h4>
              <p>In één oogopslag helder wat je doet en voor wie.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Betere mobiele ervaring</h4>
              <p>Soepel en logisch op elk scherm.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Meer aanvragen</h4>
              <p>Een duidelijke route maakt contact opnemen makkelijker.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="wind" />
              </span>
              <h4>Meer rust en overzicht</h4>
              <p>Minder ruis, meer focus op wat er echt toe doet.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="eye" />
              </span>
              <h4>Betere eerste indruk</h4>
              <p>Die belangrijke eerste seconden werken nu vóór je.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="rocket" />
              </span>
              <h4>Groeit met je mee</h4>
              <p>Een fundament dat meebeweegt met je volgende stappen.</p>
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
            <Qa question="Moet mijn website volledig opnieuw gebouwd worden?" className="reveal">
                Niet altijd. Soms volstaat een grondige restyling op de bestaande basis, soms is het slimmer om opnieuw op te bouwen. Dat hangt af van de technische en strategische staat van je huidige website. We bepalen dat samen tijdens de scan en zijn daar eerlijk over.
            </Qa>
            {' '}
            <Qa question="Kunnen jullie bestaande content overnemen?" className="reveal">
                Ja. Goede teksten, foto's en pagina's nemen we mee. Vaak scherpen we ze aan zodat ze beter aansluiten bij je huidige bedrijf, maar je begint zelden vanaf nul.
            </Qa>
            {' '}
            <Qa question="Wat gebeurt er met SEO?" className="reveal">
                Daar letten we bewust op. We behouden wat goed scoort, zetten redirects waar nodig en houden de SEO-basis op orde, zodat je vindbaarheid niet inzakt na de livegang maar juist een gezonde basis houdt.
            </Qa>
            {' '}
            <Qa question="Hoe lang duurt een redesign?" className="reveal">
                Dat hangt af van de omvang en hoe snel content en feedback rond zijn. Een redesign is doorgaans een traject van enkele weken. Na de scan en kennismaking geven we een realistische inschatting voor jouw situatie.
            </Qa>
            {' '}
            <Qa question="Is een redesign altijd beter dan optimaliseren?" className="reveal">
                Nee, en dat zeggen we ook eerlijk. Als je website technisch in orde is en er nog goed uitziet, zijn gerichte verbeteringen vaak slimmer en goedkoper. Een redesign is bedoeld voor websites die echt zijn achtergelopen op het bedrijf. Twijfel je? Bekijk dan ook onze pagina over Website Optimalisatie.
            </Qa>
            {' '}
            <Qa question="Kan ik mijn website straks zelf beheren?" className="reveal">
                Ja. We bouwen redesigns die flexibel, veilig, schaalbaar en eenvoudig zelf te beheren zijn. Je zit nooit vast aan één leverancier, want je website blijft van jou.
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
              <Reveal as="h2" className="display reveal">
                Laat je website weer aansluiten op het niveau van je bedrijf.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Ontdek tijdens een gratis websitescan of een redesign de juiste volgende stap is.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2" style={{ marginTop: "28px" }}>
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
                  <label htmlFor="f-reden">Wat speelt er?</label>
                  {' '}
                  <select id="f-reden" name="reden" required defaultValue="">
                    <option value="" disabled>Kies wat het beste past</option>
                    {' '}
                    <option value="Mijn website voelt verouderd">Mijn website voelt verouderd</option>
                    {' '}
                    <option value="Mijn bedrijf is veranderd / gegroeid">Mijn bedrijf is veranderd / gegroeid</option>
                    {' '}
                    <option value="Concurrenten ogen professioneler">Concurrenten ogen professioneler</option>
                    {' '}
                    <option value="Mijn website sluit niet meer aan">Mijn website sluit niet meer aan</option>
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
                  Binnen twee werkdagen hoor je van ons wat we in je huidige site zien zitten.
                </p>
              </div>
            </SteppedLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
