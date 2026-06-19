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
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-4xl">FI</span>
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
