import { Section } from '@/components/ui/Section';
import { SkillGroup } from '@/components/ui/SkillGroup';
import { skills } from '@/data/skills';
import type { Pillar } from '@/types/content';

const PILLAR_ORDER: Pillar[] = ['data', 'ai', 'comex', 'languages'];

export function Skills() {
  return (
    <Section id="skills" label="Skills y herramientas" heading="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {PILLAR_ORDER.map((pillar) => {
          const group = skills.filter((s) => s.pillar === pillar);
          return <SkillGroup key={pillar} pillar={pillar} skills={group} />;
        })}
      </div>
    </Section>
  );
}
