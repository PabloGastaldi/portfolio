'use client';

import { useHero } from '@/hooks/useHero';

export function BackToDesktopButton() {
  const { state, returnToDesktop } = useHero();
  if (state.phase !== 'PROJECTS_OPEN') return null;

  return (
    <button
      type="button"
      onClick={returnToDesktop}
      className="focus-visible:ring-accent fixed top-4 left-4 z-[70] hidden items-center gap-2 rounded-full border border-border bg-background/85 px-3 py-2 text-xs font-medium text-foreground/80 shadow-lg backdrop-blur-md transition-colors hover:border-foreground/30 hover:bg-background hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:inline-flex"
      aria-label="Volver al escritorio macOS"
      title="Volver al escritorio"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
        aria-hidden
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span>Volver al escritorio</span>
    </button>
  );
}
