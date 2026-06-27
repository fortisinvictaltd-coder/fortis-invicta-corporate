import { createAdminSupabaseClient } from '@/lib/supabase/client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabaseAdmin = createAdminSupabaseClient();

    if (!supabaseAdmin) {
      return NextResponse.json({
        success: true,
        active: 0,
        today: 0,
        uniqueToday: 0,
        timestamp: new Date().toISOString(),
      });
    }

    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    const today = new Date().toISOString().split('T')[0];

    const [{ count: activeCount }, { count: todayCount }, { data: todayVisitors }] = await Promise.all([
      supabaseAdmin.from('visitors').select('session_id', { count: 'exact', head: true }).gt('visited_at', fiveMinutesAgo),
      supabaseAdmin.from('visitors').select('session_id', { count: 'exact', head: true }).gte('visited_at', today),
      supabaseAdmin.from('visitors').select('session_id').gte('visited_at', today),
    ]);

    const uniqueCount = new Set(todayVisitors?.map((visitor) => visitor.session_id) || []).size;

    return NextResponse.json({
      success: true,
      active: activeCount || 0,
      today: todayCount || 0,
      uniqueToday: uniqueCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
