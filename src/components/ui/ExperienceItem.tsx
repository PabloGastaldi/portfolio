import type { Experience } from '@/types/content';

interface ExperienceItemProps {
  experience: Experience;
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString('es-AR', { month: 'short', year: 'numeric' });
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const start = formatDate(experience.startDate);
  const end = experience.endDate ? formatDate(experience.endDate) : 'Presente';

  return (
    <article className="flex flex-col gap-3 border-l-2 border-border pl-6 pb-10 last:pb-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-semibold">{experience.role}</h3>
          <p className="text-sm text-foreground/70">
            {experience.organization}
            {experience.location && ` — ${experience.location}`}
          </p>
        </div>
        <p className="shrink-0 text-sm text-foreground/50">
          {start} – {end}
        </p>
      </div>

      <p className="text-sm leading-relaxed">{experience.summary}</p>

      {experience.highlights.length > 0 && (
        <ul className="flex flex-col gap-1">
          {experience.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-foreground/80">
              <span className="mt-0.5 text-accent" aria-hidden="true">
                →
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
