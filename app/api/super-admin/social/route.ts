import { NextResponse } from 'next/server';
import { getSocialStats } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getSocialStats();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Social stats error:', error);
    return NextResponse.json({ error: 'Failed to load social stats' }, { status: 500 });
  }
}
