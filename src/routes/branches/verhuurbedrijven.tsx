import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/branches/verhuurbedrijven')({
  head: () => ({
    meta: [
      { title: "Websites voor verhuurbedrijven | MegaOnline.io" },
      { name: 'description', content: "Een website voor verhuurbedrijven die het bel- en mailverkeer vermindert: beschikbaarheid, periodes en voorwaarden helder, en snellere bevestigde verhuur." },
      { property: 'og:title', content: "Websites voor verhuurbedrijven | MegaOnline.io" },
      { property: 'og:description', content: "Een website voor verhuurbedrijven die het bel- en mailverkeer vermindert: beschikbaarheid, periodes en voorwaarden helder, en snellere bevestigde verhuur." },
      { property: 'og:url', content: "https://megaonline.io/branches/verhuurbedrijven" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/branches/verhuurbedrijven" },
    ],
  }),
  component: Verhuurbedrijven,
})

function Verhuurbedrijven() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Verhuurbedrijven">
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
                <b>Verhuurbedrijven</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Verhuurbedrijven
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Minder bel- en mailverkeer. Meer
                {' '}
                <em>bevestigde verhuur.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Of je nu materieel, voertuigen, fietsen of feestbenodigdheden verhuurt: de meeste tijd gaat zitten in vragen over beschikbaarheid en prijzen. Wij bouwen een website die dat werk uit handen neemt.
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
              Verhuur draait om
              {' '}
              <em>beschikbaarheid</em>
              {' '}
              op het juiste moment.
            </h2>
            {' '}
            <p className="lead">
              We werken voor bedrijven die spullen per periode verhuren. Die markt heeft eigen knelpunten, en die kennen we.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>'Is het vrij op die datum?'</h4>
                <p>
                  De vraag die je het vaakst krijgt, en die het meeste tijd kost om te beantwoorden.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Veel handwerk</h4>
                <p>
                  Offertes, mails en telefoontjes over prijzen en periodes lopen de hele dag door.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Borg en voorwaarden</h4>
                <p>
                  Onduidelijkheid vooraf leidt tot vragen, discussie en soms gedoe achteraf.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Piekmomenten</h4>
                <p>
                  Weekenden, evenementen en seizoen zorgen voor drukte op vaste momenten.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Breed assortiment</h4>
                <p>
                  Veel verschillende artikelen overzichtelijk en vindbaar houden is lastig.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Herhaalklanten</h4>
                <p>
                  Bedrijven die vaker huren wil je het zo makkelijk mogelijk maken.
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
              We halen het
              {' '}
              <em>uitzoekwerk</em>
              {' '}
              bij je weg.
            </h2>
            {' '}
            <p className="lead">
              Een website die de standaardvragen al beantwoordt, zodat er alleen serieuze aanvragen bij je binnenkomen.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="calendar-range" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Aanvragen of reserveren per periode</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  Klanten kiezen hun begin- en einddatum en zien meteen of het kan. Jij ontvangt een complete aanvraag in plaats van een vage mail.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Complete aanvragen binnen,
                {' '}
                <em>minder</em>
                {' '}
                uitzoekwerk vooraf.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="list" />
                </span>
              </div>
              {' '}
              <h3>Assortiment met prijzen</h3>
              {' '}
              <p>
                Alles overzichtelijk, met tarieven per dag, weekend of week.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="shield-check" />
                </span>
              </div>
              {' '}
              <h3>Voorwaarden & borg helder</h3>
              {' '}
              <p>
                Vooraf duidelijk wat geldt, zodat er achteraf geen verrassingen zijn.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="send" />
                </span>
              </div>
              {' '}
              <h3>Snelle offerte-aanvraag</h3>
              {' '}
              <p>Eén formulier dat meteen de juiste gegevens uitvraagt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="repeat" />
                </span>
              </div>
              {' '}
              <h3>Herhaalverhuur makkelijk</h3>
              {' '}
              <p>Vaste klanten huren in een paar klikken opnieuw.</p>
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
              Wat een goede verhuurwebsite
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Gericht op minder administratie en meer bevestigde boekingen.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="calendar-range" />
              </span>
              <h4>Beschikbaarheid per periode</h4>
              <p>Klanten zien of iets vrij is op hun gewenste datum.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="list" />
              </span>
              <h4>Overzichtelijk assortiment</h4>
              <p>
                Categorieën en filters die snel naar het juiste artikel leiden.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="euro" />
              </span>
              <h4>Heldere tarieven</h4>
              <p>Prijzen per dag, weekend of week, zonder verrassingen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Voorwaarden & borg</h4>
              <p>Duidelijke afspraken vooraf, minder vragen achteraf.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="send" />
              </span>
              <h4>Aanvraagformulier</h4>
              <p>Een complete aanvraag in één keer, klaar om te bevestigen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Werkt op elk scherm</h4>
              <p>Ook onderweg en op de bouwplaats makkelijk te gebruiken.</p>
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
            <Qa question="Kunnen klanten direct online reserveren of alleen aanvragen?" className="reveal">
                Beide kan. Voor sommige verhuurbedrijven werkt direct reserveren het best, voor andere een aanvraag die jij bevestigt. We kiezen wat bij jouw werkwijze past.
            </Qa>
            {' '}
            <Qa question="Kan ik mijn voorraad en prijzen zelf beheren?" className="reveal">
                Ja. Je past artikelen, tarieven en beschikbaarheid zelf aan. We richten het zo in dat het simpel blijft.
            </Qa>
            {' '}
            <Qa question="Kan het gekoppeld worden aan mijn verhuursoftware?" className="reveal">
                Vaak wel. We kijken naar het systeem dat je gebruikt en bepalen samen wat de slimste koppeling is.
            </Qa>
            {' '}
            <Qa question="Wat kost zo'n website?" className="reveal">
                Dat hangt af van je assortiment en de gewenste koppelingen. Met een gratis websitescan brengen we het vrijblijvend in kaart.
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
            <h2 className="display">Klaar om de telefoon wat rust te gunnen?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien hoeveel handwerk je website kan overnemen.
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
