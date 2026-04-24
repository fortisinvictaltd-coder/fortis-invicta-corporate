import Link from 'next/link';
import GambianFlag from './GambianFlag';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fortis-dark text-white py-12">
      <div className="container-s grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2 text-fortis-gold">♦ FORTIS INVICTA LTD</h3>
          <div className="mb-3">
            <GambianFlag size="md" showText />
          </div>
          <p className="text-gray-400 text-sm">Building The Gambia&apos;s Sustainable Future</p>
          <p className="text-gray-400 text-xs mt-2">Built for The Gambia. Designed for the world.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/circular-economy">Circular Economy Hub</Link></li>
            <li><Link href="/fortis-os">FORTIS OS Platform</Link></li>
            <li><Link href="/eco-tech">Eco-Tech Housing</Link></li>
            <li><Link href="/solar">Solar Systems</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Strategic Alliances</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/partners/eoi">Partnership Inquiry</Link></li>
            <li><Link href="/partners/eoi">EOI Submission</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/partners">Current Partners</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/wolffia">Wolffia-AWG</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">Tranquil, Behind AGIB Bank</p>
          <p className="text-gray-400 text-sm">The Gambia</p>
          <p className="text-gray-400 text-sm mt-2">+220 2572911</p>
          <a href="mailto:fortisinvictainfo@gmail.com" className="text-gray-400 text-sm hover:text-fortis-gold">
            fortisinvictainfo@gmail.com
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="container-s mt-8 pt-8 border-t border-gray-700">
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://facebook.com/fortisinvicta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-fortis-gold/20 rounded-full flex items-center justify-center hover:bg-fortis-gold/40 transition">
            <svg className="w-5 h-5 text-fortis-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://instagram.com/fortisinvicta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-fortis-gold/20 rounded-full flex items-center justify-center hover:bg-fortis-gold/40 transition">
            <svg className="w-5 h-5 text-fortis-gold" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
          </a>
          <a href="https://linkedin.com/company/fortis-invicta-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-fortis-gold/20 rounded-full flex items-center justify-center hover:bg-fortis-gold/40 transition">
            <svg className="w-5 h-5 text-fortis-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M20.4 20.4H16.8V14c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9v6.7H9.3s.1-10.9 0-12h3.6v1.7c.5-.8 1.4-1.9 3.5-1.9 2.5 0 4.4 1.6 4.4 5.1v7zM5.6 7.2C4.4 7.2 3.6 6.3 3.6 5.2c0-1.1.8-2 2.1-2s2.1.9 2.1 2c0 1.1-.8 2-2.1 2zm-1.9 13.2h3.8v-12H3.7v12z"/></svg>
          </a>
          <a href="https://x.com/fortisinvicta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-fortis-gold/20 rounded-full flex items-center justify-center hover:bg-fortis-gold/40 transition">
            <svg className="w-5 h-5 text-fortis-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M18.2 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.1 22H1.8l7.7-8.8L1 2h6.8l4.7 6.2L18.2 2zm-1.2 18h1.8L7.1 3.9H5.2L17 20z"/></svg>
          </a>
          <a href="https://youtube.com/@fortisinvicta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-fortis-gold/20 rounded-full flex items-center justify-center hover:bg-fortis-gold/40 transition">
            <svg className="w-5 h-5 text-fortis-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.2-2.2C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.3.5c-1.1.3-1.9 1.1-2.2 2.2C0 7.8 0 12 0 12s0 4.2.5 5.8c.3 1.1 1.1 1.9 2.2 2.2 1.6.5 9.3.5 9.3.5s7.7 0 9.3-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.6.5-5.8.5-5.8s0-4.2-.5-5.8zM9.5 15.2v-6.4l6.2 3.2-6.2 3.2z"/></svg>
          </a>
        </div>

        <div className="text-center mb-4">
          <p className="text-fortis-gold text-xs font-bold">🔒 UJRIS Protected</p>
          <p className="text-gray-500 text-xs">All contracts stored in immutable evidence vault • GDPR compliant</p>
        </div>

        <div className="flex justify-center mb-4">
          <GambianFlag size="sm" showText />
        </div>

        <p className="text-center text-gray-500 text-xs">
          © {currentYear} FORTIS INVICTA LTD. All rights reserved.{' '}
          <span className="text-gray-600">
            FORTIS OS™, IKENGA AI™, UJRIS™, UJU CYCLE™ are trade marks of UJU GROUP LIMITED (UK).
            FORTIS INVICTA LTD is the licensed operator in The Gambia.
          </span>
        </p>
      </div>
    </footer>
  );
}
