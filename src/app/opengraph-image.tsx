import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

export const runtime = 'edge';
export const alt = 'Pablo Gastaldi — Portfolio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage() {
  const fullName = profile.titlePrefix
    ? `${profile.titlePrefix} ${profile.name}`
    : profile.name;
  const disciplines = profile.disciplines.join(' · ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background:
            'radial-gradient(at 18% 22%, hsl(258 65% 32% / 0.85), transparent 55%),' +
            'radial-gradient(at 82% 18%, hsl(196 70% 28% / 0.7), transparent 50%),' +
            'radial-gradient(at 72% 88%, hsl(326 60% 28% / 0.6), transparent 55%),' +
            'radial-gradient(at 24% 78%, hsl(220 50% 18% / 0.85), transparent 60%),' +
            'linear-gradient(135deg, hsl(232 30% 7%), hsl(240 40% 10%))',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span>Portfolio</span>
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 110,
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            display: 'flex',
          }}
        >
          {fullName}
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 38,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.75)',
            display: 'flex',
          }}
        >
          {disciplines}
        </div>

        <div
          style={{
            marginTop: 'auto',
            fontSize: 22,
            color: 'rgba(255,255,255,0.5)',
            display: 'flex',
          }}
        >
          pablogastaldi.com
        </div>
      </div>
    ),
    { ...size },
  );
}
