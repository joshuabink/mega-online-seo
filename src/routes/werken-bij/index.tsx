import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/Icon";
import { Qa } from "@/components/Qa";
import { Reveal } from "@/components/Reveal";
import { SollicitatieSectie } from "@/components/SollicitatieForm";
import { VACATURES, VOORWAARDEN } from "@/lib/vacatures";
import "@/styles/pages/werken-bij.css";

const TITEL = "Werken bij MegaOnline | Stages, freelance en parttime";
const OMSCHRIJVING =
  "Acht open rollen bij MegaOnline: stages in SEO, SEA, webdesign, webdevelopment en AI, plus freelance en parttime plekken. Gouda of volledig remote, ervaring vaak niet nodig.";

export const Route = createFileRoute("/werken-bij/")({
  head: () => ({
    meta: [
      { title: TITEL },
      { name: "description", content: OMSCHRIJVING },
      { property: "og:title", content: TITEL },
      { property: "og:description", content: OMSCHRIJVING },
      { property: "og:url", content: "https://megaonline.io/werken-bij" },
    ],
    links: [{ rel: "canonical", href: "https://megaonline.io/werken-bij" }],
  }),
  component: WerkenBij,
});

function WerkenBij() {
  return (
    <main id="top" data-page="werken-bij">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero — Werken bij MegaOnline"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">
                  Home
                </Link>
                <span className="sep">/</span> <b>Werken bij</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />8 open rollen
                </span>
              </Reveal>{" "}
              <Reveal as="h1" className="display reveal" data-d="1">
                Leren door het te doen, aan sites die <em>echt van iemand zijn</em>.
              </Reveal>{" "}
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                MegaOnline bouwt websites voor ondernemers die leven van aanvragen en boekingen.
                Klein bedrijf, korte lijnen en werk dat live gaat. Bij de meeste rollen is ervaring
                niet het belangrijkste. Willen uitzoeken hoe iets werkt wel.
              </Reveal>{" "}
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a className="btn btn-primary" href="#rollen">
                  Bekijk de open rollen
                </a>{" "}
                <a className="tlink" href={VOORWAARDEN.whatsappUrl} target="_blank" rel="noopener">
                  Even appen kan ook
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>{" "}
      <section
        className="section proof-band"
        data-theme="paper"
        data-screen-label="Kort over werken hier"
      >
        <div className="wrap">
          <div className="proof__grid">
            {[
              ["map-pin", "Gouda of volledig remote"],
              ["user-plus", "Meestal geen ervaring nodig"],
              ["handshake", "Direct contact met de oprichter"],
              ["rocket", "Je werk gaat live bij klanten"],
            ].map(([icoon, tekst], i) => (
              <Reveal as="div" className="proof__item reveal" data-d={String(i)} key={tekst}>
                <span className="proof__ico">
                  <Icon name={icoon} />
                </span>
                <p>{tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section" data-theme="light" data-screen-label="Waarom hier">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Waarom hier</span>{" "}
            <h2 className="h2">
              Klein bedrijf. Daardoor <em>veel meer zelf doen</em>.
            </h2>{" "}
            <p className="lead">
              Bij een groot bureau begin je onderaan een keten. Hier zit je erin. Je ziet het
              gesprek met de klant, je maakt het werk en je hoort een maand later wat het opleverde.
              Dat is de reden om hier te beginnen.
            </p>
          </Reveal>
          <div className="featgrid">
            {[
              [
                "users",
                "Echte klanten",
                "Alles wat je maakt komt terecht bij een ondernemer die er zijn omzet uit haalt.",
              ],
              [
                "route",
                "Je ziet het hele pad",
                "Van het eerste gesprek tot de rapportage na livegang. Niet alleen jouw stukje.",
              ],
              [
                "graduation-cap",
                "Beginnen mag",
                "We verwachten niet dat je de tools al kent, wel dat je ze wilt leren.",
              ],
              [
                "map-pin",
                "Gouda of thuis",
                "Waar je werkt maakt niet uit. Af en toe samen aan tafel is wel zo prettig.",
              ],
            ].map(([icoon, kop, tekst], i) => (
              <Reveal as="div" className="feat reveal" data-d={String(i)} key={kop}>
                <span className="iconbox">
                  <Icon name={icoon} />
                </span>
                <h4>{kop}</h4>
                <p>{tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section id="rollen" className="section" data-theme="paper" data-screen-label="Open rollen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Open rollen</span>{" "}
            <h2 className="h2">
              Acht plekken. <em>Kies waar jij nieuwsgierig naar bent</em>.
            </h2>{" "}
            <p className="lead">
              Twijfel je tussen twee rollen, of past er iets net niet helemaal? Solliciteer gewoon
              op de rol die het dichtst in de buurt komt. We zoeken het samen uit.
            </p>
          </Reveal>
          <div className="vacs">
            {VACATURES.map((v, i) => (
              <Reveal
                as={Link}
                to="/werken-bij/$slug"
                params={{ slug: v.slug }}
                className="vac reveal"
                data-d={String(i % 2)}
                key={v.slug}
              >
                <span className="vac__top">
                  <Icon name={v.icoon} />
                  <h3 className="vac__naam">{v.naam}</h3>
                  <span className="vac__soort">{v.soort}</span>
                </span>
                <p className="vac__teaser">{v.teaser}</p>
                <span className="vac__foot">
                  <span className="vac__erv">{v.ervaring}</span>
                  <span className="vac__link">
                    Bekijk de rol <Icon name="arrow-right" />
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <section className="section" data-theme="light" data-screen-label="Hoe de procedure loopt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Hoe het gaat</span>{" "}
            <h2 className="h2">
              Geen assessment. Gewoon <em>een gesprek en een opdracht</em>.
            </h2>{" "}
            <p className="lead">
              We willen weten hoe je denkt, niet hoe goed je solliciteert. Daarom is de procedure
              kort en concreet.
            </p>
          </Reveal>
          <div className="steps">
            {[
              [
                "Je stuurt iets",
                "Het formulier hieronder, een mail of een appje. Een cv mag, een paar zinnen over jezelf is genoeg om te beginnen.",
              ],
              [
                "We bellen kort",
                "Vijftien tot twintig minuten. Wat zoek jij, wat zoeken wij en klopt dat een beetje op elkaar.",
              ],
              [
                "Opdracht en kennismaking",
                "Iets echts uit onze praktijk, een uurtje werk. Die bespreken we, en daarna maken we afspraken over uren, vergoeding en startdatum.",
              ],
            ].map(([kop, tekst], i) => (
              <Reveal as="div" className="step reveal" data-d={String(i)} key={kop}>
                <span className="step__no">Stap {i + 1}</span>{" "}
                <div className="step__body">
                  <h3>{kop}</h3>
                  <p>{tekst}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>{" "}
      <SollicitatieSectie
        titel="Solliciteren"
        kop={
          <>
            Stuur iets. <em>Ook als je twijfelt</em>.
          </>
        }
        lead="Een half afgemaakt bericht is beter dan geen bericht. We reageren gemiddeld binnen twee werkdagen, ook als het een nee is."
      />{" "}
      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Veelgestelde vragen over werken bij MegaOnline"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Veelgestelde vragen</span>{" "}
            <h2 className="h2">Dat wat je je waarschijnlijk afvraagt.</h2>
          </Reveal>
          <div className="faq">
            <Qa question="Kan ik solliciteren als ik geen ervaring heb?" className="reveal">
              <p>
                Bij de stages is dat het uitgangspunt. Webdesign, webdevelopment en SEA vragen geen
                voorkennis. Bij SEO is een beetje ervaring fijn en bij de specialist- en
                architectrollen vragen we die wel. Wat overal geldt: laat zien dat je iets
                uitgezocht hebt, hoe klein ook.
              </p>
            </Qa>
            <Qa question="Kan ik volledig op afstand werken?" className="reveal" delay="1">
              <p>
                Ja. Onze klanten zitten door heel Nederland en wij werken zo ook. Woon je in de
                buurt van Gouda, dan zien we je graag af en toe aan tafel, want sommige dingen leer
                je nu eenmaal sneller naast elkaar.
              </p>
            </Qa>
            <Qa question="Wat verdien ik?" className="reveal" delay="2">
              <p>
                Dat spreken we samen af. Stagevergoeding, uurtarief en aantal uren hangen af van de
                rol, je opleiding en wat je meebrengt. We noemen bewust geen bedrag vooraf, maar we
                zijn er in het eerste gesprek meteen open over.
              </p>
            </Qa>
            <Qa
              question="Ik zie mijn rol er niet tussen staan. En nu?"
              className="reveal"
              delay="3"
            >
              <p>
                Stuur alsnog iets. Als je iets kunt wat wij goed kunnen gebruiken, maken we er een
                plek voor. Schrijf dan vooral op wat je zou willen doen en waarom je denkt dat het
                bij ons past.
              </p>
            </Qa>
          </div>
        </div>
      </section>
    </main>
  );
}
