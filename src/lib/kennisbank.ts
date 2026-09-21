/**
 * Kennisbankartikelen voor /kennisbank.
 *
 * Eén bron voor drie dingen: de kaarten op de overzichtspagina, de
 * artikelpagina (`src/routes/kennisbank/$slug.tsx`) en de Article- plus
 * FAQPage-markup. Laat ze niet uit elkaar lopen, want de zichtbare vragen en
 * de markup horen gelijk te zijn.
 *
 * Nieuw artikel toevoegen: object erbij, slug uniek houden en
 * `public/sitemap.xml` aanvullen. De route is dynamisch, dus verder is er
 * niets te registreren.
 *
 * Schrijfregels voor de teksten hieronder: geen em-streepjes, geen komma vóór
 * "en", je-vorm, "aanvragen" in plaats van dat andere woord, elk getal krijgt
 * duiding en nooit een belofte over posities of resultaat.
 */

export type ArtikelSectie = {
  kop: string;
  /** Deel van de kop dat het designsysteem accentueert. Moet in `kop` voorkomen. */
  accent?: string;
  alineas: string[];
  /** Optionele opsomming met korte kop per punt. */
  punten?: { titel: string; tekst: string }[];
};

export type Artikel = {
  /** Laatste deel van de URL: /kennisbank/<slug>. */
  slug: string;
  /** Korte naam voor kaarten, kruimelpad en navigatie. */
  naam: string;
  /** De H1, geschreven als de vraag die iemand zelf intypt. */
  vraag: string;
  /** Contentpijler, zichtbaar als label boven de H1. */
  pijler: string;
  /** Icoonnaam uit `src/components/marks.tsx`. */
  icoon: string;
  /** Voor welke branche dit artikel in de eerste plaats is geschreven. */
  branche: string;
  /** Eén zin op de kaart in het overzicht. */
  teaser: string;
  /** Het antwoord in de eerste twee zinnen, direct onder de H1. */
  antwoord: string;
  leestijd: string;
  gepubliceerd: string;
  gewijzigd: string;
  secties: ArtikelSectie[];
  /** Wat de lezer morgen zelf kan doen, ook als hij nooit klant wordt. */
  doen: string[];
  faq: { q: string; a: string }[];
  /** Interne vervolgstappen. Ankertekst is het zoekwoord, niet "bekijk". */
  links: { to: string; label: string; tekst: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const ARTIKELEN: Artikel[] = [
  {
    slug: "website-levert-geen-aanvragen-op",
    naam: "Website levert geen aanvragen op",
    vraag: "Waarom levert je website geen aanvragen of klanten op?",
    pijler: "Zo werkt het echt",
    icoon: "trending-up",
    branche: "Bedrijven met offerteaanvragen",
    teaser:
      "Veel bezoekers, weinig aanvragen. Zes plekken waar het weglekt en hoe je in een uur uitvindt welke het bij jou is.",
    antwoord:
      "Omdat bezoek en aanvragen twee verschillende dingen zijn. Je website haalt mensen binnen, alleen geeft hij ze te weinig om op te beslissen: geen bewijs dat je te vertrouwen bent, geen idee van de prijs of een aanvraagroute die te veel vraagt.",
    leestijd: "7 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-09-21",
    secties: [
      {
        kop: "Bezoekers, aanvragen en klanten zijn drie verschillende getallen",
        accent: "drie verschillende getallen",
        alineas: [
          "Een website die geen klanten oplevert heeft zelden een bezoekersprobleem. Twee sites met precies evenveel bezoek kunnen een heel verschillend aantal aanvragen opleveren. Het verkeer is dan niet het verschil, de pagina is het verschil. Wie op bezoekers stuurt, stuurt dus op een getal dat niets zegt over wat er onder de streep bij komt.",
          "Reken het voor jezelf eens door. Stel dat er 500 mensen per maand op je site komen en je krijgt twee aanvragen. Verdubbel je het bezoek naar 1.000, dan levert dezelfde pagina vier aanvragen op. Dat verdubbelen kost maanden werk of advertentiebudget. Zorg je in plaats daarvan dat vier op de honderd bezoekers aanvraagt in plaats van vier op de duizend, dan werkt die verbetering door op al het bezoek dat je nu al hebt. Dit is een rekenvoorbeeld en geen belofte, maar het laat zien welke kant van de rekensom meestal het goedkoopst is. Dat is precies waar [website optimalisatie](/diensten/website-optimalisatie) over gaat.",
          "Daarom begint elke websitescan bij ons met één getal: hoeveel aanvragen kreeg je de afgelopen drie maanden. Zolang dat getal ontbreekt is elke verbetering een gevoel in plaats van een uitkomst.",
        ],
      },
      {
        kop: "Zes plekken waar het in de praktijk weglekt",
        accent: "in de praktijk",
        alineas: [
          "In scans zien we vrijwel altijd een combinatie van deze zes. Zelden ligt het aan één ding. Bijna nooit aan de techniek alleen.",
        ],
        punten: [
          {
            titel: "1. De bezoeker komt met een andere vraag dan je pagina beantwoordt",
            tekst:
              "Iemand zoekt wat iets kost of hoe snel het kan. Wat hij vindt is een pagina die vooral vertelt hoe lang je bedrijf bestaat. De bezoeker is dan wel binnen, alleen niet geholpen. In Google Search Console zie je op welke zoekvragen je vertoningen krijgt. Passen die vragen niet bij de pagina waarop mensen landen, dan is dat je eerste aanwijzing. Het oplossen daarvan hoort bij je [vindbaarheid in Google en in AI](/diensten/seo), niet bij je formulier.",
          },
          {
            titel: "2. Er staat te weinig op de site om je te durven vertrouwen",
            tekst:
              "Geen gezicht, geen echte foto's van eigen werk, geen adres of inschrijvingsnummer, geen enkele klant die iets zegt. Wie jou niet kent heeft dan geen reden om aan te nemen dat het goed komt. Vertrouwen komt vóór techniek: een snelle website die niets bewijst levert nog steeds niets op. Dit is het eerste dat we aanpakken bij een [conversiegerichte website](/diensten/conversie-website).",
          },
          {
            titel: "3. De prijs staat er nergens",
            tekst:
              "Geen prijs betekent voor de bezoeker: dit wordt duur, of dit wordt een gesprek waar ik niet onderuit kom. Een vanafprijs of een bandbreedte houdt mensen niet weg, het houdt de verkeerde mensen weg. Dat scheelt jou offertes die toch niets worden. Zeker in branches waar per periode of per stuk wordt afgerekend, zoals bij [verhuurbedrijven](/branches/verhuurbedrijven), belt iemand liever de concurrent die wel een tarief noemt.",
          },
          {
            titel: "4. Het aanvraagformulier vraagt te veel en te vroeg",
            tekst:
              "Acht velden waarvan de helft pas relevant is als er al een gesprek is geweest. Iemand die nog twijfelt haakt daar af. Drie velden die vragen wat je echt nodig hebt om terug te bellen leveren meer aanvragen op, ook al voelen ze onvollediger. Hoe je een formulier bouwt dat kwalificeert in plaats van afschrikt staat op de pagina over [meer offerteaanvragen via je website](/branches/offerteaanvragen).",
          },
          {
            titel: "5. Op de telefoon is de eerste stap niet te vinden",
            tekst:
              "De aanvraagknop staat onder een lange hero, het telefoonnummer is geen link of het formulier springt bij het typen. Het grootste deel van je bezoek komt van een telefoon, dus wat daar niet werkt werkt bijna niet. Pak je eigen site erbij op je mobiel en tel hoeveel tikken het kost om een aanvraag te versturen.",
          },
          {
            titel: "6. Er staat geen duidelijke vervolgstap",
            tekst:
              "Bellen, mailen, offerte aanvragen, nieuwsbrief, demo en chat door elkaar. Drie keuzes op één pagina is geen service, het is uitstel. Eén duidelijke vervolgstap per pagina werkt beter, ook als die stap klein is. Gaat het om reserveren of boeken, dan telt elke extra klik dubbel: zie [website met reserveringssysteem laten maken](/branches/reserveringen).",
          },
        ],
      },
      {
        kop: "Zo vind je in een uur uit welke het bij jou is",
        accent: "in een uur",
        alineas: [
          "Hier heb je geen dure software voor nodig. Vier controles brengen je verder dan de meeste rapportages. Je kunt ze alle vier zelf doen.",
        ],
        punten: [
          {
            titel: "Tel je aanvragen van de laatste drie maanden",
            tekst:
              "Uit je mailbox, je telefoon en je formulier bij elkaar. Eén getal per maand is genoeg. Zonder beginpunt kun je later niet zien of iets werkte.",
          },
          {
            titel: "Kijk welke zoekvragen je vertoningen opleveren",
            tekst:
              "In Google Search Console zie je per zoekvraag de vertoningen, de klikken en de pagina waarop mensen landen. Zoekvragen die niet passen bij die pagina verklaren een deel van je verlies al.",
          },
          {
            titel: "Vul je eigen formulier in op je telefoon",
            tekst:
              "Tel de velden en tel de tikken. Laat het daarna iemand doen die je bedrijf niet kent en kijk waar hij aarzelt. Dat is goedkoper dan elk onderzoek.",
          },
          {
            titel: "Vraag drie klanten wat hen deed besluiten",
            tekst:
              "Wat zij noemen staat verrassend vaak nergens op je site. Precies die zin hoort boven de vouw te staan in plaats van in je hoofd.",
          },
        ],
      },
      {
        kop: "Wat we hierin het vaakst terugzien",
        accent: "het vaakst",
        alineas: [
          "Twee patronen komen zo vaak voorbij dat ze bijna standaard zijn. Het eerste: een pagina die veel vertoningen krijgt in Google en nauwelijks klikken. Dat is geen vindbaarheidsprobleem, dat is een titelprobleem. De pagina staat er wel, alleen belooft de titel niet wat de zoeker zocht.",
          "Het tweede: bijna al het bezoek komt binnen op de homepage en er gaat nauwelijks iemand door naar de pagina die zijn vraag beantwoordt. Dan is de website geen route maar een wachtkamer. Dat los je op met een duidelijke ingang per doelgroep en met links in de tekst die de bezoeker meenemen, niet met meer bezoek.",
        ],
      },
      {
        kop: "Eerst de pagina, dan pas meer bezoek",
        accent: "dan pas meer bezoek",
        alineas: [
          "De verleiding is groot om te beginnen met adverteren of met een SEO-traject. Dat kan verstandig zijn, alleen niet als eerste stap. Elke euro die je in extra bezoek steekt loopt langs dezelfde pagina die nu al te weinig oplevert. Zet die pagina eerst goed en je verdient hem terug op al het verkeer dat je daarna binnenhaalt.",
          "Andersom geldt het ook. Een perfect ingerichte pagina waar niemand komt levert niets op. De volgorde is dus: eerst zorgen dat wie er komt ook aanvraagt, daarna pas zorgen dat er meer mensen komen.",
        ],
      },
    ],
    doen: [
      "Tel je aanvragen van de laatste drie maanden en schrijf het getal op.",
      "Haal uit je aanvraagformulier elk veld dat je ook in het eerste gesprek kunt vragen.",
      "Zet één zin met een prijsindicatie op je belangrijkste pagina, al is het een vanafprijs.",
      "Kies per pagina één vervolgstap en haal de rest weg.",
      "Vul je eigen formulier in op je telefoon en laat iemand anders het ook proberen.",
      "Zet het antwoord op de vraag die klanten het vaakst stellen boven de vouw.",
    ],
    faq: [
      {
        q: "Wat is een goede conversie voor een website?",
        a: "Er is geen getal dat voor elke branche klopt. Elk percentage dat je online vindt komt uit een andere markt dan de jouwe, met andere prijzen en een ander soort beslissing. Meet daarom je eigen beginpunt: het aantal aanvragen per maand nu. Dat is het enige cijfer waarmee je later kunt vergelijken.",
      },
      {
        q: "Hoeveel bezoekers heb ik nodig voor een aanvraag?",
        a: "Dat hangt af van je aanbod en van wie er binnenkomt. Bezoek uit een zoekvraag als wat kost een kartbaan huren is heel wat anders dan bezoek uit een tip op social media. Vergelijk daarom nooit met een gemiddelde, maar met je eigen cijfer van vorige maand.",
      },
      {
        q: "Moet ik eerst adverteren of eerst mijn website aanpakken?",
        a: "Meestal eerst je website. Advertenties sturen mensen naar dezelfde pagina die nu al te weinig oplevert, dus je betaalt dan voor bezoek dat op dezelfde plek blijft hangen. Staat de pagina eenmaal goed, dan verdient elke advertentie-euro meer terug.",
      },
      {
        q: "Hoe lang duurt het voordat je verschil ziet?",
        a: "Aanpassingen aan teksten, formulieren en vertrouwen werken direct op het bezoek dat je al hebt, dus daar kun je binnen enkele weken iets van zien als je genoeg verkeer hebt. Werk aan je vindbaarheid duurt langer, vaak maanden. Dat is de tweede reden om met de pagina te beginnen.",
      },
      {
        q: "Wat als ik geen idee heb hoeveel aanvragen ik nu krijg?",
        a: "Dan begin je met tellen, desnoods met de hand in een schriftje of een los tabblad. Drie maanden is genoeg om een beginpunt te hebben. Wie dat overslaat blijft raden of iets werkte.",
      },
    ],
    links: [
      {
        to: "/diensten/website-optimalisatie",
        label: "Website optimalisatie",
        tekst: "Meer aanvragen halen uit de website die je al hebt, zonder opnieuw te beginnen.",
      },
      {
        to: "/branches/offerteaanvragen",
        label: "Meer offerteaanvragen via je website",
        tekst: "Een aanvraagformulier dat kwalificeert in plaats van afschrikt.",
      },
      {
        to: "/diensten/conversie-website",
        label: "Conversiegerichte website laten maken",
        tekst: "Een nieuwe site die vanaf de eerste dag op aanvragen is gebouwd.",
      },
    ],
    metaTitle: "Waarom je website geen aanvragen oplevert | MegaOnline.io",
    metaDescription:
      "Veel bezoekers, weinig aanvragen. De zes plekken waar het weglekt, hoe je in een uur uitvindt welke het bij jou is en wat je er zelf aan kunt doen.",
  },
];

/** Het artikel bij een slug, of `undefined` als die slug niet bestaat. */
export function artikelBySlug(slug: string): Artikel | undefined {
  return ARTIKELEN.find((a) => a.slug === slug);
}

/** Nieuwste artikelen eerst, zodat het overzicht zichzelf sorteert. */
export function artikelenNieuwsteEerst(): Artikel[] {
  return [...ARTIKELEN].sort((a, b) => b.gepubliceerd.localeCompare(a.gepubliceerd));
}
