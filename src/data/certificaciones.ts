// Normas y certificaciones aplicables.

export interface Certificacion {
  codigo: string;
  nombre: string;
  descripcion: string;
}

export const certificaciones: Certificacion[] = [
  {
    codigo: 'NOM-001-SEDE',
    nombre: 'Instalaciones Eléctricas',
    descripcion:
      'Norma oficial mexicana para instalaciones eléctricas. Todos nuestros trabajos cumplen y se verifican con UVIE acreditada.',
  },
  {
    codigo: 'NOM-029-STPS',
    nombre: 'Seguridad Eléctrica',
    descripcion:
      'Mantenimiento de instalaciones eléctricas en lugares de trabajo. Procedimientos LOTO y permisos de trabajo en cada intervención.',
  },
  {
    codigo: 'IEC 61131-3',
    nombre: 'Programación PLC',
    descripcion:
      'Estándar internacional para lenguajes de programación de controladores lógicos. Aplicado en todos nuestros desarrollos.',
  },
  {
    codigo: 'IEC 61439',
    nombre: 'Tableros Eléctricos',
    descripcion:
      'Diseño, construcción y verificación de tableros de baja tensión. Pruebas de tipo y de rutina documentadas.',
  },
  {
    codigo: 'ISO 50001',
    nombre: 'Gestión Energética',
    descripcion:
      'Implementación de sistemas de gestión de la energía para edificios corporativos e industriales.',
  },
  {
    codigo: 'IEC 60204-1',
    nombre: 'Seguridad de Maquinaria',
    descripcion:
      'Equipo eléctrico de máquinas industriales. Aplicado en automatización de líneas de producción.',
  },
];
