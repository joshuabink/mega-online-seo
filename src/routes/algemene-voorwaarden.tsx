import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/algemene-voorwaarden.css'

export const Route = createFileRoute('/algemene-voorwaarden')({
  head: () => ({
    meta: [
      { title: "Algemene Voorwaarden | MegaOnline.io" },
      { name: 'description', content: "De algemene voorwaarden van MegaOnline.io, van toepassing op alle offertes, overeenkomsten en diensten." },
      { property: 'og:title', content: "Algemene Voorwaarden | MegaOnline.io" },
      { property: 'og:description', content: "De algemene voorwaarden van MegaOnline.io, van toepassing op alle offertes, overeenkomsten en diensten." },
      { property: 'og:url', content: "https://megaonline.io/algemene-voorwaarden" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/algemene-voorwaarden" },
    ],
  }),
  staticData: { lightNav: true },
  component: AlgemeneVoorwaarden,
})

function AlgemeneVoorwaarden() {
  return (
    <main id="top" data-page="algemene-voorwaarden">
      <section className="section legal" data-theme="light" data-screen-label="Algemene Voorwaarden">
        <div className="wrap">
          <div className="legal__head">
            <Reveal as="div" className="crumb reveal">
              <Link to="/" hash="top">Home</Link>
              <span className="sep">/</span>
              <b>Algemene Voorwaarden</b>
            </Reveal>
            {' '}
            <Reveal as="h1" className="reveal" data-d="1" style={{ marginTop: "18px" }}>Algemene Voorwaarden</Reveal>
            {' '}
            <Reveal as="p" className="legal__meta reveal" data-d="1">Laatst bijgewerkt: 24 juni 2026</Reveal>
            {' '}
            <Reveal as="p" className="legal__lead reveal" data-d="2">
              Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en diensten van MegaOnline.io. Hieronder lees je per onderwerp waar je aan toe bent.
            </Reveal>
          </div>
          {' '}
          <div className="legal__grid">
            <Reveal as="nav" className="legal__toc reveal" aria-label="Inhoud">
              <span>Inhoud</span>
              {' '}
              <a href="#s1">1. Definities</a>
              {' '}
              <a href="#s2">2. Toepasselijkheid</a>
              {' '}
              <a href="#s3">3. Offertes en aanbiedingen</a>
              {' '}
              <a href="#s4">4. Totstandkoming en uitvoering van de overeenkomst</a>
              {' '}
              <a href="#s5">5. Prijzen en betaling</a>
              {' '}
              <a href="#s6">6. Oplevering en wijzigingen</a>
              {' '}
              <a href="#s7">7. Intellectueel eigendom</a>
              {' '}
              <a href="#s8">8. Aansprakelijkheid</a>
              {' '}
              <a href="#s9">9. Hosting en onderhoud</a>
              {' '}
              <a href="#s10">10. Toepasselijk recht en geschillen</a>
            </Reveal>
            {' '}
            <Reveal as="div" className="legal__body reveal" data-d="1">
              <section className="legal__sec" id="s1">
                <h2>1. Definities</h2>
                {' '}
                <p>
                  In deze algemene voorwaarden wordt verstaan onder ‘MegaOnline’: MegaOnline.io, de gebruiker van deze voorwaarden. Onder ‘opdrachtgever’ wordt verstaan: de partij die met MegaOnline een overeenkomst aangaat of daartoe een aanvraag doet.
                </p>
                {' '}
                <p>
                  Onder ‘diensten’ wordt verstaan: alle werkzaamheden, in welke vorm dan ook, die MegaOnline voor of ten behoeve van de opdrachtgever verricht, waaronder het ontwerpen, bouwen, onderhouden en optimaliseren van websites.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s2">
                <h2>2. Toepasselijkheid</h2>
                {' '}
                <p>
                  Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en leveringen van MegaOnline, tenzij schriftelijk uitdrukkelijk anders is overeengekomen.
                </p>
                {' '}
                <p>
                  Afwijkingen van deze voorwaarden zijn slechts geldig indien deze schriftelijk zijn overeengekomen. Eventuele inkoop- of andere voorwaarden van de opdrachtgever worden uitdrukkelijk van de hand gewezen.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s3">
                <h2>3. Offertes en aanbiedingen</h2>
                {' '}
                <p>
                  Alle offertes en aanbiedingen van MegaOnline zijn vrijblijvend, tenzij in de offerte een termijn voor aanvaarding is gesteld. Een offerte vervalt indien het product waarop de offerte betrekking heeft in de tussentijd niet meer beschikbaar is.
                </p>
                {' '}
                <p>
                  De in een offerte genoemde prijzen zijn exclusief btw en eventuele andere heffingen van overheidswege, tenzij anders aangegeven.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s4">
                <h2>4. Totstandkoming en uitvoering van de overeenkomst</h2>
                {' '}
                <p>
                  De overeenkomst komt tot stand op het moment dat de opdrachtgever een offerte of aanbieding van MegaOnline aanvaardt, schriftelijk of langs elektronische weg.
                </p>
                {' '}
                <p>
                  MegaOnline voert de overeenkomst naar beste inzicht en vermogen uit. MegaOnline heeft een inspanningsverplichting en geen resultaatsverplichting, tenzij uitdrukkelijk anders is overeengekomen.
                </p>
                {' '}
                <p>
                  De opdrachtgever zorgt ervoor dat alle gegevens, teksten, beeldmateriaal en andere materialen waarvan MegaOnline aangeeft dat deze noodzakelijk zijn, tijdig worden aangeleverd.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s5">
                <h2>5. Prijzen en betaling</h2>
                {' '}
                <p>
                  Betaling dient te geschieden binnen 30 dagen na factuurdatum, op een door MegaOnline aan te geven wijze, tenzij schriftelijk anders overeengekomen.
                </p>
                {' '}
                <p>
                  Bij grotere opdrachten kan MegaOnline een aanbetaling verlangen voordat met de werkzaamheden wordt aangevangen. Werkzaamheden kunnen in termijnen worden gefactureerd.
                </p>
                {' '}
                <p>
                  Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim en is wettelijke rente verschuldigd, alsook eventuele buitengerechtelijke incassokosten.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s6">
                <h2>6. Oplevering en wijzigingen</h2>
                {' '}
                <p>
                  Genoemde opleveringstermijnen zijn indicatief en nimmer te beschouwen als fatale termijnen. Vertraging in de aanlevering van materialen door de opdrachtgever kan de oplevering beïnvloeden.
                </p>
                {' '}
                <p>
                  Aanvullende wensen of wijzigingen die buiten de oorspronkelijke opdracht vallen, worden als meerwerk beschouwd en apart in rekening gebracht, na overleg met de opdrachtgever.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s7">
                <h2>7. Intellectueel eigendom</h2>
                {' '}
                <p>
                  Na volledige betaling van de overeengekomen vergoeding verkrijgt de opdrachtgever het gebruiksrecht op de opgeleverde website en bijbehorende materialen.
                </p>
                {' '}
                <p>
                  MegaOnline behoudt het recht de in het kader van de opdracht ontwikkelde werkwijzen, technieken en herbruikbare bouwblokken voor andere opdrachten te gebruiken, mits geen vertrouwelijke informatie van de opdrachtgever wordt gedeeld.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s8">
                <h2>8. Aansprakelijkheid</h2>
                {' '}
                <p>
                  De aansprakelijkheid van MegaOnline is beperkt tot het bedrag dat in het desbetreffende geval door de aansprakelijkheidsverzekering wordt uitgekeerd, dan wel tot ten hoogste het factuurbedrag van de betreffende opdracht.
                </p>
                {' '}
                <p>
                  MegaOnline is niet aansprakelijk voor indirecte schade, waaronder gevolgschade, gederfde winst of schade door bedrijfsstagnatie.
                </p>
                {' '}
                <p>
                  MegaOnline is niet aansprakelijk voor schade die het gevolg is van onjuiste of onvolledige informatie die door de opdrachtgever is aangeleverd.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s9">
                <h2>9. Hosting en onderhoud</h2>
                {' '}
                <p>
                  Indien hosting en onderhoud onderdeel zijn van de overeenkomst, spant MegaOnline zich in voor een goede beschikbaarheid, maar kan geen ononderbroken beschikbaarheid garanderen.
                </p>
                {' '}
                <p>
                  Onderhoudsabonnementen worden aangegaan voor de overeengekomen periode en kunnen tegen het einde daarvan worden opgezegd met inachtneming van de overeengekomen opzegtermijn.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s10">
                <h2>10. Toepasselijk recht en geschillen</h2>
                {' '}
                <p>
                  Op alle overeenkomsten tussen MegaOnline en de opdrachtgever is uitsluitend Nederlands recht van toepassing.
                </p>
                {' '}
                <p>
                  Geschillen worden bij voorkeur in onderling overleg opgelost. Komen partijen er niet uit, dan worden geschillen voorgelegd aan de bevoegde rechter in het arrondissement waar MegaOnline is gevestigd.
                </p>
              </section>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
