import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/diensten/integraties')({
  head: () => ({
    meta: [
      { title: "Integraties & koppelingen | MegaOnline.io" },
      { name: 'description', content: "Koppel je website aan je CRM, boekingssysteem, agenda en WhatsApp. Minder overtypen, geen gemiste aanvragen en alles automatisch op de juiste plek." },
      { property: 'og:title', content: "Integraties & koppelingen | MegaOnline.io" },
      { property: 'og:description', content: "Koppel je website aan je CRM, boekingssysteem, agenda en WhatsApp. Minder overtypen, geen gemiste aanvragen en alles automatisch op de juiste plek." },
      { property: 'og:url', content: "https://megaonline.io/diensten/integraties" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/integraties" },
    ],
  }),
  component: Integraties,
})

function Integraties() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — Integraties & koppelingen">
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
                <b>Integraties & koppelingen</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Integraties & koppelingen
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Laat je website
                {' '}
                <em>samenwerken</em>
                {' '}
                met je systemen.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Een aanvraag die in je mailbox blijft hangen, een boeking die je handmatig overtypt: dat kost tijd en levert fouten op. Wij koppelen je website aan de systemen waar je al mee werkt, zodat alles automatisch op z’n plek komt.
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
      <section className="section section--tight" data-theme="paper" data-screen-label="Het probleem">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waar het schuurt</span>
            {' '}
            <h2 className="h2">
              Los van elkaar werkende systemen kosten je
              {' '}
              <em>tijd.</em>
            </h2>
            {' '}
            <p className="lead">
              Veel bedrijven hebben prima tools, maar ze praten niet met elkaar. Dat betekent dubbel werk, overtypen en aanvragen die tussen wal en schip vallen.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Overtypen van gegevens</h4>
                <p>
                  Aanvragen handmatig in je CRM zetten kost tijd en geeft fouten.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Gemiste aanvragen</h4>
                <p>Een formulier in een mailbox raakt zoek of blijft liggen.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Dubbele boekingen</h4>
                <p>Losse agenda’s die niet syncen leiden tot overlap.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Trage opvolging</h4>
                <p>
                  Hoe later je reageert, hoe groter de kans dat de klant afhaakt.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Versnipperd overzicht</h4>
                <p>Klantinfo verspreid over mail, agenda en losse lijstjes.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Handwerk dat blijft groeien</h4>
                <p>
                  Hoe drukker het wordt, hoe meer tijd je kwijt bent aan administratie.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="light" data-screen-label="Onze aanpak">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Onze aanpak</span>
            {' '}
            <h2 className="h2">
              Één soepel geheel,
              {' '}
              <em>automatisch</em>
              {' '}
              bijgewerkt.
            </h2>
            {' '}
            <p className="lead">
              We verbinden je website met de tools die je al gebruikt, zodat gegevens vanzelf op de juiste plek belanden en niets meer blijft liggen.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="workflow" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Je website als kloppend hart van je proces</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  Een aanvraag of boeking komt binnen en gaat automatisch door naar je CRM, agenda of inbox. Jij houdt overzicht en tijd over, je klant krijgt een snelle, professionele opvolging.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                Minder handwerk, snellere opvolging,
                {' '}
                <em>geen</em>
                {' '}
                gemiste aanvragen.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="users" />
                </span>
              </div>
              {' '}
              <h3>CRM-koppelingen</h3>
              {' '}
              <p>Aanvragen komen automatisch in je klantsysteem terecht.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="calendar-clock" />
                </span>
              </div>
              {' '}
              <h3>Boekingssystemen</h3>
              {' '}
              <p>Realtime beschikbaarheid, geen dubbele boekingen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="message-circle" />
                </span>
              </div>
              {' '}
              <h3>WhatsApp-integraties</h3>
              {' '}
              <p>Laagdrempelig contact, direct vanaf je website.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="plug" />
                </span>
              </div>
              {' '}
              <h3>Betaal & overige tools</h3>
              {' '}
              <p>Koppelingen met betaaldiensten, nieuwsbrief en meer.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat je krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we koppelen</span>
            {' '}
            <h2 className="h2">
              Koppelingen die je
              {' '}
              <em>tijd</em>
              {' '}
              besparen.
            </h2>
            {' '}
            <p className="lead">
              We sluiten aan op de tools die je al gebruikt, of adviseren wat het beste past.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>CRM-systemen</h4>
              <p>Aanvragen automatisch in je klantsysteem.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="calendar-clock" />
              </span>
              <h4>Boekings- & agenda</h4>
              <p>Realtime beschikbaarheid en synchronisatie.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="message-circle" />
              </span>
              <h4>WhatsApp & chat</h4>
              <p>Direct contact vanaf je website.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="credit-card" />
              </span>
              <h4>Betaaldiensten</h4>
              <p>Online doneren, betalen of reserveren.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="mail" />
              </span>
              <h4>Nieuwsbrief & marketing</h4>
              <p>Inschrijvingen rechtstreeks in je maillijst.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Maatwerkkoppelingen</h4>
              <p>Een specifiek systeem? We kijken naar de mogelijkheden.</p>
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
            <Qa question="Werkt dit met de systemen die ik nu gebruik?" className="reveal">
                Vaak wel. We sluiten aan op veelgebruikte CRM-, boekings- en betaalsystemen, en kijken per situatie wat de slimste koppeling is. Soms via een directe integratie, soms via een tussenstap.
            </Qa>
            {' '}
            <Qa question="Wat als mijn systeem geen standaardkoppeling heeft?" className="reveal">
                Dan zoeken we naar een maatwerkoplossing. Niet alles kan, maar vaak is er meer mogelijk dan je denkt. We zijn er eerlijk over wat haalbaar en zinvol is.
            </Qa>
            {' '}
            <Qa question="Kan ik koppelingen later toevoegen?" className="reveal">
                Zeker. Je hoeft niet alles in één keer te koppelen. We beginnen met wat het meeste oplevert en breiden uit wanneer jij daar klaar voor bent.
            </Qa>
            {' '}
            <Qa question="Is een integratie los van een website af te nemen?" className="reveal">
                Ja. We kunnen koppelingen ook toevoegen aan je bestaande website. Begin met een gratis websitescan, dan kijken we waar je het meeste handwerk kunt wegnemen.
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
            <h2 className="display">Klaar om het handwerk weg te automatiseren?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien welke koppelingen jou het meeste tijd besparen.
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
