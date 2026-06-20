import Link from 'next/link';
import SocialButtons from './SocialButtons';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Eco-Tech', href: '/eco-tech' },
    { name: 'Circular Hub', href: '/circular-hub' },
    { name: 'Partners', href: '/partners/map' },
    { name: 'Airport', href: '/airport' },
    { name: 'FORTIS OS', href: '/fortis-os' },
    { name: 'Housing', href: '/housing' },
    { name: 'Solar', href: '/solar' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400">FORTIS INVICTA</h3>
            <p className="text-gray-400 text-sm mt-4">Powering The Gambia's Future</p>
            <div className="mt-4">
              <SocialButtons variant="icon" size="sm" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><strong>FORTIS INVICTA LTD, THE COMMAND HQ</strong></li>
              <li><strong>Address:</strong> Tranquil Behind AGIB Bank, The Gambia</li>
              <li><strong>Phone/WhatsApp:</strong> <a href="tel:+2202572911" className="hover:text-white transition">+220 257 2911</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@fortisinvicta.com" className="hover:text-white transition">info@fortisinvicta.com</a></li>
              <li className="pt-2 mt-2 border-t border-gray-700">
                <strong>Opening Hours:</strong><br />
                Monday - Thursday: 08:00 - 16:00<br />
                Friday: 08:00 - 12:00<br />
                Saturday - Sunday: Closed
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/profile.php?id=61580283041701" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm transition">Facebook</a>
              <a href="https://www.instagram.com/fortisinvictaltd/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 px-3 py-2 rounded text-sm transition">Instagram</a>
              <a href="https://x.com/fortisinvicta" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded text-sm transition">X</a>
              <a href="https://www.youtube.com/@fortisinvictaltd" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded text-sm transition">YouTube</a>
              <a href="https://www.linkedin.com/company/108859116/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-900 px-3 py-2 rounded text-sm transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 FORTIS INVICTA LTD. All rights reserved. | Powering The Gambia's Future</p>
        </div>
      </div>
    </footer>
  );
}
