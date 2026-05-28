import type { Experience } from '@/types/content';

export const experiences: Experience[] = [
  {
    slug: 'trade-ai',
    role: 'Fundador y desarrollador',
    organization: 'trade.ai',
    location: 'Santa Fe, Argentina',
    startDate: '2024-01',
    summary:
      'Construí una plataforma de inteligencia comercial para importadores y exportadores argentinos usando RAG, embeddings y APIs de modelos de lenguaje.',
    highlights: [
      'Diseño y desarrollo end-to-end de la plataforma',
      'Pipeline de RAG sobre corpus de normativa NCM y AFIP',
      'Integración con APIs de modelos (Claude, OpenAI)',
      'Deploy en producción con usuarios reales',
    ],
    order: 0,
  },
  {
    slug: 'acice',
    role: 'Pasante de comercio exterior',
    organization: 'ACICE',
    location: 'Santa Fe, Argentina',
    startDate: '2023-01',
    endDate: '2023-12',
    summary:
      'Asistencia operativa en operaciones de comercio exterior: clasificación arancelaria, liquidaciones, trámites ante Aduana y AFIP.',
    highlights: [
      'Clasificación de mercaderías según NCM',
      'Armado de liquidaciones de exportación e importación',
      'Contacto con despachantes y organismos públicos',
    ],
    order: 1,
  },
  {
    slug: 'banco-santa-fe',
    role: 'Pasante',
    organization: 'Banco de Santa Fe',
    location: 'Santa Fe, Argentina',
    startDate: '2022-06',
    endDate: '2022-12',
    summary:
      'Pasantía en el área de análisis de datos. Trabajo con reportes, dashboards y datos operativos del banco.',
    highlights: [
      'Construcción de reportes en Excel y Power BI',
      'Análisis de datos operativos y cartera de clientes',
      'Soporte al equipo de inteligencia de negocios',
    ],
    order: 2,
  },
];
