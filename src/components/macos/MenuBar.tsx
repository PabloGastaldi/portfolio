'use client';

import { useClock } from '@/hooks/useClock';
import { WeatherWidget } from './WeatherWidget';

type MenuBarProps = {
  systemName?: string;
};

export function MenuBar({ systemName = 'Pablo OS' }: MenuBarProps) {
  const clock = useClock();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-7 text-[12px] font-medium tracking-wide text-white/90">
      <div aria-hidden className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      <div className="pointer-events-auto relative flex h-full items-center justify-between px-4">
        <span className="font-semibold">{systemName}</span>
        <div className="flex items-center gap-4">
          <WeatherWidget />
          <span suppressHydrationWarning className="tabular-nums" aria-label="Hora del sistema">
            {clock ?? ''}
          </span>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 hidden h-[26px] w-[200px] -translate-x-1/2 rounded-b-[14px] bg-black md:block"
      />
    </div>
  );
}
