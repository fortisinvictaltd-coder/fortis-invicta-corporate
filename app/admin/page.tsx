'use client';

import { useEffect, useState } from 'react';
import SuperAdminDashboard from '@/components/super-admin/SuperAdminDashboard';

const adminEmail = process.env.NEXT_PUBLIC_SUPER_ADMIN_EMAIL ?? 'admin@fortisinvicta.com';
const adminPassword = process.env.NEXT_PUBLIC_SUPER_ADMIN_PASSWORD ?? 'Admin@2026';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setIsLoggedIn(window.sessionStorage.getItem('fortis-super-admin-auth') === 'true');
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === adminEmail && password === adminPassword) {
      setIsLoggedIn(true);
      window.sessionStorage.setItem('fortis-super-admin-auth', 'true');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem('fortis-super-admin-auth');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_35%),linear-gradient(180deg,#07111f_0%,#0f172a_100%)] px-4 py-12">
        <div className="mx-auto flex min-h-[80vh] max-w-md items-center justify-center">
          <div className="w-full rounded-[2rem] border border-white/10 bg-white/95 p-8 shadow-2xl backdrop-blur">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">Super Admin Access</p>
              <h1 className="mt-3 text-3xl font-black text-slate-900">FORTIS INVICTA LTD</h1>
              <p className="mt-2 text-sm text-slate-500">Secure command dashboard</p>
            </div>
            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500"
                  required
                />
              </div>
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01]">
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-xs text-slate-500">
              Set NEXT_PUBLIC_SUPER_ADMIN_EMAIL and NEXT_PUBLIC_SUPER_ADMIN_PASSWORD in .env.local.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed right-4 top-4 z-50">
        <button onClick={handleLogout} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800">
          Logout
        </button>
      </div>
      <SuperAdminDashboard />
    </div>
  );
}
