'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
      <nav className="bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">FI</span>
              </div>
              <span className="text-white font-bold text-xl">FORTIS INVICTA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-white/90 hover:text-white transition">Home</Link>
              <Link href="/solutions" className="text-white/90 hover:text-white transition">Solutions</Link>
              <Link href="/fortios" className="text-white/90 hover:text-white transition font-semibold border-b-2 border-amber-400">FortiOS</Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52">
              <div className="absolute inset-0 translate-x-3 translate-y-4 rounded-[2rem] bg-black/25 blur-2xl"></div>
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 shadow-[0_28px_70px_rgba(0,0,0,0.35)]"></div>
              <div className="absolute inset-2 rounded-[1.6rem] border border-white/35 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5),_rgba(255,255,255,0.08)_35%,_transparent_70%)]"></div>
              <div className="absolute -right-3 top-6 h-28 w-28 rounded-full border border-white/20 bg-white/5"></div>
              <div className="absolute left-5 right-5 bottom-3 h-6 rounded-full bg-black/25 blur-md"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] text-white">
                <span className="text-5xl sm:text-6xl font-black tracking-[0.2em] drop-shadow-lg">FI</span>
                <span className="mt-2 text-[0.6rem] sm:text-[0.7rem] font-semibold tracking-[0.45em] text-white/90 text-center px-4">
                  FORTIS INVICTA
                </span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            FORTIS INVICTA LTD
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4">
            Corporate website for The Gambia's
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-amber-300 mb-8">
            regenerative infrastructure company
          </p>

          <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
            Building The Gambia's circular economy through renewable energy, 
            waste-to-wealth innovation, and national intelligence platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fortios"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              🧠 Explore FortiOS
            </Link>
            <Link
              href="/solutions"
              className="px-8 py-3 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold rounded-lg transition border border-white/30"
            >
              ♻️ View Solutions
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-white/60 text-sm">Active Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-white/60 text-sm">Operational Hubs</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-white/60 text-sm">Green Jobs Created</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">25k+</p>
              <p className="text-white/60 text-sm">Beneficiaries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
