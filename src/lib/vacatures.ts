/**
 * Bron voor de vacaturepagina's.
 *
 * Eén record per vacature. De overzichtspagina (/vacatures) en de losse
 * detailpagina's lezen allebei hieruit, zodat titel, type en samenvatting
 * niet uit elkaar kunnen lopen.
 *
 * Uren, vergoeding en locatie staan bewust hier en niet in de opmaak: die
 * pas je op één plek aan zodra ze definitief zijn.
 *
 * `as const` is nodig: daardoor zijn de slugs letterlijke types en accepteert
 * `<Link to={...}>` de paden zonder cast.
 */

export const VACATURES = [
  {
    slug: "seo-stage",
    pad: "/vacatures/seo-stage",
    titel: "SEO Stage",
    type: "Stage",
    badge: "Stage · SEO",
    kort: "Zoekwoorden uitzoeken, teksten scherper maken en zien wat er verandert in Google. Op echte klantwebsites.",
    kop: "Leer hoe je een website",
    accent: "vindbaar maakt.",
    lead: "Je werkt aan de websites van onze klanten: uitzoeken waar hun klanten op zoeken, teksten verbeteren en meten wat dat oplevert. Je hoeft geen expert te zijn. Je moet wel willen begrijpen waarom iets werkt.",
    uren: "In overleg. Meeloopstage, afstudeerstage of parttime naast je studie.",
    vergoeding: "Stagevergoeding in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Stage SEO | Werken bij MegaOnline",
    metaOmschrijving: "SEO-stage bij MegaOnline in Gouda. Werk aan echte klantwebsites: zoekwoordonderzoek, betere teksten en meten wat er verandert in Google.",
    doet: [
      { icon: "search-check", kop: "Zoekwoordonderzoek", tekst: "Uitzoeken waar de klanten van onze klanten op zoeken en welke vragen ze stellen." },
      { icon: "file-text", kop: "Teksten scherper maken", tekst: "Titels, tussenkoppen en tekst zo schrijven dat zowel de bezoeker als Google snapt waar een pagina over gaat." },
      { icon: "line-chart", kop: "Meten wat het doet", tekst: "Elke maand kijken wat er verandert in vertoningen, klikken en aanvragen." },
      { icon: "list-checks", kop: "Technische checks", tekst: "Kapotte links, dubbele titels en trage pagina's opsporen en laten oplossen." },
      { icon: "link-2", kop: "Interne links leggen", tekst: "Zorgen dat pagina's naar elkaar verwijzen zodat bezoeker en Google verder komen." },
      { icon: "clipboard-list", kop: "Meeschrijven aan de rapportage", tekst: "Wat jij vindt komt terug in het maandoverzicht dat de klant krijgt." },
    ],
    meebrengt: [
      "Een beetje ervaring met SEO. Een studieopdracht of je eigen site telt ook.",
      "Je schrijft goed Nederlands.",
      "Je werkt nauwkeurig. SEO is voor een groot deel opletten.",
      "Je vraagt door waarom iets zo is.",
      "Je vindt het leuk om in cijfers te zoeken naar een verklaring.",
    ],
    krijgt: [
      "Echte klantwebsites vanaf week één, geen oefenopdracht.",
      "Je ziet wat je verandert terugkomen in de cijfers.",
      "Begeleiding van Joshua zelf. Geen tussenlaag.",
      "Je werkt met dezelfde tools als wij voor klanten gebruiken.",
      "Ruimte om een eigen onderzoek op te pakken.",
    ],
    faq: [
      { vraag: "Moet ik al met SEO-tools hebben gewerkt?", antwoord: "Nee. Het helpt als je weet wat zoekwoorden zijn. De tools leer je hier." },
      { vraag: "Werk ik meteen aan echte klanten?", antwoord: "Ja. Alles wat je maakt wordt nagekeken voordat het live gaat, dus je kunt niets stukmaken." },
      { vraag: "Kan ik dit combineren met mijn studie?", antwoord: "Ja. Meeloopstage, afstudeerstage of parttime naast je studie: we kijken wat past." },
      { vraag: "Welke opleiding moet ik doen?", antwoord: "Dat maakt ons minder uit dan wat je laat zien. Stuur vooral iets mee dat je zelf hebt gemaakt." },
    ],
  },
  {
    slug: "webdesign-stage",
    pad: "/vacatures/webdesign-stage",
    titel: "Webdesign Stage",
    type: "Stage",
    badge: "Stage · Webdesign",
    kort: "Je hoeft nog niet met ontwerpprogramma's te kunnen werken. Je moet wel kunnen zien waarom de ene pagina rustig oogt en de andere rommelig.",
    kop: "Ontwerpen leer je hier.",
    accent: "Smaak neem je mee.",
    lead: "We zoeken iemand met oog voor vorm. Of je nu al in een ontwerpprogramma hebt gewerkt of niet: als je kunt uitleggen waarom iets er goed uitziet, kunnen we je de rest leren.",
    uren: "In overleg. Meeloopstage, afstudeerstage of parttime naast je studie.",
    vergoeding: "Stagevergoeding in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Stage Webdesign | Werken bij MegaOnline",
    metaOmschrijving: "Webdesign-stage bij MegaOnline in Gouda. Ervaring met ontwerptools is niet nodig, gevoel voor vorm wel. Je ontwerpen worden echt gebouwd.",
    doet: [
      { icon: "layout-template", kop: "Pagina's uittekenen", tekst: "Bepalen welk blok waar komt, zodat een bezoeker in de goede volgorde leest." },
      { icon: "palette", kop: "Kleur en typografie", tekst: "Werken binnen de huisstijl van de klant en die aanscherpen waar het mag." },
      { icon: "images", kop: "Beeld kiezen en klaarmaken", tekst: "Foto's selecteren, bijsnijden en licht bewerken zodat ze op de site kloppen." },
      { icon: "smartphone", kop: "Ontwerpen voor elk scherm", tekst: "Een ontwerp is pas af als het op een telefoon net zo goed werkt." },
      { icon: "eye", kop: "Meekijken bij reviews", tekst: "Aanwezig zijn als een ontwerp met de klant wordt doorgenomen." },
      { icon: "sparkles", kop: "De laatste tien procent", tekst: "Uitlijnen, ruimte kloppend maken en details afmaken. Daar zit het verschil." },
    ],
    meebrengt: [
      "Je hebt een mening over vormgeving en kunt die onderbouwen.",
      "Oog voor detail. Scheve marges vallen je op.",
      "Ervaring met Figma of een ander ontwerpprogramma is niet nodig.",
      "Je vindt het niet erg om iets vijf keer opnieuw te doen.",
      "Je bent benieuwd waarom een pagina wel of niet werkt.",
    ],
    krijgt: [
      "Je leert werken in de ontwerptools die wij dagelijks gebruiken.",
      "Je ontwerpen worden echt gebouwd en gaan live.",
      "Concrete feedback op alles wat je maakt.",
      "Werk voor je portfolio waar een naam van een klant onder staat.",
      "Zicht op wat er ná het ontwerp gebeurt bij de bouw.",
    ],
    faq: [
      { vraag: "Moet ik Figma kennen?", antwoord: "Nee. Wij leren je de tool. Wat je meeneemt is je gevoel voor vorm." },
      { vraag: "Moet ik kunnen tekenen of illustreren?", antwoord: "Niet per se. Webdesign gaat vooral over indeling, rust en leesbaarheid." },
      { vraag: "Wat stuur ik mee?", antwoord: "Iets wat je gemaakt hebt. Een schoolproject, een poster of een site die je mooi vindt met de reden erbij." },
      { vraag: "Werk ik alleen aan nieuwe sites?", antwoord: "Nee. Ook aan bestaande sites die we opnieuw inrichten. Daar leer je vaak het meest van." },
    ],
  },
  {
    slug: "webdevelopment-stage",
    pad: "/vacatures/webdevelopment-stage",
    titel: "Webdevelopment Stage",
    type: "Stage",
    badge: "Stage · Development",
    kort: "Websites in elkaar zetten, koppelingen leggen en zorgen dat alles blijft werken. Grotendeels zonder code.",
    kop: "Websites bouwen",
    accent: "zonder dat je kunt programmeren.",
    lead: "Een groot deel van ons bouwwerk gebeurt zonder een regel code: pagina's opbouwen, koppelingen leggen en testen of alles klopt. Wil je wél leren coderen, dan is daar alle ruimte voor.",
    uren: "In overleg. Meeloopstage, afstudeerstage of parttime naast je studie.",
    vergoeding: "Stagevergoeding in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Stage Webdevelopment | Werken bij MegaOnline",
    metaOmschrijving: "Stage webdevelopment bij MegaOnline in Gouda. Je hoeft niet te kunnen programmeren: je bouwt sites, legt koppelingen en houdt ze werkend.",
    doet: [
      { icon: "blocks", kop: "Pagina's opbouwen", tekst: "Een goedgekeurd ontwerp omzetten naar werkende pagina's." },
      { icon: "plug", kop: "Koppelingen leggen", tekst: "Formulieren, agenda's, boekingssystemen en betaallinks aan elkaar knopen." },
      { icon: "wrench", kop: "Onderhoud en updates", tekst: "Sites van klanten bijwerken en veilig houden." },
      { icon: "gauge", kop: "Snelheid nakijken", tekst: "Uitzoeken waarom een pagina traag laadt en dat verhelpen." },
      { icon: "clipboard", kop: "Testen voor livegang", tekst: "Alles nalopen op elk scherm voordat een site de lucht in gaat." },
      { icon: "code-2", kop: "Leren coderen als je wilt", tekst: "Wie verder wil komt aan echte code toe. Dat hoeft niet, het mag wel." },
    ],
    meebrengt: [
      "Je denkt logisch en houdt van uitzoekwerk.",
      "Je werkt nauwkeurig. Eén verkeerd vinkje is een kapot formulier.",
      "Ervaring met programmeren is niet nodig.",
      "Je durft iets te proberen voor je het vraagt.",
      "Je vindt het prettig om iets af te maken.",
    ],
    krijgt: [
      "Je bouwt aan sites die echt gebruikt worden.",
      "Je leert hoe een site technisch in elkaar zit, van hosting tot formulier.",
      "Begeleiding bij elke stap. Je wordt niet in het diepe gegooid.",
      "Ruimte om door te groeien richting code als dat je ligt.",
      "Je ziet je werk binnen weken live staan.",
    ],
    faq: [
      { vraag: "Moet ik echt niet kunnen programmeren?", antwoord: "Klopt. Het meeste bouwwerk doen we in systemen die zonder code werken. Wil je code leren, dan kan dat hier." },
      { vraag: "Wat als ik iets stukmaak?", antwoord: "Dan draaien we het terug. We werken met versies, dus fouten zijn hier goedkoop." },
      { vraag: "Werk ik ook met klanten?", antwoord: "Soms. Meestal krijg je het werk via ons en zie je de klant bij de oplevering." },
      { vraag: "Welke opleiding past hierbij?", antwoord: "Van ICT tot communicatie. Interesse in techniek weegt zwaarder dan je opleiding." },
    ],
  },
  {
    slug: "ai-ontwikkeling-stage",
    pad: "/vacatures/ai-ontwikkeling-stage",
    titel: "AI-ontwikkeling Stage",
    type: "Stage",
    badge: "Stage · AI",
    kort: "Hulpmiddelen bouwen met AI die ons werk sneller maken. Je bouwt met AI, je bouwt geen AI.",
    kop: "Dingen maken mét AI.",
    accent: "Niet zelf AI bouwen.",
    lead: "Wij gebruiken AI om terugkerend werk weg te nemen: teksten voorbereiden, rapportages opbouwen, gegevens uit systemen halen. Jij bedenkt en maakt zulke hulpmiddelen mee.",
    uren: "In overleg. Meeloopstage, afstudeerstage of parttime naast je studie.",
    vergoeding: "Stagevergoeding in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Stage AI-ontwikkeling | Werken bij MegaOnline",
    metaOmschrijving: "Stage AI-ontwikkeling bij MegaOnline in Gouda. Je bouwt praktische hulpmiddelen met AI voor ons eigen werk en dat van klanten.",
    doet: [
      { icon: "bot", kop: "Assistenten opzetten", tekst: "Hulpjes maken die een vaste taak overnemen, bijvoorbeeld een eerste opzet van een tekst." },
      { icon: "workflow", kop: "Werk automatiseren", tekst: "Stappen aan elkaar knopen zodat een taak vanzelf loopt." },
      { icon: "file-spreadsheet", kop: "Rapportages voorbereiden", tekst: "Cijfers uit verschillende bronnen samenbrengen tot iets leesbaars." },
      { icon: "repeat", kop: "Herhaalwerk wegnemen", tekst: "Zoeken naar het werk dat elke week terugkomt en dat als eerste aanpakken." },
      { icon: "shield-check", kop: "Nakijken wat eruit komt", tekst: "AI gokt soms. Jij bedenkt hoe we dat op tijd zien." },
      { icon: "lightbulb", kop: "Nieuwe toepassingen bedenken", tekst: "Meedenken waar dit ons of onze klanten nog meer kan helpen." },
    ],
    meebrengt: [
      "Je hebt al eens iets gemaakt met AI, ook al was het klein.",
      "Je kunt een taak opdelen in stappen.",
      "Je bent kritisch op wat er uit een model komt.",
      "Kennis van machine learning is niet nodig.",
      "Je hebt zin om veel te proberen en snel bij te sturen.",
    ],
    krijgt: [
      "Vrijheid om te bouwen wat je zelf bedenkt, mits het werk oplevert.",
      "Toegang tot de betaalde tools waar we mee werken.",
      "Je maakt iets waar het hele bureau daarna mee werkt.",
      "Begeleiding van iemand die dit dagelijks doet.",
      "Een onderwerp dat zich uitstekend leent voor een afstudeeropdracht.",
    ],
    faq: [
      { vraag: "Moet ik modellen kunnen trainen?", antwoord: "Nee. We bouwen met bestaande modellen. Het gaat om de toepassing, niet om de techniek eronder." },
      { vraag: "Moet ik kunnen programmeren?", antwoord: "Handig, niet verplicht. Veel bouwen we in tools waar je stappen aan elkaar klikt." },
      { vraag: "Wat voor dingen bouwen jullie nu al?", antwoord: "Onder andere hulpmiddelen voor websiteanalyses en voor de maandrapportages van klanten." },
      { vraag: "Kan ik hier afstuderen?", antwoord: "Ja. Er liggen genoeg vraagstukken die groot genoeg zijn voor een afstudeeropdracht." },
    ],
  },
  {
    slug: "seo-specialist",
    pad: "/vacatures/seo-specialist",
    titel: "SEO Specialist",
    type: "Freelance of parttime",
    badge: "Freelance of parttime",
    kort: "Jij weet hoe SEO werkt en wilt het toepassen op een vaste groep klanten, zonder de rompslomp van eigen acquisitie.",
    kop: "Jij weet al hoe SEO werkt.",
    accent: "Wij hebben de klanten.",
    lead: "We zoeken iemand die zelfstandig de vindbaarheid van onze klanten oppakt: strategie bepalen, uitvoeren en in gewone taal uitleggen wat het opleverde.",
    uren: "In overleg, van een paar uur per week tot vaste dagen.",
    vergoeding: "Uurtarief in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "SEO Specialist, freelance of parttime | Werken bij MegaOnline",
    metaOmschrijving: "Freelance of parttime SEO-specialist bij MegaOnline. Vaste klanten, geen acquisitie, uren in overleg.",
    doet: [
      { icon: "target", kop: "Strategie per klant", tekst: "Bepalen waar de winst zit voor dit bedrijf, deze markt en deze regio." },
      { icon: "search-check", kop: "Onderzoek en analyse", tekst: "Zoekgedrag, concurrentie en de huidige stand van de site in kaart brengen." },
      { icon: "edit-3", kop: "Content sturen", tekst: "Bepalen welke pagina's er moeten komen en waar ze over gaan." },
      { icon: "git-merge", kop: "Technische SEO", tekst: "Structuur, snelheid en indexering op orde brengen samen met de bouwers." },
      { icon: "bar-chart-3", kop: "Rapporteren in klanttaal", tekst: "Elke maand uitleggen wat er gebeurde en wat het aan aanvragen deed." },
      { icon: "graduation-cap", kop: "Stagiairs meenemen", tekst: "Je werkt samen met onze SEO-stagiair en helpt hem verder." },
    ],
    meebrengt: [
      "Aantoonbare ervaring met SEO voor meerdere klanten of sites.",
      "Je kunt uitleggen zonder jargon.",
      "Je werkt zelfstandig en stuurt zelf bij.",
      "Je stuurt op aanvragen, niet op bezoekersaantallen.",
      "Je bent bereikbaar op vaste momenten, ook al bepaal je zelf je uren.",
    ],
    krijgt: [
      "Klanten liggen klaar. Je hoeft niet te verkopen.",
      "Korte lijnen. Je overlegt direct met Joshua.",
      "Je bepaalt zelf hoeveel uur je doet en wanneer.",
      "Geen lange contracten aan beide kanten.",
      "Ruimte om de aanpak in te richten zoals jij hem goed vindt.",
    ],
    faq: [
      { vraag: "Is dit freelance of loondienst?", antwoord: "Freelance of parttime in dienst: allebei bespreekbaar." },
      { vraag: "Hoeveel uur kost dit per week?", antwoord: "Dat groeit mee met het aantal klanten. We beginnen klein en breiden uit als het bevalt." },
      { vraag: "Moet ik ook advertenties doen?", antwoord: "Nee. SEA is een aparte rol. Overlap mag, verplicht is het niet." },
      { vraag: "Wie schrijft de teksten?", antwoord: "Dat verdelen we. Jij bepaalt de richting, schrijven kan samen met stagiairs." },
    ],
  },
  {
    slug: "sea-stage",
    pad: "/vacatures/sea-stage",
    titel: "SEA Stage",
    type: "Stage",
    badge: "Stage · SEA",
    kort: "Advertenties opzetten, budget bewaken en uitzoeken wat een aanvraag kost. Met echt geld en echte klanten.",
    kop: "Advertenties die",
    accent: "aanvragen opleveren.",
    lead: "Je leert campagnes opzetten en bijsturen voor bedrijven die leven van aanvragen en boekingen. Elke euro die je uitgeeft is van een echte klant, dus je leert snel om kritisch te kijken.",
    uren: "In overleg. Meeloopstage, afstudeerstage of parttime naast je studie.",
    vergoeding: "Stagevergoeding in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Stage SEA | Werken bij MegaOnline",
    metaOmschrijving: "SEA-stage bij MegaOnline in Gouda. Campagnes opzetten, budget bewaken en sturen op de kosten per aanvraag.",
    doet: [
      { icon: "search", kop: "Campagnes opzetten", tekst: "Zoekwoorden kiezen, groepen indelen en advertenties schrijven." },
      { icon: "euro", kop: "Budget bewaken", tekst: "Kijken waar het geld heen gaat en of dat terugverdiend wordt." },
      { icon: "filter-x", kop: "Verkeer wegfilteren", tekst: "Zoekopdrachten uitsluiten die nooit een klant worden. Hier zit vaak de snelste winst." },
      { icon: "mouse-pointer-click", kop: "Advertentieteksten testen", tekst: "Twee varianten naast elkaar leggen en de winnaar aanhouden." },
      { icon: "route", kop: "Advertentie en pagina laten kloppen", tekst: "Zorgen dat de landingspagina belooft wat de advertentie zei." },
      { icon: "pie-chart", kop: "Meten wat een aanvraag kost", tekst: "Van klik naar aanvraag rekenen in plaats van naar bezoekers kijken." },
    ],
    meebrengt: [
      "Je bent goed met getallen.",
      "Je schrijft kort en scherp. Een advertentie heeft weinig woorden.",
      "Ervaring met adverteren is niet nodig.",
      "Je durft te zeggen dat iets niet werkt.",
      "Je bent netjes met andermans geld.",
    ],
    krijgt: [
      "Je werkt met echte budgetten, geen simulatie.",
      "Je ziet direct terug wat een aanpassing doet.",
      "Begeleiding bij elke wijziging voordat die live gaat.",
      "Inzicht in de hele route van advertentie tot aanvraag.",
      "Kennis die je overal kunt gebruiken.",
    ],
    faq: [
      { vraag: "Krijg ik zelf toegang tot de advertentieaccounts?", antwoord: "Ja, met begeleiding. Wijzigingen worden nagekeken voordat ze live gaan." },
      { vraag: "Moet ik certificaten hebben?", antwoord: "Nee. Die kun je hier halen als je wilt." },
      { vraag: "Doe ik ook SEO?", antwoord: "Je leert het verband kennen. De uitvoering ligt bij de SEO-rol." },
      { vraag: "Hoe lang duurt de stage?", antwoord: "Een half jaar is gebruikelijk, korter of langer kan in overleg." },
    ],
  },
  {
    slug: "web-consultant",
    pad: "/vacatures/web-consultant",
    titel: "Web Consultant",
    type: "Parttime, freelance of stage",
    badge: "Parttime, freelance of stage",
    kort: "Gesprekken voeren met klanten, hun doelgroep uitwerken en dat vertalen naar wat er op de site moet staan.",
    kop: "Praat met de klant.",
    accent: "Vertaal het naar zijn website.",
    lead: "Je voert de gesprekken met klanten en met bedrijven die klant willen worden: wat doen ze, wie koopt bij ze en waar loopt het vast. Daarna bepaal je welke diensten daarbij horen en hoe dat op de website terugkomt.",
    uren: "In overleg, van een paar uur per week tot vaste dagen.",
    vergoeding: "Uurtarief in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Web Consultant, parttime, freelance of stage | Werken bij MegaOnline",
    metaOmschrijving: "Web consultant bij MegaOnline. Klantgesprekken voeren, doelgroep en diensten uitwerken en dat vertalen naar de website.",
    doet: [
      { icon: "phone-call", kop: "Kennismakingsgesprekken", tekst: "Het eerste gesprek voeren en boven tafel krijgen wat een bedrijf echt nodig heeft." },
      { icon: "users", kop: "Doelgroep uitwerken", tekst: "Beschrijven wie de klant van de klant is en waar die op let." },
      { icon: "compass", kop: "Strategie bepalen", tekst: "Kiezen welke diensten voorop staan en welke boodschap daarbij hoort." },
      { icon: "layout", kop: "Vertalen naar de site", tekst: "Bepalen welke pagina's er komen, in welke volgorde en met welke woorden." },
      { icon: "handshake", kop: "Voorstellen presenteren", tekst: "Het plan uitleggen aan de klant en de vragen erover opvangen." },
      { icon: "refresh-cw", kop: "Terugkoppelen na livegang", tekst: "Na een paar maanden kijken of het klopte wat we bedacht hadden." },
    ],
    meebrengt: [
      "Je praat makkelijk met ondernemers en luistert beter dan je praat.",
      "Je kunt een gesprek omzetten in een helder plan op papier.",
      "Je begrijpt hoe een bedrijf aan klanten komt.",
      "Technische kennis is handig, geen eis.",
      "Je bent eerlijk als iets niet gaat werken.",
    ],
    krijgt: [
      "Je zit vanaf het eerste gesprek aan tafel.",
      "Je ziet je plan echt gebouwd worden.",
      "Veel verschillende branches, van klimhal tot installateur.",
      "Uren en vorm in overleg: parttime, freelance of stage.",
      "Directe samenwerking met de mensen die bouwen.",
    ],
    faq: [
      { vraag: "Is dit een verkooprol?", antwoord: "Deels. Het gesprek gaat over wat iemand nodig heeft. Als dat wij niet zijn, zeggen we dat." },
      { vraag: "Kan ik dit als stage doen?", antwoord: "Ja. Dan schuif je eerst mee aan en voer je later zelf gesprekken." },
      { vraag: "Moet ik verstand van techniek hebben?", antwoord: "Niet vooraf. Je moet wel willen begrijpen hoe een site werkt." },
      { vraag: "Werk ik met vaste klanten?", antwoord: "Zowel met nieuwe bedrijven als met klanten die we al langer begeleiden." },
    ],
  },
  {
    slug: "web-app-architect",
    pad: "/vacatures/web-app-architect",
    titel: "Web- en app-architect",
    type: "Parttime, freelance of stage",
    badge: "Parttime, freelance of stage",
    kort: "Nadenken over hoe een website of webapp technisch in elkaar zit, voordat er iets gebouwd wordt.",
    kop: "Bedenk hoe het",
    accent: "technisch in elkaar zit.",
    lead: "Voor er gebouwd wordt moet duidelijk zijn hoe iets werkt: welke gegevens waar staan, wat aan wat gekoppeld wordt en wat er gebeurt als het druk wordt. Dat uitdenken is jouw werk.",
    uren: "In overleg, van een paar uur per week tot vaste dagen.",
    vergoeding: "Uurtarief in overleg.",
    locatie: "Gouda. In overleg deels op afstand.",
    metaTitel: "Web- en app-architect, parttime, freelance of stage | Werken bij MegaOnline",
    metaOmschrijving: "Web- en app-architect bij MegaOnline. Je bedenkt de technische inrichting van websites en webapps voordat de bouw begint.",
    doet: [
      { icon: "layers", kop: "De opzet bepalen", tekst: "Kiezen uit welke onderdelen iets bestaat en hoe die zich tot elkaar verhouden." },
      { icon: "database", kop: "Het datamodel", tekst: "Vastleggen welke gegevens we bijhouden en hoe ze samenhangen." },
      { icon: "plug", kop: "Koppelingen kiezen", tekst: "Bepalen welk systeem de baas is over welke gegevens en wie wat mag ophalen." },
      { icon: "shield", kop: "Veiligheid en rechten", tekst: "Uitwerken wie wat mag zien en wat er met persoonsgegevens gebeurt." },
      { icon: "gauge", kop: "Snelheid en groei", tekst: "Zorgen dat het ook werkt als er tien keer zoveel gebruikers komen." },
      { icon: "files", kop: "Vastleggen wat je bedacht", tekst: "Zo opschrijven dat een ander het kan bouwen zonder jou te bellen." },
    ],
    meebrengt: [
      "Je denkt in structuren en ziet snel waar iets gaat wringen.",
      "Je kunt een ingewikkelde opzet simpel uitleggen.",
      "Ervaring met bouwen helpt. Je hoeft niet dagelijks te programmeren.",
      "Je stelt de vraag achter de vraag voordat je een keuze maakt.",
      "Je kiest liever iets saais dat werkt dan iets nieuws dat spannend is.",
    ],
    krijgt: [
      "Je bepaalt hoe onze projecten technisch worden opgezet.",
      "Afwisseling: van een eenvoudige site tot een boekingssysteem.",
      "Je keuzes worden ook echt uitgevoerd.",
      "Uren en vorm in overleg: parttime, freelance of stage.",
      "Overleg met iemand die zelf bouwt, dus geen discussie over haalbaarheid.",
    ],
    faq: [
      { vraag: "Moet ik zelf bouwen?", antwoord: "Niet per se. Meedenken en vastleggen is het belangrijkste, meebouwen mag." },
      { vraag: "Kan ik dit als stage doen?", antwoord: "Ja. Dan werk je mee aan de opzet en denk je mee over de keuzes." },
      { vraag: "Met welke techniek werken jullie?", antwoord: "Wisselend, van gewone websites tot webapps met een eigen database. We kiezen per project." },
      { vraag: "Hoeveel projecten lopen er tegelijk?", antwoord: "Genoeg om afwisseling te hebben, weinig genoeg om overzicht te houden." },
    ],
  },
] as const

export type Vacature = (typeof VACATURES)[number]

/** Het adres waar sollicitaties binnenkomen. */
export const SOLLICITATIE_MAIL = 'joshua@joshuabink.nl'
export const SOLLICITATIE_WHATSAPP = 'https://wa.me/31634388938'

/** Mailto-link met onderwerp, zodat een reactie meteen te herkennen is. */
export function sollicitatieMail(titel: string): string {
  return `mailto:${SOLLICITATIE_MAIL}?subject=${encodeURIComponent('Sollicitatie ' + titel)}`
}

/**
 * Zoekt een vacature op slug. Gooit bij een typefout meteen een fout in
 * plaats van een lege pagina te renderen.
 */
export function vacature(slug: Vacature['slug']): Vacature {
  const gevonden = VACATURES.find((v) => v.slug === slug)
  if (!gevonden) throw new Error(`Onbekende vacature: ${slug}`)
  return gevonden
}
