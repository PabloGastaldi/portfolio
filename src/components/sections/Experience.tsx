import { Section } from '@/components/ui/Section';
import { ExperienceItem } from '@/components/ui/ExperienceItem';
import { experiences } from '@/data/experience';

const CV_PATH = '/cv/Pablo-Gastaldi-CV.pdf';

export function Experience() {
  const sorted = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <Section id="experiencia" label="Experiencia profesional" heading="Experiencia">
      <div className="mb-8 flex justify-start sm:justify-end">
        <a
          href={CV_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:ring-accent inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-background focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label="Descargar CV en PDF"
        >
          <DocIcon />
          <span>Descargar CV (PDF)</span>
        </a>
      </div>

      <div className="flex flex-col">
        {sorted.map((exp) => (
          <ExperienceItem key={exp.slug} experience={exp} />
        ))}
      </div>
    </Section>
  );
}

function DocIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </svg>
  );
}
