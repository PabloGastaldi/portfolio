export function TerminalDockIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="term-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1d27" />
          <stop offset="1" stopColor="#0c0e15" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="13" fill="url(#term-bg)" />
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="13"
        fill="none"
        stroke="white"
        strokeOpacity="0.08"
      />
      <path
        d="M14 18 l8 6 l-8 6"
        stroke="#7ee787"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="26" y="35" width="14" height="2.6" rx="1.3" fill="#7ee787" />
    </svg>
  );
}
