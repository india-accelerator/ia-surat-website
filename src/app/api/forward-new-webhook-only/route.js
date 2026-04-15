const DEFAULT_SECONDARY_WEBHOOK_URL =
  'https://automate.indiaaccelerator.live/webhook/169cb4e0-ff7d-499e-9ffc-256ffe7456b3';

/** Forwards `buildSecondaryWebhookPayload` JSON to the new automate webhook (server-side, no CORS). */
export async function POST(request) {
  const secondaryUrl =
    process.env.STARTUP_WEBHOOK_SECONDARY_URL || DEFAULT_SECONDARY_WEBHOOK_URL;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const upstream = await fetch(secondaryUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await upstream.text();
  return new Response(text, {
    status: upstream.status,
    headers: {
      'Content-Type':
        upstream.headers.get('content-type') || 'application/json',
    },
  });
}
