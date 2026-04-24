"use client";

import Link from "next/link";

export default function EcoTechPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-fortis-green/5 to-white">
      <div className="container-s max-w-5xl mx-auto px-4 py-12">
        <Link href="/" className="text-fortis-gold hover:underline mb-6 inline-block">← Back to Home</Link>

        <div className="text-center mb-8">
          <div className="inline-block bg-fortis-green/10 text-fortis-green px-4 py-1 rounded-full text-sm font-bold mb-4">
            GTUCCU Partnership
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-fortis-green mb-4">Eco-Tech Interlock Gambia</h1>
          <p className="text-xl text-gray-600 mb-8">Zero-bill, affordable, circular, energy-independent 3-bedroom eco-homes for civil servants.</p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">🏠 Home Specifications</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span>✓</span><span>3 bedrooms (master with en-suite)</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>68m² total built area</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>ISCEB walls – 5% cement, 290mm thick</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>5-8°C cooler than concrete homes</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>1.5m overhangs for rain protection</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>Open-plan living, kitchen, dining</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-fortis-green mb-4">⚡ Energy & Water</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><span>✓</span><span>8-12 kWp solar (Victron)</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>3-4 day battery autonomy</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>Biogas digester (kitchen + garden waste)</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>10,000L rainwater harvesting</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>Composting toilet + greywater recycling</span></li>
              <li className="flex items-start gap-2"><span>✓</span><span>Zero grid dependency – complete energy independence</span></li>
            </ul>
          </div>
        </div>

        {/* Financials */}
        <div className="bg-fortis-green/10 rounded-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">💰 Financial Model</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm">Build Cost</p>
              <p className="text-3xl font-bold text-fortis-green">GMD 540k</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm">Monthly Payment</p>
              <p className="text-3xl font-bold text-fortis-green">GMD 6,850</p>
              <p className="text-xs text-gray-500">15 years @ 8.5%</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <p className="text-gray-500 text-sm">Monthly Savings</p>
              <p className="text-3xl font-bold text-fortis-green">GMD 8-12k</p>
              <p className="text-xs text-gray-500">vs rent + utilities</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">📅 10-Month Execution Timeline</h2>
          <div className="space-y-3 bg-white rounded-xl p-6 shadow">
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 1</div><div>Acquire ISCEB business + launch diaspora bond + sign estate JVs</div></div>
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 2</div><div>Bond closes ($2M) + carbon pre-sales ($750k)</div></div>
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 3</div><div>First 20 homes start on estate land</div></div>
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 4</div><div>First 10 homes occupied + open houses</div></div>
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 5-8</div><div>Rolling construction (20 homes/month) → 80 homes</div></div>
            <div className="flex items-center gap-3"><div className="w-24 text-fortis-green font-bold">Month 9-10</div><div>Scale to 40/month + expand to nurses/police</div></div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">👥 Eligibility Criteria</h2>
          <div className="bg-white rounded-xl p-6 shadow">
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>Civil servant with 2+ years employment</li>
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>Clean credit history</li>
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>Monthly income GMD 15,000+</li>
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>No existing housing loan</li>
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>Government verification letter</li>
              <li className="flex items-center gap-2"><span className="text-fortis-green">✓</span>Willing to join savings group</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-fortis-green text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to own your zero-bill home?</h2>
          <p className="mb-4">Join 2,000+ civil servants already building their future.</p>
          <a
            href="https://wa.me/2202572911?text=Hello%20Fortis%20Invicta%2C%20I%27m%20interested%20in%20the%20Eco-Tech%20housing%20project"
            className="inline-block bg-white text-fortis-green px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Register Interest →
          </a>
        </div>
      </div>
    </main>
  );
}
