// Sectores atendidos.

export interface Sector {
  slug: string;
  nombre: string;
  descripcion: string;
  ejemplos: string[];
  iconPath: string;
}

export const sectores: Sector[] = [
  {
    slug: 'industrial',
    nombre: 'Industrial',
    descripcion:
      'Plantas de manufactura, procesos continuos y discretos. Automatización de líneas, mantenimiento crítico, modernización de tecnologías obsoletas.',
    ejemplos: ['Automotriz', 'Alimentos y bebidas', 'Farmacéutica', 'Plásticos', 'Metalmecánica'],
    iconPath:
      'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
  },
  {
    slug: 'residencial',
    nombre: 'Residencial Smart Home',
    descripcion:
      'Casas inteligentes con escenarios programables, control por voz y app, integración multi-marca y soporte continuo.',
    ejemplos: ['Residencias unifamiliares', 'Departamentos', 'Casas de campo', 'Penthouses'],
    iconPath:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75',
  },
  {
    slug: 'corporativo',
    nombre: 'Edificios Corporativos',
    descripcion:
      'Sistemas BMS para iluminación, HVAC, acceso y monitoreo energético. Certificaciones LEED y reducción de OPEX.',
    ejemplos: ['Oficinas corporativas', 'Centros comerciales', 'Hoteles', 'Hospitales'],
    iconPath:
      'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    slug: 'comercial',
    nombre: 'Comercial y Servicios',
    descripcion:
      'Plazas, restaurantes, gimnasios y locales comerciales. Instalaciones eléctricas, domótica básica y mantenimiento preventivo.',
    ejemplos: ['Restaurantes', 'Tiendas', 'Gimnasios', 'Clínicas'],
    iconPath:
      'M2.25 3h19.5v6H2.25V3zm0 0v9.75M2.25 9v.75m0 0a3 3 0 003 3h.75m13.5-3.75v.75m0 0a3 3 0 01-3 3h-.75m-9 0h9m-9 0v6.75m9-6.75v6.75m-9 0h9',
  },
];

export function findSector(slug: string): Sector | undefined {
  return sectores.find(s => s.slug === slug);
}
