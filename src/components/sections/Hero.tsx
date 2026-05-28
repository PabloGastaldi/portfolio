import { Container } from '@/components/ui/Container';
import { profile } from '@/data/profile';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Presentación"
      className="flex min-h-[85vh] items-center py-24"
    >
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {profile.location}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="focus-visible:ring-accent inline-flex min-h-11 items-center rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Ponete en contacto
            </a>
            <a
              href="#projects"
              className="focus-visible:ring-accent inline-flex min-h-11 items-center rounded-lg border border-border px-6 py-2 text-sm font-semibold transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
