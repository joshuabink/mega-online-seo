import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SteppedLeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/diensten/conversie-website')({
  head: () => ({
    meta: [
      { title: "Conversie Website | MegaOnline.io" },
      { name: 'description', content: "Een website die niet alleen mooi is, maar ook zijn werk doet. Voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen." },
      { property: 'og:title', content: "Conversie Website | MegaOnline.io" },
      { property: 'og:description', content: "Een website die niet alleen mooi is, maar ook zijn werk doet. Voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen." },
      { property: 'og:url', content: "https://megaonline.io/diensten/conversie-website" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/conversie-website" },
    ],
  }),
  component: ConversieWebsite,
})

function ConversieWebsite() {
  return (
    <main id="top">
      <section className="section svc-hero" data-theme="dark" data-screen-label="Hero — Conversie Website">
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
                <b>Conversie Website</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Onze kerndienst
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Een website die niet alleen mooi is, maar ook zijn
                {' '}
                <em>werk</em>
                {' '}
                doet.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen. Wij bouwen websites die vertrouwen uitstralen, bezoekers helpen en klaar zijn voor groei.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan
                  {' '}
                  <span className="arr">→</span>
                </Link>
                {' '}
                <a className="tlink" href="#aanpak">
                  Zo bouwen wij
                  {' '}
                  <span className="arr">→</span>
                </a>
              </Reveal>
            </div>
            {' '}
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media id="cw-hero" fit="cover" placeholder="[ WEBSITE MOCKUP ]" alt="Ontwerpvoorbeeld van een conversiegerichte website" />
              </div>
              {' '}
              <div className="hvis__card hvis__toast">
                <span className="tk">✓</span>
                {' '}
                <span>
                  <span className="tt">Nieuwe aanvraag binnen</span>
                  {' '}
                  <span className="ts">Via het contactformulier</span>
                </span>
              </div>
              {' '}
              <div className="hvis__card hvis__stat">
                <span className="n">3 sec</span>
                {' '}
                <span className="l">om te overtuigen</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Waarom websites tekortschieten">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het probleem</span>
            {' '}
            <h2 className="h2">
              De meeste websites
              {' '}
              <em>staan</em>
              {' '}
              alleen maar online.
            </h2>
          </Reveal>
          {' '}
          <div className="flaw">
            <Reveal as="div" className="flaw__intro reveal">
              <h3>
                Een website hebben is niet hetzelfde als een website die klanten oplevert.
              </h3>
              {' '}
              <p>
                Veel bedrijven hebben een nette website die er prima uitziet, maar bezoekers nergens naartoe helpt. Ze twijfelen, haken af en nemen geen contact op. Daardoor blijven aanvragen en boekingen liggen die je eigenlijk al binnen had.
              </p>
              {' '}
              <p>
                Het zijn zelden grote dingen. Het zijn de kleine momenten waarop een bezoeker afhaakt. En die kosten je elke maand klanten zonder dat je het merkt.
              </p>
            </Reveal>
            {' '}
            <div className="flaw__mini">
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Bezoekers begrijpen niet wat je doet</h4>
                <p>
                  Is het binnen enkele seconden niet duidelijk, dan zijn ze weg voordat ze iets vragen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Te weinig vertrouwen</h4>
                <p>
                  Een verouderde uitstraling laat bezoekers twijfelen of ze hier wel goed zitten.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Onduidelijke structuur</h4>
                <p>Wie moet zoeken naar informatie, klikt vaker weg dan door.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Slechte mobiele ervaring</h4>
                <p>
                  Het grootste deel komt mobiel binnen. Werkt dat stroef, dan verlies je ze.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Te veel stappen richting contact</h4>
                <p>Hoe meer drempels, hoe meer afhakers vlak voor de aanvraag.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Geen duidelijke volgende stap</h4>
                <p>
                  Een bezoeker die niet weet wat hij moet doen, doet meestal niets.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="aanpak" data-theme="dark" data-screen-label="Hoe wij websites bouwen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze aanpak</span>
            {' '}
            <h2 className="h2">
              Een goede website begint met
              {' '}
              <em>begrijpen.</em>
              {' '}
              Niet met bouwen.
            </h2>
            {' '}
            <p className="lead">
              Wij beginnen nooit bij het ontwerp. We beginnen bij jouw bedrijf, je klanten en wat een bezoeker nodig heeft om in actie te komen.
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
                  We leren jouw bedrijf, doelgroep en doelen kennen. Wat moeten bezoekers weten? Waar twijfelen ze? Waarom kiezen klanten voor jou? Pas als dat helder is, weten we wat de website moet doen.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Zonder begrip bouw je een mooie website.
                {' '}
                <em>Mét</em>
                {' '}
                begrip bouw je een website die werkt.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Stap 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="layout" />
                </span>
              </div>
              {' '}
              <h3>Structureren</h3>
              {' '}
              <p>
                We bepalen welke informatie bezoekers nodig hebben en hoe ze door de website bewegen richting contact.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Stap 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="pen-tool" />
                </span>
              </div>
              {' '}
              <h3>Ontwerpen</h3>
              {' '}
              <p>
                We creëren een ontwerp dat vertrouwen uitstraalt en past bij hoe jouw bedrijf gezien wil worden.
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
              <h3>Ontwikkelen</h3>
              {' '}
              <p>
                We bouwen de website technisch uit: snel, veilig en eenvoudig zelf te beheren.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Stap 05</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="trending-up" />
                </span>
              </div>
              {' '}
              <h3>Verbeteren</h3>
              {' '}
              <p>
                Na livegang blijven we kijken waar bezoekers afhaken en waar nog kansen liggen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Wat standaard meekomt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Standaard inbegrepen</span>
            {' '}
            <h2 className="h2">
              Geen lijstje met techniek. Een lijstje met
              {' '}
              <em>voordelen.</em>
            </h2>
            {' '}
            <p className="lead">
              Dit zit standaard in elke Conversie Website. Niet omdat het indrukwekkend klinkt, maar omdat jouw bezoekers en jij er echt iets aan hebben.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Werkt perfect op mobiel</h4>
              <p>
                De meeste bezoekers komen mobiel binnen. Daar voelt alles soepel en logisch aan.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="gauge" />
              </span>
              <h4>Snel en gebruiksvriendelijk</h4>
              <p>
                Snelle pagina's houden bezoekers vast en maken de stap naar contact makkelijker.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="edit-3" />
              </span>
              <h4>Zelf eenvoudig te beheren</h4>
              <p>
                Tekst of foto aanpassen? Dat doe je zelf, zonder een developer nodig te hebben.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="bar-chart-3" />
              </span>
              <h4>Analytics ingericht</h4>
              <p>
                Je ziet wat bezoekers doen, zodat keuzes op cijfers rusten en niet op gevoel.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="shield-check" />
              </span>
              <h4>Veilig opgezet</h4>
              <p>
                SSL, beveiliging en updates goed geregeld. Jij hoeft je er niet druk om te maken.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>SEO-vriendelijke basis</h4>
              <p>
                Een fundament waarmee je beter vindbaar wordt in Google, vanaf dag één.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Klaar voor koppelingen</h4>
              <p>Eenvoudig te verbinden met de systemen waarmee je al werkt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="rocket" />
              </span>
              <h4>Toekomstbestendig</h4>
              <p>
                Meegroeien met je bedrijf, zonder dat je over een jaar opnieuw moet beginnen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Gebouwd voor aanvragen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie we bouwen</span>
            {' '}
            <h2 className="h2">
              Gebouwd voor bedrijven die afhankelijk zijn van
              {' '}
              <em>aanvragen.</em>
            </h2>
            {' '}
            <p className="lead">
              Voor sommige bedrijven is de website een visitekaartje. Voor onze klanten is het een belangrijke bron van nieuwe klanten. Daar ontwerpen we naartoe.
            </p>
          </Reveal>
          {' '}
          <div className="builtfor">
            <div className="exgrid">
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="file-text" />
                </span>
                Offerte aanvragen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="calendar-check" />
                </span>
                Boekingen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="calendar-clock" />
                </span>
                Reserveringen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="handshake" />
                </span>
                Kennismakingsgesprekken
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="message-circle" />
                </span>
                Adviesgesprekken
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="graduation-cap" />
                </span>
                Proeflessen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal">
                <span className="iconbox iconbox--sm">
                  <Icon name="mail" />
                </span>
                Contactaanvragen
              </Reveal>
              {' '}
              <Reveal as="div" className="exchip reveal" data-d="1">
                <span className="iconbox iconbox--sm">
                  <Icon name="phone-call" />
                </span>
                Terugbelverzoeken
              </Reveal>
            </div>
            {' '}
            <Reveal as="div" className="consider reveal" data-d="1">
              <h3>Waar wij over nadenken bij elke website</h3>
              {' '}
              <p>
                Een aanvraag of boeking ontstaat niet vanzelf. Het is het resultaat van een bezoeker die zich op zijn gemak voelt en precies weet wat de volgende stap is.
              </p>
              {' '}
              <ul className="considlist">
                <li>Vertrouwen</li>
                {' '}
                <li>Gebruiksgemak</li>
                {' '}
                <li>Contactmomenten</li>
                {' '}
                <li>Heldere CTA's</li>
                {' '}
                <li>Slimme formulieren</li>
                {' '}
                <li>Boekingsroutes</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Koppelingen & automatisering">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Koppelingen</span>
            {' '}
            <h2 className="h2">
              Past in jouw bestaande
              {' '}
              <em>werkwijze.</em>
            </h2>
            {' '}
            <p className="lead">
              Je website hoeft geen los eiland te zijn. We kunnen hem verbinden met de systemen waarmee je al werkt, zodat alles op één plek samenkomt.
            </p>
          </Reveal>
          {' '}
          <div className="integ">
            <Reveal as="div" className="integ__item reveal">
              <span className="iconbox iconbox--sm">
                <Icon name="users" />
              </span>
              <h4>CRM-koppelingen</h4>
              <p>Aanvragen landen direct in je klantsysteem.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="1">
              <span className="iconbox iconbox--sm">
                <Icon name="calendar" />
              </span>
              <h4>Boekingssystemen</h4>
              <p>Online reserveren zonder gedoe achter de schermen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="2">
              <span className="iconbox iconbox--sm">
                <Icon name="calendar-days" />
              </span>
              <h4>Agenda's</h4>
              <p>
                Afspraken direct in jouw agenda, dubbele boekingen voorkomen.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="3">
              <span className="iconbox iconbox--sm">
                <Icon name="message-square" />
              </span>
              <h4>WhatsApp</h4>
              <p>Laagdrempelig contact via een kanaal dat iedereen gebruikt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal">
              <span className="iconbox iconbox--sm">
                <Icon name="mail" />
              </span>
              <h4>E-mailsoftware</h4>
              <p>Nieuwe leads automatisch in je mailinglijst.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="1">
              <span className="iconbox iconbox--sm">
                <Icon name="credit-card" />
              </span>
              <h4>Betaalsystemen</h4>
              <p>Online afrekenen of aanbetalen, veilig geregeld.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="2">
              <span className="iconbox iconbox--sm">
                <Icon name="git-merge" />
              </span>
              <h4>Leadopvolging</h4>
              <p>Geen aanvraag die tussen wal en schip valt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="integ__item reveal" data-d="3">
              <span className="iconbox iconbox--sm">
                <Icon name="plus" />
              </span>
              <h4>En meer</h4>
              <p>Werk je met iets specifieks? We kijken wat mogelijk is.</p>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="integ__note reveal">
            <span className="iconbox iconbox--sm">
              <Icon name="link-2" />
            </span>
            De website wordt zo een onderdeel van je bedrijf, in plaats van een losstaand visitekaartje.
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Fotografie & content">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ marginBottom: "8px" }}>
            <span className="label">Beeld & content</span>
            {' '}
            <h2 className="h2">
              Een goede website begint met goed
              {' '}
              <em>beeldmateriaal.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="media">
            <Reveal as="div" className="mediagal reveal">
              <div className="mslot">
                <Media id="cw-media-1" fit="cover" placeholder="[ WEBSITE ]" alt="Voorbeeld van een website die wij bouwden" />
              </div>
              {' '}
              <div className="mslot">
                <Media id="cw-media-2" fit="cover" placeholder="[ WEBSITE ]" alt="Voorbeeld van een website die wij bouwden" />
              </div>
              {' '}
              <div className="mslot">
                <Media id="cw-media-3" fit="cover" placeholder="[ WEBSITE ]" alt="Voorbeeld van een website die wij bouwden" />
              </div>
              {' '}
              <div className="mslot">
                <Media id="cw-media-4" fit="cover" placeholder="[ WEBSITE ]" alt="Voorbeeld van een website die wij bouwden" />
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="media__body reveal" data-d="1">
              <h3>Steeds minder bezoekers lezen lange teksten.</h3>
              {' '}
              <p>
                Goede beelden maken vaak het verschil tussen afhaken of vertrouwen krijgen. Verouderde of generieke stockfoto's doen precies het tegenovergestelde.
              </p>
              {' '}
              <div className="twocol">
                <div>
                  <div className="ttl">Veel bedrijven hebben</div>
                  {' '}
                  <ul className="minilist">
                    <li>Verouderde foto's</li>
                    {' '}
                    <li>Generieke stockfoto's</li>
                    {' '}
                    <li>Geen professionele beelden</li>
                    {' '}
                    <li>Geen goede bedrijfsvideo</li>
                  </ul>
                </div>
                {' '}
                <div>
                  <div className="ttl">Daarom helpen wij met</div>
                  {' '}
                  <ul className="minilist minilist--do">
                    <li>Fotografie op locatie</li>
                    {' '}
                    <li>Content shoots</li>
                    {' '}
                    <li>Bedrijfsvideo's</li>
                    {' '}
                    <li>Dronebeelden</li>
                    {' '}
                    <li>Periodieke contentdagen</li>
                  </ul>
                </div>
              </div>
              {' '}
              <p style={{ marginTop: "22px", fontSize: "0.94rem" }}>
                Eenmalig bij de bouw van je website, of periodiek om je content vers te houden.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Huisstijl & branding">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Optionele uitbreiding</span>
            {' '}
            <h2 className="h2">
              Geen sterke huisstijl? Daar kunnen we bij
              {' '}
              <em>helpen.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="brand">
            <Reveal as="div" className="brand__txt reveal">
              <h3>
                Heb je al een sterke huisstijl? Dan bouwen we daarop verder.
              </h3>
              {' '}
              <p>
                Heb je die nog niet? Dan kunnen we samen met gespecialiseerde ontwerpers helpen om een professionele basis neer te zetten. Eentje die niet alleen op je website werkt, maar ook op je andere uitingen.
              </p>
              {' '}
              <p>
                Veel bedrijven lopen hier tegenaan: een verouderd logo, geen vaste stijl, verschillende lettertypes door elkaar en kleuren die nergens consequent terugkomen. Dat maakt het lastig om een website neer te zetten die vertrouwen uitstraalt.
              </p>
              {' '}
              <ul className="brand__opt">
                <li>Bestaand logo moderniseren</li>
                {' '}
                <li>Een nieuw logo ontwerpen</li>
                {' '}
                <li>Passende lettertypes kiezen</li>
                {' '}
                <li>Kleuren die bij je bedrijf passen</li>
                {' '}
                <li>Een eenvoudige huisstijl opstellen</li>
                {' '}
                <li>Een compact brandbook</li>
              </ul>
              {' '}
              <p className="brand__tag">
                Let op: wij zijn geen brandingbureau. We bieden dit aan omdat een sterke huisstijl bijna altijd tot een betere website leidt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="brand__grid reveal" data-d="1">
              <div className="bcard">
                <span className="ck">Kleurenpalet</span>
                {' '}
                <div className="swatchrow">
                  <span className="swatch" style={{ background: "oklch(0.74 0.145 58)" }} />
                  {' '}
                  <span className="swatch" style={{ background: "oklch(0.55 0.07 230)" }} />
                  {' '}
                  <span className="swatch" style={{ background: "oklch(0.45 0.05 150)" }} />
                  {' '}
                  <span className="swatch" style={{ background: "oklch(0.92 0.02 90)" }} />
                  {' '}
                  <span className="swatch" style={{ background: "oklch(0.28 0.02 250)" }} />
                </div>
              </div>
              {' '}
              <div className="bcard">
                <span className="ck">Typografie</span>
                {' '}
                <div className="typepair">
                  <span className="big">Aa</span>
                  {' '}
                  <span className="nm">Display · koppen</span>
                  {' '}
                  <span className="small">
                    De rustige tekst eronder leest prettig en past bij de koppen.
                  </span>
                  {' '}
                  <span className="nm">Body · lopende tekst</span>
                </div>
              </div>
              {' '}
              <div className="bcard">
                <span className="ck">Logo-evolutie</span>
                {' '}
                <div className="logoevo">
                  <div className="logobox">
                    OUD
                    <br />
                    LOGO
                  </div>
                  {' '}
                  <span className="arr">→</span>
                  {' '}
                  <div className="logobox logobox--new">
                    NIEUW
                    <br />
                    LOGO
                  </div>
                </div>
              </div>
              {' '}
              <div className="bcard">
                <span className="ck">Brandbook</span>
                {' '}
                <div className="logobox" style={{ aspectRatio: "16/10" }}>
                  <Media id="cw-brandbook" fit="cover" placeholder="[ BRANDBOOK ]" alt="Pagina uit een merkrichtlijn" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Na livegang — Groei Partnership">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Na livegang</span>
            {' '}
            <h2 className="h2">
              De echte winst begint
              {' '}
              <em>na</em>
              {' '}
              livegang.
            </h2>
            {' '}
            <p className="lead">
              Een website is geen eindpunt, maar een startpunt. De meeste klanten beginnen met een nieuwe website. Daarna blijven we helpen met analyses, verbeteringen en doorontwikkeling.
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
                <Link className="flow-cta" to="/gratis-websitescan">Vraag een gratis scan aan →</Link>
              </div>
            </div>
            {' '}
            <div className="rm__connector">
              <span className="rm__live">Livegang</span>
              {' '}
              <span className="rm__arrow">→</span>
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
          <Reveal as="div" className="maint reveal" data-d="1">
            <div className="maint__txt">
              <b>Alleen onderhoud en support nodig?</b>
              {' '}
              Dat kan ook. We houden je website veilig en up-to-date, zonder actieve optimalisatie. Een lichtere optie dan het Groei Partnership.
            </div>
            {' '}
            <div className="maint__price">Onderhoud & Support · vanaf € 49 / mnd</div>
          </Reveal>
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
                <Media id="case-guestroom" fit="cover" placeholder="[ GuestRoomUtrecht ]" alt="GuestRoomUtrecht" />
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
            <Qa question="Waarom niet kiezen voor een goedkope webbouwer?" className="reveal">
                Een website bouwen is meer dan pagina's online zetten. Een goedkope website ziet er soms prima uit, maar denkt niet na over vertrouwen, gebruiksgemak en hoe bezoekers daadwerkelijk tot een aanvraag komen. Wij bouwen vanuit dat doel. Dat is precies waar het verschil zit tussen een website die bestaat en een website die klanten oplevert.
            </Qa>
            {' '}
            <Qa question="Kan ik mijn website zelf beheren?" className="reveal">
                Ja. Je website is flexibel, veilig en schaalbaar, en je kunt teksten en foto’s eenvoudig zelf aanpassen. Je zit nooit vast aan één leverancier: de website blijft van jou.
            </Qa>
            {' '}
            <Qa question="Wat gebeurt er na livegang?" className="reveal">
                Livegang is het startpunt, niet het eindpunt. We kunnen blijven kijken waar bezoekers afhaken en de website maand na maand verbeteren via een Groei Partnership. Wil je dat liever niet, dan is alleen onderhoud en support ook mogelijk.
            </Qa>
            {' '}
            <Qa question="Kan mijn website gekoppeld worden aan bestaande software?" className="reveal">
                In de meeste gevallen wel. Denk aan CRM-systemen, boekingssystemen, agenda's, WhatsApp, e-mailsoftware en betaalsystemen. Zo wordt je website een onderdeel van je bedrijf in plaats van een los eiland. Werk je met iets specifieks? Dan kijken we samen wat mogelijk is.
            </Qa>
            {' '}
            <Qa question="Werken jullie ook met bestaande websites?" className="reveal">
                Soms is een volledig nieuwe website de beste keuze, soms hebben gerichte verbeteringen al veel effect. De gratis websitescan helpt ons bepalen wat voor jouw situatie de slimste aanpak is.
            </Qa>
            {' '}
            <Qa question="Is een Groei Partnership verplicht?" className="reveal">
                Nee. Sommige klanten kiezen voor een eenmalige website en regelen het beheer zelf of via een andere partij. We raden het Partnership wel aan, omdat websites die regelmatig verbeterd worden structureel beter presteren.
            </Qa>
            {' '}
            <Qa question="Helpen jullie ook met foto's en video's?" className="reveal">
                Ja. Goede beelden maken vaak het verschil tussen afhaken of vertrouwen krijgen. We kunnen helpen met fotografie op locatie, content shoots, bedrijfsvideo's en dronebeelden. Eenmalig bij de bouw, of periodiek via contentdagen om je content vers te houden.
            </Qa>
            {' '}
            <Qa question="Kunnen jullie ook helpen met een logo of huisstijl?" className="reveal">
                Heb je al een sterke huisstijl, dan bouwen we daarop verder. Heb je die nog niet, dan kunnen we samen met gespecialiseerde ontwerpers helpen met een logo, lettertypes, kleuren en een eenvoudig brandbook. Wij zijn geen brandingbureau, maar we bieden het aan omdat een sterke huisstijl bijna altijd tot een betere website leidt.
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
                Klaar voor een website die meer doet dan alleen online staan?
              </Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Vraag een gratis websitescan aan en ontdek waar jouw grootste online kansen liggen.
              </Reveal>
              {' '}
              <Reveal as="div" className="endcta__trust reveal" data-d="2">
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
