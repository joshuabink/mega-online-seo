import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/non-profits')({
  head: () => ({
    meta: [
      { title: "Websites voor non-profits — MegaOnline.io" },
      { name: 'description', content: "Een website voor non-profits die je verhaal vertelt én tot actie aanzet: meer donaties, vrijwilligers en betrokkenheid, ook met een beperkt budget." },
      { property: 'og:title', content: "Websites voor non-profits — MegaOnline.io" },
      { property: 'og:description', content: "Een website voor non-profits die je verhaal vertelt én tot actie aanzet: meer donaties, vrijwilligers en betrokkenheid, ook met een beperkt budget." },
      { property: 'og:url', content: "https://megaonline.io/branches/non-profits" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/non-profits" },
    ],
  }),
  component: NonProfits,
})

function NonProfits() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Non-profits">
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <Link to="/" hash="diensten">Branches</Link>
                <span className="sep">/</span>
                {' '}
                <b>Non-profits</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Non-profits
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Meer steun online. Ook met een
                {' '}
                <em>beperkt budget.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Stichting, goed doel, vereniging of kerk: jouw werk draait op vertrouwen en betrokkenheid. Wij bouwen een website die je verhaal overbrengt en bezoekers aanzet tot doneren, aanmelden of meedoen.
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan
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
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="We kennen jouw markt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">We kennen jouw markt</span>
            {' '}
            <h2 className="h2">
              Een non-profit runt op
              {' '}
              <em>vertrouwen</em>
              , niet op marge.
            </h2>
            {' '}
            <p className="lead">
              We werken voor organisaties met een maatschappelijk doel. Die wereld heeft eigen uitdagingen — en daar bouwen we de website omheen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Beperkt budget</h4>
                <p>
                  Elke euro telt. Een website mag niet ten koste gaan van je doel.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Vertrouwen eerst</h4>
                <p>
                  Mensen geven en doen mee als ze zien dat hun steun goed terechtkomt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Vrijwilligers & leden</h4>
                <p>
                  Nieuwe mensen werven én betrokken houden is een doorlopende uitdaging.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Je verhaal & impact</h4>
                <p>
                  Wat je teweegbrengt is je sterkste argument, maar vaak slecht zichtbaar.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Meerdere doelgroepen</h4>
                <p>
                  Donateurs, vrijwilligers, deelnemers en pers willen elk iets anders.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Beheer door vrijwilligers</h4>
                <p>De site moet bij te houden zijn zonder technische kennis.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="light" data-screen-label="Onze oplossing">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze oplossing</span>
            {' '}
            <h2 className="h2">
              We zetten je verhaal om in
              {' '}
              <em>concrete steun.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen digitale folder, maar een website die bezoekers raakt en een duidelijke volgende stap biedt: doneren, aanmelden of meedoen.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="heart-handshake" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Een website die raakt én aanzet tot actie</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  We brengen je missie en impact helder in beeld en leiden bezoekers naar de stap die past: een donatie, een aanmelding of contact. Vertrouwen en eenvoud staan centraal.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Meer steun, met minder gedoe en een
                {' '}
                <em>beperkt</em>
                {' '}
                budget.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="hand-coins" />
                </span>
              </div>
              {' '}
              <h3>Doneren makkelijk gemaakt</h3>
              {' '}
              <p>
                Een heldere, laagdrempelige doneerroute, gekoppeld aan een betaaldienst.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="user-plus" />
                </span>
              </div>
              {' '}
              <h3>Vrijwilligers & leden werven</h3>
              {' '}
              <p>
                Eenvoudige aanmeldformulieren voor wie zich wil inzetten of aansluiten.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="sparkles" />
                </span>
              </div>
              {' '}
              <h3>Impact zichtbaar maken</h3>
              {' '}
              <p>
                Verhalen, cijfers en beeld die laten zien wat je steun teweegbrengt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="settings" />
                </span>
              </div>
              {' '}
              <h3>Zelf te beheren</h3>
              {' '}
              <p>
                Nieuws, agenda en pagina's bijwerken kan zonder technische kennis.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat zo'n website nodig heeft">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Op maat voor jouw branche</span>
            {' '}
            <h2 className="h2">
              Wat een goede non-profitwebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Gericht op vertrouwen, betrokkenheid en steun — zonder onnodige kosten.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="heart" />
              </span>
              <h4>Doneerroute</h4>
              <p>Een duidelijke, veilige manier om online te doneren.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="user-plus" />
              </span>
              <h4>Aanmeldformulieren</h4>
              <p>Voor vrijwilligers, leden of deelnemers aan activiteiten.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="calendar" />
              </span>
              <h4>Agenda & activiteiten</h4>
              <p>Evenementen en bijeenkomsten overzichtelijk in beeld.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="newspaper" />
              </span>
              <h4>Nieuws & verhalen</h4>
              <p>Laat doorlopend zien wat je doet en bereikt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="file-check" />
              </span>
              <h4>Transparantie & ANBI</h4>
              <p>Ruimte voor jaarverslagen, beleid en ANBI-informatie.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="settings" />
              </span>
              <h4>Zelf te beheren</h4>
              <p>Bij te houden door vrijwilligers, zonder technische kennis.</p>
            </Reveal>
          </div>
        </div>
      </section>
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
            <Qa question="Hebben jullie ervaring met non-profits?" className="reveal">
                Ja. We bouwden onder meer voor LoveForAfrica, de Ontmoetingskerk en De Nieuwe Westerkerk. We snappen dat het bij non-profits om vertrouwen, betrokkenheid en zorgvuldig omgaan met middelen draait.
            </Qa>
            {' '}
            <Qa question="Kunnen jullie rekening houden met een beperkt budget?" className="reveal">
                Zeker. Voor veel non-profits is onze Starter Website een goede, voordelige start. We kijken eerlijk mee wat echt nodig is en wat kan wachten.
            </Qa>
            {' '}
            <Qa question="Kunnen donateurs online doneren?" className="reveal">
                Ja. We richten een heldere doneerroute in en koppelen die aan een betrouwbare betaaldienst, zodat doneren in een paar stappen kan.
            </Qa>
            {' '}
            <Qa question="Kunnen vrijwilligers de website zelf bijhouden?" className="reveal">
                Ja. We bouwen de site zo op dat nieuws, agenda en teksten eenvoudig zelf bij te werken zijn, ook zonder technische kennis.
            </Qa>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>
            {' '}
            <h2 className="display">Klaar om meer steun online te krijgen?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien hoe je website meer donaties, vrijwilligers en betrokkenheid kan opleveren.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag een gratis websitescan aan
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
          </Reveal>
        </div>
      </section>
    </main>
  )
}
