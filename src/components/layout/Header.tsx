import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

const NAV_LINKS = [
  { href: '#hero', label: 'Inicio' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#hero"
            className="focus-visible:ring-accent shrink-0 rounded text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Volver al inicio"
          >
            PG
          </a>

          <nav aria-label="Navegación principal">
            <ul className="hidden items-center gap-1 sm:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-visible:ring-accent flex min-h-11 items-center rounded px-3 text-sm text-foreground/70 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-1 sm:hidden">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-visible:ring-accent flex min-h-11 items-center rounded px-2 text-xs text-foreground/70 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
