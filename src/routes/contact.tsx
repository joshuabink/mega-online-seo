import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { FaqSchema } from '@/components/FaqSchema'
import { Media } from '@/components/Media'
import { Reveal } from '@/components/Reveal'
import { SingleLeadForm } from '@/components/LeadForm'
import { CONTACT_REACTIETIJD } from '@/lib/lead-contact'
import '@/styles/pages/contact.css'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: "Contact & kennismaking | MegaOnline.io" },
      { name: 'description', content: "Even kennismaken of een vraag stellen? Plan een vrijblijvende kennismaking met MegaOnline of neem direct contact op. Geen verplichtingen, eerlijk advies." },
      { property: 'og:title', content: "Contact & kennismaking | MegaOnline.io" },
      { property: 'og:description', content: "Even kennismaken of een vraag stellen? Plan een vrijblijvende kennismaking met MegaOnline of neem direct contact op. Geen verplichtingen, eerlijk advies." },
      { property: 'og:url', content: "https://megaonline.io/contact" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/contact" },
    ],
  }),
  component: Contact,
})

function Contact() {
  return (
    <main id="top" data-page="contact">
      <section className="section fhero" data-theme="dark" data-screen-label="Hero — Contact & kennismaking">
        <div className="wrap">
          <div className="fhero__grid">
            <div className="fhero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <b>Contact</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Contact & kennismaking
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                Even kennismaken?
                {' '}
                <em>Vrijblijvend</em>
                {' '}
                en zonder verkooppraat.
              </Reveal>
              {' '}
              <Reveal as="p" className="lead fhero__sub reveal" data-d="2">
                Of je nu een concrete vraag hebt of gewoon wilt sparren over je website, MegaOnline denkt graag mee. Je krijgt eerlijk advies, ook als dat betekent dat je (nog) geen hulp nodig hebt.
              </Reveal>
              {' '}
              <Reveal as="ul" className="hero__ticks reveal" data-d="2">
                <li>
                  <Icon name="check" className="ck" />
                  <span>Geen verplichtingen</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Direct met de maker</span>
                </li>
                <li>
                  <Icon name="check" className="ck" />
                  <span>Reactie {CONTACT_REACTIETIJD}</span>
                </li>
              </Reveal>
            </div>
            {' '}
            <SingleLeadForm
              className="fhero__form hero__form reveal"
              subject="Nieuw contactverzoek - MegaOnline.io"
              formName="contact"
              head={
                <>
                  <span className="form__head-note">
                    <span className="dotmini" />
                    Plan je kennismaking
                  </span>
                  {' '}
                  <h3>Laat je gegevens achter</h3>
                  {' '}
                  <p>
                    We nemen contact op om een kort, vrijblijvend gesprek in te plannen op een moment dat jou uitkomt.
                  </p>
                  {' '}
                  <span className="form__person">
                    <span className="form__person-av">
                      <Media id="founder-av" fit="cover" shape="circle" alt="Joshua Bink, oprichter van MegaOnline" />
                    </span>
                    <span>Je spreekt direct met Joshua, oprichter van MegaOnline.</span>
                  </span>
                </>
              }
              ok={
                <>
                <div className="ic">✓</div>
                {' '}
                <h3>Bedankt. We nemen contact met je op.</h3>
                {' '}
                <p>
                  Je aanvraag is ontvangen. We reageren gemiddeld {CONTACT_REACTIETIJD} om samen een moment te prikken.
                </p>
                </>
              }
            >
              <div className="field-row">
                <div className="field">
                  <label htmlFor="c-naam">Je naam</label>
                  <input id="c-naam" name="naam" type="text" placeholder="Voor- en achternaam" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="c-bedrijf">
                    Bedrijfsnaam <span className="opt">(optioneel)</span>
                  </label>
                  <input id="c-bedrijf" name="bedrijf" type="text" placeholder="Bedrijfsnaam" autoComplete="organization" />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="c-email">E-mailadres</label>
                  <input id="c-email" name="email" type="email" placeholder="jij@bedrijf.nl" autoComplete="email" inputMode="email" required />
                </div>
                <div className="field">
                  <label htmlFor="c-tel">
                    Telefoonnummer <span className="opt">(optioneel)</span>
                  </label>
                  <input id="c-tel" name="tel" type="tel" placeholder="06 12345678" autoComplete="tel" inputMode="tel" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="c-bericht">Je bericht</label>
                <textarea id="c-bericht" name="bericht" rows={4} placeholder="Vertel kort waar je hulp bij zoekt" required />
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                Plan de kennismaking
                {' '}
              </button>
              {' '}
              <p className="form__disc">
                We reageren doorgaans binnen twee werkdagen, en altijd persoonlijk.
              </p>
            </SingleLeadForm>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Direct contact">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Liever direct</span>
            {' '}
            <h2 className="h2">Bereik MegaOnline rechtstreeks.</h2>
            {' '}
            <p className="lead">
              Een korte vraag of liever even bellen? Kies wat jou het beste uitkomt. Je krijgt altijd een mens aan de lijn, geen callcenter.
            </p>
          </Reveal>
          {' '}
          <div className="ccards">
            <Reveal as="div" className="ccard reveal">
              <span className="iconbox">
                <Icon name="mail" />
              </span>
              {' '}
              <h3>E-mail</h3>
              {' '}
              <p>
                Voor vragen, ideeën of een offerteaanvraag. We reageren doorgaans {CONTACT_REACTIETIJD}.
              </p>
              {' '}
              <a className="ccard__val" href="mailto:info@megaonline.io">
                info@megaonline.io
                {' '}
              </a>
            </Reveal>
            {' '}
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section" data-theme="light" data-screen-label="Wat je kunt verwachten">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je kunt verwachten</span>
            {' '}
            <h2 className="h2">
              Een kennismaking met MegaOnline is <em>geen</em> verkoopgesprek.
            </h2>
            {' '}
            <p className="lead">
              MegaOnline wil eerst begrijpen wat je doet en wat je wilt bereiken. Pas daarna kijkt MegaOnline of en hoe het kan helpen.
            </p>
          </Reveal>
          {' '}
          <div className="expect">
            <Reveal as="div" className="estep reveal">
              <h3>Korte kennismaking</h3>
              {' '}
              <p>
                In 20 tot 30 minuten bespreek je met MegaOnline je situatie, je doelen en je vragen. Op locatie of via een videocall, net wat jij prettig vindt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="estep reveal" data-d="1">
              <h3>Eerlijk advies</h3>
              {' '}
              <p>
                Je krijgt concrete input over wat er beter kan en wat dat oplevert. Ook als de conclusie is dat je (nog) geen hulp nodig hebt.
              </p>
            </Reveal>
            {' '}
            <Reveal as="div" className="estep reveal" data-d="2">
              <h3>Geen druk</h3>
              {' '}
              <p>
                Past het? Mooi, dan zet je samen met MegaOnline de volgende stap. Past het niet? Ook prima. Je zit nergens aan vast.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      {' '}
      <section className="section section--tight" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>
            {' '}
            <h2 className="h2">Goed om te weten</h2>
          </Reveal>
          {' '}
          <FaqSchema>
<div className="faq">
            <Qa question="Kost een kennismaking iets?" className="reveal">
                Nee, een kennismaking is gratis en volledig vrijblijvend. Je betaalt niets en zit nergens aan vast.
            </Qa>
            {' '}
            <Qa question="Hoe snel hoor ik iets?" className="reveal">
                We reageren gemiddeld {CONTACT_REACTIETIJD} om samen een moment te prikken dat jou uitkomt.
            </Qa>
            {' '}
            <Qa question="Moet ik al precies weten wat ik wil?" className="reveal">
                Nee. Ook met een vaag idee of alleen een onderbuikgevoel denkt MegaOnline graag mee. Vaak ontstaat in het gesprek juist de scherpte.
            </Qa>
            {' '}
            <Qa question="Met wie heb ik dan contact?" className="reveal">
                Direct met wie ook je website bouwt. Geen tussenlagen, geen accountmanagers, gewoon de maker zelf.
            </Qa>
          </div>
</FaqSchema>
        </div>
      </section>
    </main>
  )
}
