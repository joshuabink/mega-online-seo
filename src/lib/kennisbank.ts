import { CTA_SCAN } from "@/lib/cta";

/**
 * Kennisbankartikelen voor /kennisbank.
 *
 * Eén bron voor drie dingen: de kaarten op de overzichtspagina, de
 * artikelpagina (`src/routes/kennisbank/$slug.tsx`) en de Article- plus
 * FAQPage-markup. Laat ze niet uit elkaar lopen, want de zichtbare vragen en
 * de markup horen gelijk te zijn.
 *
 * Nieuw artikel toevoegen: object erbij, slug uniek houden en de URL in
 * `public/sitemap.xml` zetten. `scripts/generate-sitemap.mjs` vult lastmod
 * vanuit `gewijzigd`. De route is dynamisch, dus verder is er niets te registreren.
 *
 * `auteur` is optioneel. Laat het weg of laat het leeg als Joshua Bink de
 * auteur blijft. Alleen een gevulde naam komt in het Article-schema terecht.
 *
 * `cta` kiest de eindknop. Weglaten betekent `scan`. `conceptForm` toont het
 * bestaande conceptformulier na de uitleg, vóór "Wat je morgen kunt doen".
 *
 * `faq` mag leeg zijn of ontbreken. Dan toont de pagina geen FAQ-blok en
 * komt er geen FAQPage in het schema. De tekst "Vijf dingen" in het blok
 * "morgen doen" hoort daar los van en blijft altijd staan.
 *
 * `SMOKE_ARTIKELEN` bestaat alleen op de dev-server. Die pagina's zitten niet
 * in `ARTIKELEN`, dus niet in het overzicht, het menu of de sitemap.
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
  /** Alinea's die ná de opsomming komen, bijvoorbeeld een conclusie. */
  daarna?: string[];
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
  /**
   * Naam in het Article-schema. Leeg of weggelaten houdt Joshua Bink,
   * dezelfde persoon als `#joshua-bink`. Een gevulde naam vervangt die verwijzing.
   */
  auteur?: string;
  /**
   * Eindknop. Alleen `scan`, of weglaten: dat is hetzelfde.
   */
  cta?: "scan";
  /** Kop van de eind-CTA. Weglaten houdt de standaardvraag. */
  eindKop?: string;
  /** Tekst onder die kop. Weglaten houdt de standaardzin. Links als [label](/pad). */
  eindLead?: string;
  /** Conceptformulier na de laatste uitlegsectie, vóór "Wat je morgen kunt doen". */
  conceptForm?: boolean;
  secties: ArtikelSectie[];
  /** Wat de lezer morgen zelf kan doen, ook als hij nooit klant wordt. */
  doen: string[];
  /**
   * Vragen onderaan de pagina. Leeg of weggelaten betekent geen FAQ-blok
   * en geen FAQPage.
   */
  faq?: { q: string; a: string }[];
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
    cta: "scan",
    conceptForm: true,
    secties: [
      {
        kop: "Bezoekers, aanvragen en klanten zijn drie verschillende getallen",
        accent: "drie verschillende getallen",
        alineas: [
          "Een website die geen klanten oplevert heeft zelden een bezoekersprobleem. Twee sites met precies evenveel bezoek kunnen een heel verschillend aantal aanvragen opleveren. Het verkeer is dan niet het verschil, de pagina is het verschil. Wie op bezoekers stuurt, stuurt dus op een getal dat niets zegt over wat er onder de streep bij komt.",
          "Reken het voor jezelf eens door. Stel dat er 500 mensen per maand op je site komen en je krijgt twee aanvragen. Verdubbel je het bezoek naar 1.000, dan levert dezelfde pagina vier aanvragen op. Dat verdubbelen kost maanden werk of advertentiebudget. Zorg je in plaats daarvan dat vier op de honderd bezoekers aanvraagt in plaats van vier op de duizend, dan werkt die verbetering door op al het bezoek dat je nu al hebt. Dit is een rekenvoorbeeld en geen belofte, maar het laat zien welke kant van de rekensom meestal het goedkoopst is. Dat is precies waar [website optimalisatie](/diensten/website-optimalisatie) over gaat.",
          "Begin daarom met één getal: hoeveel aanvragen kreeg je de afgelopen drie maanden? Zolang dat getal ontbreekt is elke verbetering een gevoel in plaats van een uitkomst.",
        ],
      },
      {
        kop: "Zes plekken waar het in de praktijk weglekt",
        accent: "in de praktijk",
        alineas: [
          "Op websites ziet MegaOnline vrijwel altijd een combinatie van deze zes. Zelden ligt het aan één ding. Bijna nooit aan de techniek alleen.",
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
              "Geen gezicht, geen echte foto's van eigen werk, geen adres of inschrijvingsnummer, geen enkele klant die iets zegt. Wie jou niet kent heeft dan geen reden om aan te nemen dat het goed komt. Vertrouwen komt vóór techniek: een snelle website die niets bewijst levert nog steeds niets op. Dit pakt MegaOnline als eerste aan bij een [conversiegerichte website](/diensten/conversie-website).",
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
        kop: "Wat MegaOnline hierin het vaakst terugziet",
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
        q: "Waarom krijg ik geen aanvragen via mijn website?",
        a: "Meestal niet omdat er te weinig mensen komen, maar omdat de pagina ze te weinig geeft om op te beslissen. Bijna altijd is het een combinatie van zes dingen: een pagina die een andere vraag beantwoordt dan de bezoeker stelt, te weinig bewijs dat je te vertrouwen bent, geen prijsindicatie, een formulier dat te veel vraagt, een eerste stap die op de telefoon niet te vinden is en geen duidelijke vervolgstap. Met de vier controles in dit artikel vind je in een uur welke het bij jou is.",
      },
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
    metaTitle: "Waarom krijg je geen aanvragen via je website? | MegaOnline",
    metaDescription:
      "Veel bezoekers, weinig aanvragen. De zes plekken waar het weglekt, hoe je in een uur uitvindt welke het bij jou is en wat je er zelf aan kunt doen.",
  },
  {
    slug: "vertrouwen-wekken-zakelijke-website",
    naam: "Vertrouwen wekken op je website",
    vraag: "Hoe wek je vertrouwen op een zakelijke website?",
    pijler: "Zo werkt het echt",
    icoon: "shield-check",
    branche: "Zakelijke dienstverleners",
    teaser:
      "Vertrouwen is geen gevoel, het is een lijstje dat je bezoeker afvinkt. Dit staat erop. Dit haalt het onderuit.",
    antwoord:
      "Door te laten zien wie je bent, wat het ongeveer kost en wat je eerder hebt gedaan. Vertrouwen op een zakelijke website komt niet van mooie woorden over kwaliteit en passie, maar van bewijs dat een vreemde in twintig seconden kan controleren.",
    leestijd: "7 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-09-21",
    cta: "scan",
    secties: [
      {
        kop: "Vertrouwen is geen gevoel, het is een lijstje dat de bezoeker afvinkt",
        accent: "een lijstje",
        alineas: [
          "Iemand die jouw website voor het eerst opent doet in stilte een risicocontrole. Bestaat dit bedrijf echt. Werkt hier een mens. Weet die persoon waar hij over praat. Wat gaat dit ongeveer kosten. Wat gebeurt er als het misgaat. Pas als die vragen genoeg antwoord hebben gehad, vult iemand een formulier in.",
          "Het lastige is dat bijna elke zakelijke website precies hetzelfde zegt. Kwaliteit, maatwerk, korte lijnen, jarenlange ervaring. Die woorden zijn gratis, dus ze bewijzen niets. Bewijs is alles wat iemand kan controleren zonder jou te bellen: een naam, een gezicht, een prijs, een project dat echt bestaat. Daarom begint een [conversiegerichte website](/diensten/conversie-website) bij MegaOnline met bewijs en niet bij een ontwerp.",
          "Dit geldt sterker naarmate de opdracht groter is. Wie een offerte aanvraagt voor een installatie van tienduizend euro neemt een risico met zijn eigen naam eraan. Zie ook wat dat betekent voor [dienstverleners](/branches/dienstverleners), waar de site het vertrouwen moet wekken dat jij in een gesprek vanzelf wekt.",
        ],
      },
      {
        kop: "Zeven dingen die een zakelijke bezoeker zoekt",
        accent: "zeven dingen",
        alineas: [
          "Dit is geen wensenlijst, dit is wat MegaOnline op websites het vaakst mist. Hoe meer ervan klopt, hoe minder reden iemand heeft om af te haken.",
        ],
        punten: [
          {
            titel: "1. Een mens met een naam",
            tekst:
              "Wie ga ik aan de lijn krijgen. Eén foto van de eigenaar of het team met namen erbij doet meer dan drie alinea's over betrokkenheid. Bij kleine bedrijven is dit het sterkste wat je hebt: bij jou is er geen accountmanager tussen de klant en de maker.",
          },
          {
            titel: "2. Eigen werk in beeld",
            tekst:
              "Foto's van je eigen projecten, machines, ruimtes of geleverde klussen. Ook als ze niet perfect zijn. Een echte foto van een rommelige werkplaats overtuigt meer dan een stockfoto van vier mensen die naar een laptop wijzen.",
          },
          {
            titel: "3. Een prijsindicatie",
            tekst:
              "Geen prijs betekent voor de bezoeker: dit wordt duur, of dit wordt een verkoopgesprek. Een vanafprijs of een bandbreedte houdt niet iedereen weg, het houdt de verkeerde mensen weg. Waarom dat zo werkt staat uitgewerkt in [moet je je prijzen op je website zetten](/kennisbank/prijzen-op-website-verhuurbedrijf).",
          },
          {
            titel: "4. Bedrijfsgegevens die kloppen",
            tekst:
              "Adres, telefoonnummer, inschrijvingsnummer en een mailadres op je eigen domein. Klein detail met groot effect: een formulier dat naar een gratis mailadres stuurt kost vertrouwen bij precies de klanten die je wil hebben.",
          },
          {
            titel: "5. Klanten die iets concreets zeggen",
            tekst:
              "Eén review met naam, bedrijf en wat er precies gedaan is weegt zwaarder dan tien anonieme sterren. Geen toestemming voor de naam? Noem dan de branche en de opdracht. Laat de naam weg in plaats van hem te verzinnen.",
          },
          {
            titel: "6. Duidelijkheid over wat je niet doet",
            tekst:
              "Alles voor iedereen wekt geen vertrouwen. Wie durft te zeggen voor wie hij niet werkt, komt over als iemand die weet wat hij doet. Het scheelt bovendien [offerteaanvragen](/branches/offerteaanvragen) die toch niets worden.",
          },
          {
            titel: "7. Wat er gebeurt nadat iemand op verzenden drukt",
            tekst:
              "Eén zin bij je formulier: je krijgt binnen twee werkdagen antwoord. Je zit nergens aan vast. Onzekerheid over wat er daarna gebeurt is een van de goedkoopst op te lossen redenen om niet te versturen.",
          },
        ],
      },
      {
        kop: "Vier dingen die vertrouwen juist onderuit halen",
        accent: "onderuit halen",
        alineas: [
          "Net zo belangrijk als toevoegen: weghalen. Deze vier ziet MegaOnline vaak op sites die inhoudelijk prima zijn.",
        ],
        punten: [
          {
            titel: "Stockfoto's van mensen die niet bestaan",
            tekst:
              "Bezoekers herkennen ze inmiddels. Eén echte foto van je eigen werk is meer waard dan vijf gelikte beelden die net zo goed bij een ander bedrijf kunnen staan.",
          },
          {
            titel: "Sporen van verwaarlozing",
            tekst:
              "Een jaartal van drie jaar terug in de footer, een nieuwsbericht uit 2022 als laatste item, een pagina met tekst die er nog staat sinds de oplevering. De bezoeker denkt dan: als de site niet wordt bijgehouden, hoe zit het dan met het werk.",
          },
          {
            titel: "Keurmerklogo's zonder betekenis",
            tekst:
              "Voor een webshop kan een keurmerk helpen. Voor een dienstverlener werkt een rij logo's die de bezoeker niet kent vaak averechts, want het lijkt op iets verbergen. Echte certificeringen en branchelidmaatschappen zijn een ander verhaal: noem die met naam.",
          },
          {
            titel: "Te veel keuzes tegelijk",
            tekst:
              "Bellen, mailen, chatten, nieuwsbrief en offerte door elkaar. Drie opties op één pagina voelt niet als service maar als twijfel. Eén duidelijke vervolgstap per pagina maakt de keuze makkelijk.",
          },
        ],
      },
      {
        kop: "Waarom dit vóór snelheid en vindbaarheid komt",
        accent: "vóór snelheid",
        alineas: [
          "Een snelle website die niets bewijst levert nog steeds niets op. Techniek bepaalt of iemand je pagina ziet, vertrouwen bepaalt of hij iets doet. Dat is ook waarom MegaOnline bij een website eerst naar vertrouwen kijkt en pas daarna naar laadtijd.",
          "Het loont daarna dubbel. Elke bezoeker die je met [betere vindbaarheid in Google](/diensten/seo) binnenhaalt komt op een pagina die de twijfel al heeft weggenomen. Andersom werkt het niet: meer bezoek op een pagina die geen bewijs levert betekent alleen meer mensen die weer weggaan.",
        ],
      },
    ],
    doen: [
      "Zet één echte foto van jezelf of je team op je belangrijkste pagina, met naam erbij.",
      "Vervang je eerste stockfoto door een foto van eigen werk, ook als die niet perfect is.",
      "Zet een vanafprijs of bandbreedte op de pagina van je belangrijkste dienst.",
      "Vraag je laatste drie klanten één zin over wat je voor hen deed, met naam en bedrijf.",
      "Schrijf bij je formulier wat er gebeurt na verzenden en binnen hoeveel tijd.",
      "Loop je site na op verouderde jaartallen, oude berichten en teksten die niemand meer leest.",
    ],
    faq: [
      {
        q: "Moet ik reviews op mijn website zetten?",
        a: "Als je ze eerlijk kunt krijgen wel. Eén review met naam, bedrijf en de opdracht erbij doet meer dan een rij sterren zonder bron. Heb je geen toestemming voor de naam, noem dan de branche en de opdracht. Verzin er nooit een bij: dat is precies het soort ding dat een klant later ontdekt.",
      },
      {
        q: "Werken keurmerken voor een zakelijke dienstverlener?",
        a: "Minder dan voor een webshop. Een keurmerk dat je bezoeker niet kent voegt weinig toe. Certificeringen die in jouw vak echt iets betekenen, zoals een vakdiploma of een branchelidmaatschap, werken juist wel. Noem die dan met naam in plaats van als logo zonder uitleg.",
      },
      {
        q: "Moet mijn foto er echt op?",
        a: "Bij een klein bedrijf is het het sterkste bewijs dat je hebt, want de klant koopt bij jou en niet bij een logo. Wil je liever niet op de foto, gebruik dan iets anders dat even persoonlijk is: je naam onder de teksten, een foto van je werkplaats of een korte video waarin je uitlegt hoe je werkt.",
      },
      {
        q: "Hoeveel referenties heb ik nodig?",
        a: "Drie goed uitgewerkte projecten doen meer dan twintig logo's. Wat een bezoeker wil weten is: heeft hij dit eerder gedaan voor iemand zoals ik. Eén project uit zijn eigen branche, met wat er niet werkte en wat het opleverde, beantwoordt die vraag.",
      },
      {
        q: "Helpt een chatfunctie bij vertrouwen?",
        a: "Alleen als er echt iemand antwoordt. Een chat die na twee minuten stil blijft doet meer kwaad dan geen chat, want het is een belofte die je voor de ogen van de bezoeker breekt. Zonder bezetting is een zichtbaar telefoonnummer met een reactietijd beter.",
      },
    ],
    links: [
      {
        to: "/branches/dienstverleners",
        label: "Website laten maken voor dienstverleners",
        tekst: "Wat een zakelijke website nodig heeft om een offerteaanvraag los te maken.",
      },
      {
        to: "/diensten/conversie-website",
        label: "Conversiegerichte website laten maken",
        tekst: "Een site die op bewijs en vertrouwen is gebouwd in plaats van op mooie woorden.",
      },
      {
        to: "/diensten/website-optimalisatie",
        label: "Website optimalisatie",
        tekst: "Je huidige site langs de tien scanpunten, zonder opnieuw te beginnen.",
      },
    ],
    metaTitle: "Vertrouwen wekken op je zakelijke website | MegaOnline.io",
    metaDescription:
      "Vertrouwen komt van bewijs dat een vreemde kan controleren. Zeven dingen die een zakelijke bezoeker zoekt en vier die het onderuit halen.",
  },
  {
    slug: "prijzen-op-website-verhuurbedrijf",
    naam: "Prijzen op je website zetten",
    vraag: "Moet je als verhuurbedrijf je prijzen op de website zetten?",
    pijler: "Mening",
    icoon: "euro",
    branche: "Verhuurbedrijven",
    teaser:
      "Ja, in bijna alle gevallen. Niet je hele prijslijst, wel genoeg dat iemand weet of hij bij jou moet zijn.",
    antwoord:
      "Ja, in bijna alle gevallen wel. Niet je volledige prijslijst, maar een vanafprijs of een bandbreedte per periode, zodat iemand weet of hij bij jou aan het juiste adres is voordat hij de telefoon pakt.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-09-21",
    cta: "scan",
    secties: [
      {
        kop: "De drie redenen om ze weg te laten en wat ervan waar is",
        accent: "wat ervan waar is",
        alineas: [
          "Bijna elke verhuurder die geen prijzen op zijn site heeft staan noemt een van deze drie redenen. Ze zijn allemaal begrijpelijk. Twee ervan houden geen stand.",
          "De eerste: mijn concurrent kijkt mee. Dat doet hij toch al. Wie in jouw markt zit kent je tarieven binnen een paar telefoontjes, of hij vraagt gewoon een offerte aan onder een andere naam. Je verbergt je prijs dus vooral voor de klant, niet voor de concurrent.",
          "De tweede: elke verhuur is anders. Vaak waar. Precies daarom werkt een vanafprijs. Niemand verwacht een exacte prijs voor een samengestelde order. Wel wil hij weten of hij in de buurt van jouw orde van grootte zit. Een tarief per dag, weekend en week met een ondergrens is genoeg om die vraag te beantwoorden.",
          "De derde: ik wil eerst het gesprek. Dat is een echte reden, alleen kost hij je de gesprekken die je juist wil. De klant die zijn budget kent en jouw prijs ziet passen, belt. De klant die niets kan inschatten belt de volgende in Google. Je selecteert zo op mensen met veel tijd in plaats van op mensen die willen huren.",
        ],
      },
      {
        kop: "Wat er in de praktijk gebeurt als de prijs er niet staat",
        accent: "in de praktijk",
        alineas: [
          "Deze vier gevolgen komt MegaOnline steeds tegen bij verhuurders zonder tarieven op de site.",
        ],
        punten: [
          {
            titel: "1. De bezoeker gaat terug naar Google",
            tekst:
              "Niet boos, gewoon verder zoekend. Het tabblad ernaast is een concurrent die wel een tarief noemt. Dit is het stilste verlies dat er bestaat, want je ziet het nergens terug behalve in het aantal aanvragen dat uitblijft.",
          },
          {
            titel: "2. Je telefoon wordt een prijslijst",
            tekst:
              "Dezelfde vraag, tien keer per week, vaak van mensen die alleen even peilen. Dat werk verdwijnt niet door harder te werken, het verdwijnt door het antwoord op te schrijven. Precies waar een [website voor verhuurbedrijven](/branches/verhuurbedrijven) voor bedoeld is: het standaardwerk uit handen nemen.",
          },
          {
            titel: "3. Je maakt offertes die nooit iets worden",
            tekst:
              "Zonder prijsindicatie komen er aanvragen binnen van mensen met een heel ander budget. Elke offerte kost je tijd. Een vanafprijs filtert dat vooraf, net als een formulier dat kwalificeert in plaats van afschrikt bij [meer offerteaanvragen via je website](/branches/offerteaanvragen).",
          },
          {
            titel: "4. Je verliest van een duurdere concurrent",
            tekst:
              "Dat gebeurt vaker dan je denkt. Wie wel een prijs noemt, wekt vertrouwen, ook als hij duurder is. Geen prijs voelt als iets achterhouden. Dat is dezelfde mechaniek als in [vertrouwen wekken op je zakelijke website](/kennisbank/vertrouwen-wekken-zakelijke-website).",
          },
        ],
      },
      {
        kop: "Zo zet je prijzen erop zonder je vast te leggen",
        accent: "zonder je vast te leggen",
        alineas: [
          "Je hoeft geen webshop te worden. Vijf dingen zijn genoeg. Ze kosten je niets aan onderhandelingsruimte.",
        ],
        punten: [
          {
            titel: "Een vanafprijs per artikel of categorie",
            tekst:
              "Vanaf 45 euro per dag zegt genoeg. Zet erbij vanaf wanneer het oploopt, bijvoorbeeld bij bezorging of bij een langere periode, zodat niemand zich later overvallen voelt.",
          },
          {
            titel: "Tarieven per periode naast elkaar",
            tekst:
              "Dag, weekend en week in één tabel. Verhuur wordt in periodes gedacht, dus je prijzen horen in periodes te staan. Dit is ook het blok dat het vaakst wordt gelezen op een verhuurpagina.",
          },
          {
            titel: "Borg en voorwaarden apart en vooraf",
            tekst:
              "Niet in de kleine lettertjes maar naast de prijs. Onduidelijkheid over borg levert discussie op achteraf. Dat kost je meer dan een klant die nu afziet.",
          },
          {
            titel: "Wat wel en niet is inbegrepen",
            tekst:
              "Bezorging, brandstof, schoonmaak, verzekering. Twee regels zijn genoeg. Dit is de vraag die na de prijs altijd komt, dus geef het antwoord ernaast.",
          },
          {
            titel: "Eén rekenvoorbeeld",
            tekst:
              "Een compleet voorbeeld voor een veelgevraagde combinatie, met periode, borg en bezorging erin. Wie zich in dat voorbeeld herkent weet meteen waar hij aan toe is. Komen je tarieven uit een verhuursysteem, dan kan dat via [integraties met je systemen](/diensten/integraties) automatisch actueel blijven.",
          },
        ],
      },
      {
        kop: "Wanneer je ze wel weglaat",
        accent: "wel weglaat",
        alineas: [
          "Er is een uitzondering. Die is kleiner dan de meeste ondernemers denken. Bij echt samengesteld werk, waar de prijs van tien variabelen afhangt en elke opdracht op maat wordt gerekend, is een losse prijs zinloos. Dan zet je geen bedrag neer maar een bandbreedte plus dat rekenvoorbeeld.",
          "Wat je nooit doet is de vraag onbeantwoord laten. Prijs op aanvraag zonder verdere uitleg is het slechtste van twee werelden: de bezoeker weet niets en jij krijgt de vraag alsnog. Eén zin over hoe de prijs wordt opgebouwd is dan het minimum.",
        ],
      },
    ],
    doen: [
      "Zet bij je drie meest verhuurde artikelen een vanafprijs per dag.",
      "Maak één tabel met dag, weekend en week naast elkaar.",
      "Zet borg en voorwaarden naast de prijs in plaats van in een los document.",
      "Schrijf in twee regels wat wel en niet is inbegrepen.",
      "Zet één volledig rekenvoorbeeld op de pagina van je populairste artikel.",
      "Tel de komende twee weken hoeveel telefoontjes nog over de prijs gaan.",
    ],
    faq: [
      {
        q: "Kijkt mijn concurrent dan niet mee?",
        a: "Die kijkt toch al mee. In een markt met een handvol aanbieders kent iedereen elkaars orde van grootte. Wie het niet weet vraagt gewoon een offerte aan. De vraag is dus niet of je concurrent je prijs ziet, maar of je klant hem ziet.",
      },
      {
        q: "Wat als mijn prijzen vaak veranderen?",
        a: "Werk met vanafprijzen en zet erbij per wanneer ze gelden. Verandert er veel en komt het uit een verhuur- of boekingssysteem, dan kun je de tarieven laten meelopen met dat systeem in plaats van ze met de hand bij te werken.",
      },
      {
        q: "Moet ik dan al mijn prijzen tonen?",
        a: "Nee. Je belangrijkste categorieën met een vanafprijs is genoeg om de vraag te beantwoorden. Een complete prijslijst is voor veel verhuurders juist onhandig, want die wordt nooit bijgehouden en is dan sneller fout dan nuttig.",
      },
      {
        q: "Helpt het voor je vindbaarheid in Google?",
        a: "Indirect. Mensen zoeken vaak letterlijk op wat iets kost, dus een pagina die dat beantwoordt past bij die zoekvraag. Belangrijker is dat de bezoeker die binnenkomt blijft in plaats van meteen terug te gaan naar de zoekresultaten.",
      },
      {
        q: "Wat doe ik met kortingen voor vaste klanten?",
        a: "Die noem je als staffel of als afspraak, niet als los bedrag. Bijvoorbeeld: bij meer dan vijf verhuringen per jaar maken we een vaste prijsafspraak. Zo houd je je ruimte en weet de terugkerende klant toch dat er iets te halen is.",
      },
    ],
    links: [
      {
        to: "/branches/verhuurbedrijven",
        label: "Website laten maken voor verhuurbedrijven",
        tekst: "Beschikbaarheid, tarieven en voorwaarden zo neerzetten dat het bellen stopt.",
      },
      {
        to: "/diensten/integraties",
        label: "Website koppelen aan je systemen",
        tekst: "Tarieven en beschikbaarheid automatisch actueel uit je verhuursoftware.",
      },
      {
        to: "/diensten/conversie-website",
        label: "Conversiegerichte website laten maken",
        tekst: "Een site die van beschikbaarheid naar bevestigde verhuur leidt.",
      },
    ],
    metaTitle: "Prijzen op je website zetten als verhuurbedrijf | MegaOnline.io",
    metaDescription:
      "Wel of geen tarieven op je verhuurwebsite? De drie bezwaren, wat er gebeurt als de prijs er niet staat en hoe je hem noemt zonder je vast te leggen.",
  },
  {
    slug: "waar-boekingen-weglekken",
    naam: "Boekingen die weglekken",
    vraag: "Waar lekken boekingen weg op je website?",
    pijler: "Zo werkt het echt",
    icoon: "calendar-check",
    branche: "Bedrijven met reserveringen",
    teaser:
      "Bezoekers die willen boeken en toch afhaken. Tien plekken waar het misgaat en hoe je elk lek in vijf minuten zelf checkt.",
    antwoord:
      "Boekingen lekken weg op plekken waar een bezoeker die wil boeken vastloopt: een knop die nergens heen leidt, een pad met te veel stappen, een prijs die ontbreekt of een site die op de telefoon hapert. Deze gids laat per lek zien wat de bezoeker ziet, waarom het boekingen kost en hoe je het in vijf minuten zelf checkt.\n\nVoor het bredere plaatje over aanvragen in het algemeen is er [waarom je website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op). Deze gids zoomt in op boeken en reserveren.",
    leestijd: "8 minuten",
    gepubliceerd: "2026-10-13",
    gewijzigd: "2026-10-13",
    cta: "scan",
    secties: [
      {
        kop: "Eerst meten, dan repareren",
        accent: "dan repareren",
        alineas: [
          "Zonder meting blijft het gokken. Kijk eerst waar bezoekers stoppen: pagina's met veel bezoek zonder boeking of een boekingsproces waarin mensen afhaken.",
          "Meet één week en noteer drie getallen: hoeveel mensen de boekingspagina openen, hoeveel de boekingsstap starten en hoeveel afronden. Mist één van de drie, dan is nog niet duidelijk of het aan het bezoek, de knop of het afronden ligt.",
        ],
      },
      {
        kop: "Tien plekken waar boekingen weglekken",
        accent: "weglekken",
        alineas: [
          "Elk lek volgt hetzelfde format: wat de bezoeker ziet, waarom het boekingen kost en een zelfcheck van vijf minuten.",
        ],
        punten: [
          {
            titel: "1. Je bent niet vindbaar op de woorden waarmee mensen boeken",
            tekst: `**Wat de bezoeker ziet.** Iemand zoekt "[dienst] [plaats] boeken" of "[dienst] reserveren" en vindt een concurrent. Je homepage bestaat, alleen niet de pagina die bij die zoekvraag past.

**Waarom het boekingen kost.** Wie niet gevonden wordt, komt nooit bij de knop. Een zoeker die wil boeken verwacht een pagina die meteen over boeken, data of beschikbaarheid gaat.

**Zelfcheck (5 minuten).**

1. Schrijf drie zoektermen op waarmee een ideale klant je zou moeten vinden.
2. Zoek ze op je telefoon in een privévenster.
3. Staat je site niet op de eerste pagina? Dan mist die term waarschijnlijk een eigen, duidelijke pagina.`,
          },
          {
            titel: "2. De site werkt slecht op de telefoon",
            tekst: `**Wat de bezoeker ziet.** Knoppen die te klein zijn, horizontaal scrollen, een datumkiezer die niet werkt of tekst die van het scherm valt.

**Waarom het boekingen kost.** Google gebruikt vooral de mobiele versie van een site om pagina's te indexeren en te rangschikken ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)). Een goede pagina-ervaring omvat volgens Google onder meer goed weergeven op mobiel, een beveiligde verbinding en geen opdringerige tussenschermen ([Google Search Central](https://developers.google.com/search/docs/appearance/page-experience)). Wie op de telefoon niet verder komt, kan niet boeken.

**Zelfcheck (5 minuten).**

1. Open je site op je eigen telefoon.
2. Loop het pad van homepage tot boeken of aanvragen.
3. Noteer elke plek waar je moet inzoomen, opzij scrollen of opnieuw beginnen.`,
          },
          {
            titel: "3. De pagina laadt te traag",
            tekst: `**Wat de bezoeker ziet.** Een wit scherm, een trage openingsfoto of een knop die pas na seconden verschijnt.

**Waarom het boekingen kost.** Snelheid beïnvloedt hoe lang bezoekers blijven en of ze verder gaan ([web.dev](https://web.dev/articles/why-speed-matters)). Google noemt een pagina snel genoeg als het grootste zichtbare element binnen 2,5 seconden in beeld staat ([web.dev](https://web.dev/articles/vitals)). Goede scores garanderen geen hogere positie in Google ([Google Search Central](https://developers.google.com/search/docs/appearance/page-experience)).

**Zelfcheck (5 minuten).**

1. Zet wifi uit en open de boekingspagina via mobiele data.
2. Tel tot de belangrijkste foto, titel of knop zichtbaar is.
3. Duurt dat duidelijk langer dan 2,5 seconden? Noteer welke afbeeldingen of scripts de pagina zwaar maken. Dat is een startpunt voor [je bestaande website verbeteren](/diensten/website-optimalisatie).`,
          },
          {
            titel: "4. De boekingsknop is onduidelijk of ontbreekt",
            tekst: `**Wat de bezoeker ziet.** "Meer info", "Lees verder" of helemaal geen hoofdknop. Of drie knoppen die evenveel aandacht vragen.

**Waarom het boekingen kost.** Zonder duidelijke volgende stap begint het boeken niet. Een knoptekst die zegt wat er gebeurt, zoals "Bekijk beschikbaarheid" of "Reserveer nu", laat de bezoeker niet raden.

**Zelfcheck (5 minuten).**

1. Open de homepage op je telefoon.
2. Kijk vijf seconden. Is duidelijk hoe je boekt?
3. Staat de knop in beeld zonder scrollen en is de tekst specifiek? Zo nee: herschrijf de knoptekst en geef hem één vaste plek.`,
          },
          {
            titel: "5. Te veel stappen tot de bevestiging",
            tekst: `**Wat de bezoeker ziet.** Klik na klik: een account aanmaken, tussenschermen, dezelfde gegevens opnieuw invullen, zonder zicht op het einde.

**Waarom het boekingen kost.** Elk scherm is een moment om te stoppen. Niet elk scherm is nodig.

**Zelfcheck (5 minuten).**

1. Tel de kliks van homepage tot "boeking bevestigd" of "aanvraag verzonden".
2. Vraag per scherm: is dit echt nodig?
3. Kan één stap weg of samen met een andere zonder dat de boeking onduidelijk wordt? Begin daar.`,
          },
          {
            titel: "6. Prijzen of beschikbaarheid ontbreken",
            tekst: `**Wat de bezoeker ziet.** Eerst naam, e-mail en telefoon invullen. Pas daarna een prijs of een vrije datum. Of helemaal geen vanafprijs.

**Waarom het boekingen kost.** Wie de prijs of een vrije datum niet ziet, moet gegevens afgeven zonder te weten of het past. In eigen onderzoek naar boekingssites kwamen steeds dezelfde patronen terug, waaronder een prijs die pas na het formulier zichtbaar is of een lege reserveringspagina zonder datum of tarief. Meer hierover staat in [prijzen op je website zetten](/kennisbank/prijzen-op-website-verhuurbedrijf).

**Zelfcheck (5 minuten).**

1. Open de boekings- of dienstpagina zonder iets in te vullen.
2. Zie je een vanafprijs, een tarieftabel of beschikbare data?
3. Zo nee: zet minstens een richtprijs of een link naar vrije data vóór het formulier.`,
          },
          {
            titel: "7. Weinig vertrouwen op het beslismoment",
            tekst: `**Wat de bezoeker ziet.** Twijfel bij het invullen van gegevens of het betalen. Geen recente reviews bij de knop, geen adres, geen annuleringsinformatie en geen uitleg over wat er na het boeken gebeurt.

**Waarom het boekingen kost.** Op het moment van boeken zoekt de bezoeker bevestiging dat het goed komt. Signalen die alleen op de homepage staan, ziet hij op dat moment niet. Meer hierover: [vertrouwen wekken op een zakelijke website](/kennisbank/vertrouwen-wekken-zakelijke-website).

**Zelfcheck (5 minuten).**

1. Scroll naar de boekingsknop of het formulier.
2. Staat er binnen één schermhoogte een review, je adres of je annuleringsbeleid?
3. Ontbreekt dat: zet die informatie ook daar, niet alleen op de homepage.`,
          },
          {
            titel: "8. Het formulier of de boekingsstap werkt niet",
            tekst: `**Wat de bezoeker ziet.** "Reserveer" leidt naar een foutpagina, een leeg formulier of alleen een WhatsApp-nummer. Of de knop doet niets.

**Waarom het boekingen kost.** Een knop die nergens heen leidt, maakt boeken onmogelijk. In eigen onderzoek naar boekingssites was dit een van de patronen die steeds terugkwamen: een Reserveer-knop zonder werkende bestemming, alleen bellen of WhatsApp, of een lege reserveringspagina.

**Zelfcheck (5 minuten).**

1. Klik elke knop met "Boek", "Reserveer" of "Plan" op homepage, menu en dienstpagina's.
2. Kom je uit op een werkend scherm tot bevestiging of "verzonden"?
3. Werkt het niet: repareer die knop eerst, vóór de rest.`,
          },
          {
            titel: "9. Geen opvolging na een bijna-boeking",
            tekst: `**Wat de bezoeker ziet.** Een verzonden aanvraag zonder bevestiging of een belpoging buiten openingstijden. Er komt niets zichtbaars terug.

**Waarom het boekingen kost.** Zonder bevestiging weet de bezoeker niet of de aanvraag is aangekomen. Dan is de kans groot dat hij verder zoekt. Een website die een aanvraag doorzet naar de plek waar je al werkt, zoals je mail of agenda, helpt dat gat te dichten. Lees meer over [je website koppelen aan je eigen systemen](/diensten/integraties).

**Zelfcheck (5 minuten).**

1. Vul je eigen formulier in.
2. Wat gebeurt er direct na verzenden? Staat er een bevestiging en een termijn?
3. Staat er wanneer iemand wordt teruggebeld? Maak dat zichtbaar op de pagina.`,
          },
          {
            titel: "10. Je meet niet waar het misgaat",
            tekst: `**Wat de bezoeker ziet.** Niets. Jij ziet alleen "weinig boekingen", zonder te weten of het aan het bezoek, de knop of het formulier ligt.

**Waarom het boekingen kost.** Zonder meting is niet te zien welk lek het grootste is. Dan gaat tijd naar teksten terwijl de knop kapot is.

**Zelfcheck (5 minuten).**

1. Open je bezoekersstatistieken van de afgelopen 30 dagen.
2. Is te zien hoeveel bezoekers de boekingspagina bereiken en hoeveel afronden?
3. Zo nee: zet die twee metingen eerst aan.`,
          },
        ],
      },
      {
        kop: "Waar begin je?",
        accent: "begin",
        alineas: [
          "Pak niet alles tegelijk aan. Een logische volgorde:",
          `1. **Telefoon en een werkende knop.** Faalt boeken op de telefoon of doet de knop niets, dan helpt de rest weinig.
2. **Stappen, prijzen en beschikbaarheid.** Maak het pad korter en de prijs eerder zichtbaar.
3. **Vindbaarheid en meten.** Zodat nieuwe bezoekers binnenkomen en zichtbaar wordt of een aanpassing werkt.`,
          "Eén lek per week afmaken werkt beter dan tien half. Schrijf op wat er veranderde en kijk na een week opnieuw naar de drie getallen: bereik, start en afronding.",
        ],
      },
      {
        kop: "Wanneer de site zelf het probleem is",
        accent: "het probleem",
        alineas: [
          "Zitten de lekken in de opbouw van de site zelf, dan is repareren soms minder zinvol dan opnieuw kijken naar hoe een [website met reserveringssysteem](/branches/reserveringen) is ingericht. Op die pagina staat wat een [reserveringswebsite](/branches/reserveringen) anders doet dan een gewone bedrijfssite. Voor specifieke branches zijn er ook [websites voor activiteitenbedrijven](/branches/activiteitenbedrijven) en [websites voor verhuurbedrijven](/branches/verhuurbedrijven).",
        ],
      },
    ],
    doen: [
      "Klik elke boek- of reserveerknop op je site en noteer welke niet werkt.",
      "Loop het boekingspad op je telefoon en tel de stappen.",
      "Zet een vanafprijs of beschikbare data vóór het formulier.",
      "Zet een review en je annuleringsbeleid binnen één schermhoogte van de knop.",
      "Noteer een week lang bereik, start en afronding van je boekingspagina.",
    ],
    faq: [
      {
        q: "Hoe check je of de boekingsknop op je website werkt?",
        a: 'Open de site op je telefoon en klik elke "Boek", "Reserveer" of "Plan"-knop. Kom je uit op een scherm waar je kunt afronden of verzenden? Werkt één knop niet, repareer die dan eerst.',
      },
      {
        q: "Eerst meer bezoekers of eerst het boekingsproces verbeteren?",
        a: "Eerst het proces. Meer bezoek op een kapotte knop of een te lang pad levert vooral meer afhakers op. Kijk daarna of er genoeg bezoek binnenkomt op de woorden waarmee mensen boeken.",
      },
      {
        q: "Heb je een volledig boekingssysteem nodig?",
        a: "Dat hangt af van hoe je nu werkt. Sommige bedrijven werken met een kort formulier en een terugbelafspraak, andere hebben live beschikbaarheid nodig. Deze gids gaat over lekken in het pad, niet over welk systeem je kiest.",
      },
    ],
    links: [
      {
        to: "/branches/reserveringen",
        label: "Website met reserveringssysteem",
        tekst:
          "Wat een website voor bedrijven met reserveringen anders inricht dan een gewone bedrijfssite.",
      },
      {
        to: "/diensten/integraties",
        label: "Website koppelen aan je systemen",
        tekst: "Aanvragen komen terecht op de plek waar je al werkt.",
      },
      {
        to: "/diensten/website-optimalisatie",
        label: "Website optimalisatie",
        tekst: "Meer halen uit de website die je al hebt, zonder opnieuw te beginnen.",
      },
    ],
    metaTitle: "Waar boekingen weglekken op je website | MegaOnline.io",
    metaDescription:
      "Bezoekers willen boeken en haken toch af. Tien plekken waar boekingen weglekken, waarom dat gebeurt en per lek een zelfcheck van vijf minuten.",
  },
  {
    slug: "wat-is-seo",
    naam: "Wat is SEO",
    vraag: "Wat is zoekmachineoptimalisatie (SEO)?",
    pijler: "Zo werkt het echt",
    icoon: "search",
    branche: "Algemeen",
    teaser:
      "SEO betekent zoekmachineoptimalisatie. Wat het is volgens Google, hoe zoeken werkt in drie stappen en een zelfcheck van vijf minuten.",
    antwoord:
      "SEO staat voor search engine optimization, in het Nederlands zoekmachineoptimalisatie. Volgens Google gaat SEO erom zoekmachines te helpen je content te begrijpen en bezoekers te helpen je site te vinden en te beoordelen of een bezoek de moeite waard is ([Google Search Central, SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).\n\nDit artikel legt uit wat SEO is, hoe Google Search in grote lijnen werkt en wat je zelf kunt checken. Voor doorlopend werk aan vindbaarheid staat de dienst [SEO en GEO](/diensten/seo).",
    leestijd: "7 minuten",
    gepubliceerd: "2026-10-14",
    gewijzigd: "2026-10-14",
    cta: "scan",
    secties: [
      {
        kop: "Wat SEO wél is (en wat niet)",
        accent: "wél",
        alineas: [
          "SEO is het verbeteren van je aanwezigheid in zoekresultaten: content die nuttig is, een site die crawlbaar is en signalen die laten zien waar een pagina over gaat. Google noemt dat de stap ná de basisregels om überhaupt in aanmerking te komen voor zoekresultaten ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
          "SEO is geen knop die je omzet naar plaats één. Google schrijft expliciet dat er geen geheimen zijn die een site automatisch bovenaan zetten ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). Google accepteert geen betaling om een site vaker te crawlen of hoger te ranken ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)).",
          "Ook indexing is niet gegarandeerd: niet elke pagina die Google verwerkt komt in de index ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)).",
        ],
      },
      {
        kop: "Hoe Google Search werkt (drie stappen)",
        accent: "drie stappen",
        alineas: [
          "Google beschrijft Search in drie fases. Niet elke pagina haalt elke fase ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)):",
          `1. **Crawlen.** Programma's (crawlers) ontdekken URL's en downloaden pagina's. Nieuwe pagina's komen vaak via links vanaf pagina's die Google al kent of via een sitemap.
2. **Indexeren.** Google analyseert tekst, afbeeldingen en video's en slaat informatie op in de index. Daarbij wordt ook gekeken welke URL de canonieke versie is bij overlappende content.
3. **Resultaten tonen.** Bij een zoekopdracht selecteert Google relevante resultaten. Relevantie hangt van veel factoren af, onder meer locatie, taal en apparaat van de zoeker.`,
          "Voor de praktijk betekent dit: een pagina moet vindbaar zijn (links of sitemap), leesbaar voor de crawler (geen blokkade in robots of loginmuur) en inhoudelijk duidelijk over het onderwerp.",
        ],
      },
      {
        kop: "Waar SEO in de praktijk over gaat",
        accent: "in de praktijk",
        alineas: [
          "Uit de Starter Guide van Google komen terugkerende thema's die geen trucs zijn maar basiswerk:",
        ],
      },
      {
        kop: "Content die mensen helpt",
        accent: "mensen helpt",
        alineas: [
          "Tekst die helder is, uniek en bijgewerkt. Content die voor mensen geschreven is, niet door woorden eindeloos te herhalen. Keyword stuffing valt onder Googles spambeleid ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
        ],
      },
      {
        kop: "Techniek die crawlen niet in de weg zit",
        accent: "niet in de weg",
        alineas: [
          "Google moet de pagina kunnen zien zoals een bezoeker die ziet, inclusief CSS en JavaScript waar die inhoud tonen. De URL-inspectietool in Search Console helpt om te checken wat Google ziet ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
        ],
      },
      {
        kop: "Hoe de site eruitziet in de resultaten",
        accent: "in de resultaten",
        alineas: [
          "De title-link en de snippet helpen iemand te beslissen of een klik zinvol is. Goede titles zijn uniek, duidelijk en beschrijven de pagina. De meta description kan meewerken aan de snippet ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
        ],
      },
      {
        kop: "Links die ontdekking mogelijk maken",
        accent: "ontdekking",
        alineas: [
          "Google vindt de meeste nieuwe pagina's via links. Interne links helpen bezoekers én crawlers. Ankertekst die zegt waar de link naartoe gaat, maakt dat duidelijker ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
        ],
      },
      {
        kop: "Hoe lang duurt het voor je iets merkt?",
        accent: "iets merkt",
        alineas: [
          "Google schrijft dat sommige wijzigingen binnen enkele uren zichtbaar zijn en andere maanden kunnen duren. Als richtlijn: vaak een paar weken wachten voordat je beoordeelt of iets in de zoekresultaten hielp ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)). Niet elke wijziging levert een zichtbaar verschil op.",
          "Dat is waarom doorlopend werken aan pagina's en meten in Search Console hoort bij serieus SEO-werk en niet een eenmalige optimalisatie zonder opvolging.",
        ],
      },
      {
        kop: "Zelfcheck (5 minuten)",
        accent: "5 minuten",
        alineas: [
          `1. Zoek op Google met \`site:jouwdomein.nl\` of je site überhaupt in de index staat ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).
2. Open één belangrijke dienstpagina op je telefoon. Is binnen enkele seconden duidelijk wat je doet en wat de volgende stap is?
3. Lees de title in het browsertabblad. Beschrijft die deze ene pagina, of is het een generieke bedrijfsnaam op elke URL?
4. Check of die pagina vanaf de homepage of een menu bereikbaar is (zonder dat je de URL al kent).
5. Noteer één zoekvraag waarmee een ideale klant je zou moeten vinden. Past er een pagina bij die die vraag beantwoordt?`,
        ],
      },
      {
        kop: "Wanneer de basis niet genoeg is",
        accent: "niet genoeg",
        alineas: [
          "Zit de winst in structureel betere vindbaarheid (juiste zoektermen, maandelijkse nieuwe pagina's, meten), dan past doorlopend werk beter dan alleen een definitie lezen. Op [SEO en GEO](/diensten/seo) staat hoe MegaOnline dat als traject inricht. Voor lekken in aanvragen of boekingen op de site zelf zijn er ook [waarom je website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op) en [waar boekingen weglekken](/kennisbank/waar-boekingen-weglekken).",
        ],
      },
    ],
    doen: [
      "Doe de `site:`-zoekopdracht en noteer of je kernpagina's zichtbaar zijn.",
      "Schrijf drie zoektermen van klanten op en check of er een passende pagina voor bestaat.",
      "Verbeter één title die nu te vaag of te lang is.",
      "Zet één interne link van een drukke pagina naar een belangrijke dienstpagina, met een ankertekst die het onderwerp noemt.",
    ],
    faq: [
      {
        q: "Wat betekent SEO precies?",
        a: "SEO is de Engelse afkorting van search engine optimization. In het Nederlands: zoekmachineoptimalisatie. Het gaat erom zoekmachines je content te laten begrijpen en mensen te helpen je site te vinden ([Google Search Central](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
      },
      {
        q: "Is SEO hetzelfde als Google Ads?",
        a: "Nee. SEO gaat over organische (niet-betaalde) zichtbaarheid in zoekresultaten. Google Ads is betaalde advertentieruimte. Google accepteert geen betaling om organische ranking te kopen ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)).",
      },
      {
        q: "Kan iemand een plek bovenaan in Google garanderen?",
        a: "Nee. Google garandeert geen crawl, index of weergave van een pagina, ook niet als je de basisregels volgt ([How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works)). Wie een vaste toppositie belooft, belooft iets dat Google zelf niet toezegt.",
      },
      {
        q: "Wat is het verschil tussen SEO en GEO?",
        a: "SEO gaat over vindbaarheid in klassieke zoekmachines zoals Google. GEO (generative engine optimization) gaat over zichtbaarheid in antwoorden van AI-zoekmachines. Op MegaOnline horen beide bij hetzelfde traject op [SEO en GEO](/diensten/seo). Dit artikel blijft bij de definitie van SEO.",
      },
    ],
    links: [
      {
        to: "/diensten/seo",
        label: "SEO en GEO",
        tekst: "Doorlopend werken aan vindbaarheid in Google en AI, met een vast contentplan.",
      },
      {
        to: "/kennisbank/website-levert-geen-aanvragen-op",
        label: "Website levert geen aanvragen op",
        tekst: "Als bezoekers wel komen maar niet aanvragen.",
      },
      {
        to: "/diensten/conversie-website",
        label: "Conversie Website",
        tekst: "Een website die bezoekers naar aanvraag of boeking begeleidt.",
      },
    ],
    metaTitle: "Wat is zoekmachineoptimalisatie (SEO)? | MegaOnline",
    metaDescription:
      "SEO is zoekmachineoptimalisatie: zoekmachines helpen je content te begrijpen zodat mensen je site vinden. Wat het is, hoe Google werkt en wat je zelf checkt.",
  },
  {
    slug: "freelance-webdesigner-of-webbureau",
    naam: "Freelance webdesigner of webbureau",
    vraag: "Freelance webdesigner of webbureau: wat past bij jouw bedrijf?",
    pijler: "Zo werkt het echt",
    icoon: "users",
    branche: "Algemeen",
    teaser:
      "Freelancer of webbureau? De eerlijke voor- en nadelen, wanneer welke keuze past en een checklist om zelf te kiezen.",
    antwoord:
      "Kies een freelance webdesigner als je project overzichtelijk is, je één vast aanspreekpunt wilt en je site na oplevering weinig verandert. Kies een webbureau als je meerdere vakgebieden nodig hebt, je site je belangrijkste bron van aanvragen is of uitval je direct klanten kost. Kwaliteit hangt aan mensen, niet aan de bedrijfsvorm.",
    leestijd: "7 minuten",
    gepubliceerd: "2026-10-15",
    gewijzigd: "2026-10-15",
    cta: "scan",
    secties: [
      {
        kop: "Wat is het verschil tussen een freelancer en een webbureau?",
        accent: "verschil",
        alineas: [
          "Een freelance webdesigner is één zelfstandige. Hij voert het gesprek, maakt het ontwerp, bouwt de site en doet meestal ook de nazorg. Soms werkt hij met een vaste tekstschrijver of fotograaf, maar de verantwoordelijkheid ligt bij één persoon.",
          "Een webbureau is een bedrijf met meerdere mensen die elk een eigen rol hebben. Denk aan een ontwerper, een bouwer en iemand voor teksten of vindbaarheid. Bij grotere bureaus komen daar een projectleider en een accountmanager bij.",
          '"Bureau" is een breed begrip. Het kan gaan om twee mensen of om een groot bedrijf met een eigen afdeling voor strategie. Vraag dus altijd hoe groot de partij is en wie er aan jouw site werkt.',
        ],
      },
      {
        kop: "Wat zijn de voordelen van een freelance webdesigner?",
        accent: "voordelen",
        alineas: [],
        punten: [
          {
            titel: "Je praat met de maker.",
            tekst: "Wat je bespreekt, hoeft niet via iemand anders te worden doorgegeven.",
          },
          {
            titel: "Snel schakelen.",
            tekst: "Er is weinig intern overleg. Een kleine wijziging is vaak snel geregeld.",
          },
          {
            titel: "Minder organisatie in de prijs.",
            tekst:
              "Een freelancer hoeft geen kantoor, projectleider of accountmanager door te berekenen. Daardoor ligt het tarief vaak lager. Hoe groot dat verschil is, verschilt per partij.",
          },
          {
            titel: "Geschikt voor afgebakende klussen.",
            tekst:
              "Een paar pagina's erbij of een nieuwe uitstraling voor een bestaande site vraagt geen grote organisatie.",
          },
        ],
      },
      {
        kop: "Wat zijn de nadelen van een freelancer?",
        accent: "nadelen",
        alineas: [],
        punten: [
          {
            titel: "Alles hangt aan één persoon.",
            tekst: "Bij ziekte, vakantie of drukte ligt je project of je onderhoud stil.",
          },
          {
            titel: "Een volle agenda.",
            tekst: "Komt er een groter project tussendoor, dan kan het jouwe opschuiven.",
          },
          {
            titel: "Eén persoon is zelden overal even sterk in.",
            tekst: "Ontwerp, techniek, teksten en vindbaarheid in Google zijn vier verschillende vakken.",
          },
          {
            titel: "Afspraken regel je vaker zelf.",
            tekst: "Denk aan overdracht, documentatie en wie de site overneemt als het nodig is.",
          },
        ],
      },
      {
        kop: "Wat zijn de voordelen van een webbureau?",
        accent: "webbureau",
        alineas: [],
        punten: [
          {
            titel: "Meerdere vakgebieden onder één dak.",
            tekst: "Ontwerp, bouw, teksten en vindbaarheid worden door verschillende mensen gedaan.",
          },
          {
            titel: "Opvang bij uitval.",
            tekst:
              "Valt iemand weg, dan kan een ander verder. Dat werkt alleen als het werk intern goed is vastgelegd.",
          },
          {
            titel: "Planbaarheid.",
            tekst:
              "Meerdere mensen kunnen tegelijk aan je site werken. Bij een harde deadline is dat prettig.",
          },
          {
            titel: "Vaker een vaste afspraak voor onderhoud.",
            tekst: "Updates, back-ups en kleine wijzigingen zijn dan geregeld.",
          },
        ],
      },
      {
        kop: "En wat zijn de nadelen van een bureau?",
        accent: "nadelen",
        alineas: [],
        punten: [
          {
            titel: "Een hogere prijs.",
            tekst: "Je betaalt mee aan de organisatie: projectbegeleiding, vervanging en beschikbaarheid.",
          },
          {
            titel: "Contact via een tussenpersoon.",
            tekst:
              "Bij veel bureaus spreek je een projectleider of accountmanager en niet degene die bouwt.",
          },
          {
            titel: "Meer proces.",
            tekst: "Een extra wens loopt vaak via een vaste route met een nieuwe offerte.",
          },
          {
            titel: "Je kunt een kleine klant zijn.",
            tekst:
              "Bij een groot bureau krijgt een klein project niet altijd dezelfde aandacht als een groot.",
          },
        ],
      },
      {
        kop: "Wat kost een freelancer of een bureau?",
        accent: "kost",
        alineas: [
          "Dat verschilt sterk per persoon, ervaring en opdracht. Vergelijkingssites noemen bedragen die flink van elkaar afwijken, vaak zonder bron. Daarom staan hier geen tarieven.",
          "Belangrijker dan het bedrag is wat erin zit. Een lage offerte zonder teksten, zonder basis voor vindbaarheid en zonder nazorg is niet goedkoper. Hij is alleen minder compleet. Vergelijk daarom altijd wat er af is bij oplevering en wat je daarna nog moet betalen.",
        ],
      },
      {
        kop: "Wanneer past een freelancer beter?",
        accent: "freelancer",
        alineas: [
          `1. Je site heeft een beperkt aantal pagina's en geen zware koppelingen.
2. Je levert zelf teksten en foto's aan.
3. Je wilt één vast aanspreekpunt dat het hele project doet.
4. Je site verandert na oplevering weinig.
5. Je zoekt iemand voor één ding, zoals alleen het ontwerp.`,
        ],
      },
      {
        kop: "Wanneer past een webbureau beter?",
        accent: "webbureau",
        alineas: [
          `1. Je project vraagt ontwerp, techniek, teksten en vindbaarheid tegelijk en je wilt dat niet zelf coördineren.
2. Je website is je belangrijkste bron van aanvragen of boekingen. Stilstand kost je klanten.
3. Je wilt de komende jaren doorbouwen, bijvoorbeeld met een boekingssysteem of een koppeling met je planning.
4. Je hebt een harde deadline en planbaarheid weegt zwaarder dan snelheid.
5. Er praten meerdere mensen in je bedrijf mee over de site.`,
        ],
      },
      {
        kop: "Waar let je op, wie je ook kiest?",
        accent: "let je op",
        alineas: [
          "Deze punten gelden voor een freelancer en een bureau. Ook voor MegaOnline.",
          `1. **Eigendom.** De domeinnaam staat op jouw naam. Je hebt zelf toegang tot hosting en beheer. Leg vast dat de site na betaling van jou is.
2. **Dezelfde inhoud vergelijken.** Zet offertes naast elkaar op teksten, vindbaarheid, testen, nazorg en de prijs van latere wijzigingen.
3. **Wie doet het werk?** Vraag wie je aanspreekpunt is, wie bouwt en wie het overneemt bij uitval.
4. **Echt werk bekijken.** Kijk naar live websites, niet alleen naar ontwerpen. Vraag een klant die al een tijd met de partij werkt naar zijn ervaring. Waar je op een site op let, lees je in [hoe je vertrouwen wekt op een zakelijke website](/kennisbank/vertrouwen-wekken-zakelijke-website).
5. **Na livegang.** Vraag wat er gebeurt als de site online staat. Wie houdt hem veilig en bijgewerkt? Wie werkt aan vindbaarheid?`,
        ],
      },
      {
        kop: "Beslischecklist: freelancer of bureau?",
        accent: "Beslischecklist",
        alineas: [
          "Beantwoord deze zes vragen met ja of nee.",
          `1. Is je website de belangrijkste plek waar aanvragen of boekingen binnenkomen?
2. Heb je naast ontwerp en bouw ook hulp nodig bij teksten of vindbaarheid?
3. Wil je de site de komende jaren uitbreiden?
4. Kost een week stilstand je klanten?
5. Wil je na oplevering iemand die de site bijhoudt en verbetert?
6. Praten er meerdere mensen in je bedrijf mee?`,
          "Vooral nee? Dan is een goede freelancer met heldere afspraken over overdracht een prima keuze. Vooral ja? Kijk dan naar een partij die meerdere vakgebieden in huis heeft en ook na livegang betrokken blijft.",
        ],
      },
      {
        kop: "Waar staat MegaOnline in dit verhaal?",
        accent: "MegaOnline",
        alineas: [
          "Eerlijk vooraf: MegaOnline is geen neutrale partij. MegaOnline is opgericht door Joshua Bink en is klein van opzet. Je spreekt direct met Joshua, zonder accountmanagers of tussenlagen. MegaOnline werkt met een beperkt aantal bedrijven tegelijk.",
          "MegaOnline bouwt vooral voor bedrijven die afhankelijk zijn van aanvragen, reserveringen en boekingen. Na livegang kun je blijven voor onderhoud en voor [vindbaarheid in Google en AI-zoekmachines](/diensten/seo). Dat is geen verplichting. Na oplevering en betaling is de website van jou, dus je zit niet vast aan MegaOnline.",
          "In contact lijkt MegaOnline dus op een freelancer: je spreekt de maker zelf. Stel daarom dezelfde vragen als aan iedere andere partij, ook wie het werk doet en wat er gebeurt bij ziekte of vakantie. Meer over de werkwijze lees je op [Over MegaOnline](/over-megaonline).",
          "Wil je weten waar jouw huidige site staat voordat je kiest? Vraag een [gratis website scan](/gratis-websitescan) aan. Binnen 5 werkdagen krijg je een rapport. Dat wordt daarna toegelicht in een persoonlijk videogesprek. Je krijgt eerlijk advies, ook als de conclusie is dat je MegaOnline (nog) niet nodig hebt.",
        ],
      },
    ],
    doen: [
      "Zet de domeinnaam op jouw naam en controleer of je zelf in hosting en beheer kunt.",
      "Leg offertes naast elkaar op dezelfde inhoud: teksten, vindbaarheid, testen, nazorg en de prijs van latere wijzigingen.",
      "Vraag wie bouwt, wie je aanspreekpunt is en wie het overneemt bij ziekte of vakantie.",
      "Bekijk live websites van de partij en vraag een bestaande klant naar zijn ervaring.",
      "Beantwoord de zes vragen uit de checklist. Vooral nee wijst naar een freelancer, vooral ja naar een partij met meerdere vakgebieden.",
    ],
    faq: [
      {
        q: "Is een freelancer altijd goedkoper dan een bureau?",
        a: "Per uur vaak wel, omdat er minder organisatie omheen zit. Per project kan het verschil kleiner zijn. Een offerte waar teksten, vindbaarheid of nazorg ontbreken lijkt goedkoper, maar die onderdelen betaal je later alsnog. Vergelijk daarom op dezelfde inhoud.",
      },
      {
        q: "Levert een bureau betere kwaliteit?",
        a: "Niet per definitie. Een ervaren freelancer kan beter werk leveren dan een middelmatig bureau. Beoordeel live werk, referenties en de manier van werken, niet de bedrijfsvorm.",
      },
      {
        q: "Wat gebeurt er als je freelancer stopt of ziek wordt?",
        a: "Dan kan je project vertragen tot er een oplossing is. Je beperkt dat risico als de domeinnaam en accounts op jouw naam staan, je toegang hebt tot hosting en beheer en belangrijke keuzes zijn vastgelegd.",
      },
      {
        q: "Kun je later overstappen naar een andere partij?",
        a: "Meestal wel, als je site in een gangbaar systeem is gebouwd en je alle toegangen hebt. Ontbreekt dat, dan kan een overstap uitlopen op gedeeltelijke herbouw. Regel dit dus aan het begin.",
      },
    ],
    links: [
      {
        to: "/kennisbank/vertrouwen-wekken-zakelijke-website",
        label: "Vertrouwen wekken op je website",
        tekst: "Waar je op een zakelijke website op let voordat je een partij kiest.",
      },
      {
        to: "/over-megaonline",
        label: "Over MegaOnline",
        tekst: "Hoe MegaOnline werkt en wie je spreekt.",
      },
      {
        to: "/diensten/seo",
        label: "SEO en GEO",
        tekst: "Vindbaarheid in Google en AI-zoekmachines, als je daar na livegang mee verder wilt.",
      },
      {
        to: "/gratis-websitescan",
        label: "Gratis website scan",
        tekst: "Een rapport over je huidige site, voordat je een freelancer of bureau kiest.",
      },
    ],
    metaTitle: "Freelance webdesigner of webbureau: wat past? | MegaOnline",
    metaDescription:
      "Freelancer of webbureau voor je website? De eerlijke voor- en nadelen van allebei, wanneer welke keuze past en een korte checklist om zelf te kiezen.",
  },
  {
    slug: "gevonden-worden-in-chatgpt",
    naam: "Gevonden worden in ChatGPT",
    vraag: "Hoe word je als mkb'er gevonden in ChatGPT?",
    pijler: "Zo werkt het echt",
    icoon: "search",
    branche: "Algemeen",
    teaser:
      "Hoe word je als mkb'er genoemd in ChatGPT en het AI-overzicht van Google? Eigen metingen en wat je vandaag kunt doen.",
    antwoord:
      "Door eerst goed vindbaar te zijn in zoekmachines en daarnaast op meer plekken dan je eigen website te staan. ChatGPT kan live op het web zoeken en het AI-overzicht van Google haalt pagina's uit de zoekindex van Google. Wie daar niet in staat, wordt minder snel genoemd.\n\n\"Ik vroeg het even aan ChatGPT.\" Zegt een klant dat, dan heeft een installateur in Gouda of een verhuurbedrijf in Utrecht een nieuwe vraag: hoe kom je in dat ene antwoord terecht? Hieronder lees je wat eigen metingen laten zien, wat Google en OpenAI erover zeggen en wat je vandaag kunt doen. Zonder trucs en zonder beloftes, want niemand kan garanderen dat een AI jouw bedrijf noemt.",
    leestijd: "7 minuten",
    gepubliceerd: "2026-10-15",
    gewijzigd: "2026-10-15",
    cta: "scan",
    eindKop: "Wil je weten hoe jouw website ervoor staat, ook voor AI-zoekmachines?",
    eindLead:
      "Vraag de [gratis website scan](/gratis-websitescan) aan. Binnen 5 werkdagen krijg je een rapport en wordt de uitkomst met je besproken in een persoonlijk videogesprek.",
    secties: [
      {
        kop: "Hoe kiest een AI-zoekmachine welke bedrijven hij noemt?",
        accent: "kiest",
        alineas: [
          "Een AI-zoekmachine zet je vraag om in een of meer zoekopdrachten, leest de pagina's die daaruit komen en schrijft een samenvatting met links. Google noemt dat query fan-out. OpenAI schrijft dat ChatGPT je vraag herschrijft tot zoekopdrachten en daarvoor samenwerkt met zoekpartners, waaronder Microsoft (OpenAI Help, gelezen 15-10-2026).",
          "Voor een link in AI Overviews of AI Mode moet een pagina in de index van Google staan en met een tekstfragment getoond kunnen worden (Google Search Central). Een AI noemt dus vooral bedrijven die hij op het web tegenkomt: op je eigen site en op plekken waar anderen over je schrijven.",
        ],
      },
      {
        kop: "Zoekt ChatGPT bij elke vraag op het web?",
        accent: "ChatGPT",
        alineas: [
          "Nee. Het Amerikaanse marketingbureau Nectiv liet in oktober 2025 ruim 8.500 koopgerichte vragen door zijn eigen meettool lopen. ChatGPT zocht bij 31% daarvan op het web, gemiddeld 2,17 keer per vraag. Bij lokale vragen was dat 59%. Het gaat om data van één bureau, niet om Nederlands onderzoek. Toch wijst het erop dat een vraag als 'goede installateur in Gouda' vaak tot een zoekopdracht leidt.",
        ],
      },
      {
        kop: "Wat twee kleine steekproeven laten zien",
        accent: "steekproeven",
        alineas: [
          "MegaOnline test dit sinds september ook voor de eigen site. Het gaat om kleine steekproeven, elk op één dag. AI-antwoorden verschillen per persoon, moment en formulering. Zie het als momentopname, niet als bewijs.",
        ],
        punten: [
          {
            titel: "Steekproef 1: webbureaus (1 oktober 2026).",
            tekst:
              '10 vragen aan ChatGPT, uitgelogd, elke vraag in een nieuw gesprek. Bijvoorbeeld: "Wat is een goed klein webbureau voor mkb-bedrijven met reserveringen in de buurt van Gouda?" MegaOnline werd in 0 van de 10 antwoorden genoemd (één antwoord bleef leeg). Dat past bij een controle op 26 september: MegaOnline stond toen in geen van de 12 bekeken gidsen. Dat is het gat dat dit artikel beschrijft en het nulpunt voor de eigen metingen. Bij vragen over boekingswebsites noemde ChatGPT naast bureaus ook softwareleveranciers met een eigen pagina per branche.',
          },
          {
            titel: "Steekproef 2: een nieuwe Nederlandse vergelijkingssite (5 oktober 2026).",
            tekst:
              "8 vragen in ChatGPT (uitgelogd, nieuw gesprek per vraag), Gemini en Google (allebei ingelogd, dus mogelijk persoonlijk gekleurd). Samen 24 antwoorden. De site stond toen nog niet aantoonbaar in Google of Bing en werd in 1 antwoord genoemd. Het AI-overzicht van Google verscheen bij alle 8 vragen. Vaak terugkerende bronnen: Bedrijfssoftwaregids, Appwiki en SoftwareKiezer.",
          },
        ],
        daarna: [
          "De voorzichtige conclusie: alleen een eigen website was in deze twee tests niet genoeg om genoemd te worden. De antwoorden leunden zichtbaar op gidsen, vergelijkingssites en leveranciers met een pagina per branche. Een richting, geen regel.",
        ],
      },
      {
        kop: "Wat Google zelf zegt over AI-zoekresultaten",
        accent: "Google",
        alineas: [],
        punten: [
          {
            titel: "Gewone vindbaarheid blijft de basis.",
            tekst:
              "Volgens Google is optimaliseren voor AI in Google Search gewoon SEO: laat zoekmachines je pagina's lezen, link je pagina's goed onderling en zet belangrijke inhoud als tekst op de pagina (AI-optimalisatiegids, bijgewerkt 10-07-2026).",
          },
          {
            titel: "Eén instelling in Search Console.",
            tekst:
              "Je site moet bij de instelling voor generatieve AI op 'opnemen' staan. Dat is de standaard, dus meestal hoef je niets te doen (Search Console Help, uitgerold per 31-08-2026).",
          },
          {
            titel: "Schrijf wat alleen jij kunt schrijven.",
            tekst: "Google waardeert een eigen invalshoek en praktijkervaring boven algemene tips.",
          },
          {
            titel: "Maak niet voor elke zoekvariant een pagina.",
            tekst:
              "Veel bijna gelijke pagina's om AI-antwoorden te sturen valt onder misbruik door massaal gemaakte content.",
          },
          {
            titel: "Houd je Bedrijfsprofiel actueel.",
            tekst:
              "Google noemt het als hulp voor zichtbaarheid in AI-antwoorden. Het kan alleen als je klanten persoonlijk contact biedt; bedrijven die alleen online werken komen niet in aanmerking.",
          },
          {
            titel: "Nepvermeldingen leveren weinig op.",
            tekst: "Het najagen van onechte vermeldingen helpt volgens Google minder dan het lijkt.",
          },
        ],
      },
      {
        kop: "Zo vergroot je je kans, stap voor stap",
        accent: "stap voor stap",
        alineas: [],
        punten: [
          {
            titel: "1. Laat zoekmachines en AI-crawlers binnen.",
            tekst:
              "Controleer je robots.txt. OpenAI raadt aan OAI-SearchBot toe te laten als je in de zoekresultaten van ChatGPT wilt verschijnen. Vraag je webbouwer of een beveiligingsinstelling geen bots tegenhoudt.",
          },
          {
            titel: "2. Meld je site aan bij Google en Bing.",
            tekst:
              "Gebruik Google Search Console en Bing Webmaster Tools en dien je sitemap in. Kijk in Search Console of de instelling voor generatieve AI op 'opnemen' staat.",
          },
          {
            titel: "3. Beantwoord de vraag bovenaan.",
            tekst:
              "Begin elke pagina met het antwoord in één of twee zinnen. Noem daarna concrete feiten: wat je doet, voor wie, in welk gebied en hoe het werkt.",
          },
          {
            titel: "4. Zorg dat je bedrijf overal hetzelfde heet.",
            tekst:
              "Gebruik dezelfde naam, contactgegevens en omschrijving op je site, LinkedIn, de KvK en in gidsen. Lijkt je naam op die van een ander bedrijf? Noem dan ook je domeinnaam. Dat helpt om het verschil duidelijk te maken.",
          },
          {
            titel: "5. Sta ook op andere plekken dan je eigen site.",
            tekst:
              "Een actueel Bedrijfsprofiel als je daarvoor in aanmerking komt, een paar relevante gidsen of branchesites, je brancheorganisatie. In de tweede steekproef kwamen vooral gidsen en vergelijkingssites terug als bron. Vraag tevreden klanten om een eerlijke review. Meer daarover in [Hoe wek je vertrouwen op een zakelijke website?](/kennisbank/vertrouwen-wekken-zakelijke-website)",
          },
          {
            titel: "6. Meet het zelf, op een vaste manier.",
            tekst:
              "Kies 10 vragen die je klanten zouden stellen. Stel ze elke maand opnieuw, uitgelogd en in een nieuw gesprek. Noteer of je genoemd wordt en welke bronnen erbij staan. Kijk naar het patroon over maanden.",
          },
        ],
      },
      {
        kop: "En je aanvragen dan?",
        accent: "aanvragen",
        alineas: [
          "Genoemd worden is pas de eerste stap. Wie via ChatGPT op je site komt, moet snel zien wat je doet en hoe hij contact opneemt. Waar het daarna vaak misgaat lees je in [Waarom levert je website geen aanvragen of klanten op?](/kennisbank/website-levert-geen-aanvragen-op) Meer over vindbaarheid in Google en AI lees je bij [SEO en GEO](/diensten/seo).",
        ],
      },
    ],
    doen: [
      "robots.txt blokkeert geen zoekmachines of AI-zoekcrawlers",
      "Site aangemeld in Google Search Console en Bing Webmaster Tools, sitemap ingediend, instelling voor generatieve AI op 'opnemen'",
      "Elke dienstpagina begint met een direct antwoord en concrete feiten",
      "Naam, contactgegevens en omschrijving overal gelijk",
      "Elke maand dezelfde 10 vragen getest en genoteerd",
    ],
    faq: [
      {
        q: "Kan een bureau garanderen dat ChatGPT mijn bedrijf noemt?",
        a: "Nee. OpenAI schrijft zelf dat zoekresultaten en bronvermeldingen in ChatGPT onvolledig, verouderd of onjuist kunnen zijn. Je kunt je kans vergroten met goede vindbaarheid en vermeldingen op andere sites, maar niemand bepaalt wat een AI antwoordt.",
      },
      {
        q: "Moet ik een llms.txt-bestand maken?",
        a: "Voor Google niet. Google schreef op 15 juni 2026 dat een llms.txt-bestand je zichtbaarheid in Google Search niet helpt en niet schaadt. Speciale opmaak voor AI is volgens Google ook niet nodig.",
      },
      {
        q: "Moet ik iets instellen in Google Search Console?",
        a: "Meestal niet. Je site moet bij de instelling voor generatieve AI op 'opnemen' staan. Dat is de standaard. Sinds 31 augustus 2026 is die instelling voor alle sites beschikbaar. Kijk het één keer na.",
      },
      {
        q: "Helpt een FAQ-blok om door AI geciteerd te worden?",
        a: "Alleen met echte antwoorden. In een nog niet door vakgenoten beoordeeld onderzoek naar ruim 21.000 citaties in ChatGPT, Google en Perplexity (Zhang e.a., april 2026) hadden pagina's met alleen een vraag-en-antwoordopmaak geen voordeel. Pagina's met definities, cijfers, vergelijkingen en stappen hadden meer invloed op het antwoord.",
      },
      {
        q: "Hoe meet ik of ik genoemd word?",
        a: "Stel elke maand dezelfde 10 klantvragen, uitgelogd en in een nieuw gesprek. Noteer of je genoemd wordt en welke bronnen erbij staan. In Search Console zie je daarnaast vertoningen in de AI-functies van Google per pagina, maar niet de losse vragen.",
      },
    ],
    links: [
      {
        to: "/kennisbank/vertrouwen-wekken-zakelijke-website",
        label: "Vertrouwen wekken op je website",
        tekst: "Waar je op een zakelijke website op let, ook als een AI je noemt.",
      },
      {
        to: "/kennisbank/website-levert-geen-aanvragen-op",
        label: "Website levert geen aanvragen op",
        tekst: "Waar het misgaat nadat iemand via ChatGPT op je site komt.",
      },
      {
        to: "/diensten/seo",
        label: "SEO en GEO",
        tekst: "Vindbaarheid in Google en in AI-zoekmachines, als doorlopend traject.",
      },
    ],
    metaTitle: "Gevonden worden in ChatGPT als mkb'er | MegaOnline",
    metaDescription:
      "Hoe word je als mkb'er genoemd in ChatGPT en het AI-overzicht van Google? Eigen metingen, wat Google en OpenAI zeggen en wat je vandaag kunt doen.",
  },
  {
    slug: "reserveringssysteem-of-website-met-reserveringen",
    naam: "Reserveringssysteem of website",
    vraag: "Heb je een reserveringssysteem nodig of een website met reserveringen?",
    pijler: "Zo werkt het echt",
    icoon: "calendar-check",
    branche: "Bedrijven met reserveringen",
    teaser:
      "Een systeem regelt de agenda, een website zorgt dat iemand durft te reserveren. Wat je nodig hebt hangt af van wat je nu al hebt.",
    antwoord:
      "Meestal allebei, want ze doen iets anders. Het reserveringssysteem regelt de agenda, de beschikbaarheid en de bevestiging. De website zorgt dat een gast genoeg weet en genoeg vertrouwt om op de knop te drukken.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-10-22",
    gewijzigd: "2026-11-01",
    cta: "scan",
    eindKop: "Wil je weten waar gasten op jouw site afhaken voordat ze reserveren?",
    eindLead:
      "Beantwoord vier korte vragen. MegaOnline kijkt persoonlijk naar je website en je reserveringsroute en laat zien waar de reserveringen blijven hangen. Wil je eerst meer weten over de opzet, lees dan wat er bij een [website met reserveringssysteem](/branches/reserveringen) komt kijken.",
    secties: [
      {
        kop: "Wat een reserveringssysteem doet en wat niet",
        accent: "en wat niet",
        alineas: [
          "Een reserveringssysteem is software. Het houdt bij welke tijden, plekken of tickets nog vrij zijn, neemt de reservering aan, stuurt een bevestiging en vaak ook een herinnering. Goede systemen laten een gast meteen betalen of aanbetalen. Dat is veel werk dat je niet meer met de hand hoeft te doen.",
          "Wat een systeem niet doet: uitleggen wat je aanbiedt. Een kalender met vrije tijden vertelt een gast niet wat een kinderfeestje bij jou inhoudt, of er parkeerplaats is of wat er gebeurt als hij moet annuleren. Een systeem neemt een beslissing aan. Het helpt niemand die beslissing te nemen.",
          "Veel systemen geven je ook een eigen boekingspagina. Handig om snel te starten, alleen staat die pagina op het domein van de leverancier en in hun opmaak. Wie op Google zoekt naar wat jij aanbiedt in jouw plaats, vindt jouw eigen site. Die boekingspagina draagt daar weinig aan bij.",
        ],
      },
      {
        kop: "Wat de website doet wat het systeem niet kan",
        accent: "wat het systeem niet kan",
        alineas: [
          "Neem een indoor speeltuin. Een moeder zoekt op zaterdagochtend naar een plek voor het verjaardagsfeestje van haar zoon. Ze wil weten wat het kost per kind, wat er bij het feestje zit, of er een aparte ruimte is en tot welke leeftijd het leuk is. Pas als dat klopt kijkt ze naar een datum.",
          "Al die antwoorden horen op de website, vóór de reserveerknop. Staan ze er niet, dan belt ze. Of ze boekt bij de speeltuin twee dorpen verderop, die het wel op een rij heeft gezet. Het systeem had prima gewerkt. Er kwam alleen niemand aan toe.",
          "Daarom zijn ze geen keuze tussen twee dingen. De website brengt de gast tot de beslissing, het systeem verwerkt die beslissing. Ontbreekt een van de twee, dan merk je dat in het aantal reserveringen.",
        ],
      },
      {
        kop: "Wat past bij jouw situatie",
        accent: "jouw situatie",
        alineas: [
          "Welke stap het meest oplevert hangt af van waar je nu staat. De meeste bedrijven herkennen zich in een van deze drie.",
        ],
        punten: [
          {
            titel: "Je reserveert nu via telefoon en mail",
            tekst:
              "Hier levert een systeem het meest op. Elke reservering kost nu een paar berichten heen en weer. Wat 's avonds binnenkomt blijft liggen tot de volgende dag. Een gast die om tien uur 's avonds wil reserveren en dat niet kan, reserveert vaak ergens anders. Begin met een systeem dat past bij wat je verkoopt en zet het op je eigen site.",
          },
          {
            titel: "Je hebt een systeem, maar er komt weinig online binnen",
            tekst:
              "Dan ligt het zelden aan het systeem. Het ligt aan de weg ernaartoe: een knop die op de telefoon onder de vouw staat, een prijs die pas in de laatste stap verschijnt of een site die de vragen van gasten niet beantwoordt. Waar dat precies zit lees je in het artikel over [waar boekingen weglekken op je website](/kennisbank/waar-boekingen-weglekken).",
          },
          {
            titel: "Je begint opnieuw of je hebt nog niets",
            tekst:
              "Kies eerst het systeem en bouw de website eromheen. Zo weet je vooraf of de reservering op je eigen pagina kan blijven, welke gegevens het systeem nodig heeft en wat de gast in welke stap ziet. Andersom kom je er na de bouw achter dat de module niet in je ontwerp past.",
          },
        ],
      },
      {
        kop: "Waar je op let bij het kiezen van een systeem",
        accent: "bij het kiezen",
        alineas: [
          "Vergelijkingssites zetten functies naast elkaar. Voor een ondernemer tellen vijf vragen meer dan het aantal vinkjes.",
        ],
        punten: [
          {
            titel: "Past het bij wat je verkoopt?",
            tekst:
              "Een tijdslot voor een escaperoom, een tafel voor vier, een fiets voor een week of een ticket met extra opties zijn vier verschillende dingen. Een systeem dat voor afspraken is gemaakt, wringt bij tickets. Vraag een proefaccount en zet je eigen aanbod er een keer in.",
          },
          {
            titel: "Kan de gast op je eigen site blijven?",
            tekst:
              "Er zijn drie routes: een module op je eigen pagina, een knop naar de boekingspagina van de leverancier of een koppeling die beschikbaarheid uitwisselt. Welke kan, hangt af van het systeem. Meer over koppelingen staat bij [integraties](/diensten/integraties).",
          },
          {
            titel: "Werkt het goed op een telefoon?",
            tekst:
              "Reserveer zelf op je telefoon, met één hand, op de bank. Moet je inzoomen of verspringt het formulier, dan haakt een deel van je gasten daar af.",
          },
          {
            titel: "Komt alles in één agenda?",
            tekst:
              "Reserveringen via de site, de telefoon en de balie moeten in dezelfde agenda staan. Anders is een dubbele boeking een kwestie van tijd.",
          },
          {
            titel: "Hoe wordt er gerekend?",
            tekst:
              "Sommige leveranciers rekenen per maand, andere per reservering of per verkocht ticket. Reken het door op je eigen aantallen van een drukke maand en een rustige maand. Een systeem dat goedkoop lijkt, kan in het hoogseizoen het duurste zijn.",
          },
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "MegaOnline bouwt de website altijd vanuit de reservering terug: wat moet een gast weten voordat hij reserveert en in welke volgorde. Heb je al een systeem dat goed werkt, dan wordt de site daaromheen gebouwd.",
          "Heb je nog geen systeem, of past je huidige systeem niet bij wat je verkoopt, dan bouwt MegaOnline het reserveren in op je eigen website. Ingericht op jouw diensten, van het boeken van een belafspraak tot het kopen van een ticket met extra opties, met herinneringen, online betalen en één agenda. Welke functies daarbij kunnen lees je bij [online boeken en reserveren](/diensten/online-boeken). Hoe het aansluit op je agenda en opvolging lees je bij [koppelingen en automatiseringen](/diensten/integraties).",
        ],
      },
    ],
    doen: [
      "Reserveer 's avonds op je telefoon bij je eigen bedrijf en tel de stappen tot de bevestiging.",
      "Schrijf de vijf vragen op die gasten aan de telefoon het vaakst stellen en kijk of het antwoord op je site staat, vóór de reserveerknop.",
      "Zet de prijs en je annuleringsvoorwaarden vóór de betaalstap.",
      "Controleer of reserveringen via de telefoon in dezelfde agenda komen als die via de site.",
      "Tel hoeveel reserveringen per maand nog via telefoon of mail binnenkomen. Dat is je beginpunt.",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen een reserveringssysteem en een boekingssysteem?",
        a: "In de praktijk is het meestal hetzelfde. Horeca en locaties spreken vaker van reserveren, activiteiten en verhuur vaker van boeken. Waar het om gaat is of het systeem past bij wat je verkoopt: tijdsloten, plekken, tickets of afspraken.",
      },
      {
        q: "Kan ik een reserveringssysteem op mijn bestaande website zetten?",
        a: "Meestal wel. Dat kan met een module op je eigen pagina, een knop naar de boekingspagina van de leverancier of een koppeling. Welke route kan hangt af van het systeem en van hoe je site gebouwd is.",
      },
      {
        q: "Is een gratis reserveringssysteem genoeg?",
        a: "Voor eenvoudige afspraken soms wel. Kijk wel wat je inlevert: vaak een boekingspagina in de opmaak van de leverancier, beperkte betaalmogelijkheden of kosten per reservering zodra je groeit. Reken het door op je eigen aantallen.",
      },
      {
        q: "Moet een gast een account aanmaken om te reserveren?",
        a: "Liever niet. Naam, e-mailadres en telefoonnummer zijn genoeg om te bevestigen. Elk extra scherm is een moment waarop een gast kan afhaken, zeker op een telefoon.",
      },
      {
        q: "Wat kost een website met reserveringssysteem?",
        a: "Dat hangt af van het systeem, de koppeling die je wilt en wat er op de site moet staan. De kosten van het systeem zelf verschillen per leverancier en per rekenmodel. Wat er bij de website zelf komt kijken lees je op de pagina over een [conversiegerichte website](/diensten/conversie-website).",
      },
    ],
    links: [
      {
        to: "/branches/reserveringen",
        label: "Website met reserveringssysteem laten maken",
        tekst: "Wat er naast de reserveerknop op je site moet staan en welke route bij je systeem past.",
      },
      {
        to: "/diensten/online-boeken",
        label: "Online boeken en reserveren",
        tekst: "Welke functies we inbouwen: herinneringen, online betalen, één agenda en meer.",
      },
      {
        to: "/diensten/integraties",
        label: "Koppelingen en automatiseringen",
        tekst: "Reserveringen automatisch in je agenda, met bevestigingen en opvolging.",
      },
    ],
    metaTitle: "Reserveringssysteem of website met reserveringen? | MegaOnline",
    metaDescription:
      "Een reserveringssysteem regelt de agenda, een website zorgt dat gasten durven te reserveren. Wat past bij jouw situatie en waar let je op bij het kiezen?",
  },
  {
    slug: "goede-website-voor-non-profit",
    naam: "Website voor een non-profit",
    vraag: "Hoe ziet een goede website voor een non-profit eruit?",
    pijler: "Branche",
    icoon: "heart-handshake",
    branche: "Non-profits",
    teaser:
      "Een non-profit heeft niet één bezoeker maar drie of vier. Een goede site geeft elk van hen één duidelijke route naar wat ze komen doen.",
    antwoord:
      "Een goede website voor een non-profit geeft elke groep bezoekers één duidelijke route: doneren, meedoen als vrijwilliger of hulp vragen. Daarnaast laat hij zien wie er achter de organisatie zit en waar het geld heen gaat, want vertrouwen weegt hier zwaarder dan bij een bedrijf.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-10-23",
    gewijzigd: "2026-10-23",
    cta: "scan",
    eindKop: "Wil je weten wat de website van jouw organisatie nodig heeft?",
    eindLead:
      "Beantwoord zes korte vragen. MegaOnline kijkt persoonlijk naar je huidige site en laat zien wat jouw situatie nodig heeft om donateurs en vrijwilligers de goede kant op te sturen. Wil je eerst meer weten over de opzet, lees dan wat er bij een [website voor stichtingen en verenigingen](/branches/non-profits) komt kijken.",
    secties: [
      {
        kop: "Een non-profit heeft meer dan één bezoeker",
        accent: "meer dan één bezoeker",
        alineas: [
          "De meeste lijstjes over websites voor stichtingen gaan over functies: een doneerknop, een nieuwspagina, een agenda. Die horen er allemaal bij. Alleen begint een goede site niet bij functies. Hij begint bij de vraag wie er langskomt en wat die persoon komt doen.",
          "Een bedrijf heeft meestal één soort bezoeker: iemand die wil kopen of een offerte wil. Een non-profit heeft er vaak drie of vier. Iemand die wil geven. Iemand die wil helpen. Iemand die zelf hulp zoekt. En een gemeente of fonds dat wil weten of de organisatie serieus is. Ze komen op dezelfde homepage binnen met een totaal andere vraag.",
          "Krijgen ze allemaal dezelfde pagina met een welkomsttekst en het laatste nieuws, dan moet elke bezoeker zelf zoeken waar zijn deel staat. Een deel doet dat. De rest klikt weg, zonder dat je ooit merkt dat ze er waren.",
        ],
      },
      {
        kop: "Een voorbeeld uit de praktijk",
        accent: "uit de praktijk",
        alineas: [
          "Neem een dierenopvang in een middelgrote stad. De homepage opent met een foto van het gebouw, een alinea over de geschiedenis van de stichting en drie nieuwsberichten. Het menu heeft negen knoppen: over de stichting, nieuws, dieren, steun, vrijwilligers, contact, ANBI, links en een fotoalbum.",
          "Een gezin dat een hond wil adopteren zoekt de dieren en de voorwaarden. Een oud-collega die na een afscheid wil doneren zoekt een knop. Een student die op zaterdag wil helpen zoekt hoeveel tijd het kost en hoe ze zich aanmeldt. Alle drie vinden het uiteindelijk, maar pas na een paar klikken en zonder dat iets ze helpt kiezen.",
          "Wat werkt: direct onder de kop drie duidelijke ingangen. Adopteren, doneren, vrijwilliger worden. Elke ingang leidt naar een pagina die de vragen van die ene groep beantwoordt en eindigt met één handeling. Het nieuws en de geschiedenis verdwijnen niet. Ze staan alleen niet meer vooraan.",
        ],
      },
      {
        kop: "Waarom vertrouwen hier zwaarder weegt",
        accent: "zwaarder weegt",
        alineas: [
          "Wie bij een bedrijf koopt, krijgt iets terug. Wie doneert, krijgt niets tastbaars terug. Hij moet erop vertrouwen dat zijn geld goed terechtkomt. Daarom kijkt een donateur scherper dan een klant naar wie er achter de organisatie zit.",
          "Een paar dingen geven dat vertrouwen. Namen en gezichten van het bestuur of de coördinatoren. Concreet wat de organisatie het afgelopen jaar heeft gedaan. Een jaarverslag dat makkelijk te vinden is. En nieuws dat recent is: een laatste bericht van twee jaar geleden doet een bezoeker afvragen of de stichting nog bestaat.",
          "Heeft je organisatie een ANBI-status, dan moet je een aantal gegevens online publiceren, zoals het RSIN, de bestuurssamenstelling, het beleidsplan en de financiële verantwoording. Zie dat niet alleen als verplichting. Het is precies de informatie waar een twijfelende donateur naar zoekt. Meer over hoe je dat opbouwt staat in het artikel over [vertrouwen wekken op je website](/kennisbank/vertrouwen-wekken-zakelijke-website).",
        ],
      },
      {
        kop: "Wat elke route nodig heeft",
        accent: "elke route",
        alineas: [
          "Per groep bezoekers zijn het steeds dezelfde vragen. Beantwoord ze op de pagina zelf, vóór de knop.",
        ],
        punten: [
          {
            titel: "Doneren",
            tekst:
              "Laat zien waar het geld naartoe gaat, liefst concreet per bedrag. Laat de gever een bedrag kiezen of zelf invullen. Eenmalig of maandelijks, betalen zonder een account aan te maken. Elk extra scherm is een moment waarop iemand afhaakt, zeker op een telefoon.",
          },
          {
            titel: "Vrijwilliger worden",
            tekst:
              "Vertel wat het werk inhoudt, hoeveel tijd het ongeveer kost en wat iemand ervoor terugkrijgt: begeleiding, een vaste groep, ervaring. Houd het aanmeldformulier kort. Naam, contactgegevens en een vraag waar iemand interesse in heeft zijn genoeg voor een eerste gesprek.",
          },
          {
            titel: "Hulp vragen of meedoen",
            tekst:
              "Wie hulp zoekt, zit soms in een lastige situatie. Schrijf in gewone taal voor wie de organisatie er is, wat iemand kan verwachten en hoe het eerste contact verloopt. Een telefoonnummer en openingstijden zijn hier belangrijker dan een formulier.",
          },
          {
            titel: "Fondsen, gemeenten en partners",
            tekst:
              "Zij zoeken bewijs dat de organisatie goed draait. Een vaste pagina met missie, resultaten, jaarverslagen en de ANBI-gegevens bespaart je vragen en laat zien dat je dit serieus doet.",
          },
        ],
      },
      {
        kop: "Een site die vrijwilligers kunnen bijhouden",
        accent: "kunnen bijhouden",
        alineas: [
          "Bij veel non-profits houdt een vrijwilliger de site bij naast zijn gewone werk. Vertrekt die persoon, dan staat de site vaak jaren stil. Kies daarom voor een opzet waarin nieuws, activiteiten en foto's toe te voegen zijn zonder technische kennis. Leg ook vast wie dat doet.",
          "Budget is bij non-profits bijna altijd beperkt. Dat is geen reden om met minder te beginnen dan nodig. Een compacte site met drie goede routes levert meer op dan een grote site waar niemand de weg vindt. Wie zo begint kan later uitbreiden, bijvoorbeeld met een [compacte website voor starters](/diensten/starter-website) als basis. Hoe een [website voor non-profit organisaties](/branches/non-profits) er bij MegaOnline uitziet, lees je op de branchepagina.",
          "Merk je dat er wel bezoekers komen maar weinig donaties of aanmeldingen? Dan ligt het meestal aan dezelfde dingen als bij bedrijven die te weinig aanvragen krijgen. Die staan op een rij in het artikel over [waarom een website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op).",
        ],
      },
    ],
    doen: [
      "Schrijf op welke drie of vier groepen op je site komen en wat elke groep daar wil doen.",
      "Kijk of elke groep vanaf de homepage in één klik bij zijn eigen pagina komt.",
      "Doneer zelf op je telefoon en tel de schermen tot de bevestiging.",
      "Zoek de datum van je laatste nieuwsbericht. Is die ouder dan een paar maanden, zet er deze week iets nieuws op.",
      "Controleer of je jaarverslag en ANBI-gegevens vanaf elke pagina te vinden zijn, bijvoorbeeld via de footer.",
    ],
    faq: [
      {
        q: "Wat kost een website voor een stichting?",
        a: "Dat hangt af van hoeveel routes er nodig zijn, of er online gedoneerd of aangemeld moet worden en hoeveel de organisatie zelf wil bijhouden. Een compacte site met een paar duidelijke pagina's is vaak een goed begin. Wat bij een compacte opzet hoort staat op de pagina over een [starter website](/diensten/starter-website).",
      },
      {
        q: "Moet een ANBI een eigen website hebben?",
        a: "Een ANBI moet een aantal gegevens online publiceren. Dat mag op een eigen website of op een gezamenlijke site, bijvoorbeeld van een koepelorganisatie. Een eigen pagina is wel de plek waar donateurs het eerst zoeken.",
      },
      {
        q: "Hoe zet je online doneren op de website van een stichting?",
        a: "Met een doneermodule op je eigen pagina of een koppeling met een betaalaanbieder. Let erop dat de gever op je eigen site blijft, met iDEAL kan betalen en geen account hoeft aan te maken.",
      },
      {
        q: "Is een gratis websitebouwer genoeg voor een non-profit?",
        a: "Voor een eerste visitekaartje soms wel. Kijk wel wat je inlevert: vaak een advertentie of de naam van de bouwer in beeld, beperkte doneermogelijkheden en een site die alleen de vrijwilliger begrijpt die hem heeft gemaakt.",
      },
      {
        q: "Hoe vaak moet je de website van een stichting bijwerken?",
        a: "Er is geen vaste regel. Zorg dat er een paar keer per jaar iets nieuws op staat en dat activiteiten en contactgegevens altijd kloppen. Verouderd nieuws laat bezoekers twijfelen of de organisatie nog actief is.",
      },
    ],
    links: [
      {
        to: "/branches/non-profits",
        label: "Website voor non-profit organisaties",
        tekst: "Doneerroute, aanmeldformulieren en een site die vrijwilligers zelf bijhouden.",
      },
      {
        to: "/kennisbank/vertrouwen-wekken-zakelijke-website",
        label: "Vertrouwen wekken op je website",
        tekst: "Wat een bezoeker wil zien voordat hij contact opneemt of iets geeft.",
      },
      {
        to: "/diensten/starter-website",
        label: "Starter website",
        tekst: "Een compacte site als begin, uit te breiden als de organisatie groeit.",
      },
    ],
    metaTitle: "Een goede website voor een non-profit | MegaOnline",
    metaDescription:
      "Een non-profit heeft donateurs, vrijwilligers en hulpvragers als bezoekers. Zo geef je elk van hen één route en bouw je het vertrouwen op dat ze nodig hebben.",
  },
  {
    slug: "wat-kost-een-website-met-reserveringssysteem",
    naam: "Kosten website met reserveringen",
    vraag: "Wat kost een website met reserveringssysteem?",
    pijler: "Zo werkt het echt",
    icoon: "euro",
    branche: "Bedrijven met reserveringen",
    teaser:
      "De prijs zit in drie lagen die elk anders rekenen. Wie ze apart bekijkt en over een jaar optelt, vergelijkt eindelijk hetzelfde.",
    antwoord:
      "Dat hangt af van drie dingen die je los moet bekijken: de website, het reserveringssysteem en de koppeling tussen die twee. Wat het je echt kost zie je pas als je die drie optelt over een heel jaar, op je eigen aantallen reserveringen.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-10-27",
    gewijzigd: "2026-11-01",
    cta: "scan",
    eindKop: "Wil je weten wat jouw situatie nodig heeft voordat je offertes vergelijkt?",
    eindLead:
      "Beantwoord vier korte vragen. MegaOnline kijkt persoonlijk naar je website en je huidige manier van reserveren. Je krijgt te zien welke van de drie lagen jij echt nodig hebt.",
    secties: [
      {
        kop: "Waarom je nergens één eerlijke prijs vindt",
        accent: "één eerlijke prijs",
        alineas: [
          "Wie zoekt wat een website met reserveringssysteem kost, vindt vooral vanafprijzen. Een systeem met een laag maandbedrag, een websitebouwer met een boekingsmodule erbij, een bureau met een pakket. Elk bedrag klopt. Alleen gaat het steeds over een ander stuk.",
          "Het lastige is dat die stukken elk op een andere manier rekenen. De website betaal je meestal één keer, met daarna eventueel onderhoud. Het systeem betaal je doorlopend. De koppeling zit er soms gratis bij en is soms het duurste deel. Leg je drie offertes naast elkaar, dan vergelijk je zelden hetzelfde.",
        ],
      },
      {
        kop: "De drie lagen van de prijs",
        accent: "drie lagen",
        alineas: [
          "Haal de prijs uit elkaar in drie lagen. Dan zie je per offerte wat erin zit en wat er later nog bijkomt.",
        ],
        punten: [
          {
            titel: "1. De website",
            tekst:
              "Dit is het deel dat een gast laat besluiten: wat je aanbiedt, wat het kost, wat erbij zit en wat er gebeurt als hij moet annuleren. De prijs hangt af van het aantal pagina's, de teksten en hoeveel maatwerk er nodig is. Bij MegaOnline begint een [conversiegerichte website](/diensten/conversie-website) vanaf € 2.500. Een compacte Starter Website begint vanaf € 1.500.",
          },
          {
            titel: "2. Het reserveringssysteem",
            tekst:
              "Dit is de software die de agenda bijhoudt, de reservering aanneemt en de bevestiging stuurt. Leveranciers rekenen op drie manieren: een vast bedrag per maand, een bedrag per reservering of verkocht ticket, of een percentage van de omzet die via het systeem loopt. Betaalt een gast online, dan komen er vaak transactiekosten bovenop. Welke manier voor jou het voordeligst is, hangt helemaal af van hoeveel je reserveert.",
          },
          {
            titel: "3. De koppeling",
            tekst:
              "Hoe komt het systeem op je site? Een knop naar de boekingspagina van de leverancier kost bijna niets, alleen verlaat de gast dan je site. Een module in je eigen pagina vraagt meer werk. Een koppeling die beschikbaarheid, betalingen en klantgegevens doorzet naar je agenda of administratie is maatwerk. Daar zit vaak het grootste verschil tussen twee offertes.",
          },
        ],
        daarna: [
          "Vraag bij elke offerte welke van de drie erin zit. Een lage websiteprijs zonder koppeling is geen lage prijs voor een website met reserveringen.",
        ],
      },
      {
        kop: "Reken over een jaar, niet over een maand",
        accent: "over een jaar",
        alineas: [
          "Neem een klimhal. In de herfst en de winter is het elk weekend vol, in de zomer is het doordeweeks stil. Een systeem dat per reservering rekent lijkt in juni goedkoop. In december betaal je voor elke groep die binnenkomt, juist in de maanden waarin je het meeste verkoopt. Een systeem met een vast maandbedrag voelt in juni duur. In december staat er precies hetzelfde op de rekening.",
          "Vergelijk systemen daarom niet op hun vanafprijs. Pak je eigen aantallen van vorig jaar: hoeveel reserveringen in je drukste maand en hoeveel in je rustigste. Reken voor elk systeem uit wat het over twaalf maanden kost, met de transactiekosten erbij. Pas dan zie je welk systeem bij jouw bedrijf past.",
          "Tel er ook je eigen tijd bij. Een systeem dat niet koppelt met je agenda betekent overtypen. Een boekingspagina die op de telefoon slecht werkt betekent telefoontjes van gasten die het niet lukte. Die uren staan op geen enkele factuur. Je betaalt ze wel.",
        ],
      },
      {
        kop: "Welke functies de prijs bepalen",
        accent: "de prijs bepalen",
        alineas: [
          "Bouw je het reserveren in op je eigen site, dan hangt de prijs af van wat het moet kunnen. Een restaurant met één soort tafelreservering en een bevestiging per mail is snel ingericht. Een locatie met tijdsloten voor groepen, extra opties, een aanbetaling en een koppeling met de administratie vraagt veel meer. Vijf vragen bepalen waar jij zit.",
        ],
        punten: [
          {
            titel: "Hoeveel soorten reserveringen bied je aan?",
            tekst:
              "Elke soort met een eigen duur, prijs of maximum aantal plekken moet apart worden ingericht. Een kapper met tien behandelingen is meer werk dan een restaurant met één soort tafel.",
          },
          {
            titel: "Laat je gasten vooraf betalen?",
            tekst:
              "Online betalen, een aanbetaling of betalen ter plekke. Met betalen erbij komen ook annuleringsregels en terugbetalingen kijken.",
          },
          {
            titel: "Welke herinneringen gaan er uit?",
            tekst:
              "Een bevestiging per mail is standaard. Herinneringen via sms of WhatsApp kosten per bericht iets. Ze leveren vaak het meest op tegen gasten die niet komen opdagen.",
          },
          {
            titel: "Met hoeveel medewerkers, ruimtes of locaties werk je?",
            tekst:
              "Elke medewerker of ruimte met een eigen agenda en eigen tijden is een extra laag in de inrichting.",
          },
          {
            titel: "Wat moet er gekoppeld worden?",
            tekst:
              "Een koppeling met Google Agenda is eenvoudig. Een koppeling die klantgegevens en betalingen doorzet naar je klantenbestand of administratie is maatwerk.",
          },
        ],
        daarna: [
          "Schrijf deze vijf antwoorden op voordat je offertes opvraagt. Dan krijg je prijzen voor hetzelfde en zie je waar het verschil zit.",
        ],
      },
      {
        kop: "Wat het kost als je het niet regelt",
        accent: "niet regelt",
        alineas: [
          "Tegenover de kosten staat iets wat je op geen offerte ziet: de reserveringen die je nu misloopt. Een gast die om tien uur 's avonds wil reserveren en alleen een telefoonnummer vindt, probeert het morgen misschien opnieuw. Vaker reserveert hij bij een ander die het wel online geregeld heeft.",
          "Hoe groot dat verlies is, weet je pas als je het meet. Een begin is tellen hoeveel verzoeken nu buiten openingstijden binnenkomen via mail, WhatsApp of het contactformulier. Dat zijn de mensen die het al probeerden. Waar gasten verder afhaken lees je in het artikel over [waar boekingen weglekken op je website](/kennisbank/waar-boekingen-weglekken).",
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "MegaOnline begint niet bij een pakket maar bij wat je verkoopt. Een belafspraak, een tafel, een tijdslot voor een groep of een ticket met extra opties vragen elk iets anders van het systeem. Daarmee verschilt ook de prijs.",
          "Heb je al een systeem dat goed werkt, dan wordt de [website met reserveringssysteem](/branches/reserveringen) daaromheen gebouwd en gaat het alleen nog om de website en de koppeling. Heb je nog niets, of past je huidige systeem niet bij wat je verkoopt, dan bouwt MegaOnline een boekings- en reserveringssysteem in op je eigen website, ingericht op jouw diensten. Wat daar allemaal bij kan lees je bij [online boeken en reserveren](/diensten/online-boeken).",
          "Twijfel je nog of je wel een los systeem nodig hebt, lees dan eerst [reserveringssysteem of website met reserveringen](/kennisbank/reserveringssysteem-of-website-met-reserveringen). Dat scheelt een offerte voor iets wat je niet nodig hebt.",
        ],
      },
    ],
    doen: [
      "Zoek op hoeveel reserveringen je vorig jaar had in je drukste en in je rustigste maand.",
      "Reken voor je huidige systeem uit wat het over twaalf maanden kost, met transactiekosten erbij.",
      "Vraag bij elke offerte apart wat de website, het systeem en de koppeling kosten.",
      "Tel een week lang hoeveel reserveringen nog via telefoon, mail of WhatsApp binnenkomen.",
      "Reserveer 's avonds op je telefoon bij je eigen bedrijf en kijk of je op je eigen site blijft tot de bevestiging.",
    ],
    faq: [
      {
        q: "Is een reserveringssysteem met een maandbedrag goedkoper dan een systeem per reservering?",
        a: "Dat hangt af van je aantallen. Bij weinig reserveringen is betalen per reservering vaak voordeliger. Bij veel reserveringen, of een seizoen met grote pieken, is een vast maandbedrag meestal goedkoper. Reken het door op je drukste en je rustigste maand.",
      },
      {
        q: "Welke kosten komen er na de oplevering nog terug?",
        a: "Vaak meer dan het abonnement van het systeem. Denk aan transactiekosten bij online betalen, hosting en onderhoud van de website en soms kosten voor berichten zoals sms-herinneringen. Vraag vooraf welke kosten per maand of per reservering terugkomen.",
      },
      {
        q: "Waarom verschillen offertes voor een website met reserveringen zo veel?",
        a: "Omdat ze zelden hetzelfde bevatten. De ene offerte rekent alleen de website en een knop naar de boekingspagina van de leverancier. De andere rekent ook een koppeling met je agenda, betalingen en administratie. Vraag per offerte welke van de drie lagen erin zit.",
      },
      {
        q: "Wat kost een website met reserveringssysteem bij MegaOnline?",
        a: "Een Conversie Website begint vanaf € 2.500, een Starter Website vanaf € 1.500. Wat er voor het reserveren bijkomt hangt af van wat je verkoopt, welk systeem past en welke koppelingen nodig zijn. Dat zie je vooraf in een duidelijke offerte.",
      },
      {
        q: "Moet ik meteen alles laten koppelen?",
        a: "Nee. Begin met reserveren op je eigen site in één agenda. Koppelingen met je administratie of klantenbestand kun je later toevoegen, zodra je merkt waar het overtypen de meeste tijd kost.",
      },
    ],
    links: [
      {
        to: "/branches/reserveringen",
        label: "Website met reserveringssysteem laten maken",
        tekst: "Wat er naast de reserveerknop op je site moet staan en welke route bij je systeem past.",
      },
      {
        to: "/diensten/online-boeken",
        label: "Online boeken en reserveren",
        tekst: "Van een belafspraak tot een ticket met extra opties, op je eigen site en in één agenda.",
      },
      {
        to: "/kennisbank/reserveringssysteem-of-website-met-reserveringen",
        label: "Reserveringssysteem of website met reserveringen",
        tekst: "Wat een systeem doet, wat de website doet en wat past bij jouw situatie.",
      },
    ],
    metaTitle: "Wat kost een website met reserveringssysteem? | MegaOnline",
    metaDescription:
      "Een website met reserveringssysteem kost drie dingen: de site, het systeem en de koppeling. Zo vergelijk je offertes en reken je het door over een jaar.",
  },
  {
    slug: "nieuwe-website-of-optimaliseren",
    naam: "Nieuwe website of optimaliseren",
    vraag: "Nieuwe website laten maken of je huidige website laten optimaliseren?",
    pijler: "Mening",
    icoon: "sliders",
    branche: "Algemeen",
    teaser:
      "Een nieuwe website voelt als een frisse start, maar lost vaak het verkeerde probleem op. Zo zie je of verbeteren genoeg is.",
    antwoord:
      "Laat je huidige website eerst optimaliseren, tenzij het fundament je tegenhoudt. Een nieuwe website is pas de betere keuze als de techniek niet meer houdbaar is, de structuur niet past bij wat je nu verkoopt of elke aanpassing meer moeite kost dan hij oplevert.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-10-30",
    gewijzigd: "2026-10-30",
    cta: "scan",
    eindKop: "Wil je zien waar jouw website nu weglekt?",
    eindLead:
      "Beantwoord zes korte vragen. MegaOnline kijkt persoonlijk naar je website en laat zien waar bezoekers afhaken en of verbeteren genoeg is. Wil je eerst weten wat er bij verbeteren komt kijken, lees dan meer over [website optimalisatie](/diensten/website-optimalisatie).",
    secties: [
      {
        kop: "Waarom een nieuwe website vaak het verkeerde probleem oplost",
        accent: "het verkeerde probleem",
        alineas: [
          "Wie te weinig aanvragen krijgt, kijkt naar zijn website en ziet vooral wat er ouderwets aan is. Een kleur die niet meer past, foto's van vijf jaar terug, een menu dat rommelig oogt. De conclusie ligt voor de hand: tijd voor iets nieuws. Die conclusie is begrijpelijk. Ze is alleen vaak verkeerd.",
          "Neem een installatiebedrijf in de regio. De site ziet er gedateerd uit en levert weinig offerteaanvragen op. Wie beter kijkt, ziet dat het offerteformulier negen velden heeft, dat het telefoonnummer op de telefoon pas helemaal onderaan staat en dat nergens staat in welke plaatsen het bedrijf werkt. Laat je daar een nieuw ontwerp omheen maken met hetzelfde formulier en dezelfde teksten, dan heb je een mooiere site die precies even weinig oplevert.",
          "Het uiterlijk is het eerste wat je ziet, maar zelden de reden dat iemand afhaakt. Bezoekers haken af omdat ze een antwoord niet vinden, omdat een stap te veel vraagt of omdat ze niet zien wie er achter het bedrijf zit. Dat zijn dingen die je op je huidige site kunt verbeteren. Meer over waar het meestal misgaat lees je in het artikel over [waarom je website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op).",
        ],
      },
      {
        kop: "De vraag die de keuze bepaalt",
        accent: "de keuze bepaalt",
        alineas: [
          "Zit het probleem in wat er op de site staat, of in waar de site op gebouwd is? Dat is het onderscheid dat telt. Inhoud, volgorde en route kun je aanpassen. Een fundament dat niet meer meekan, niet.",
        ],
        punten: [
          {
            titel: "Verbeteren is genoeg als het om de route gaat",
            tekst:
              "Een homepage die niet in één oogopslag zegt wat je doet, een formulier dat te veel vraagt, een knop die op de telefoon niet te vinden is, te weinig bewijs dat je goed werk levert. Dit soort punten pak je aan zonder de site opnieuw te bouwen. Dat is precies wat [website laten optimaliseren](/diensten/website-optimalisatie) inhoudt.",
          },
          {
            titel: "Opnieuw bouwen is nodig als het om het fundament gaat",
            tekst:
              "De techniek krijgt geen updates meer, je kunt zelf geen pagina toevoegen, je aanbod is zo veranderd dat de indeling niet meer klopt of er zitten zoveel losse aanpassingen op dat elke wijziging iets anders laat omvallen. Dan bouw je elke verbetering op iets wat zelf wankelt.",
          },
        ],
        daarna: [
          "Twijfel je, kijk dan naar de laatste drie dingen die je wilde aanpassen. Lukte dat zonder gedoe, dan is het fundament waarschijnlijk in orde. Kostte elke kleine wijziging dagen of een rekening van je bouwer, dan zegt dat iets over de basis.",
        ],
      },
      {
        kop: "Wat je verliest als je zonder plan opnieuw begint",
        accent: "zonder plan",
        alineas: [
          "Een bestaande website heeft iets wat een nieuwe niet heeft: geschiedenis in Google. Pagina's die al een tijd online staan, worden gevonden op zoekvragen die je soms niet eens kent. In Google Search Console zie je welke dat zijn. Bouw je opnieuw en verander je adressen, titels en teksten zonder te weten welke pagina's nu bezoekers brengen, dan kan die vindbaarheid voor een deel verdwijnen.",
          "Dat is geen reden om nooit opnieuw te bouwen. Het is een reden om eerst vast te leggen wat nu werkt. Welke pagina's krijgen bezoek uit Google, welke teksten leveren aanvragen op en welke adressen moeten na de livegang doorsturen naar de nieuwe pagina. Hoe Google pagina's beoordeelt lees je in het artikel [wat is SEO](/kennisbank/wat-is-seo).",
          "Daar zit ook het sterkste argument voor eerst optimaliseren. Wat je leert van verbeteringen op je huidige site, neem je mee als je later toch opnieuw bouwt. Je weet dan welke vragen bezoekers stellen, welke knop werkt en welk formulier aanvragen oplevert. Een nieuwe site op basis van die kennis begint niet bij nul.",
        ],
      },
      {
        kop: "Wanneer een nieuwe website wél de betere keuze is",
        accent: "wél de betere keuze",
        alineas: [
          "Er zijn situaties waarin doorverbeteren geld kost zonder dat het iets oplost. Herken je jezelf in een van deze punten, dan is een [website redesign](/diensten/website-redesign) waarschijnlijk de rustigere weg.",
        ],
        punten: [
          {
            titel: "De techniek is niet meer veilig",
            tekst:
              "Het systeem waar de site op draait krijgt geen updates meer of de bouwer is uit beeld en niemand durft er nog aan te komen.",
          },
          {
            titel: "Je bedrijf is gegroeid en de site niet",
            tekst:
              "Je verkoopt inmiddels andere diensten aan andere klanten, maar de indeling vertelt nog het verhaal van vijf jaar geleden.",
          },
          {
            titel: "Online boeken of aanvragen past er niet in",
            tekst:
              "Je wilt dat klanten zelf een afspraak, tijdslot of offerte regelen, maar de site kan dat niet aan zonder omwegen.",
          },
          {
            titel: "Elke aanpassing kost meer dan hij oplevert",
            tekst:
              "Een tekst wijzigen of een pagina toevoegen loopt steeds via een ander en duurt steeds langer.",
          },
        ],
      },
      {
        kop: "Hoe MegaOnline die keuze maakt",
        accent: "die keuze maakt",
        alineas: [
          "MegaOnline begint niet met een ontwerp maar met de vraag waar bezoekers nu afhaken. Pas als duidelijk is waar het probleem zit, volgt het advies: gericht verbeteren of opnieuw bouwen. Een nieuwe website wordt alleen geadviseerd als verbeteren op de huidige basis niet meer zinvol is.",
          "Kies je toch voor een nieuwe site, dan gaat wat nu al goed werkt mee: teksten die aanvragen opleveren, pagina's die in Google gevonden worden en de adressen die moeten blijven werken. Zo wordt de nieuwe site een stap vooruit in plaats van een nieuw begin.",
        ],
      },
    ],
    doen: [
      "Schrijf op waarom je een nieuwe website wilt. Staat er vooral iets over uiterlijk, kijk dan eerst naar de route naar een aanvraag.",
      "Vraag op je telefoon een offerte aan of plan een afspraak via je eigen site en noteer waar je twijfelt of zoekt.",
      "Zoek in Google Search Console welke pagina's de meeste vertoningen krijgen. Die pagina's wil je bij een nieuwe site niet kwijtraken.",
      "Kijk naar de laatste drie aanpassingen die je wilde doen en schrijf op hoeveel moeite elke aanpassing kostte.",
      "Tel hoeveel aanvragen er de afgelopen drie maanden via de site binnenkwamen. Dat getal is je beginpunt, wat je ook kiest.",
    ],
    faq: [
      {
        q: "Hoe weet ik of mijn website verouderd is?",
        a: "Uiterlijk is een slechte maatstaf. Kijk naar de techniek: krijgt het systeem nog updates, werkt de site goed op een telefoon en kun je zelf teksten en pagina's aanpassen. Is dat in orde, dan is de site meestal niet verouderd, ook al ziet hij er niet meer nieuw uit.",
      },
      {
        q: "Wat is het verschil tussen een redesign en een nieuwe website?",
        a: "Bij een redesign neem je mee wat goed werkt, zoals teksten, pagina's en vindbaarheid. Daarna vernieuw je de opbouw en het ontwerp. Een volledig nieuwe website begint vanaf een lege basis. In de praktijk is een goed redesign bijna altijd de verstandigere variant.",
      },
      {
        q: "Raak ik mijn plek in Google kwijt met een nieuwe website?",
        a: "Dat kan, als adressen veranderen zonder doorverwijzing of als goed gevonden teksten verdwijnen. Leg daarom vooraf vast welke pagina's nu bezoekers uit Google krijgen en zorg dat oude adressen na de livegang doorsturen naar de juiste nieuwe pagina.",
      },
      {
        q: "Kan een website laten optimaliseren ook als iemand anders hem gebouwd heeft?",
        a: "Ja. Optimaliseren gaat over wat er op de site staat en hoe bezoekers erdoorheen gaan. Wie de site gebouwd heeft maakt daarvoor weinig uit, zolang je toegang hebt om aanpassingen te doen.",
      },
      {
        q: "Hoe lang duurt het voordat verbeteringen effect hebben?",
        a: "Dat verschilt per verbetering. Een korter formulier of een duidelijkere knop kan snel merkbaar zijn in het aantal aanvragen. Veranderingen in vindbaarheid hebben meer tijd nodig, omdat Google pagina's opnieuw moet beoordelen.",
      },
    ],
    links: [
      {
        to: "/diensten/website-optimalisatie",
        label: "Website laten optimaliseren",
        tekst: "Gericht verbeteren op de plekken waar bezoekers afhaken, zonder je site opnieuw te bouwen.",
      },
      {
        to: "/diensten/website-redesign",
        label: "Website redesign",
        tekst: "Opnieuw bouwen en meenemen wat nu al goed werkt.",
      },
      {
        to: "/kennisbank/website-levert-geen-aanvragen-op",
        label: "Waarom je website geen aanvragen oplevert",
        tekst: "De plekken waar het meestal misgaat, voordat je aan iets nieuws begint.",
      },
    ],
    metaTitle: "Nieuwe website of huidige optimaliseren? | MegaOnline",
    metaDescription:
      "Een nieuwe website lost vaak het verkeerde probleem op. Zo zie je of je huidige website laten optimaliseren genoeg is of dat opnieuw bouwen slimmer is.",
  },
  {
    slug: "wat-is-een-converterende-website",
    naam: "Wat is een converterende website",
    vraag: "Wat is een converterende website?",
    pijler: "Zo werkt het echt",
    icoon: "target",
    branche: "Algemeen",
    teaser:
      "Een converterende website is niet mooier of drukker bezocht. Hij is gebouwd rond één handeling die een bezoeker moet doen.",
    antwoord:
      "Een converterende website is een website die bezoekers laat doen waarvoor hij bestaat: een aanvraag sturen, een afspraak maken of een boeking afronden. Het verschil met een gewone website zit niet in het ontwerp, maar in de volgorde: elke pagina is gebouwd vanuit die ene handeling terug naar de vragen die een bezoeker eerst beantwoord wil zien.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-03",
    gewijzigd: "2026-11-03",
    cta: "scan",
    eindKop: "Wil je zien waar jouw website aanvragen laat weglekken?",
    eindLead:
      "MegaOnline kijkt persoonlijk naar je website, loopt de route naar je aanvraag na zoals een bezoeker dat doet en stuurt je de punten waar mensen afhaken. Wil je eerst weten wat er bij een nieuwe site komt kijken, lees dan meer over een [conversiegerichte website](/diensten/conversie-website).",
    secties: [
      {
        kop: "Wat converteren eigenlijk betekent",
        accent: "eigenlijk betekent",
        alineas: [
          "Converteren is een duur woord voor iets eenvoudigs. Een bezoeker wordt iemand die iets van je wil. Hij vult je offerteformulier in, belt, stuurt een WhatsApp of rondt een reservering af. Dat moment heet een conversie. Een converterende website is erop gebouwd dat dit zo vaak mogelijk gebeurt, bij de mensen die je echt wilt hebben.",
          "Je komt ook de term conversiegerichte website tegen. Dat is hetzelfde. De ene zegt wat de site doet, de andere waar hij op gericht is.",
          "Belangrijk is wat er niet in staat. Een converterende website is niet per se mooier dan een andere. Hij trekt ook niet vanzelf meer bezoekers. Een site met weinig bezoekers kan prima converteren en een drukbezochte site kan bijna niets opleveren. Het getal dat telt is het aantal aanvragen, niet het aantal mensen dat langskwam.",
        ],
      },
      {
        kop: "Het begint bij één handeling, niet bij een ontwerp",
        accent: "één handeling",
        alineas: [
          "De meeste websites worden gebouwd vanaf de homepage. Eerst een mooie foto, dan een slogan, dan een blok over het bedrijf, dan de diensten en helemaal onderaan een contactformulier. Dat is de volgorde waarin een ondernemer over zijn bedrijf vertelt. Het is niet de volgorde waarin een klant beslist.",
          "Een converterende website draait dat om. Je begint bij de handeling die je wilt: een offerteaanvraag, een belafspraak of een boeking. Dan vraag je je af wat iemand moet weten en geloven voordat hij die stap durft te zetten. Die vragen bepalen wat er op de pagina komt en in welke volgorde.",
          "Neem een installateur die warmtepompen plaatst. Zijn huidige homepage opent met \"Vakmanschap en kwaliteit sinds jaar en dag\". Daaronder een lijst met diensten, een stukje over het team en onderaan een formulier met negen velden, inclusief bouwjaar, oppervlakte en type verwarming. Er komen af en toe aanvragen binnen, vooral van mensen die al wisten dat ze hem wilden hebben.",
          "Een huiseigenaar die hem nog niet kent, wil iets anders weten. Werk je in mijn regio? Wat kost dit ongeveer? Heb je dit vaker gedaan bij een huis zoals het mijne? Wat gebeurt er nadat ik het formulier verstuur? Staat dat niet boven het formulier, dan sluit hij het tabblad en kijkt hij bij de volgende installateur.",
          "De converterende versie zet dat recht. Bovenaan staat wat hij doet, voor wie en in welke regio. Daaronder foto's van echte installaties met de plaats erbij, een prijsindicatie met waar die van afhangt en twee zinnen over wat er na de aanvraag gebeurt. Het formulier vraagt alleen naam, telefoonnummer en postcode. De rest bespreekt hij aan de telefoon. Op een telefoon blijft een belknop in beeld, waar de bezoeker ook scrolt.",
        ],
      },
      {
        kop: "Vijf kenmerken die je op je eigen site kunt controleren",
        accent: "op je eigen site",
        alineas: [
          "Een converterende website herken je niet aan de kleuren. Je herkent hem aan een paar dingen die je zelf in een paar minuten kunt nalopen.",
        ],
        punten: [
          {
            titel: "Je ziet meteen wat het bedrijf doet en voor wie",
            tekst:
              "Bovenaan de pagina staat geen slogan maar een zin die een vreemde begrijpt: wat je aanbiedt, voor wie en waar. Wie moet scrollen om te snappen of hij goed zit, is vaak al weg.",
          },
          {
            titel: "Er is bewijs dat iemand kan controleren",
            tekst:
              "Echte foto's van eigen werk, een gezicht, een adres, ervaringen van klanten met naam. Kwaliteit en maatwerk zijn woorden die iedereen gebruikt. Hoe je vertrouwen opbouwt staat in het artikel over [vertrouwen wekken met je website](/kennisbank/vertrouwen-wekken-zakelijke-website).",
          },
          {
            titel: "De prijs is geen geheim",
            tekst:
              "Een vast bedrag kan niet altijd. Een vanafprijs of een uitleg waar de prijs van afhangt kan bijna altijd. Wie geen idee heeft van de orde van grootte, vraagt liever niets aan.",
          },
          {
            titel: "Er is één duidelijke volgende stap",
            tekst:
              "Elke pagina heeft één doel en één knop die daarbij hoort. Staan er vier knoppen naast elkaar die allemaal iets anders willen, dan kiest de bezoeker vaak geen van allemaal.",
          },
          {
            titel: "Het formulier vraagt alleen wat nodig is",
            tekst:
              "Elk veld dat je toevoegt is een reden om te stoppen. Vraag wat je nodig hebt om terug te bellen en bewaar de rest voor het gesprek.",
          },
        ],
      },
      {
        kop: "Waarom een website die stilstaat niet blijft converteren",
        accent: "niet blijft converteren",
        alineas: [
          "Een site die bij de oplevering goed converteert, doet dat over een jaar niet vanzelf nog steeds. Je aanbod verandert, concurrenten zetten hun prijzen wel online en bezoekers stellen nieuwe vragen. Een converterende website is daarom geen eenmalige bouw, maar iets dat je bijhoudt.",
          "Een voorbeeld uit dezelfde wereld: de installateur ziet na een paar maanden dat veel mensen vragen of hij ook subsidie regelt. Zolang dat antwoord alleen aan de telefoon wordt gegeven, haakt een deel van de bezoekers af voordat ze bellen. Zet hij het op de pagina, vlak boven het formulier, dan haalt hij een twijfel weg op de plek waar die ontstaat.",
          "Dat begint met meten wat ertoe doet. Tel elke maand hoeveel aanvragen er via de site binnenkwamen en via welke pagina. Kijk in Google Search Console op welke zoekvragen je gevonden wordt. Zo zie je of een aanpassing iets oplevert of alleen anders oogt. Waar het vaak misgaat lees je in het artikel over [waarom je website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op).",
        ],
      },
      {
        kop: "Hoe MegaOnline een converterende website bouwt",
        accent: "converterende website",
        alineas: [
          "MegaOnline begint niet bij het ontwerp. Eerst komt begrijpen wat je verkoopt, dan wie je klant is en welke vragen hij heeft, dan de structuur van de pagina's. Pas daarna wordt er gebouwd. Zo staat elke pagina in dienst van de aanvraag, de boeking of de belafspraak die je wilt.",
          "Na de livegang meet MegaOnline wat de site oplevert in aanvragen en stuurt bij waar bezoekers afhaken. Wat er bij een nieuwe site komt kijken lees je bij een [conversiegerichte website laten maken](/diensten/conversie-website). Heb je al een site die op zich goed staat, dan is [website optimalisatie](/diensten/website-optimalisatie) vaak de kortere weg.",
        ],
      },
    ],
    doen: [
      "Open je homepage op je telefoon en kijk of een vreemde zonder scrollen snapt wat je doet, voor wie en waar.",
      "Schrijf de drie vragen op die klanten aan de telefoon het vaakst stellen en zet de antwoorden boven je formulier.",
      "Tel de velden in je contactformulier en schrap alles wat je niet nodig hebt om terug te bellen.",
      "Kies per belangrijke pagina één knop als volgende stap en haal de concurrerende knoppen weg.",
      "Noteer hoeveel aanvragen er vorige maand via de site binnenkwamen. Dat is het getal waar je vanaf nu op let.",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen een converterende en een conversiegerichte website?",
        a: "Er is geen verschil. Beide termen beschrijven een website die gebouwd is om bezoekers een aanvraag, boeking of afspraak te laten doen. De ene zegt wat de site doet, de andere waar hij op gericht is.",
      },
      {
        q: "Kan mijn huidige website converterend worden zonder nieuwe site?",
        a: "Vaak wel. Teksten, volgorde, bewijs, knoppen en formulieren kun je op een bestaande site aanpassen. Een nieuwe site is pas nodig als de techniek of de structuur je tegenhoudt. Lees daarover meer in het artikel [nieuwe website of optimaliseren](/kennisbank/nieuwe-website-of-optimaliseren).",
      },
      {
        q: "Hoe weet je of een website converteert?",
        a: "Door aanvragen te tellen, niet bezoekers. Houd per maand bij hoeveel aanvragen, belafspraken of boekingen via de site binnenkomen en via welke pagina. Zie je veel bezoek op een pagina en weinig aanvragen, dan zit daar je groeikans.",
      },
      {
        q: "Wat kost een conversiegerichte website?",
        a: "Dat hangt af van het aantal pagina's, de teksten en de functies die je nodig hebt, zoals online boeken of koppelingen. Bij MegaOnline begint een Conversie Website vanaf € 2.500. In de gratis website scan krijg je een indicatie voor jouw situatie.",
      },
      {
        q: "Is een converterende website hetzelfde als een website met goede SEO?",
        a: "Nee. Vindbaarheid zorgt dat mensen je site bereiken. Een converterende website zorgt dat ze daarna een aanvraag doen. Je hebt allebei nodig, maar meer bezoekers op een site die niet converteert levert weinig extra aanvragen op.",
      },
    ],
    links: [
      {
        to: "/diensten/conversie-website",
        label: "Conversiegerichte website laten maken",
        tekst: "Een website die gebouwd is vanuit de aanvraag, de boeking of de belafspraak.",
      },
      {
        to: "/kennisbank/vertrouwen-wekken-zakelijke-website",
        label: "Vertrouwen wekken met je website",
        tekst: "Welk bewijs een bezoeker zoekt voordat hij een aanvraag durft te sturen.",
      },
      {
        to: "/kennisbank/website-levert-geen-aanvragen-op",
        label: "Waarom je website geen aanvragen oplevert",
        tekst: "De plekken waar bezoekers het vaakst afhaken.",
      },
    ],
    metaTitle: "Wat is een converterende website? | MegaOnline",
    metaDescription:
      "Een converterende website laat bezoekers een aanvraag, boeking of belafspraak doen. Wat het is, hoe je hem herkent en wat je morgen zelf kunt controleren.",
  },
  {
    slug: "wat-moet-er-op-een-werken-bij-pagina",
    naam: "Wat moet er op een werken-bij pagina",
    vraag: "Wat moet er op een werken-bij pagina staan?",
    pijler: "Zo werkt het echt",
    icoon: "user-search",
    branche: "Bedrijven die personeel zoeken",
    teaser:
      "Een sollicitant heeft vragen die hij in een gesprek niet durft te stellen. Een goede werken-bij pagina beantwoordt ze voordat hij gaat twijfelen.",
    antwoord:
      "Op een werken-bij pagina staan de antwoorden op de vragen die een sollicitant zichzelf stelt voordat hij reageert: wat ga ik doen, wat verdien ik ongeveer, met wie werk ik en wat gebeurt er als ik reageer. Sfeer en kernwaarden helpen pas als die praktische vragen beantwoord zijn.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-06",
    gewijzigd: "2026-11-06",
    cta: "scan",
    eindKop: "Wil je zien waar sollicitanten op jouw werken-bij pagina afhaken?",
    eindLead:
      "MegaOnline kijkt persoonlijk naar je website, loopt de route naar een sollicitatie na zoals een kandidaat dat op zijn telefoon doet en stuurt je de punten waar het weglekt. Wil je eerst weten wat er bij een eigen werken-bij site komt kijken, lees dan meer over een [werken-bij website laten maken](/diensten/werken-bij-websites).",
    secties: [
      {
        kop: "Een sollicitant leest anders dan jij schrijft",
        accent: "anders dan jij schrijft",
        alineas: [
          "De meeste werken-bij pagina's beginnen bij het bedrijf. Een foto van het pand, een alinea over de geschiedenis, drie kernwaarden en daaronder de vacatures. Dat is de volgorde waarin een werkgever over zichzelf vertelt. Het is niet de volgorde waarin iemand besluit om te reageren.",
          "Iemand die al een baan heeft, kijkt vooral of overstappen het risico waard is. Hij leest geen kernwaarden. Hij zoekt naar het antwoord op een handvol vragen die hij in een sollicitatiegesprek niet zo snel hardop stelt. Wat verdien ik ongeveer? Hoe laat begin ik? Hoeveel reistijd is het? Wie wordt mijn leidinggevende? Moet ik in het weekend werken? Staat dat er niet, dan vult hij het zelf in. Meestal niet in jouw voordeel.",
          "Een werken-bij pagina werkt dus hetzelfde als een pagina die klanten moet overtuigen. Het gaat om vertrouwen en om twijfel weghalen op de plek waar die ontstaat. Dat principe staat uitgewerkt in het artikel over [wat een converterende website is](/kennisbank/wat-is-een-converterende-website). Alleen heet de aanvraag hier sollicitatie.",
        ],
      },
      {
        kop: "Een voorbeeld: de monteur die al een baan heeft",
        accent: "al een baan heeft",
        alineas: [
          "Neem een installatiebedrijf dat al maanden een servicemonteur zoekt. De werken-bij pagina noemt een \"marktconform salaris\", \"een informele sfeer\" en \"doorgroeimogelijkheden\". Onderaan staat een formulier met een verplichte upload voor cv en motivatiebrief.",
          "Een monteur die bij een ander bedrijf werkt, leest dit 's avonds op zijn telefoon. Marktconform zegt hem niets. Hij weet niet of hij een bus mee naar huis krijgt, hoe vaak hij storingsdienst draait of of hij in zijn eigen regio blijft. Zijn cv staat niet op zijn telefoon en een motivatiebrief schrijft hij niet tussen het eten en de televisie door. Hij sluit het tabblad.",
          "Dezelfde pagina kan het ook anders. Bovenaan staat in één zin wat de monteur doet en in welk gebied. Daaronder een salarisbandbreedte, de werktijden, hoe vaak de storingsdienst langskomt en dat de bus mee naar huis gaat. Een foto van de echte collega's bij de echte bussen. Een naam en een telefoonnummer van wie hij kan bellen. En een formulier dat alleen om naam en telefoonnummer vraagt, met een WhatsApp-knop ernaast.",
          "Dat tweede formulier levert niet vanzelf meer sollicitaties op. Het haalt wel de redenen weg waarom een geschikte kandidaat nu niet reageert.",
        ],
      },
      {
        kop: "Wat er op een werken-bij pagina hoort",
        accent: "hoort",
        alineas: [
          "Gebruik dit als controlelijst voor je eigen pagina. De volgorde is bewust: eerst het werk, dan de mensen, dan pas het verhaal.",
        ],
        punten: [
          {
            titel: "Wat iemand op een gewone dag doet",
            tekst:
              "Geen lijst met taken, maar een beschrijving van een werkdag. Waar begint hij, met wie werkt hij, wat is lastig en wat is leuk. Wie dat leest, weet of het bij hem past.",
          },
          {
            titel: "Salaris, uren en voorwaarden",
            tekst:
              "Een bandbreedte is genoeg. Noem ook de werktijden, het aantal uren, of er avond- of weekendwerk is en wat er naast het salaris bij zit. Dit is de vraag die sollicitanten het minst durven te stellen en het meest willen weten.",
          },
          {
            titel: "Wat je niet hoeft te hebben",
            tekst:
              "Een vacature met tien eisen schrikt ook mensen af die het werk prima kunnen. Zet erbij welke eisen geen harde eis zijn. Een diploma dat je zelf betaalt, een rijbewijs dat je onderweg mag halen of ervaring die niet nodig is.",
          },
          {
            titel: "Echte mensen en echte foto's",
            tekst:
              "Collega's met naam en functie, op de werkplek waar de sollicitant ook komt te staan. Stockfoto's van lachende mensen aan een vergadertafel vertellen een monteur of kok dat de pagina niet voor hem gemaakt is.",
          },
          {
            titel: "Wat er gebeurt nadat iemand reageert",
            tekst:
              "Hoeveel stappen er zijn, hoe lang het duurt en wie contact opneemt. Onzekerheid over wat er na het versturen gebeurt, is een reden om niet te versturen.",
          },
          {
            titel: "Een sollicitatie die op een telefoon lukt",
            tekst:
              "Een kort formulier, een cv dat niet verplicht is en een alternatief via mail of WhatsApp. Wie al werk heeft, solliciteert 's avonds op de bank en niet achter een laptop.",
          },
        ],
        daarna: [
          "Sfeer, missie en kernwaarden mogen er ook op. Alleen helpen ze pas als de vragen hierboven beantwoord zijn. Vertrouwen bouw je op met dingen die iemand kan controleren. Dat geldt voor sollicitanten net zo goed als voor klanten, zie het artikel over [vertrouwen wekken met je website](/kennisbank/vertrouwen-wekken-zakelijke-website).",
        ],
      },
      {
        kop: "Hoe de eigen werken-bij pagina van MegaOnline is opgebouwd",
        accent: "MegaOnline",
        alineas: [
          "Een voorbeeld dat je zelf kunt bekijken is de pagina [werken bij MegaOnline](/werken-bij). Het is de eigen vacaturepagina van MegaOnline en geen klantvoorbeeld. Er staan stages, freelance en parttime rollen op.",
          "Per rol staat er een kaart met het soort rol, één zin over het werk en de ervaring die nodig is. Elke rol heeft een eigen pagina met wat je gaat doen, wat je meebrengt, wat je niet hoeft te hebben en wat je er leert. Een cv mag, maar een paar zinnen over jezelf is genoeg om te beginnen. Reageren kan via het formulier, per mail of met een appje.",
          "De procedure staat er in drie stappen bij: iets sturen, een kort belgesprek en daarna een kleine opdracht uit de praktijk. Er staat ook bij hoe snel er een reactie komt, ook als het antwoord nee is. Dat is geen versiering. Het is precies de informatie waardoor iemand die twijfelt toch op verzenden drukt.",
          "Heb je veel vacatures of wil je ze in Google laten verschijnen, dan wordt het meer dan één pagina. Elke vacature krijgt dan een eigen pagina met gestructureerde gegevens. Wat daarbij komt kijken lees je bij [werken-bij websites](/diensten/werken-bij-websites).",
        ],
      },
    ],
    doen: [
      "Open je werken-bij pagina 's avonds op je telefoon en probeer zonder cv te solliciteren.",
      "Vraag twee collega's welke vraag ze zelf hadden voordat ze solliciteerden en zet het antwoord op de pagina.",
      "Zet bij elke vacature een salarisbandbreedte, de werktijden en of er avond- of weekendwerk is.",
      "Vervang elke stockfoto door een foto van echte collega's op de werkplek.",
      "Schrijf in drie stappen op wat er gebeurt nadat iemand reageert en zet dat direct boven het formulier.",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen een werken-bij pagina en een werken-bij website?",
        a: "Een werken-bij pagina is een sectie op je bedrijfssite, bijvoorbeeld op /werken-bij. Een werken-bij website is een aparte site die helemaal om werken en solliciteren draait. Welke past hangt af van hoeveel vacatures je hebt en hoeveel je wilt laten zien.",
      },
      {
        q: "Moet het salaris op een werken-bij pagina staan?",
        a: "Het helpt in elk geval. Salaris is de vraag die sollicitanten het minst durven te stellen. Een bandbreedte geeft genoeg houvast en houdt de mensen weg voor wie het niet past.",
      },
      {
        q: "Hoeveel velden mag een sollicitatieformulier hebben?",
        a: "Zo weinig als je nodig hebt om contact op te nemen. Naam, telefoonnummer of e-mailadres en eventueel een korte toelichting zijn vaak genoeg. Maak een cv optioneel, want op een telefoon staat dat meestal niet bij de hand.",
      },
      {
        q: "Wat zet je op een werken-bij pagina als je geen vacatures hebt?",
        a: "Laat de pagina staan en vertel hoe het is om bij je te werken, wie je in de toekomst zoekt en hoe iemand een open sollicitatie stuurt. Zo bouw je een lijst op van mensen die je kunt bellen zodra er wel een plek is.",
      },
      {
        q: "Kunnen vacatures van een werken-bij pagina in Google verschijnen?",
        a: "Ze kunnen in aanmerking komen als elke vacature een eigen pagina met gestructureerde gegevens heeft. Of en waar ze verschijnen bepaalt Google, dat kan niemand garanderen.",
      },
    ],
    links: [
      {
        to: "/diensten/werken-bij-websites",
        label: "Werken-bij website laten maken",
        tekst: "Een werken-bij pagina of aparte site die laat zien hoe het echt is om bij je te werken.",
      },
      {
        to: "/werken-bij",
        label: "Werken bij MegaOnline",
        tekst: "De eigen vacaturepagina van MegaOnline, met per rol een eigen pagina.",
      },
      {
        to: "/kennisbank/vertrouwen-wekken-zakelijke-website",
        label: "Vertrouwen wekken met je website",
        tekst: "Welk bewijs een bezoeker zoekt voordat hij een stap durft te zetten.",
      },
    ],
    metaTitle: "Wat moet er op een werken-bij pagina staan? | MegaOnline",
    metaDescription:
      "Wat moet er op een werken-bij pagina staan? De vragen die sollicitanten zichzelf stellen, een voorbeeld uit de praktijk en vijf dingen die je morgen kunt doen.",
  },
  {
    slug: "hoe-komen-je-vacatures-in-google",
    naam: "Vacatures in Google",
    vraag: "Hoe komen je vacatures in Google te staan?",
    pijler: "Zo werkt het echt",
    icoon: "search-check",
    branche: "Bedrijven die personeel zoeken",
    teaser:
      "Google toont vacatures in een eigen blok bovenaan de zoekresultaten. Daar kom je niet in met een mooie tekst, maar met een eigen pagina per vacature die Google kan lezen.",
    antwoord:
      "Je vacatures komen in Google te staan als elke vacature een eigen pagina op je site heeft met gestructureerde gegevens: een vast blok code met de functie, de werkgever, de locatie en de datum van plaatsing. Google leest die gegevens en kan de vacature dan tonen in het vacatureblok bovenaan de zoekresultaten, al bepaalt Google zelf of dat gebeurt.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-10",
    gewijzigd: "2026-11-10",
    cta: "scan",
    eindKop: "Wil je zien waar het op jouw vacaturepagina's weglekt?",
    eindLead:
      "MegaOnline kijkt persoonlijk naar je website, controleert of je vacatures een eigen pagina met de juiste gegevens hebben en stuurt je de punten die het ziet. Wil je eerst weten wat er bij een eigen werken-bij site komt kijken, lees dan meer over een [werken-bij website laten maken](/diensten/werken-bij-websites).",
    secties: [
      {
        kop: "Waarom je vacature wel online staat maar niet in Google",
        accent: "niet in Google",
        alineas: [
          "Zoek op je telefoon naar een functie met een plaatsnaam erachter, bijvoorbeeld chauffeur Utrecht. Bovenaan verschijnt vaak een apart blok met vacatures, met per regel de functie, de werkgever, de plaats en soms het salaris. Dat blok is de vacatureomgeving van Google. Wie daarin staat, wordt gezien voordat iemand een vacaturesite opent.",
          "Google vult dat blok niet door je vacaturetekst te lezen zoals een sollicitant dat doet. Het zoekt naar een vast formaat: gestructureerde gegevens van het type JobPosting. Dat is een stukje code op de pagina dat een bezoeker niet ziet. Er staat per vacature de functietitel in, een omschrijving, de werkgever, de werklocatie en de datum van plaatsing. Ontbreekt dat, dan is je vacature voor Google een gewone webpagina tussen alle andere.",
          "Dat is de reden dat veel bedrijven er niet in staan, ook als de vacature al maanden online is. De tekst is er wel. Het formaat ontbreekt.",
        ],
      },
      {
        kop: "Een voorbeeld: het transportbedrijf met de vacatures in een pdf",
        accent: "in een pdf",
        alineas: [
          "Neem een transportbedrijf dat chauffeurs zoekt. Op de site staat een pagina Vacatures met drie functies onder elkaar. Bij elke functie staat een knop om een pdf met de volledige tekst te downloaden. Reageren gaat per mail.",
          "Een chauffeur die al ergens rijdt, zoekt 's avonds naar werk in zijn regio. In het vacatureblok van Google ziet hij functies van andere vervoerders en van vacaturesites. Dit transportbedrijf staat er niet tussen. Google vindt één pagina met drie functies en geen gestructureerde gegevens. De pdf's zijn los te vinden, maar een pdf komt niet in het vacatureblok.",
          "Krijgt elke functie een eigen pagina, met de tekst op die pagina zelf en de gestructureerde gegevens erbij, dan heeft Google drie vacatures die het kan tonen. De chauffeur die erop klikt, komt op de site van het bedrijf terecht. Niet op een vacaturesite waar de vacature van de concurrent er direct naast staat.",
        ],
      },
      {
        kop: "Wat Google nodig heeft om een vacature te tonen",
        accent: "nodig heeft",
        alineas: [
          "Google noemt een deel van de gegevens verplicht en een deel aanbevolen. Voor een werkgever komt het neer op deze vijf punten.",
        ],
        punten: [
          {
            titel: "Eén vacature per pagina",
            tekst:
              "Google wil de gegevens alleen op een pagina met één vacature. Een overzicht met alle functies mag blijven bestaan, maar daar horen de gegevens niet op. Elke functie krijgt een eigen adres, zoals de rollen op de pagina [werken bij MegaOnline](/werken-bij) elk een eigen pagina hebben.",
          },
          {
            titel: "De verplichte gegevens",
            tekst:
              "Functietitel, omschrijving, werkgever, werklocatie en de datum van plaatsing. Ontbreekt er één, dan komt de vacature niet in aanmerking. Werk je volledig op afstand, dan geef je dat apart aan, samen met het land waar de sollicitant moet wonen.",
          },
          {
            titel: "Wat je beter wel invult",
            tekst:
              "Salaris, het soort dienstverband en een einddatum zijn niet verplicht. Google gebruikt ze wel. Een salaris dat al in het vacatureblok staat, beantwoordt de vraag die een sollicitant het eerst heeft. Waarom die vraag zo zwaar weegt, lees je in het artikel over [wat er op een werken-bij pagina moet staan](/kennisbank/wat-moet-er-op-een-werken-bij-pagina).",
          },
          {
            titel: "Gegevens die kloppen met de pagina",
            tekst:
              "De code moet hetzelfde zeggen als de tekst die de sollicitant ziet. Staat er in de code een ander salaris of een andere plaats dan op de pagina, dan kan Google de vacature weren.",
          },
          {
            titel: "Een vacature die op tijd verdwijnt",
            tekst:
              "Een vervulde vacature haal je offline of je geeft hem een einddatum. Laat je verlopen vacatures staan, dan kan Google vacatures van je site weren. Andersom gaat het ook mis: een einddatum die niemand bijhoudt, haalt een vacature die nog openstaat stilletjes uit het blok.",
          },
        ],
        daarna: [
          "Technisch is dit geen groot werk als het in één keer goed wordt ingericht. Het gaat mis als iemand het per vacature met de hand moet bijhouden. Daarom hoort het formaat uit dezelfde bron te komen als de tekst op de pagina. Dan krijgt een nieuwe vacature de gegevens vanzelf mee.",
        ],
      },
      {
        kop: "Je eigen site of een vacaturesite",
        accent: "of een vacaturesite",
        alineas: [
          "Er is nog een route naar het vacatureblok: via vacaturesites. Die leveren de gegevens zelf aan Google. Plaats je een vacature daar, dan kan hij in Google verschijnen zonder dat je eigen site iets hoeft te doen.",
          "Het verschil zit in waar de sollicitant terechtkomt. Via een vacaturesite landt hij op een pagina met jouw vacature tussen die van anderen, in de opmaak van die site. Via je eigen pagina landt hij bij jou: je eigen foto's, je eigen collega's en een sollicitatie die in je eigen mailbox binnenkomt. Het vacatureblok toont soms meerdere plekken waar iemand kan solliciteren. Staat je eigen site ertussen, dan heeft de sollicitant die keuze.",
          "Het hoeft geen keuze tussen de twee te zijn. Veel werkgevers gebruiken allebei. Alleen bouw je met je eigen pagina's iets op dat blijft staan als je stopt met betalen voor een plaatsing.",
        ],
      },
      {
        kop: "Hoe je controleert of het werkt",
        accent: "of het werkt",
        alineas: [
          "In Google Search Console zie je of Google de vacatures op je site herkent. Er is een apart overzicht voor vacatures, met de pagina's die in orde zijn en de pagina's met fouten. Per fout staat erbij welk gegeven ontbreekt. Met de URL-inspectie zie je per pagina wat Google heeft gelezen en vraag je Google een nieuwe vacature op te halen.",
          "Verschijnt een vacature na een paar weken nog niet terwijl Google Search Console geen fouten toont, dan ligt het vaak aan de pagina zelf. Een tekst van drie regels, een locatie die niet klopt of een vacaturepagina waar vanaf de rest van je site geen link naartoe gaat. Ook als alles in orde is, bepaalt Google of en waar een vacature verschijnt. Niemand kan dat garanderen.",
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "Bij een [werken-bij website laten maken](/diensten/werken-bij-websites) krijgt elke vacature bij MegaOnline een eigen pagina. De gestructureerde gegevens komen uit dezelfde bron als de tekst die de sollicitant leest, dus ze lopen niet uit elkaar. Een gesloten vacature gaat offline of krijgt een einddatum.",
          "Komen je vacatures uit een wervingssysteem, dan kijkt MegaOnline of dat systeem een koppeling of een vacaturelijst voor websites aanbiedt. Hoe zo'n koppeling werkt, lees je bij [koppelingen en automatiseringen](/diensten/integraties).",
        ],
      },
    ],
    doen: [
      "Zoek op je telefoon naar je eigen functietitel met je plaatsnaam en kijk wie er in het vacatureblok van Google staat.",
      "Tel hoeveel vacatures op je site een eigen pagina hebben. Een pdf of een uitklapblok telt niet mee.",
      "Zet de volledige vacaturetekst op de pagina zelf in plaats van in een download.",
      "Open Google Search Console en kijk of er een overzicht voor vacatures is en welke fouten erin staan.",
      "Loop je vacatures na en haal elke vervulde functie vandaag offline.",
    ],
    faq: [
      {
        q: "Wat is Google for Jobs?",
        a: "Zo heet de vacatureomgeving van Google: het blok met vacatures dat bovenaan verschijnt als je zoekt op een functie, vaak met een plaatsnaam erbij. Het is geen aparte site waar je een vacature plaatst. Google vult het met vacatures die het op websites en vacaturesites vindt.",
      },
      {
        q: "Kost het geld om vacatures in Google te zetten?",
        a: "Google rekent er niets voor. De kosten zitten in het inrichten van je site: een eigen pagina per vacature en de gestructureerde gegevens die daarbij horen.",
      },
      {
        q: "Hoe lang duurt het voordat een vacature in Google staat?",
        a: "Dat verschilt per site en per vacature. Google moet de pagina eerst vinden en lezen. Met een sitemap en de URL-inspectie in Google Search Console help je dat op weg. Of en wanneer de vacature in het blok verschijnt, bepaalt Google.",
      },
      {
        q: "Kan een open sollicitatie ook in het vacatureblok?",
        a: "Nee. Google wil gegevens voor een echte functie die openstaat. Een open sollicitatie zet je op je werken-bij pagina, zonder de gestructureerde gegevens voor vacatures.",
      },
      {
        q: "Moet je je vacatures dan niet meer op vacaturesites zetten?",
        a: "Dat hoeft niet. Vacaturesites kunnen je vacature ook in Google brengen. Je eigen pagina zorgt dat een sollicitant ook rechtstreeks bij jou kan uitkomen, met een sollicitatie die direct bij jou binnenkomt.",
      },
    ],
    links: [
      {
        to: "/diensten/werken-bij-websites",
        label: "Werken-bij website laten maken",
        tekst: "Een eigen pagina per vacature, met de gegevens die Google nodig heeft.",
      },
      {
        to: "/kennisbank/wat-moet-er-op-een-werken-bij-pagina",
        label: "Wat moet er op een werken-bij pagina staan",
        tekst: "De vragen die een sollicitant zichzelf stelt voordat hij reageert.",
      },
      {
        to: "/werken-bij",
        label: "Werken bij MegaOnline",
        tekst: "De eigen vacaturepagina van MegaOnline, met per rol een eigen pagina.",
      },
    ],
    metaTitle: "Hoe komen je vacatures in Google te staan? | MegaOnline",
    metaDescription:
      "Vacatures in Google krijgen werkt met een eigen pagina per vacature en gestructureerde gegevens. Wat Google nodig heeft, wat er misgaat en hoe je het controleert.",
  },
  {
    slug: "doordeweeks-meer-boekingen",
    naam: "Doordeweeks meer boekingen",
    vraag: "Hoe krijg je doordeweeks meer boekingen voor je activiteitenbedrijf?",
    pijler: "Branche",
    icoon: "users",
    branche: "Activiteitenbedrijven",
    teaser:
      "Doordeweeks komt er geen zaterdagklant met korting. Er komt een andere klant, met andere vragen. Een site die alleen voor het weekend is geschreven, laat die klant zoeken.",
    antwoord:
      "Doordeweeks meer boekingen krijg je door je te richten op de klanten die op een dinsdag wel kunnen: scholen, bedrijven, ouders met jonge kinderen en groepen. Die klanten zoeken op andere woorden en willen andere dingen weten dan de zaterdaggast, dus ze hebben een eigen plek op je website nodig waar ze direct kunnen zien wat er kan en kunnen boeken.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-13",
    gewijzigd: "2026-11-13",
    cta: "scan",
    eindKop: "Wil je zien waar doordeweekse boekingen op jouw site weglekken?",
    eindLead:
      "MegaOnline kijkt persoonlijk naar je website en loopt de route na die een school, een bedrijf of een ouder op een doordeweekse dag aflegt. Je krijgt de punten te zien waar die klant nu afhaakt. Wil je eerst weten wat er bij een [website voor activiteitenbedrijven](/branches/activiteitenbedrijven) komt kijken, lees dan daar verder.",
    secties: [
      {
        kop: "Waarom korting alleen de dinsdag niet vult",
        accent: "korting alleen",
        alineas: [
          "Bijna elke escaperoom, klimhal of kartbaan kent het: de zaterdag zit vol, de dinsdagmiddag staat leeg. De eerste reflex is een actie. Tien procent korting op doordeweekse tijdsloten, een banner op de homepage en een bericht op social media.",
          "Dat werkt maar half. De mensen die op die korting reageren zijn vaak dezelfde mensen die anders op zaterdag waren gekomen en nu een middag vrij nemen of hun bezoek verschuiven. Je verkoopt dan hetzelfde uitje voor minder geld. De zaterdag wordt iets rustiger, de dinsdag iets drukker en de omzet blijft ongeveer gelijk.",
          "De klant die je doordeweeks echt mist, reageert niet op die korting. Die zoekt iets anders.",
        ],
      },
      {
        kop: "Doordeweeks komt er een andere klant",
        accent: "een andere klant",
        alineas: [
          "Op een doordeweekse dag kunnen vooral mensen die niet aan een kantoorrooster vastzitten of die juist namens een kantoor boeken. Dat zijn een paar duidelijke groepen. Elk van die groepen beslist op een eigen manier.",
        ],
        punten: [
          {
            titel: "Scholen en kinderopvang",
            tekst:
              "Een leerkracht die een schoolreisje of een uitje voor groep acht plant, wil weten of er begeleiding is, hoe het zit met veiligheid, wat het per leerling kost en of de school achteraf een factuur kan krijgen. Een prijs per tijdslot voor maximaal zes personen zegt hem niets.",
          },
          {
            titel: "Bedrijven en teams",
            tekst:
              "Een officemanager die een teamuitje regelt, boekt bijna altijd doordeweeks. Hij zoekt een arrangement met eten erbij, een ruimte voor de groep, een vaste prijs per persoon en een offerte die hij kan doorsturen. Hij boekt zelden op impuls en vergelijkt meestal een paar locaties.",
          },
          {
            titel: "Ouders met jonge kinderen",
            tekst:
              "Op woensdagmiddag en tijdens studiedagen zoeken ouders iets om te doen, vaak dezelfde dag nog. Ze willen op hun telefoon zien of er nu plek is, tot welke leeftijd het leuk is en of er iets te eten is. Kinderfeestjes vallen ook vaak op een woensdag.",
          },
          {
            titel: "Groepen en dagjesmensen",
            tekst:
              "Verenigingen, vriendengroepen met vrije dagen en toeristen in de vakantie. Ze komen niet per se voor een aanbieding. Ze komen omdat het dan rustiger is en er ruimte is voor een grotere groep.",
          },
        ],
        daarna: [
          "Geen van deze klanten zoekt op dezelfde woorden als de zaterdaggast. Ze typen schooluitje, teamuitje, kinderfeestje of iets met studiedag erin, meestal met een plaatsnaam erachter. Heeft je site daar geen pagina voor, dan vinden ze een aanbieder die dat wel heeft. Hoe Google bepaalt welke pagina bij zo'n zoekvraag past, lees je in [wat SEO is](/kennisbank/wat-is-seo).",
        ],
      },
      {
        kop: "Een voorbeeld: de klimhal en de leerkracht",
        accent: "de leerkracht",
        alineas: [
          "Neem een klimhal met een nette site. Bovenaan foto's van de wanden, een knop om een tijdslot te boeken en de prijzen voor een losse klimsessie. Op zaterdag werkt dat prima: een stel of een gezin weet wat het wil en boekt.",
          "Op maandagavond zoekt een leerkracht naar een sportief uitje voor dertig leerlingen op een dinsdag in de lente. Hij komt op de homepage, ziet tijdsloten voor kleine groepen en prijzen per persoon, maar niets over scholen. Of er instructeurs zijn, of een groep van dertig in één keer kan, of de school op rekening kan betalen: het staat er niet. Hij kan bellen, maar het is avond en de hal is dicht. Dus opent hij het volgende zoekresultaat.",
          "Aan de klimhal lag het niet. De wanden waren er, de instructeurs ook en op dinsdag was er ruimte genoeg. Alleen de website was geschreven voor de klant die op zaterdag al kwam.",
        ],
      },
      {
        kop: "Wat je website doordeweeks moet laten zien",
        accent: "doordeweeks",
        alineas: [
          "Het antwoord zit dus niet in een grotere actie, maar in een site die de doordeweekse klant net zo goed bedient als de zaterdaggast. Dat komt neer op vier dingen.",
        ],
        punten: [
          {
            titel: "Een eigen pagina per doelgroep",
            tekst:
              "Een pagina voor scholen, een voor bedrijfsuitjes en een voor kinderfeestjes. Elk met de vragen van die groep beantwoord, in hun woorden en met een eigen knop. Zo'n pagina kan gevonden worden op de zoekvraag van die groep en geeft de bezoeker meteen het gevoel dat hij goed zit.",
          },
          {
            titel: "Beschikbaarheid die je kunt zien",
            tekst:
              "Laat zien dat er op dinsdag en woensdag ruimte is. Een agenda met vrije tijdsloten op de telefoon overtuigt een ouder die vandaag nog iets zoekt sneller dan elke actiebanner. Hoe je reserveert zonder dat iemand hoeft te bellen lees je bij [online boeken en reserveren](/diensten/online-boeken).",
          },
          {
            titel: "Prijzen voor groepen, niet alleen per tijdslot",
            tekst:
              "Een school en een bedrijf rekenen per persoon of per groep. Noem een vanafprijs voor een groep, zeg wat erbij zit en hoe ze kunnen betalen. Waarom een prijs op de site meer aanvragen oplevert dan een prijs op aanvraag, lees je in het artikel over [prijzen op je website zetten](/kennisbank/prijzen-op-website-verhuurbedrijf).",
          },
          {
            titel: "Een korte aanvraag voor wat niet direct te boeken is",
            tekst:
              "Een teamuitje voor veertig mensen met diner boek je niet in een tijdslot. Geef die klant een kort formulier met datum, aantal personen en wat hij wil doen. Meer vragen kunnen later, als hij al contact heeft gezocht.",
          },
        ],
        daarna: [
          "Een doordeweekse actie mag daarna best. Alleen werkt hij dan als extra reden voor een klant die je site al begrijpt, in plaats van als enige reden om te komen.",
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "MegaOnline begint bij een activiteitenbedrijf met de vraag wie er op welke dag komt. Daaruit volgt de structuur van de site: welke doelgroepen een eigen pagina krijgen, welke vragen daar beantwoord worden en waar iemand direct kan boeken of een aanvraag doet.",
          "Het boeken zelf wordt ingebouwd op je eigen website. Tijdsloten, arrangementen voor groepen, kinderfeestjes en cadeaubonnen komen in één agenda, met online betalen en een bevestiging. Doordeweekse acties zet je zelf aan en uit. Waar bezoekers daarna nog afhaken, lees je in het artikel over [waar boekingen weglekken op je website](/kennisbank/waar-boekingen-weglekken).",
        ],
      },
    ],
    doen: [
      "Kijk in je agenda van de afgelopen maanden welke doordeweekse boekingen er wel waren en van wie ze kwamen.",
      "Zoek op je telefoon naar schooluitje, teamuitje en kinderfeestje met je plaatsnaam erachter en kijk wie er bovenaan staat.",
      "Schrijf de vragen op die scholen en bedrijven aan de telefoon stellen en controleer of het antwoord op je site staat.",
      "Probeer op een woensdagochtend op je telefoon een plek voor diezelfde middag te boeken en tel hoe lang het duurt.",
      "Zet voor één doelgroep een eigen pagina op je site, met een vanafprijs voor een groep en een knop om te boeken of aan te vragen.",
    ],
    faq: [
      {
        q: "Werkt een doordeweekse korting om stille dagen te vullen?",
        a: "Soms, maar vaak verschuif je er vooral bezoekers mee die anders in het weekend waren gekomen. Dan verkoop je hetzelfde uitje voor minder geld. Een korting werkt beter als extra reden voor een klant die doordeweeks toch al kan, zoals een school of een bedrijf.",
      },
      {
        q: "Welke klanten boeken vooral doordeweeks?",
        a: "Scholen en kinderopvang, bedrijven die een teamuitje plannen, ouders met jonge kinderen op woensdagmiddag en studiedagen. Daarnaast groepen of toeristen in de vakantie. Elk van die groepen heeft eigen vragen over prijs, begeleiding en betalen.",
      },
      {
        q: "Heb je een aparte pagina nodig voor bedrijfsuitjes en schoolreisjes?",
        a: "Ja, als je die klanten wilt bereiken. Een school en een bedrijf zoeken op hun eigen woorden en willen hun eigen vragen beantwoord zien. Een eigen pagina kan op die zoekvraag gevonden worden en laat de bezoeker direct zien dat hij goed zit.",
      },
      {
        q: "Moet een groep online kunnen boeken of een aanvraag doen?",
        a: "Dat hangt af van de groep. Een kinderfeestje of een tijdslot voor een klas kan prima direct geboekt worden. Een teamuitje met eten en een aparte ruimte is vaak maatwerk. Daar werkt een kort aanvraagformulier beter.",
      },
    ],
    links: [
      {
        to: "/branches/activiteitenbedrijven",
        label: "Website voor activiteitenbedrijven",
        tekst: "Wat een site voor een escaperoom, klimhal of kartbaan nodig heeft om stille dagen te vullen.",
      },
      {
        to: "/diensten/online-boeken",
        label: "Online boeken en reserveren",
        tekst: "Tijdsloten, arrangementen en cadeaubonnen in één agenda op je eigen site.",
      },
      {
        to: "/kennisbank/waar-boekingen-weglekken",
        label: "Waar boekingen weglekken op je website",
        tekst: "De plekken waar een bezoeker die wil boeken toch afhaakt.",
      },
    ],
    metaTitle: "Doordeweeks meer boekingen krijgen | MegaOnline",
    metaDescription:
      "Doordeweeks meer boekingen voor je escaperoom, klimhal of kartbaan? Niet met meer korting, maar met een site voor de klanten die op een dinsdag wel kunnen.",
  },
  {
    slug: "wat-moet-er-op-de-website-van-een-verhuurbedrijf",
    naam: "Website voor een verhuurbedrijf",
    vraag: "Wat moet er op de website van een verhuurbedrijf staan?",
    pijler: "Branche",
    icoon: "truck",
    branche: "Verhuurbedrijven",
    teaser:
      "Een huurder stelt drie vragen in een vaste volgorde. Een verhuursite die ze niet in die volgorde beantwoordt, laat hem bellen of doorklikken naar de concurrent.",
    antwoord:
      "Op de website van een verhuurbedrijf horen de antwoorden op de drie vragen die elke huurder in dezelfde volgorde stelt: heb je wat ik nodig heb, is het vrij op mijn datum en wat kost het alles bij elkaar. Pas als die drie beantwoord zijn, heeft een knop om te reserveren of aan te vragen zin.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-17",
    gewijzigd: "2026-11-17",
    cta: "scan",
    eindKop: "Wil je zien waar huurders op jouw site afhaken?",
    eindLead:
      "Beantwoord vier korte vragen. MegaOnline kijkt persoonlijk naar je website en laat zien bij welke van de drie vragen huurders weglekken voordat ze een aanvraag doen. Wil je eerst meer weten over de opzet, lees dan wat er bij een [website voor verhuurbedrijven](/branches/verhuurbedrijven) komt kijken.",
    secties: [
      {
        kop: "De drie vragen van een huurder, in deze volgorde",
        accent: "in deze volgorde",
        alineas: [
          "Wie iets wil huren, zoekt niet naar een bedrijf. Hij zoekt naar een ding op een datum. Een aanhanger voor zaterdag, een hoogwerker voor drie dagen volgende week, een partytent voor een tuinfeest over een maand. Daar volgen altijd dezelfde drie vragen uit.",
          "Eerst: heb je wat ik nodig heb? Niet alleen het artikel, ook de juiste maat of capaciteit. Daarna: is het vrij op mijn datum? Een tent die er is maar op die zaterdag al weg is, helpt hem niet. Pas als laatste: wat kost het, alles bij elkaar? Dus inclusief bezorging, borg en wat er gebeurt als hij een dag later terugbrengt.",
          "Die volgorde is geen toeval. Elke vraag is pas interessant als de vorige met ja is beantwoord. Een prijs zegt niets over een artikel dat niet past. Beschikbaarheid zegt niets over iets wat hij niet nodig heeft. Een goede verhuursite loopt met de huurder mee door die drie vragen. Een slechte gooit ze door elkaar of laat er twee weg.",
        ],
      },
      {
        kop: "Waar de meeste verhuursites stoppen",
        accent: "stoppen",
        alineas: [
          "Neem iemand die een partytent zoekt voor veertig gasten. Hij komt op een verhuursite, klikt op Partytenten en ziet vier foto's met een naam eronder. Hoeveel mensen er in elke tent passen staat er niet. Of de tent op zijn datum vrij is ook niet. Onderaan staat prijs op aanvraag en een knop naar het contactformulier.",
          "Hij heeft nu drie vragen en nul antwoorden. Het is zaterdagmiddag, dus bellen heeft weinig zin. Het tabblad ernaast is een verhuurder die per tent het aantal gasten noemt, een vanafprijs per weekend laat zien en een datumveld heeft. Daar komt de aanvraag binnen. Niet omdat die verhuurder beter of goedkoper is, maar omdat hij de vragen beantwoordde voordat ze gesteld werden.",
          "Dit is het patroon dat MegaOnline het vaakst ziet bij verhuurders: de site is een catalogus. Hij laat zien wat er is, maar stopt precies op het punt waar de huurder wil weten of het voor hem werkt. Het gevolg zie je niet in je bezoekersaantallen. Je ziet het aan het aantal telefoontjes met dezelfde vragen en aan de aanvragen die uitblijven.",
        ],
      },
      {
        kop: "Wat er per vraag op de pagina hoort",
        accent: "per vraag",
        alineas: [
          "Je hoeft geen webshop te worden om deze drie vragen te beantwoorden. Dit is per vraag het minimum dat op een artikelpagina hoort.",
        ],
        punten: [
          {
            titel: "Heb je wat ik nodig heb",
            tekst:
              "Deel je assortiment in naar toepassing en niet alleen naar productnaam. Iemand zoekt een tent voor veertig mensen, geen Tent 6x12. Zet bij elk artikel de twee of drie specificaties die de keuze bepalen: maat, capaciteit, gewicht of welk rijbewijs ervoor nodig is. Dat is genoeg om te weten of het past.",
          },
          {
            titel: "Is het vrij op mijn datum",
            tekst:
              "Het mooiste is een beschikbaarheid die direct meeloopt met je planning. Lukt dat niet, laat de huurder dan in elk geval zijn datum invullen in de aanvraag en zeg erbij hoe snel hij antwoord krijgt. Een aanvraag met een datum erin kun je in één keer beantwoorden. Een aanvraag zonder datum begint een mailwisseling.",
          },
          {
            titel: "Wat kost het, alles bij elkaar",
            tekst:
              "Een vanafprijs per periode, met borg, bezorging en wat wel en niet is inbegrepen ernaast. Waarom dat bijna altijd beter werkt dan prijs op aanvraag en hoe je het doet zonder je vast te leggen, staat uitgewerkt in het artikel over [prijzen op je website als verhuurbedrijf](/kennisbank/prijzen-op-website-verhuurbedrijf).",
          },
        ],
        daarna: [
          "Zijn die drie beantwoord, dan pas komt de knop. Of dat een aanvraag is of een directe reservering hangt af van wat je verhuurt. Maar de knop staat bij het artikel, niet alleen op een losse contactpagina.",
        ],
      },
      {
        kop: "Beschikbaarheid tonen zonder je agenda bloot te geven",
        accent: "zonder je agenda bloot te geven",
        alineas: [
          "De tweede vraag is de lastigste. Veel verhuurders laten hem weg omdat hun planning in een systeem, een spreadsheet of hun hoofd zit. Dat is begrijpelijk. Het is ook de vraag waarop de huurder het vaakst afhaakt, omdat hij zonder antwoord niet weet of hij verder moet zoeken.",
          "Er zijn drie niveaus. Het eenvoudigste is een datumveld in de aanvraag met een vaste reactietijd erbij. Het tweede is [online boeken en reserveren](/diensten/online-boeken) op je eigen site, waarbij de huurder ziet welke dagen nog vrij zijn en meteen kan vastleggen. Het derde is een [koppeling met je verhuursoftware](/diensten/integraties), zodat de beschikbaarheid op de site gelijk loopt met wat er werkelijk in je loods staat.",
          "Je hoeft niet te laten zien wie wat huurt. De huurder wil alleen weten of zijn datum kan. Vrij of niet vrij is genoeg.",
        ],
      },
      {
        kop: "En daarna pas de rest",
        accent: "daarna pas",
        alineas: [
          "Natuurlijk hoort er meer op een verhuursite. Wie je bent, waar je zit, hoe ophalen en terugbrengen werkt en wat andere klanten van je vinden. Dat is het deel dat vertrouwen geeft. Zonder vertrouwen huurt niemand iets van een paar duizend euro. Hoe je dat aanpakt lees je in [vertrouwen wekken op je zakelijke website](/kennisbank/vertrouwen-wekken-zakelijke-website).",
          "Maar die informatie werkt pas als de drie vragen beantwoord zijn. Een mooie pagina over je bedrijf haalt niemand terug die al is afgehaakt omdat hij niet wist of de tent groot genoeg was. Begin dus bij de drie vragen, op de pagina's van je best verhuurde artikelen. Daar zit de meeste winst, want daar komen de meeste huurders binnen.",
        ],
      },
    ],
    doen: [
      "Open de pagina van je best verhuurde artikel op je telefoon en kijk of je binnen tien seconden de drie vragen kunt beantwoorden.",
      "Zet bij je vijf populairste artikelen de twee specificaties die de keuze bepalen, zoals capaciteit of maat.",
      "Voeg een datumveld toe aan je aanvraagformulier en zet erbij binnen hoeveel uur iemand antwoord krijgt.",
      "Zet een knop om aan te vragen of te reserveren op elke artikelpagina, niet alleen op je contactpagina.",
      "Schrijf een week lang op welke vraag mensen stellen als ze bellen. Dat is de vraag die je site nog niet beantwoordt.",
    ],
    faq: [
      {
        q: "Heb ik een webshop nodig om online te verhuren?",
        a: "Nee. Een webshop is gebouwd om iets te verkopen en te verzenden, verhuur draait om periodes, beschikbaarheid en terugbrengen. Een site met duidelijke artikelpagina's, een datumveld en een aanvraag of reservering per artikel past meestal beter dan een webshop die je ombouwt.",
      },
      {
        q: "Kan ik beschikbaarheid laten zien zonder verhuursoftware?",
        a: "Ja. Een online agenda op je eigen site kan de beschikbaarheid bijhouden, ook zonder apart verhuursysteem. En als ook dat te veel is: een datumveld in de aanvraag plus een vaste reactietijd beantwoordt de vraag al half, omdat de huurder weet wanneer hij het hoort.",
      },
      {
        q: "Wat als een artikel online vrij lijkt maar toch weg is?",
        a: "Dat gebeurt als de site en je planning los van elkaar lopen. Houd je de beschikbaarheid met de hand bij, laat de huurder dan een aanvraag doen in plaats van direct vast te leggen. Wil je wel direct laten reserveren, dan moet de site gekoppeld zijn aan de plek waar je planning echt staat.",
      },
      {
        q: "Moet ik mijn hele assortiment op de site zetten?",
        a: "Niet per se. Begin met de artikelen die het meest worden gehuurd en het vaakst worden gezocht. Een goed uitgewerkte pagina voor je tien belangrijkste artikelen levert meer op dan honderd pagina's met alleen een foto en een naam.",
      },
      {
        q: "Helpt dit ook om gevonden te worden in Google?",
        a: "Indirect wel. Mensen zoeken op het ding dat ze nodig hebben, vaak met een plaats of een maat erbij. Een artikelpagina die precies dat beschrijft past beter bij die zoekvraag dan een algemene categoriepagina. Belangrijker nog is dat wie binnenkomt ook antwoord krijgt en niet meteen terug naar de zoekresultaten gaat.",
      },
    ],
    links: [
      {
        to: "/branches/verhuurbedrijven",
        label: "Website laten maken voor verhuurbedrijven",
        tekst: "Beschikbaarheid, tarieven en voorwaarden zo neerzetten dat huurders zonder bellen kunnen kiezen.",
      },
      {
        to: "/kennisbank/prijzen-op-website-verhuurbedrijf",
        label: "Prijzen op je website zetten als verhuurbedrijf",
        tekst: "Waarom een vanafprijs bijna altijd beter werkt dan prijs op aanvraag.",
      },
      {
        to: "/diensten/online-boeken",
        label: "Online boeken en reserveren",
        tekst: "Beschikbaarheid en reserveringen in één agenda op je eigen site.",
      },
    ],
    metaTitle: "Website verhuurbedrijf: wat moet erop? | MegaOnline",
    metaDescription:
      "Wat moet er op de website van een verhuurbedrijf? De drie vragen die elke huurder stelt, in welke volgorde ze komen en wat er per vraag op de pagina hoort.",
  },
  {
    slug: "plan-van-aanpak-nieuwe-website",
    naam: "Plan van aanpak nieuwe website",
    vraag: "Hoe maak je een plan van aanpak voor een nieuwe website?",
    pijler: "Zo werkt het echt",
    icoon: "list-checks",
    branche: "Algemeen",
    teaser:
      "De meeste plannen beginnen bij pagina's en een ontwerp. Een plan dat werkt begint bij de aanvraag die de site moet opleveren en werkt van daaruit terug.",
    antwoord:
      "Een goed plan van aanpak voor een nieuwe website begint bij de aanvraag die de site moet opleveren, niet bij het ontwerp of het aantal pagina's. Leg eerst vast wat je nu binnenkrijgt, welke vragen je klanten stellen voordat ze iets aanvragen en wat er na livegang gebeurt. Pas dan kies je pagina's, teksten en een ontwerp.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-20",
    gewijzigd: "2026-11-20",
    cta: "scan",
    eindKop: "Wil je weten wat jouw situatie nodig heeft voordat je begint?",
    eindLead:
      "Beantwoord vier korte vragen. MegaOnline kijkt persoonlijk naar je huidige website en laat zien wat er volgens die beoordeling in je plan van aanpak hoort. Wil je eerst meer weten over de bouw zelf, lees dan wat er komt kijken bij een [conversiegerichte website](/diensten/conversie-website).",
    secties: [
      {
        kop: "Waarom de meeste plannen bij het verkeerde eind beginnen",
        accent: "het verkeerde eind",
        alineas: [
          "Zoek je naar een plan van aanpak voor een website, dan vind je vooral projectsjablonen. Doel, scope, planning, budget, rollen. Dat is nuttig om een project in goede banen te leiden. Het zegt alleen niets over de vraag of de site straks meer oplevert dan de oude.",
          "In de praktijk ziet een plan er vaak zo uit: een lijst met pagina's die de oude site ook had, een paar voorbeeldsites die je mooi vindt en een datum voor de livegang. Het ontwerp krijgt de meeste aandacht, omdat dat het zichtbare deel is. De vraag wat een bezoeker moet weten voordat hij contact opneemt, komt pas aan bod als de teksten op het laatste moment geschreven moeten worden.",
          "Daarom loopt een nieuwe site zo vaak uit op een mooiere versie van dezelfde site. Het is netter, sneller en moderner, maar er komen evenveel aanvragen binnen als daarvoor.",
        ],
      },
      {
        kop: "Een voorbeeld: het schildersbedrijf met de nieuwe site",
        accent: "de nieuwe site",
        alineas: [
          "Neem een schildersbedrijf in de regio. De eigenaar wil een nieuwe website, omdat de huidige er gedateerd uitziet. Zijn eerste plan is een lijst: home, over het bedrijf, diensten, projecten, contact. Plus de wens dat het er strakker uitziet dan bij de concurrent.",
          "Wie verder vraagt, hoort iets anders. De meeste telefoontjes gaan over drie dingen: wat kost het ongeveer per kamer of per gevel, wanneer kan hij beginnen en werkt hij ook met particulieren of alleen zakelijk. Geen van die antwoorden staat op de huidige site. De bezoeker moet bellen om iets te weten dat hij eigenlijk al wil weten voordat hij belt.",
          "Een plan dat daar begint, ziet er anders uit. Een pagina per soort klus met een prijsindicatie en een richtlijn voor de doorlooptijd. Een formulier dat vraagt wat de schilder nodig heeft om een afspraak te maken, niet meer. Foto's van eigen werk bij elke dienst in plaats van één losse projectenpagina. Het ontwerp komt daarna, om die antwoorden goed leesbaar te maken.",
        ],
      },
      {
        kop: "Vijf onderdelen die in elk plan van aanpak horen",
        accent: "in elk plan van aanpak",
        alineas: [
          "Het formaat maakt weinig uit. Een document van twee pagina's is genoeg, zolang deze vijf onderdelen erin staan.",
        ],
        punten: [
          {
            titel: "1. Het doel in aanvragen, met een beginpunt",
            tekst:
              "Schrijf op wat de site moet opleveren: offerteaanvragen, boekingen, telefoontjes of inschrijvingen. Tel daarna hoeveel er nu per maand binnenkomen via mail, telefoon en formulier. Zonder dat beginpunt kun je na livegang niet zien of de nieuwe site beter werkt dan de oude.",
          },
          {
            titel: "2. De vragen van je klanten",
            tekst:
              "Kijk in je mailbox en denk aan de laatste twintig telefoontjes. Welke vragen komen steeds terug? Dat is de inhoud van je site. Waarom een site met de verkeerde inhoud weinig oplevert, lees je in het artikel over [waarom een website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op).",
          },
          {
            titel: "3. De structuur, afgeleid van die vragen",
            tekst:
              "Pas nu bepaal je welke pagina's er komen. Elke belangrijke vraag krijgt een plek. Elke dienst waar mensen apart naar zoeken krijgt een eigen pagina, zodat Google die pagina ook apart kan tonen. Pagina's die alleen bestaan omdat de oude site ze had, mogen weg.",
          },
          {
            titel: "4. Teksten en beeld vóór het ontwerp",
            tekst:
              "Een ontwerp dat gemaakt is voor nepteksten past zelden bij de echte. Leg vast wie de teksten schrijft, wie de foto's aanlevert en wanneer. Dit is het onderdeel waar de meeste projecten op vastlopen, dus zet er een datum bij die vóór de bouw ligt.",
          },
          {
            titel: "5. Wat er na livegang gebeurt",
            tekst:
              "Spreek af wie de cijfers bijhoudt, hoe vaak je kijkt en wat je aanpast als een pagina niet doet wat hij moet doen. Een website is na livegang niet af. Het is het eerste moment waarop je kunt zien hoe echte bezoekers hem gebruiken.",
          },
        ],
      },
      {
        kop: "Nieuw bouwen of eerst verbeteren?",
        accent: "eerst verbeteren",
        alineas: [
          "Een eerlijk plan van aanpak stelt ook die vraag. Soms blijkt bij het opschrijven van de klantvragen dat de huidige site de goede basis heeft en vooral de verkeerde inhoud. Dan is verbeteren sneller en goedkoper dan opnieuw bouwen. De afweging staat uitgewerkt in het artikel [nieuwe website laten maken of je huidige laten optimaliseren](/kennisbank/nieuwe-website-of-optimaliseren).",
          "Kies je voor nieuw, dan helpt het plan ook bij het kiezen van de partij die bouwt. Een bouwer die bij het eerste gesprek vooral naar kleuren en voorbeeldsites vraagt, werkt anders dan een bouwer die vraagt hoeveel aanvragen je nu krijgt. Welke vragen je zelf kunt stellen, lees je in [freelance webdesigner of webbureau](/kennisbank/freelance-webdesigner-of-webbureau).",
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "Bij MegaOnline gaat elke [nieuwe website laten maken](/diensten/conversie-website) door dezelfde vier stappen: begrijpen hoe je bedrijf aan klanten komt, de doelgroep en hun vragen in kaart brengen, de structuur bepalen en pas dan ontwikkelen. Strategie eerst, techniek daarna.",
          "Na livegang stopt het werk niet. Met doorlopende [website-optimalisatie](/diensten/website-optimalisatie) wordt elke maand gekeken waar de grootste groeikans zit, zodat het plan van aanpak geen document blijft dat na de bouw in een la verdwijnt.",
        ],
      },
    ],
    doen: [
      "Tel hoeveel aanvragen je de afgelopen maand kreeg via mail, telefoon en formulier. Dat is je beginpunt.",
      "Schrijf de vijf vragen op die klanten het vaakst stellen voordat ze iets aanvragen.",
      "Kijk of het antwoord op elk van die vragen nu op je site staat en op welke pagina.",
      "Streep in je huidige menu de pagina's door die geen van die vragen beantwoorden.",
      "Zet in je planning een datum voor de teksten die vóór de start van het ontwerp ligt.",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen een plan van aanpak en een briefing voor een website?",
        a: "Een briefing is wat je aan de bouwer geeft: wie je bent, wat je wilt en wat je budget is. Een plan van aanpak gaat verder. Het legt ook vast hoe je meet of de site werkt, wie de teksten levert en wat er na livegang gebeurt. Een goede briefing is een deel van het plan.",
      },
      {
        q: "Hoe lang duurt het om een nieuwe website te laten maken?",
        a: "Dat hangt vooral af van de omvang en van hoe snel teksten en beeld klaar zijn. De bouw zelf is zelden de vertragende factor. Wie de inhoud op tijd aanlevert, haalt de planning meestal wel. Wie dat niet doet, ziet de livegang verschuiven.",
      },
      {
        q: "Moet ik de teksten voor mijn nieuwe website zelf schrijven?",
        a: "Niet per se, maar de kennis moet van jou komen. Jij weet welke vragen klanten stellen en wat jouw werk anders maakt. Een tekstschrijver of bouwer kan dat goed opschrijven, mits iemand die kennis eerst op tafel legt. Plan daar een gesprek voor in.",
      },
      {
        q: "Wat moet er in een plan van aanpak voor een website staan?",
        a: "Minstens vijf dingen: het doel in aanvragen met het huidige aantal als beginpunt, de vragen die klanten stellen, de structuur die daaruit volgt, wie wanneer teksten en beeld levert en wat er na livegang gebeurt. Planning en budget komen daar als praktische onderdelen bij.",
      },
      {
        q: "Kan ik mijn oude website als uitgangspunt nemen?",
        a: "Als bron wel, als blauwdruk liever niet. Kijk welke pagina's in Google Search Console bezoek en aanvragen opleveren en neem die mee. De rest van de opbouw kun je beter opnieuw afleiden van de vragen van je klanten.",
      },
    ],
    links: [
      {
        to: "/diensten/conversie-website",
        label: "Nieuwe website laten maken",
        tekst: "Een website die vanaf de aanvraag wordt opgebouwd: eerst strategie, dan techniek.",
      },
      {
        to: "/kennisbank/nieuwe-website-of-optimaliseren",
        label: "Nieuwe website of je huidige optimaliseren",
        tekst: "Wanneer opnieuw bouwen loont en wanneer verbeteren sneller iets oplevert.",
      },
      {
        to: "/diensten/website-optimalisatie",
        label: "Website-optimalisatie",
        tekst: "Na livegang elke maand verder bijsturen op de grootste groeikans.",
      },
    ],
    metaTitle: "Plan van aanpak voor een nieuwe website | MegaOnline",
    metaDescription:
      "Een plan van aanpak voor een nieuwe website begint bij de aanvraag, niet bij het ontwerp. Vijf onderdelen die erin horen, met een voorbeeld uit de praktijk.",
  },
  {
    slug: "cadeaubonnen-online-verkopen",
    naam: "Cadeaubonnen online verkopen",
    vraag: "Hoe verkoop je cadeaubonnen online voor je activiteitenbedrijf?",
    pijler: "Branche",
    icoon: "gift",
    branche: "Activiteitenbedrijven",
    teaser:
      "Wie een cadeaubon koopt, komt zelf niet. Hij heeft andere vragen dan je gast en koopt vaak op een avond vlak voor een verjaardag of de feestdagen.",
    antwoord:
      "Cadeaubonnen verkoop je online door ze te behandelen als een eigen product voor een eigen klant: de gever, niet de gast. Die gever wil binnen een paar minuten op zijn telefoon kunnen kiezen, betalen en een bon in zijn mailbox hebben die hij vanavond nog kan printen of doorsturen.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-24",
    gewijzigd: "2026-11-24",
    cta: "scan",
    eindKop: "Wil je zien waar kopers van een cadeaubon op jouw site afhaken?",
    eindLead:
      "MegaOnline kijkt persoonlijk naar je website en loopt de route na van iemand die op een avond een cadeaubon wil kopen. Je krijgt de punten te zien waar die koper nu blijft hangen. Wil je eerst weten wat er bij een [website voor activiteitenbedrijven](/branches/activiteitenbedrijven) komt kijken, lees dan daar verder.",
    secties: [
      {
        kop: "De koper van een cadeaubon is niet je gast",
        accent: "niet je gast",
        alineas: [
          "Bijna elke website van een escaperoom, klimhal of kartbaan is geschreven voor de gast. Hoe lang duurt het, voor welke leeftijd is het, wanneer is er plek. Dat klopt voor wie zelf komt. Een cadeaubon wordt alleen gekocht door iemand die niet komt.",
          "Die koper heeft andere vragen. Hij weet niet of de ontvanger liever op zaterdag of op woensdag gaat. Hij wil geen datum kiezen. Hij wil weten wat een bon waard is, of je er met twee of met vier mensen mee kunt, hoe lang hij geldig is en of hij hem vandaag nog kan geven.",
          "Staat de cadeaubon op je site als een regel onderaan de prijspagina met de tekst \"vraag ernaar aan de balie\", dan beantwoord je geen van die vragen. De koper gaat dan niet naar de balie. Hij koopt een algemene belevenisbon bij een groot platform of een cadeau in een webshop die wel om elf uur 's avonds open is.",
        ],
      },
      {
        kop: "Een voorbeeld uit de praktijk",
        accent: "uit de praktijk",
        alineas: [
          "Neem een klimhal die cadeaubonnen alleen aan de kassa verkoopt, op een kaartje met een stempel. Op de website staat dat ze bestaan. Bestellen kan per mail, waarna de bon per post komt.",
          "Een vader zoekt op 22 december om half elf 's avonds op zijn telefoon een cadeau voor zijn zoon van veertien, die wil klimmen. Hij vindt de klimhal, ziet dat er cadeaubonnen zijn en leest dat hij moet mailen. De post komt niet meer voor kerst. Hij sluit het tabblad.",
          "De klimhal heeft die verkoop nooit gezien. Niet in de omzet, niet in de mail. Dat is het lastige aan een cadeaubon die je niet online verkoopt: je mist hem zonder dat het opvalt. Je ziet alleen dat de decembermaand niet beter loopt dan november.",
        ],
      },
      {
        kop: "Wat er op je site moet staan",
        accent: "op je site",
        alineas: [
          "Een cadeaubon die online verkoopt, heeft een eigen pagina en een eigen knop. Niet verstopt onder reserveren, want de koper wil juist niet reserveren. Op die pagina horen vijf dingen.",
        ],
        punten: [
          {
            titel: "Een vaste waarde of een vaste activiteit",
            tekst:
              "Een bon voor een bedrag is flexibel. Een bon voor een activiteit, zoals een uur klimmen voor twee, is makkelijker te geven omdat de koper weet wat de ontvanger krijgt. De meeste activiteitenbedrijven bieden beide aan. Zet bij een bon voor een bedrag erbij wat je daar ongeveer voor kunt doen.",
          },
          {
            titel: "Direct betalen en direct ontvangen",
            tekst:
              "Na betalen staat de bon binnen een minuut in de mailbox, als pdf om te printen of door te sturen. Een bon die eerst handmatig wordt aangemaakt, komt pas de volgende ochtend. Voor een cadeau van vanavond is dat te laat.",
          },
          {
            titel: "Een bon die er als cadeau uitziet",
            tekst:
              "Een bon met je logo, een foto van de activiteit en ruimte voor een naam en een persoonlijke tekst. Een bon die eruitziet als een betaalbewijs voelt niet als iets om te geven.",
          },
          {
            titel: "Geldigheid en voorwaarden in gewone taal",
            tekst:
              "Hoe lang de bon geldig is, of hij in delen te gebruiken is en wat er gebeurt met een restbedrag. Volgens Ondernemersplein moet een cadeaubon minimaal 2 jaar geldig zijn, tenzij een kortere termijn redelijk is. De voorwaarden zet je op de bon zelf of je zet er een link naar op. Laat je de voorwaarden juridisch controleren als je twijfelt.",
          },
          {
            titel: "Een duidelijke uitleg voor de ontvanger",
            tekst:
              "Eén zin op de bon over hoe je hem verzilvert, met de link naar je reserveringspagina. Zo hoeft de ontvanger niet te bellen en reserveert hij op het moment dat hij er zin in heeft.",
          },
        ],
      },
      {
        kop: "Verzilveren hoort in dezelfde agenda",
        accent: "dezelfde agenda",
        alineas: [
          "De verkoop is de helft van het werk. De andere helft is het moment dat iemand de bon gebruikt. Wordt die bon aan de balie met de hand afgestreept terwijl reserveringen online lopen, dan weet je nooit precies hoeveel bonnen er nog openstaan en kan dezelfde code twee keer gebruikt worden.",
          "Werkt het verzilveren in hetzelfde systeem als het reserveren, dan vult de ontvanger zijn code in bij het boeken. Het bedrag gaat eraf, het restant blijft staan en jij ziet in één overzicht wat er verkocht en gebruikt is. Hoe reserveren, betalen en bonnen in één systeem werken, lees je bij [online boeken en reserveren](/diensten/online-boeken).",
          "Een bijkomend voordeel: veel bonnen worden pas na weken of maanden verzilverd. Je kunt ontvangers dan wijzen op de rustige uren. Een bon die in december is verkocht en in februari op een dinsdagmiddag wordt gebruikt, vult precies de tijden die je anders leeg ziet. Hoe je die doordeweekse uren verder vult, staat in het artikel over [doordeweeks meer boekingen](/kennisbank/doordeweeks-meer-boekingen).",
        ],
      },
      {
        kop: "Zorg dat de koper de bon kan vinden",
        accent: "kan vinden",
        alineas: [
          "Een cadeaubonpagina die niemand vindt, verkoopt niets. Mensen zoeken op woorden als \"cadeaubon klimmen\" of \"escaperoom cadeaubon\" met de naam van hun plaats erbij. Geef de pagina een titel en een kop met precies die woorden, zodat Google hem aan die zoekvraag kan koppelen.",
          "Zet daarnaast een korte verwijzing naar de bon op de plekken waar een twijfelende bezoeker al is: de homepage, de prijspagina en de bevestigingsmail na een reservering. Wie net zelf heeft geboekt, is vaak de beste koper voor een bon voor iemand anders.",
          "Een [website voor activiteitenbedrijven](/branches/activiteitenbedrijven) bouwt MegaOnline met de cadeaubon als vaste route, naast reserveren, groepen en arrangementen. Of het nu loopt of niet, zie je vooral in de weken voor de feestdagen.",
        ],
      },
    ],
    doen: [
      "Koop vanavond op je telefoon een cadeaubon bij je eigen bedrijf en tel de stappen tot de bon in je mailbox staat.",
      "Geef de cadeaubon een eigen pagina met een eigen knop, los van reserveren.",
      "Zet de geldigheid en wat er met een restbedrag gebeurt in één zin op de bon en op de pagina.",
      "Zet een korte verwijzing naar de cadeaubon in de bevestigingsmail na een reservering.",
      "Tel hoeveel bonnen er in de afgelopen twaalf maanden zijn verkocht en hoeveel er nog openstaan. Dat is je beginpunt.",
    ],
    faq: [
      {
        q: "Hoe lang moet een cadeaubon geldig zijn?",
        a: "Volgens Ondernemersplein minimaal 2 jaar, tenzij je kunt uitleggen waarom een kortere termijn redelijk is. Staat er geen uitgiftedatum en geen vervaldatum op de bon, dan is hij volgens dezelfde bron onbeperkt geldig. Zet de geldigheid daarom altijd duidelijk op de bon.",
      },
      {
        q: "Kun je cadeaubonnen verkopen via je reserveringssysteem?",
        a: "Bij veel systemen wel, al verschilt het hoe goed het werkt. Let erop dat de bon na betalen direct wordt verstuurd en dat de ontvanger zijn code kan invullen bij het reserveren. Anders verkoop je de bon online en verzilver je hem alsnog met de hand.",
      },
      {
        q: "Is een bon voor een bedrag of voor een activiteit beter?",
        a: "Een bon voor een activiteit is makkelijker te geven, omdat de koper weet wat de ontvanger krijgt. Een bon voor een bedrag is flexibeler als je veel verschillende activiteiten hebt. Veel bedrijven bieden allebei aan en zetten bij het bedrag wat je ermee kunt doen.",
      },
      {
        q: "Moet je je cadeaubonnen ook via grote belevenisplatforms verkopen?",
        a: "Dat kan extra bereik geven, maar je betaalt er meestal een vergoeding per verkochte bon voor en het contact met de koper loopt via het platform. Een goede bonpagina op je eigen site is daarom de basis. Platforms komen daar hooguit bovenop.",
      },
      {
        q: "Wanneer worden de meeste cadeaubonnen gekocht?",
        a: "Rond de feestdagen, verjaardagen, Vaderdag en Moederdag. Vaak 's avonds op een telefoon. Daarom moet kopen en ontvangen werken zonder dat er iemand van je bedrijf aan te pas komt.",
      },
    ],
    links: [
      {
        to: "/branches/activiteitenbedrijven",
        label: "Website laten maken voor activiteitenbedrijven",
        tekst: "Reserveren, arrangementen, groepen en cadeaubonnen als vaste routes op je site.",
      },
      {
        to: "/diensten/online-boeken",
        label: "Online boeken en reserveren",
        tekst: "Reserveren, betalen en cadeaubonnen verzilveren in één agenda op je eigen site.",
      },
      {
        to: "/kennisbank/doordeweeks-meer-boekingen",
        label: "Doordeweeks meer boekingen",
        tekst: "Hoe je de rustige uren vult met klanten die op een dinsdag wel kunnen.",
      },
    ],
    metaTitle: "Cadeaubonnen online verkopen | MegaOnline",
    metaDescription:
      "Cadeaubonnen online verkopen voor je escaperoom, klimhal of kartbaan? Wat de koper wil zien, wat er op de bon hoort en hoe verzilveren in je agenda werkt.",
  },
  {
    slug: "wordpress-onderhoud",
    naam: "WordPress-onderhoud",
    vraag: "Wat houdt WordPress-onderhoud in en heb je het nodig?",
    pijler: "Techniek",
    icoon: "repeat",
    branche: "Algemeen",
    teaser:
      "Updates, back-ups en beveiliging klinken als techniek. Het echte risico is een site die stil kapotgaat terwijl niemand kijkt.",
    antwoord:
      "WordPress-onderhoud is het bijhouden van updates, back-ups en beveiliging, plus controleren of alles daarna nog werkt. Heb je een WordPress-site waar aanvragen of boekingen via binnenkomen, dan heb je het nodig: de vraag is alleen of je het zelf doet of uitbesteedt.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-11-27",
    gewijzigd: "2026-11-27",
    cta: "scan",
    eindKop: "Wil je weten of jouw WordPress-site ergens stil weglekt?",
    eindLead:
      "Beantwoord vier korte vragen. MegaOnline kijkt persoonlijk naar je website, ook naar updates, formulieren en snelheid. Daarna zie je waar aanvragen blijven hangen.",
    secties: [
      {
        kop: "Wat WordPress-onderhoud precies is",
        accent: "precies is",
        alineas: [
          "WordPress is het systeem waarmee je site draait. Daaromheen zitten een thema dat bepaalt hoe de site eruitziet en plugins: losse uitbreidingen voor een formulier, een agenda, de cookiemelding of de snelheid. Al die onderdelen worden door verschillende makers bijgehouden en krijgen elk hun eigen updates.",
          "Onderhoud betekent dat iemand die updates bijhoudt, zorgt dat er een recente back-up staat en controleert of de site daarna nog doet wat hij moet doen. Dat laatste wordt het vaakst vergeten. Een update installeren is één klik. Weten of je contactformulier daarna nog mail verstuurt, is iets anders.",
        ],
        punten: [
          {
            titel: "Updates",
            tekst:
              "Van WordPress zelf, het thema en elke plugin. Een update dicht vaak een beveiligingslek dat inmiddels openbaar bekend is. Wie hem laat liggen, staat open voor wie dat lek gebruikt.",
          },
          {
            titel: "Back-ups",
            tekst:
              "Een kopie van de bestanden en de database, opgeslagen op een andere plek dan de site zelf. Een back-up die op dezelfde server staat als de site is weg als die server problemen heeft.",
          },
          {
            titel: "Beveiliging",
            tekst:
              "Sterke wachtwoorden, alleen de gebruikers die er echt moeten zijn en geen plugins die niet meer worden bijgehouden. Een plugin waarvan de maker gestopt is, krijgt geen updates meer, ook niet als er een lek in zit.",
          },
          {
            titel: "Controleren",
            tekst:
              "Na elke ronde updates kijken of de belangrijkste dingen nog werken: de pagina's laden, het formulier komt aan, de boekingsknop doet het en de site is nog snel genoeg op een telefoon.",
          },
        ],
      },
      {
        kop: "Wat er misgaat als niemand het doet",
        accent: "als niemand het doet",
        alineas: [
          "De meeste sites gaan niet in één keer plat. Ze worden langzaam slechter. Dat valt pas op als het al een tijdje speelt.",
          "Neem een installatiebedrijf met een nette WordPress-site en een offerteformulier. Na een update van een plugin verstuurt het formulier geen mail meer. Bezoekers zien gewoon een bedankmelding, dus niemand klaagt. De eigenaar merkt alleen dat het rustiger is dan normaal en schuift het op het seizoen. Pas weken later belt een klant die vraagt waarom hij nooit iets terughoorde.",
          "Dat is het patroon. Een site die niet wordt bijgehouden wordt trager, omdat oude plugins blijven meedraaien. Hij wordt kwetsbaarder, omdat bekende lekken openblijven. En onderdelen vallen stil weg zonder foutmelding. Voor een ondernemer die van aanvragen leeft is dat laatste het duurste, want je ziet het niet in je statistieken. Je ziet het alleen in een lege inbox.",
          "Een gehackte site is de zichtbare variant. Google kan bezoekers dan waarschuwen voordat ze je site openen en het herstel kost meestal meer dan jaren onderhoud. Wie een recente back-up heeft, is in een paar uur terug. Wie die niet heeft, begint soms opnieuw.",
        ],
      },
      {
        kop: "Wat je zelf kunt doen",
        accent: "zelf",
        alineas: [
          "Veel onderhoud kun je prima zelf, zeker bij een kleine site met weinig plugins. WordPress kan plugins en thema's automatisch bijwerken. Dat zet je per onderdeel aan. In het dashboard staat ook een scherm Sitestatus dat laat zien wat er volgens WordPress zelf aandacht nodig heeft.",
          "Zelf doen werkt als je drie dingen vasthoudt: een vast moment in de maand, een back-up vóór je iets bijwerkt en een korte controle daarna. Vul je eigen formulier in, klik op je bel- of WhatsApp-knop en open de site op je telefoon. Dat kost een kwartier en vangt het grootste deel van de problemen af.",
          "Automatische updates zijn een goede basis, maar geen onderhoud. Ze installeren de update. Ze controleren niet of je formulier het daarna nog doet.",
        ],
      },
      {
        kop: "Wanneer uitbesteden zin heeft",
        accent: "uitbesteden",
        alineas: [
          "Uitbesteden is geen kwestie van kunnen. Het is een kwestie van wat het kost als het misgaat en of je er echt elke maand tijd voor maakt. De meeste ondernemers beginnen enthousiast en laten het na een paar maanden liggen. Dat is menselijk, alleen werkt onderhoud dan niet meer.",
          "Uitbesteden heeft zin als aanvragen of boekingen via je site binnenkomen, als de site gekoppeld is aan een agenda of betaalsysteem, als er veel plugins op draaien of als niemand in je bedrijf weet wat er na een mislukte update moet gebeuren. Bij een site die vooral een visitekaartje is, kun je het met een vaste routine prima zelf.",
          "Vraag bij een onderhoudspartij niet alleen wat er wordt bijgewerkt. Vraag waar de back-ups staan, hoe snel je ze terug kunt zetten, wat er na een update wordt gecontroleerd en of je zelf een overzicht krijgt van wat er is gedaan. Wie bij [wordpress onderhoud](/diensten/wordpress-optimalisatie) alleen updates belooft, doet het makkelijke deel.",
          "Is je site al traag of rommelig geworden, dan helpt bijhouden alleen niet meer. Dan moet hij eerst worden opgeruimd. Lees bij [website laten optimaliseren](/diensten/website-optimalisatie) wat dat inhoudt. Merk je vooral dat er weinig aanvragen binnenkomen, kijk dan eerst naar [waarom je website geen aanvragen oplevert](/kennisbank/website-levert-geen-aanvragen-op). Twijfel je wie dat werk het beste kan doen, dan helpt de afweging tussen een [freelance webdesigner of webbureau](/kennisbank/freelance-webdesigner-of-webbureau).",
        ],
      },
      {
        kop: "Hoe MegaOnline dit aanpakt",
        accent: "aanpakt",
        alineas: [
          "MegaOnline houdt WordPress-sites bij vanuit de vraag of ze nog aanvragen opleveren, niet alleen of ze nog online zijn. Voor elke ronde updates staat er een back-up. Daarna worden de formulieren, knoppen en boekingsroutes nagelopen. Plugins die niet meer worden bijgehouden worden vervangen voordat ze een probleem worden.",
          "Wil je alleen dat de techniek veilig en bijgewerkt blijft, dan is er een onderhoudsabonnement. Wil je dat de site daarnaast elke maand beter wordt, dan past het Groei Partnership.",
        ],
      },
    ],
    doen: [
      "Kijk in je dashboard hoeveel updates er openstaan en wanneer de laatste keer was dat iemand ze installeerde.",
      "Vraag je hostingpartij of je webbouwer waar je back-ups staan en hoe lang het duurt om er een terug te zetten.",
      "Vul vandaag je eigen contactformulier in en kijk of de mail echt aankomt.",
      "Loop je plugins na en zoek bij elke plugin op wanneer hij voor het laatst is bijgewerkt door de maker.",
      "Zet een vast moment in je agenda, één keer per maand, voor updates en een korte controle van formulier en knoppen.",
    ],
    faq: [
      {
        q: "Hoe vaak moet een WordPress-site worden bijgewerkt?",
        a: "Beveiligingsupdates zo snel mogelijk, de rest in een vaste ronde. Voor de meeste bedrijfssites is één keer per maand een goed ritme, met een controle na elke ronde. Draait er een webshop of boekingssysteem op, kijk dan vaker.",
      },
      {
        q: "Kun je automatische updates gewoon aanzetten?",
        a: "Dat kan en voor veel plugins is het verstandig. Het vervangt alleen de controle niet. Een automatische update kan iets breken zonder dat je het merkt, dus kijk daarna nog steeds of je formulier en knoppen werken.",
      },
      {
        q: "Wat is het verschil tussen onderhoud en hosting?",
        a: "Hosting is de plek waar je site draait: de server. Onderhoud is het bijhouden van WordPress, het thema en de plugins op die server. Sommige hostingpartijen doen een deel van het onderhoud, zoals back-ups of updates van WordPress zelf. Vraag na wat er wel en niet onder valt.",
      },
      {
        q: "Wat doe je als je WordPress-site gehackt is?",
        a: "Verander eerst alle wachtwoorden en neem contact op met je hostingpartij. Zet daarna een schone back-up terug van vóór de hack en werk meteen alles bij. Heb je geen bruikbare back-up, laat de site dan door iemand opschonen die weet waar hij moet zoeken.",
      },
      {
        q: "Heeft een kleine website ook onderhoud nodig?",
        a: "Ja, want een kleine site draait op dezelfde software als een grote. Het verschil is de hoeveelheid werk. Met weinig plugins en een vaste maandelijkse routine kun je het vaak prima zelf.",
      },
    ],
    links: [
      {
        to: "/diensten/wordpress-optimalisatie",
        label: "WordPress onderhoud en optimalisatie",
        tekst: "Een snellere, veilige WordPress-site met een backend die logisch werkt.",
      },
      {
        to: "/diensten/website-optimalisatie",
        label: "Website laten optimaliseren",
        tekst: "Wat er nodig is als je site wel draait, maar te weinig aanvragen oplevert.",
      },
      {
        to: "/kennisbank/website-levert-geen-aanvragen-op",
        label: "Waarom je website geen aanvragen oplevert",
        tekst: "De meest voorkomende oorzaken, van vertrouwen tot een formulier dat te veel vraagt.",
      },
    ],
    metaTitle: "Wat houdt WordPress-onderhoud in? | MegaOnline",
    metaDescription:
      "Wat houdt WordPress onderhoud in: updates, back-ups, beveiliging en controle. Wat er misgaat als niemand het doet, wat je zelf kunt en wanneer uitbesteden zin heeft.",
  },
];

/**
 * Alleen de dev-server. Niet opnemen in `ARTIKELEN`: dan verschijnen ze in
 * het overzicht, het menu en de vervolglinks. De smoketest opent de slugs
 * rechtstreeks.
 *
 * `smoke-zonder-faq` heeft een lege FAQ en een leeg auteursveld.
 * `smoke-met-auteur` laat `faq` weg en zet een auteursnaam.
 */
const SMOKE_ARTIKELEN: Artikel[] = import.meta.env.DEV
  ? [
      {
        slug: "smoke-zonder-faq",
        naam: "Smoketest zonder FAQ",
        vraag: "Wat toont een kennisbankartikel zonder FAQ?",
        pijler: "Smoketest",
        icoon: "shield-check",
        branche: "Smoketest",
        teaser: "Controlepagina voor een artikel zonder vragen en met een leeg auteursveld.",
        antwoord:
          "Geen FAQ-blok en geen FAQPage. Een leeg auteursveld houdt Joshua als auteur in het schema.",
        leestijd: "1 minuut",
        gepubliceerd: "2026-01-01",
        gewijzigd: "2026-01-01",
        auteur: "",
        secties: [
          {
            kop: "Alleen een controle",
            alineas: [
              "Deze pagina bestaat zodat de smoketest een artikel zonder FAQ kan openen. Hij hoort niet in het overzicht.",
            ],
          },
        ],
        doen: ["Niets. Dit is een controlepagina."],
        faq: [],
        links: [],
        metaTitle: "Smoketest zonder FAQ | MegaOnline.io",
        metaDescription: "Controlepagina zonder FAQ en met een leeg auteursveld.",
      },
      {
        slug: "smoke-met-auteur",
        naam: "Smoketest met auteur",
        vraag: "Welke auteur krijgt een kennisbankartikel met een gezet veld?",
        pijler: "Smoketest",
        icoon: "shield-check",
        branche: "Smoketest",
        teaser: "Controlepagina zonder FAQ-veld en met een gevulde auteursnaam.",
        antwoord:
          "De gevulde naam staat in het Article-schema. Omdat de vragen ontbreken is er geen FAQ-blok en geen FAQPage.",
        leestijd: "1 minuut",
        gepubliceerd: "2026-01-01",
        gewijzigd: "2026-01-01",
        auteur: "Smoke Auteur",
        secties: [
          {
            kop: "Alleen een controle",
            alineas: [
              "Deze pagina bestaat zodat de smoketest een gezet auteursveld kan lezen. Hij hoort niet in het overzicht.",
            ],
          },
        ],
        doen: ["Niets. Dit is een controlepagina."],
        links: [],
        metaTitle: "Smoketest met auteur | MegaOnline.io",
        metaDescription: "Controlepagina met een gezet auteursveld en zonder FAQ.",
      },
    ]
  : [];

/** Eindknoptekst. Het veld is scan, of het ontbreekt: allebei dezelfde knop. */
export function eindCta(_artikel: Pick<Artikel, "cta">): string {
  return CTA_SCAN;
}

/** Het artikel bij een slug, of `undefined` als die slug niet bestaat. */
export function artikelBySlug(slug: string): Artikel | undefined {
  return (
    ARTIKELEN.find((a) => a.slug === slug) ?? SMOKE_ARTIKELEN.find((a) => a.slug === slug)
  );
}

/** Nieuwste artikelen eerst, zodat het overzicht zichzelf sorteert. */
export function artikelenNieuwsteEerst(): Artikel[] {
  return [...ARTIKELEN].sort((a, b) => b.gepubliceerd.localeCompare(a.gepubliceerd));
}
