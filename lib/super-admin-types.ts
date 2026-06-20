export type TimeSeriesPoint = {
  label: string;
  value: number;
};

export type BreakdownPoint = {
  label: string;
  value: number;
};

export type SocialMetricPoint = {
  platform: string;
  metricType: string;
  value: number;
  recordedAt: string;
};

export type GoogleAnalyticsSummary = {
  connected: boolean;
  realtimeUsers: number;
  pageViews: number;
  sessionDuration: string;
  bounceRate: string;
  trafficSources: BreakdownPoint[];
};

export type FortisOSSummary = {
  registrations: number;
  activeUsers: number;
  featureAdoption: number;
  apiUsage: number;
  topFeatures: BreakdownPoint[];
};

export type ActivityFeedItem = {
  id: string;
  title: string;
  description: string;
  source: string;
  platform?: string;
  createdAt: string;
  kind: 'visitor' | 'social' | 'fortisos' | 'system';
};

export type DashboardSummary = {
  activeUsers: number;
  dailyVisitors: number;
  weeklyVisitors: number;
  monthlyVisitors: number;
  pageViews: number;
  socialReach: number;
  fortisosUsers: number;
  apiUsage: number;
  publicFeedItems: number;
  avgSessionDuration: string;
  bounceRate: string;
};

export type SuperAdminDashboardData = {
  generatedAt: string;
  summary: DashboardSummary;
  visitorsTrend: TimeSeriesPoint[];
  pageBreakdown: BreakdownPoint[];
  deviceBreakdown: BreakdownPoint[];
  browserBreakdown: BreakdownPoint[];
  geoBreakdown: BreakdownPoint[];
  socialMetrics: SocialMetricPoint[];
  googleAnalytics: GoogleAnalyticsSummary;
  fortisOS: FortisOSSummary;
  activityFeed: ActivityFeedItem[];
};
