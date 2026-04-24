"use client";

import Link from "next/link";

export default function CircularHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-fortis-gold/5 to-white">
      <div className="container-s max-w-5xl mx-auto px-4 py-12">
        <Link href="/" className="text-fortis-gold hover:underline mb-6 inline-block">← Back to Home</Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-fortis-green mb-4">Integrated Circular Economy Hub</h1>
          <p className="text-xl text-gray-600 mb-8">Turning waste into wealth. $200M import substitution. 15,000+ green jobs.</p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">🪲 BSF Protein</h2>
            <p className="text-gray-700 mb-2">Black Soldier Fly larvae protein for poultry feed.</p>
            <p className="text-2xl font-bold text-fortis-green">$960/ton</p>
            <p className="text-sm text-gray-500">(-20% vs import)</p>
            <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20BSF%20Protein" className="mt-4 inline-block bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">🪵 Biochar Briquettes</h2>
            <p className="text-gray-700 mb-2">Clean cooking fuel from agricultural waste.</p>
            <p className="text-2xl font-bold text-fortis-green">$240/ton</p>
            <p className="text-sm text-gray-500">(-20% vs import)</p>
            <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20Biochar%20Briquettes" className="mt-4 inline-block bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">🌱 Organic Frass</h2>
            <p className="text-gray-700 mb-2">Bio-fertilizer from BSF larvae waste.</p>
            <p className="text-2xl font-bold text-fortis-green">$360/ton</p>
            <p className="text-sm text-gray-500">(-20% vs import)</p>
            <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20Organic%20Frass" className="mt-4 inline-block bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</a>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">💨 Carbon Credits</h2>
            <p className="text-gray-700 mb-2">Verified offsets from ISCEB + biochar.</p>
            <p className="text-2xl font-bold text-fortis-green">€20-25/tCO₂e</p>
            <p className="text-sm text-gray-500">Verified emissions units</p>
            <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20Carbon%20Credits" className="mt-4 inline-block bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</a>
          </div>
        </div>
        
        {/* Impact Dashboard */}
        <div className="bg-fortis-green/10 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">📊 Impact Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center"><div className="text-3xl font-bold text-fortis-green">40,000+</div><div className="text-sm text-gray-600">tCO₂e/year</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-fortis-green">15,000+</div><div className="text-sm text-gray-600">Green Jobs</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-fortis-green">$200M</div><div className="text-sm text-gray-600">Import Substitution</div></div>
            <div className="text-center"><div className="text-3xl font-bold text-fortis-green">600k+</div><div className="text-sm text-gray-600">Tonnes Waste Diverted</div></div>
          </div>
        </div>
        
        {/* Partner Types */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">🤝 Partnership Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold mb-2">Investors</h3>
              <p className="text-sm text-gray-600 mb-4">Equity, debt, carbon credit purchases</p>
              <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20investing" className="text-fortis-green font-bold">Inquire →</a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="font-bold mb-2">Off-takers</h3>
              <p className="text-sm text-gray-600 mb-4">Product offtake agreements</p>
              <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20offtaking" className="text-fortis-green font-bold">Inquire →</a>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold mb-2">Technical</h3>
              <p className="text-sm text-gray-600 mb-4">Equipment, expertise, JVs</p>
              <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20technical%20partnership" className="text-fortis-green font-bold">Inquire →</a>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-fortis-green text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Partner with Fortis Invicta</h2>
          <p className="mb-4">Join the circular economy revolution. Invest. Supply. Scale.</p>
          <a href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27d%20like%20to%20become%20a%20partner" className="inline-block bg-white text-fortis-green px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Become a Partner →</a>
        </div>
      </div>
    </main>
  );
}