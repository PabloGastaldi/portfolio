import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

export function About() {
  return (
    <Section id="sobre-mi" label="Sobre mí" heading="Sobre mí">
      <p className="max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg">
        {profile.bio}
      </p>
    </Section>
  );
}
