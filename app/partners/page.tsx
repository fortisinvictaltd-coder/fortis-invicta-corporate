export default function Partners() {
  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-dark to-fortis-green text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🤝 Partner With Us</h1>
          <p className="text-xl text-gray-300">Join us in building The Gambia's sustainable future</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Partnership Inquiry</h2>
          <form action="/api/inquiry" method="POST" className="space-y-4">
            <input type="hidden" name="type" value="partnership" />
            <div>
              <label className="block text-sm font-medium mb-1">Organization Name</label>
              <input type="text" name="organization" required className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Person</label>
              <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input type="tel" name="phone" required className="w-full px-4 py-2 border rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Partnership Type</label>
              <select name="partnershipType" className="w-full px-4 py-2 border rounded-lg">
                <option value="">Select type</option>
                <option value="funding">Funding/Investment</option>
                <option value="technical">Technical Partnership</option>
                <option value="distribution">Distribution</option>
                <option value="research">Research Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" rows={4} className="w-full px-4 py-2 border rounded-lg"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Partnership Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold mb-2">Investment</h3>
              <p className="text-gray-600">Fund our circular economy expansion</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold mb-2">Research</h3>
              <p className="text-gray-600">Collaborate on R&D projects</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">International</h3>
              <p className="text-gray-600">Global development partnerships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}