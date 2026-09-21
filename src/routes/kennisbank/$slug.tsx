import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { Qa } from "@/components/Qa";
import { Reveal } from "@/components/Reveal";
import { artikelBySlug, artikelenNieuwsteEerst, type ArtikelSectie } from "@/lib/kennisbank";
import "@/styles/pages/kennisbank.css";

/**
 * Eén route voor alle kennisbankartikelen. De inhoud komt uit
 * `src/lib/kennisbank.ts`, zodat de kaart in het overzicht, deze pagina en de
 * Article- plus FAQPage-markup in `src/lib/schema.ts` niet uit elkaar lopen.
 * Een onbekende slug valt door naar de 404 van de root.
 */
export const Route = createFileRoute("/kennisbank/$slug")({
  loader: ({ params }) => {
    if (!artikelBySlug(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const a = artikelBySlug(params.slug);
    if (!a) return {};
    const url = `https://megaonline.io/kennisbank/${a.slug}`;
    return {
      meta: [
        { title: a.metaTitle },
        { name: "description", content: a.metaDescription },
        { property: "og:title", content: a.metaTitle },
        { property: "og:description", content: a.metaDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ArtikelPagina,
});

const MAANDEN = [
  "januari", "februari", "maart", "april", "mei", "juni",
  "juli", "augustus", "september", "oktober", "november", "december",
];

/** 2026-09-21 wordt 21 september 2026, zoals de rest van de site het schrijft. */
function datumNl(iso: string): string {
  const [jaar, maand, dag] = iso.split("-");
  return `${Number(dag)} ${MAANDEN[Number(maand) - 1]} ${jaar}`;
}

/** Zet het accentwoord uit de sectiekop in een <em>, net als elders op de site. */
function KopMetAccent({ sectie }: { sectie: ArtikelSectie }) {
  if (!sectie.accent || !sectie.kop.includes(sectie.accent)) return <>{sectie.kop}</>;
  const [voor, na] = sectie.kop.split(sectie.accent);
  return (
    <>
      {voor}
      <em>{sectie.accent}</em>
      {na}
    </>
  );
}

function ArtikelPagina() {
  const { slug } = Route.useParams();
  const a = artikelBySlug(slug);
  if (!a) return null;

  const anderen = artikelenNieuwsteEerst().filter((x) => x.slug !== a.slug);

  return (
    <main id="top" data-page="artikel">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label={`Hero — ${a.naam}`}
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span> <Link to="/kennisbank">Kennisbank</Link>
                <span className="sep">/</span> <b>{a.naam}</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  {a.pijler}
                </span>
              </Reveal>{" "}
              <Reveal as="h1" className="display reveal" data-d="1">
                {a.vraag}
              </Reveal>{" "}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                {a.antwoord}
              </Reveal>{" "}
              <Reveal as="p" className="art__meta reveal" data-d="2">
                {a.leestijd} lezen · Bijgewerkt op {datumNl(a.gewijzigd)}
              </Reveal>
            </div>
          </div>
        </div>
      </section>{" "}
      {a.secties.map((s, i) => (
        <section
          className="section section--tight"
          data-theme={i % 2 === 0 ? "paper" : "light"}
          data-screen-label={s.kop}
          key={s.kop}
        >
          <div className="wrap">
            <Reveal as="div" className="shead reveal">
              <h2 className="h2">
                <KopMetAccent sectie={s} />
              </h2>
            </Reveal>{" "}
            <div className="art__body">
              {s.alineas.map((p) => (
                <Reveal as="p" className="reveal" key={p.slice(0, 40)}>
                  {p}
                </Reveal>
              ))}
            </div>
            {s.punten ? (
              <div className="featgrid art__punten">
                {s.punten.map((p, j) => (
                  <Reveal as="div" className="feat reveal" data-d={String(j % 3)} key={p.titel}>
                    <h4>{p.titel}</h4>
                    <p>{p.tekst}</p>
                  </Reveal>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}{" "}
      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Wat je morgen kunt doen"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Zelf aan de slag</span>{" "}
            <h2 className="h2">
              Wat je <em>morgen</em> kunt doen.
            </h2>{" "}
            <p className="lead">
              Vijf dingen die je zonder ons kunt uitvoeren. Werkt het, dan weet je waar de winst
              zit.
            </p>
          </Reveal>{" "}
          <ul className="minilist minilist--do art__doen">
            {a.doen.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>{" "}
      <section className="section" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <span className="label">Veelgestelde vragen</span>{" "}
            <h2 className="h2">Wat je hierover nog vaker gevraagd wordt</h2>
          </Reveal>{" "}
          <div className="faq">
            {a.faq.map(({ q, a: antw }) => (
              <Qa key={q} question={q} className="reveal">
                {antw}
              </Qa>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section section--tight" data-theme="light" data-screen-label="Lees verder">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Lees verder</span>{" "}
            <h2 className="h2">Waar dit op je eigen site over gaat.</h2>
          </Reveal>{" "}
          <div className="featgrid">
            {a.links.map((l, i) => (
              <Reveal as="div" className="feat reveal" data-d={String(i % 3)} key={l.to}>
                <h4>
                  <Link to={l.to}>{l.label}</Link>
                </h4>
                <p>{l.tekst}</p>
              </Reveal>
            ))}
          </div>
          {anderen.length ? (
            <div className="andere art__andere">
              {anderen.map((x, i) => (
                <Reveal
                  as={Link}
                  to="/kennisbank/$slug"
                  params={{ slug: x.slug }}
                  className="andere__rol reveal"
                  data-d={String(i % 3)}
                  key={x.slug}
                >
                  <Icon name={x.icoon} />
                  {x.naam}
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </section>{" "}
      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <span className="label">Aan de slag</span>{" "}
            <h2 className="display">Wil je weten hoe dit op jouw site staat?</h2>{" "}
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
