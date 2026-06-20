import { NextResponse } from 'next/server';
import { getFortisOSStats } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getFortisOSStats();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('FortisOS stats error:', error);
    return NextResponse.json({ error: 'Failed to load FortisOS stats' }, { status: 500 });
  }
}
