/**
 * Lokale stand-in voor de Google Apps Script webapp, alleen voor tests.
 * Legt elke inzending vast in `scripts/.mock-leads.json` zodat de smoketest
 * kan controleren welke velden er daadwerkelijk aankomen — zonder dat er een
 * testlead in de echte Sheet van de klant belandt.
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const PORT = Number(process.env.MOCK_PORT ?? 3101)
const FILE = path.join(import.meta.dirname, '.mock-leads.json')

fs.writeFileSync(FILE, '[]')

http
  .createServer((req, res) => {
    let body = ''
    req.on('data', (c) => (body += c))
    req.on('end', () => {
      if (req.method === 'POST') {
        const fields = Object.fromEntries(new URLSearchParams(body))
        let all = []
        try { all = JSON.parse(fs.readFileSync(FILE, 'utf8')) } catch { all = [] }
        all.push(fields)
        fs.writeFileSync(FILE, JSON.stringify(all, null, 2))
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('OK')
    })
  })
  .listen(PORT, () => console.log(`mock lead-endpoint op http://localhost:${PORT}`))
