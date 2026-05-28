import type { Project } from '@/types/content';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-muted p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.featured && (
            <span className="mt-1 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              Proyecto destacado
            </span>
          )}
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.title} (abre en nueva pestaña)`}
            className="focus-visible:ring-accent shrink-0 rounded text-sm text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Ver proyecto ↗
          </a>
        )}
      </div>

      <p className="text-sm leading-relaxed">{project.summary}</p>

      {project.highlights.length > 0 && (
        <ul className="flex flex-col gap-1">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 text-accent" aria-hidden="true">
                →
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2 py-0.5 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
