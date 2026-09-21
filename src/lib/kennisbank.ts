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
    secties: [
      {
        kop: "Vertrouwen is geen gevoel, het is een lijstje dat de bezoeker afvinkt",
        accent: "een lijstje",
        alineas: [
          "Iemand die jouw website voor het eerst opent doet in stilte een risicocontrole. Bestaat dit bedrijf echt. Werkt hier een mens. Weet die persoon waar hij over praat. Wat gaat dit ongeveer kosten. Wat gebeurt er als het misgaat. Pas als die vragen genoeg antwoord hebben gehad, vult iemand een formulier in.",
          "Het lastige is dat bijna elke zakelijke website precies hetzelfde zegt. Kwaliteit, maatwerk, korte lijnen, jarenlange ervaring. Die woorden zijn gratis, dus ze bewijzen niets. Bewijs is alles wat iemand kan controleren zonder jou te bellen: een naam, een gezicht, een prijs, een project dat echt bestaat. Daarom begint een [conversiegerichte website](/diensten/conversie-website) bij ons met bewijs en niet bij een ontwerp.",
          "Dit geldt sterker naarmate de opdracht groter is. Wie een offerte aanvraagt voor een installatie van tienduizend euro neemt een risico met zijn eigen naam eraan. Zie ook wat dat betekent voor [dienstverleners](/branches/dienstverleners), waar de site het vertrouwen moet wekken dat jij in een gesprek vanzelf wekt.",
        ],
      },
      {
        kop: "Zeven dingen die een zakelijke bezoeker zoekt",
        accent: "zeven dingen",
        alineas: [
          "Dit is geen wensenlijst, dit is wat we in websitescans het vaakst missen. Hoe meer ervan klopt, hoe minder reden iemand heeft om af te haken.",
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
          "Net zo belangrijk als toevoegen: weghalen. Deze vier zien we vaak op sites die inhoudelijk prima zijn.",
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
          "Een snelle website die niets bewijst levert nog steeds niets op. Techniek bepaalt of iemand je pagina ziet, vertrouwen bepaalt of hij iets doet. Dat is ook waarom we bij een scan eerst naar vertrouwen kijken en pas daarna naar laadtijd.",
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
          "Deze vier gevolgen komen we in scans steeds tegen bij verhuurders zonder tarieven op de site.",
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
];

/** Het artikel bij een slug, of `undefined` als die slug niet bestaat. */
export function artikelBySlug(slug: string): Artikel | undefined {
  return ARTIKELEN.find((a) => a.slug === slug);
}

/** Nieuwste artikelen eerst, zodat het overzicht zichzelf sorteert. */
export function artikelenNieuwsteEerst(): Artikel[] {
  return [...ARTIKELEN].sort((a, b) => b.gepubliceerd.localeCompare(a.gepubliceerd));
}
