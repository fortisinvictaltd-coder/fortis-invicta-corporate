'use client';

import React from 'react';
import { FaFacebook, FaLink, FaLinkedin, FaWhatsapp, FaEnvelope, FaXTwitter } from 'react-icons/fa6';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
  image?: string;
  className?: string;
}

export default function SocialShare({ title, url, description = '', image = '', className = '' }: SocialShareProps) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`,
    x: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n\n${description}\n\nRead more: ${url}`)}`,
  } as const;

  const shareButtons = [
    { key: 'facebook', icon: FaFacebook, label: 'Facebook', color: 'bg-[#1877F2]' },
    { key: 'x', icon: FaXTwitter, label: 'X', color: 'bg-[#000000]' },
    { key: 'linkedin', icon: FaLinkedin, label: 'LinkedIn', color: 'bg-[#0A66C2]' },
    { key: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp', color: 'bg-[#25D366]' },
    { key: 'email', icon: FaEnvelope, label: 'Email', color: 'bg-gray-600' },
  ] as const;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {shareButtons.map(({ key, icon: Icon, label, color }) => (
        <a
          key={key}
          href={shareLinks[key]}
          target={key !== 'email' ? '_blank' : undefined}
          rel={key !== 'email' ? 'noopener noreferrer' : undefined}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white transition hover:opacity-80 ${color}`}
          aria-label={`Share on ${label}`}
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}

      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 rounded-lg bg-gray-700 px-3 py-2 text-sm text-white transition hover:bg-gray-600"
        aria-label="Copy link"
      >
        <FaLink size={16} />
        <span className="hidden sm:inline">Copy Link</span>
      </button>
    </div>
  );
}
