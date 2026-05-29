import type { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    slug: 'trade-ai',
    role: 'Builder / Founder',
    organization: 'trade.ai',
    url: 'https://tradeai.ar',
    location: 'Santa Fe, Argentina',
    startDate: '2024-01',
    summary:
      'Plataforma de inteligencia para comercio exterior construida con IA: RAG, embeddings e integración de APIs de modelos. Convierte normativa, NCM y datos de exportación en respuestas accionables.',
    highlights: [
      'Diseño y desarrollo end-to-end de la plataforma',
      'Pipeline de RAG sobre corpus de normativa NCM y AFIP',
      'Integración con APIs de modelos (Claude, OpenAI)',
      'Deploy en producción — plataforma funcional con usuarios reales',
    ],
    order: 0,
  },
  {
    slug: 'acice',
    role: 'Data Analyst',
    organization: 'Agencia de Cooperación, Inversiones y Comercio Exterior de la Ciudad de Santa Fe',
    location: 'Santa Fe, Argentina',
    startDate: '2025-09',
    endDate: '2026-03',
    summary:
      'Como analista de datos promoví la creación y gestión de una base de datos sobre las exportaciones 2025 de la Ciudad de Santa Fe, para facilitar el acceso a información estratégica en la toma de decisiones de la gestión pública santafesina.',
    highlights: [
      'Organización de eventos de promoción y capacitación en comercio exterior entre empresas santafesinas (Semana Comex y Programa Primer Exportador).',
      'Gestión, análisis y publicación de datos de comercio exterior.',
      'Redacción de informes y documentos técnicos de comercio exterior para difusión institucional.',
    ],
    order: 1,
  },
  /*{
    slug: 'banco-santa-fe',
    role: 'TODO: completar desde CV',
    organization: 'Banco de Santa Fe',
    location: 'Santa Fe, Argentina',
    startDate: 'TODO: completar desde CV',
    endDate: 'TODO: completar desde CV',
    summary: 'TODO: completar desde CV — descripción del rol y responsabilidades.',
    highlights: [],
    order: 2,
  },*/
];
