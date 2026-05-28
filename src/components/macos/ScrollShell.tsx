'use client';

import { useHero } from '@/hooks/useHero';
import { isHeroActive } from '@/lib/hero/machine';
import type { ReactNode } from 'react';

export function ScrollShell({ children }: { children: ReactNode }) {
  const { state } = useHero();
  const hidden = isHeroActive(state.phase);

  return (
    <div
      aria-hidden={hidden}
      inert={hidden || undefined}
      className="pt-11 pb-[calc(56px+env(safe-area-inset-bottom))] md:pt-0 md:pb-0"
    >
      {children}
    </div>
  );
}
