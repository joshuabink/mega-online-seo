import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SingleLeadForm } from "./LeadForm";
import { VACATURES, VOORWAARDEN } from "@/lib/vacatures";

/**
 * Sollicitatieblok voor /werken-bij en de vacaturepagina's.
 *
 * Gebruikt bewust hetzelfde `SingleLeadForm` als de rest van de site, dus de
 * inzending loopt via `src/lib/submit-lead.ts` naar de Sheet én de mail. De
 * veldnamen van de bestaande formulieren (`naam`, `email`, `tel`) blijven
 * gelijk zodat ze in dezelfde kolommen landen; `rol`, `link` en `motivatie`
 * komen er als extra velden bij.
 *
 * Er is geen bestandsupload: het formulier gaat als platte velden de deur uit.
 * Een cv stuurt de sollicitant mee via de mailknop ernaast.
 */
export function SollicitatieSectie({
  titel = "Solliciteren",
  kop,
  lead,
  rol,
}: {
  titel?: string;
  kop: ReactNode;
  lead: string;
  /** Voorgeselecteerde rol op een vacaturepagina. */
  rol?: string;
}) {
  return (
    <section
      id="solliciteren"
      className="section"
      data-theme="dark"
      data-screen-label="Solliciteren"
    >
      <div className="wrap">
        <div className="sol__grid">
          <div className="sol__copy">
            <Reveal as="div" className="shead reveal">
              <span className="label">{titel}</span> <h2 className="h2">{kop}</h2>{" "}
              <p className="lead">{lead}</p>
            </Reveal>
            <Reveal as="div" className="sol__direct reveal" data-d="1">
              <span className="sol__direct-head">Liever direct</span>
              <a className="sol__row" href={VOORWAARDEN.whatsappUrl} target="_blank" rel="noopener">
                <span className="vrow__ico">
                  <Icon name="message-circle" />
                </span>
                <span className="vrow__txt">
                  <h4>WhatsApp</h4>
                  <p>{VOORWAARDEN.whatsapp}</p>
                </span>
                <Icon name="arrow-up-right" />
              </a>
              <a className="sol__row" href={`mailto:${VOORWAARDEN.mail}?subject=Sollicitatie`}>
                <span className="vrow__ico">
                  <Icon name="mail" />
                </span>
                <span className="vrow__txt">
                  <h4>Mailen, met cv erbij</h4>
                  <p>{VOORWAARDEN.mail}</p>
                </span>
                <Icon name="arrow-up-right" />
              </a>
            </Reveal>
          </div>

          <SingleLeadForm
            className="sol__form reveal"
            subject="Nieuwe sollicitatie - MegaOnline.io"
            head={
              <>
                <span className="form__head-note">
                  <span className="dotmini" />
                  Sollicitatie
                </span>{" "}
                <h3>Laat je gegevens achter</h3>{" "}
                <p>
                  Een cv is niet verplicht. Een paar zinnen over wat je zoekt is genoeg om te
                  beginnen.
                </p>
              </>
            }
            ok={
              <>
                <div className="ic">✓</div> <h3>Bedankt. We hebben je bericht.</h3>{" "}
                <p>
                  Je sollicitatie is binnen. We reageren gemiddeld binnen twee werkdagen, ook als
                  het een nee is.
                </p>
              </>
            }
          >
            <div className="field">
              <label htmlFor="s-naam">Je naam</label>{" "}
              <input
                id="s-naam"
                name="naam"
                type="text"
                placeholder="Voor- en achternaam"
                required
              />
            </div>{" "}
            <div className="field-row">
              <div className="field">
                <label htmlFor="s-email">E-mailadres</label>{" "}
                <input id="s-email" name="email" type="email" placeholder="jij@mail.nl" required />
              </div>{" "}
              <div className="field">
                <label htmlFor="s-tel">Telefoonnummer</label>{" "}
                <input id="s-tel" name="tel" type="tel" placeholder="06-12345678" />
              </div>
            </div>{" "}
            <div className="field">
              <label htmlFor="s-rol">Waar solliciteer je op?</label>{" "}
              <select id="s-rol" name="rol" required defaultValue={rol ?? ""}>
                <option value="" disabled>
                  Kies een rol
                </option>
                {VACATURES.map((v) => (
                  <option value={v.naam} key={v.slug}>
                    {v.naam}
                  </option>
                ))}
                <option value="Iets anders">Iets anders, ik leg het uit</option>
              </select>
            </div>{" "}
            <div className="field">
              <label htmlFor="s-link">Link naar LinkedIn, portfolio of iets dat je maakte</label>{" "}
              <input id="s-link" name="link" type="text" placeholder="linkedin.com/in/jouwnaam" />
            </div>{" "}
            <div className="field">
              <label htmlFor="s-motivatie">Waarom deze rol?</label>{" "}
              <textarea
                id="s-motivatie"
                name="motivatie"
                placeholder="Wat trekt je aan, wat wil je leren en wanneer zou je kunnen beginnen"
                required
              />
            </div>{" "}
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Verstuur je sollicitatie
            </button>{" "}
            <p className="form__disc">
              Je gegevens gebruiken we alleen voor deze sollicitatie en bewaren we niet langer dan
              nodig.
            </p>
          </SingleLeadForm>
        </div>
      </div>
    </section>
  );
}
