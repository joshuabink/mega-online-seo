import { Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'

type Props = {
  /** Korte intro die aansluit op de branche van de pagina. */
  text: string
  /** Drie korte punten, bijvoorbeeld online boeken, betalen, opvolgen. */
  bullets?: string[]
  eyebrow?: string
  title?: string
}

/**
 * Brug van een branche- of dienstpagina naar /megasmart.
 * Gebruik dit blok op pagina's waar het over online boeken of reserveren gaat.
 */
export function MegaSmartBridge({
  text,
  bullets = [],
  eyebrow = 'Onze software',
  title = 'Boeken en opvolgen met MegaSmart',
}: Props) {
  return (
    <section
      className="section msbridge"
      data-theme="dark"
      data-screen-label="Brug naar MegaSmart"
    >
      <div className="wrap">
        <Reveal as="div" className="msbridge__card reveal">
          <div className="msbridge__copy">
            <span className="msbridge__eyebrow">
              <span className="gdot" />
              {eyebrow}
            </span>
            <h3 className="msbridge__title">{title}</h3>
            <p className="msbridge__text">{text}</p>
            {bullets.length > 0 ? (
              <ul className="msbridge__list">
                {bullets.map((b) => (
                  <li key={b}>
                    <Icon name="check" />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="msbridge__actions">
            <Link className="btn btn-primary" to="/megasmart">
              Bekijk MegaSmart
            </Link>
            <Link className="tlink" to="/contact">
              Plan een demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
