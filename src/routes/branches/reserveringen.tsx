import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { Qa } from "@/components/Qa";
import { Reveal } from "@/components/Reveal";
import { MegaSmartBridge } from "@/components/MegaSmartBridge";

export const Route = createFileRoute("/branches/reserveringen")({
  head: () => ({
    meta: [
      { title: "Website met reserveringssysteem laten maken | MegaOnline.io" },
      {
        name: "description",
        content:
          "Website met reserveringssysteem laten maken? Lees het verschil tussen het systeem en de website, welke route past en wat er op je site moet staan.",
      },
      {
        property: "og:title",
        content: "Website met reserveringssysteem laten maken | MegaOnline.io",
      },
      {
        property: "og:description",
        content:
          "Website met reserveringssysteem laten maken? Lees het verschil tussen het systeem en de website, welke route past en wat er op je site moet staan.",
      },
      { property: "og:url", content: "https://megaonline.io/branches/reserveringen" },
    ],
    links: [{ rel: "canonical", href: "https://megaonline.io/branches/reserveringen" }],
  }),
  component: Reserveringen,
});

/** Enige bron van de zichtbare vragen. Antwoorden staan in de HTML, niet in schema. */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Kan ik mijn huidige reserveringssysteem houden?",
    a: "Dat hangt af van het systeem. Kan het op een eigen website worden geplaatst, met een module, een knop naar een boekingspagina of een koppeling, dan kan de nieuwe website eromheen worden gebouwd. In het gratis websiteconcept kijkt MegaOnline wat bij jouw systeem kan.",
  },
  {
    q: "Moet ik voor online reserveren een nieuwe website laten maken?",
    a: "Niet altijd. Soms is een reserveringsknop op je huidige website genoeg. Een nieuwe website is zinvol als bezoekers afhaken voordat ze bij die knop zijn, bijvoorbeeld omdat informatie ontbreekt of de site slecht werkt op mobiel. Het gratis websiteconcept helpt bepalen wat voor jou de slimste aanpak is.",
  },
  {
    q: "Kunnen gasten direct online betalen of aanbetalen?",
    a: "Als je reserveringssysteem online betalen ondersteunt, kan dat in de reservering zitten. Zet vóór de betaalstap wat het kost en wat je annuleringsvoorwaarden zijn.",
  },
  {
    q: "Hoe voorkom je dubbele reserveringen?",
    a: "Door één agenda te gebruiken voor alle reserveringen: van de website, de telefoon en andere kanalen. Een plek die bezet is, staat dan nergens meer als vrij.",
  },
  {
    q: "Kan ik mijn beschikbaarheid en sluitingsdagen zelf beheren?",
    a: "Ja, dat doe je in je reserveringssysteem. De website laat zien wat daar staat, zodat je het op één plek bijhoudt.",
  },
];

const tekstLink: CSSProperties = {
  color: "var(--accent-text)",
  textDecoration: "underline",
  textUnderlineOffset: "0.18em",
};

const kaarten: CSSProperties = {
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
};

const stappen: CSSProperties = {
  marginTop: "clamp(22px, 2.4vw, 32px)",
  paddingLeft: "1.35em",
  maxWidth: "62ch",
  color: "var(--muted)",
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

function Punt({ children }: { children: ReactNode }) {
  return (
    <li style={{ fontSize: "1.05rem", lineHeight: 1.55 }}>
      <span>{children}</span>
    </li>
  );
}

function Reserveringen() {
  return (
    <main id="top">
      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label="Hero — Bedrijven met reserveringen"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              {/* prettier-ignore */}
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <Link to="/" hash="diensten">Branches</Link>
                <span className="sep">/</span>
                {' '}
                <b>Bedrijven met reserveringen</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Bedrijven met reserveringen
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Website laten maken met online reserveren
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Een website met reserveringssysteem is een website waarop gasten zelf een datum,
                tijd of plek kiezen, direct zien wat vrij is en hun reservering afronden zonder te
                bellen. Het reserveringssysteem regelt de agenda, de beschikbaarheid en de
                bevestiging. De website laat zien wat je aanbiedt, wat het kost en waarom een gast
                bij jou reserveert. MegaOnline bouwt die website voor restaurants, B&B's, salons,
                praktijken en andere bedrijven waar een plek of moment wordt gereserveerd.
              </Reveal>
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websiteconcept">
                  Vraag je gratis websiteconcept aan
                </Link>
                <Link className="tlink" to="/contact">
                  Plan een kennismaking
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Verschil systeem en website"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">
              Wat is het verschil tussen een reserveringssysteem en een website met boekingssysteem?
            </h2>
            <p className="lead">
              Een reserveringssysteem of boekingssysteem is software: een agenda met
              beschikbaarheid, eventueel met online betalen en automatische bevestigingen. Je kunt
              het los gebruiken via een boekingspagina van de leverancier. Een website met
              boekingssysteem is je eigen site waarop die reserveringsmogelijkheid is ingebouwd. Het
              verschil zit in alles rondom de reservering: wie je bent, wat je aanbiedt, wat het
              kost en wat een gast kan verwachten. Dat staat op de website, niet in de agenda.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Drie routes"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Op welke manieren zet je online reserveren op je website?</h2>
            <p className="lead">Er zijn drie gangbare routes:</p>
          </Reveal>
          <div className="featgrid" style={kaarten}>
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="layout" />
              </span>
              <h4>Een module op je eigen pagina:</h4>
              <p>
                het reserveringsblok van je systeem staat op je website. De gast blijft op je site.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Een knop naar een boekingspagina:</h4>
              <p>
                de knop 'Reserveren' opent een pagina van het systeem. Snel geregeld, maar de gast
                verlaat je website om te reserveren.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Een koppeling of maatwerk:</h4>
              <p>
                je website en je systeem wisselen gegevens uit, zoals de beschikbaarheid. Dat kan
                alleen als je systeem dat ondersteunt.
              </p>
            </Reveal>
          </div>
          <Reveal as="p" className="lead reveal" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
            Welke route past, hangt af van je systeem en van hoe je nu werkt. Ondersteunt je systeem
            een koppeling, dan kijkt MegaOnline per situatie wat de slimste route is: soms via een
            directe integratie, soms via een tussenstap. Meer daarover lees je bij{" "}
            <Link to="/diensten/integraties" style={tekstLink}>
              integraties en koppelingen
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="dark"
        data-screen-label="Zonder hulp reserveren"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Kan een gast bij jou zonder hulp reserveren?</h2>
            <p className="lead">
              Loop deze punten na op je huidige website, het liefst op je telefoon:
            </p>
          </Reveal>
          <Reveal
            as="ul"
            className="minilist minilist--do reveal"
            style={{ marginTop: "clamp(22px, 2.4vw, 32px)", maxWidth: "62ch" }}
          >
            <Punt>Een gast ziet zonder te bellen of er op zijn datum plek is.</Punt>
            <Punt>De knop 'Reserveren' staat op elke pagina en werkt ook op mobiel.</Punt>
            <Punt>De prijs of de voorwaarden staan vóór de laatste stap.</Punt>
            <Punt>Je annuleringsvoorwaarden staan vóór de betaalstap.</Punt>
            <Punt>
              Na het reserveren weet de gast wat er nu gebeurt: een bevestiging per mail en hoe hij
              kan wijzigen of annuleren.
            </Punt>
          </Reveal>
          <Reveal as="p" className="lead reveal" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
            Klopt een van deze punten niet, dan is dat een moment waarop een gast afhaakt of alsnog
            moet bellen.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Reserveringsflow"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Hoe ziet een goede reserveringsflow eruit?</h2>
            <p className="lead">Een voorbeeld in vijf stappen:</p>
          </Reveal>
          <Reveal as="ol" className="reveal" style={stappen}>
            <li>De gast kiest een datum en het aantal personen.</li>
            <li>Hij ziet direct welke tijden of plekken vrij zijn.</li>
            <li>Hij kiest een tijd en ziet de prijs en de voorwaarden.</li>
            <li>
              Hij vult naam, e-mail en telefoonnummer in en betaalt online als je systeem dat
              vraagt.
            </li>
            <li>
              Hij krijgt direct een bevestiging per mail, met een manier om te wijzigen of te
              annuleren.
            </li>
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Naast de reserveringsknop"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat moet er naast de reserveringsknop op je website staan?</h2>
          </Reveal>
          <Reveal
            as="ul"
            className="minilist minilist--do reveal"
            style={{ marginTop: "clamp(22px, 2.4vw, 32px)", maxWidth: "62ch" }}
          >
            <Punt>Wat je aanbiedt, met echte foto's.</Punt>
            <Punt>
              Prijzen of een prijsindicatie. Lees ook{" "}
              <Link
                to="/kennisbank/$slug"
                params={{ slug: "prijzen-op-website-verhuurbedrijf" }}
                style={tekstLink}
              >
                waarom prijzen op je website helpen
              </Link>
              .
            </Punt>
            <Punt>Openingstijden en sluitingsdagen, gelijk aan wat in je systeem staat.</Punt>
            <Punt>Je annuleringsvoorwaarden en wat er gebeurt als iemand niet komt.</Punt>
            <Punt>Adres, route en parkeren.</Punt>
            <Punt>Bellen of WhatsApp voor vragen, als aanvulling op online reserveren.</Punt>
          </Reveal>
          <Reveal as="p" className="lead reveal" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
            Een{" "}
            <Link to="/diensten/conversie-website" style={tekstLink}>
              website die is gebouwd op aanvragen en boekingen
            </Link>{" "}
            helpt een bezoeker die stappen zonder hulp door te lopen.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Voor welke bedrijven"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Voor welke bedrijven is een website met reserveringen?</h2>
            <p className="lead">
              Voor bedrijven waar een gast een plek of moment reserveert: restaurants, B&B's,
              salons, praktijken en vergelijkbare bedrijven. Bied je vooral activiteiten of verhuur
              aan, kijk dan ook bij{" "}
              <Link to="/branches/activiteitenbedrijven" style={tekstLink}>
                activiteitenbedrijven
              </Link>{" "}
              en{" "}
              <Link to="/branches/verhuurbedrijven" style={tekstLink}>
                verhuurbedrijven
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" data-theme="light" data-screen-label="Prijs">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat kost een website met reserveringssysteem?</h2>
            {/* [prijs: Beslissing Joshua (TK-166 punt 5 / TK-85 vraag 1)] */}
            <p className="lead">
              Wat er bijkomt, hangt af van het reserveringssysteem en de koppeling die je wilt. De
              kosten van het reserveringssysteem zelf hangen af van de leverancier. In het gratis
              websiteconcept krijg je advies voor jouw situatie.
            </p>
          </Reveal>
        </div>
      </section>

      <MegaSmartBridge
        text="Een reservering binnenhalen is stap een. MegaSmart regelt de rest: online reserveren, bevestigingen, herinneringen en opvolging na het bezoek, gekoppeld aan je website."
        bullets={[
          "Online reserveren",
          "Automatische herinneringen",
          "Reserveringen en klantcontact in een systeem",
        ]}
      />

      <section className="section" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <h2 className="h2">Veelgestelde vragen over een website met reserveringen</h2>
          </Reveal>
          <div className="faq">
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <h2 className="display">Gratis websiteconcept voor je reserveringen</h2>
            <p className="lead">
              Wil je weten hoe online reserveren op jouw website kan werken? Ontvang een gratis
              websiteconcept met persoonlijk advies. Beantwoord zes korte vragen. Vrijblijvend.
            </p>
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <Link className="btn btn-primary" to="/gratis-websiteconcept">
                Vraag je gratis websiteconcept aan
              </Link>
              <Link className="tlink" to="/contact">
                Plan een kennismaking
              </Link>
            </Reveal>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
