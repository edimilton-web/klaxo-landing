import { EmailMessage } from 'cloudflare:email'

const ALLOWED_ORIGINS = ['https://klaxo.app', 'https://www.klaxo.app']

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || ''
    const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0]

    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    const { email, country } = await request.json()

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      })
    }

    const rawEmail = [
      'MIME-Version: 1.0',
      'From: Klaxo Waitlist <hello@klaxo.app>',
      'To: hello@klaxo.app',
      `Subject: New waitlist signup: ${email}`,
      'Content-Type: text/html; charset=utf-8',
      '',
      `<p><strong>Email:</strong> ${email}</p>`,
      `<p><strong>Country:</strong> ${country || 'Not specified'}</p>`,
    ].join('\r\n')

    const message = new EmailMessage('hello@klaxo.app', 'hello@klaxo.app', rawEmail)
    await env.SEND_EMAIL.send(message)

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  },
}
