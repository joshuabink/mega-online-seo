import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Icon } from './Icon'

type Panel = 'diensten' | 'cases' | 'over' | 'kennis' | 'contact'

/**
 * Sticky header + megamenu + fullscreen mobiel menu.
 *
 * In de prototypes werd deze chrome door `assets/site-nav.js` als
 * template-string in elke pagina geïnjecteerd (met `{home}`-substitutie voor
 * de homepage-ankers). Dat is hier één layout-component met echte routing —
 * de string-substitutie is daarmee verdwenen.
 *
 * `light` komt uit de route (`staticData.lightNav`) in plaats van uit een
 * DOM-sniff op de eerste sectie, zodat het al bij server-rendering klopt en
 * er geen kleurflits optreedt.
 */
export function SiteHeader({ light = false }: { light?: boolean }) {
  const [panel, setPanel] = useState<Panel | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const headerRef = useRef<HTMLElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const panelRefs = useRef<Partial<Record<Panel, HTMLDivElement | null>>>({})
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const pathname = useRouterState({ select: (s) => s.location.pathname })

  /* --- nav achtergrond bij scrollen + megamenu sluiten --- */
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
      setPanel((p) => (p ? null : p))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* --- --nav-h synchroon houden met de echte headerhoogte --- */
  useEffect(() => {
    function sync() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--nav-h',
          headerRef.current.offsetHeight + 'px',
        )
      }
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  /* --- sheet-hoogte volgt het actieve paneel (morphende dropdown) --- */
  useEffect(() => {
    const sheet = sheetRef.current
    if (!sheet) return
    if (!panel) {
      sheet.style.height = '0px'
      return
    }
    const el = panelRefs.current[panel]
    if (el) sheet.style.height = el.offsetHeight + 'px'
  }, [panel])

  /* --- sluiten bij routewissel --- */
  useEffect(() => {
    setPanel(null)
    setMobileOpen(false)
  }, [pathname])

  /* --- Escape sluit megamenu en mobiel menu --- */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== 'Escape') return
      setPanel(null)
      setMobileOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  /* --- scroll-lock zolang het mobiele menu open staat --- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  const deferClose = useCallback(() => {
    cancelClose()
    closeTimer.current = setTimeout(() => setPanel(null), 140)
  }, [cancelClose])

  const trigger = (name: Panel, label: string) => (
    <button
      className="mnav__item"
      type="button"
      aria-haspopup="true"
      aria-expanded={panel === name}
      onMouseEnter={() => {
        cancelClose()
        setPanel(name)
      }}
      onFocus={() => {
        cancelClose()
        setPanel(name)
      }}
      onClick={() => setPanel((p) => (p === name ? null : name))}
    >
      {label} <Icon name="chevron-down" className="chev" />
    </button>
  )

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`nav ${scrolled ? 'scrolled' : ''} ${light ? 'nav--light' : ''}`.trim()}
        id="nav"
        ref={headerRef}
        onMouseLeave={deferClose}
        onMouseEnter={cancelClose}
      >
        <div className="nav__inner">
          <Link to="/" className="logo" aria-label="MegaOnline.io home">
            MegaOnline<span className="dot">.io</span>
          </Link>
          <nav className="mnav" aria-label="Hoofdmenu">
            {trigger('diensten', 'Diensten')}
            {trigger('cases', 'Cases')}
            {trigger('over', 'Over MegaOnline')}
            {trigger('kennis', 'Kennisbank')}
            {trigger('contact', 'Contact')}
          </nav>
          <div className="nav__cta">
            <Link className="btn btn-primary" to="/gratis-websitescan">
              Gratis websitescan <span className="arr">→</span>
            </Link>
            <button
              className="btn btn-outline nav__menu-btn"
              id="menuBtn"
              type="button"
              aria-label="Menu openen"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <Icon name="menu" />
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* ===================== MEGA MENU ===================== */}
      <div
        className={`mega-scrim ${panel ? 'show' : ''}`.trim()}
        id="megaScrim"
        onClick={() => setPanel(null)}
      />
      <div
        className={`mega ${panel ? 'open' : ''}`.trim()}
        id="mega"
        data-theme="dark"
        aria-label="Hoofdmenu paneel"
        onMouseEnter={cancelClose}
        onMouseLeave={deferClose}
      >
        <div className="mega__sheet" ref={sheetRef}>
          <div className="mega__panels">
            {/* -------- DIENSTEN -------- */}
            <div
              className={`mega__panel ${panel === 'diensten' ? 'is-active' : ''}`.trim()}
              data-panel="diensten"
              data-cols="diensten"
              ref={(el) => {
                panelRefs.current.diensten = el
              }}
            >
              <div className="mcol">
                <span className="mcol__head">Diensten</span>
                <Link className="mlink mlink--star" to="/diensten/conversie-website">
                  <span className="mlink__ico">
                    <Icon name="target" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">
                      Conversie Website <span className="mtag">Kerndienst</span>
                    </span>
                    <span className="mlink__sub">Onze hoofddienst</span>
                  </span>
                </Link>
                <Link className="mlink" to="/diensten/website-redesign">
                  <span className="mlink__ico">
                    <Icon name="paintbrush" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Website Redesign</span>
                    <span className="mlink__sub">Voor een verouderde website</span>
                  </span>
                </Link>
                <Link className="mlink" to="/diensten/website-optimalisatie">
                  <span className="mlink__ico">
                    <Icon name="gauge" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Website Optimalisatie</span>
                    <span className="mlink__sub">
                      Bestaande site beter laten presteren
                    </span>
                  </span>
                </Link>
                <Link className="mlink" to="/diensten/starter-website">
                  <span className="mlink__ico">
                    <Icon name="sprout" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">
                      Starter Website <span className="mtag">Vanaf €1.500</span>
                    </span>
                    <span className="mlink__sub">Voordelige optie voor starters</span>
                  </span>
                </Link>
                <Link className="mlink" to="/diensten/werken-bij-websites">
                  <span className="mlink__ico">
                    <Icon name="users" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Werken-bij Website</span>
                    <span className="mlink__sub">Meer en betere sollicitaties</span>
                  </span>
                </Link>
                <Link className="mlink" to="/diensten/groei-partnership">
                  <span className="mlink__ico">
                    <Icon name="trending-up" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Groei Partnership</span>
                    <span className="mlink__sub">Doorlopend, na livegang</span>
                  </span>
                </Link>
              </div>

              <div className="mcol">
                <span className="mcol__head">Oplossingen</span>
                {[
                  ['/branches/activiteitenbedrijven', 'ticket', 'Activiteitenbedrijven'],
                  ['/branches/verhuurbedrijven', 'package', 'Verhuurbedrijven'],
                  ['/branches/dienstverleners', 'briefcase', 'Dienstverleners'],
                  ['/branches/reserveringen', 'calendar-check', 'Bedrijven met reserveringen'],
                  ['/branches/offerteaanvragen', 'file-text', 'Bedrijven met offerteaanvragen'],
                ].map(([to, icon, label]) => (
                  <Link className="mlink" to={to} key={to}>
                    <span className="mlink__ico">
                      <Icon name={icon} />
                    </span>
                    <span className="mlink__txt">
                      <span className="mlink__name">{label}</span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mstack">
                <div className="mcol">
                  <span className="mcol__head">SEO</span>
                  {[
                    ['search', 'SEO Optimalisatie'],
                    ['map-pin', 'Lokale SEO'],
                    ['layout-template', 'Landingpagina Optimalisatie'],
                  ].map(([icon, label]) => (
                    <Link className="mlink" to="/diensten/seo" key={label}>
                      <span className="mlink__ico">
                        <Icon name={icon} />
                      </span>
                      <span className="mlink__txt">
                        <span className="mlink__name">{label}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mcol">
                  <span className="mcol__head">Integraties</span>
                  {[
                    ['users', 'CRM Koppelingen'],
                    ['calendar-clock', 'Boekingssystemen'],
                    ['message-circle', 'WhatsApp Integraties'],
                  ].map(([icon, label]) => (
                    <Link className="mlink" to="/diensten/integraties" key={label}>
                      <span className="mlink__ico">
                        <Icon name={icon} />
                      </span>
                      <span className="mlink__txt">
                        <span className="mlink__name">{label}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="mfeat">
                <span className="mfeat__eyebrow">
                  <span className="gdot" />
                  Onze kerndienst
                </span>
                <div className="mfeat__media">[ CONVERSIE WEBSITE ]</div>
                <h4 className="mfeat__title">Conversie Website</h4>
                <p className="mfeat__desc">
                  Voor bedrijven die meer aanvragen, reserveringen en boekingen uit hun
                  website willen halen.
                </p>
                <Link className="mfeat__cta" to="/diensten/conversie-website">
                  Bekijk de dienst <span className="arr">→</span>
                </Link>
                <Link className="mfeat__link" to="/gratis-websitescan">
                  Vraag een gratis websitescan aan <span className="arr">→</span>
                </Link>
              </aside>

              <div className="mega__foot">
                <span>
                  Websites zijn onze kern — SEO, content en integraties versterken het
                  resultaat.
                </span>
                <Link to="/gratis-websitescan">
                  Niet zeker welke oplossing past? Vraag een gratis websitescan aan{' '}
                  <span className="arr">→</span>
                </Link>
              </div>
            </div>

            {/* -------- CASES -------- */}
            <div
              className={`mega__panel ${panel === 'cases' ? 'is-active' : ''}`.trim()}
              data-panel="cases"
              data-cols="cases"
              ref={(el) => {
                panelRefs.current.cases = el
              }}
            >
              <div className="mcol">
                <span className="mcol__head">Cases &amp; branches</span>
                <Link className="mlink mlink--star" to="/" hash="werk">
                  <span className="mlink__ico">
                    <Icon name="layout-grid" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Alle Cases</span>
                    <span className="mlink__sub">Bekijk ons werk</span>
                  </span>
                </Link>
                {[
                  ['/branches/activiteitenbedrijven', 'ticket', 'Websites voor Activiteitenbedrijven'],
                  ['/branches/verhuurbedrijven', 'package', 'Websites voor Verhuurbedrijven'],
                  ['/branches/dienstverleners', 'briefcase', 'Websites voor Dienstverleners'],
                  ['/branches/non-profits', 'heart-handshake', 'Websites voor Non-profits'],
                ].map(([to, icon, label]) => (
                  <Link className="mlink" to={to} key={to}>
                    <span className="mlink__ico">
                      <Icon name={icon} />
                    </span>
                    <span className="mlink__txt">
                      <span className="mlink__name">{label}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <aside className="mfeat mfeat--soft">
                <span className="mfeat__eyebrow">
                  <span className="gdot" />
                  Niche-pagina's
                </span>
                <h4 className="mfeat__title">Werk per branche</h4>
                <p className="mfeat__desc">
                  We bouwen dit menu uit met cases en landingspagina's per type bedrijf,
                  zodat klanten precies vinden wat bij hen past.
                </p>
                <Link className="mfeat__link" to="/" hash="werk">
                  Bekijk alle cases <span className="arr">→</span>
                </Link>
                <span className="mfeat__foot">Binnenkort: meer branches</span>
              </aside>
            </div>

            {/* -------- OVER MEGAONLINE -------- */}
            <div
              className={`mega__panel ${panel === 'over' ? 'is-active' : ''}`.trim()}
              data-panel="over"
              data-cols="cases"
              ref={(el) => {
                panelRefs.current.over = el
              }}
            >
              <div className="mcol">
                <span className="mcol__head">Over MegaOnline</span>
                <Link className="mlink" to="/over-megaonline">
                  <span className="mlink__ico">
                    <Icon name="users" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Over Ons</span>
                  </span>
                </Link>
                {[
                  ['werkwijze', 'route', 'Werkwijze'],
                  ['waarom', 'badge-check', 'Waarom MegaOnline'],
                  ['groei', 'handshake', 'Groei Partnership'],
                ].map(([hash, icon, label]) => (
                  <Link className="mlink" to="/over-megaonline" hash={hash} key={hash}>
                    <span className="mlink__ico">
                      <Icon name={icon} />
                    </span>
                    <span className="mlink__txt">
                      <span className="mlink__name">{label}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <aside className="mfeat mfeat--soft">
                <span className="mfeat__eyebrow">
                  <span className="gdot" />
                  De mensen
                </span>
                <h4 className="mfeat__title">Klein team, grote betrokkenheid</h4>
                <p className="mfeat__desc">
                  Geen fabriek die websites uitspuugt. Je werkt direct met de mensen die
                  de strategie bepalen en je site bouwen.
                </p>
                <Link className="mfeat__link" to="/over-megaonline" hash="waarom">
                  Lees waarom MegaOnline <span className="arr">→</span>
                </Link>
              </aside>
            </div>

            {/* -------- KENNISBANK -------- */}
            <div
              className={`mega__panel ${panel === 'kennis' ? 'is-active' : ''}`.trim()}
              data-panel="kennis"
              data-cols="kennis"
              ref={(el) => {
                panelRefs.current.kennis = el
              }}
            >
              <div className="mcol">
                <span className="mcol__head">Veelgestelde vragen</span>
                {[
                  ['prijs', 'euro', 'Wat kost een website?'],
                  ['traject', 'help-circle', 'Hoe lang duurt een project?'],
                  ['resultaat', 'trending-up', 'Hoe krijg je meer aanvragen?'],
                ].map(([hash, icon, label]) => (
                  <Link
                    className="mlink"
                    to="/veelgestelde-vragen"
                    hash={hash}
                    key={hash}
                  >
                    <span className="mlink__ico">
                      <Icon name={icon} />
                    </span>
                    <span className="mlink__txt">
                      <span className="mlink__name">{label}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mcol">
                <span className="mcol__head">Tips &amp; checklists</span>
                {[
                  ['search', 'SEO Tips'],
                  ['mouse-pointer-click', 'Conversie Tips'],
                  ['list-checks', 'Website Checklists'],
                ].map(([icon, label]) => (
                  <span className="mlink mlink--soon" key={label}>
                    <span className="mlink__ico">
                      <Icon name={icon} />
                    </span>
                    <span className="mlink__txt">
                      <span className="mlink__name">
                        {label} <span className="mtag mtag--soon">Binnenkort</span>
                      </span>
                    </span>
                  </span>
                ))}
              </div>
              <aside className="mfeat mfeat--soft">
                <span className="mfeat__eyebrow">
                  <span className="gdot" />
                  Kenniscentrum
                </span>
                <h4 className="mfeat__title">In opbouw</h4>
                <p className="mfeat__desc">
                  We verzamelen onze beste inzichten over websites, conversie en SEO op
                  één plek.
                </p>
                <span className="mfeat__foot">
                  <Link
                    to="/veelgestelde-vragen"
                    style={{ color: 'var(--accent)', fontWeight: 600 }}
                  >
                    Bekijk alle veelgestelde vragen →
                  </Link>
                </span>
              </aside>
            </div>

            {/* -------- CONTACT -------- */}
            <div
              className={`mega__panel ${panel === 'contact' ? 'is-active' : ''}`.trim()}
              data-panel="contact"
              data-cols="cases"
              ref={(el) => {
                panelRefs.current.contact = el
              }}
            >
              <div className="mcol">
                <span className="mcol__head">Contact</span>
                <Link className="mlink mlink--star" to="/gratis-websitescan">
                  <span className="mlink__ico">
                    <Icon name="search-check" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">
                      Gratis Websitescan <span className="mtag">Gratis</span>
                    </span>
                    <span className="mlink__sub">Onze belangrijkste eerste stap</span>
                  </span>
                </Link>
                <Link className="mlink" to="/contact">
                  <span className="mlink__ico">
                    <Icon name="mail" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Contact</span>
                  </span>
                </Link>
                <Link className="mlink" to="/contact">
                  <span className="mlink__ico">
                    <Icon name="calendar" />
                  </span>
                  <span className="mlink__txt">
                    <span className="mlink__name">Plan Kennismaking</span>
                  </span>
                </Link>
              </div>
              <aside className="mfeat">
                <span className="mfeat__eyebrow">
                  <span className="gdot" />
                  Begin hier
                </span>
                <h4 className="mfeat__title">Gratis websitescan</h4>
                <p className="mfeat__desc">
                  Ontdek waar jouw grootste online kansen liggen. Geen verplichtingen,
                  gemiddeld binnen 2 werkdagen een reactie.
                </p>
                <Link className="mfeat__cta" to="/gratis-websitescan">
                  Vraag je scan aan <span className="arr">→</span>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={closeMobile} />
    </>
  )
}

/* ===================== MOBIEL MENU (fullscreen) ===================== */

function MobileAccordion({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  function toggle() {
    const panel = panelRef.current
    if (!panel) return
    if (open) {
      panel.style.height = panel.scrollHeight + 'px'
      requestAnimationFrame(() => {
        panel.style.height = '0px'
      })
      setOpen(false)
    } else {
      setOpen(true)
      panel.style.height = panel.scrollHeight + 'px'
      const onEnd = () => {
        if (panel.style.height !== '0px') panel.style.height = 'auto'
        panel.removeEventListener('transitionend', onEnd)
      }
      panel.addEventListener('transitionend', onEnd)
    }
  }

  return (
    <div className={`macc__group ${open ? 'open' : ''}`.trim()}>
      <button
        className="macc__btn"
        type="button"
        aria-expanded={open}
        onClick={toggle}
      >
        {label} <Icon name="chevron-down" className="chev" />
      </button>
      <div className="macc__panel" ref={panelRef}>
        <div className="macc__inner">{children}</div>
      </div>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`mmenu ${open ? 'open' : ''}`.trim()}
      id="drawer"
      data-theme="dark"
      aria-label="Mobiel menu"
      aria-hidden={!open}
    >
      <div className="mmenu__top">
        <Link to="/" className="logo" onClick={onClose} aria-label="MegaOnline.io home">
          MegaOnline<span className="dot">.io</span>
        </Link>
        <button
          className="mmenu__close"
          type="button"
          onClick={onClose}
          aria-label="Menu sluiten"
        >
          <Icon name="x" />
        </button>
      </div>
      <p className="mmenu__tagline">
        Websites die zorgen voor meer{' '}
        <b>aanvragen, reserveringen en boekingen</b>.
      </p>

      <div className="mmenu__scroll">
        <div className="macc">
          <MobileAccordion label="Diensten">
            <Link
              className="macc__link macc__link--star"
              to="/diensten/conversie-website"
              onClick={onClose}
            >
              <span className="mlink__ico">
                <Icon name="target" />
              </span>
              <span className="mlink__name">Conversie Website</span>
              <span className="macc__tag">Kerndienst</span>
            </Link>
            <Link className="macc__link" to="/diensten/website-redesign" onClick={onClose}>
              <span className="mlink__ico">
                <Icon name="paintbrush" />
              </span>
              Website Redesign
            </Link>
            <Link
              className="macc__link"
              to="/diensten/website-optimalisatie"
              onClick={onClose}
            >
              <span className="mlink__ico">
                <Icon name="gauge" />
              </span>
              Website Optimalisatie
            </Link>
            <Link className="macc__link" to="/diensten/starter-website" onClick={onClose}>
              <span className="mlink__ico">
                <Icon name="sprout" />
              </span>
              Starter Website<span className="macc__tag">Vanaf €1.500</span>
            </Link>
            <Link
              className="macc__link"
              to="/diensten/werken-bij-websites"
              onClick={onClose}
            >
              <span className="mlink__ico">
                <Icon name="users" />
              </span>
              Werken-bij Website
            </Link>
            <Link
              className="macc__link"
              to="/diensten/groei-partnership"
              onClick={onClose}
            >
              <span className="mlink__ico">
                <Icon name="trending-up" />
              </span>
              Groei Partnership
            </Link>
          </MobileAccordion>

          <MobileAccordion label="Oplossingen">
            {[
              ['/branches/activiteitenbedrijven', 'ticket', 'Voor activiteitenbedrijven'],
              ['/branches/verhuurbedrijven', 'package', 'Voor verhuurbedrijven'],
              ['/branches/dienstverleners', 'briefcase', 'Voor dienstverleners'],
              ['/branches/reserveringen', 'calendar-check', 'Voor bedrijven met reserveringen'],
              ['/branches/offerteaanvragen', 'file-text', 'Voor bedrijven met offerteaanvragen'],
            ].map(([to, icon, label]) => (
              <Link className="macc__link" to={to} key={to} onClick={onClose}>
                <span className="mlink__ico">
                  <Icon name={icon} />
                </span>
                {label}
              </Link>
            ))}
          </MobileAccordion>

          <MobileAccordion label="SEO">
            {[
              ['search', 'SEO Optimalisatie'],
              ['map-pin', 'Lokale SEO'],
              ['layout-template', 'Landingpagina Optimalisatie'],
            ].map(([icon, label]) => (
              <Link className="macc__link" to="/diensten/seo" key={label} onClick={onClose}>
                <span className="mlink__ico">
                  <Icon name={icon} />
                </span>
                {label}
              </Link>
            ))}
          </MobileAccordion>

          <MobileAccordion label="Integraties">
            {[
              ['users', 'CRM Koppelingen'],
              ['calendar-clock', 'Boekingssystemen'],
              ['message-circle', 'WhatsApp Integraties'],
            ].map(([icon, label]) => (
              <Link
                className="macc__link"
                to="/diensten/integraties"
                key={label}
                onClick={onClose}
              >
                <span className="mlink__ico">
                  <Icon name={icon} />
                </span>
                {label}
              </Link>
            ))}
          </MobileAccordion>
        </div>

        <nav className="mmenu__rows" aria-label="Overige navigatie">
          <Link className="mmenu__row" to="/" hash="werk" onClick={onClose}>
            Cases <Icon name="arrow-up-right" className="arr-ico" />
          </Link>
          <Link className="mmenu__row" to="/over-megaonline" onClick={onClose}>
            Over MegaOnline <Icon name="arrow-up-right" className="arr-ico" />
          </Link>
          <Link className="mmenu__row" to="/veelgestelde-vragen" onClick={onClose}>
            Kennisbank <Icon name="arrow-up-right" className="arr-ico" />
          </Link>
          <Link className="mmenu__row" to="/contact" onClick={onClose}>
            Contact <Icon name="arrow-up-right" className="arr-ico" />
          </Link>
        </nav>
      </div>

      <div className="mmenu__cta">
        <div className="mmenu__cta-txt">
          <span className="mmenu__cta-title">
            <span className="gdot" />
            Gratis Websitescan
          </span>
          <span className="mmenu__cta-sub">
            Ontdek waar jouw website kansen laat liggen.
          </span>
        </div>
        <Link className="btn btn-primary" to="/gratis-websitescan" onClick={onClose}>
          Vraag een gratis websitescan aan <span className="arr">→</span>
        </Link>
        <Link className="mmenu__cta-secondary" to="/contact" onClick={onClose}>
          Plan een kennismaking
        </Link>
      </div>
    </div>
  )
}
