import { Container } from '@/components/ui/Container';
import { profile } from '@/data/profile';

export function ScrollIntro() {
  const fullName = profile.titlePrefix
    ? `${profile.titlePrefix} ${profile.name}`
    : profile.name;

  return (
    <section
      id="intro"
      aria-label="Presentación"
      className="border-b border-border bg-background py-24 sm:py-32 lg:py-40"
    >
      <Container>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl leading-[1] font-bold tracking-tight sm:text-4xl lg:text-8xl">
            {fullName}
          </h1>
          <p className="mt-5 text-[11px] font-medium tracking-[0.38em] text-foreground/45 uppercase sm:mt-6 sm:text-sm">
            {profile.disciplines.join(' · ')}
          </p>
          <p className="sm:text-md mt-20 max-w-3xl text-base leading-relaxed tracking-[0.005em] whitespace-pre-line text-foreground/75 sm:mt-24">
            {profile.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
