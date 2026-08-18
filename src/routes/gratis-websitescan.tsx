import { createFileRoute } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Media } from '@/components/Media'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import { SingleLeadForm } from '@/components/LeadForm'

export const Route = createFileRoute('/gratis-websitescan')({
  head: () => ({
    meta: [
      { title: "Gratis Websitescan | MegaOnline.io" },
      { name: 'description', content: "Ontvang een gratis, persoonlijke websitescan en ontdek waar bezoekers afhaken, waarom aanvragen uitblijven en welke verbeteringen de meeste impact hebben." },
      { property: 'og:title', content: "Gratis Websitescan | MegaOnline.io" },
      { property: 'og:description', content: "Ontvang een gratis, persoonlijke websitescan en ontdek waar bezoekers afhaken, waarom aanvragen uitblijven en welke verbeteringen de meeste impact hebben." },
      { property: 'og:url', content: "https://megaonline.io/gratis-websitescan" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/gratis-websitescan" },
    ],
  }),
  staticData: { funnelFooter: true },
  component: GratisWebsitescan,
})

function GratisWebsitescan() {
  return (
    <main id="top">
      <section className="section fhero" id="start" data-theme="dark" data-screen-label="Hero + scan-formulier">
        <div className="wrap">
          <div className="fhero__grid">
            <div className="fhero__copy">
              <Reveal as="div" className="hero__badge reveal">
                <span className="badge">
                  <span className="gdot" />
                  Gratis websitescan · persoonlijk bekeken
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Je website kost je waarschijnlijk meer klanten dan je
                {' '}
                <em>denkt.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead fhero__sub reveal" data-d="1">
                Ontvang een gratis websitescan en ontdek waar bezoekers afhaken, waarom aanvragen uitblijven en welke verbeteringen de meeste impact hebben.
              </Reveal>
              {' '}
              <Reveal as="div" className="ftrust reveal" data-d="2">
                <span>Geen verplichtingen</span>
                {' '}
                <span>Persoonlijk bekeken</span>
                {' '}
                <span>Binnen 2 werkdagen</span>
              </Reveal>
              {' '}
              <SingleLeadForm
                className="fhero__form reveal"
                subject="Nieuwe aanvraag - Gratis websitescan"
                head={
                  <>
                    <span className="form__head-note">
                      <span className="dotmini" />
                      Gratis websitescan
                    </span>
                    {' '}
                    <h3>Stuur je website in</h3>
                    {' '}
                    <p>
                      Vul je gegevens in. Binnen 2 werkdagen ontvang je je persoonlijke verbeterpunten.
                    </p>
                  </>
                }
                ok={
                  <>
                  <div className="ic">✓</div>
                  {' '}
                  <h3>Bedankt. Aanvraag ontvangen.</h3>
                  {' '}
                  <p>
                    We bekijken je website persoonlijk en nemen gemiddeld binnen 2 werkdagen contact met je op.
                  </p>
                  </>
                }
              >
                <div className="field">
                  <label htmlFor="h-url">Website URL</label>
                  {' '}
                  <input id="h-url" name="url" type="text" inputMode="url" placeholder="jouwwebsite.nl" required />
                </div>
                {' '}
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="h-naam">Naam</label>
                    {' '}
                    <input id="h-naam" name="naam" type="text" placeholder="Voor- en achternaam" required />
                  </div>
                  {' '}
                  <div className="field">
                    <label htmlFor="h-email">E-mailadres</label>
                    {' '}
                    <input id="h-email" name="email" type="email" placeholder="jij@bedrijf.nl" required />
                  </div>
                </div>
                {' '}
                <button className="btn btn-primary" type="submit">
                  Stuur mijn gratis scan
                  {' '}
                  <span className="arr">→</span>
                </button>
                {' '}
                <p className="form__disc">
                  Geen spam. Geen verplichtingen. Gemiddeld binnen 2 werkdagen een reactie.
                </p>
              </SingleLeadForm>
            </div>
            {' '}
            <Reveal as="div" className="fhero__preview reveal" data-d="2">
              <div className="preview">
                <div className="preview__bar">
                  <span className="preview__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  {' '}
                  <span className="tag">Voorbeeld</span>
                </div>
                {' '}
                <div className="preview__body">
                  <div className="preview__title">Websitescan: voorbeeldbedrijf.nl</div>
                  {' '}
                  <div className="preview__sub">Persoonlijke beoordeling · 4 hoofdpunten</div>
                  {' '}
                  <div style={{ marginTop: "20px" }}>
                    <div className="scorerow">
                      <span className="scorerow__label">Vertrouwen</span>
                      <span className="meter mid">
                        <i style={{ width: "62%" }} />
                      </span>
                      <span className="scorerow__val">Kan beter</span>
                    </div>
                    {' '}
                    <div className="scorerow">
                      <span className="scorerow__label">Gebruiksgemak</span>
                      <span className="meter">
                        <i style={{ width: "78%" }} />
                      </span>
                      <span className="scorerow__val">Goed</span>
                    </div>
                    {' '}
                    <div className="scorerow">
                      <span className="scorerow__label">Conversie</span>
                      <span className="meter low">
                        <i style={{ width: "34%" }} />
                      </span>
                      <span className="scorerow__val">Kansen</span>
                    </div>
                    {' '}
                    <div className="scorerow">
                      <span className="scorerow__label">Mobiel & snelheid</span>
                      <span className="meter mid">
                        <i style={{ width: "58%" }} />
                      </span>
                      <span className="scorerow__val">Kan beter</span>
                    </div>
                  </div>
                  {' '}
                  <div className="preview__note">
                    <span className="q">!</span>
                    {' '}
                    <p>
                      Bezoekers vinden nergens een duidelijke
                      {' '}
                      <b>volgende stap</b>
                      . Eén heldere call-to-action kan hier direct meer aanvragen opleveren.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat krijg je precies">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je ontvangt</span>
            {' '}
            <h2 className="h2">
              Geen standaard rapport. Wel concrete
              {' '}
              <em>verbeterpunten.</em>
            </h2>
            {' '}
            <p className="lead">
              We kijken naar de dingen die bepalen of een bezoeker klant wordt of wegklikt.
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
                Ziet je website er professioneel en betrouwbaar uit voor een nieuwe bezoeker?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="hand" />
              </span>
              <h4>Gebruiksgemak</h4>
              <p>Kunnen bezoekers eenvoudig en snel vinden wat ze zoeken?</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Conversie</h4>
              <p>
                Worden bezoekers richting contact, aanvraag of boeking geleid?
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="gauge" />
              </span>
              <h4>Technische basis</h4>
              <p>
                Zijn er verbeterpunten op het gebied van snelheid, mobiel gebruik en SEO?
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="dark" data-screen-label="Wat we beoordelen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De beoordeling</span>
            {' '}
            <h2 className="h2">
              Dit bekijken we tijdens iedere
              {' '}
              <em>scan.</em>
            </h2>
            {' '}
            <p className="lead">
              Tien onderdelen die samen bepalen hoeveel je website voor je bedrijf oplevert.
            </p>
          </Reveal>
          {' '}
          <div className="assess">
            <Reveal as="div" className="acell reveal">
              <span className="acell__ic">
                <Icon name="eye" />
              </span>
              <h4>Eerste indruk</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="1">
              <span className="acell__ic">
                <Icon name="shield-check" />
              </span>
              <h4>Vertrouwen</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="2">
              <span className="acell__ic">
                <Icon name="layout" />
              </span>
              <h4>Structuur</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="3">
              <span className="acell__ic">
                <Icon name="smartphone" />
              </span>
              <h4>Mobiele ervaring</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="4">
              <span className="acell__ic">
                <Icon name="mail" />
              </span>
              <h4>Contactmogelijkheden</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal">
              <span className="acell__ic">
                <Icon name="inbox" />
              </span>
              <h4>Aanvragen & boekingen</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="1">
              <span className="acell__ic">
                <Icon name="search" />
              </span>
              <h4>SEO basis</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="2">
              <span className="acell__ic">
                <Icon name="zap" />
              </span>
              <h4>Snelheid</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="3">
              <span className="acell__ic">
                <Icon name="hand" />
              </span>
              <h4>Gebruiksvriendelijkheid</h4>
            </Reveal>
            {' '}
            <Reveal as="div" className="acell reveal" data-d="4">
              <span className="acell__ic">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Call-to-actions</h4>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="light" data-screen-label="Hoe werkt het">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zo werkt het</span>
            {' '}
            <h2 className="h2">
              In vier eenvoudige
              {' '}
              <em>stappen.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen verkooppraatje, geen verplichtingen. Jij houdt de regie.
            </p>
          </Reveal>
          {' '}
          <div className="process">
            <Reveal as="div" className="pstep reveal">
              <span className="pstep__no">Stap 01</span>
              <h3>Je stuurt je website in</h3>
              <p>
                Vul het formulier in met je website-adres en je gegevens. Klaar binnen een minuut.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="1">
              <span className="pstep__no">Stap 02</span>
              <h3>Wij analyseren</h3>
              <p>
                We beoordelen de belangrijkste onderdelen van je website, handmatig en persoonlijk.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="2">
              <span className="pstep__no">Stap 03</span>
              <h3>Je ontvangt verbeterpunten</h3>
              <p>
                Concrete, toepasbare punten die laten zien waar je kansen laat liggen.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
            {' '}
            <Reveal as="div" className="pstep reveal" data-d="3">
              <span className="pstep__no">Stap 04</span>
              <h3>Jij bepaalt</h3>
              <p>
                Je beslist zelf wat je ermee doet. Helemaal vrijblijvend, zonder druk.
              </p>
              <span className="pstep__arrow">→</span>
            </Reveal>
          </div>
          {' '}
          <Reveal as="div" className="process__note reveal">
            <div className="pullnote">
              Geen verkooppraatje. Geen verplichtingen. Alleen een eerlijke blik op je website.
            </div>
          </Reveal>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Voor wie is de scan">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Voor wie</span>
            {' '}
            <h2 className="h2">
              Speciaal voor bedrijven die afhankelijk zijn van hun
              {' '}
              <em>website.</em>
            </h2>
            {' '}
            <p className="lead">
              Draait jouw bedrijf op aanvragen, boekingen of reserveringen? Dan haal je hier het meeste uit.
            </p>
          </Reveal>
          {' '}
          <div className="audience">
            <Reveal as="div" className="aud reveal">
              <span className="aud__ic">
                <Icon name="ticket" />
              </span>
              <h4>Activiteitenbedrijven</h4>
              <p>Waar boekingen en reserveringen binnenkomen via de site.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="aud reveal" data-d="1">
              <span className="aud__ic">
                <Icon name="package" />
              </span>
              <h4>Verhuurbedrijven</h4>
              <p>Waar beschikbaarheid en aanvragen centraal staan.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="aud reveal" data-d="2">
              <span className="aud__ic">
                <Icon name="briefcase" />
              </span>
              <h4>Dienstverleners</h4>
              <p>Waar vertrouwen de doorslag geeft bij een aanvraag.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="aud reveal" data-d="3">
              <span className="aud__ic">
                <Icon name="calendar-check" />
              </span>
              <h4>Bedrijven met reserveringen</h4>
              <p>Waar een soepele boekingsroute het verschil maakt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="aud reveal" data-d="4">
              <span className="aud__ic">
                <Icon name="file-text" />
              </span>
              <h4>Bedrijven met offerteaanvragen</h4>
              <p>Waar elke gemiste aanvraag een misgelopen klant is.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="dark" data-screen-label="Waarom gratis">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom gratis</span>
            {' '}
            <h2 className="h2">
              Waarom bieden we dit
              {' '}
              <em>gratis</em>
              {' '}
              aan?
            </h2>
          </Reveal>
          {' '}
          <div className="whyfree">
            <Reveal as="div" className="whyfree__txt reveal">
              <h3>
                Veel bedrijven laten kansen liggen zonder dat ze het doorhebben.
              </h3>
              {' '}
              <p>
                Met een websitescan laten we precies zien waar die kansen liggen. Daarna bepaal je zelf wat je ermee doet. Soms is dat samen aan de slag, vaak ook gewoon zelf. Beide zijn prima.
              </p>
              {' '}
              <div className="whyfree__re">
                <span>
                  <Icon name="check" />
                  Geen druk
                </span>
                {' '}
                <span>
                  <Icon name="check" />
                  Geen verplichtingen
                </span>
                {' '}
                <span>
                  <Icon name="check" />
                  Geen kleine lettertjes
                </span>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="whyfree__card reveal" data-d="1">
              <div className="big">€ 0</div>
              {' '}
              <div className="cap">Wat de scan je kost</div>
              {' '}
              <p>
                We investeren liever de tijd om je écht te laten zien wat er beter kan. Als dat goed bevalt, weet je ons te vinden. Zo niet, dan heb je alsnog waardevolle inzichten.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Wat je niet krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Het verschil</span>
            {' '}
            <h2 className="h2">
              Geen automatische
              {' '}
              <em>AI-scan.</em>
            </h2>
            {' '}
            <p className="lead">
              Je website wordt niet door een tool langs een standaard checklist gehaald.
            </p>
          </Reveal>
          {' '}
          <div className="compare">
            <Reveal as="div" className="cmp cmp--plain reveal">
              <span className="cmp__tag">Wat je niet krijgt</span>
              {' '}
              <h3>De standaard online scan</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">✕</span>
                  Geen automatisch gegenereerd rapport
                </li>
                {' '}
                <li>
                  <span className="ic">✕</span>
                  Geen generieke checklist
                </li>
                {' '}
                <li>
                  <span className="ic">✕</span>
                  Geen verkooppraatje
                </li>
                {' '}
                <li>
                  <span className="ic">✕</span>
                  Geen oppervlakkige analyse
                </li>
              </ul>
            </Reveal>
            {' '}
            <Reveal as="div" className="cmp cmp--us reveal" data-d="1">
              <span className="cmp__badge">Onze scan</span>
              {' '}
              <span className="cmp__tag">Wat je wél krijgt</span>
              {' '}
              <h3>Een persoonlijke beoordeling</h3>
              {' '}
              <ul className="cmp__list">
                <li>
                  <span className="ic">✓</span>
                  Een handmatige beoordeling door een mens
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Concrete, toepasbare verbeterpunten
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Advies dat past bij jouw bedrijf
                </li>
                {' '}
                <li>
                  <span className="ic">✓</span>
                  Een eerlijke blik, zonder druk
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="paper" data-screen-label="Wie voert de scan uit">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De persoon erachter</span>
            {' '}
            <h2 className="h2">
              Achter iedere scan zit een
              {' '}
              <em>echt persoon.</em>
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
                <div className="rl">Bekijkt elke scan persoonlijk</div>
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="founder__body reveal" data-d="1">
              <h3>Je website wordt niet door software beoordeeld.</h3>
              {' '}
              <p>
                Iedere scan wordt persoonlijk bekeken. Niet vanuit een lijstje met groene en rode vinkjes, maar vanuit de vraag:
                {' '}
                <em>helpt deze website bezoekers echt om klant te worden?</em>
              </p>
              {' '}
              <p>
                Daarbij kijk ik steeds naar dezelfde dingen die het verschil maken voor jouw bedrijf:
              </p>
              {' '}
              <div className="traits">
                <span className="trait">
                  <Icon name="hand" />
                  Gebruiksvriendelijkheid
                </span>
                {' '}
                <span className="trait">
                  <Icon name="shield-check" />
                  Vertrouwen
                </span>
                {' '}
                <span className="trait">
                  <Icon name="mouse-pointer-click" />
                  Conversie
                </span>
                {' '}
                <span className="trait">
                  <Icon name="layout" />
                  Structuur
                </span>
                {' '}
                <span className="trait">
                  <Icon name="trending-up" />
                  Groeipotentie
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>
            {' '}
            <h2 className="h2">Goed om te weten</h2>
          </Reveal>
          {' '}
          <div className="faq">
            <Qa question="Is de scan echt gratis?" className="reveal">
                Ja, helemaal gratis en zonder verplichtingen. Je betaalt niets en zit nergens aan vast. We bieden het aan omdat het vaak een mooi begin is van een gesprek, maar dat hoeft absoluut niet.
            </Qa>
            {' '}
            <Qa question="Hoe lang duurt het?" className="reveal">
                Het invullen kost je nog geen minuut. Daarna ontvang je gemiddeld binnen 2 werkdagen je persoonlijke verbeterpunten.
            </Qa>
            {' '}
            <Qa question="Moet ik klant worden?" className="reveal">
                Nee. Je bepaalt volledig zelf wat je met de inzichten doet. Veel bedrijven gaan er prima zelf mee aan de slag. Geen druk, geen verkooppraatje.
            </Qa>
            {' '}
            <Qa question="Welke websites beoordelen jullie?" className="reveal">
                Vooral websites van bedrijven die afhankelijk zijn van aanvragen, boekingen of reserveringen. Denk aan activiteiten- en verhuurbedrijven, dienstverleners en lokale bedrijven. Twijfel je of jouw site past? Stuur 'm gerust in.
            </Qa>
            {' '}
            <Qa question="Krijg ik een rapport?" className="reveal">
                Je krijgt geen automatisch gegenereerd PDF-rapport vol cijfers, maar een persoonlijke beoordeling met concrete verbeterpunten die je direct kunt toepassen.
            </Qa>
            {' '}
            <Qa question="Wat gebeurt er na de scan?" className="reveal">
                Je ontvangt je verbeterpunten en bepaalt zelf de volgende stap. Wil je sparren over de uitkomst, dan kan dat vrijblijvend. Wil je liever zelf aan de slag, ook prima.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" id="aanvragen" data-theme="dark" data-screen-label="Eind-CTA + scan-formulier">
        <div className="wrap">
          <div className="fendcta">
            <div className="fendcta__copy">
              <Reveal as="h2" className="display reveal">Klaar om te ontdekken waar jouw website kansen laat liggen?</Reveal>
              {' '}
              <Reveal as="p" className="lead reveal" data-d="1">
                Vraag een gratis websitescan aan en ontvang concrete verbeterpunten voor jouw website.
              </Reveal>
              {' '}
              <Reveal as="div" className="ftrust reveal" data-d="2">
                <span>100% gratis</span>
                {' '}
                <span>Persoonlijk bekeken</span>
                {' '}
                <span>Geen verplichtingen</span>
              </Reveal>
            </div>
            {' '}
            <SingleLeadForm
              className="reveal"
              subject="Nieuwe aanvraag - Gratis websitescan"
              head={
                <>
                  <span className="form__head-note">
                    <span className="dotmini" />
                    Gratis websitescan
                  </span>
                  {' '}
                  <h3>Stuur je website in</h3>
                  {' '}
                  <p>
                    Vul je gegevens in. Binnen 2 werkdagen ontvang je je persoonlijke verbeterpunten.
                  </p>
                </>
              }
              ok={
                <>
                <div className="ic">✓</div>
                {' '}
                <h3>Bedankt. Aanvraag ontvangen.</h3>
                {' '}
                <p>
                  We bekijken je website persoonlijk en nemen gemiddeld binnen 2 werkdagen contact met je op.
                </p>
                </>
              }
            >
              <div className="field">
                <label htmlFor="e-url">Website URL</label>
                {' '}
                <input id="e-url" name="url" type="text" inputMode="url" placeholder="jouwwebsite.nl" required />
              </div>
              {' '}
              <div className="field-row">
                <div className="field">
                  <label htmlFor="e-naam">Naam</label>
                  {' '}
                  <input id="e-naam" name="naam" type="text" placeholder="Voor- en achternaam" required />
                </div>
                {' '}
                <div className="field">
                  <label htmlFor="e-email">E-mailadres</label>
                  {' '}
                  <input id="e-email" name="email" type="email" placeholder="jij@bedrijf.nl" required />
                </div>
              </div>
              {' '}
              <button className="btn btn-primary" type="submit">
                Stuur mijn gratis scan
                {' '}
                <span className="arr">→</span>
              </button>
              {' '}
              <p className="form__disc">
                Geen spam. Geen verplichtingen. Gemiddeld binnen 2 werkdagen een reactie.
              </p>
            </SingleLeadForm>
          </div>
        </div>
      </section>
    </main>
  )
}
