import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'trade-ai',
    title: 'trade.ai',
    image: '/projects/trade-ai.png',
    summary:
      'Plataforma de inteligencia para comercio exterior. Construida con IA: RAG, embeddings e integración de APIs de modelos. Convierte normativa, NCM y datos de exportación en decisiones accionables.',
    description:
      'trade.ai permite consultar el corpus de normativa de comercio exterior (NCM, aranceles, AFIP, Aduana) en lenguaje natural. Usa RAG sobre documentos reales y modelos de embeddings para recuperar contexto relevante antes de generar respuestas. No es un chatbot genérico: es un sistema especializado en el dominio de comex argentino.',
    stack: ['Next.js', 'Python', 'RAG', 'Embeddings', 'APIs de modelos', 'PostgreSQL'],
    highlights: [
      'RAG sobre corpus de normativa NCM y AFIP',
      'Pipeline de embeddings para recuperación semántica',
      'Integración con APIs de modelos (Claude, OpenAI)',
      'UI conversacional para consultas en lenguaje natural',
      'Plataforma funcional en producción — no un demo',
    ],
    featured: true,
    order: 0,
    links: [{ label: 'Visitar tradeai.ar', href: 'https://tradeai.ar' }],
  },
  {
    slug: 'proyecto-2',
    title: 'TODO: Próximo proyecto',
    summary: 'TODO: completar con el próximo proyecto.',
    description: 'TODO: completar con descripción del proyecto.',
    stack: [],
    highlights: [],
    featured: false,
    order: 1,
    links: [],
  },
];
