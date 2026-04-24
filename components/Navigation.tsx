"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import FortisLogo from './FortisLogo';
import GambianFlag from './GambianFlag';

const navLinks = [
  { name: 'Home',        href: '/' },
  { name: 'Eco-Tech',    href: '/eco-tech' },
  { name: 'Circular Hub', href: '/circular-hub' },
  { name: 'Partners',    href: '/partners/map' },
  { name: 'Airport',     href: '/airport' },
  { name: 'FORTIS OS',   href: '/fortis-os' },
  { name: 'Housing',     href: '/housing' },
  { name: 'Solar',       href: '/solar' },
  { name: 'About',       href: '/about' },
  { name: 'Contact',     href: '/contact' },
];

function BusinessHours() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const gmtOffset = 0;
      const gambiaTime = new Date(now.getTime() + (gmtOffset - now.getTimezoneOffset()) * 60000);
      gambiaTime.setHours(gambiaTime.getHours());
      const hours = gambiaTime.getHours();
      const mins = gambiaTime.getMinutes().toString().padStart(2, '0');
      const isBusinessHours = hours >= 9 && hours < 18;
      setTime(`${hours.toString().padStart(2, '0')}:${mins} GMT${isBusinessHours ? ' • Open' : ' • Closed'}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-sm text-gray-300 hidden lg:block">{time}</span>;
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-fortis-green text-white sticky top-0 z-50 shadow-lg">
      <div className="container-s flex justify-between items-center py-3">

        {/* Logo */}
        <FortisLogo />

        {/* Desktop nav */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-fortis-gold transition-colors text-sm">
              {link.name}
            </Link>
          ))}
          <BusinessHours />
        </div>

        {/* Right side — flag + mobile toggle */}
        <div className="flex items-center gap-3">
          <GambianFlag size="sm" showText />
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-fortis-green pb-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 hover:text-fortis-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
