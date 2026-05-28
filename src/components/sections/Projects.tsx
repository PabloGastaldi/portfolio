import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });

  return (
    <Section id="projects" label="Proyectos" heading="Proyectos">
      <div className="grid gap-6 sm:grid-cols-2">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
