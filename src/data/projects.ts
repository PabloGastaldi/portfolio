import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'trade-ai',
    title: 'trade.ai',
    summary:
      'Plataforma de inteligencia comercial para importadores y exportadores argentinos. Construida con RAG, embeddings y APIs de modelos de lenguaje.',
    description:
      'trade.ai permite consultar el corpus de normativa de comercio exterior (NCM, aranceles, AFIP, Aduana) en lenguaje natural. Usa RAG sobre documentos reales y modelos de embeddings para recuperar contexto relevante antes de generar respuestas. No es un chatbot genérico: es un sistema especializado en el dominio de comex argentino.',
    url: 'https://tradeai.ar',
    stack: ['Next.js', 'Python', 'RAG', 'Embeddings', 'APIs de modelos', 'PostgreSQL'],
    highlights: [
      'RAG sobre corpus de normativa NCM y AFIP',
      'Pipeline de embeddings para recuperación semántica',
      'Integración con APIs de modelos de lenguaje (Claude, OpenAI)',
      'UI conversacional para consultas en lenguaje natural',
      'Plataforma funcional en producción — no un demo',
    ],
    featured: true,
    order: 0,
  },
  {
    slug: 'portfolio',
    title: 'Este portfolio',
    summary:
      'Sitio personal construido con Next.js 15, TypeScript y Tailwind CSS. Scaffolded con Claude Code y SDD.',
    description:
      'Portfolio estático con App Router, tema claro/oscuro sin dependencias externas, y una capa de datos tipada que hace trivial agregar proyectos o experiencias.',
    url: 'https://pablogastaldi.com',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Tema claro/oscuro sin next-themes (FOUC mitigado con script pre-paint)',
      'Data layer tipada: agregar un proyecto = un objeto literal',
      'SSG puro — cero JS del lado servidor',
    ],
    featured: false,
    order: 1,
  },
];
