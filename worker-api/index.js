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

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Klaxo Waitlist <onboarding@resend.dev>',
        to: ['eddie.varjao.reis@gmail.com'],
        subject: `New waitlist signup: ${email}`,
        html: `
          <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#0A0A0F;color:#F0F0F5;border-radius:12px">
            <h2 style="color:#7C5CFC;margin-bottom:16px">New Klaxo waitlist signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country || 'Not specified'}</p>
          </div>
        `,
      }),
    })

    return new Response(JSON.stringify({ ok: res.ok }), {
      status: res.ok ? 200 : res.status,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    })
  },
}
