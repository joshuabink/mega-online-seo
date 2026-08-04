import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/diensten/seo')({
  head: () => ({
    meta: [
      { title: "SEO: beter gevonden worden | MegaOnline.io" },
      { name: 'description', content: "SEO die zorgt dat de juiste klanten je vinden. Lokale vindbaarheid, sterke landingspagina's en een gezonde technische basis, gericht op aanvragen, niet op ijdele cijfers." },
      { property: 'og:title', content: "SEO: beter gevonden worden | MegaOnline.io" },
      { property: 'og:description', content: "SEO die zorgt dat de juiste klanten je vinden. Lokale vindbaarheid, sterke landingspagina's en een gezonde technische basis, gericht op aanvragen, niet op ijdele cijfers." },
      { property: 'og:url', content: "https://megaonline.io/diensten/seo" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/diensten/seo" },
    ],
  }),
  component: Seo,
})

function Seo() {
  return (
    <main id="top">
      <section className="section svc-hero svc-hero--center" data-theme="dark" data-screen-label="Hero — SEO">
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
                <b>SEO</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  SEO
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Gevonden worden door wie
                {' '}
                <em>al naar je zoekt.</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Een mooie website heeft pas waarde als de juiste mensen ‘m vinden. Wij zorgen dat je verschijnt op het moment dat iemand zoekt naar wat jij biedt, en dat die bezoeker ook echt klant wordt.
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
            <span className="label">Waar het misgaat</span>
            {' '}
            <h2 className="h2">
              Onderaan in Google is net zo erg als
              {' '}
              <em>onzichtbaar.</em>
            </h2>
            {' '}
            <p className="lead">
              De meeste websites laten vindbaarheid liggen. Niet door slechte teksten, maar door een gebrek aan focus op de juiste zoekwoorden en een gezonde basis.
            </p>
          </Reveal>
          {' '}
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">01</span>
                <h4>Onvindbaar in je regio</h4>
                <p>Klanten zoeken lokaal, maar je concurrent staat bovenaan.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">02</span>
                <h4>Verkeer zonder aanvragen</h4>
                <p>Bezoekers komen binnen, maar nemen geen contact op.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">03</span>
                <h4>Verkeerde zoekwoorden</h4>
                <p>Je scoort op termen waar je klant niet op zoekt.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">04</span>
                <h4>Trage, zwakke basis</h4>
                <p>Snelheid en techniek drukken je posities omlaag.</p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal">
                <span className="mn">05</span>
                <h4>Dunne pagina's</h4>
                <p>
                  Te weinig inhoud om Google te overtuigen dat je relevant bent.
                </p>
              </Reveal>
              {' '}
              <Reveal as="div" className="miniprob reveal" data-d="1">
                <span className="mn">06</span>
                <h4>Geen overzicht</h4>
                <p>Je weet niet waar je staat of wat een verbetering oplevert.</p>
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
              SEO die op
              {' '}
              <em>aanvragen</em>
              {' '}
              stuurt, niet op ijdele cijfers.
            </h2>
            {' '}
            <p className="lead">
              We jagen geen bezoekersaantallen na, maar de juiste bezoekers: mensen met een concrete vraag die bij jou past.
            </p>
          </Reveal>
          {' '}
          <div className="bento">
            <Reveal as="div" className="bcell bcell--big reveal">
              <div>
                <div className="bcell__top">
                  <span className="bcell__no">De kern</span>
                  <span className="iconbox">
                    <Icon name="search-check" />
                  </span>
                </div>
                {' '}
                <h3 style={{ marginTop: "18px" }}>Gevonden op wat je klant echt zoekt</h3>
                {' '}
                <p style={{ marginTop: "14px" }}>
                  We brengen in kaart waar jouw klanten op zoeken en richten je pagina's daarop in. Geen trucjes, maar relevante inhoud en een gezonde technische basis die blijvend resultaat geeft.
                </p>
              </div>
              {' '}
              <div className="pullnote" style={{ marginTop: "24px" }}>
                De juiste bezoeker op de juiste pagina,
                {' '}
                <em>klaar</em>
                {' '}
                om contact op te nemen.
              </div>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 01</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="map-pin" />
                </span>
              </div>
              {' '}
              <h3>Lokale vindbaarheid</h3>
              {' '}
              <p>Bovenaan komen in je eigen regio, waar je klanten zoeken.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 02</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="layout-template" />
                </span>
              </div>
              {' '}
              <h3>Sterke landingspagina's</h3>
              {' '}
              <p>Pagina's die scoren én bezoekers naar actie leiden.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="1">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 03</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="gauge" />
                </span>
              </div>
              {' '}
              <h3>Technische basis</h3>
              {' '}
              <p>Snelheid, structuur en mobiel op orde als fundament.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="bcell reveal" data-d="2">
              <div className="bcell__top">
                <span className="bcell__no">Aanpak 04</span>
                <span className="iconbox iconbox--sm">
                  <Icon name="bar-chart-3" />
                </span>
              </div>
              {' '}
              <h3>Inzicht & groei</h3>
              {' '}
              <p>Heldere rapportage over posities, verkeer en aanvragen.</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat je krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat we oppakken</span>
            {' '}
            <h2 className="h2">
              Wat goede SEO
              {' '}
              <em>nodig heeft.</em>
            </h2>
            {' '}
            <p className="lead">
              Een complete aanpak, van zoekwoorden tot techniek tot meetbaar resultaat.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="search" />
              </span>
              <h4>Zoekwoordonderzoek</h4>
              <p>We bepalen op welke termen je klant echt zoekt.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="map-pin" />
              </span>
              <h4>Lokale SEO</h4>
              <p>Google Bedrijfsprofiel en regionale vindbaarheid.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="layout-template" />
              </span>
              <h4>Landingspagina's</h4>
              <p>Pagina's die scoren en converteren tegelijk.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Content & structuur</h4>
              <p>Inhoud en opbouw die Google en bezoeker overtuigen.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="gauge" />
              </span>
              <h4>Techniek & snelheid</h4>
              <p>Een snelle, gezonde basis als fundament onder je posities.</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="bar-chart-3" />
              </span>
              <h4>Meten & rapporteren</h4>
              <p>Inzicht in posities, verkeer en aanvragen.</p>
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
            <Qa question="Hoe snel zie ik resultaat van SEO?" className="reveal">
                SEO is geen knop die je omzet. De eerste verbeteringen zijn vaak binnen enkele weken zichtbaar, maar serieuze, blijvende posities bouw je op over enkele maanden. We sturen op gestage, duurzame groei in plaats van korte trucs.
            </Qa>
            {' '}
            <Qa question="Werkt SEO ook voor een klein, lokaal bedrijf?" className="reveal">
                Juist dan. Lokale SEO is vaak de snelste winst: je concurreert in je eigen regio in plaats van met heel Nederland. We zorgen dat je verschijnt wanneer iemand in de buurt zoekt naar wat jij doet.
            </Qa>
            {' '}
            <Qa question="Moet mijn website opnieuw gebouwd worden?" className="reveal">
                Meestal niet. We kijken eerst wat er met je huidige website mogelijk is. Vaak valt er veel te winnen met content, structuur en techniek zonder een volledige herbouw.
            </Qa>
            {' '}
            <Qa question="Is SEO los van een website af te nemen?" className="reveal">
                Ja. SEO kan op je bestaande website, los van een nieuw ontwerp. We beginnen graag met een gratis websitescan om te laten zien waar je vindbaarheid blijft liggen.
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
            <h2 className="display">Klaar om beter gevonden te worden?</h2>
            {' '}
            <p className="lead">
              Vraag een gratis websitescan aan. We laten zien waar je nu vindbaarheid, en dus aanvragen, misloopt.
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
