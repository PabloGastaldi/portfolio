import { weather } from '@/data/desktop';

export function WeatherWidget() {
  return (
    <span
      className="inline-flex items-center gap-1.5 tabular-nums"
      aria-label={`Clima en ${weather.city}: ${weather.temperatureC} grados`}
    >
      <ConditionIcon condition={weather.condition} />
      <span>
        {weather.city} · {weather.temperatureC}°
      </span>
    </span>
  );
}

function ConditionIcon({ condition }: { condition: 'sunny' | 'cloudy' | 'night' }) {
  if (condition === 'cloudy') {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8 6 6 0 1 0-11 3.4" />
        <path d="M5 19h12.5" />
      </svg>
    );
  }
  if (condition === 'night') {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.93 19.07 1.41-1.41" />
      <path d="m17.66 6.34 1.41-1.41" />
    </svg>
  );
}
