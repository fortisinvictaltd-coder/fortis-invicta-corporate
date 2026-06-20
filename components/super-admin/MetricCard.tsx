import { LucideIcon } from 'lucide-react';

type MetricCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  accent?: string;
};

export default function MetricCard({ title, value, subtitle, icon: Icon, accent = 'from-emerald-500 to-green-600' }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.35)] backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{title}</p>
          <div className="mt-3 text-3xl font-black text-white">{value}</div>
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        </div>
        <div className={`rounded-2xl bg-gradient-to-br ${accent} p-3 text-white shadow-lg`}>
          <Icon size={22} />
        </div>
      </div>
    </div>
  );
}
