import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { type CSSProperties, type ReactNode } from "react";
import { ConceptForm } from "@/components/ConceptForm";
import { Icon } from "@/components/Icon";
import { Media } from "@/components/Media";
import { Qa } from "@/components/Qa";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/diensten/werken-bij-websites")({
  head: () => ({
    meta: [
      { title: "Werken-bij website laten maken | MegaOnline.io" },
      {
        name: "description",
        content:
          "Een werken-bij website laten maken die laat zien hoe het echt is. Lees wat erop moet, hoe vacatures op je site komen en wat Google met vacatures doet.",
      },
      { property: "og:title", content: "Werken-bij website laten maken | MegaOnline.io" },
      {
        property: "og:description",
        content:
          "Een werken-bij website laten maken die laat zien hoe het echt is. Lees wat erop moet, hoe vacatures op je site komen en wat Google met vacatures doet.",
      },
      { property: "og:url", content: "https://megaonline.io/diensten/werken-bij-websites" },
    ],
    links: [{ rel: "canonical", href: "https://megaonline.io/diensten/werken-bij-websites" }],
  }),
  component: WerkenBijWebsites,
});

/** Enige bron van de zichtbare vragen. Antwoorden staan in de HTML, niet in schema. */
const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Heb ik een aparte werken-bij website nodig?",
    a: "Niet per se. Soms is een werken-bij sectie op je bestaande website genoeg, soms werkt een aparte website beter omdat die volledig om sfeer, mensen en solliciteren draait. In het gratis websiteconcept kijkt MegaOnline wat voor jouw situatie het slimst is.",
  },
  {
    q: "Kunnen vacatures automatisch worden bijgewerkt?",
    a: "Dat kan als je wervingssysteem (ATS) een koppeling of vacaturelijst voor websites aanbiedt. Anders beheer je de vacatures zelf op de website, zonder technische kennis.",
  },
  {
    q: "Kunnen mijn vacatures in Google verschijnen?",
    a: "Ze kunnen in aanmerking komen voor de vacatureresultaten van Google als elke vacature een eigen pagina met JobPosting-gegevens heeft. Of ze verschijnen, bepaalt Google; dat kan niemand garanderen.",
  },
  {
    q: "Helpt MegaOnline ook met foto's en video?",
    a: "Ja. Bij werken-bij websites is beeld vaak belangrijker dan tekst. MegaOnline kan helpen met teamfoto's, werkdagbeelden, interviews en bedrijfsvideo's, eenmalig bij de bouw of periodiek.",
  },
  {
    q: "Kunnen medewerkers hun verhaal delen?",
    a: "Ja. Op de website komt ruimte voor portretten, quotes en interviews, zodat sollicitanten een eerlijk beeld krijgen van hoe het is om bij je te werken.",
  },
];

const tekstLink: CSSProperties = {
  color: "var(--accent-text)",
  textDecoration: "underline",
  textUnderlineOffset: "0.18em",
};

const nadruk: CSSProperties = { color: "var(--fg)", fontWeight: 600 };

const kaarten: CSSProperties = {
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
};

const stappen: CSSProperties = {
  marginTop: "clamp(22px, 2.4vw, 32px)",
  paddingLeft: "1.35em",
  maxWidth: "68ch",
  color: "var(--muted)",
  fontSize: "1.05rem",
  lineHeight: 1.6,
};

const vervolg: CSSProperties = { marginTop: "clamp(22px, 2.4vw, 32px)" };

function Punt({ children }: { children: ReactNode }) {
  return (
    <li style={{ fontSize: "1.05rem", lineHeight: 1.55 }}>
      <span>{children}</span>
    </li>
  );
}

function WerkenBijWebsites() {
  return (
    <main id="top">
      <section
        className="section svc-hero"
        data-theme="dark"
        data-screen-label="Hero — Werken-bij Websites"
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              {/* prettier-ignore */}
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                {' '}
                <b>Werken-bij Websites</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Voor bedrijven die personeel zoeken
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Een werken-bij website laten maken die laat zien hoe het echt is
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Een werken-bij website is een website of een deel van je bedrijfssite waar
                sollicitanten zien hoe het is om bij je te werken, welke vacatures er zijn en hoe ze
                solliciteren. MegaOnline bouwt werken-bij websites die laten zien wie er werken, hoe
                een werkdag eruitziet en hoe je met een paar klikken solliciteert. Je website kost
                je misschien niet alleen klanten, maar ook medewerkers.
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
            <Reveal as="div" className="hvis reveal" data-d="2">
              <div className="hvis__frame">
                <Media
                  id="wb-hero"
                  fit="cover"
                  placeholder="[ TEAMFOTO OP DE WERKVLOER ]"
                  alt="Team aan het werk op de werkvloer"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Sectie of aparte website"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Een aparte werken-bij website of een sectie op je bedrijfssite?</h2>
            <p className="lead">
              Allebei kan. Wat past, hangt af van hoeveel vacatures je hebt en hoeveel je wilt laten
              zien.
            </p>
          </Reveal>
          <div className="featgrid" style={kaarten}>
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="layout" />
              </span>
              <p>
                <strong style={nadruk}>Een sectie op je bedrijfssite</strong>, bijvoorbeeld
                /werken-bij: één website om bij te houden en sollicitanten zien meteen wat je
                bedrijf doet.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="globe" />
              </span>
              <p>
                <strong style={nadruk}>Een aparte werken-bij website:</strong> alle ruimte voor
                sfeer, mensen en solliciteren, met een eigen opbouw.
              </p>
            </Reveal>
          </div>
          <Reveal as="p" className="lead reveal" style={vervolg}>
            In het gratis websiteconcept kijkt MegaOnline wat voor jouw situatie het slimst is.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Arbeidsmarkt"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Ligt het alleen aan de arbeidsmarkt?</h2>
            <p className="lead">
              Goede mensen vinden is zwaar. Maar het ligt ook aan wat iemand ziet als hij je bedrijf
              opzoekt. Een twijfelende sollicitant haakt net zo stil af als een twijfelende klant.
              Dit houdt hem vaak tegen:
            </p>
          </Reveal>
          <div className="flaw__mini" style={{ marginTop: "clamp(28px,3vw,40px)" }}>
            <Reveal as="div" className="miniprob reveal">
              <h4>Geen idee hoe het is om bij je te werken.</h4>
            </Reveal>
            <Reveal as="div" className="miniprob reveal" data-d="1">
              <h4>Alleen een lijstje vacatures met functietitels en eisen.</h4>
            </Reveal>
            <Reveal as="div" className="miniprob reveal">
              <h4>Solliciteren kost te veel moeite: lange formulieren en onduidelijke stappen.</h4>
            </Reveal>
            <Reveal as="div" className="miniprob reveal" data-d="1">
              <h4>Geen echte foto's van het team.</h4>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Wat een werken-bij website nodig heeft"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat heeft een goede werken-bij website nodig?</h2>
          </Reveal>
          <div className="featgrid">
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="users" />
              </span>
              <h4>Echte mensen</h4>
              <p>Gezichten en verhalen van collega's, niet alleen functietitels.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="camera" />
              </span>
              <h4>Goede foto's</h4>
              <p>Een eerlijk beeld van de werkvloer.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="list-checks" />
              </span>
              <h4>Heldere verwachtingen</h4>
              <p>Wat het werk inhoudt, zodat de juiste mensen reageren.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="3">
              <span className="iconbox">
                <Icon name="send" />
              </span>
              <h4>Eenvoudig solliciteren</h4>
              <p>Een kort formulier, zonder verplichte velden die niet nodig zijn.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="award" />
              </span>
              <h4>Een herkenbaar verhaal</h4>
              <p>Wie je bent en waarom mensen blijven.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="smartphone" />
              </span>
              <h4>Goed op mobiel</h4>
              <p>Solliciteren werkt op een telefoon net zo goed als op een laptop.</p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="phone-call" />
              </span>
              <h4>Snel contact</h4>
              <p>Even appen of bellen, voor wie nog geen volledige sollicitatie wil sturen.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" data-theme="dark" data-screen-label="Foto's en video">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ marginBottom: "8px" }}>
            <h2 className="h2">
              Waarom zijn foto's en video zo belangrijk op een werken-bij website?
            </h2>
          </Reveal>
          <div className="media">
            <Reveal as="div" className="mediagal reveal">
              <div className="mslot mslot--tall">
                <Media
                  id="cw-media-1"
                  fit="cover"
                  placeholder="[ TEAMFOTO ]"
                  alt="Collega's samen aan het werk op kantoor"
                />
              </div>
              <div className="mslot mslot--sq">
                <Media
                  id="cw-media-2"
                  fit="cover"
                  placeholder="[ WERKDAG ]"
                  alt="Monteur aan het werk op locatie"
                />
              </div>
              <div className="mslot mslot--sq">
                <Media
                  id="cw-media-3"
                  fit="cover"
                  placeholder="[ INTERVIEW ]"
                  alt="Gesprek tussen twee collega's"
                />
              </div>
              <div className="mslot mslot--wide">
                <Media
                  id="cw-media-4"
                  fit="cover"
                  placeholder="[ VIDEO / SFEER ]"
                  alt="Medewerker in het magazijn"
                />
              </div>
            </Reveal>
            <Reveal as="div" className="media__body reveal" data-d="1">
              <p>
                Niemand voelt de sfeer van een bedrijf door een vacaturetekst te lezen. Een eerlijke
                teamfoto of een korte video van een werkdag laat sneller zien hoe het is. Het gaat
                vaak mis met verouderde foto's, stockbeelden en pagina's zonder gezichten van het
                team.
              </p>
              <p>
                MegaOnline kan helpen met teamfoto's, werkdagbeelden, interviews met collega's en
                bedrijfsvideo's, eenmalig bij de bouw of periodiek.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight" data-theme="light" data-screen-label="Vacatures">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Hoe komen je vacatures op je werken-bij website?</h2>
            <p className="lead">Er zijn twee manieren:</p>
          </Reveal>
          <div className="featgrid" style={kaarten}>
            <Reveal as="div" className="feat reveal">
              <span className="iconbox">
                <Icon name="file-text" />
              </span>
              <h4>Zelf beheren</h4>
              <p>
                Je zet een vacature online of haalt hem weg op de website, zonder technische kennis.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="workflow" />
              </span>
              <h4>Uit je wervingssysteem</h4>
              <p>
                De vacatures komen uit het systeem waarin je sollicitaties beheert (een ATS). Dat
                kan alleen als dat systeem een koppeling of een vacaturelijst voor websites
                aanbiedt. Ondersteunt je systeem dat, dan kijkt MegaOnline per situatie wat de
                slimste koppeling is.
              </p>
            </Reveal>
          </div>
          <Reveal as="p" className="lead reveal" style={vervolg}>
            Sollicitaties kunnen binnenkomen via een kort formulier, per mail of via WhatsApp.
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" data-theme="dark" data-screen-label="Google">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Kunnen je vacatures in Google verschijnen?</h2>
            <p className="lead">
              Google heeft een aparte zoekomgeving voor vacatures, ook in Nederland. Een
              vacaturepagina kan daarvoor in aanmerking komen als die gestructureerde gegevens heeft
              (JobPosting) met onder meer de functietitel, een omschrijving, de werkgever, de
              locatie en de datum van plaatsing. Twee dingen zijn daarbij belangrijk:
            </p>
          </Reveal>
          <Reveal
            as="ul"
            className="minilist minilist--do reveal"
            style={{ ...vervolg, maxWidth: "68ch" }}
          >
            <Punt>
              Elke vacature krijgt een eigen pagina. Google wil deze gegevens alleen op een pagina
              met één vacature, niet op een overzichtspagina.
            </Punt>
            <Punt>Een gesloten vacature gaat offline of krijgt een einddatum.</Punt>
          </Reveal>
          <Reveal as="p" className="lead reveal" style={vervolg}>
            Of en waar een vacature verschijnt, bepaalt Google. Niemand kan dat garanderen.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Voorbeeld MegaOnline"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">
              Hoe ziet een werken-bij pagina eruit? Een voorbeeld van MegaOnline zelf
            </h2>
            <p className="lead">
              Op{" "}
              <Link to="/werken-bij" style={tekstLink}>
                de vacaturepagina van MegaOnline
              </Link>{" "}
              staan de open rollen van MegaOnline zelf, van stages tot freelance. Zo is die pagina
              opgebouwd:
            </p>
          </Reveal>
          <Reveal
            as="ul"
            className="minilist minilist--do reveal"
            style={{ ...vervolg, maxWidth: "68ch" }}
          >
            <Punt>
              Een overzicht met per rol een kaart: het soort rol, één zin over het werk en de
              ervaring die nodig is.
            </Punt>
            <Punt>
              Per rol een eigen pagina met wat je gaat doen, wat je meebrengt, wat je niet hoeft te
              hebben en wat je er leert.
            </Punt>
            <Punt>
              Per vacaturepagina gestructureerde gegevens (JobPosting), uit dezelfde bron als de
              tekst op de pagina.
            </Punt>
            <Punt>
              Een kort sollicitatieformulier waarin een cv niet verplicht is, met mail en WhatsApp
              als alternatief.
            </Punt>
            <Punt>
              Een procedure in drie stappen: iets sturen, een kort belgesprek en daarna een opdracht
              met kennismaking.
            </Punt>
          </Reveal>
          <Reveal as="p" className="lead reveal" style={vervolg}>
            Dit is de eigen website van MegaOnline, geen klantvoorbeeld.
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        id="aanpak"
        data-theme="paper"
        data-screen-label="Aanpak"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Hoe pakt MegaOnline een werken-bij website aan?</h2>
          </Reveal>
          <Reveal as="ol" className="reveal" style={stappen}>
            <li>
              <strong style={nadruk}>Je bedrijf begrijpen:</strong> wat maakt het werk leuk, waarom
              blijven collega's en wat maakt je anders dan de werkgever verderop?
            </li>
            <li>
              <strong style={nadruk}>De mensen begrijpen die je zoekt:</strong> wat hebben zij nodig
              om te solliciteren?
            </li>
            <li>
              <strong style={nadruk}>Structuur:</strong> welke informatie en welk beeld nodig zijn
              en hoe iemand naar de sollicitatie gaat.
            </li>
            <li>
              <strong style={nadruk}>Bouwen:</strong> een website die solliciteren makkelijker maakt
              en die je zelf bijhoudt.
            </li>
          </Reveal>
          <Reveal as="p" className="lead reveal" style={vervolg}>
            Het doel is niet zoveel mogelijk sollicitaties, maar dat de juiste mensen denken: hier
            wil ik werken.
          </Reveal>
        </div>
      </section>

      <section className="section" data-theme="dark" data-screen-label="Voor welke bedrijven">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Voor welke bedrijven is een werken-bij website?</h2>
            <p className="lead">
              Voor bedrijven die moeite hebben om goede mensen te vinden, zoals
              installatiebedrijven, bouwbedrijven, transportbedrijven, hoveniers, technische
              bedrijven en dienstverleners. Zoek je ook meer klanten via je website? Bekijk dan{" "}
              <Link to="/branches/dienstverleners" style={tekstLink}>
                websites voor dienstverleners
              </Link>
              ,{" "}
              <Link to="/branches/activiteitenbedrijven" style={tekstLink}>
                websites voor activiteitenbedrijven
              </Link>{" "}
              of{" "}
              <Link to="/branches/verhuurbedrijven" style={tekstLink}>
                websites voor verhuurbedrijven
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" data-theme="paper" data-screen-label="Prijs">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Wat kost een werken-bij website laten maken?</h2>
            <p className="lead">
              Dat hangt af van de vorm (een sectie of een aparte website), het aantal vacatures en
              of de vacatures uit een wervingssysteem moeten komen.{" "}
              {/* [prijs: Beslissing Joshua (TK-166 punt 5 / TK-85 vraag 1)] */}
              In het gratis websiteconcept krijg je advies voor jouw situatie.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="faq" data-theme="paper" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <h2 className="h2">Veelgestelde vragen over werken-bij websites</h2>
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

      <section
        className="section"
        id="scan"
        data-theme="dark"
        data-screen-label="Eind-CTA + scan-formulier"
      >
        <div className="wrap">
          <div className="endcta__grid">
            <div className="endcta__copy">
              <Reveal as="h2" className="display reveal">
                Gratis websiteconcept voor je werken-bij website
              </Reveal>
              <Reveal as="p" className="lead reveal" data-d="1">
                Wil je weten hoe jouw werken-bij website eruit kan zien? Ontvang een gratis
                websiteconcept met persoonlijk advies. Beantwoord zes korte vragen. Vrijblijvend.
              </Reveal>
              <Reveal
                as="div"
                className="svc-hero__ctas reveal"
                data-d="2"
                style={{ marginTop: "28px" }}
              >
                <Link className="btn btn-primary" to="/gratis-websiteconcept">
                  Vraag je gratis websiteconcept aan
                </Link>
                <Link className="tlink" to="/contact">
                  Plan een kennismaking
                </Link>
              </Reveal>
            </div>
            <ConceptForm className="reveal" />
          </div>
        </div>
      </section>
    </main>
  );
}
