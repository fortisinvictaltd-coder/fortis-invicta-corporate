export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FORTIS INVICTA LTD</h1>
          <p className="text-xl text-gray-300">Built for The Gambia. Designed for the world.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            FORTIS INVICTA LTD is a Gambia-based company dedicated to solving the country's 
            most pressing challenges through innovative, sustainable solutions. From waste management 
            to digital infrastructure, we're building the foundation for The Gambia's future.
          </p>
          <p className="text-gray-600 mb-12">
            Founded with a vision to transform challenges into opportunities, we develop 
            integrated solutions that benefit communities, protect the environment, 
            and create economic value.
          </p>

          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-12">
            To build sustainable infrastructure that improves lives, protects the environment, 
            and creates economic opportunities for The Gambia and its people.
          </p>

          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card">
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">Finding new solutions to old problems</p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">Building for future generations</p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-2">Impact</h3>
              <p className="text-gray-600">Creating real change in communities</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="card">
            <div className="flex items-center gap-6">
              <div className="text-6xl">👩‍💼</div>
              <div>
                <h3 className="text-xl font-bold">Cadjatu Djaló</h3>
                <p className="text-fortis-green font-medium">Chief Executive Officer</p>
                <p className="text-gray-600 mt-2">
                  Visionary leader driving The Gambia's sustainable development. 
                  Under her leadership, FORTIS INVICTA has become a leader in 
                  circular economy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Company Details</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl mx-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Company Name</td>
                  <td className="px-6 py-4">FORTIS INVICTA LTD</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Registration</td>
                  <td className="px-6 py-4">The Gambia</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Incorporated</td>
                  <td className="px-6 py-4">Incorporated in The Gambia · Est. 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">CEO</td>
                  <td className="px-6 py-4">Cadjatu Djaló</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Email</td>
                  <td className="px-6 py-4">cadjatu@fortisinvicta.com</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium bg-gray-50">Phone</td>
                  <td className="px-6 py-4">+220 2572911</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium bg-gray-50">Address</td>
                  <td className="px-6 py-4">Tranquil, Behind AGIB Bank, The Gambia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}