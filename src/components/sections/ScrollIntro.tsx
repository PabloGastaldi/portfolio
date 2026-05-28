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
          <h1 className="text-5xl leading-[0.95] font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            {fullName}
          </h1>
          <p className="mt-6 text-base font-medium text-foreground/55 sm:mt-8 sm:text-lg lg:text-xl">
            {profile.disciplines.join(' · ')}
          </p>
        </div>
      </Container>
    </section>
  );
}
