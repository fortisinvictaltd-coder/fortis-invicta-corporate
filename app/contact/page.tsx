export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-dark to-fortis-green text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with FORTIS INVICTA LTD</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" name="phone" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <select name="subject" className="w-full px-4 py-2 border rounded-lg">
                    <option value="">Select subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="housing">Housing Interest</option>
                    <option value="solar">Solar Systems</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea name="message" rows={5} required className="w-full px-4 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-bold mb-2">📍 Address</h3>
                  <p className="text-gray-600">
                    Tranquil, Behind AGIB Bank<br />
                    The Gambia
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold mb-2">📞 Phone</h3>
                  <p className="text-gray-600">+220 2572911</p>
                </div>

                <div className="card">
                  <h3 className="font-bold mb-2">✉️ Email</h3>
                  <p className="text-gray-600">cadjatu@fortisinvicta.com</p>
                  <p className="text-gray-500 text-sm">ceo@fortisinvicta.com</p>
                </div>

                <div className="card">
                  <h3 className="font-bold mb-2">🌐 Website</h3>
                  <p className="text-gray-600">fortisinvicta.com</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-fortis-green rounded-2xl text-white">
                <h3 className="font-bold mb-2">Office Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}