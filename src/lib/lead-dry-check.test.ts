import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { describe, test } from 'node:test'
import { fileURLToPath } from 'node:url'
import { dryCheckVelden, leadDryCheck } from './lead-dry-check.ts'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const SLEUTELS = ['LEAD_DRYCHECK_TOKEN', 'MO_RESEND_API_KEY', 'MO_LEAD_MAIL_ENDPOINT'] as const

function procesEnv(): Record<string, string | undefined> {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
  if (!env) throw new Error('geen procesomgeving')
  return env
}

async function metLeadEnv(
  waarden: Partial<Record<(typeof SLEUTELS)[number], string | undefined>>,
  fn: () => Promise<void>,
) {
  const env = procesEnv()
  const vorige = new Map<string, string | undefined>()
  for (const sleutel of SLEUTELS) {
    vorige.set(sleutel, env[sleutel])
    delete env[sleutel]
  }
  for (const [sleutel, waarde] of Object.entries(waarden)) {
    if (waarde === undefined) delete env[sleutel]
    else env[sleutel] = waarde
  }
  try {
    await fn()
  } finally {
    for (const sleutel of SLEUTELS) {
      const oud = vorige.get(sleutel)
      if (oud === undefined) delete env[sleutel]
      else env[sleutel] = oud
    }
  }
}

function vraag(segment: string, method = 'GET'): Request {
  return new Request(`https://megaonline.io/health/lead/${segment}`, { method })
}

async function aanroep(request: Request, platformEnv?: unknown) {
  const fetches: string[] = []
  const logs: string[] = []
  const origineleFetch = globalThis.fetch
  const origineleInfo = console.info
  const origineleError = console.error
  globalThis.fetch = (async (input: RequestInfo | URL) => {
    fetches.push(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url)
    return new Response('niet versturen', { status: 500 })
  }) as typeof fetch
  console.info = ((...args: unknown[]) => {
    logs.push(args.map((item) => String(item)).join(' '))
  }) as typeof console.info
  console.error = ((...args: unknown[]) => {
    logs.push(args.map((item) => String(item)).join(' '))
  }) as typeof console.error
  try {
    const response = await leadDryCheck(request, platformEnv)
    return { response, fetches, logs }
  } finally {
    globalThis.fetch = origineleFetch
    console.info = origineleInfo
    console.error = origineleError
  }
}

function geenVerzending(fetches: string[], logs: string[]) {
  assert.deepEqual(fetches, [])
  assert.equal(
    logs.some((regel) => /\[lead-log\]|\[lead |\[lead-failed\]/.test(regel)),
    false,
    logs.join(' | '),
  )
}

describe('lead dry-check', { concurrency: false }, () => {
  test('voorbeeldvelden hebben een adres en geen honeypot', () => {
    const velden = dryCheckVelden()
    assert.equal(velden.get('email'), 'leadmonitor@example.com')
    assert.equal(velden.get('website_hp'), null)
    assert.equal(velden.get('company_hp'), null)
  })

  test('zonder variabele is het pad 404 en wordt er niets verstuurd', async () => {
    await metLeadEnv({}, async () => {
      const { response, fetches, logs } = await aanroep(vraag('onjuist'))
      assert.ok(response)
      assert.equal(response.status, 404)
      assert.equal(response.headers.get('cache-control'), 'no-store')
      assert.equal(response.headers.get('x-robots-tag'), 'noindex')
      assert.equal((await response.text()).includes('"ok"'), false)
      geenVerzending(fetches, logs)
    })
  })

  test('verkeerd segment is 404 en wordt er niets verstuurd', async () => {
    const token = `fx${Math.random().toString(36).slice(2)}`
    await metLeadEnv({ LEAD_DRYCHECK_TOKEN: token, MO_LEAD_MAIL_ENDPOINT: 'http://127.0.0.1:9/mail' }, async () => {
      const { response, fetches, logs } = await aanroep(vraag('onjuist'))
      assert.ok(response)
      assert.equal(response.status, 404)
      assert.equal((await response.text()).includes('"ok"'), false)
      geenVerzending(fetches, logs)
    })
  })

  test('juist segment geeft ok en roept de verzending niet aan', async () => {
    const token = `fx${Math.random().toString(36).slice(2)}`
    await metLeadEnv({ LEAD_DRYCHECK_TOKEN: token }, async () => {
      const { response, fetches, logs } = await aanroep(vraag(encodeURIComponent(token)))
      assert.ok(response)
      assert.equal(response.status, 200)
      assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8')
      assert.equal(response.headers.get('cache-control'), 'no-store')
      assert.equal(response.headers.get('x-robots-tag'), 'noindex')
      assert.deepEqual(await response.json(), { ok: true })
      geenVerzending(fetches, logs)
    })
  })

  test('een Resend-sleutel stuurt alsnog niets', async () => {
    const token = `fx${Math.random().toString(36).slice(2)}`
    await metLeadEnv(
      { LEAD_DRYCHECK_TOKEN: token, MO_RESEND_API_KEY: 'sleutel-voor-de-test', MO_LEAD_MAIL_ENDPOINT: '' },
      async () => {
        const { response, fetches, logs } = await aanroep(vraag(encodeURIComponent(token)))
        assert.ok(response)
        assert.equal(response.status, 200)
        assert.deepEqual(await response.json(), { ok: true })
        geenVerzending(fetches, logs)
      },
    )
  })

  test('lege mailroute geeft een korte fout en stuurt niets', async () => {
    const token = `fx${Math.random().toString(36).slice(2)}`
    await metLeadEnv({ LEAD_DRYCHECK_TOKEN: token, MO_RESEND_API_KEY: '   ', MO_LEAD_MAIL_ENDPOINT: '  ' }, async () => {
      const { response, fetches, logs } = await aanroep(vraag(encodeURIComponent(token)))
      assert.ok(response)
      assert.equal(response.status, 500)
      assert.deepEqual(await response.json(), { ok: false, error: 'geen-mailroute' })
      geenVerzending(fetches, logs)
    })
  })

  test('platformbinding telt, een ander pad niet, en POST blijft 404', async () => {
    const token = `fx${Math.random().toString(36).slice(2)}`
    await metLeadEnv({}, async () => {
      const goed = await aanroep(vraag(encodeURIComponent(token)), { LEAD_DRYCHECK_TOKEN: token })
      assert.ok(goed.response)
      assert.equal(goed.response.status, 200)
      geenVerzending(goed.fetches, goed.logs)

      const post = await aanroep(vraag(encodeURIComponent(token), 'POST'), { LEAD_DRYCHECK_TOKEN: token })
      assert.ok(post.response)
      assert.equal(post.response.status, 404)
      geenVerzending(post.fetches, post.logs)

      const anders = await aanroep(new Request('https://megaonline.io/contact'), { LEAD_DRYCHECK_TOKEN: token })
      assert.equal(anders.response, null)
      geenVerzending(anders.fetches, anders.logs)
    })
  })

  test('het pad staat niet in sitemap, robots, llms of navigatie', () => {
    const sitemap = fs.readFileSync(path.join(ROOT, 'public/sitemap.xml'), 'utf8')
    const robots = fs.readFileSync(path.join(ROOT, 'public/robots.txt'), 'utf8')
    const header = fs.readFileSync(path.join(ROOT, 'src/components/SiteHeader.tsx'), 'utf8')
    assert.equal(sitemap.includes('/health/lead'), false)
    assert.equal(robots.includes('/health/lead'), false)
    assert.equal(header.includes('/health/lead'), false)
    assert.equal(fs.existsSync(path.join(ROOT, 'public/llms.txt')), false)
    assert.equal(fs.existsSync(path.join(ROOT, 'llms.txt')), false)
  })
})
