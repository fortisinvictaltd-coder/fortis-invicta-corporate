"use client";

import { useState } from "react";

interface LocationMapProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
  website?: string;
  facebook?: string;
  phone?: string;
}

export default function LocationMap({ name, address, lat, lng, website, facebook, phone }: LocationMapProps) {
  const [view, setView] = useState<"map" | "streetview">("map");
  const [fromLocation, setFromLocation] = useState("");

  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=&q=${lat},${lng}&zoom=17&maptype=satellite`;
  const streetViewUrl = `https://www.google.com/maps/embed/v1/streetview?key=&location=${lat},${lng}&heading=210&pitch=10&fov=90`;
  const googleEarthUrl = `https://earth.google.com/web/search/${lat},${lng}`;

  const handleDirections = () => {
    if (fromLocation) {
      window.open(`https://www.google.com/maps/dir/${encodeURIComponent(fromLocation)}/${lat},${lng}`, "_blank");
    } else {
      window.open(`https://www.google.com/maps/dir//${lat},${lng}`, "_blank");
    }
  };

  const handleWebsite = () => {
    if (website) {
      window.open(website, "_blank");
    } else if (facebook) {
      window.open(facebook, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button onClick={() => setView("map")} className={`flex-1 px-4 py-3 text-center font-medium transition ${view === "map" ? "text-fortis-gold border-b-2 border-fortis-gold bg-white" : "text-gray-500 hover:text-gray-700"}`}>
          🗺️ Satellite Map
        </button>
        <button onClick={() => setView("streetview")} className={`flex-1 px-4 py-3 text-center font-medium transition ${view === "streetview" ? "text-fortis-gold border-b-2 border-fortis-gold bg-white" : "text-gray-500 hover:text-gray-700"}`}>
          🏙️ 360° Street View
        </button>
      </div>

      <div className="relative h-80 md:h-96">
        {view === "map" ? (
          <iframe src={mapsEmbedUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${name} Map`} />
        ) : (
          <iframe src={streetViewUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${name} Street View`} />
        )}
      </div>

      <div className="p-5 bg-gray-50">
        <h3 className="text-xl font-bold text-fortis-green mb-2">{name}</h3>
        <p className="text-gray-600 mb-3 flex items-center gap-2"><span>📍</span> {address}</p>
        {phone && <p className="text-gray-600 mb-3 flex items-center gap-2"><span>📞</span> {phone}</p>}

        <div className="flex flex-wrap gap-3 mt-4">
          <a href={googleEarthUrl} target="_blank" rel="noopener noreferrer" className="bg-fortis-green text-white px-4 py-2 rounded-lg hover:bg-fortis-dark transition text-sm flex items-center gap-2">
            🌍 Open in Google Earth 3D
          </a>
          <button onClick={handleWebsite} className="bg-fortis-gold text-fortis-dark px-4 py-2 rounded-lg hover:bg-fortis-dark hover:text-fortis-gold transition text-sm flex items-center gap-2">
            🌐 Visit Website ↗
          </button>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">🚗 Get Directions</label>
          <div className="flex flex-wrap gap-2">
            <input type="text" placeholder="Your starting location..." value={fromLocation} onChange={(e) => setFromLocation(e.target.value)} className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fortis-green text-sm" />
            <button onClick={handleDirections} className="bg-fortis-green text-white px-5 py-2 rounded-lg hover:bg-fortis-dark transition text-sm">
              Get Directions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}