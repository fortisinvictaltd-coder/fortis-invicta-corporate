import SocialFeed from '@/components/SocialFeed';
import { createServerSupabase } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function ActivityPage() {
  const supabase = createServerSupabase();

  const { data: recentVisitors } = await supabase
    .from('visitors')
    .select('country, device_type, visited_at, page_url')
    .order('visited_at', { ascending: false })
    .limit(20);

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">FORTIS INVICTA Activity Feed</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Recent Visitor Activity</h2>
          <div className="space-y-2 rounded-lg bg-white p-4 shadow">
            {recentVisitors?.map((visit, index) => (
              <div key={`${visit.visited_at ?? index}-${visit.page_url ?? index}`} className="flex items-center gap-3 border-b pb-2 text-sm last:border-b-0">
                <span className="text-gray-400">{visit.visited_at ? new Date(visit.visited_at).toLocaleString() : 'Unknown time'}</span>
                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">{visit.country || 'Unknown'}</span>
                <span className="text-gray-600">{visit.device_type || 'Unknown device'}</span>
                <span className="text-xs text-gray-400">{visit.page_url || '/'}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Social Feed</h2>
          <SocialFeed />
        </div>
      </div>
    </main>
  );
}
