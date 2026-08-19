import type { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    slug: 'diplomacia-activa',
    role: 'Analista Geopolítico / Redactor',
    organization: 'Diplomacia Activa',
    url: 'https://diploactiva.com',
    location: 'Remoto',
    startDate: '2026-01',
    summary:
      'Análisis semanal de acontecimientos internacionales de alto impacto y artículos mensuales en profundidad sobre asuntos globales.',
    highlights: [
      'Traducción de temas políticos y económicos complejos en análisis claros y estructurados.',
      'Contenido dirigido a audiencia general y profesional.',
    ],
    order: 0,
  },
  {
    slug: 'trade-ai',
    role: 'Gestión de datos y procesos',
    organization: 'trade.ai (proyecto propio)',
    url: 'https://tradeai.ar',
    location: 'Santa Fe, Argentina',
    startDate: '2025-12',
    summary:
      'Desarrollo de una plataforma basada en IA para asistir en procesos de comercio exterior en Argentina.',
    highlights: [
      'Integración y estructuración de bases de datos normativas (NCM, aranceles, regulaciones) para su consulta automatizada.',
      'Prototipo funcional capaz de responder consultas sobre importaciones y exportaciones con base en la normativa vigente.',
    ],
    order: 1,
  },
  {
    slug: 'acice',
    role: 'Pasante',
    organization: 'Agencia de Cooperación, Inversiones y Comercio Exterior de la Ciudad de Santa Fe',
    location: 'Santa Fe, Argentina',
    startDate: '2025-09',
    endDate: '2026-03',
    summary:
      'Pasantía en el área de comercio exterior con foco en gestión, análisis y publicación de datos.',
    highlights: [
      'Organización de eventos vinculados al comercio exterior (Semana Comex).',
      'Gestión, análisis y publicación de datos de comercio exterior.',
      'Redacción de documentos de carácter público.',
      'Creación y gestión de una base de datos sobre las exportaciones 2025 de la Ciudad de Santa Fe. A partir de ese trabajo, y con Python y Tableau, se encuentra en desarrollo el Perfil Exportador de la ciudad.',
    ],
    order: 2,
  },
  {
    slug: 'banco-santa-fe',
    role: 'Cajero Bancario (contrato temporal)',
    organization: 'Nuevo Banco de Santa Fe',
    location: 'Santa Fe, Argentina',
    startDate: '2024-12',
    endDate: '2025-05',
    summary:
      'Atención al cliente y operatoria de caja en sucursales de la red.',
    highlights: [
      'Comunicación efectiva con los clientes.',
      'Adaptabilidad y toma de decisiones en entornos de ritmo acelerado.',
      'Trabajo colaborativo con distintos departamentos internos.',
      'Solicitado por distintas sucursales por rendimiento y confiabilidad; asumí responsabilidades adicionales por la confianza ganada.',
    ],
    order: 3,
  },
  {
    slug: 'mohegan-sun',
    role: 'Atención al cliente — Work & Travel',
    organization: 'Mohegan Sun',
    location: 'Norwich, CT, EE.UU.',
    startDate: '2022-12',
    endDate: '2023-02',
    summary:
      'Atención al cliente en un entorno minorista de alta demanda, asistiendo a una clientela heterogénea.',
    highlights: [
      'Comunicación profesional y clara en inglés en situaciones de alta presión.',
      'Adaptación rápida a los estándares laborales de EE.UU.',
      'Perfeccionamiento del idioma inglés.',
    ],
    order: 4,
  },
  {
    slug: 'rios-de-gula',
    role: 'Asistente de Atención al Cliente',
    organization: 'Salón de Eventos "Ríos de Gula"',
    location: 'Santa Fe, Argentina',
    startDate: '2019-12',
    endDate: '2024-06',
    summary:
      'Atención al cliente durante eventos y recepciones, con coordinación operativa del servicio.',
    highlights: [
      'Coordinación con el personal del evento para asegurar un servicio fluido.',
      'Eficiencia en las operaciones de caja y en la atención al cliente, contribuyendo a la satisfacción de los asistentes.',
    ],
    order: 5,
  },
];
