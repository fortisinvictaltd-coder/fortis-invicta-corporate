"use client";

import LocationMap from "@/components/LocationMap";

const PARTNERS = [
  { id: "fortis", name: "FORTIS INVICTA LTD", address: "Tranquil, Behind AGIB Bank, The Gambia", lat: 13.4549, lng: -16.5775, website: "https://fortis-invicta.vercel.app", phone: "+220 2572911", mouDate: "Operating" },
  { id: "girav", name: "GIRAV - Gambia Investment & Real Estate Agency", address: "Kairaba Avenue, Opposite Fajara Police Station, The Gambia", lat: 13.4525, lng: -16.6790, website: "https://giragm.com", phone: "+220 449 5515", mouDate: "Active" },
  { id: "motie", name: "MOTIE - Ministry of Trade, Industry & Employment", address: "The Quadrangle, Banjul, The Gambia", lat: 13.4545, lng: -16.5775, website: "https://motie.gov.gm", phone: "+220 422 8570", mouDate: "March 2026" },
  { id: "doa", name: "DoA - Department of Agriculture", address: "Central Agricultural Station, Yundum, The Gambia", lat: 13.3390, lng: -16.6550, website: "https://moa.gov.gm", phone: "+220 446 8335", mouDate: "March 2026" },
  { id: "nea", name: "NEA - National Environment Agency", address: "Kairaba Avenue, Kanifing, The Gambia", lat: 13.4520, lng: -16.6785, website: "https://nea.gm", phone: "+220 449 5515", mouDate: "March 2026" },
  { id: "arim", name: "ARIM - Applied Research, Innovation & Manufacturing", address: "Sukuta–Salagi, The Gambia", lat: 13.4185, lng: -16.6982, website: "https://www.findglocal.com/GM/Banjul/1777870888952846/Applied-Research-Innovation-and-Manufacturing", mouDate: "Active" },
];

export default function PartnersMapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-fortis-green/5 to-white py-12 px-4">
      <div className="container-s max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-fortis-green mb-4">🤝 Our Partners</h1>
          <p className="text-gray-600 text-lg">Government agencies, institutions, and technology collaborators</p>
          <div className="inline-block mt-4 bg-fortis-green/10 text-fortis-green px-4 py-2 rounded-full text-sm font-medium">
            ✓ MOUs signed with MOTIE, DoA, NEA (March 2026)
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {PARTNERS.map((partner) => (
            <LocationMap
              key={partner.id}
              name={partner.name}
              address={partner.address}
              lat={partner.lat}
              lng={partner.lng}
              website={partner.website}
              phone={partner.phone}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-fortis-green/10 to-fortis-gold/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-fortis-green mb-4">📜 Active Memoranda of Understanding (MOUs)</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4">
              <span className="font-bold text-fortis-green block">MOTIE</span>
              <span className="text-sm text-gray-600">Trade & Industry Policy</span>
              <div className="text-green-600 text-xs mt-1">✓ Signed Mar 2026</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <span className="font-bold text-fortis-green block">DoA</span>
              <span className="text-sm text-gray-600">Agriculture Extension</span>
              <div className="text-green-600 text-xs mt-1">✓ Signed Mar 2026</div>
            </div>
            <div className="bg-white rounded-xl p-4">
              <span className="font-bold text-fortis-green block">NEA</span>
              <span className="text-sm text-gray-600">Environmental Compliance</span>
              <div className="text-green-600 text-xs mt-1">✓ Signed Mar 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}