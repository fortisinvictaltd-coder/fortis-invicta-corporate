import { NextResponse } from 'next/server';
import { getDashboardOverview } from '@/lib/super-admin-data';

export async function GET() {
  try {
    const data = await getDashboardOverview();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('Super admin overview error:', error);
    return NextResponse.json({ error: 'Failed to load dashboard overview' }, { status: 500 });
  }
}
