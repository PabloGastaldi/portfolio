'use client';

import { useHero } from '@/hooks/useHero';

export function SkipIntroButton() {
  const { skipIntro } = useHero();

  return (
    <button
      type="button"
      onClick={skipIntro}
      className="fixed bottom-4 left-4 z-40 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none md:right-4 md:bottom-4 md:left-auto"
      aria-label="Saltar intro y ver proyectos directamente"
    >
      Saltar intro
    </button>
  );
}
