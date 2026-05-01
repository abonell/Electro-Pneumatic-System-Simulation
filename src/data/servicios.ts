// Servicios — single source of truth for service catalog.
// Used by: Servicios component, /servicios page, /servicio/[slug] dynamic route.

export interface Servicio {
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  iconPath: string;        // SVG <path d="…"> body
  imagen: string;
  imagenAlt: string;
  tags: string[];
  beneficios: string[];
  alcance: string[];       // What's included / scope items
  featured?: boolean;
}

export const servicios: Servicio[] = [
  {
    slug: 'electroneumatica-industrial',
    titulo: 'Electroneumática Industrial',
    descripcionCorta:
      'Diseño, instalación y mantenimiento de sistemas electroneumáticos para automatización de procesos.',
    descripcionLarga:
      'Diseñamos circuitos electroneumáticos de mando y potencia para líneas de producción, máquinas especiales y sistemas de transporte. Integramos PLC, válvulas direccionales, actuadores lineales y rotativos, sensores de posición y presión. Documentamos cada instalación con esquemáticos, listas de materiales y manual de operación.',
    iconPath:
      'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    imagen:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Tablero de conexiones eléctricas industriales con cableado multicolor',
    tags: ['Circuitos neumáticos', 'PLC', 'Sensórica', 'Válvulas'],
    beneficios: [
      'Reducción del 30–50% en tiempos de ciclo',
      'Diagnóstico remoto vía PLC',
      'Trazabilidad completa de cada actuador',
      'Garantía escrita de 12 meses',
    ],
    alcance: [
      'Análisis de proceso y memoria de cálculo',
      'Diseño de circuito eléctrico y neumático',
      'Suministro de componentes Festo, SMC, Camozzi',
      'Cableado, programación PLC y puesta en marcha',
      'Capacitación al personal de operación',
      'Documentación técnica entregable',
    ],
    featured: true,
  },
  {
    slug: 'domotica-residencial',
    titulo: 'Domótica e Instalaciones del Hogar',
    descripcionCorta:
      'Automatización residencial inteligente: iluminación, clima, seguridad y acceso.',
    descripcionLarga:
      'Convertimos casas en hogares inteligentes con escenarios programables, control por aplicación móvil y voz, y monitoreo remoto. Compatible con Google Home, Alexa, Apple HomeKit y plataformas KNX, Loxone, Z-Wave.',
    iconPath:
      'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
    imagen:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Tableta con interfaz de control de hogar inteligente sobre mesa moderna',
    tags: ['Smart Home', 'Control por app', 'Seguridad', 'IoT'],
    beneficios: [
      'Ahorro energético del 20–35%',
      'Control desde cualquier lugar del mundo',
      'Integración con sistemas existentes',
      'Soporte técnico continuo',
    ],
    alcance: [
      'Levantamiento y diseño de escenarios',
      'Tablero domótico y cableado estructurado',
      'Configuración de aplicaciones móviles',
      'Integración con asistentes de voz',
      'Cámaras IP y sistema de alarma',
      'Capacitación al usuario final',
    ],
  },
  {
    slug: 'instalaciones-electricas',
    titulo: 'Instalaciones Eléctricas',
    descripcionCorta:
      'Instalaciones residenciales, comerciales e industriales con apego a NOM-001-SEDE.',
    descripcionLarga:
      'Subestaciones eléctricas hasta 1000 kVA, tableros de distribución de baja y media tensión, corriente normal y regulada (UPS), tierras físicas, sistemas contra descargas atmosféricas y plantas de emergencia. Memoria técnica firmada por perito UVIE.',
    iconPath:
      'M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.818a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.845-.143z',
    imagen:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Electricista instalando cableado en tablero de distribución industrial',
    tags: ['Residencial', 'Industrial', 'Subestaciones', 'NOM-001-SEDE'],
    beneficios: [
      'Cumplimiento normativo garantizado',
      'Memoria de cálculo entregable',
      'Verificación UVIE incluida',
      'Garantía de 24 meses en mano de obra',
    ],
    alcance: [
      'Diagnóstico y memoria técnica',
      'Tramitología CFE y verificación UVIE',
      'Suministro e instalación de equipo',
      'Pruebas eléctricas de rigor',
      'Sistema de tierras y pararrayos',
      'Pólizas de mantenimiento opcional',
    ],
  },
  {
    slug: 'mantenimiento-industrial',
    titulo: 'Contratos de Mantenimiento',
    descripcionCorta:
      'Planes preventivo, correctivo y predictivo para garantizar disponibilidad operativa.',
    descripcionLarga:
      'Evitamos paros no programados con rutinas de inspección termográfica, análisis de vibración, medición de aislamientos y limpieza de tableros. SLA con respuesta en 24 h y reportes mensuales de KPIs.',
    iconPath:
      'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z',
    imagen:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Técnico industrial revisando maquinaria con laptop de diagnóstico',
    tags: ['Preventivo', 'Correctivo', 'Predictivo', 'SLA garantizado'],
    beneficios: [
      'Disponibilidad operativa >98%',
      'Reportes con fotografías y mediciones',
      'Atención emergencias 24/7',
      'Costo predecible por contrato anual',
    ],
    alcance: [
      'Inventario y criticidad de equipos',
      'Plan de rutinas preventivas',
      'Termografía y análisis de vibración',
      'Stock estratégico de refacciones',
      'Atención de emergencias prioritaria',
      'Reporte mensual ejecutivo',
    ],
  },
  {
    slug: 'modernizacion-tecnologica',
    titulo: 'Modernización Tecnológica',
    descripcionCorta:
      'Migración de relés a PLC, integración SCADA, HMI y arquitectura Industria 4.0.',
    descripcionLarga:
      'Sustituimos lógica cableada y controles obsoletos por plataformas modernas Siemens, Allen-Bradley, Schneider. Integramos OPC UA, MQTT y dashboards Grafana/PowerBI para visualización en tiempo real.',
    iconPath:
      'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    imagen:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Placa de circuito electrónico de control industrial con componentes de precisión',
    tags: ['PLC upgrade', 'SCADA', 'HMI', 'Industria 4.0'],
    beneficios: [
      'Visualización en tiempo real de KPIs',
      'Reducción de paros no programados',
      'Datos para mejora continua',
      'Compatibilidad futura asegurada',
    ],
    alcance: [
      'Ingeniería conceptual y básica',
      'Programación PLC y HMI',
      'Servidor SCADA y bases de datos',
      'Integración con ERP/MES existentes',
      'Pruebas FAT y SAT',
      'Capacitación operadores y mantenimiento',
    ],
    featured: true,
  },
  {
    slug: 'capacitacion-tecnica',
    titulo: 'Capacitación Técnica',
    descripcionCorta:
      'Formación profesional en electroneumática, automatización y PLC con bancos didácticos.',
    descripcionLarga:
      'Programas teórico-prácticos diseñados por nivel: básico, intermedio y avanzado. Bancos de prueba Festo y simuladores FluidSIM. Certificación interna y opcional con instituciones aliadas.',
    iconPath:
      'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
    imagen:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt:
      'Grupo de profesionales en sesión de capacitación técnica con material didáctico',
    tags: ['PLC básico/avanzado', 'Neumática', 'Cursos presenciales', 'Certificación'],
    beneficios: [
      'Reducción 60% en tiempos de diagnóstico',
      'Material didáctico incluido',
      'Constancia con valor curricular',
      'Cursos in-company a la medida',
    ],
    alcance: [
      'Diagnóstico de competencias',
      'Plan de capacitación a la medida',
      'Material teórico y de laboratorio',
      'Bancos didácticos Festo / SMC',
      'Evaluación práctica final',
      'Constancia y reporte por alumno',
    ],
  },
];

export function findServicio(slug: string): Servicio | undefined {
  return servicios.find(s => s.slug === slug);
}
