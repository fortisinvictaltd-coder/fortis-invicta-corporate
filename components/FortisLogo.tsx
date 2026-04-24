'use client';

import { useState, useEffect } from 'react';

export default function FortisLogo() {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
    img.src = '/fortis-logo.png';
  }, []);

  if (imageExists) {
    return (
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <img 
            src="/fortis-logo.png" 
            alt="FORTIS INVICTA" 
            className="relative w-14 h-14 object-contain rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2"
          />
        </div>
        <div className="hidden md:block">
          <div className="font-bold text-lg text-[#1B4D3E] tracking-tight">FORTIS INVICTA</div>
          <div className="flex h-1 mt-0.5 rounded-full overflow-hidden">
            <div className="w-1/3 bg-red-600"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-green-600"></div>
          </div>
          <p className="text-xs text-gray-500 -mt-1">Built for The Gambia. Designed for the world.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative w-14 h-14 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent rounded-2xl"></div>
          <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-white/60 to-transparent rounded-tl-2xl"></div>
          <span className="text-white font-bold text-xl drop-shadow-md tracking-wider">FI</span>
          <div className="absolute -bottom-1 left-2 right-2 h-1 bg-amber-800/50 rounded-b-xl blur-sm"></div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="font-bold text-lg text-[#1B4D3E] tracking-tight">FORTIS INVICTA</div>
        <div className="flex h-1 mt-0.5 rounded-full overflow-hidden">
          <div className="w-1/3 bg-red-600"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-green-600"></div>
        </div>
        <p className="text-xs text-gray-500 -mt-1">Built for The Gambia. Designed for the world.</p>
      </div>
    </div>
  );
}