'use client';

import { useEffect, useMemo, useState } from 'react';
import { Activity, Bot, Globe2, RefreshCw, ShieldCheck, Users, Zap } from 'lucide-react';
import { createBrowserSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import type { ActivityFeedItem, SuperAdminDashboardData } from '@/lib/super-admin-types';
import MetricCard from './MetricCard';
import ChartsPanel from './ChartsPanel';

const fallbackData: SuperAdminDashboardData = {
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

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

function formatTime(value: string) {
  return value.replace(/\s+/g, ' ');
}

function ActivityRow({ item }: { item: ActivityFeedItem }) {
  const color = {
    visitor: 'from-emerald-500 to-green-600',
    social: 'from-sky-500 to-cyan-600',
    fortisos: 'from-amber-500 to-orange-600',
    system: 'from-slate-500 to-slate-700',
  }[item.kind];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className={`mt-1 h-3 w-3 rounded-full bg-gradient-to-r ${color}`} />
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-semibold text-slate-900">{item.title}</h4>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.kind}</span>
          </div>
          <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          <p className="mt-2 text-xs text-slate-400">{formatTime(new Date(item.createdAt).toLocaleString())}</p>
        </div>
      </div>
    </div>
  );
}

export default function SuperAdminDashboard() {
  const [data, setData] = useState<SuperAdminDashboardData>(fallbackData);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>(fallbackData.generatedAt);
  const [error, setError] = useState<string | null>(null);

  const supabase = useMemo(() => createBrowserSupabaseClient(), []);

  const refresh = async () => {
    try {
      setError(null);
      const response = await fetch('/api/super-admin/overview', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to refresh dashboard data');
      }

      const nextData = (await response.json()) as SuperAdminDashboardData;
      setData(nextData);
      setLastUpdated(nextData.generatedAt);
    } catch (refreshError) {
      console.error(refreshError);
      setError('Using fallback dashboard data. Configure Supabase to enable live metrics.');
      setData(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (!supabase || !isSupabaseConfigured) {
      return;
    }

    const channel = supabase.channel('super-admin-realtime');

    channel
      .on('postgres_changes', { event: '*', schema: 'public', table: 'visitors' }, refresh)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'social_metrics' }, refresh)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'fortisos_analytics' }, refresh)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'engagement_events' }, refresh)
      .subscribe();

    const interval = window.setInterval(refresh, 60_000);

    return () => {
      window.clearInterval(interval);
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-white shadow-2xl">
          <RefreshCw className="animate-spin" size={18} />
          Loading Super Admin Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_35%),linear-gradient(180deg,#07111f_0%,#0f172a_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
              <ShieldCheck size={14} /> Super Admin Live Dashboard
            </div>
            <h1 className="mt-4 text-3xl font-black sm:text-4xl">FORTIS INVICTA LTD Command Center</h1>
            <p className="mt-2 max-w-3xl text-sm text-slate-300">
              Real-time visitor intelligence, social performance, Google Analytics snapshots, FORTISOS adoption, and public activity streaming from Supabase.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Live status</p>
              <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Last updated</p>
              <div className="mt-1 text-sm font-semibold text-white">{new Date(lastUpdated).toLocaleString()}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Realtime mode</p>
              <div className="mt-1 text-sm font-semibold text-white">Supabase subscriptions</div>
            </div>
            <button
              onClick={refresh}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01]"
            >
              <RefreshCw size={16} /> Refresh
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
            {error}
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard title="Active Users" value={formatNumber(data.summary.activeUsers)} subtitle="last 5 minutes" icon={Users} />
          <MetricCard title="Daily Visitors" value={formatNumber(data.summary.dailyVisitors)} subtitle="rolling 24 hours" icon={Globe2} accent="from-sky-500 to-blue-600" />
          <MetricCard title="Social Reach" value={formatNumber(data.summary.socialReach)} subtitle="followers and impressions" icon={Activity} accent="from-fuchsia-500 to-pink-600" />
          <MetricCard title="FORTISOS Users" value={formatNumber(data.summary.fortisosUsers)} subtitle="platform engagement" icon={Bot} accent="from-amber-500 to-orange-600" />
          <MetricCard title="Weekly Visitors" value={formatNumber(data.summary.weeklyVisitors)} subtitle="last 7 days" icon={Zap} accent="from-cyan-500 to-teal-600" />
          <MetricCard title="Monthly Visitors" value={formatNumber(data.summary.monthlyVisitors)} subtitle="last 30 days" icon={Globe2} accent="from-emerald-500 to-lime-600" />
          <MetricCard title="API Usage" value={formatNumber(data.summary.apiUsage)} subtitle="FORTISOS calls & events" icon={ShieldCheck} accent="from-slate-500 to-slate-700" />
          <MetricCard title="Public Feed" value={formatNumber(data.summary.publicFeedItems)} subtitle="visitor + social events" icon={Activity} accent="from-rose-500 to-red-600" />
        </div>

        <div className="mt-8">
          <ChartsPanel
            visitorsTrend={data.visitorsTrend}
            pageBreakdown={data.pageBreakdown}
            deviceBreakdown={data.deviceBreakdown}
            browserBreakdown={data.browserBreakdown}
            geoBreakdown={data.geoBreakdown}
            trafficSources={data.googleAnalytics.trafficSources}
          />
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Google Analytics</h2>
                <p className="text-sm text-slate-500">Real-time users, page views, duration, bounce rate, and sources</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${data.googleAnalytics.connected ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                {data.googleAnalytics.connected ? 'Connected' : 'Fallback mode'}
              </span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Realtime users</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.googleAnalytics.realtimeUsers)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Page views</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.googleAnalytics.pageViews)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Avg. duration</p>
                <div className="mt-2 text-2xl font-bold">{data.googleAnalytics.sessionDuration}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Bounce rate</p>
                <div className="mt-2 text-2xl font-bold">{data.googleAnalytics.bounceRate}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {data.googleAnalytics.trafficSources.map((source) => (
                <div key={source.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{source.label}</span>
                    <span>{source.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500" style={{ width: `${Math.min(source.value * 2, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">FORTISOS Platform</h2>
                <p className="text-sm text-slate-500">Registrations, active users, adoption, and API usage</p>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Live analytics</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Registrations</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.fortisOS.registrations)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Active users</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.fortisOS.activeUsers)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Feature adoption</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.fortisOS.featureAdoption)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">API usage</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.fortisOS.apiUsage)}</div>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {data.fortisOS.topFeatures.map((feature) => (
                <div key={feature.label}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{feature.label}</span>
                    <span>{feature.value}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-slate-800 to-emerald-500" style={{ width: `${Math.min(feature.value * 3, 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl">
            <h2 className="text-xl font-bold">Public Activity Feed</h2>
            <p className="text-sm text-slate-500">Anonymized visitors, social posts, and FORTISOS events</p>
            <div className="mt-5 space-y-3">
              {data.activityFeed.map((item) => (
                <ActivityRow key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-2xl">
            <h2 className="text-xl font-bold">Operational Summary</h2>
            <p className="text-sm text-slate-500">Quick reads for the command team</p>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Page views</p>
                <div className="mt-2 text-2xl font-bold">{formatNumber(data.summary.pageViews)}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Average session duration</p>
                <div className="mt-2 text-2xl font-bold">{data.summary.avgSessionDuration}</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Bounce rate</p>
                <div className="mt-2 text-2xl font-bold">{data.summary.bounceRate}</div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-300">Realtime note</p>
              <p className="mt-2 text-sm text-slate-200">
                {isSupabaseConfigured()
                  ? 'Supabase subscriptions are active. Any insert into the visitors, social_metrics, fortisos_analytics, or engagement_events tables will refresh this dashboard.'
                  : 'Supabase environment variables are missing. The dashboard is showing its fallback dataset until .env.local is configured.'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
