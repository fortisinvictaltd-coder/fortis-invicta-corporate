import { NextResponse } from 'next/server';
import { getVisitorStats } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getVisitorStats();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Visitor stats error:', error);
    return NextResponse.json({ error: 'Failed to load visitor stats' }, { status: 500 });
  }
}
