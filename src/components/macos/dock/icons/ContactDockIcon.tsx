export function ContactDockIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7c8cff" />
          <stop offset="1" stopColor="#4c5ee0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="13" fill="url(#mail-bg)" />
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
      <rect
        x="11"
        y="18"
        width="34"
        height="22"
        rx="3"
        fill="white"
        fillOpacity="0.96"
      />
      <path
        d="M11 21 L28 32 L45 21"
        fill="none"
        stroke="#4c5ee0"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
