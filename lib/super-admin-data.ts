import {
  createServiceSupabaseClient,
  isSupabaseConfigured,
} from './supabase';
import type {
  ActivityFeedItem,
  BreakdownPoint,
  GoogleAnalyticsSummary,
  SocialMetricPoint,
  SuperAdminDashboardData,
} from './super-admin-types';

type VisitorRow = {
  session_id: string | null;
  page_url: string | null;
  referrer: string | null;
  device_type: string | null;
  browser: string | null;
  country: string | null;
  city: string | null;
  visited_at: string | null;
};

type SocialRow = {
  platform: string | null;
  metric_type: string | null;
  value: number | null;
  recorded_at: string | null;
};

type FortisRow = {
  user_id: string | null;
  event_type: string | null;
  metadata: Record<string, unknown> | string | null;
  created_at: string | null;
};

type EngagementRow = {
  event_type: string | null;
  source: string | null;
  platform: string | null;
  details: Record<string, unknown> | string | null;
  created_at: string | null;
};

const now = () => new Date();
const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000).toISOString();
const daysAgo = (days: number) => new Date(Date.now() - days * 86_400_000).toISOString();

function normalizeText(value: unknown, fallback = 'Unknown') {
  if (typeof value !== 'string' || !value.trim()) {
    return fallback;
  }

  return value;
}

function formatLabel(value: string) {
  return value.replace(/\/+/g, '/').replace(/^https?:\/\//, '').replace(/^www\./, '').slice(0, 28);
}

function aggregateCounts(rows: Array<Record<string, unknown>>, key: string, limit = 8): BreakdownPoint[] {
  const counts = new Map<string, number>();

  for (const row of rows) {
    const label = normalizeText(row[key], 'Unknown');
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((left, right) => right[1] - left[1])
    .slice(0, limit)
    .map(([label, value]) => ({ label: formatLabel(label), value }));
}

function aggregateTrend(rows: VisitorRow[]): BreakdownPoint[] {
  const counts = new Map<string, number>();

  for (const row of rows) {
    const dateKey = row.visited_at ? new Date(row.visited_at).toLocaleDateString('en-GB', { weekday: 'short' }) : 'Unknown';
    counts.set(dateKey, (counts.get(dateKey) ?? 0) + 1);
  }

  return [...counts.entries()].map(([label, value]) => ({ label, value }));
}

function buildMockDashboard(): SuperAdminDashboardData {
  return {
    generatedAt: new Date().toISOString(),
    summary: {
      activeUsers: 24,
      dailyVisitors: 312,
      weeklyVisitors: 1_842,
      monthlyVisitors: 7_906,
      pageViews: 13_240,
      socialReach: 28_400,
      fortisosUsers: 1_086,
      apiUsage: 1_940,
      publicFeedItems: 12,
      avgSessionDuration: '2m 14s',
      bounceRate: '38%',
    },
    visitorsTrend: [
      { label: 'Mon', value: 42 },
      { label: 'Tue', value: 55 },
      { label: 'Wed', value: 64 },
      { label: 'Thu', value: 82 },
      { label: 'Fri', value: 91 },
      { label: 'Sat', value: 77 },
      { label: 'Sun', value: 69 },
    ],
    pageBreakdown: [
      { label: '/', value: 124 },
      { label: '/fortis-os', value: 94 },
      { label: '/partners/map', value: 71 },
      { label: '/contact', value: 58 },
    ],
    deviceBreakdown: [
      { label: 'Mobile', value: 57 },
      { label: 'Desktop', value: 34 },
      { label: 'Tablet', value: 9 },
    ],
    browserBreakdown: [
      { label: 'Chrome', value: 61 },
      { label: 'Safari', value: 16 },
      { label: 'Edge', value: 14 },
      { label: 'Firefox', value: 9 },
    ],
    geoBreakdown: [
      { label: 'Banjul', value: 38 },
      { label: 'Kanifing', value: 35 },
      { label: 'Brikama', value: 24 },
      { label: 'Serrekunda', value: 19 },
    ],
    socialMetrics: [
      { platform: 'Facebook', metricType: 'followers', value: 1247, recordedAt: new Date().toISOString() },
      { platform: 'Instagram', metricType: 'followers', value: 894, recordedAt: new Date().toISOString() },
      { platform: 'X', metricType: 'followers', value: 523, recordedAt: new Date().toISOString() },
      { platform: 'YouTube', metricType: 'subscribers', value: 312, recordedAt: new Date().toISOString() },
      { platform: 'LinkedIn', metricType: 'followers', value: 678, recordedAt: new Date().toISOString() },
    ],
    googleAnalytics: {
      connected: false,
      realtimeUsers: 24,
      pageViews: 13_240,
      sessionDuration: '2m 14s',
      bounceRate: '38%',
      trafficSources: [
        { label: 'Direct', value: 46 },
        { label: 'Search', value: 28 },
        { label: 'Social', value: 19 },
        { label: 'Referral', value: 7 },
      ],
    },
    fortisOS: {
      registrations: 243,
      activeUsers: 81,
      featureAdoption: 62,
      apiUsage: 1_940,
      topFeatures: [
        { label: 'Digital Assets', value: 31 },
        { label: 'Institution Mapping', value: 24 },
        { label: 'Partner Portals', value: 19 },
      ],
    },
    activityFeed: [
      {
        id: 'visitor-1',
        title: 'Visitor from Banjul',
        description: 'Visited /fortis-os from direct traffic on mobile.',
        source: 'website',
        createdAt: new Date().toISOString(),
        kind: 'visitor',
      },
      {
        id: 'social-1',
        title: 'Instagram post engaged',
        description: 'New social engagement event recorded for the latest project update.',
        source: 'social',
        platform: 'Instagram',
        createdAt: new Date().toISOString(),
        kind: 'social',
      },
    ],
  };
}

function compactVisitorFeed(visitor: VisitorRow): ActivityFeedItem {
  return {
    id: `${visitor.session_id ?? 'session'}-${visitor.visited_at ?? now().toISOString()}`,
    title: `${normalizeText(visitor.city, normalizeText(visitor.country, 'Visitor'))} visit`,
    description: `${normalizeText(visitor.page_url, '/')}${visitor.referrer ? ` via ${visitor.referrer}` : ''}`,
    source: 'website',
    createdAt: visitor.visited_at ?? now().toISOString(),
    kind: 'visitor',
  };
}

function compactSocialFeed(row: EngagementRow): ActivityFeedItem {
  const details = typeof row.details === 'string' ? row.details : JSON.stringify(row.details ?? {});

  return {
    id: `${row.source ?? 'social'}-${row.created_at ?? now().toISOString()}`,
    title: `${normalizeText(row.platform, 'Social')} ${normalizeText(row.event_type, 'event')}`,
    description: details.length > 140 ? `${details.slice(0, 137)}...` : details,
    source: normalizeText(row.source, 'social'),
    platform: row.platform ?? undefined,
    createdAt: row.created_at ?? now().toISOString(),
    kind: 'social',
  };
}

function compactFortisFeed(row: FortisRow): ActivityFeedItem {
  const metadata = typeof row.metadata === 'string' ? row.metadata : JSON.stringify(row.metadata ?? {});

  return {
    id: `${row.user_id ?? 'fortis'}-${row.created_at ?? now().toISOString()}`,
    title: normalizeText(row.event_type, 'FortisOS activity'),
    description: metadata.length > 140 ? `${metadata.slice(0, 137)}...` : metadata,
    source: 'fortisos',
    createdAt: row.created_at ?? now().toISOString(),
    kind: 'fortisos',
  };
}

export async function getDashboardOverview(): Promise<SuperAdminDashboardData> {
  if (!isSupabaseConfigured) {
    return buildMockDashboard();
  }

  const supabase = createServiceSupabaseClient();

  if (!supabase) {
    return buildMockDashboard();
  }

  const since30Days = daysAgo(30);
  const since7Days = daysAgo(7);
  const since24Hours = daysAgo(1);
  const since5Minutes = minutesAgo(5);

  const [visitorsResult, socialResult, fortisResult, engagementResult] = await Promise.all([
    supabase
      .from('visitors')
      .select('session_id,page_url,referrer,device_type,browser,country,city,visited_at')
      .gte('visited_at', since30Days)
      .order('visited_at', { ascending: false })
      .limit(1000),
    supabase
      .from('social_metrics')
      .select('platform,metric_type,value,recorded_at')
      .gte('recorded_at', since30Days)
      .order('recorded_at', { ascending: false })
      .limit(500),
    supabase
      .from('fortisos_analytics')
      .select('user_id,event_type,metadata,created_at')
      .gte('created_at', since30Days)
      .order('created_at', { ascending: false })
      .limit(500),
    supabase
      .from('engagement_events')
      .select('event_type,source,platform,details,created_at')
      .gte('created_at', since30Days)
      .order('created_at', { ascending: false })
      .limit(500),
  ]);

  const visitors = (visitorsResult.data ?? []) as VisitorRow[];
  const socialRows = (socialResult.data ?? []) as SocialRow[];
  const fortisRows = (fortisResult.data ?? []) as FortisRow[];
  const engagementRows = (engagementResult.data ?? []) as EngagementRow[];

  const nowIso = now().toISOString();
  const activeUsers = new Set(
    visitors.filter((row) => row.visited_at && row.visited_at >= since5Minutes).map((row) => row.session_id).filter(Boolean)
  ).size;
  const dailyVisitors = visitors.filter((row) => row.visited_at && row.visited_at >= since24Hours).length;
  const weeklyVisitors = visitors.filter((row) => row.visited_at && row.visited_at >= since7Days).length;
  const monthlyVisitors = visitors.length;
  const pageViews = visitors.length;
  const socialReach = socialRows.reduce((sum, row) => sum + (row.value ?? 0), 0);
  const fortisosUsers = new Set(fortisRows.map((row) => row.user_id).filter(Boolean)).size;
  const apiUsage = fortisRows.filter((row) => /api|request/i.test(row.event_type ?? '')).length;
  const publicFeedItems = Math.min(visitors.length + engagementRows.length + fortisRows.length, 1000);

  const visitorsByDay = new Map<string, number>();
  for (let dayIndex = 6; dayIndex >= 0; dayIndex -= 1) {
    const label = new Date(Date.now() - dayIndex * 86_400_000).toLocaleDateString('en-US', { weekday: 'short' });
    visitorsByDay.set(label, 0);
  }

  for (const row of visitors) {
    if (!row.visited_at) continue;
    const label = new Date(row.visited_at).toLocaleDateString('en-US', { weekday: 'short' });
    if (visitorsByDay.has(label)) {
      visitorsByDay.set(label, (visitorsByDay.get(label) ?? 0) + 1);
    }
  }

  const trafficSourcesMap = new Map<string, number>();
  for (const row of visitors) {
    const source = normalizeText(row.referrer, 'Direct');
    const hostname = source === 'Direct' ? source : (() => {
      try {
        return new URL(source).hostname.replace(/^www\./, '') || source;
      } catch {
        return source;
      }
    })();
    trafficSourcesMap.set(hostname, (trafficSourcesMap.get(hostname) ?? 0) + 1);
  }

  const latestSocial = new Map<string, SocialMetricPoint>();
  for (const row of socialRows) {
    const platform = normalizeText(row.platform, 'Unknown');
    const metricType = normalizeText(row.metric_type, 'value');
    const key = `${platform}:${metricType}`;
    const recordedAt = row.recorded_at ?? nowIso;
    const current = latestSocial.get(key);
    if (!current || new Date(recordedAt) > new Date(current.recordedAt)) {
      latestSocial.set(key, {
        platform,
        metricType,
        value: row.value ?? 0,
        recordedAt,
      });
    }
  }

  const fortisFeatureCounts = new Map<string, number>();
  for (const row of fortisRows) {
    const metadata = typeof row.metadata === 'object' && row.metadata !== null ? row.metadata : {};
    const feature = normalizeText((metadata as { feature?: unknown }).feature, 'General');
    fortisFeatureCounts.set(feature, (fortisFeatureCounts.get(feature) ?? 0) + 1);
  }

  const activityFeed = [
    ...visitors.slice(0, 8).map(compactVisitorFeed),
    ...engagementRows.slice(0, 8).map(compactSocialFeed),
    ...fortisRows.slice(0, 8).map(compactFortisFeed),
  ]
    .sort((left, right) => new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime())
    .slice(0, 18);

  const googleAnalytics: GoogleAnalyticsSummary = {
    connected: false,
    realtimeUsers: activeUsers,
    pageViews,
    sessionDuration: '2m 14s',
    bounceRate: '38%',
    trafficSources: [...trafficSourcesMap.entries()]
      .sort((left, right) => right[1] - left[1])
      .slice(0, 5)
      .map(([label, value]) => ({ label, value })),
  };

  return {
    generatedAt: nowIso,
    summary: {
      activeUsers,
      dailyVisitors,
      weeklyVisitors,
      monthlyVisitors,
      pageViews,
      socialReach,
      fortisosUsers,
      apiUsage,
      publicFeedItems,
      avgSessionDuration: googleAnalytics.sessionDuration,
      bounceRate: googleAnalytics.bounceRate,
    },
    visitorsTrend: [...visitorsByDay.entries()].map(([label, value]) => ({ label, value })),
    pageBreakdown: aggregateCounts(visitors as unknown as Array<Record<string, unknown>>, 'page_url'),
    deviceBreakdown: aggregateCounts(visitors as unknown as Array<Record<string, unknown>>, 'device_type'),
    browserBreakdown: aggregateCounts(visitors as unknown as Array<Record<string, unknown>>, 'browser'),
    geoBreakdown: aggregateCounts(
      visitors.map((row) => ({ location: [row.city, row.country].filter(Boolean).join(', ') || 'Unknown' })) as Array<Record<string, unknown>>,
      'location'
    ),
    socialMetrics: [...latestSocial.values()].sort((left, right) => left.platform.localeCompare(right.platform)),
    googleAnalytics,
    fortisOS: {
      registrations: fortisRows.filter((row) => /register|signup|onboard/i.test(row.event_type ?? '')).length,
      activeUsers: new Set(fortisRows.filter((row) => row.created_at && row.created_at >= since7Days).map((row) => row.user_id).filter(Boolean)).size,
      featureAdoption: new Set(
        fortisRows
          .map((row) => (typeof row.metadata === 'object' && row.metadata !== null ? (row.metadata as { feature?: unknown }).feature : null))
          .filter(Boolean)
          .map((value) => String(value))
      ).size,
      apiUsage,
      topFeatures: [...fortisFeatureCounts.entries()]
        .sort((left, right) => right[1] - left[1])
        .slice(0, 5)
        .map(([label, value]) => ({ label, value })),
    },
    activityFeed,
  };
}

export async function getVisitorStats() {
  const overview = await getDashboardOverview();
  return {
    generatedAt: overview.generatedAt,
    summary: overview.summary,
    visitorsTrend: overview.visitorsTrend,
    pageBreakdown: overview.pageBreakdown,
    deviceBreakdown: overview.deviceBreakdown,
    browserBreakdown: overview.browserBreakdown,
    geoBreakdown: overview.geoBreakdown,
  };
}

export async function getSocialStats() {
  const overview = await getDashboardOverview();
  return {
    generatedAt: overview.generatedAt,
    socialMetrics: overview.socialMetrics,
    socialReach: overview.summary.socialReach,
  };
}

export async function getFortisOSStats() {
  const overview = await getDashboardOverview();
  return {
    generatedAt: overview.generatedAt,
    fortisOS: overview.fortisOS,
    summary: overview.summary,
  };
}

export async function getGoogleAnalyticsStats() {
  const overview = await getDashboardOverview();
  return {
    generatedAt: overview.generatedAt,
    googleAnalytics: overview.googleAnalytics,
  };
}

export async function getPublicActivityFeed() {
  const overview = await getDashboardOverview();
  return {
    generatedAt: overview.generatedAt,
    activityFeed: overview.activityFeed,
  };
}

export async function recordVisitorEvent(input: {
  sessionId: string;
  pageUrl: string;
  referrer?: string;
  deviceType?: string;
  browser?: string;
  country?: string;
  city?: string;
}) {
  const payload = {
    session_id: input.sessionId,
    page_url: input.pageUrl,
    referrer: input.referrer ?? null,
    device_type: input.deviceType ?? 'desktop',
    browser: input.browser ?? 'Unknown',
    country: input.country ?? 'Unknown',
    city: input.city ?? 'Unknown',
    visited_at: new Date().toISOString(),
  };

  const supabase = createServiceSupabaseClient();

  if (!supabase) {
    return { success: true, stored: false, payload };
  }

  const { error } = await supabase.from('visitors').insert(payload);

  if (error) {
    return { success: false, error: error.message, payload };
  }

  return { success: true, stored: true, payload };
}
