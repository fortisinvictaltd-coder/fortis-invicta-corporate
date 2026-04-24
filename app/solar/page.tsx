import Link from 'next/link';

const services = [
  { name: 'Solar Installation', description: 'Complete solar system design and installation', icon: '☀️' },
  { name: 'System Maintenance', description: 'Ongoing maintenance and monitoring services', icon: '🔧' },
  { name: 'Battery Storage', description: 'Battery backup solutions for 24/7 power', icon: '🔋' },
  { name: 'Financing Options', description: 'Flexible payment plans through GTUCCU', icon: '💳' },
];

export default function Solar() {
  return (
    <div>
      <section className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">☀️ Solar Systems</h1>
          <p className="text-xl text-gray-100">Renewable energy solutions for homes and businesses</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Clean Energy for The Gambia</h2>
              <p className="text-gray-600 mb-6">
                Our solar solutions power the Circular Economy Hub and NZEB Housing with clean, 
                renewable energy. Reduce your electricity bills while contributing to a sustainable future.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span>✅</span> Grid-tied and off-grid systems
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Battery storage options
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Professional installation
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Ongoing maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> GTUCCU financing
                </li>
              </ul>
            </div>
            <div className="bg-fortis-green rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
              <form action="/api/inquiry" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-2 rounded-lg text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">System Type</label>
                  <select name="systemType" className="w-full px-4 py-2 rounded-lg text-gray-900">
                    <option value="">Select type</option>
                    <option value="grid-tied">Grid-tied</option>
                    <option value="off-grid">Off-grid</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-fortis-gold text-fortis-green px-6 py-3 rounded-lg font-bold">
                  Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Our Solar Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.name} className="card text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s text-center">
          <Link href="/contact" className="btn-primary">
            Contact Us for Solar Solutions →
          </Link>
        </div>
      </section>
    </div>
  );
}