// Central business config + URL helpers.
// Single source of truth for phones, emails, WhatsApp, address.

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  description: string;
  whatsapp: {
    e164: string;
    defaultMessage: string;
  };
  phones: { label: string; e164: string; display: string }[];
  emails: { label: string; address: string }[];
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    lat: number;
    lng: number;
  };
  hours: { days: string; opens: string; closes: string }[];
}

// TODO: replace WhatsApp number with real business number before launch
export const SITE: SiteConfig = {
  name: 'Electroneumática Interactiva',
  shortName: 'EI',
  url: 'https://electroneumaticainteractiva.com',
  description:
    '34 años de experiencia en automatización industrial, electroneumática, domótica e instalaciones eléctricas. Mantenimiento, modernización y soluciones integrales en Estado de México.',
  whatsapp: {
    e164: '+526692629862',
    defaultMessage:
      'Hola, me interesa conocer sus servicios de automatización e instalaciones eléctricas.',
  },
  phones: [
    { label: 'Oficina',  e164: '+525547803794', display: '(55) 4780 3794' },
    { label: 'Director', e164: '+525523343840', display: '(55) 2334 3840' },
  ],
  emails: [
    { label: 'Dirección',  address: 'director@electroneumaticainteractiva.com' },
    { label: 'Comercial',  address: 'cardosojosemanuel@hotmail.com' },
  ],
  address: {
    street:     'Venus 94, Izcalli Rinconada',
    city:       'Tultitlán',
    region:     'Estado de México',
    postalCode: '54930',
    country:    'MX',
    lat:        19.6474,
    lng:       -99.1924,
  },
  hours: [
    { days: 'Lunes a viernes', opens: '08:00', closes: '18:00' },
    { days: 'Sábado',          opens: '09:00', closes: '14:00' },
  ],
};

/** Build a wa.me URL with optional pre-filled message. */
export function waUrl(message?: string): string {
  const text = encodeURIComponent(message ?? SITE.whatsapp.defaultMessage);
  return `https://wa.me/${SITE.whatsapp.e164}?text=${text}`;
}

/** Prefix path with Astro's base path (handles GitHub Pages deploy base). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p    = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
