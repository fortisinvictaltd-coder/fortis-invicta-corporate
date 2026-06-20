import { NextResponse } from 'next/server';
import { recordVisitorEvent } from '@/lib/super-admin-data';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const headers = request.headers;

    const result = await recordVisitorEvent({
      sessionId: String(body.sessionId ?? body.session_id ?? crypto.randomUUID()),
      pageUrl: String(body.pageUrl ?? body.page_url ?? '/'),
      referrer: String(body.referrer ?? headers.get('referer') ?? ''),
      deviceType: String(body.deviceType ?? body.device_type ?? 'desktop'),
      browser: String(body.browser ?? headers.get('user-agent') ?? 'Unknown'),
      country: String(body.country ?? headers.get('x-vercel-ip-country') ?? 'Unknown'),
      city: String(body.city ?? headers.get('x-vercel-ip-city') ?? 'Unknown'),
    });

    return NextResponse.json(result, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Visitor tracking error:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
