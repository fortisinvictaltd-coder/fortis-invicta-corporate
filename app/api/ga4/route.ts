import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function loadCredentials() {
  const envPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const candidates = [envPath ? path.resolve(process.cwd(), envPath) : null, path.join(process.cwd(), 'ga4-credentials.json')].filter(Boolean) as string[];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return JSON.parse(fs.readFileSync(candidate, 'utf8'));
    }
  }

  return null;
}

export async function GET() {
  try {
    const propertyId = process.env.GA4_PROPERTY_ID;

    if (!propertyId) {
      return NextResponse.json({ error: 'GA4_PROPERTY_ID not set' }, { status: 400 });
    }

    const credentials = loadCredentials();

    if (!credentials) {
      return NextResponse.json(
        { success: false, error: 'GA4 credentials file not found. Add ga4-credentials.json or GOOGLE_APPLICATION_CREDENTIALS.' },
        { status: 400 }
      );
    }

    if (typeof credentials.private_key === 'string') {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }

    const client = new BetaAnalyticsDataClient({ credentials });

    const [realtimeResponse] = await client.runRealtimeReport({
      property: `properties/${propertyId}`,
      metrics: [{ name: 'activeUsers' }, { name: 'conversions' }, { name: 'eventCount' }],
      minuteRanges: [{ startMinutesAgo: 30, endMinutesAgo: 0 }],
    });

    const [pagesResponse] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pageTitle' }, { name: 'pagePath' }],
      metrics: [{ name: 'screenPageViews' }],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    });

    const [sourcesResponse] = await client.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }],
    });

    return NextResponse.json({
      success: true,
      realtime: {
        activeUsers: parseInt(realtimeResponse.rows?.[0]?.metricValues?.[0]?.value || '0', 10),
        conversions: parseInt(realtimeResponse.rows?.[0]?.metricValues?.[1]?.value || '0', 10),
        events: parseInt(realtimeResponse.rows?.[0]?.metricValues?.[2]?.value || '0', 10),
      },
      topPages:
        pagesResponse.rows?.map((row) => ({
          title: row.dimensionValues?.[0]?.value || 'Unknown',
          path: row.dimensionValues?.[1]?.value || '/',
          views: parseInt(row.metricValues?.[0]?.value || '0', 10),
        })) || [],
      trafficSources:
        sourcesResponse.rows?.map((row) => ({
          source: row.dimensionValues?.[0]?.value || 'Direct',
          sessions: parseInt(row.metricValues?.[0]?.value || '0', 10),
        })) || [],
    });
  } catch (error) {
    console.error('GA4 Error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
