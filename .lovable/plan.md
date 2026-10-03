# Concepten en NS-concept

## Wat ik bouw
- Een nieuw overzicht op `/concepten` met de aangeleverde intro en een uitbreidbare lijst van conceptkaarten.
- De eerste kaart toont de NS-hero, de titel `NS · abonnementen als hoofddoel` en het label `Concept · eigen initiatief`.
- Een nieuwe detailpagina op `/concepten/ns` met alle aangeleverde tekst letterlijk overgenomen.
- De vier screenshots komen op de gevraagde plekken: hero bovenaan, sporen bij keuze 1, abonnementen bij keuze 2 en 3 en mobiel bij keuze 4.
- De slotzin wordt de enige call to action en linkt naar `/gratis-websiteconcept`.

## Vormgeving
- De pagina’s gebruiken de bestaande MegaOnline-huisstijl, sectiethema’s, typografie, breadcrumbs en reveal-animaties.
- Screenshots krijgen een rustig browserkader met afgeronde hoeken en zachte schaduw; NS-kleuren verschijnen alleen in de screenshots.
- De detailpagina blijft prettig leesbaar op desktop en mobiel, met tekst en beeld logisch naast of onder elkaar.

## Navigatie en vindbaarheid
- `Concepten` komt als duidelijk afgescheiden laatste item in het dropdown-menu onder `Cases` en als eigen rij in het mobiele menu.
- De footer krijgt alleen een link als daar een passende plek bij het bestaande werkmenu is.
- Beide pagina’s krijgen unieke Nederlandse titels, meta descriptions, canonicals en sociale metadata.
- `/concepten` en `/concepten/ns` worden toegevoegd aan `sitemap.xml` en aan de bestaande breadcrumb-structuur.

## Technische details
- De uploads worden omgezet naar `public/images/ns-concept-hero.webp`, `ns-concept-sporen.webp`, `ns-concept-abonnementen.webp` en `ns-concept-mobiel.webp`.
- Conceptgegevens voor het overzicht komen in een kleine lijststructuur zodat Defensie later eenvoudig kan worden toegevoegd.
- Nieuwe pagina-opmaak komt in een eigen, op `data-page` begrensd stylesheet zodat bestaande pagina’s niet wijzigen.
- Ik controleer daarna de preview op desktop en mobiel, alle links, metadata, sitemap en foutmeldingen.

## Afbakening
- De concepten komen niet tussen klantcases te staan en worden nergens als klantopdracht gepresenteerd.
- Ik wijzig geen bestaande klantcopy en publiceer de wijzigingen niet.
