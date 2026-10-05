/**
 * Lokale stand-in voor de mailroute, alleen voor tests.
 * Legt elke inzending vast in `scripts/.mock-leads.json` zodat de smoketest
 * kan controleren welke velden aankomen, zonder een echte mail te versturen.
 *
 * Een adres met "faalt" erin, of client-lukt@example.com, krijgt het
 * FormSubmit-weigergedrag: HTTP 200 met de fout in de body. Alle andere
 * adressen krijgen een geslaagde mail.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const PORT = Number(process.env.MOCK_PORT ?? 3101)
const FILE = path.join(import.meta.dirname, '.mock-leads.json')
const FAIL_EXACT = new Set(['client-lukt@example.com'])

fs.writeFileSync(FILE, '[]')

http
  .createServer((req, res) => {
    let body = ''
    req.on('data', (c) => (body += c))
    req.on('end', () => {
      if (req.method !== 'POST') {
        res.writeHead(404)
        res.end('niet gevonden')
        return
      }

      const fields = Object.fromEntries(new URLSearchParams(body))
      fields._test_referer = req.headers.referer ?? ''
      fields._test_origin = req.headers.origin ?? ''
      let all = []
      try { all = JSON.parse(fs.readFileSync(FILE, 'utf8')) } catch { all = [] }
      all.push(fields)
      fs.writeFileSync(FILE, JSON.stringify(all, null, 2))

      const email = (fields.email ?? '').trim()
      const fail = email.includes('faalt') || FAIL_EXACT.has(email)
      // Zelfde antwoord als FormSubmit bij een weigering: status 200, fout in de pagina.
      if (fail) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('Unable to submit form')
        return
      }

      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end('submitted successfully')
    })
  })
  .listen(PORT, () => console.log(`mock mail-endpoint op http://localhost:${PORT}`))
