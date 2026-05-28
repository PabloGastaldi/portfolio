export function TradeAiDockIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="trade-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0fbf7a" />
          <stop offset="1" stopColor="#0a8a5a" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="13" fill="url(#trade-bg)" />
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="13"
        fill="none"
        stroke="white"
        strokeOpacity="0.15"
      />
      <path
        d="M11 42 L22 30 L29 36 L41 19"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 19 L41 19 L41 26"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
