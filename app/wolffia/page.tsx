import Link from 'next/link';

export default function Wolffia() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-400 to-teal-600 text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">💧 Wolffia-AWG Project</h1>
          <p className="text-xl text-gray-200">Water Eggs + Wastewater Treatment</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <h2 className="section-title">What is Wolffia?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Wolffia, also known as &quot;water eggs&quot; or watermeal, is the fastest-growing plant on Earth. 
            It can double its biomass in just 1-2 days, making it an incredibly efficient crop 
            for integrated agricultural systems.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card text-center">
              <div className="text-3xl font-bold text-fortis-green">5-16 t/ha/year</div>
              <p className="text-sm text-gray-600">Protein Yield</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-fortis-green">98%</div>
              <p className="text-sm text-gray-600">Nitrogen Removal</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-fortis-green">40%</div>
              <p className="text-sm text-gray-600">Crude Protein Content</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s">
          <h2 className="section-title text-center mb-8">Integration with Circular Economy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-bold mb-4">🌊 Wastewater Polishing</h3>
              <p className="text-gray-600">
                Wolffia grows on digestate from anaerobic digestion, absorbing 98% of nitrogen 
                and phosphorus from the water. This creates a natural water polishing stage 
                before water is returned to the environment.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-4">🐟 Aquaculture Feed</h3>
              <p className="text-gray-600">
                The harvested Wolffia is an excellent feed source for fish and poultry, providing 
                high-protein nutrition. This closes the loop in our integrated farming systems.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-4">🧪 R&D Phase</h3>
              <p className="text-gray-600">
                The Wolffia-AWG project is currently in research and development phase, 
                optimizing growth conditions and integration with our existing systems.
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold mb-4">🌱 Terrestrial Crops</h3>
              <p className="text-gray-600">
                Comfrey, Azolla, cowpea, and moringa complement the aquatic systems, 
                creating a fully integrated circular ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s text-center">
          <Link href="/partners" className="btn-primary">
            Partner with Us →
          </Link>
        </div>
      </section>
    </div>
  );
}