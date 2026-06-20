import { NextResponse } from 'next/server';
import { getGoogleAnalyticsStats } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getGoogleAnalyticsStats();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Google Analytics stats error:', error);
    return NextResponse.json({ error: 'Failed to load Google Analytics stats' }, { status: 500 });
  }
}
