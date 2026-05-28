export function CvDockIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="cv-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2efe9" />
          <stop offset="1" stopColor="#cfc7b8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="13" fill="url(#cv-bg)" />
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="13"
        fill="none"
        stroke="black"
        strokeOpacity="0.06"
      />
      <rect x="14" y="11" width="22" height="34" rx="2" fill="white" />
      <path d="M30 11 v6 a2 2 0 0 0 2 2 h4" fill="none" stroke="#9c8f76" strokeWidth="1.4" />
      <path d="M36 17 L30 11" fill="#e6dfd1" />
      <path
        d="M18 26 h14 M18 30 h14 M18 34 h10"
        stroke="#28201a"
        strokeOpacity="0.55"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <text x="18" y="22" fontSize="6" fontWeight="700" fill="#28201a">CV</text>
    </svg>
  );
}
