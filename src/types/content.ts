export type Pillar = 'data' | 'ai' | 'comex' | 'languages';

export interface Profile {
  name: string;
  tagline: string;
  positioningLine: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  languages: { name: string; level: string }[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  url?: string;
  repo?: string;
  image?: string;
  stack: string[];
  highlights: string[];
  featured?: boolean;
  order: number;
}

export interface Experience {
  slug: string;
  role: string;
  organization: string;
  url?: string;
  location?: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
  order: number;
}

export interface Skill {
  name: string;
  pillar: Pillar;
  level?: 'basic' | 'intermediate' | 'advanced';
}
