import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  const sorted = [...projects].sort((a, b) => a.order - b.order);

  return (
    <Section id="proyectos" label="Proyectos" heading="Proyectos">
      <div className="grid gap-6 sm:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
