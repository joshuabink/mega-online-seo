# Dry-check van de leadroute

De uptime-monitor kan controleren of de leadroute geconfigureerd is. De controle gebruikt dezelfde veldopschoning en dezelfde mailroute-check als een echte inzending, en verstuurt geen aanvraag, mail, melding, analytics-event of lead-log.

## Variabele

Naam: `LEAD_DRYCHECK_TOKEN`

Zet de variabele in de hostingomgeving van de site. Op Lovable of Cloudflare is dat dezelfde naam als binding. De waarde hoort alleen daar. Zet haar niet in de repository, een commit of een pull request.

Ontbreekt de variabele, of is zij leeg, dan antwoordt het pad met 404.

## Aanroep

`GET /health/lead/` gevolgd door de waarde van `LEAD_DRYCHECK_TOKEN`.

Het padsegment wordt in constante tijd met de variabele vergeleken. Wijkt het af, is de methode geen GET, of ontbreekt de variabele, dan is het antwoord 404. Er is geen 401, zodat het bestaan van de controle niet uit de status blijkt.

Klopt het segment, dan gaan vaste voorbeeldvelden door de veldopschoning. Er moet een e-mailadres overblijven, en er moet een mailroute zijn: een gevulde `MO_RESEND_API_KEY`, of anders een FormSubmit-adres. Dat adres is `MO_LEAD_MAIL_ENDPOINT` als die gezet is, en anders de standaardbestemming. Een lege of witruimte-waarde telt niet als route.

Geslaagd: `200` met `{"ok":true}`.

Configuratie ontbreekt: `500` met `{"ok":false,"error":"geen-mailroute"}`.

Beide antwoorden, en ook de 404, sturen `Cache-Control: no-store` en `X-Robots-Tag: noindex`.

Dit pad is geen pagina-route. Het staat niet in de sitemap, `robots.txt`, `llms.txt` of de navigatie.
