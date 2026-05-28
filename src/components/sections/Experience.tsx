import { Section } from '@/components/ui/Section';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import { experiences } from '@/data/experience';

export function Experience() {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <Section id="experiencia" label="Experiencia profesional" heading="Experiencia">
      <div className="flex flex-col">
        {sorted.map((exp) => (
          <ExperienceItem key={exp.slug} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
