import type { Skill } from '@/types/content';

export const skills: Skill[] = [
  { name: 'SQL', pillar: 'data', level: 'advanced' },
  { name: 'Python', pillar: 'data', level: 'advanced' },
  { name: 'pandas', pillar: 'data', level: 'advanced' },
  { name: 'Tableau', pillar: 'data', level: 'intermediate' },
  { name: 'Power BI', pillar: 'data', level: 'intermediate' },
  { name: 'Excel', pillar: 'data', level: 'advanced' },

  { name: 'RAG', pillar: 'ai', level: 'advanced' },
  { name: 'Embeddings', pillar: 'ai', level: 'advanced' },
  { name: 'APIs de modelos (OpenAI / Anthropic)', pillar: 'ai', level: 'advanced' },
  { name: 'Agentes (Claude Code)', pillar: 'ai', level: 'advanced' },
  { name: 'Integración de IA en flujos reales', pillar: 'ai', level: 'advanced' },
  { name: 'Prompt engineering', pillar: 'ai', level: 'advanced' },

  { name: 'Clasificación arancelaria (NCM)', pillar: 'comex', level: 'advanced' },
  { name: 'Normativa AFIP / Aduana', pillar: 'comex', level: 'advanced' },
  { name: 'Análisis de exportación', pillar: 'comex', level: 'intermediate' },
  { name: 'Geopolítica tecnológica', pillar: 'comex', level: 'advanced' },
  { name: 'Relaciones Internacionales', pillar: 'comex', level: 'advanced' },
];
