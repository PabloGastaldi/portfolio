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
    role: 'Pasante de comercio exterior',
    organization: 'ACICE',
    location: 'Santa Fe, Argentina',
    startDate: 'TODO: completar desde CV',
    endDate: 'TODO: completar desde CV',
    summary:
      'TODO: completar desde CV — descripción de responsabilidades en la pasantía de comex.',
    highlights: [
      'Clasificación de mercaderías según NCM',
      'Contacto con despachantes y organismos públicos',
      'Creación de base de datos de exportaciones de empresas de Santa Fe',
      'Análisis de datos para identificar oportunidades de exportación',
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
