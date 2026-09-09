import { createFileRoute, Link } from '@tanstack/react-router'
import { Icon } from '@/components/Icon'
import { Reveal } from '@/components/Reveal'
import { VACATURES_GEPLAATST, vindVacature } from '@/lib/vacatures'

export const Route = createFileRoute('/werken-bij/$slug')({
  head: ({ params }) => {
    const v = vindVacature(params.slug)
    const titel = v ? v.metaTitle : 'Vacature niet gevonden | MegaOnline.io'
    const omschrijving = v
      ? v.metaDescription
      : 'Deze vacature bestaat niet meer. Bekijk de openstaande plekken bij MegaOnline.'
    const url = `https://megaonline.io/werken-bij/${params.slug}`

    return {
      meta: [
        { title: titel },
        { name: 'description', content: omschrijving },
        ...(v ? [] : [{ name: 'robots', content: 'noindex' }]),
        { property: 'og:title', content: titel },
        { property: 'og:description', content: omschrijving },
        { property: 'og:url', content: url },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
  component: VacaturePagina,
})

function VacaturePagina() {
  const { slug } = Route.useParams()
  const v = vindVacature(slug)

  if (!v) {
    return (
      <main id="top">
        <section className="section" data-theme="dark" data-screen-label="Niet gevonden">
          <div className="wrap">
            <h1 className="display">Deze vacature staat er niet meer.</h1>
            <p className="lead" style={{ marginTop: '18px' }}>
              Hij is gevuld of vervangen. Bekijk wat er nu openstaat.
            </p>
            <div className="svc-hero__ctas" style={{ marginTop: '28px' }}>
              <Link className="btn btn-primary" to="/werken-bij">
                Naar alle vacatures
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const jobPosting = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: v.titel,
    description: [...v.intro, ...v.taken.map((t) => `${t.titel}: ${t.tekst}`)].join(' '),
    datePosted: VACATURES_GEPLAATST,
    employmentType: v.vorm.toLowerCase().startsWith('stage') ? 'INTERN' : 'PART_TIME',
    directApply: false,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'MegaOnline.io',
      sameAs: 'https://megaonline.io',
      logo: 'https://megaonline.io/og-image.png',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Boelekade 106',
        postalCode: '2806 AM',
        addressLocality: 'Gouda',
        addressCountry: 'NL',
      },
    },
    url: `https://megaonline.io/werken-bij/${v.slug}`,
  }

  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />

      <section
        className="section svc-hero svc-hero--center"
        data-theme="dark"
        data-screen-label={`Hero — ${v.titel}`}
      >
        <div className="wrap">
          <div className="svc-hero__grid">
            <div className="svc-hero__copy">
              <Reveal as="div" className="crumb reveal">
                <Link to="/" hash="top">Home</Link>
                <span className="sep">/</span>
                <Link to="/werken-bij">Werken bij</Link>
                <span className="sep">/</span>
                <b>{v.titel}</b>
              </Reveal>
              <Reveal as="div" className="hero__badge reveal" data-d="1">
                <span className="badge">
                  <span className="gdot" />
                  {v.vorm}
                </span>
              </Reveal>
              <Reveal as="h1" className="display reveal" data-d="1">
                {v.titel}
              </Reveal>
              <Reveal as="p" className="lead svc-hero__sub reveal" data-d="2">
                {v.kort}
              </Reveal>
              <Reveal as="div" className="svc-hero__ctas reveal" data-d="2">
                <a
                  className="btn btn-primary"
                  href={`mailto:info@megaonline.io?subject=Sollicitatie ${v.titel}`}
                >
                  Solliciteer op deze plek
                </a>
                <Link className="tlink" to="/werken-bij">
                  Alle vacatures
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="De plek"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">De plek</span>
            <h2 className="h2">
              Waar het bij ons{' '}
              <em>om draait.</em>
            </h2>
            {v.intro.map((p, i) => (
              <p className="lead" key={i} style={i > 0 ? { marginTop: '16px' } : undefined}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Wat je gaat doen">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je gaat doen</span>
            <h2 className="h2">
              Vier dingen die op je{' '}
              <em>bordje liggen.</em>
            </h2>
          </Reveal>
          <div className="bento">
            {v.taken.map((t, i) => (
              <Reveal as="div" className="bcell reveal" key={t.titel} data-d={String((i % 3) + 1)}>
                <div className="bcell__top">
                  <span className="bcell__no">{`0${i + 1}`}</span>
                  <span className="iconbox iconbox--sm">
                    <Icon name={v.icon} />
                  </span>
                </div>
                <h3>{t.titel}</h3>
                <p>{t.tekst}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--tight"
        data-theme="paper"
        data-screen-label="Wat je meebrengt"
      >
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je meebrengt</span>
            <h2 className="h2">
              Dit verwachten we{' '}
              <em>van jou.</em>
            </h2>
          </Reveal>
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              {v.meebrengt.map((m, i) => (
                <Reveal
                  as="div"
                  className="miniprob reveal"
                  key={m}
                  data-d={i % 2 === 1 ? '1' : undefined}
                >
                  <p>{m}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="light" data-screen-label="Wat je krijgt">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Wat je krijgt</span>
            <h2 className="h2">
              En dit krijg je{' '}
              <em>terug.</em>
            </h2>
          </Reveal>
          <div className="flaw">
            <div className="flaw__mini" style={{ marginTop: 'clamp(28px,3vw,40px)' }}>
              {v.krijgt.map((k, i) => (
                <Reveal
                  as="div"
                  className="miniprob reveal"
                  key={k}
                  data-d={i % 2 === 1 ? '1' : undefined}
                >
                  <p>{k}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-theme="dark" data-screen-label="Solliciteren">
        <div className="wrap">
          <Reveal as="div" className="shead reveal">
            <span className="label">Solliciteren</span>
            <h2 className="h2">
              Klinkt dit als{' '}
              <em>jouw plek?</em>
            </h2>
            <p className="lead">
              Stuur een bericht met wie je bent, wat je zoekt en waarom dit je aanspreekt. Een cv
              mag, een link naar iets dat je hebt gemaakt is beter. Je krijgt hoe dan ook antwoord.
            </p>
          </Reveal>
          <Reveal as="div" className="svc-hero__ctas reveal" data-d="1" style={{ marginTop: '28px' }}>
            <a
              className="btn btn-primary"
              href={`mailto:info@megaonline.io?subject=Sollicitatie ${v.titel}`}
            >
              Mail naar info@megaonline.io
            </a>
            <a
              className="tlink"
              href="https://wa.me/31634388938"
              target="_blank"
              rel="noopener noreferrer"
            >
              Of app naar 06 34388938
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
