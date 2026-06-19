import Image from 'next/image';

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "NZEB - Net Zero Energy Building",
      category: "Energy",
      imageUrl: "/images/gallery/nzeb.jpg",
      description: "Low-cost, energy-efficient building design."
    },
    {
      id: 2,
      title: "Interlocking Compressed Earth Block",
      category: "Construction",
      imageUrl: "/images/gallery/earth-block.jpg",
      description: "Sustainable, low-cost, and locally sourced building materials."
    },
    {
      id: 3,
      title: "Smart Agriculture",
      category: "Agriculture",
      imageUrl: "/images/gallery/smart-agri.jpg",
      description: "Regenerative farming and food security solutions."
    },
    {
      id: 4,
      title: "Renewable Solar Energy",
      category: "Energy",
      imageUrl: "/images/gallery/solar.jpg",
      description: "Off-grid and grid-tied solar solutions."
    },
    {
      id: 5,
      title: "Integrated Circular Economy",
      category: "Sustainability",
      imageUrl: "/images/gallery/circular-economy.jpg",
      description: "Transforming agro-waste into value-added products."
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Project Gallery</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Visual showcase of our transformative projects across The Gambia
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-56 bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white text-2xl font-bold">
              {item.title.substring(0, 2)}
            </div>
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
