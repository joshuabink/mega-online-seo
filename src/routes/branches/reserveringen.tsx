import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { Qa } from "@/components/Qa";
import { FaqSchema } from "@/components/FaqSchema";
import { Reveal } from "@/components/Reveal";
import { CTA_SCAN } from "@/lib/cta";
import { BoekVisual } from "@/components/BoekVisual";
import { BOEK_FUNCTIES } from "@/lib/boekfuncties";

export const Route = createFileRoute("/branches/reserveringen")({
  head: () => ({
    meta: [
      { title: "Website met reserveringssysteem laten maken | MegaOnline" },
      {
        name: "description",
        content:
          "Website met reserveringssysteem laten maken? Gasten reserveren zelf op je eigen site, met herinneringen, online betalen en één agenda. Zo werkt het per type bedrijf.",
      },
      {
        property: "og:title",
        content: "Website met reserveringssysteem laten maken | MegaOnline",
      },
      {
        property: "og:description",
        content:
          "Website met reserveringssysteem laten maken? Gasten reserveren zelf op je eigen site, met herinneringen, online betalen en één agenda. Zo werkt het per type bedrijf.",
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
    a: "Dat hangt af van het systeem. Kan het op een eigen website worden geplaatst, met een module, een knop naar een boekingspagina of een koppeling, dan kan de nieuwe website eromheen worden gebouwd. In de gratis website scan kijkt MegaOnline wat bij jouw systeem kan.",
  },
  {
    q: "Moet ik voor online reserveren een nieuwe website laten maken?",
    a: "Niet altijd. Soms is een reserveringsknop op je huidige website genoeg. Een nieuwe website is zinvol als bezoekers afhaken voordat ze bij die knop zijn, bijvoorbeeld omdat informatie ontbreekt of de site slecht werkt op mobiel. De gratis website scan helpt bepalen wat voor jou de slimste aanpak is.",
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
  {
    q: "Kunnen gasten zelf hun reservering wijzigen of annuleren?",
    a: "Ja. In de bevestiging staat een link waarmee de gast zelf verzet of annuleert, binnen de voorwaarden die jij instelt. Een vrijgekomen plek staat dan meteen weer online.",
  },
  {
    q: "Helpen herinneringen echt tegen gasten die niet komen opdagen?",
    a: "Een herinnering de dag ervoor zorgt dat wie het vergeten was alsnog komt. Wie niet kan, laat het op tijd weten. Wil je meer zekerheid, vraag dan bij grotere groepen of drukke momenten een aanbetaling.",
  },
  {
    q: "Kunnen gasten ook reserveren vanuit Google of Instagram?",
    a: "Ja, dat kan erbij. Dan staat er bij je bedrijf in Google Maps en op je Instagram een knop om te reserveren. Die reserveringen komen in dezelfde agenda als die via je website.",
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

const PER_BEDRIJF: { icon: string; t: string; p: string }[] = [
  {
    icon: "users",
    t: "Restaurant of lunchroom",
    p: "De gast kiest een datum, een tijd en het aantal personen. Vanaf een grote groep vraag je een aanbetaling en op de dag zelf gaat er een herinnering.",
  },
  {
    icon: "calendar-clock",
    t: "Salon of praktijk",
    p: "Elke behandeling heeft een eigen duur en prijs. De klant kiest een medewerker of laat het open. Bij de eerste afspraak vult hij een paar vragen in.",
  },
  {
    icon: "ticket",
    t: "Escaperoom of activiteit",
    p: "Een tijdslot met een maximum aantal spelers en de prijs per persoon in beeld. Extra's zoals een drankje of een fotomoment boek je er meteen bij.",
  },
  {
    icon: "calendar-range",
    t: "Locatie of zaalverhuur",
    p: "De klant ziet welke dagen en dagdelen vrij zijn, kiest een ruimte en stuurt een aanvraag of boekt direct, met een aanbetaling als bevestiging.",
  },
  {
    icon: "graduation-cap",
    t: "Rijschool of lessen",
    p: "Eerst een proefles, daarna een vaste reeks lessen in één keer. Les verzetten gaat zelf, binnen de termijn die jij instelt.",
  },
];

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
                <b>Bedrijven met reserveringen</b>
              </Reveal>{" "}
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  Bedrijven met reserveringen
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                Website met reserveringssysteem laten maken
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                Een website met reserveringssysteem, ook wel reserveringswebsite genoemd, is een
                website waarop gasten zelf een datum,
                tijd of plek kiezen, direct zien wat vrij is en hun reservering afronden zonder te
                bellen. Het reserveringssysteem regelt de agenda, de beschikbaarheid en de
                bevestiging. De website laat zien wat je aanbiedt, wat het kost en waarom een gast
                bij jou reserveert. MegaOnline bouwt die website voor restaurants, B&B's, salons,
                praktijken en andere bedrijven waar een plek of moment wordt gereserveerd.
              </Reveal>
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <Link className="btn btn-primary" to="/gratis-websitescan">
                  {CTA_SCAN}
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
              <h4>Een module op je eigen pagina</h4>
              <p>
                Het reserveringsblok van je systeem staat op je website. De gast blijft op je site.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="1">
              <span className="iconbox">
                <Icon name="mouse-pointer-click" />
              </span>
              <h4>Een knop naar een boekingspagina</h4>
              <p>
                De knop 'Reserveren' opent een pagina van het systeem. Snel geregeld, maar de gast
                verlaat je website om te reserveren.
              </p>
            </Reveal>
            <Reveal as="div" className="feat reveal" data-d="2">
              <span className="iconbox">
                <Icon name="plug" />
              </span>
              <h4>Een koppeling of maatwerk</h4>
              <p>
                Je website en je systeem wisselen gegevens uit, zoals de beschikbaarheid. Dat kan
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
            moet bellen. Waarom dat telt, lees je in{" "}
            <Link
              to="/kennisbank/$slug"
              params={{ slug: "website-levert-geen-aanvragen-op" }}
              style={tekstLink}
            >
              elke extra stap kost boekingen
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Reserveringsflow"
      >
        <div className="wrap boekdemo">
          <div>
            <Reveal as="div" className="shead reveal">
              <h2 className="h2">Hoe ziet een goede reserveringsflow eruit?</h2>
              <p className="lead">Een voorbeeld in vijf stappen, zoals een gast het op zijn telefoon ziet:</p>
            </Reveal>
            <Reveal as="ol" className="reveal" style={stappen}>
              <li>De gast kiest een datum en het aantal personen.</li>
              <li>Hij ziet direct welke tijden of plekken vrij zijn. Wat vol is, kan hij niet kiezen.</li>
              <li>Hij kiest een tijd en ziet de prijs en de voorwaarden.</li>
              <li>
                Hij vult naam, e-mail en telefoonnummer in en betaalt online als jij dat vraagt.
              </li>
              <li>
                Hij krijgt direct een bevestiging per mail en de dag ervoor een herinnering, met een
                manier om te wijzigen of te annuleren.
              </li>
            </Reveal>
          </div>
          <Reveal as="div" className="reveal" data-d="1">
            <BoekVisual soort="tafel" />
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="light"
        data-screen-label="Functies"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Welke functies bouwen we in je reserveringssysteem?</h2>
            <p className="lead">
              We bouwen het reserveringssysteem in op je eigen website en richten het in op wat jij
              verkoopt. Je kiest de functies die je nodig hebt. Dit zijn de functies die we het
              vaakst inbouwen:
            </p>
          </Reveal>
          <div className="featgrid" style={kaarten}>
            {BOEK_FUNCTIES.map((f, i) => (
              <Reveal as="div" key={f.t} className="feat reveal" data-d={String(i % 3)}>
                <span className="iconbox">
                  <Icon name={f.icon} />
                </span>
                <h4>{f.t}</h4>
                <p>{f.p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="lead reveal" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
            Hoe we het inrichten en wat er na een reservering automatisch gebeurt, lees je bij{" "}
            <Link to="/diensten/online-boeken" style={tekstLink}>
              online boeken en reserveren
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Per type bedrijf"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <h2 className="h2">Hoe ziet online reserveren eruit per type bedrijf?</h2>
            <p className="lead">
              Een reserveringswebsite voor een restaurant werkt anders dan een voor een salon of een
              escaperoom. Wat de gast kiest en wat jij vooraf wilt weten, verschilt per bedrijf.
            </p>
          </Reveal>
          <div className="featgrid" style={kaarten}>
            {PER_BEDRIJF.map((b, i) => (
              <Reveal as="div" key={b.t} className="feat reveal" data-d={String(i % 3)}>
                <span className="iconbox">
                  <Icon name={b.icon} />
                </span>
                <h4>{b.t}</h4>
                <p>{b.p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="lead reveal" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
            Verkoop je vooral tijdsloten of verhuur, kijk dan ook bij{" "}
            <Link to="/branches/activiteitenbedrijven" style={tekstLink}>
              websites voor activiteitenbedrijven
            </Link>{" "}
            en{" "}
            <Link to="/branches/verhuurbedrijven" style={tekstLink}>
              websites voor verhuurbedrijven
            </Link>
            .
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
              Voor bedrijven waar een gast een plek of moment reserveert: restaurants en
              lunchrooms, B&B's, salons, praktijken, rijscholen, locaties en workshops. Het
              bedrijfsmodel telt meer dan de branche. Leef je van reserveringen, dan is een
              reserveringswebsite het deel van je bedrijf dat ook 's avonds en in het weekend
              doorwerkt.
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
              Dat hangt af van de functies die je nodig hebt en hoe complex je aanbod is. Een
              restaurant met één soort tafelreservering is eenvoudiger dan een locatie met
              tijdsloten, groepen, extra opties en een aanbetaling. Wat de prijs bepaalt:
            </p>
          </Reveal>
          <Reveal
            as="ul"
            className="minilist minilist--do reveal"
            style={{ marginTop: "clamp(22px, 2.4vw, 32px)", maxWidth: "62ch" }}
          >
            <Punt>Hoeveel soorten reserveringen je aanbiedt en of die een eigen duur of prijs hebben.</Punt>
            <Punt>Of gasten online betalen of een aanbetaling doen.</Punt>
            <Punt>Welke herinneringen er gaan, per mail, sms of WhatsApp.</Punt>
            <Punt>Met hoeveel medewerkers, ruimtes of locaties je werkt.</Punt>
            <Punt>Welke koppelingen er nodig zijn, met je agenda, je klantenbestand of je administratie.</Punt>
            <Punt>Of je huidige website goed genoeg is, of dat er een nieuwe nodig is.</Punt>
          </Reveal>
          <Reveal as="div" className="reveal">
            <p className="lead" style={{ marginTop: "clamp(22px, 2.4vw, 32px)" }}>
              Hoe je offertes vergelijkt, lees je in{" "}
              <Link
                to="/kennisbank/$slug"
                params={{ slug: "wat-kost-een-website-met-reserveringssysteem" }}
                style={tekstLink}
              >
                wat kost een website met reserveringssysteem
              </Link>
              . Na de gratis website scan weet je wat bij jou past en wat het kost.
            </p>
          </Reveal>
        </div>
      </section>


      <section className="section" id="faq" data-theme="dark" data-screen-label="FAQ">
        <div className="wrap">
          <Reveal as="div" className="shead reveal" style={{ maxWidth: "680px" }}>
            <h2 className="h2">Veelgestelde vragen over een website met reserveringen</h2>
          </Reveal>
          <FaqSchema>
<div className="faq">
            {FAQ_ITEMS.map(({ q, a }) => (
              <Qa key={q} question={q} className="reveal">
                {a}
              </Qa>
            ))}
          </div>
</FaqSchema>
        </div>
      </section>

      <section className="section" id="scan" data-theme="paper" data-screen-label="Eind-CTA">
        <div className="wrap">
          <Reveal as="div" className="shead shead--center reveal">
            <h2 className="display">Gratis website scan voor je reserveringen</h2>
            <p className="lead">
              Wil je weten hoe online reserveren op jouw website kan werken? Ontvang een gratis
              website scan met persoonlijk advies. Beantwoord vier korte vragen. Vrijblijvend.
            </p>
            <Reveal
              as="div"
              className="svc-hero__ctas reveal"
              data-d="1"
              style={{ justifyContent: "center", marginTop: "28px" }}
            >
              <Link className="btn btn-primary" to="/gratis-websitescan">
                {CTA_SCAN}
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
