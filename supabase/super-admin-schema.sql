create extension if not exists pgcrypto;

create table if not exists public.visitors (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  page_url text not null,
  referrer text,
  device_type text,
  browser text,
  country text,
  city text,
  visited_at timestamptz not null default now()
);

create index if not exists visitors_session_id_idx on public.visitors (session_id);
create index if not exists visitors_visited_at_idx on public.visitors (visited_at desc);
create index if not exists visitors_page_url_idx on public.visitors (page_url);

alter table public.visitors enable row level security;

drop policy if exists "Visitors readable for realtime dashboard" on public.visitors;
create policy "Visitors readable for realtime dashboard"
  on public.visitors
  for select
  using (true);

drop policy if exists "Visitors insertable by service role" on public.visitors;
create policy "Visitors insertable by service role"
  on public.visitors
  for insert
  with check (true);

create table if not exists public.social_metrics (
  id uuid primary key default gen_random_uuid(),
  platform text not null,
  metric_type text not null,
  value numeric not null default 0,
  recorded_at timestamptz not null default now()
);

create index if not exists social_metrics_recorded_at_idx on public.social_metrics (recorded_at desc);
create index if not exists social_metrics_platform_idx on public.social_metrics (platform);

alter table public.social_metrics enable row level security;

drop policy if exists "Social metrics readable for dashboard" on public.social_metrics;
create policy "Social metrics readable for dashboard"
  on public.social_metrics
  for select
  using (true);

drop policy if exists "Social metrics insertable by service role" on public.social_metrics;
create policy "Social metrics insertable by service role"
  on public.social_metrics
  for insert
  with check (true);

create table if not exists public.fortisos_analytics (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  event_type text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists fortisos_analytics_created_at_idx on public.fortisos_analytics (created_at desc);
create index if not exists fortisos_analytics_user_id_idx on public.fortisos_analytics (user_id);
create index if not exists fortisos_analytics_event_type_idx on public.fortisos_analytics (event_type);

alter table public.fortisos_analytics enable row level security;

drop policy if exists "FortisOS analytics readable for dashboard" on public.fortisos_analytics;
create policy "FortisOS analytics readable for dashboard"
  on public.fortisos_analytics
  for select
  using (true);

drop policy if exists "FortisOS analytics insertable by service role" on public.fortisos_analytics;
create policy "FortisOS analytics insertable by service role"
  on public.fortisos_analytics
  for insert
  with check (true);

create table if not exists public.engagement_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  source text not null,
  platform text,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists engagement_events_created_at_idx on public.engagement_events (created_at desc);
create index if not exists engagement_events_source_idx on public.engagement_events (source);
create index if not exists engagement_events_platform_idx on public.engagement_events (platform);

alter table public.engagement_events enable row level security;

drop policy if exists "Engagement events readable for public feed" on public.engagement_events;
create policy "Engagement events readable for public feed"
  on public.engagement_events
  for select
  using (true);

drop policy if exists "Engagement events insertable by service role" on public.engagement_events;
create policy "Engagement events insertable by service role"
  on public.engagement_events
  for insert
  with check (true);

create or replace view public.super_admin_public_feed as
select
  id,
  event_type,
  source,
  platform,
  details,
  created_at
from public.engagement_events;
