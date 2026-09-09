import { Link } from '@tanstack/react-router'

import { Icon } from '@/components/Icon'
import { Qa } from '@/components/Qa'
import { Reveal } from '@/components/Reveal'
import {
  SOLLICITATIE_MAIL,
  SOLLICITATIE_WHATSAPP,
  sollicitatieMail,
  type Vacature,
} from '@/lib/vacatures'

/**
 * Opmaak van één vacaturepagina. De inhoud komt uit `src/lib/vacatures.ts`,
 * zodat alle vacatures dezelfde opbouw houden en er per vacature alleen
 * tekst wijzigt.
 *
 * Sollicitaties gaan bewust via mail en WhatsApp, niet via het
 * leadformulier: dat formulier schrijft naar de Sheet met websiteaanvragen.
 */
export function VacaturePagina({ vacature }: { vacature: Vacature }) {
  const mail = sollicitatieMail(vacature.titel)

  return (
    <main id="top">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label={`Hero: ${vacature.titel}`}
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <Link to="/vacatures">Vacatures</Link>
                <span className="sep">/</span>
                {' '}
                <b>{vacature.titel}</b>
              </Reveal>
              {' '}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  {vacature.badge}
                </span>
              </Reveal>
              {' '}
              <Reveal as="h1" className="display reveal" data-d="1">
                {vacature.kop}
                {' '}
                <em>{vacature.accent}</em>
              </Reveal>
              {' '}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                {vacature.lead}
              </Reveal>
              {' '}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href={mail}>
                  Solliciteer op deze plek
                </a>
                {' '}
                <a className="tlink" href={SOLLICITATIE_WHATSAPP} target="_blank" rel="noreferrer">
                  Of stuur eerst een appje
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="In het kort">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">In het kort</span>
            {' '}
            <h2 className="h2">
              Wat deze plek
              {' '}
              <em>inhoudt.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="briefcase" />
              </span>
              <h4>Vorm</h4>
              <p>{vacature.type}</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="clock" />
              </span>
              <h4>Uren</h4>
              <p>{vacature.uren}</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="map-pin" />
              </span>
              <h4>Locatie</h4>
              <p>{vacature.locatie}</p>
            </Reveal>
            {' '}
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="hand-coins" />
              </span>
              <h4>Vergoeding</h4>
              <p>{vacature.vergoeding}</p>
            </Reveal>
          </div>
        </div>
      </section>
      {' '}
      <section className="section" data-theme="light" data-screen-label="Wat je gaat doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je gaat doen</span>
            {' '}
            <h2 className="h2">
              Je werk in
              {' '}
              <em>zes onderdelen.</em>
            </h2>
            {' '}
            <p className="lead">
              Geen losse opdrachten om je bezig te houden. Je werkt aan de sites van klanten die van hun website afhankelijk zijn.
            </p>
          </Reveal>
          {' '}
          <div className="featgrid">
            {vacature.doet.map((blok, i) => (
              <Reveal
                as="div"
                className="feat reveal"
                key={blok.kop}
                data-d={i % 4 === 0 ? undefined : String(i % 4)}
              >
                <span className="iconbox">
                  <Icon name={blok.icon} />
                </span>
                <h4>{blok.kop}</h4>
                <p>{blok.tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {' '}
      <section className="section section--tight" data-theme="paper" data-screen-label="Wat je meebrengt en krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Over en weer</span>
            {' '}
            <h2 className="h2">
              Wat je meebrengt
              {' '}
              <em>en wat je krijgt.</em>
            </h2>
          </Reveal>
          {' '}
          <div className="svc">
            <Reveal as="div" className="svc__card reveal">
              <span className="svc__tag svc__tag--reg">Wat je meebrengt</span>
              <h3>Dit verwachten we</h3>
              <ul className="svc__list">
                {vacature.meebrengt.map((punt) => (
                  <li key={punt}>{punt}</li>
                ))}
              </ul>
            </Reveal>
            {' '}
            <Reveal as="div" className="svc__card svc__card--feat reveal" data-d="1">
              <span className="svc__tag svc__tag--feat">Wat je krijgt</span>
              <h3>Dit krijg je terug</h3>
              <ul className="svc__list svc__list--when">
                {vacature.krijgt.map((punt) => (
                  <li key={punt}>{punt}</li>
                ))}
              </ul>
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
            {vacature.faq.map((item) => (
              <Qa question={item.vraag} className="reveal" key={item.vraag}>
                {item.antwoord}
              </Qa>
            ))}
          </div>
        </div>
      </section>
      {' '}
      <section className="section" id="solliciteren" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Solliciteren</span>
            {' '}
            <h2 className="display">Geen motivatiebrief nodig.</h2>
            {' '}
            <p className="lead">
              Stuur een bericht met wie je bent en waarom deze plek je aanspreekt. Een paar zinnen is genoeg. Je krijgt binnen een paar dagen antwoord van Joshua zelf.
            </p>
            {' '}
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <a className="btn btn-primary" href={mail}>
                Mail je bericht
              </a>
              {' '}
              <a className="tlink" href={SOLLICITATIE_WHATSAPP} target="_blank" rel="noreferrer">
                Of app naar 06 34 38 89 38
              </a>
            </Reveal>
            {' '}
            <p className="lead" style={{ marginTop: "18px", fontSize: "0.95rem" }}>
              Liever gewoon mailen? Dat kan naar {SOLLICITATIE_MAIL}.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
