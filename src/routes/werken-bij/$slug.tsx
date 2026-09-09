import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SollicitatieSectie } from "@/components/SollicitatieForm";
import { VACATURES, VOORWAARDEN, vacatureBySlug } from "@/lib/vacatures";
import "@/styles/pages/werken-bij.css";

/**
 * Slugs die eerder live stonden en inmiddels anders heten. Een 301 vanuit
 * `legacy-urls.ts` helpt hier niet: die tabel wordt alleen door de splat-route
 * gelezen en deze route is specifieker, dus die vangt het pad zelf al af.
 */
const HERNOEMD: Record<string, string> = {
  "ai-ontwikkeling-stage": "ai-ontwikkeling",
  "web-app-architect": "app-web-architect",
};

/**
 * Eén route voor alle vacatures. De inhoud komt uit `src/lib/vacatures.ts`,
 * zodat de kaart in het overzicht, deze pagina en de JobPosting-markup nooit
 * uit elkaar kunnen lopen. Een onbekende slug valt door naar de 404 van de
 * root, niet naar een lege pagina.
 */
export const Route = createFileRoute("/werken-bij/$slug")({
  loader: ({ params }) => {
    if (vacatureBySlug(params.slug)) return null;
    const nieuw = HERNOEMD[params.slug];
    if (nieuw)
      throw redirect({ to: "/werken-bij/$slug", params: { slug: nieuw }, statusCode: 301 });
    throw notFound();
  },
  head: ({ params }) => {
    const v = vacatureBySlug(params.slug);
    if (!v) return {};
    const url = `https://megaonline.io/werken-bij/${v.slug}`;
    return {
      meta: [
        { title: v.metaTitle },
        { name: "description", content: v.metaDescription },
        { property: "og:title", content: v.metaTitle },
        { property: "og:description", content: v.metaDescription },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: VacaturePagina,
});

function VacaturePagina() {
  const { slug } = Route.useParams();
  const v = vacatureBySlug(slug);
  if (!v) return null;

  const [kopVoor, kopAccent, kopNa] = v.koph1;
  const anderen = VACATURES.filter((a) => a.slug !== v.slug);

  return (
    <main id="top" data-page="vacature">
      <section
        className="section svc-hero"
        data-theme="dark"
        data-screen-label={`Hero — ${v.titel}`}
      >
        <div className="wrap">
          <div className="svc-hero__grid vac-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">
                  Home
                </Link>
                <span className="sep">/</span> <Link to="/werken-bij">Werken bij</Link>
                <span className="sep">/</span> <b>{v.naam}</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  {v.soort}
                </span>
              </Reveal>{" "}
              <Reveal as="h1" className="display reveal" data-d="1">
                {kopVoor}
                <em>{kopAccent}</em>
                {kopNa}
              </Reveal>{" "}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                {v.intro}
              </Reveal>{" "}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href="#solliciteren">
                  Solliciteer op deze rol
                </a>{" "}
                <Link className="tlink" to="/werken-bij" hash="rollen">
                  Bekijk de andere rollen
                </Link>
              </Reveal>
            </div>{" "}
            <Reveal as="div" className="vac-facts reveal" data-d="2">
              <span className="vac-facts__head">
                <span className="iconbox iconbox--sm">
                  <Icon name={v.icoon} />
                </span>
                In het kort
              </span>
              <dl className="vac-facts__list">
                {[
                  ["Soort", v.soort],
                  ["Uren", v.uren],
                  ["Locatie", VOORWAARDEN.locatie],
                  ["Ervaring", v.ervaring],
                  ["Vergoeding", VOORWAARDEN.vergoeding],
                  ["Startdatum", VOORWAARDEN.start],
                ].map(([label, waarde]) => (
                  <div className="vac-facts__row" key={label}>
                    <dt>{label}</dt>
                    <dd>{waarde}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>{" "}
      <section className="section" data-theme="light" data-screen-label="Wat je gaat doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je gaat doen</span>{" "}
            <h2 className="h2">
              Vijf dingen die <em>echt op je bord liggen</em>.
            </h2>
          </Reveal>
          <div className="vaclist">
            {v.doet.map((d, i) => (
              <Reveal as="div" className="vrow reveal" data-d={String(i % 3)} key={d.titel}>
                <span className="vrow__ico">
                  <Icon name="check" />
                </span>
                <span className="vrow__txt">
                  <h4>{d.titel}</h4>
                  <p>{d.tekst}</p>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section" data-theme="paper" data-screen-label="Wat je meebrengt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Past dit bij jou</span>{" "}
            <h2 className="h2">
              Wat we <em>wel</em> vragen en wat niet.
            </h2>
          </Reveal>
          <div className="vac-fit">
            <Reveal as="div" className="vac-fit__card reveal">
              <span className="vac-fit__head">
                <span className="iconbox iconbox--sm">
                  <Icon name="user-check" />
                </span>
                Wat je meebrengt
              </span>
              <ul className="minilist minilist--do">
                {v.meebrengt.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="div" className="vac-fit__card reveal" data-d="1">
              <span className="vac-fit__head">
                <span className="iconbox iconbox--sm">
                  <Icon name="x" />
                </span>
                {v.nietNodigKop}
              </span>
              <ul className="minilist">
                {v.nietNodig.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal as="p" className="pullnote reveal" data-d="2">
            Herken je jezelf in het grootste deel maar niet in alles? <em>Solliciteer alsnog.</em>{" "}
            We hebben liever iemand die wil leren dan iemand die het lijstje afvinkt.
          </Reveal>
        </div>
      </section>{" "}
      <section className="section" data-theme="light" data-screen-label="Wat je eruit haalt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat het je oplevert</span>{" "}
            <h2 className="h2">
              Wat je hier <em>meeneemt</em> als je weggaat.
            </h2>
          </Reveal>
          <div className="featgrid">
            {v.krijgt.map((k, i) => (
              <Reveal as="div" className="feat reveal" data-d={String(i)} key={k.titel}>
                <span className="iconbox">
                  <Icon name={k.icoon} />
                </span>
                <h4>{k.titel}</h4>
                <p>{k.tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <SollicitatieSectie
        titel={`Solliciteren op ${v.naam}`}
        kop={
          <>
            Klinkt dit als jouw plek? <em>Laat iets weten</em>.
          </>
        }
        lead="Een cv is niet verplicht. Schrijf in een paar zinnen wat je aanspreekt en wanneer je zou kunnen beginnen. We reageren gemiddeld binnen twee werkdagen."
        rol={v.naam}
      />{" "}
      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Andere rollen"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Andere rollen</span>{" "}
            <h2 className="h2">Past deze net niet? Kijk hier verder.</h2>
          </Reveal>
          <div className="exgrid">
            {anderen.map((a, i) => (
              <Reveal
                as={Link}
                to="/werken-bij/$slug"
                params={{ slug: a.slug }}
                className="exchip reveal"
                data-d={String(i % 3)}
                key={a.slug}
              >
                <span className="iconbox iconbox--sm">
                  <Icon name={a.icoon} />
                </span>
                <span>
                  {a.naam}
                  <span className="exchip__soort">{a.soort}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
