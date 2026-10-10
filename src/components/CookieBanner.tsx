import { useEffect } from "react";
import { initAnalytics, optOut } from "@/lib/analytics";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "@/styles/cookieconsent.css";

/**
 * Later een tool toevoegen: zet een script-tag in de pagina met
 * type="text/plain" en data-category="statistieken" of data-category="marketing".
 * vanilla-cookieconsent voert dat script pas uit nadat die categorie is
 * geaccepteerd. Zonder toestemming (of na weigeren) blijft het geblokkeerd
 * en gaat er geen verzoek naar de dienst.
 *
 * Voorbeeld: een script-tag met type="text/plain" en
 * data-category="statistieken" of data-category="marketing".
 */
const LEADINFO_SNIPPET = `(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[];l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n;l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);}}(window,document,'script','https://cdn.leadinfo.net/ping.js','leadinfo','LI-6AAEB0E23B183'));`;

type ConsentWindow = Window & { _ccRun?: boolean };

export function CookieBanner() {
  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const cc = await import("vanilla-cookieconsent");
      if (cancelled || (window as ConsentWindow)._ccRun) return;

      const syncAnalytics = () => {
        if (cc.acceptedCategory("statistieken")) initAnalytics();
        else optOut();
      };

      await cc.run({
        // #cc-main moet in dit element, anders erven de dark-tokens niet:
        // het pakket hangt de banner anders direct onder body.
        root: "#cookie-consent-root",
        mode: "opt-in",
        // Verhoog dit getal als categorieën of teksten wijzigen. De banner
        // vraagt dan opnieuw, ook als er al een keuze is opgeslagen.
        revision: 1,
        manageScriptTags: true,
        autoClearCookies: true,
        onConsent: syncAnalytics,
        onChange: syncAnalytics,
        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom center",
            equalWeightButtons: true,
          },
          preferencesModal: {
            layout: "box",
            equalWeightButtons: true,
          },
        },
        cookie: {
          name: "cc_cookie",
          expiresAfterDays: 365,
          // Een secure cookie wordt op http (lokale preview) niet bewaard.
          // Op de live site is het protocol https en blijft de vlag aan.
          secure: window.location.protocol === "https:",
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          statistieken: {
            enabled: false,
          },
          marketing: {
            enabled: false,
          },
        },
        language: {
          default: "nl",
          translations: {
            nl: {
              consentModal: {
                title: "Cookies",
                description:
                  'We gebruiken noodzakelijke cookies om de site te laten werken. Met jouw toestemming gebruiken we ook cookies voor statistieken en marketing. Je keuze kun je altijd wijzigen via Cookie-instellingen onderaan de site. <a href="/privacyverklaring">Privacyverklaring</a>',
                acceptAllBtn: "Alles accepteren",
                acceptNecessaryBtn: "Alleen essentiële cookies",
                showPreferencesBtn: "Instellingen",
              },
              preferencesModal: {
                title: "Cookie-instellingen",
                acceptAllBtn: "Alles accepteren",
                acceptNecessaryBtn: "Alleen essentiële cookies",
                savePreferencesBtn: "Keuze opslaan",
                closeIconLabel: "Sluiten",
                sections: [
                  {
                    title: "Noodzakelijk",
                    description:
                      "Onthoudt je cookiekeuze. Deze cookie is nodig en staat altijd aan.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Statistieken",
                    description:
                      "Meten hoe bezoekers de website gebruiken: welke pagina's ze bekijken, waar ze klikken en hoe ver ze door een formulier komen. Wat je in formulieren typt wordt niet vastgelegd. De gegevens staan op servers in de EU.",
                    linkedCategory: "statistieken",
                  },
                  {
                    title: "Marketing",
                    description:
                      "Herkent aan de hand van het IP-adres welke bedrijven onze website bezoeken en welke pagina's zij bekijken, zodat we zakelijke bezoekers beter kunnen helpen.",
                    linkedCategory: "marketing",
                  },
                ],
              },
            },
          },
        },
      });
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div id="cookie-consent-root" data-theme="dark">
      <script
        type="text/plain"
        data-category="marketing"
        dangerouslySetInnerHTML={{ __html: LEADINFO_SNIPPET }}
      />
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      data-cc="show-preferencesModal"
      aria-haspopup="dialog"
      onClick={() => {
        if (!(window as ConsentWindow)._ccRun) return;
        void import("vanilla-cookieconsent").then((cc) => {
          cc.showPreferences();
        });
      }}
    >
      Cookie-instellingen
    </button>
  );
}
