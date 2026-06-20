export const SOCIAL_CONFIG = {
  facebook: {
    url: 'https://www.facebook.com/profile.php?id=61580283041701',
    handle: '@fortisinvictaltd',
    name: 'Facebook',
    icon: 'FaFacebook',
    color: '#1877F2',
  },
  instagram: {
    url: 'https://www.instagram.com/fortisinvictaltd/',
    handle: '@fortisinvictaltd',
    name: 'Instagram',
    icon: 'FaInstagram',
    color: '#E4405F',
  },
  x: {
    url: 'https://x.com/fortisinvicta',
    handle: '@fortisinvicta',
    name: 'X',
    icon: 'FaXTwitter',
    color: '#000000',
  },
  youtube: {
    url: 'https://www.youtube.com/@fortisinvictaltd',
    handle: '@fortisinvictaltd',
    name: 'YouTube',
    icon: 'FaYoutube',
    color: '#FF0000',
  },
  linkedin: {
    url: 'https://www.linkedin.com/company/108859116/admin/dashboard/',
    handle: 'FORTIS INVICTA LTD',
    name: 'LinkedIn',
    icon: 'FaLinkedin',
    color: '#0A66C2',
  },
  whatsapp: {
    url: 'https://wa.me/2202572911',
    number: '+2202572911',
    name: 'WhatsApp',
    icon: 'FaWhatsapp',
    color: '#25D366',
  },
} as const;

export type SocialPlatform = keyof typeof SOCIAL_CONFIG;
