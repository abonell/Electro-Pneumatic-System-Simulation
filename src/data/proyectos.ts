// Proyectos — casos de éxito.

export interface Proyecto {
  slug: string;
  titulo: string;
  cliente: string;
  sector: string;          // matches Sector.slug
  fecha: string;           // ISO YYYY-MM
  ubicacion: string;
  resumen: string;
  desafio: string;
  solucion: string;
  resultados: string[];
  servicios: string[];     // Servicio.slug list
  imagen: string;
  imagenAlt: string;
  destacado?: boolean;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'modernizacion-linea-ensamble-automotriz',
    titulo: 'Modernización de línea de ensamble automotriz',
    cliente: 'Automotriz del Bajío',
    sector: 'industrial',
    fecha: '2025-08',
    ubicacion: 'Salamanca, Guanajuato',
    resumen:
      'Migración de PLC obsoleto S5 a S7-1500 en línea de ensamble crítica con dashboard SCADA en tiempo real.',
    desafio:
      'Líneas de ensamble con PLC Siemens S5 sin refacciones disponibles, paros frecuentes por componentes obsoletos y nula visibilidad de OEE en planta.',
    solucion:
      'Migración completa a S7-1500 + WinCC. Documentación de programa antiguo, traducción a TIA Portal, simulación previa, FAT en gabinete y SAT en planta durante ventana de mantenimiento. Dashboard Grafana con KPIs de OEE.',
    resultados: [
      'Cero paros no programados en 8 meses',
      'OEE pasó de 71% a 89%',
      'Tiempo de diagnóstico reducido 65%',
      'ROI alcanzado en 11 meses',
    ],
    servicios: ['modernizacion-tecnologica', 'electroneumatica-industrial'],
    imagen:
      'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Línea de ensamble automotriz con sistema de control modernizado',
    destacado: true,
  },
  {
    slug: 'subestacion-1000kva-farmaceutica',
    titulo: 'Subestación 1000 kVA para planta farmacéutica',
    cliente: 'Farmacéutica Integral S.A.',
    sector: 'industrial',
    fecha: '2025-03',
    ubicacion: 'Toluca, Estado de México',
    resumen:
      'Diseño, construcción y verificación UVIE de subestación compacta 23 kV / 480 V con redundancia para áreas GMP.',
    desafio:
      'Crecimiento de planta requería duplicar capacidad eléctrica con cero downtime y cumplimiento estricto FDA / GMP.',
    solucion:
      'Subestación tipo pedestal con celdas de media tensión Schneider, transformador encapsulado, tablero principal con TVSS clase I y sistema de tierras separado. Pruebas eléctricas de rigor y verificación UVIE.',
    resultados: [
      'Capacidad eléctrica duplicada sin paro',
      'Verificación UVIE aprobada en primera visita',
      'Tarifa CFE optimizada (HMC)',
      'Auditoría FDA aprobada sin observaciones',
    ],
    servicios: ['instalaciones-electricas'],
    imagen:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Subestación eléctrica industrial con tableros de distribución',
  },
  {
    slug: 'domotica-residencial-lomas',
    titulo: 'Domótica integral residencia Lomas de Chapultepec',
    cliente: 'Cliente residencial privado',
    sector: 'residencial',
    fecha: '2024-11',
    ubicacion: 'Ciudad de México',
    resumen:
      'Casa inteligente 850 m² con 18 escenarios, control por voz, cámaras IP y monitoreo energético.',
    desafio:
      'Integrar sistemas heterogéneos (iluminación KNX, clima Daikin, audio Sonos, alarma DSC) bajo una sola interfaz amigable para todos los habitantes.',
    solucion:
      'Procesador Loxone como cerebro central, gateway KNX, integración API con Sonos y Daikin, app móvil personalizada y panel táctil principal con escenarios por hora del día.',
    resultados: [
      '23% de ahorro energético en primer año',
      '18 escenarios programados',
      'Control unificado en app móvil',
      'Soporte continuo post-instalación',
    ],
    servicios: ['domotica-residencial', 'instalaciones-electricas'],
    imagen:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Sistema de control domótico en residencia moderna',
  },
  {
    slug: 'mantenimiento-planta-alimentos',
    titulo: 'Contrato anual de mantenimiento — planta de alimentos',
    cliente: 'Alimentos del Valle S.A. de C.V.',
    sector: 'industrial',
    fecha: '2024-01',
    ubicacion: 'Cuautitlán Izcalli, Estado de México',
    resumen:
      'Contrato anual con SLA 24 h para 47 equipos críticos de producción y servicios auxiliares.',
    desafio:
      'Producción 24/7 con paros frecuentes por electroventiladores, motores y tableros sin programa de mantenimiento.',
    solucion:
      'Inventario y matriz de criticidad, rutinas semanales/mensuales, termografía trimestral, stock de refacciones consignadas en sitio y atención de emergencias por whatsapp directo.',
    resultados: [
      'Disponibilidad operativa >99.2%',
      '4 emergencias atendidas <90 min',
      'Reducción 41% en costos de paro',
      'Renovación de contrato por 3 años',
    ],
    servicios: ['mantenimiento-industrial'],
    imagen:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Técnico realizando mantenimiento preventivo en planta industrial',
    destacado: true,
  },
  {
    slug: 'edificio-corporativo-domotica',
    titulo: 'Automatización edificio corporativo 12 niveles',
    cliente: 'Corporativo Polanco',
    sector: 'corporativo',
    fecha: '2024-07',
    ubicacion: 'Ciudad de México',
    resumen:
      'BMS para iluminación, HVAC y acceso en edificio corporativo de 14,000 m² con dashboard centralizado.',
    desafio:
      'Edificio existente sin BMS, con altos costos energéticos y sin control centralizado de áreas comunes.',
    solucion:
      'Plataforma Niagara N4 integrando BACnet de HVAC Carrier, control DALI de iluminación y lectoras de proximidad. Dashboard ejecutivo con KPIs de consumo y comfort por piso.',
    resultados: [
      '28% ahorro energético en primer año',
      'BMS centralizado para 14,000 m²',
      'Reportes ejecutivos automáticos',
      'Certificación LEED Gold lograda',
    ],
    servicios: ['domotica-residencial', 'instalaciones-electricas', 'modernizacion-tecnologica'],
    imagen:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Edificio corporativo moderno con sistema de gestión de edificios',
  },
  {
    slug: 'capacitacion-plc-industrial',
    titulo: 'Programa de capacitación PLC — 12 técnicos',
    cliente: 'Plásticos Modernos CDMX',
    sector: 'industrial',
    fecha: '2024-05',
    ubicacion: 'Iztapalapa, CDMX',
    resumen:
      'Curso intensivo de 80 horas en programación PLC Siemens TIA Portal con bancos de prueba en sitio.',
    desafio:
      'Personal técnico dependiente de proveedores externos para diagnóstico de PLC, con tiempos de respuesta superiores a 6 horas.',
    solucion:
      'Programa modular: básico (lógica de contactos), intermedio (bloques FB/FC, datos estructurados) y avanzado (comunicación Profinet, HMI). Banco didáctico Festo permanente cedido durante el curso.',
    resultados: [
      '12 técnicos certificados internos',
      'Tiempo de diagnóstico reducido a <90 min',
      'Material didáctico permanente',
      'Programa replicable anualmente',
    ],
    servicios: ['capacitacion-tecnica'],
    imagen:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80&fm=webp',
    imagenAlt: 'Sesión de capacitación técnica en programación de PLC industrial',
  },
];

export function findProyecto(slug: string): Proyecto | undefined {
  return proyectos.find(p => p.slug === slug);
}
