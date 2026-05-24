export async function POST(request) {
  const { email } = await request.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  const apiKey = process.env.MAILERLITE_API_KEY
  if (!apiKey) {
    return Response.json({ error: 'Server configuration error' }, { status: 500 })
  }

  // Upsert subscriber
  const subscriberRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ email }),
  })

  if (!subscriberRes.ok) {
    return Response.json({ error: 'Failed to subscribe' }, { status: 500 })
  }

  const subscriberData = await subscriberRes.json()
  const subscriberId = subscriberData.data?.id

  if (!subscriberId) {
    return Response.json({ error: 'Failed to retrieve subscriber' }, { status: 500 })
  }

  // Fetch groups to find "Klaxo Business Waitlist"
  const groupsRes = await fetch('https://connect.mailerlite.com/api/groups?limit=50', {
    headers: { Authorization: `Bearer ${apiKey}` },
  })

  if (!groupsRes.ok) {
    return Response.json({ error: 'Failed to fetch groups' }, { status: 500 })
  }

  const groupsData = await groupsRes.json()
  const group = groupsData.data?.find((g) => g.name === 'Klaxo Business Waitlist')

  if (!group) {
    return Response.json({ error: 'Waitlist group not found' }, { status: 500 })
  }

  // Add subscriber to group
  const assignRes = await fetch(
    `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${group.id}`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
    }
  )

  if (!assignRes.ok) {
    return Response.json({ error: 'Failed to add to group' }, { status: 500 })
  }

  return Response.json({ success: true })
}
