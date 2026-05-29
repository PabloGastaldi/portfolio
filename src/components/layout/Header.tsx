'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

const NAV_LINKS = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-border bg-background/80 backdrop-blur-sm md:block">
      <Container>
        <div className="relative flex h-16 items-center">
          <nav
            aria-label="Navegación principal"
            className="mx-auto"
          >
            <ul className="flex items-center gap-1">
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
          </nav>

          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
