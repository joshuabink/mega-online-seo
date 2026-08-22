import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/offerteaanvragen')({
  head: () => ({
    meta: [
      { title: "Websites voor bedrijven met offerteaanvragen | MegaOnline.io" },
      { name: 'description', content: "Een website voor bedrijven met offerteaanvragen die betere leads oplevert: een slim aanvraagformulier dat kwalificeert, vertrouwen opbouwt en tijd bespaart." },
      { property: 'og:title', content: "Websites voor bedrijven met offerteaanvragen | MegaOnline.io" },
      { property: 'og:description', content: "Een website voor bedrijven met offerteaanvragen die betere leads oplevert: een slim aanvraagformulier dat kwalificeert, vertrouwen opbouwt en tijd bespaart." },
      { property: 'og:url', content: "https://megaonline.io/branches/offerteaanvragen" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/offerteaanvragen" },
    ],
  }),
  component: Offerteaanvragen,
})

function Offerteaanvragen() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Bedrijven met offerteaanvragen">
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
                <b>Bedrijven met offerteaanvragen</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Bedrijven met offerteaanvragen
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Betere aanvragen. Minder tijd kwijt aan de
                {' '}
                <em>verkeerde.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Installateur, aannemer of B2B-specialist: je leeft van offerteaanvragen, maar niet elke aanvraag is er één om blij van te worden. Wij bouwen een website die de juiste leads aantrekt en meteen de informatie uitvraagt die je nodig hebt.
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
              Niet méér aanvragen, maar de
              {' '}
              <em>juiste</em>
              {' '}
              aanvragen.
            </h2>
            {' '}
            <p className="lead">
              We werken voor bedrijven die op offertebasis verkopen. Die markt heeft een terugkerend probleem, en daar lossen we de website omheen op.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Te vage aanvragen</h4>
                <p>
                  'Ik wil een offerte' zonder details kost je tijd voordat je kunt inschatten.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Veel heen-en-weer</h4>
                <p>
                  Mails om de aanvraag compleet te krijgen voordat je iets kunt zeggen.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Verkeerde leads</h4>
                <p>
                  Aanvragen buiten je werkgebied, budget of vakgebied kosten alleen maar tijd.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Klant vergelijkt</h4>
                <p>
                  Men vraagt meerdere offertes op. Vertrouwen vooraf bepaalt wie de klus krijgt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Waarom jou?</h4>
                <p>
                  Zonder bewijs van kwaliteit beland je in een prijzenvergelijking.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Leads blijven liggen</h4>
                <p>
                  Een trage of rommelige opvolging laat goede aanvragen verdampen.
                </p>
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
              We laten je website het
              {' '}
              <em>voorwerk</em>
              {' '}
              doen.
            </h2>
            {' '}
            <p className="lead">
              Een aanvraagproces dat meteen de juiste vragen stelt en alleen serieuze, complete leads doorzet naar jou.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="clipboard-list" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Een slim aanvraagformulier</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  In plaats van 'stuur ons een bericht' vraagt je formulier stap voor stap de juiste informatie uit. Jij ontvangt complete aanvragen die je direct kunt beoordelen en oppakken.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Alleen serieuze, complete aanvragen,
                {' '}
                <em>klaar</em>
                {' '}
                om op te pakken.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="filter" />
                </span>
              </div>
              {' '}
              <h3>Kwalificeren vooraf</h3>
              {' '}
              <p>
                Werkgebied, budget en scope zijn al duidelijk bij binnenkomst.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="award" />
                </span>
              </div>
              {' '}
              <h3>Vertrouwen met cases</h3>
              {' '}
              <p>Bewijs van eerder werk dat je uit de prijzenstrijd haalt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="zap" />
                </span>
              </div>
              {' '}
              <h3>Snelle opvolging</h3>
              {' '}
              <p>
                Aanvragen komen overzichtelijk binnen, klaar om direct te reageren.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="map-pin" />
                </span>
              </div>
              {' '}
              <h3>Scope & werkgebied helder</h3>
              {' '}
              <p>Duidelijk wat je wel en niet doet, en waar.</p>
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
              Wat een goede offertewebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Gericht op kwalitatieve leads en minder tijd aan aanvragen die toch niks worden.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="clipboard-list" />
              </span>
              <h4>Slim aanvraagformulier</h4>
              <p>Vraagt stap voor stap de juiste informatie uit.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="filter" />
              </span>
              <h4>Vooraf kwalificeren</h4>
              <p>Filtert aanvragen op werkgebied, budget en scope.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Cases & referenties</h4>
              <p>Bewijs dat je levert, zodat prijs niet het enige is.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="map-pin" />
              </span>
              <h4>Werkgebied duidelijk</h4>
              <p>Geen aanvragen meer van buiten je regio.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="zap" />
              </span>
              <h4>Vlotte opvolging</h4>
              <p>Complete leads die je direct kunt oppakken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="search-check" />
              </span>
              <h4>Vindbaar op je vak</h4>
              <p>Gevonden worden door wie actief naar jouw dienst zoekt.</p>
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
            <Qa question="Hoe zorgt een formulier voor betere aanvragen?" className="reveal">
                Door gericht door te vragen. In plaats van een leeg tekstvak leidt het formulier de bezoeker langs de vragen die jij nodig hebt, zodat je meteen een compleet en beoordeelbaar beeld hebt.
            </Qa>
            {' '}
            <Qa question="Kan ik aanvragen buiten mijn werkgebied eruit filteren?" className="reveal">
                Ja. We kunnen het formulier zo inrichten dat het op postcode, regio of type klus voorsorteert, zodat je vooral relevante aanvragen ontvangt.
            </Qa>
            {' '}
            <Qa question="Helpt dit om uit een prijzenvergelijking te blijven?" className="reveal">
                Vaak wel. Door vertrouwen op te bouwen met cases, referenties en een professionele uitstraling word je beoordeeld op kwaliteit, niet alleen op prijs.
            </Qa>
            {' '}
            <Qa question="Wat kost zo'n website?" className="reveal">
                Dat hangt af van de complexiteit van je aanvraagproces en koppelingen. Met een gratis websitescan brengen we het vrijblijvend in kaart.
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
            <h2 className="display">Minder offertes schrijven, meer opdrachten binnenhalen.</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien hoe je website betere leads kan binnenhalen.
            </p>
            {' '}
            <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ justifyContent: "center", marginTop: "28px" }}>
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
          </Reveal>
        </div>
      </section>
    </main>
  )
}
