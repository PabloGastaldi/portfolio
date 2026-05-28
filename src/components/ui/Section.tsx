import { Container } from './Container';

interface SectionProps {
  id: string;
  label: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, label, heading, children, className = '' }: SectionProps) {
  return (
    <section id={id} aria-label={label} className={`py-16 sm:py-24 ${className}`}>
      <Container>
        <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
        {children}
      </Container>
    </section>
  );
}
