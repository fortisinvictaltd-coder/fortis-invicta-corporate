import Link from 'next/link';

export const metadata = {
  title: 'FORTIS OS - Digital Backbone | FORTIS INVICTA LTD',
  description: "The Gambia's digital infrastructure platform connecting 40+ institutions, 30+ embassies, and 181 deployed pages.",
};

const stats = [
  { label: 'Pages Deployed', value: '181' },
  { label: 'Institutions Mapped', value: '40+' },
  { label: 'Embassies Connected', value: '30+' },
  { label: 'Partners', value: '43' },
];

const features = [
  { name: 'Digital Asset Management', description: 'Centralized management of institutional digital resources and documents.' },
  { name: 'Inter-institutional Connectivity', description: 'Seamless data sharing between government agencies and embassies.' },
  { name: 'National Database Integration', description: 'Unified access to Gambian institutional data and assets.' },
  { name: 'Custom Portal Pages', description: 'Tailored digital presence for each partner organization.' },
];

export default function FortisOSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-20">
        <div className="container-s text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Digital Backbone of Gambia's Sustainable Future
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            FORTIS OS is our comprehensive digital infrastructure platform connecting 
            institutions, embassies, and government agencies across The Gambia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/partners/eoi" className="btn-primary">
              Integrate Your Institution →
            </Link>
            <a 
              href="https://fortisos.cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Launch FORTIS OS →
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-fortis-gold py-12">
        <div className="container-s grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-fortis-green">{stat.value}</div>
              <div className="text-sm text-fortis-green font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-s">
          <h2 className="section-title text-center mb-12">Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-fortis-green mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-s text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Integrate?</h2>
          <p className="text-gray-600 mb-6">
            Connect your institution to FORTIS OS and join 40+ organizations already on the platform.
          </p>
          <Link href="/partners/eoi" className="btn-primary">
            Submit Integration Request →
          </Link>
        </div>
      </section>
    </div>
  );
}