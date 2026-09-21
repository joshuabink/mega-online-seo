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
    slug: "website-bezoekers-maar-geen-aanvragen",
    naam: "Bezoekers maar geen aanvragen",
    vraag: "Waarom levert je website wel bezoekers op maar geen aanvragen?",
    pijler: "Zo werkt het echt",
    icoon: "trending-up",
    branche: "Bedrijven met offerteaanvragen",
    teaser:
      "Bezoek en aanvragen zijn twee verschillende dingen. Dit zijn de vier plekken waar het in de praktijk weglekt.",
    antwoord:
      "Omdat bezoek en aanvragen twee verschillende dingen zijn. Bijna altijd geeft de website de bezoeker te weinig om op te beslissen: geen bewijs dat je te vertrouwen bent, geen idee van de prijs of geen makkelijke eerste stap.",
    leestijd: "5 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-09-21",
    secties: [
      {
        kop: "Bezoekers zijn een tussenstap, geen resultaat",
        accent: "geen resultaat",
        alineas: [
          "Twee websites met precies evenveel bezoek kunnen een heel verschillend aantal aanvragen opleveren. Het verkeer is dan niet het verschil, de pagina is het verschil. Wie op bezoekers stuurt, stuurt dus op een getal dat niets zegt over wat er onder de streep bij komt.",
          "Reken het voor jezelf eens door. Stel dat er 500 mensen per maand op je site komen en je krijgt twee aanvragen. Verdubbel je het bezoek naar 1.000, dan krijg je bij dezelfde pagina vier aanvragen. Dat verdubbelen kost maanden werk of advertentiebudget. Zorg je in plaats daarvan dat vier op de honderd bezoekers aanvraagt in plaats van vier op de duizend, dan werkt die verbetering door op al het bezoek dat je nu al hebt. Dit is een rekenvoorbeeld, geen belofte, maar het laat zien welke kant van de rekensom meestal het goedkoopst is.",
        ],
      },
      {
        kop: "Vier plekken waar het in de praktijk weglekt",
        accent: "in de praktijk",
        alineas: [
          "In websitescans zien we vrijwel altijd een combinatie van deze vier. Zelden ligt het aan één ding.",
        ],
        punten: [
          {
            titel: "De bezoeker komt binnen met een andere vraag dan de pagina beantwoordt",
            tekst:
              "Iemand zoekt wat iets kost of hoe snel het kan. Wat hij vindt is een pagina die vooral vertelt hoe lang je bedrijf bestaat. De bezoeker is dan wel binnen, alleen niet geholpen. In Google Search Console zie je op welke zoekvragen je vertoningen krijgt. Passen die vragen niet bij de pagina waarop mensen landen, dan is dat je eerste aanwijzing.",
          },
          {
            titel: "Er staat te weinig op de site om je te durven vertrouwen",
            tekst:
              "Geen gezicht, geen echte foto's, geen prijsindicatie, geen adres of inschrijvingsnummer. Wie jou niet kent heeft geen enkele reden om aan te nemen dat het goed komt. Vertrouwen komt vóór techniek: een snelle website die niets bewijst levert nog steeds niets op.",
          },
          {
            titel: "Het formulier vraagt te veel en te vroeg",
            tekst:
              "Acht velden waarvan de helft pas relevant is als er al een gesprek is geweest. Iemand die twijfelt haakt daar af. Drie velden die vragen wat je echt nodig hebt om terug te bellen leveren meer aanvragen op, ook al voelen ze onvollediger.",
          },
          {
            titel: "Op de telefoon is de eerste stap niet te vinden",
            tekst:
              "De aanvraagknop staat onder een lange hero, het telefoonnummer is geen link of het formulier springt bij het typen. Het grootste deel van je bezoek komt van een telefoon, dus wat daar niet werkt werkt bijna niet.",
          },
        ],
      },
      {
        kop: "Zo zoek je het zelf uit",
        accent: "zelf uit",
        alineas: [
          "Hier heb je geen dure software voor nodig. Vier dingen brengen je verder dan de meeste rapportages.",
          "Tel eerst hoeveel aanvragen je de afgelopen drie maanden kreeg. Zonder dat getal kun je later niet zien of iets werkte. Kijk daarna in Google Search Console welke zoekvragen vertoningen opleveren en of die passen bij de landingspagina. Vul vervolgens je eigen formulier in op je telefoon en tel hoeveel velden en hoeveel tikken het kost. Vraag ten slotte drie klanten wat hen deed besluiten om contact op te nemen. Wat zij noemen staat verrassend vaak nergens op je site.",
        ],
      },
    ],
    doen: [
      "Tel je aanvragen van de laatste drie maanden en schrijf het getal op.",
      "Haal uit je aanvraagformulier elk veld dat je ook in het eerste gesprek kunt vragen.",
      "Zet één zin met een prijsindicatie op je belangrijkste pagina, al is het een vanafprijs.",
      "Vul je eigen formulier in op je telefoon en laat iemand anders het ook proberen.",
      "Zet het antwoord op de vraag die klanten het vaakst stellen boven de vouw.",
    ],
    faq: [
      {
        q: "Hoeveel aanvragen zijn normaal voor mijn website?",
        a: "Er is geen getal dat voor elke branche klopt. Elk percentage dat je online vindt komt uit een andere markt dan de jouwe. Meet daarom je eigen beginpunt: het aantal aanvragen per maand nu. Dat is het enige cijfer waarmee je later kunt vergelijken.",
      },
      {
        q: "Moet ik eerst aan mijn vindbaarheid werken of aan mijn pagina's?",
        a: "Meestal eerst aan de pagina's. Alles wat je daar verbetert werkt door op het bezoek dat je nu al hebt, plus op elke bezoeker die je er later bij haalt. Vindbaarheid vergroten terwijl de pagina niets overbrengt betekent dat je meer mensen naar hetzelfde probleem stuurt.",
      },
      {
        q: "Wat als ik geen idee heb hoeveel aanvragen ik nu krijg?",
        a: "Dan begin je met tellen, desnoods met de hand in een schriftje of een los tabblad. Drie maanden is genoeg om een beginpunt te hebben. Zolang dat getal ontbreekt is elke verbetering een gevoel in plaats van een uitkomst.",
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
    metaTitle: "Waarom levert je website geen aanvragen op? | MegaOnline.io",
    metaDescription:
      "Wel bezoekers, geen aanvragen. De vier plekken waar het in de praktijk weglekt, plus hoe je zelf terugvindt welke het bij jou is.",
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
