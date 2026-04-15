const DEFAULT_PRIMARY_WEBHOOK_URL =
  'https://automate.indiaaccelerator.live/webhook/8b8577e9-d0ce-4108-b1bd-85ecb7f20dfc';

/** Forwards primary startup application JSON to automate (server-side, no CORS). */
export async function POST(request) {
  const primaryUrl =
    process.env.STARTUP_WEBHOOK_PRIMARY_URL || DEFAULT_PRIMARY_WEBHOOK_URL;

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const upstream = await fetch(primaryUrl, {
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
