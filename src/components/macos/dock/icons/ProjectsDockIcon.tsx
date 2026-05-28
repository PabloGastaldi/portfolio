export function ProjectsDockIcon() {
  return (
    <svg viewBox="0 0 56 56" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="proj-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a82f7" />
          <stop offset="1" stopColor="#1f4ea8" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="13" fill="url(#proj-bg)" />
      <rect
        x="2"
        y="2"
        width="52"
        height="52"
        rx="13"
        fill="none"
        stroke="white"
        strokeOpacity="0.12"
      />
      <path
        d="M13 19 h11 l3 3 h16 a3 3 0 0 1 3 3 v15 a3 3 0 0 1 -3 3 H13 a3 3 0 0 1 -3 -3 V22 a3 3 0 0 1 3 -3 z"
        fill="white"
        fillOpacity="0.92"
      />
      <path
        d="M13 25 h30 a3 3 0 0 1 3 3 v12 a3 3 0 0 1 -3 3 H13 a3 3 0 0 1 -3 -3 V28 a3 3 0 0 1 3 -3 z"
        fill="white"
        fillOpacity="0.6"
      />
    </svg>
  );
}
