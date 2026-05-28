'use client';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { profile } from '@/data/profile';

export function MobileScrollHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-border bg-background/85 backdrop-blur-md md:hidden">
      <div className="flex h-11 items-center justify-between px-4">
        <a
          href="#intro"
          className="focus-visible:ring-accent rounded text-sm font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          aria-label="Volver al inicio"
        >
          {profile.name}
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
