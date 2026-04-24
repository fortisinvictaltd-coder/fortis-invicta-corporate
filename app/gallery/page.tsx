export default function Gallery() {
  const placeholders = [
    { title: 'Circular Economy Hub', icon: '♻️', category: 'Projects' },
    { title: 'Solar Installation', icon: '☀️', category: 'Projects' },
    { title: 'NZEB Housing', icon: '🏠', category: 'Projects' },
    { title: 'Wolffia Cultivation', icon: '💧', category: 'R&D' },
    { title: 'Team Meeting', icon: '👥', category: 'Events' },
    { title: 'Community Outreach', icon: '🤝', category: 'Events' },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-fortis-green to-fortis-dark text-white py-20">
        <div className="container-s">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">📸 Gallery</h1>
          <p className="text-xl text-gray-300">Photos from our projects and events</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-s">
          <p className="text-center text-gray-600 mb-8">
            Photo gallery coming soon. Contact us to contribute photos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {placeholders.map((item, idx) => (
              <div key={idx} className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center flex-col">
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-medium text-center px-4">{item.title}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-s text-center">
          <p className="text-gray-600">
            Have photos to share?{' '}
            <a href="mailto:cadjatu@fortisinvicta.com" className="text-fortis-green font-bold">
              Send them to us
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}