import Link from 'next/link';

export default function Housing() {
  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🏠 NZEB EcoTech Housing</h1>
          <p className="text-xl text-gray-300">Net-zero bill ecological housing for Gambian workers</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Affordable Green Housing</h2>
              <p className="text-gray-600 mb-6">
                Our NZEB (Net-Zero Energy Building) housing initiative provides affordable, 
                ecological homes for Gambian workers including teachers, nurses, and civil servants.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span>✅</span> Net-zero energy consumption
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Solar-powered systems
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Rainwater harvesting
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> GTUCCU payroll deduction
                </li>
                <li className="flex items-center gap-2">
                  <span>✅</span> Sustainable materials
                </li>
              </ul>
            </div>
            <div className="bg-fortis-gold rounded-2xl p-8">
              <h3 className="text-xl font-bold text-fortis-green mb-4">Expression of Interest</h3>
              <form action="/api/inquiry" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Profession</label>
                  <select name="profession" className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Select profession</option>
                    <option value="teacher">Teacher</option>
                    <option value="nurse">Nurse</option>
                    <option value="civil servant">Civil Servant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Monthly Income (GMD)</label>
                  <input
                    type="number"
                    name="income"
                    placeholder="e.g., 5000"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <button type="submit" className="w-full btn-primary">
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-8">Why Choose NZEB Housing?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Affordable</h3>
              <p className="text-gray-600">Through GTUCCU partnership, affordable payroll deduction plans available</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-bold mb-2">Sustainable</h3>
              <p className="text-gray-600">Net-zero energy design with solar panels and rainwater harvesting</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🏘️</div>
              <h3 className="font-bold mb-2">Quality</h3>
              <p className="text-gray-600">Built with sustainable materials for durability and comfort</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s text-center">
          <Link href="/contact" className="btn-primary">
            Contact Us for More Info →
          </Link>
        </div>
      </section>
    </div>
  );
}