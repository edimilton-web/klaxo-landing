import { Resend } from 'resend'

const MAILERLITE_GROUP_NAME = 'Klaxo Business Waitlist'

const welcomeEmailHtml = (email) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Klaxo Business waitlist 🎉</title>
</head>
<body style="margin:0;padding:0;background:#0A0A0F;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#F0F0F5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0F;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#111118;border:1px solid rgba(255,255,255,0.07);border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,rgba(124,92,252,0.2),rgba(124,92,252,0.05));padding:36px 40px 28px;border-bottom:1px solid rgba(255,255,255,0.06);">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:36px;height:36px;background:linear-gradient(135deg,#A78BFA 0%,#7C3AED 50%,#3B0764 100%);border-radius:8px;text-align:center;vertical-align:middle;">
                    <span style="font-size:22px;font-weight:900;color:#fff;line-height:36px;">K</span>
                  </td>
                  <td style="padding-left:10px;font-size:18px;font-weight:700;color:#F0F0F5;vertical-align:middle;">
                    Klaxo Business
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="font-size:32px;margin:0 0 24px;">🎉</p>
              <h1 style="margin:0 0 16px;font-size:24px;font-weight:700;color:#F0F0F5;letter-spacing:-0.03em;line-height:1.2;">
                Thanks for joining the waitlist.
              </h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:rgba(240,240,245,0.7);">
                Klaxo Business is a simple way to track all your company's software subscriptions in one place — in euros, with renewal alerts and monthly reports for your accountant.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.75;color:rgba(240,240,245,0.7);">
                We're launching soon. You'll be the first to know.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#7C3AED;border-radius:10px;">
                    <a href="https://business.klaxo.app" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#fff;text-decoration:none;letter-spacing:0.01em;">
                      Visit business.klaxo.app →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:13px;color:rgba(240,240,245,0.35);line-height:1.6;">
                The Klaxo Team —
                <a href="https://klaxo.app" style="color:#A78BFA;text-decoration:none;">klaxo.app</a>
              </p>
              <p style="margin:8px 0 0;font-size:12px;color:rgba(240,240,245,0.25);">
                You're receiving this because you signed up at business.klaxo.app.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

export async function POST(request) {
  const { email } = await request.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  const mailerKey = process.env.MAILERLITE_API_KEY
  if (!mailerKey) {
    return Response.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const mlHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${mailerKey}`,
  }

  // Resolve group ID by name
  const groupsRes = await fetch('https://connect.mailerlite.com/api/groups?limit=100', {
    headers: mlHeaders,
  })
  if (!groupsRes.ok) {
    console.error('MailerLite groups error:', await groupsRes.text())
    return Response.json({ error: 'Failed to fetch groups' }, { status: 500 })
  }
  const groupsData = await groupsRes.json()
  const group = groupsData.data?.find((g) => g.name === MAILERLITE_GROUP_NAME)
  if (!group) {
    console.error(`MailerLite group "${MAILERLITE_GROUP_NAME}" not found`)
    return Response.json({ error: 'Group not found' }, { status: 500 })
  }

  // Add subscriber to group
  const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: mlHeaders,
    body: JSON.stringify({ email, groups: [group.id] }),
  })

  if (!mlRes.ok) {
    const err = await mlRes.text()
    console.error('MailerLite subscriber error:', err)
    return Response.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  // Send welcome email via Resend
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Klaxo Business <hello@klaxo.app>',
      to: email,
      subject: "You're on the Klaxo Business waitlist 🎉",
      html: welcomeEmailHtml(email),
    }).catch((err) => console.error('Resend error:', err))
  }

  return Response.json({ success: true })
}
