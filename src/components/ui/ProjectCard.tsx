import Image from 'next/image';
import type { Project, ProjectLink } from '@/types/content';

interface ProjectCardProps {
  project: Project;
}

function isExternal(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function linkRel(href: string) {
  return isExternal(href) || href.endsWith('.pdf') ? 'noopener noreferrer' : undefined;
}

function linkTarget(href: string) {
  return isExternal(href) || href.endsWith('.pdf') ? '_blank' : undefined;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`flex flex-col gap-4 overflow-hidden rounded-xl border border-border bg-muted${
        project.featured ? ' sm:col-span-2' : ''
      }`}
    >
      {project.image ? (
        <div className="relative h-52 w-full sm:h-64">
          <Image
            src={project.image}
            alt={`Captura de pantalla de ${project.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div
          className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-accent/20 via-accent/10 to-muted sm:h-52"
          aria-hidden="true"
        >
          <span className="text-4xl font-bold text-accent/40">
            {project.title.charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.featured && (
            <span className="inline-block w-fit rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
              Proyecto destacado
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed">{project.summary}</p>

        {project.featured && project.description && (
          <p className="text-sm leading-relaxed text-foreground/70">{project.description}</p>
        )}

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

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-1">
            {project.links.map((link: ProjectLink) => (
              <a
                key={link.href}
                href={link.href}
                target={linkTarget(link.href)}
                rel={linkRel(link.href)}
                className="focus-visible:ring-accent inline-flex items-center gap-1 rounded text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
