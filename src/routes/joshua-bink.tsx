import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { Reveal } from "@/components/Reveal";
import { AUTEUR } from "@/lib/auteur";
import { CTA_SCAN } from "@/lib/cta";
import { artikelenNieuwsteEerst } from "@/lib/kennisbank";
import "@/styles/pages/kennisbank.css";

/**
 * Auteurspagina van Joshua Bink. Hier wijzen de bylines van de
 * kennisbankartikelen naartoe en hier hangt de Person-node `#joshua-bink`
 * aan (ProfilePage in `schema.ts`). Teksten komen uit `src/lib/auteur.ts`.
 */
const TITLE = "Joshua Bink, oprichter van MegaOnline | MegaOnline.io";
const DESCRIPTION =
  "Joshua Bink is de oprichter van MegaOnline. Hij bouwt websites die bedrijven verder helpen en schrijft in de kennisbank over aanvragen, boekingen en vindbaarheid.";
const URL = "https://megaonline.io/joshua-bink";

export const Route = createFileRoute("/joshua-bink")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: `https://megaonline.io${AUTEUR.portret.src}` },
      { property: "profile:first_name", content: AUTEUR.voornaam },
      { property: "profile:last_name", content: AUTEUR.achternaam },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: JoshuaBink,
});

function JoshuaBink() {
  const artikelen = artikelenNieuwsteEerst().filter((a) => !a.auteur?.trim());

  return (
    <main id="top" data-page="auteur">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero · Joshua Bink"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span> <b>{AUTEUR.naam}</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  {AUTEUR.rol} · MegaOnline
                </span>
              </Reveal>{" "}
              <Reveal as="h1" className="display reveal" data-d="1">
                Joshua <em>Bink</em>
              </Reveal>{" "}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Oprichter van MegaOnline. Schrijft in de kennisbank over aanvragen, boekingen en vindbaarheid.
              </Reveal>
            </div>
          </div>
        </div>
      </section>{" "}
      <section className="section" id="over" data-theme="paper" data-screen-label="Over Joshua">
        <div className="wrap">
          <div className="founder">
            <Reveal as="div" className="founder__media reveal">
              <div className="founder__portrait">
                <Media id="founder-portret" fit="cover" alt="Joshua Bink, oprichter van MegaOnline" />
              </div>{" "}
              <div className="founder__sig">
                <div className="nm">{AUTEUR.voornaam}</div>
                <div className="rl">{AUTEUR.rol} · MegaOnline</div>
              </div>
            </Reveal>{" "}
            <Reveal as="div" className="founder__body reveal" data-d="1">
              <h2 className="h3">{AUTEUR.kop}</h2>{" "}
              {AUTEUR.bio.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}{" "}
              <div className="traits">
                {AUTEUR.eigenschappen.map((t) => (
                  <span className="trait" key={t.label}>
                    <Icon name={t.icoon} />
                    {t.label}
                  </span>
                ))}
              </div>{" "}
              <p className="auteur__links">
                <a href={AUTEUR.linkedin} target="_blank" rel="me noreferrer">
                  LinkedIn
                </a>
                <span className="sep">·</span>
                <Link to="/over-megaonline">Over MegaOnline</Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>{" "}
      <section
        className="section section--tight"
        id="artikelen"
        data-theme="light"
        data-screen-label="Artikelen van Joshua"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Kennisbank</span>{" "}
            <h2 className="h2">
              Artikelen van <em>Joshua.</em>
            </h2>
          </Reveal>{" "}
          <div className="kb-grid">
            {artikelen.map((a, i) => (
              <Reveal
                as={Link}
                to="/kennisbank/$slug"
                params={{ slug: a.slug }}
                className="kb-card reveal"
                data-d={String(i % 3)}
                key={a.slug}
              >
                <span className="kb-card__top">
                  <span className="iconbox iconbox--sm">
                    <Icon name={a.icoon} />
                  </span>
                  <span className="kb-card__pijler">{a.pijler}</span>
                </span>
                <h3 className="kb-card__titel">{a.vraag}</h3>
                <p className="kb-card__teaser">{a.teaser}</p>
                <span className="kb-card__foot">
                  {a.branche} · {a.leestijd} lezen
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>{" "}
            <h2 className="display">Liever eerst een website scan zien?</h2>{" "}
            <p className="lead">
              Beantwoord zes korte vragen. Daarna kijkt MegaOnline persoonlijk naar je bedrijf en zie je hoe je website meer aanvragen en boekingen kan opleveren.
            </p>{" "}
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <Link className="btn btn-primary" to="/gratis-websitescan">
                {CTA_SCAN}
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
