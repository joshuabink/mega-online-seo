import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Reveal } from '@/components/Reveal'
import '@/styles/pages/privacyverklaring.css'

export const Route = createFileRoute('/privacyverklaring')({
  head: () => ({
    meta: [
      { title: "Privacyverklaring — MegaOnline.io" },
      { name: 'description', content: "De privacyverklaring van MegaOnline.io: welke persoonsgegevens we verwerken, waarom, en welke rechten je hebt." },
      { property: 'og:title', content: "Privacyverklaring — MegaOnline.io" },
      { property: 'og:description', content: "De privacyverklaring van MegaOnline.io: welke persoonsgegevens we verwerken, waarom, en welke rechten je hebt." },
      { property: 'og:url', content: "https://megaonline.io/privacyverklaring" },
    ],
    links: [
      { rel: 'canonical', href: "https://megaonline.io/privacyverklaring" },
    ],
  }),
  staticData: { lightNav: true },
  component: Privacyverklaring,
})

function Privacyverklaring() {
  return (
    <main id="top" data-page="privacyverklaring">
      <section className="section legal" data-theme="light" data-screen-label="Privacyverklaring">
        <div className="wrap">
          <div className="legal__head">
            <Reveal as="div" className="crumb reveal">
              <Link to="/" hash="top">Home</Link>
              <span className="sep">/</span>
              <b>Privacyverklaring</b>
            </Reveal>
            {' '}
            <Reveal as="h1" className="reveal" data-d="1" style={{ marginTop: "18px" }}>Privacyverklaring</Reveal>
            {' '}
            <Reveal as="p" className="legal__meta reveal" data-d="1">Laatst bijgewerkt: 24 juni 2026</Reveal>
            {' '}
            <Reveal as="p" className="legal__lead reveal" data-d="2">
              MegaOnline.io gaat zorgvuldig om met je persoonsgegevens. In deze privacyverklaring lees je welke gegevens we verwerken, met welk doel, en welke rechten je hebt.
            </Reveal>
          </div>
          {' '}
          <div className="legal__grid">
            <Reveal as="nav" className="legal__toc reveal" aria-label="Inhoud">
              <span>Inhoud</span>
              {' '}
              <a href="#s1">1. Inleiding</a>
              {' '}
              <a href="#s2">2. Welke gegevens we verwerken</a>
              {' '}
              <a href="#s3">3. Waarom we gegevens verwerken</a>
              {' '}
              <a href="#s4">4. Grondslagen voor verwerking</a>
              {' '}
              <a href="#s5">5. Delen met derden</a>
              {' '}
              <a href="#s6">6. Cookies</a>
              {' '}
              <a href="#s7">7. Bewaartermijnen</a>
              {' '}
              <a href="#s8">8. Beveiliging</a>
              {' '}
              <a href="#s9">9. Jouw rechten</a>
              {' '}
              <a href="#s10">10. Contact</a>
            </Reveal>
            {' '}
            <Reveal as="div" className="legal__body reveal" data-d="1">
              <section className="legal__sec" id="s1">
                <h2>1. Inleiding</h2>
                {' '}
                <p>
                  MegaOnline.io respecteert de privacy van bezoekers en klanten en gaat zorgvuldig om met persoonsgegevens. In deze privacyverklaring leggen we uit welke gegevens we verzamelen, waarom, en welke rechten je hebt.
                </p>
                {' '}
                <p>
                  Deze verklaring is van toepassing op het gebruik van onze website en de diensten die wij leveren. We verwerken persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s2">
                <h2>2. Welke gegevens we verwerken</h2>
                {' '}
                <p>
                  Wanneer je een formulier invult of contact met ons opneemt, verwerken wij gegevens die je zelf aan ons verstrekt, zoals je naam, bedrijfsnaam, e-mailadres, telefoonnummer en de inhoud van je bericht.
                </p>
                {' '}
                <p>
                  Daarnaast kunnen wij technische gegevens verwerken die automatisch worden gegenereerd bij een bezoek aan onze website, zoals je IP-adres, browsertype en de pagina’s die je bekijkt.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s3">
                <h2>3. Waarom we gegevens verwerken</h2>
                {' '}
                <p>
                  Wij verwerken persoonsgegevens om contact met je op te kunnen nemen naar aanleiding van een aanvraag, om onze diensten te leveren, om facturen op te stellen en om onze website te verbeteren.
                </p>
                {' '}
                <p>
                  We verwerken alleen gegevens die noodzakelijk zijn voor deze doeleinden en bewaren ze niet langer dan nodig.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s4">
                <h2>4. Grondslagen voor verwerking</h2>
                {' '}
                <p>
                  Wij verwerken persoonsgegevens op basis van je toestemming, ter uitvoering van een overeenkomst, om te voldoen aan een wettelijke verplichting, of op grond van een gerechtvaardigd belang, zoals het verbeteren van onze dienstverlening.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s5">
                <h2>5. Delen met derden</h2>
                {' '}
                <p>
                  Wij verstrekken je gegevens niet aan derden voor commerciële doeleinden. We delen gegevens uitsluitend met partijen die ons helpen onze diensten te leveren, zoals een hostingpartij of een betaaldienst, en alleen voor zover dat noodzakelijk is.
                </p>
                {' '}
                <p>
                  Met partijen die in onze opdracht persoonsgegevens verwerken sluiten wij waar nodig een verwerkersovereenkomst om eenzelfde niveau van beveiliging en vertrouwelijkheid te waarborgen.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s6">
                <h2>6. Cookies</h2>
                {' '}
                <p>
                  Onze website kan gebruikmaken van functionele en analytische cookies om de website goed te laten werken en het gebruik ervan te analyseren. Functionele cookies zijn noodzakelijk voor de werking van de site.
                </p>
                {' '}
                <p>
                  Je kunt cookies altijd zelf beheren of verwijderen via de instellingen van je browser.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s7">
                <h2>7. Bewaartermijnen</h2>
                {' '}
                <p>
                  Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor ze zijn verzameld, of zo lang als wettelijk verplicht is. Gegevens met betrekking tot facturatie bewaren wij conform de wettelijke bewaarplicht.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s8">
                <h2>8. Beveiliging</h2>
                {' '}
                <p>
                  Wij nemen passende technische en organisatorische maatregelen om je persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking. Mocht je de indruk hebben dat je gegevens niet goed beveiligd zijn, neem dan contact met ons op.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s9">
                <h2>9. Jouw rechten</h2>
                {' '}
                <p>
                  Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Daarnaast heb je het recht om je toestemming in te trekken of bezwaar te maken tegen de verwerking, en het recht op gegevensoverdraagbaarheid.
                </p>
                {' '}
                <p>
                  Wil je gebruikmaken van deze rechten? Neem dan contact met ons op. Je hebt ook het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens.
                </p>
              </section>
              {' '}
              <section className="legal__sec" id="s10">
                <h2>10. Contact</h2>
                {' '}
                <p>
                  Heb je vragen over deze privacyverklaring of over de manier waarop wij met persoonsgegevens omgaan? Neem dan contact met ons op via de gegevens op onze contactpagina.
                </p>
              </section>
              {' '}
              <div className="legal__note">
                Dit is een algemene versie ter illustratie. Voor een juridisch sluitende tekst die volledig past bij jouw situatie raden we aan deze te laten controleren door een jurist. Vragen? Neem gerust
                {' '}
                <Link to="/contact" style={{ color: "var(--accent-text)" }}>contact</Link>
                {' '}
                met ons op.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
