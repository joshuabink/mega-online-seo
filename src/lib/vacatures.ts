/**
 * Vacatures voor /werken-bij.
 *
 * Eén bron voor drie dingen: de kaarten op de overzichtspagina, de
 * detailpagina (`src/routes/werken-bij/$slug.tsx`) en de JobPosting-markup in
 * `src/lib/schema.ts`. Ze uit elkaar laten lopen is precies wat Google's
 * vacaturecontrole afkeurt, dus voeg een rol hier toe en nergens anders.
 *
 * Nieuwe rol toevoegen: object erbij, slug uniek houden en `public/sitemap.xml`
 * aanvullen. De route is dynamisch, dus verder is er niets te registreren.
 */

export type Vacature = {
  /** Laatste deel van de URL: /werken-bij/<slug>. */
  slug: string;
  /** Korte naam voor kaarten, kruimelpad en navigatie. */
  naam: string;
  /** Volledige functietitel, ook de `title` in de JobPosting-markup. */
  titel: string;
  /** Zichtbaar label: Stage, Freelance of parttime, … */
  soort: string;
  /** schema.org employmentType. INTERN, PART_TIME of CONTRACTOR. */
  employmentType: string[];
  /** Icoonnaam uit `src/components/marks.tsx`. */
  icoon: string;
  /** Eén zin op de kaart in het overzicht. */
  teaser: string;
  /** Introzin onder de H1. */
  intro: string;
  /** Accentwoord in de H1, wordt door het designsysteem gekleurd. */
  koph1: [string, string, string];
  uren: string;
  ervaring: string;
  doet: { titel: string; tekst: string }[];
  meebrengt: string[];
  nietNodig: string[];
  nietNodigKop: string;
  krijgt: { icoon: string; titel: string; tekst: string }[];
  metaTitle: string;
  metaDescription: string;
};

/** Geldt voor alle rollen, dus één keer vastgelegd. */
export const VOORWAARDEN = {
  locatie: "Gouda of volledig remote",
  vergoeding: "In overleg",
  start: "In overleg",
  bedrijf: "MegaOnline.io",
  plaats: "Gouda",
  mail: "joshua@joshuabink.nl",
  whatsapp: "+31634388938",
  whatsappUrl: "https://wa.me/31634388938",
};

/**
 * Datum waarop deze vacatures zijn gepubliceerd, plus de datum waarop Google
 * ze weer uit de vacatureresultaten haalt. Blijft `geldigTot` in het verleden
 * liggen, dan verdwijnen alle rollen stilletjes uit Google for Jobs. Verzet hem
 * dus zolang de vacatures open staan.
 */
export const GEPLAATST_OP = "2026-09-09";
export const GELDIG_TOT = "2027-03-31";

export const VACATURES: Vacature[] = [
  {
    slug: "seo-stage",
    naam: "SEO Stage",
    titel: "Stage SEO",
    soort: "Stage",
    employmentType: ["INTERN"],
    icoon: "search-check",
    teaser:
      "Uitzoeken waarom de ene pagina wel gevonden wordt en de andere niet. En die tweede pagina beter maken.",
    intro:
      "Je werkt aan de vindbaarheid van echte klantsites. Je ziet in de zoekdata welke pagina’s wel vertoningen krijgen maar geen klikken. Jij schrijft de titels die dat omdraaien. Wat jij aanpast, zie je een maand later terug in de rapportage.",
    koph1: ["Zoeken, testen en ", "echt iets zien bewegen", " in Google."],
    uren: "2 tot 5 dagen per week",
    ervaring: "Een beetje ervaring is fijn",
    doet: [
      {
        titel: "Zoekwoorden uitzoeken",
        tekst:
          "Per klant en per pagina bepalen waar mensen echt op zoeken en welke van die vragen nog geen antwoord heeft op de site.",
      },
      {
        titel: "Titels en omschrijvingen herschrijven",
        tekst:
          "Een pagina die vaak verschijnt maar zelden wordt aangeklikt heeft geen zichtbaarheidsprobleem. Die heeft een titelprobleem.",
      },
      {
        titel: "Pagina’s technisch nalopen",
        tekst:
          "Snelheid, koppenstructuur, interne links en dubbele pagina’s. Je leert waar je naar kijkt en waarom het uitmaakt.",
      },
      {
        titel: "Maandrapportages voorbereiden",
        tekst:
          "De cijfers ophalen en er duiding bij schrijven. Niet alleen wat er veranderde, maar wat het opleverde aan aanvragen.",
      },
      {
        titel: "Kennisbankartikelen schrijven",
        tekst:
          "Antwoorden op vragen die ondernemers echt stellen. Jouw stukken komen onder je eigen naam online.",
      },
    ],
    meebrengt: [
      "Je bent nieuwsgierig naar hoe zoekmachines kiezen wat bovenaan komt",
      "Je schrijft in gewoon Nederlands, zonder vakjargon",
      "Je werkt netjes en houdt je eigen werk bij",
      "Je zegt het als je iets niet weet in plaats van te gokken",
      "Je volgt een opleiding richting marketing, communicatie of media",
    ],
    nietNodigKop: "Wat je niet hoeft te hebben",
    nietNodig: [
      "Certificaten of cursussen op je cv",
      "Ervaring met dure analysetools",
      "Kunnen programmeren",
    ],
    krijgt: [
      {
        icoon: "users",
        titel: "Echte klanten",
        tekst: "Geen oefencases. Je werkt aan sites waar mensen hun omzet uit halen.",
      },
      {
        icoon: "line-chart",
        titel: "Je ziet je effect",
        tekst: "Elke maand terug in de cijfers, met uitleg waarom iets wel of niet werkte.",
      },
      {
        icoon: "pen-tool",
        titel: "Werk onder je naam",
        tekst: "Je artikelen komen online. Dat is meteen je portfolio.",
      },
      {
        icoon: "handshake",
        titel: "Directe begeleiding",
        tekst: "Je werkt naast Joshua, niet onder drie lagen leidinggevenden.",
      },
    ],
    metaTitle: "Stage SEO | Werken bij MegaOnline.io",
    metaDescription:
      "Stage SEO bij MegaOnline in Gouda of volledig remote. Zoekwoordonderzoek, titels herschrijven, techniek nalopen en rapportages maken voor echte klanten.",
  },

  {
    slug: "webdesign-stage",
    naam: "Webdesign Stage",
    titel: "Stage Webdesign",
    soort: "Stage",
    employmentType: ["INTERN"],
    icoon: "palette",
    teaser:
      "Je hoeft geen enkel programma te kennen. Je moet kunnen zien waarom de ene pagina rust uitstraalt en de andere niet.",
    intro:
      "Vormgeving is bij ons geen laagje op het eind. Het is de keuze wat bovenaan staat, wat weg mag en waar de blik als eerste landt. Die keuzes leer je maken op sites die daarna echt live gaan.",
    koph1: ["Smaak is een begin. ", "Weten waarom", " is het vak."],
    uren: "2 tot 5 dagen per week",
    ervaring: "Geen ervaring nodig",
    doet: [
      {
        titel: "Pagina’s schetsen",
        tekst:
          "Op basis van wie de bezoeker is en wat hij zoekt. Eerst de volgorde van het verhaal, dan pas de vorm.",
      },
      {
        titel: "Kiezen wat weg kan",
        tekst:
          "De meeste sites zijn niet te lelijk, ze zijn te vol. Jij helpt bepalen wat er echt toe doet.",
      },
      {
        titel: "Beeld selecteren en bijsnijden",
        tekst:
          "Foto’s zoeken die kloppen bij het bedrijf en ze zo bijsnijden dat ze op elk scherm werken.",
      },
      {
        titel: "Bestaande klantsites nalopen",
        tekst:
          "Waar wringt het: te kleine letters, knoppen die verdwijnen, tekst op een druk beeld. Jij vindt het en stelt iets beters voor.",
      },
      {
        titel: "Meedenken over huisstijl",
        tekst:
          "Kleuren, typografie en de manier waarop een merk consequent terugkomt op elke pagina.",
      },
    ],
    meebrengt: [
      "Je hebt gevoel voor wat rustig en verzorgd oogt",
      "Je kijkt kritisch naar sites die je tegenkomt en kunt zeggen wat je stoort",
      "Je wilt weten waaróm iets werkt, niet alleen dat het mooi is",
      "Je vindt het prima om je werk te laten afkraken en het daarna beter te maken",
    ],
    nietNodigKop: "Wat je niet hoeft te kunnen",
    nietNodig: [
      "Werken met Figma, Photoshop of welk programma dan ook",
      "Een portfolio laten zien",
      "Een opleiding in vormgeving (handig, geen eis)",
    ],
    krijgt: [
      {
        icoon: "layout-template",
        titel: "Je ontwerp gaat live",
        tekst: "Wat je maakt blijft niet in een map staan. Het komt op het internet.",
      },
      {
        icoon: "graduation-cap",
        titel: "Je leert de tools hier",
        tekst: "We zetten je op weg in de programma’s die we gebruiken. Beginnen mag.",
      },
      {
        icoon: "eye",
        titel: "Je oog wordt scherper",
        tekst: "Na een paar maanden zie je in tien seconden wat er mis is met een pagina.",
      },
      {
        icoon: "handshake",
        titel: "Directe begeleiding",
        tekst: "Feedback op je werk van iemand die het zelf ook bouwt.",
      },
    ],
    metaTitle: "Stage Webdesign | Werken bij MegaOnline.io",
    metaDescription:
      "Stage webdesign bij MegaOnline in Gouda of volledig remote. Geen ervaring met ontwerpprogramma’s nodig, gevoel voor wat werkt wel. Je ontwerp gaat echt live.",
  },

  {
    slug: "webdevelopment-stage",
    naam: "Webdevelopment Stage",
    titel: "Stage Webdevelopment",
    soort: "Stage",
    employmentType: ["INTERN"],
    icoon: "code-2",
    teaser:
      "Je hoeft niet te kunnen coderen. Je moet het leuk vinden om net zo lang te pielen tot iets werkt.",
    intro:
      "Websites bouwen is voor het grootste deel puzzelen: het juiste blok op de juiste plek, een formulier dat op de goede plek uitkomt, een koppeling die blijft werken. Dat kun je leren zonder ooit een regel code te hebben geschreven.",
    koph1: ["Bouwen zonder dat je ", "programmeur", " bent."],
    uren: "2 tot 5 dagen per week",
    ervaring: "Geen ervaring nodig",
    doet: [
      {
        titel: "Pagina’s bouwen",
        tekst:
          "In de bouwers die wij gebruiken. Uit een ontwerp een werkende pagina maken die op mobiel net zo goed staat.",
      },
      {
        titel: "Koppelingen leggen",
        tekst:
          "Formulieren naar de mailbox, agenda’s naar de site, aanvragen naar het systeem van de klant.",
      },
      {
        titel: "Sites live zetten en nalopen",
        tekst: "Domeinen, doorverwijzingen en de controle of alles het na livegang nog doet.",
      },
      {
        titel: "Fouten opsporen",
        tekst:
          "Iets doet het niet. Jij zoekt uit wáár het misgaat en schrijft op hoe je het kunt herhalen.",
      },
      {
        titel: "Met AI kleine aanpassingen maken",
        tekst:
          "Een stukje code aanpassen met hulp van AI en daarna controleren of het klopt. Zo leer je lezen wat er staat.",
      },
    ],
    meebrengt: [
      "Je vindt uitzoeken leuker dan opgeven",
      "Je werkt nauwkeurig, want één verkeerd teken breekt een pagina",
      "Je durft te klooien in een testomgeving zonder bang te zijn iets stuk te maken",
      "Je kunt opschrijven wat je gedaan hebt, zodat een ander het snapt",
    ],
    nietNodigKop: "Wat je niet hoeft te kunnen",
    nietNodig: ["Programmeren", "Een technische opleiding volgen", "Frameworks of talen kennen"],
    krijgt: [
      {
        icoon: "rocket",
        titel: "Je zet sites live",
        tekst: "Binnen je stage staat er werk van jou online, met bezoekers erop.",
      },
      {
        icoon: "workflow",
        titel: "Je leert het hele pad",
        tekst: "Van ontwerp naar pagina naar koppeling naar livegang. Niet één stukje.",
      },
      {
        icoon: "bot",
        titel: "Werken met AI",
        tekst: "Je leert AI inzetten als gereedschap, inclusief wanneer het onzin oplevert.",
      },
      {
        icoon: "handshake",
        titel: "Directe begeleiding",
        tekst: "Vastlopen mag. Er zit altijd iemand naast je die het al eens heeft opgelost.",
      },
    ],
    metaTitle: "Stage Webdevelopment | Werken bij MegaOnline.io",
    metaDescription:
      "Stage webdevelopment bij MegaOnline in Gouda of volledig remote. Je hoeft niet te kunnen coderen. Pagina’s bouwen, koppelingen leggen en sites live zetten.",
  },

  {
    slug: "ai-ontwikkeling",
    naam: "AI-ontwikkeling",
    titel: "AI-ontwikkelaar (stage of parttime)",
    soort: "Stage of parttime",
    employmentType: ["INTERN", "PART_TIME"],
    icoon: "bot",
    teaser:
      "Dingen maken mét AI. Je hoeft zelf geen model te bouwen, je moet er iets werkends van maken.",
    intro:
      "Wij automatiseren ons eigen werk: rapportages die zichzelf voorbereiden, offertes die al klaarstaan, klantvragen die op de goede plek belanden. Jij bouwt die dingen, test ze tot ze betrouwbaar zijn en zoekt uit wat je juist níet aan een AI moet overlaten.",
    koph1: ["Bouwen ", "met", " AI, niet aan AI."],
    uren: "2 tot 4 dagen per week",
    ervaring: "Eigen geknutsel telt als ervaring",
    doet: [
      {
        titel: "Handwerk automatiseren",
        tekst:
          "Zoeken naar de taken die elke week terugkomen en er een werkende automatisering van maken.",
      },
      {
        titel: "Agents en workflows bouwen",
        tekst:
          "Zodat rapportages, offertes en opvolging voorbereid klaarstaan voor een mens ze goedkeurt.",
      },
      {
        titel: "Koppelingen leggen",
        tekst:
          "Tussen de tools die we gebruiken: website, mail, agenda, boekhouding en klantsysteem.",
      },
      {
        titel: "Prompts schrijven en testen",
        tekst:
          "Net zo lang bijschaven tot het antwoord tien keer op rij klopt. Eén keer goed is toeval.",
      },
      {
        titel: "Grenzen bewaken",
        tekst:
          "Bepalen waar een mens moet kijken voordat er iets naar buiten gaat. Er zit altijd iemand tussen.",
      },
    ],
    meebrengt: [
      "Je speelt uit jezelf al met AI-tools",
      "Je denkt in stappen: eerst dit, dan dat en wat als het misgaat",
      "Je vindt het leuk om te blijven schaven tot iets klopt",
      "Je bent kritisch op wat een model beweert",
    ],
    nietNodigKop: "Wat je niet hoeft te kunnen",
    nietNodig: [
      "Modellen trainen of finetunen",
      "Wiskunde of datascience",
      "Zwaar programmeerwerk",
    ],
    krijgt: [
      {
        icoon: "sparkles",
        titel: "Vrije hand",
        tekst: "Zie je iets dat sneller kan? Bouw het. Dat is hier geen zijproject.",
      },
      {
        icoon: "blocks",
        titel: "Toegang tot alles",
        tekst: "Je werkt met de tools en systemen die het bedrijf echt draaiende houden.",
      },
      {
        icoon: "clock",
        titel: "Meetbaar resultaat",
        tekst: "Uren die je bespaart zijn uren. Dat is prettig concreet.",
      },
      {
        icoon: "handshake",
        titel: "Directe begeleiding",
        tekst: "Korte lijnen, snelle beslissingen, geen goedkeuringsronde van drie weken.",
      },
    ],
    metaTitle: "AI-ontwikkelaar, stage of parttime | Werken bij MegaOnline.io",
    metaDescription:
      "Bouw met AI bij MegaOnline in Gouda of volledig remote. Automatiseringen, agents en koppelingen maken. Geen modellen trainen, wel iets werkends opleveren.",
  },

  {
    slug: "seo-specialist",
    naam: "SEO Specialist",
    titel: "SEO Specialist (freelance of parttime)",
    soort: "Freelance of parttime",
    employmentType: ["CONTRACTOR", "PART_TIME"],
    icoon: "trending-up",
    teaser:
      "Je pakt de vindbaarheid van een vaste set klanten en bent verantwoordelijk voor wat er groeit.",
    intro:
      "Onze klanten leven van aanvragen en boekingen. Jij zorgt dat ze gevonden worden door de mensen die daar klaar voor zijn. Elke maand leg je uit wat je deed en wat het opleverde. Geen rapport vol grafieken, wel een eerlijk verhaal.",
    koph1: ["Eigenaar van de ", "groei", " van een vaste set klanten."],
    uren: "In overleg, vanaf 8 uur per week",
    ervaring: "Aantoonbare ervaring vereist",
    doet: [
      {
        titel: "Per klant een plan maken",
        tekst:
          "Waar staat de site nu, waar valt de meeste winst te halen en in welke volgorde pakken we dat.",
      },
      {
        titel: "Zoekwoordonderzoek en contentplanning",
        tekst: "Van zoekvraag naar pagina. Je bepaalt wat er geschreven moet worden en waarom.",
      },
      {
        titel: "Techniek en interne links",
        tekst:
          "Zorgen dat de site vindbaar én leesbaar is en dat autoriteit terechtkomt op de pagina’s die moeten scoren.",
      },
      {
        titel: "Maandrapportage met duiding",
        tekst:
          "Elk cijfer krijgt uitleg. Bij een daling benoemen we die in plaats van hem weg te poetsen.",
      },
      {
        titel: "Stagiairs begeleiden",
        tekst: "Je stuurt het werk van de SEO-stagiair aan en maakt hem beter. Dat hoort erbij.",
      },
    ],
    meebrengt: [
      "Aantoonbare ervaring met SEO voor het mkb",
      "Je kunt zelfstandig prioriteiten stellen zonder dat iemand je werk verdeelt",
      "Je legt in gewone taal uit wat je doet, ook aan een ondernemer die niks van SEO weet",
      "Je stuurt op aanvragen, niet op bezoekersaantallen",
    ],
    nietNodigKop: "Wat we niet vragen",
    nietNodig: ["Fulltime beschikbaar zijn", "Op kantoor zitten", "Een cv van een groot bureau"],
    krijgt: [
      {
        icoon: "target",
        titel: "Eigen klanten",
        tekst: "Je krijgt een vaste set en bouwt daar een echte relatie mee op.",
      },
      {
        icoon: "sliders",
        titel: "Je eigen aanpak",
        tekst: "Wij schrijven geen draaiboek voor. Jij bepaalt hoe je het aanpakt.",
      },
      {
        icoon: "calendar-check",
        titel: "Ritme, geen ruis",
        tekst: "Maandritme met vaste momenten. Geen ad-hoc verzoeken op vrijdagmiddag.",
      },
      {
        icoon: "handshake",
        titel: "Kort schakelen",
        tekst: "Eén aanspreekpunt. Beslissingen dezelfde dag.",
      },
    ],
    metaTitle: "SEO Specialist, freelance of parttime | Werken bij MegaOnline.io",
    metaDescription:
      "SEO Specialist gezocht bij MegaOnline, freelance of parttime, remote of vanuit Gouda. Eigen klantenset, eigen aanpak en maandelijkse rapportage met duiding.",
  },

  {
    slug: "sea-stage",
    naam: "SEA Stage",
    titel: "Stage SEA",
    soort: "Stage",
    employmentType: ["INTERN"],
    icoon: "mouse-pointer-click",
    teaser: "Adverteren waarbij het niet om klikken gaat, maar om wat er na de klik gebeurt.",
    intro:
      "Een campagne die veel klikken oplevert en geen aanvragen is geen succes, hoe mooi het dashboard er ook uitziet. Jij leert kijken naar wat een aanvraag kost en wat je moet veranderen om dat bedrag omlaag te krijgen.",
    koph1: ["Adverteren op ", "aanvragen", ", niet op klikken."],
    uren: "2 tot 5 dagen per week",
    ervaring: "Geen ervaring nodig",
    doet: [
      {
        titel: "Campagnes opzetten en bijhouden",
        tekst:
          "Structuur, zoekwoorden en budget. Je leert waarom een nette opbouw je later geld bespaart.",
      },
      {
        titel: "Verspilling eruit halen",
        tekst:
          "Zoektermen uitsluiten die wel klikken maar nooit klanten opleveren. Dat is het werk dat het verschil maakt.",
      },
      {
        titel: "Advertenties schrijven en testen",
        tekst: "Kort, concreet en eerlijk. Twee versies naast elkaar en de cijfers laten kiezen.",
      },
      {
        titel: "Landingspagina’s beoordelen",
        tekst:
          "De klik is betaald. Als de pagina daarna niet overtuigt, is het geld weg. Jij ziet waar dat misgaat.",
      },
      {
        titel: "Rekenen naar kosten per aanvraag",
        tekst: "Van uitgaven naar het enige getal dat een ondernemer echt interesseert.",
      },
    ],
    meebrengt: [
      "Je bent goed met getallen en verliest je niet in ze",
      "Je schrijft kort en scherp",
      "Je hebt het geduld om te blijven testen en bij te sturen",
      "Je volgt een opleiding richting marketing of commercie",
    ],
    nietNodigKop: "Wat je niet hoeft te hebben",
    nietNodig: ["Certificaten", "Eerder campagnes gedraaid", "Ervaring met grote budgetten"],
    krijgt: [
      {
        icoon: "euro",
        titel: "Echt budget",
        tekst: "Je werkt met lopende campagnes van klanten, niet met een oefenaccount.",
      },
      {
        icoon: "gauge",
        titel: "Snelle terugkoppeling",
        tekst: "Bij adverteren zie je binnen dagen of je keuze klopte. Dat leert hard.",
      },
      {
        icoon: "link-2",
        titel: "Verder dan de klik",
        tekst: "Je leert ook de pagina erachter beoordelen, want daar valt de winst.",
      },
      {
        icoon: "handshake",
        titel: "Directe begeleiding",
        tekst: "Je zit niet alleen op een campagne. We kijken samen naar de cijfers.",
      },
    ],
    metaTitle: "Stage SEA | Werken bij MegaOnline.io",
    metaDescription:
      "Stage SEA bij MegaOnline in Gouda of volledig remote. Campagnes opzetten, verspilling eruit halen en sturen op kosten per aanvraag. Geen ervaring nodig.",
  },

  {
    slug: "web-consultant",
    naam: "Web Consultant",
    titel: "Web Consultant (parttime, freelance of stage)",
    soort: "Parttime, freelance of stage",
    employmentType: ["PART_TIME", "CONTRACTOR", "INTERN"],
    icoon: "message-square-text",
    teaser:
      "Gesprekken voeren met klanten, hun bedrijf vertalen naar een strategie en die strategie omzetten naar wat er op de site moet staan.",
    intro:
      "De beste website begint niet bij vormgeving maar bij een goed gesprek. Wie is de klant, waar loopt hij op vast en welke vraag moet de site beantwoorden voordat iemand contact opneemt. Jij voert dat gesprek en maakt er een plan van dat de bouwers kunnen uitvoeren.",
    koph1: ["Van een goed ", "gesprek", " naar een site die klopt."],
    uren: "In overleg",
    ervaring: "Ervaring welkom, houding belangrijker",
    doet: [
      {
        titel: "Kennismakingsgesprekken voeren",
        tekst:
          "Met ondernemers die meer aanvragen willen. Luisteren, doorvragen en eerlijk zeggen wat je denkt.",
      },
      {
        titel: "Doelgroep en aanbod scherp krijgen",
        tekst:
          "Voor wie is dit bedrijf er precies en waarom zou iemand hén kiezen en niet de buurman.",
      },
      {
        titel: "Bepalen wat de site moet doen",
        tekst:
          "Welke pagina’s er nodig zijn, wat er bovenaan hoort en welke twijfel je op welk moment wegneemt.",
      },
      {
        titel: "Voorstellen maken en toelichten",
        tekst:
          "Een plan dat een ondernemer begrijpt zonder vaktaal, met een duidelijke reden achter elke keuze.",
      },
      {
        titel: "Na livegang meedenken",
        tekst: "De site is een beginpunt. Jij helpt bepalen wat de volgende groeikans is.",
      },
    ],
    meebrengt: [
      "Je kunt luisteren en doorvragen zonder je eigen verhaal erdoorheen te duwen",
      "Je legt makkelijk contact en voelt je thuis in een gesprek met een ondernemer",
      "Je zet een gesprek om in een helder plan dat een ander kan uitvoeren",
      "Je vindt commercieel werk leuk zonder te willen pushen",
    ],
    nietNodigKop: "Wat je niet hoeft te hebben",
    nietNodig: [
      "Verkoopervaring bij een bureau",
      "Technische kennis van websites",
      "Een script dat je uit je hoofd opdreunt",
    ],
    krijgt: [
      {
        icoon: "user-check",
        titel: "Eigen gesprekken",
        tekst: "Je voert ze zelf, niet als toehoorder. Vanaf het moment dat je er klaar voor bent.",
      },
      {
        icoon: "compass",
        titel: "Invloed op het werk",
        tekst: "Wat jij ophaalt bepaalt wat er gebouwd wordt. Dat is geen bijrol.",
      },
      {
        icoon: "briefcase",
        titel: "Breed beeld",
        tekst: "Je kijkt bij tientallen bedrijven binnen en ziet wat werkt en wat niet.",
      },
      {
        icoon: "handshake",
        titel: "Kort schakelen",
        tekst: "Van gesprek naar voorstel naar bouw, zonder tussenlagen.",
      },
    ],
    metaTitle: "Web Consultant, parttime, freelance of stage | Werken bij MegaOnline.io",
    metaDescription:
      "Web Consultant bij MegaOnline in Gouda of volledig remote. Klantgesprekken voeren, doelgroep en strategie uitwerken en vertalen naar wat er op de site moet staan.",
  },

  {
    slug: "app-web-architect",
    naam: "App & Web Architect",
    titel: "App & Web Architect (parttime, freelance of stage)",
    soort: "Parttime, freelance of stage",
    employmentType: ["PART_TIME", "CONTRACTOR", "INTERN"],
    icoon: "blocks",
    teaser:
      "Logisch nadenken over de technische inrichting van websites en webapps, voordat er iets gebouwd wordt.",
    intro:
      "De duurste fouten in een project worden gemaakt voordat er één pagina staat: de verkeerde structuur, een koppeling die niet blijkt te bestaan, een keuze die over een jaar niet meer meegroeit. Jij denkt dat vooraf door en legt het zo uit dat iedereen het snapt.",
    koph1: ["Eerst goed ", "nadenken", ", dan pas bouwen."],
    uren: "In overleg",
    ervaring: "Denkwerk telt zwaarder dan je cv",
    doet: [
      {
        titel: "Structuur bepalen",
        tekst:
          "Hoe verhouden gegevens, pagina’s en gebruikers zich tot elkaar. Dat is de basis waar alles op rust.",
      },
      {
        titel: "Platformkeuzes maken",
        tekst:
          "Wat past bij deze klant: een site, een webapp of iets bestaands. Inclusief waarom het alternatief afvalt.",
      },
      {
        titel: "Koppelingen ontwerpen",
        tekst:
          "Tussen site, klantsysteem, agenda, betaling en mail. Vooral bedenken wat er gebeurt als er iets misgaat.",
      },
      {
        titel: "Risico’s vroeg benoemen",
        tekst:
          "Een probleem dat je op papier ziet kost een uur. Datzelfde probleem in code kost een week.",
      },
      {
        titel: "Meekijken tijdens de bouw",
        tekst: "Bouwers en stagiairs scherp houden op de afspraken die je gemaakt hebt.",
      },
    ],
    meebrengt: [
      "Je denkt gestructureerd en ziet de gevolgen van een keuze twee stappen verderop",
      "Je kunt techniek uitleggen aan iemand die er niets van weet",
      "Je hebt ervaring met webapplicaties, koppelingen of datamodellen",
      "Je durft te zeggen dat een idee niet gaat werken, met argumenten erbij",
    ],
    nietNodigKop: "Wat we niet vragen",
    nietNodig: [
      "Een specifieke taal of framework beheersen",
      "Fulltime beschikbaar zijn",
      "Alles zelf bouwen",
    ],
    krijgt: [
      {
        icoon: "layers",
        titel: "Invloed vooraan",
        tekst: "Jij bepaalt mee hoe projecten worden ingericht, niet achteraf repareren.",
      },
      {
        icoon: "shuffle",
        titel: "Afwisseling",
        tekst: "Van een eenvoudige site tot een klantportaal met koppelingen.",
      },
      {
        icoon: "users",
        titel: "Een team dat luistert",
        tekst: "Je keuzes worden opgevolgd, want er zit niemand tussen die ze overrulet.",
      },
      {
        icoon: "handshake",
        titel: "Kort schakelen",
        tekst: "Direct contact met de oprichter en met de mensen die bouwen.",
      },
    ],
    metaTitle: "App & Web Architect, parttime, freelance of stage | Werken bij MegaOnline.io",
    metaDescription:
      "App & Web Architect bij MegaOnline in Gouda of volledig remote. De technische inrichting van websites en webapps doordenken voordat er gebouwd wordt.",
  },
];

/** Eén vacature op slug. `undefined` betekent een onbekende URL, dus een 404. */
export function vacatureBySlug(slug: string): Vacature | undefined {
  return VACATURES.find((v) => v.slug === slug);
}

/** Alle detailpaden, voor de sitemap en de schema-tabel. */
export const VACATURE_PADEN = VACATURES.map((v) => `/werken-bij/${v.slug}`);
