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
    gewijzigd: "2026-10-19",
    cta: "scan",
    conceptForm: true,
    secties: [
      {
        kop: "Bezoekers, aanvragen en klanten zijn drie verschillende getallen",
        accent: "drie verschillende getallen",
        alineas: [
          "Een website die geen klanten oplevert, heeft niet per se een bezoekersprobleem. Twee sites met precies evenveel bezoek kunnen een heel verschillend aantal aanvragen opleveren. Het verkeer is dan niet het verschil, de pagina is het verschil. Wie op bezoekers stuurt, stuurt dus op een getal dat niets zegt over wat er onder de streep bij komt.",
          "Reken het voor jezelf eens door. Stel dat er 500 mensen per maand op je site komen en je krijgt twee aanvragen. Verdubbel je het bezoek naar 1.000, dan levert dezelfde pagina vier aanvragen op. Dat verdubbelen kost maanden werk of advertentiebudget. Zorg je in plaats daarvan dat vier op de honderd bezoekers aanvraagt in plaats van vier op de duizend, dan werkt die verbetering door op al het bezoek dat je nu al hebt. Dit is een rekenvoorbeeld en geen belofte, maar het laat zien welke kant van de rekensom meestal het goedkoopst is. Dat is precies waar [website optimalisatie](/diensten/website-optimalisatie) over gaat.",
          "Begin daarom met één getal: hoeveel aanvragen kreeg je de afgelopen drie maanden? Zolang dat getal ontbreekt is elke verbetering een gevoel in plaats van een uitkomst.",
        ],
      },
      {
        kop: "Zes plekken waar het in de praktijk weglekt",
        accent: "in de praktijk",
        alineas: [
          "De scan bekijkt alle punten hieronder.",
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
              "Geen gezicht, geen echte foto's van eigen werk, geen adres of inschrijvingsnummer, geen enkele klant die iets zegt. Wie jou niet kent heeft dan geen reden om aan te nemen dat het goed komt. Vertrouwen komt vóór techniek: een snelle website die niets bewijst levert nog steeds niets op. Daarom begint een [conversiegerichte website](/diensten/conversie-website) bij bewijs.",
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
              "De aanvraagknop staat onder een lange hero, het telefoonnummer is geen link of het formulier springt bij het typen. Kijk in je bezoekersstatistieken hoeveel bezoek van een telefoon komt. Wat daar niet werkt, kost je aanvragen. Pak je eigen site erbij op je mobiel en tel hoeveel tikken het kost om een aanvraag te versturen.",
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
              "Controleer of wat zij noemen ook op je site staat. Precies die zin hoort boven de vouw te staan in plaats van in je hoofd.",
          },
        ],
      },
      {
        kop: "Patronen waar de scan naar kijkt",
        accent: "de scan",
        alineas: [
          "Twee patronen om op te letten. Het eerste: een pagina die veel vertoningen krijgt in Google en nauwelijks klikken. Dat is geen vindbaarheidsprobleem, dat is een titelprobleem. De pagina staat er wel, alleen belooft de titel niet wat de zoeker zocht.",
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
        q: "Waar zie je verschil?",
        a: "Aanpassingen aan teksten, formulieren en vertrouwen raken het bezoek dat je al hebt, dus daar kun je iets van zien als je genoeg verkeer hebt. Werk aan je vindbaarheid is een apart traject. Dat is de tweede reden om met de pagina te beginnen.",
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
      "Door te laten zien wie je bent, wat het ongeveer kost en wat je eerder hebt gedaan. Vertrouwen op een zakelijke website komt niet van mooie woorden over kwaliteit en passie, maar van bewijs dat een vreemde zelf kan controleren.",
    leestijd: "7 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-10-19",
    cta: "scan",
    secties: [
      {
        kop: "Vertrouwen is geen gevoel, het is een lijstje dat de bezoeker afvinkt",
        accent: "een lijstje",
        alineas: [
          "Iemand die jouw website voor het eerst opent doet in stilte een risicocontrole. Bestaat dit bedrijf echt. Werkt hier een mens. Weet die persoon waar hij over praat. Wat gaat dit ongeveer kosten. Wat gebeurt er als het misgaat. Pas als die vragen genoeg antwoord hebben gehad, vult iemand een formulier in.",
          "Het lastige is dat dezelfde woorden net zo goed op de site van je concurrent kunnen staan. Kwaliteit, maatwerk, korte lijnen, jarenlange ervaring. Die woorden zijn gratis, dus ze bewijzen niets. Bewijs is alles wat iemand kan controleren zonder jou te bellen: een naam, een gezicht, een prijs, een project dat echt bestaat. Daarom begint een [conversiegerichte website](/diensten/conversie-website) met bewijs en niet met een ontwerp.",
          "Dit geldt sterker naarmate de opdracht groter is. Wie een offerte aanvraagt voor een installatie van tienduizend euro neemt een risico met zijn eigen naam eraan. Zie ook wat dat betekent voor [dienstverleners](/branches/dienstverleners), waar de site het vertrouwen moet wekken dat jij in een gesprek vanzelf wekt.",
        ],
      },
      {
        kop: "Zeven dingen die een zakelijke bezoeker zoekt",
        accent: "zeven dingen",
        alineas: [
          "Dit is geen wensenlijst. Dit zijn de punten waar de scan naar kijkt bij het vertrouwen van een website. Hoe meer ervan klopt, hoe minder reden iemand heeft om af te haken.",
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
              "Eén zin bij je formulier: je krijgt persoonlijk antwoord. Je zit nergens aan vast. Onzekerheid over wat er daarna gebeurt is een van de goedkoopst op te lossen redenen om niet te versturen.",
          },
        ],
      },
      {
        kop: "Vier dingen die vertrouwen juist onderuit halen",
        accent: "onderuit halen",
        alineas: [
          "Net zo belangrijk als toevoegen: weghalen. Wat hieronder staat kan vertrouwen ondermijnen, ook op sites die inhoudelijk prima zijn.",
        ],
        punten: [
          {
            titel: "Stockfoto's van mensen die niet bestaan",
            tekst:
              "Eén echte foto van je eigen werk is meer waard dan vijf gelikte beelden die net zo goed bij een ander bedrijf kunnen staan.",
          },
          {
            titel: "Sporen van verwaarlozing",
            tekst:
              "Een jaartal van drie jaar terug in de footer, een nieuwsbericht uit 2022 als laatste item, een pagina met tekst die er nog staat sinds de oplevering. De bezoeker denkt dan: als de site niet wordt bijgehouden, hoe zit het dan met het werk.",
          },
          {
            titel: "Keurmerklogo's zonder betekenis",
            tekst:
              "Voor een webshop kan een keurmerk helpen. Voor een dienstverlener kan een rij logo's die de bezoeker niet kent averechts werken, want het lijkt op iets verbergen. Echte certificeringen en branchelidmaatschappen zijn een ander verhaal: noem die met naam.",
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
          "Een snelle website die niets bewijst levert nog steeds niets op. Techniek bepaalt of iemand je pagina ziet, vertrouwen bepaalt of hij iets doet. Kijk daarom eerst naar vertrouwen en daarna naar laadtijd.",
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
        a: "Een paar goed uitgewerkte projecten zeggen meer dan een rij logo's. Wat een bezoeker wil weten is: heeft hij dit eerder gedaan voor iemand zoals ik. Eén project uit zijn eigen branche, met wat er niet werkte en wat het opleverde, beantwoordt die vraag.",
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
        tekst: "Je huidige site langs de punten van de website scan, zonder opnieuw te beginnen.",
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
      "Ja, tenzij elke opdracht op maat wordt gerekend. Niet je hele prijslijst, wel genoeg dat iemand weet of hij bij jou moet zijn.",
    antwoord:
      "Ja, tenzij elke opdracht op maat wordt gerekend. Niet je volledige prijslijst, maar een vanafprijs of een bandbreedte per periode, zodat iemand weet of hij bij jou aan het juiste adres is voordat hij de telefoon pakt.",
    leestijd: "6 minuten",
    gepubliceerd: "2026-09-21",
    gewijzigd: "2026-10-19",
    cta: "scan",
    secties: [
      {
        kop: "De drie redenen om ze weg te laten en wat ervan waar is",
        accent: "wat ervan waar is",
        alineas: [
          "Er zijn drie redenen om geen prijzen op de site te zetten. Ze zijn allemaal begrijpelijk. Twee ervan houden geen stand.",
          "De eerste: mijn concurrent kijkt mee. Dat doet hij toch al. Wie in jouw markt zit kent je tarieven binnen een paar telefoontjes, of hij vraagt gewoon een offerte aan onder een andere naam. Je verbergt je prijs dus vooral voor de klant, niet voor de concurrent.",
          "De tweede: elke verhuur is anders. Dat klopt. Precies daarom werkt een vanafprijs. Niemand verwacht een exacte prijs voor een samengestelde order. Wel wil hij weten of hij in de buurt van jouw orde van grootte zit. Een tarief per dag, weekend en week met een ondergrens is genoeg om die vraag te beantwoorden.",
          "De derde: ik wil eerst het gesprek. Dat is een echte reden, alleen kost hij je de gesprekken die je juist wil. De klant die zijn budget kent en jouw prijs ziet passen, belt. De klant die niets kan inschatten belt de volgende in Google. Je selecteert zo op mensen met veel tijd in plaats van op mensen die willen huren.",
        ],
      },
      {
        kop: "Wat er in de praktijk gebeurt als de prijs er niet staat",
        accent: "in de praktijk",
        alineas: [
          "Dit kan een verhuurder zonder tarieven op de site merken:",
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
              "Elke keer dezelfde vraag, ook van mensen die alleen even peilen. Dat werk verdwijnt niet door harder te werken, het verdwijnt door het antwoord op te schrijven. Precies waar een [website voor verhuurbedrijven](/branches/verhuurbedrijven) voor bedoeld is: het standaardwerk uit handen nemen.",
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
              "Dag, weekend en week in één tabel. Verhuur wordt in periodes gedacht, dus je prijzen horen in periodes te staan.",
          },
          {
            titel: "Borg en voorwaarden apart en vooraf",
            tekst:
              "Niet in de kleine lettertjes maar naast de prijs. Onduidelijkheid over borg levert discussie op achteraf. Dat kost je meer dan een klant die nu afziet.",
          },
          {
            titel: "Wat wel en niet is inbegrepen",
            tekst:
              "Bezorging, brandstof, schoonmaak, verzekering. Twee regels zijn genoeg. Dit is de logische vraag na de prijs, dus geef het antwoord ernaast.",
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
          "Er is een uitzondering. Die is kleiner dan het lijkt. Bij echt samengesteld werk, waar de prijs van tien variabelen afhangt en elke opdracht op maat wordt gerekend, is een losse prijs zinloos. Dan zet je geen bedrag neer maar een bandbreedte plus dat rekenvoorbeeld.",
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
        a: "Indirect. Wie zoekt op wat iets kost, vindt op zo'n pagina het antwoord, dus die pagina past bij die zoekvraag. Belangrijker is dat de bezoeker die binnenkomt blijft in plaats van meteen terug te gaan naar de zoekresultaten.",
      },
      {
        q: "Wat doe ik met kortingen voor vaste klanten?",
        a: "Die noem je als staffel of als afspraak, niet als los bedrag. Bijvoorbeeld: bij meer dan vijf verhuringen per jaar maak je een vaste prijsafspraak. Zo houd je je ruimte en weet de terugkerende klant toch dat er iets te halen is.",
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
    gewijzigd: "2026-10-20",
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

**Waarom het boekingen kost.** Google gebruikt vooral de mobiele versie van een site om pagina's te indexeren en te rangschikken ([Google Search Central](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing), bijgewerkt 10-12-2025, gelezen 19-10-2026). Een goede pagina-ervaring omvat volgens Google onder meer goed weergeven op mobiel, een beveiligde verbinding en geen opdringerige tussenschermen ([Google Search Central](https://developers.google.com/search/docs/appearance/page-experience), bijgewerkt 22-09-2026, gelezen 19-10-2026). Wie op de telefoon niet verder komt, kan niet boeken.

**Zelfcheck (5 minuten).**

1. Open je site op je eigen telefoon.
2. Loop het pad van homepage tot boeken of aanvragen.
3. Noteer elke plek waar je moet inzoomen, opzij scrollen of opnieuw beginnen.`,
          },
          {
            titel: "3. De pagina laadt te traag",
            tekst: `**Wat de bezoeker ziet.** Een wit scherm, een trage openingsfoto of een knop die pas na seconden verschijnt.

**Waarom het boekingen kost.** Snelheid beïnvloedt hoe lang bezoekers blijven en of ze verder gaan ([web.dev](https://web.dev/articles/why-speed-matters), bijgewerkt 01-11-2023, gelezen 19-10-2026). Google noemt een pagina snel genoeg als het grootste zichtbare element binnen 2,5 seconden in beeld staat ([web.dev](https://web.dev/articles/vitals), bijgewerkt 31-10-2024, gelezen 19-10-2026). Goede scores garanderen geen hogere positie in Google ([Google Search Central](https://developers.google.com/search/docs/appearance/page-experience), bijgewerkt 22-09-2026, gelezen 19-10-2026).

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

**Waarom het boekingen kost.** Wie de prijs of een vrije datum niet ziet, moet gegevens afgeven zonder te weten of het past. Let vooral op een prijs die pas na het formulier zichtbaar is of een reserveringspagina zonder datum of tarief. Meer hierover staat in [prijzen op je website zetten](/kennisbank/prijzen-op-website-verhuurbedrijf).

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

**Waarom het boekingen kost.** Een knop die nergens heen leidt, maakt boeken onmogelijk. Hetzelfde geldt voor een lege reserveringspagina.

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
    metaTitle: "Waar boekingen weglekken op je website | MegaOnline",
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
    gewijzigd: "2026-10-21",
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
        kop: "Hoe zie je of een aanpassing werkt?",
        accent: "aanpassing werkt",
        alineas: [
          "Niet elke aanpassing aan je website is meteen terug te zien in de zoekresultaten. Of een aanpassing hielp, zie je door te meten in Search Console ([SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)).",
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
            titel: "Korte lijnen.",
            tekst: "Er is weinig intern overleg. Een kleine wijziging hoeft niet langs meerdere mensen.",
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
          "Genoemd worden is pas de eerste stap. Wie via ChatGPT op je site komt, moet zien wat je doet en hoe hij contact opneemt. Waar het daarna vaak misgaat lees je in [Waarom levert je website geen aanvragen of klanten op?](/kennisbank/website-levert-geen-aanvragen-op) Meer over vindbaarheid in Google en AI lees je bij [SEO en GEO](/diensten/seo).",
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
    gewijzigd: "2026-10-22",
    cta: "scan",
    eindKop: "Wil je weten waar gasten op jouw site afhaken voordat ze reserveren?",
    eindLead:
      "Beantwoord zes korte vragen. MegaOnline kijkt persoonlijk naar je website en je reserveringsroute en laat zien waar de reserveringen blijven hangen. Wil je eerst meer weten over de opzet, lees dan wat er bij een [website met reserveringssysteem](/branches/reserveringen) komt kijken.",
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
          "Heb je nog geen systeem, of past je huidige systeem niet bij wat je verkoopt, dan is er ook een eigen boekings- en reserveringssysteem. Dat wordt ingericht op jouw diensten, van het boeken van een belafspraak tot het kopen van een ticket met extra opties. Wat het allemaal kan staat op de pagina over [MegaSmart](/megasmart).",
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
        to: "/kennisbank/waar-boekingen-weglekken",
        label: "Waar boekingen weglekken op je website",
        tekst: "De plekken waar gasten afhaken voordat ze reserveren.",
      },
      {
        to: "/megasmart",
        label: "Boekings- en reserveringssysteem MegaSmart",
        tekst: "Online reserveren, bevestigingen en opvolging in één systeem.",
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
