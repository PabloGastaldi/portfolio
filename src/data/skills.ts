import type { Skill } from '@/types/content';

export const skills: Skill[] = [
  { name: 'SQL', pillar: 'data', level: 'advanced' },
  { name: 'Python (pandas)', pillar: 'data', level: 'advanced' },
  { name: 'Tableau', pillar: 'data', level: 'intermediate' },
  { name: 'Power BI', pillar: 'data', level: 'intermediate' },
  { name: 'Análisis exploratorio', pillar: 'data', level: 'advanced' },

  { name: 'RAG (Retrieval-Augmented Generation)', pillar: 'ai', level: 'advanced' },
  { name: 'Embeddings', pillar: 'ai', level: 'advanced' },
  { name: 'APIs de modelos (Claude, OpenAI)', pillar: 'ai', level: 'advanced' },
  { name: 'Agentes (Claude Code)', pillar: 'ai', level: 'intermediate' },
  { name: 'Prompt engineering', pillar: 'ai', level: 'advanced' },
  { name: 'Next.js / TypeScript', pillar: 'ai', level: 'intermediate' },

  { name: 'Clasificación arancelaria (NCM)', pillar: 'comex', level: 'advanced' },
  { name: 'Normativa AFIP / Aduana', pillar: 'comex', level: 'advanced' },
  { name: 'Liquidaciones de exportación', pillar: 'comex', level: 'intermediate' },
  { name: 'Geopolítica tecnológica', pillar: 'comex', level: 'advanced' },
  { name: 'Relaciones Internacionales', pillar: 'comex', level: 'advanced' },

  { name: 'Español', pillar: 'languages', level: 'advanced' },
  { name: 'Inglés (B2)', pillar: 'languages', level: 'intermediate' },
  { name: 'Italiano (B1)', pillar: 'languages', level: 'basic' },
];
