'use client';

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import type { BreakdownPoint, TimeSeriesPoint } from '@/lib/super-admin-types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

type ChartsPanelProps = {
  visitorsTrend: TimeSeriesPoint[];
  pageBreakdown: BreakdownPoint[];
  deviceBreakdown: BreakdownPoint[];
  browserBreakdown: BreakdownPoint[];
  geoBreakdown: BreakdownPoint[];
  trafficSources: BreakdownPoint[];
};

function toChartData(points: BreakdownPoint[] | TimeSeriesPoint[], label: string, color: string) {
  return {
    labels: points.map((point) => point.label),
    datasets: [
      {
        label,
        data: points.map((point) => point.value),
        borderColor: color,
        backgroundColor: color,
        tension: 0.35,
      },
    ],
  };
}

export default function ChartsPanel({ visitorsTrend, pageBreakdown, deviceBreakdown, browserBreakdown, geoBreakdown, trafficSources }: ChartsPanelProps) {
  const visitorChart = toChartData(visitorsTrend, 'Visitors', '#10b981');
  const pageChart = toChartData(pageBreakdown, 'Page Views', '#f59e0b');
  const deviceChart = {
    labels: deviceBreakdown.map((point) => point.label),
    datasets: [
      {
        data: deviceBreakdown.map((point) => point.value),
        backgroundColor: ['#10b981', '#0f172a', '#38bdf8', '#f97316'],
      },
    ],
  };
  const browserChart = {
    labels: browserBreakdown.map((point) => point.label),
    datasets: [
      {
        data: browserBreakdown.map((point) => point.value),
        backgroundColor: ['#134e4a', '#115e59', '#0f766e', '#14b8a6', '#2dd4bf'],
      },
    ],
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/95 p-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Visitor trend</h3>
            <p className="text-sm text-slate-500">Last 7 days across the website</p>
          </div>
        </div>
        <div className="h-72">
          <Line
            data={visitorChart}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(15,23,42,0.08)' } },
                x: { grid: { display: false } },
              },
            }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/95 p-5 shadow-xl">
        <h3 className="text-lg font-bold text-slate-900">Page breakdown</h3>
        <p className="text-sm text-slate-500">Most visited routes and landing pages</p>
        <div className="mt-4 h-72">
          <Bar
            data={pageChart}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(15,23,42,0.08)' } },
                x: { grid: { display: false } },
              },
            }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/95 p-5 shadow-xl">
        <h3 className="text-lg font-bold text-slate-900">Device mix</h3>
        <p className="text-sm text-slate-500">Desktop, mobile, and tablet traffic</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="h-64">
            <Doughnut data={deviceChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
          </div>
          <div className="h-64">
            <Doughnut data={browserChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/95 p-5 shadow-xl">
        <h3 className="text-lg font-bold text-slate-900">Geographic reach</h3>
        <p className="text-sm text-slate-500">Top cities and countries visiting FORTIS INVICTA</p>
        <div className="mt-4 space-y-3">
          {geoBreakdown.slice(0, 6).map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex items-center justify-between text-sm text-slate-700">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500" style={{ width: `${Math.min(item.value * 4, 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-56">
          <Doughnut
            data={{
              labels: trafficSources.map((item) => item.label),
              datasets: [{ data: trafficSources.map((item) => item.value), backgroundColor: ['#10b981', '#f59e0b', '#0f172a', '#38bdf8', '#ef4444'] }],
            }}
            options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }}
          />
        </div>
      </div>
    </div>
  );
}
