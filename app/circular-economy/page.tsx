import Link from 'next/link';

const inputs = [
  'Mango waste', 'Rice husks', 'Groundnut shells', 'Abattoir by-products', 'Livestock residues'
];

const outputs = [
  { name: 'Biogas Energy', icon: '🔥', description: 'Clean renewable energy from anaerobic digestion' },
  { name: 'Biochar & Fertilizer', icon: '🌱', description: 'Organic soil amendment from pyrolysis' },
  { name: 'BSF Larvae Protein', icon: '🐛', description: 'High-protein feed for poultry and aquaculture' },
  { name: 'Value-added Exports', icon: '📦', description: 'Sustainable products for regional markets' },
];

const terrestrialCrops = [
  { name: 'Wolffia', yield: '5-16 t/ha/year', protein: '40%' },
  { name: 'Azolla', yield: 'Natural N-fix', protein: '25%' },
  { name: 'Comfrey', yield: '23-39 t/ha/year', protein: '3.5%' },
  { name: 'Cowpea', yield: 'Up to 2.2 t/ha/year', protein: '25%' },
  { name: 'Breadfruit', yield: 'Up to 50 t/ha/year', protein: '5%' },
  { name: 'Moringa', yield: '5-8 t DW/ha/year', protein: '27%' },
];

export default function CircularEconomy() {
  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">♻️ Integrated Circular Economy Hub</h1>
          <p className="text-xl text-gray-300">Tranquil, The Gambia</p>
        </div>
      </section>

      <section className="py-12 bg-fortis-gold">
        <div className="container-s">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-fortis-green mb-4">Inputs (Waste)</h2>
              <ul className="space-y-2">
                {inputs.map((item) => (
                  <li key={item} className="bg-white px-4 py-2 rounded-lg text-fortis-green">
                    → {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-fortis-green mb-4">1-Hectare Impact</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl">🥩</div>
                  <div className="font-bold text-fortis-green">10-30+ tons</div>
                  <div className="text-sm">Protein / year</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl">💧</div>
                  <div className="font-bold text-fortis-green">100%</div>
                  <div className="text-sm">Wastewater Recycled</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl">⚡</div>
                  <div className="font-bold text-fortis-green">Biogas</div>
                  <div className="text-sm">Energy Generated</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="text-2xl">👥</div>
                  <div className="font-bold text-fortis-green">50+</div>
                  <div className="text-sm">Jobs Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Outputs & Value</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outputs.map((output) => (
              <div key={output.name} className="card text-center">
                <div className="text-4xl mb-4">{output.icon}</div>
                <h3 className="text-lg font-bold mb-2">{output.name}</h3>
                <p className="text-gray-600">{output.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Terrestrial Integration</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our terrestrial crops complement the aquatic systems, creating a fully integrated 
            circular ecosystem that maximizes resource efficiency.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-fortis-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Crop</th>
                  <th className="px-6 py-4 text-left">Yield</th>
                  <th className="px-6 py-4 text-left">Protein Content</th>
                </tr>
              </thead>
              <tbody>
                {terrestrialCrops.map((crop, idx) => (
                  <tr key={crop.name} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{crop.name}</td>
                    <td className="px-6 py-4">{crop.yield}</td>
                    <td className="px-6 py-4">{crop.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-gray-600 mb-8">Join us in building The Gambia's sustainable future.</p>
          <Link href="/partners" className="btn-primary">
            Become a Partner →
          </Link>
        </div>
      </section>
    </div>
  );
}