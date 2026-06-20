import { NextResponse } from 'next/server';
import { getPublicActivityFeed } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getPublicActivityFeed();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Activity feed error:', error);
    return NextResponse.json({ error: 'Failed to load activity feed' }, { status: 500 });
  }
}
