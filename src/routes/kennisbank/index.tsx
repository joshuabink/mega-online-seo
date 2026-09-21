import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { artikelenNieuwsteEerst } from "@/lib/kennisbank";
import "@/styles/pages/kennisbank.css";

const TITLE = "Kennisbank: uitleg over websites die aanvragen opleveren | MegaOnline.io";
const DESCRIPTION =
  "Wat we tegenkomen in websitescans, uitgelegd zodat je er zelf mee aan de slag kunt. Over aanvragen, vertrouwen, formulieren en vindbaarheid.";

export const Route = createFileRoute("/kennisbank/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://megaonline.io/kennisbank" },
    ],
    links: [{ rel: "canonical", href: "https://megaonline.io/kennisbank" }],
  }),
  component: Kennisbank,
});

function Kennisbank() {
  const artikelen = artikelenNieuwsteEerst();

  return (
    <main id="top" data-page="kennisbank">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero — Kennisbank"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span> <b>Kennisbank</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Kennisbank
                </span>
              </Reveal>{" "}
              <Reveal as="h1" className="display reveal" data-d="1">
                Wat we in websitescans zien, <em>zonder eromheen te draaien.</em>
              </Reveal>{" "}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                We beoordelen websites op tien onderdelen. Wat daarin steeds terugkomt schrijven we
                hier op, met genoeg detail om er zelf mee aan de slag te gaan. Ook als je nooit
                klant wordt.
              </Reveal>
            </div>
          </div>
        </div>
      </section>{" "}
      <section
        className="section section--tight"
        id="artikelen"
        data-theme="paper"
        data-screen-label="Artikelen"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Artikelen</span>{" "}
            <h2 className="h2">
              Eén vraag per artikel, <em>meteen beantwoord.</em>
            </h2>{" "}
            <p className="lead">
              Het antwoord staat in de eerste twee zinnen. De uitwerking daaronder is voor wie het
              zelf wil aanpakken.
            </p>
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
      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Waar we aan werken"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">In opbouw</span>{" "}
            <h2 className="h2">
              Hier komt <em>elke maand</em> iets bij.
            </h2>{" "}
            <p className="lead">
              We werken per branche: twee artikelen die de pijn van die branche uitdiepen.
              Onderwerpen die al op de lijst staan.
            </p>
          </Reveal>{" "}
          <div className="featgrid">
            {[
              ["ticket", "Activiteitenbedrijven", "Hoe je als escaperoom ook doordeweeks je slots vol krijgt."],
              ["package", "Verhuurbedrijven", "Waarom je je prijzen wel op de site moet zetten."],
              ["shield-check", "Dienstverleners", "Hoe je vertrouwen wekt op een zakelijke website."],
              ["calendar-range", "Reserveringen", "Hoe je no-shows terugdringt met je reserveringspagina."],
              ["file-text", "Offerteaanvragen", "Welke velden een offerteformulier hoort te hebben."],
              ["heart-handshake", "Stichtingen", "Hoe je vrijwilligers werft via je eigen website."],
            ].map(([icoon, branche, onderwerp], i) => (
              <Reveal as="div" className="feat reveal" data-d={String(i % 3)} key={branche}>
                <span className="iconbox">
                  <Icon name={icoon} />
                </span>
                <h4>{branche}</h4>
                <p>{onderwerp}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>{" "}
            <h2 className="display">Liever eerst weten hoe jouw site ervoor staat?</h2>{" "}
            <p className="lead">
              Ik kijk er kosteloos naar en stuur je de punten die ik zie. Een persoonlijke
              beoordeling op tien onderdelen, gemiddeld binnen twee werkdagen.
            </p>{" "}
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <Link className="btn btn-primary" to="/gratis-websitescan">
                Vraag je gratis scan aan
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
