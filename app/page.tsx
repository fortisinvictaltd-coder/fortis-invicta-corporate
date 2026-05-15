'use client';

import Link from 'next/link';
import ImpactDashboard from '@/components/ImpactDashboard';
import LocationMap from '@/components/LocationMap';

const solutions = [
  {
    name: 'Circular Economy Hub',
    description: 'Modular, grant-ready investment opportunity. Transform agro-waste into biogas, biochar, and protein.',
    icon: '♻️',
    href: '/circular-economy',
    cta: 'Explore Solution →',
  },
  {
    name: 'FORTIS OS',
    description: 'Digital backbone for institutional connectivity. 181 pages, 40+ institutions, 30+ embassies mapped.',
    icon: '🏛️',
    href: '/fortis-os',
    cta: 'Explore Platform →',
  },
  {
    name: 'NZEB EcoTech Housing',
    description: 'Net-zero homes for Gambian workers. GTUCCU Partnership - sustainable housing revolution.',
    icon: '🏠',
    href: '/housing',
    cta: 'View Model →',
  },
  {
    name: 'Wolffia-AWG',
    description: '100% wastewater treatment + protein production. Fastest-growing plant technology.',
    icon: '💧',
    href: '/wolffia',
    cta: 'Learn More →',
  },
  {
    name: 'Solar Systems',
    description: 'Renewable energy for hubs and housing. Reduce carbon footprint with clean power.',
    icon: '☀️',
    href: '/solar',
    cta: 'View Systems →',
  },
  {
    name: 'Strategic Partnerships',
    description: 'Join institutional investors, development partners, and technology collaborators.',
    icon: '🤝',
    href: '/partners/eoi',
    cta: 'Partner With Us →',
  },
];

// Core services section - from bolt.host
const coreServices = [
  {
    name: 'Renewable Energy',
    description: 'Solar installations and clean energy solutions for sustainable development',
    icon: '☀️',
  },
  {
    name: 'Infrastructure',
    description: 'Road networks, bridges, and sustainable development infrastructure',
    icon: '🏗️',
  },
  {
    name: 'Water & Sanitation',
    description: 'Clean water treatment facilities and sanitation solutions',
    icon: '💧',
  },
  {
    name: 'Smart Solutions',
    description: 'FORTIS OS, IKENGA AI, UJRIS - Digital integration for institutions',
    icon: '📱',
  },
  {
    name: 'Smart Livestock',
    description: 'Indigenous breeds, BSFL insect farming, aquaculture - coming soon',
    icon: '🐄',
  },
  {
    name: 'Smart Agriculture',
    description: 'Regenerative farming, OMF, cover crops - coming soon',
    icon: '🌱',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-24">
        <div className="container-s">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto mb-8 relative">
              {/* FORTIS 3D Logo - Enhanced with glow and depth */}
              <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto drop-shadow-2xl">
                {/* Glow effect */}
                <ellipse cx="100" cy="100" rx="80" ry="80" fill="url(#glowGradient)" opacity="0.3"/>
                {/* Main diamond outer - gold */}
                <polygon points="100,10 190,80 100,190 10,80" fill="url(#goldGradient)" stroke="#d4b85c" strokeWidth="3"/>
                {/* Inner diamond - dark green */}
                <polygon points="100,45 160,80 100,155 40,80" fill="#1B4D3E" stroke="#C4943A" strokeWidth="2"/>
                {/* Center diamond - lighter green */}
                <polygon points="100,65 135,80 100,135 65,80" fill="#2d6a4f"/>
                {/* Top facet - highlight */}
                <polygon points="100,10 100,45 40,80" fill="#d4b85c" opacity="0.8"/>
                {/* Right facet */}
                <polygon points="100,45 160,80 100,155" fill="#1B4D3E" opacity="0.4"/>
                {/* Left facet */}
                <polygon points="100,45 40,80 100,155" fill="#1B4D3E" opacity="0.2"/>
                {/* Vertical line */}
                <line x1="100" y1="45" x2="100" y2="155" stroke="#C4943A" strokeWidth="2"/>
                {/* Horizontal line */}
                <line x1="40" y1="80" x2="160" y2="80" stroke="#C4943A" strokeWidth="1" opacity="0.5"/>
                {/* FI monogram */}
                <text x="100" y="108" textAnchor="middle" fill="#C4943A" fontSize="24" fontWeight="bold" fontFamily="serif">FI</text>
                <defs>
                  <linearGradient id="goldGradient" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#fcd34d"/>
                    <stop offset="30%" stopColor="#C4943A"/>
                    <stop offset="70%" stopColor="#a67c2a"/>
                    <stop offset="100%" stopColor="#783c12"/>
                  </linearGradient>
                  <radialGradient id="glowGradient" cx="100" cy="100" r="80">
                    <stop offset="0%" stopColor="#C4943A"/>
                    <stop offset="100%" stopColor="transparent"/>
                  </radialGradient>
                </defs>
              </svg>
              {/* FORTIS INVICTA text below logo */}
              <div className="mt-2">
                <span className="text-3xl font-bold">
                  <span className="text-fortis-gold">FORTIS</span> <span className="text-white">INVICTA</span>
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Africa's Regenerative Future. Powering The Gambia's Future.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Integrated Circular Infrastructure & Digital Solutions for Sustainable Development
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/partners/eoi" className="btn-primary">
                Partner With Us →
              </Link>
              <Link href="/circular-economy" className="btn-secondary">
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <ImpactDashboard />

      {/* Core Services Section - NEW ADDITION */}
      <section className="py-20 bg-white">
        <div className="container-s">
          <h2 className="section-title text-center mb-4">Core Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive infrastructure and digital solutions for The Gambia's sustainable development
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => (
              <div key={service.name} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-fortis-dark">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Business Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link key={solution.name} href={solution.href} className="card group">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-fortis-green transition-colors">
                  {solution.name}
                </h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <span className="text-fortis-green font-semibold group-hover:text-fortis-gold transition-colors">
                  {solution.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Livestock & Circular Feed — Coming Soon */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="container-s max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold tracking-wider uppercase">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fortis-dark mt-2 mb-4">
              🐄 Smart Livestock & Circular Feed Initiative
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Indigenous breeds + Black Soldier Fly larvae + Aquaculture — a formidable answer to food security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Indigenous Breeds */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🐃</div>
              <h3 className="text-xl font-bold mb-2">Indigenous Breeds</h3>
              <p className="text-gray-600">N'Dama, WAD goats, Djallonké sheep, guinea fowl — trypanotolerant, heat-resilient</p>
            </div>
            {/* BSFL Insect Farming */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🪲</div>
              <h3 className="text-xl font-bold mb-2">BSFL Protein Feed</h3>
              <p className="text-gray-600">Waste-to-protein conversion — 40-50% crude protein, 30-50% cost reduction</p>
            </div>
            {/* Aquaculture Integration */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🐟</div>
              <h3 className="text-xl font-bold mb-2">Aquaculture</h3>
              <p className="text-gray-600">Tilapia & catfish with rice-fish systems — closing nutrient loops</p>
            </div>
          </div>

          {/* Investment Case */}
          <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-center mb-4">📊 The Investment Case</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div><p className="text-2xl font-bold text-fortis-green">$10M+</p><p className="text-sm">Annual Meat Import Gap</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">30-50%</p><p className="text-sm">Feed Cost Reduction</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">2.0-4.0x</p><p className="text-sm">BCR in Integrated Systems</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">70%</p><p className="text-sm">Waste Volume Reduction</p></div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Interested in investing, supplying technology, or partnering?</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-fortis-green text-white rounded-xl font-bold hover:bg-fortis-dark transition">
              Express Interest →
            </Link>
          </div>
        </div>
      </section>

      {/* Smart Agriculture — Coming Soon */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container-s max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-green-600 text-sm font-semibold tracking-wider uppercase">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-fortis-dark mt-2 mb-4">
              🌱 Fortis Smart Agriculture
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regenerative agriculture — soil rejuvenation, indigenous crops, and circular finance for food security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Agrii-Fortis OMF */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🦠</div>
              <h3 className="text-xl font-bold mb-2">Agrii-Fortis OMF</h3>
              <p className="text-gray-600">Organo-mineral fertiliser + biochar — restores soil biology, reduces synthetic N by 80%</p>
            </div>
            {/* Indigenous Super-Crops */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-xl font-bold mb-2">Indigenous Super-Crops</h3>
              <p className="text-gray-600">Faidherbia, Mucuna, pigeon pea, sorghum, millet — climate-resilient, nitrogen-fixing</p>
            </div>
            {/* Fortis Mobile Money */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Circular Finance</h3>
              <p className="text-gray-600">Mobile payments, micro-loans, marketplace for regenerative products</p>
            </div>
          </div>

          {/* African Focused Species */}
          <div className="mt-8 pt-8 border-t-2 border-dashed border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">🌵</span> African Focused Species — High-Value Long-Term Crops
            </h3>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🌵</div>
                <p className="font-bold text-sm">Prickly Pear</p>
                <p className="text-xs text-gray-500">Drought-proof, fruit, biofuel</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 2-3 years</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🌴</div>
                <p className="font-bold text-sm">Date Palm</p>
                <p className="text-xs text-gray-500">Dates, wood, thatch</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 4-5 years</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🌳</div>
                <p className="font-bold text-sm">Baobab</p>
                <p className="text-xs text-gray-500">Superfood, oil, fibre</p>
                <p className="text-xs text-green-600 mt-1">Export premium</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🥜</div>
                <p className="font-bold text-sm">Shea</p>
                <p className="text-xs text-gray-500">Shea butter, feed</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 10-15 years</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🌿</div>
                <p className="font-bold text-sm">Gum Arabic</p>
                <p className="text-xs text-gray-500">Acacia senegal</p>
                <p className="text-xs text-green-600 mt-1">Strategic commodity</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🪔</div>
                <p className="font-bold text-sm">Oil Palm</p>
                <p className="text-xs text-gray-500">Palm oil, biodiesel</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 3-4 years</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🌿</div>
                <p className="font-bold text-sm">Moringa</p>
                <p className="text-xs text-gray-500">Leaf powder, oil</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 6-8 months</p>
              </div>
              <div className="bg-white rounded-xl p-3 text-center">
                <div className="text-3xl mb-2">🍋</div>
                <p className="font-bold text-sm">Tamarind</p>
                <p className="text-xs text-gray-500">Fruit pulp, seeds</p>
                <p className="text-xs text-green-600 mt-1">Harvest: 6-8 years</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg text-center">
              <p className="text-sm text-green-800">
                <strong>Investment Case:</strong> Cactus and succulents for drylands • Date palms for coastal regions • Baobab and shea for export markets
              </p>
            </div>
          </div>

          {/* Profit Case */}
          <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-bold text-center mb-4">📊 The Profit Case</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div><p className="text-2xl font-bold text-fortis-green">+155%</p><p className="text-sm">Profit Advantage (3yr)</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">80%</p><p className="text-sm">Synthetic Fertilizer Reduction</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">2-5t</p><p className="text-sm">Carbon Sequestered/ha/yr</p></div>
              <div><p className="text-2xl font-bold text-fortis-green">70%+</p><p className="text-sm">Rice Import Replacement</p></div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Interested in regenerative agriculture or carbon credits?</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-fortis-green text-white rounded-xl font-bold hover:bg-fortis-dark transition">
              Express Interest →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container-s max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for updates on our projects and impact.
          </p>
          <form className="flex gap-4" action="/api/subscribe" method="POST">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green"
            />
            <button type="submit" className="btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="container-s max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">A Message from Our CEO</h2>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-6xl">👩‍💼</div>
              <div>
                <p className="text-gray-700 mb-4">
                  At FORTIS INVICTA LTD, we believe in turning challenges into opportunities. 
                  The Gambia's waste management crisis is not just a problem—it's a resource waiting to be unlocked.
                </p>
                <p className="text-gray-700 mb-4">
                  Our integrated circular economy approach transforms mango waste, rice husks, 
                  and agricultural by-products into biogas, organic fertilizer, and high-protein 
                  Black Soldier Fly larvae—all while cleaning our waterways with Wolffia.
                </p>
                <p className="font-bold text-fortis-green">— Cadjatu Djaló, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps + Street View Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-s max-w-6xl">
          <h2 className="section-title text-center mb-8">📍 Visit Our Pilot Site</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31764.78965712836!2d-16.67761855!3d13.45436285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec2dfe9d2ea4bc3%3A0x8b2e7d5f1c4a6b9!2sBanjul%2C%20The%20Gambia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Fortis Invicta Location Map"
              />
              <div className="p-4 bg-gray-50">
                <p className="font-semibold">📍 Tranquil, Behind AGIB Bank, The Gambia</p>
                <a href="https://maps.google.com/?q=Tranquil+Behind+AGIB+Bank+Gambia" target="_blank" className="text-fortis-gold text-sm hover:underline">Get Directions →</a>
              </div>
            </div>
            {/* Street View */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE5Jcm5iU3hjT1JYaDd6WkZ0UUlUZkRnY19MTW1WUHRHNXhyY19U!2m2!1d13.45436285!2d-16.67761855!3f250!4f0!5f0.7820865974627469"
                width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy"
                title="Google Street View"
              />
              <div className="p-4 bg-gray-50">
                <p className="font-semibold">🗺️ 360° Street View</p>
                <p className="text-sm text-gray-600">Click and drag to explore the area around our pilot site.</p>
              </div>
            </div>
          </div>
          {/* Directions Widget */}
          <div className="mt-8 bg-fortis-gold/10 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">🚗 Get Directions</h3>
            <div className="flex flex-wrap gap-4">
              <input type="text" id="fromLocation" placeholder="Your starting location..." className="flex-1 px-4 py-2 rounded-lg border border-gray-300" />
              <button onClick={() => { const from = (document.getElementById('fromLocation') as HTMLInputElement); if(from?.value) window.open(`https://maps.google.com/?saddr=${encodeURIComponent(from.value)}&daddr=Tranquil+Behind+AGIB+Bank+Gambia`, '_blank'); }} className="bg-fortis-green text-white px-6 py-2 rounded-lg">Get Directions →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-s max-w-6xl">
          <h2 className="section-title text-center mb-4">🌍 Buy Gambia Marketplace</h2>
          <p className="text-center text-gray-600 mb-8">Direct from the Circular Economy Hub</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-2">🪲</div>
              <h3 className="font-bold">BSF Protein Meal</h3>
              <p className="text-fortis-green font-bold mt-2">$960/ton</p>
              <p className="text-sm text-gray-600">-20% vs imported fishmeal</p>
              <button className="mt-4 bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</button>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-2">🪵</div>
              <h3 className="font-bold">Biochar Briquettes</h3>
              <p className="text-fortis-green font-bold mt-2">$240/ton</p>
              <p className="text-sm text-gray-600">Clean cooking fuel</p>
              <button className="mt-4 bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</button>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl mb-2">🌱</div>
              <h3 className="font-bold">Organic Frass</h3>
              <p className="text-fortis-green font-bold mt-2">$360/ton</p>
              <p className="text-sm text-gray-600">Bio-fertilizer</p>
              <button className="mt-4 bg-fortis-green text-white px-4 py-2 rounded-lg text-sm">Inquire →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Tier Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-fortis-green/10 to-fortis-gold/10">
        <div className="container-s max-w-4xl text-center">
          <div className="inline-block bg-fortis-green text-white px-4 py-1 rounded-full text-sm font-bold mb-4">FREE</div>
          <h2 className="text-3xl font-bold mb-4">Get Your Business Profile on FORTIS OS</h2>
          <p className="text-gray-600 mb-6">2 minutes. No cost. IKENGA AI optimizes your story for maximum visibility.</p>
          <form className="max-w-md mx-auto flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); window.open('https://wa.me/2202572911?text=Hi%20Fortis%20Invicta%2C%20I%27d%20like%20to%20create%20my%20free%20business%20profile', '_blank'); }}>
            <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-lg border" required />
            <input type="tel" placeholder="WhatsApp Number" className="px-4 py-3 rounded-lg border" required />
            <input type="text" placeholder="Business Name" className="px-4 py-3 rounded-lg border" required />
            <button type="submit" className="bg-fortis-green text-white py-3 rounded-lg font-bold hover:bg-fortis-dark">Create Free Profile →</button>
          </form>
          <p className="text-xs text-gray-500 mt-4">No credit card required • Cancel anytime • UJRIS protected</p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-s max-w-6xl">
          <h2 className="section-title text-center mb-4">📍 Our Locations & Partners</h2>
          <p className="text-center text-gray-600 mb-12">Explore our headquarters, partners, and government agencies in 3D</p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <LocationMap
              name="FORTIS INVICTA LTD - Headquarters"
              address="Tranquil, Behind AGIB Bank, The Gambia"
              lat={13.4549}
              lng={-16.5775}
              website="https://fortis-invicta.vercel.app"
              phone="+220 2572911"
            />
            <LocationMap
              name="ARIM - Applied Research, Innovation & Manufacturing"
              address="Sukuta–Salagi, The Gambia"
              lat={13.4185}
              lng={-16.6982}
              website="https://www.findglocal.com/GM/Banjul/1777870888952846/Applied-Research-Innovation-and-Manufacturing"
              facebook="https://www.facebook.com/ARIMGambia"
            />
            <LocationMap
              name="MOTIE - Ministry of Trade, Industry & Employment"
              address="The Quadrangle, Banjul, The Gambia"
              lat={13.4545}
              lng={-16.5775}
              website="https://motie.gov.gm"
              phone="+220 422 8570"
            />
            <LocationMap
              name="DoA - Department of Agriculture"
              address="Central Agricultural Station, Yundum, The Gambia"
              lat={13.3390}
              lng={-16.6550}
              website="https://moa.gov.gm"
              phone="+220 446 8335"
            />
            <LocationMap
              name="NEA - National Environment Agency"
              address="Kairaba Avenue, Kanifing, The Gambia"
              lat={13.4520}
              lng={-16.6785}
              website="https://nea.gm"
              phone="+220 449 5515"
            />
            <LocationMap
              name="GIRAV - Gambia Investment & Real Estate Agency"
              address="Kairaba Avenue, Opposite Fajara Police Station, The Gambia"
              lat={13.4525}
              lng={-16.6790}
              website="https://giragm.com"
              phone="+220 449 5515"
            />
            <LocationMap
              name="Banjul International Airport (BJL)"
              address="Yundum, West Coast Region, The Gambia"
              lat={13.3380}
              lng={-16.6522}
              website="https://www.banjulairport.com"
              phone="+220 447 2831"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-gradient-to-b from-fortis-green/5 to-white">
        <div className="container-s max-w-5xl">
          <h2 className="section-title text-center mb-4">👥 Meet the Team</h2>
          <p className="text-center text-gray-600 mb-12">The people building The Gambia's regenerative future</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-gold">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-gold/20 rounded-full flex items-center justify-center text-2xl">👩‍💼</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Cadjatu Djaló</h3><p className="text-fortis-gold text-sm">CEO & Founder</p></div>
              </div>
              <p className="text-gray-600 text-sm">Strategic leadership, fundraising, partnerships, circular economy vision. 83% women-led board.</p>
              <a href="mailto:fortisinvictaltd@gmail.com" className="text-fortis-gold text-sm mt-2 inline-block">📧 fortisinvictaltd@gmail.com</a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-gold">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-gold/20 rounded-full flex items-center justify-center text-2xl">🧠</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Project Lead</h3><p className="text-fortis-gold text-sm">Super Admin / The Brain</p></div>
              </div>
              <p className="text-gray-600 text-sm">Technical architecture, FORTIS OS, IKENGA AI, UJRIS, system oversight, and full-stack development.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-gold">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-gold/20 rounded-full flex items-center justify-center text-2xl">👔</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Samba Bajie</h3><p className="text-fortis-gold text-sm">Board Director (4% Shareholder) — Serving Deputy Ombudsman, The Gambia</p></div>
              </div>
              <p className="text-gray-600 text-sm">Governance, regulatory affairs, strategic direction, and stakeholder relations. His public service role does not restrict his capacity to serve as Board Director and 4% shareholder in FORTIS INVICTA LTD.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-gold">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-gold/20 rounded-full flex items-center justify-center text-2xl">🔬</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Dr. Faye Manneh</h3><p className="text-fortis-gold text-sm">Technical Director</p></div>
              </div>
              <p className="text-gray-600 text-sm">Circular Economy Hub, BSF protein, biochar, agricultural systems, and technical validation.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-gold">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-gold/20 rounded-full flex items-center justify-center text-2xl">📊</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Board Members</h3><p className="text-fortis-gold text-sm">Governance & Oversight</p></div>
              </div>
              <p className="text-gray-600 text-sm">Fatou Darboe (Food Technology, MoA), Therese K. Mendy (Financial Oversight), Sainabou Willan (Governance, Community Health).</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-fortis-green">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-fortis-green/20 rounded-full flex items-center justify-center text-2xl">🤝</div>
                <div><h3 className="font-bold text-xl text-fortis-green">Strategic Partners</h3><p className="text-fortis-green text-sm">Government & Institutional Collaborators</p></div>
              </div>
              <div className="space-y-2 text-gray-600 text-sm">
                <div><span className="font-semibold">🏛️ MOTIE</span> - Ministry of Trade, Industry & Employment <span className="text-green-600 text-xs ml-2">✓ MOU Signed Mar 2026</span></div>
                <div><span className="font-semibold">🌾 DoA</span> - Department of Agriculture <span className="text-green-600 text-xs ml-2">✓ MOU Signed Mar 2026</span></div>
                <div><span className="font-semibold">🌍 NEA</span> - National Environment Agency <span className="text-green-600 text-xs ml-2">✓ MOU Signed Mar 2026</span></div>
                <div><span className="font-semibold">🔧 ARIM</span> - Applied Research, Innovation & Manufacturing</div>
                <div><span className="font-semibold">🏠 GTUCCU</span> - Gambia Teachers' Union Cooperative Credit Union</div>
                <div><span className="font-semibold">🐛 Manna Insect</span> - BSF Technology Partner</div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Fortis Invicta has active MOUs with MOTIE, DoA, and NEA as of March 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA - from bolt.host */}
      <section className="py-20 bg-gradient-to-r from-fortis-green to-fortis-dark text-white">
        <div className="container-s text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Develop The Gambia Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with FORTIS INVICTA for innovative solutions to your infrastructure and development needs.
          </p>
          <Link href="/partners/eoi" className="btn-primary inline-flex items-center gap-2">
            <span>Partner With Us</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}