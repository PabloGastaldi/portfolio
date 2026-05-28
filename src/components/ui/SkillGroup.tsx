import type { Skill, Pillar } from '@/types/content';

const PILLAR_LABELS: Record<Pillar, string> = {
  data: 'Datos',
  ai: 'IA y Automatización',
  comex: 'Comex y Dominio',
  languages: 'Idiomas',
};

interface SkillGroupProps {
  pillar: Pillar;
  skills: Skill[];
}

export function SkillGroup({ pillar, skills }: SkillGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/60">
        {PILLAR_LABELS[pillar]}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
