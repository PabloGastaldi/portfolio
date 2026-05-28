'use client';

import { useEffect, useState } from 'react';

const FORMATTER = new Intl.DateTimeFormat('es-AR', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function format(date: Date) {
  return FORMATTER.format(date).replace('.', '').replace(',', '');
}

export function useClock(): string | null {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: number | null = null;

    const tick = () => setLabel(format(new Date()));
    tick();

    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    const timeoutId = window.setTimeout(() => {
      tick();
      intervalId = window.setInterval(tick, 60_000);
    }, msToNextMinute);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== null) window.clearInterval(intervalId);
    };
  }, []);

  return label;
}
