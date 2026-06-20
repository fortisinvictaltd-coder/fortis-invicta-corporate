import { supabaseAdmin } from '@/lib/supabase/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { error } = await supabaseAdmin.from('visitors').insert([
      {
        session_id: data.session_id,
        page_url: data.page_url,
        referrer: data.referrer,
        device_type: data.device_type,
        browser: data.browser,
        country: data.country,
        city: data.city || null,
        visited_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ error: 'Failed to track visitor' }, { status: 500 });
  }
}
