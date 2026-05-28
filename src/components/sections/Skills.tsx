import { Section } from '@/components/ui/Section';
import { SkillGroup } from '@/components/ui/SkillGroup';
import { skills } from '@/data/skills';
import { profile } from '@/data/profile';
import type { Pillar, Skill } from '@/types/content';

const PILLAR_ORDER: Pillar[] = ['data', 'ai', 'comex', 'languages'];

export function Skills() {
  const languageSkills: Skill[] = profile.languages.map((lang) => ({
    name: `${lang.name} (${lang.level})`,
    pillar: 'languages',
  }));

  const allSkills = [...skills, ...languageSkills];

  return (
    <Section id="skills" label="Skills y herramientas" heading="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {PILLAR_ORDER.map((pillar) => {
          const group = allSkills.filter((s) => s.pillar === pillar);
          return <SkillGroup key={pillar} pillar={pillar} skills={group} />;
        })}
      </div>
    </Section>
  );
}
