import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SOCIAL_CONFIG } from '@/lib/social-config';

interface SocialButtonsProps {
  variant?: 'icon' | 'text' | 'full';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showCounts?: boolean;
}

export default function SocialButtons({ variant = 'icon', size = 'md', className = '', showCounts = false }: SocialButtonsProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const platforms = [
    { key: 'facebook', icon: FaFacebook, label: 'Facebook' },
    { key: 'instagram', icon: FaInstagram, label: 'Instagram' },
    { key: 'x', icon: FaXTwitter, label: 'X' },
    { key: 'youtube', icon: FaYoutube, label: 'YouTube' },
    { key: 'linkedin', icon: FaLinkedin, label: 'LinkedIn' },
    { key: 'whatsapp', icon: FaWhatsapp, label: 'WhatsApp' },
  ] as const;

  const getButtonClasses = () => {
    const base = 'inline-flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg';

    if (variant === 'icon') {
      return `${base} ${sizeClasses[size]} bg-gray-800 text-white`;
    }

    if (variant === 'text') {
      return `${base} ${sizeClasses[size]} bg-transparent text-gray-400`;
    }

    return `${base} px-4 py-2 bg-gray-800 text-white gap-2`;
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {platforms.map(({ key, icon: Icon, label }) => {
        const config = SOCIAL_CONFIG[key];

        return (
          <a
            key={key}
            href={config.url}
            target="_blank"
            rel="noopener noreferrer"
            className={getButtonClasses()}
            aria-label={`Follow us on ${label}`}
            style={variant === 'icon' ? { backgroundColor: config.color } : { color: config.color }}
          >
            <Icon size={iconSizes[size]} />
            {variant === 'full' && <span className="text-sm font-medium">{label}</span>}
            {variant === 'text' && <span className="ml-1 text-sm font-medium">{config.handle}</span>}
            {showCounts && <span className="sr-only">Live count unavailable</span>}
          </a>
        );
      })}
    </div>
  );
}
