'use client';

import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

const NAV_LINKS = [
  { href: '#intro', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const firstLink = menuRef.current?.querySelector('a');
    firstLink?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 hidden border-b border-border bg-background/80 backdrop-blur-sm md:block">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="focus-visible:ring-accent shrink-0 rounded text-sm font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label="Volver al inicio"
          >
            PG
          </a>

          <nav aria-label="Navegación principal" className="flex items-center gap-2">
            <ul className="hidden items-center gap-1 md:flex">
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

            <button
              ref={buttonRef}
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="focus-visible:ring-accent flex min-h-11 min-w-11 items-center justify-center rounded-md transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none md:hidden"
            >
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </nav>

          <ThemeToggle />
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="border-t border-border bg-background/95 backdrop-blur-sm md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="focus-visible:ring-accent flex min-h-11 items-center rounded px-3 text-sm text-foreground/70 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
