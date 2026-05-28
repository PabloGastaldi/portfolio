'use client';

import { useEffect, useState } from 'react';
import { cv } from '@/data/desktop';

type Availability = 'checking' | 'available' | 'missing';

export function CvWindow() {
  const [status, setStatus] = useState<Availability>('checking');

  useEffect(() => {
    let cancelled = false;
    fetch(cv.pdfPath, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return;
        setStatus(res.ok ? 'available' : 'missing');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('missing');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'checking') {
    return (
      <div className="flex h-full items-center justify-center text-xs text-white/40">
        Cargando…
      </div>
    );
  }

  if (status === 'missing') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 px-8 text-center">
        <svg
          viewBox="0 0 24 24"
          className="h-10 w-10 text-white/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
        <p className="text-sm text-white/70">El CV todavía no está subido.</p>
        <p className="text-xs text-white/45">
          Mientras tanto podés escribirme desde la app{' '}
          <span className="text-white/70">Contacto</span> del dock.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-neutral-900">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
        <span className="font-mono text-[11px] text-white/55">
          {cv.downloadName}
        </span>
        <a
          href={cv.pdfPath}
          download={cv.downloadName}
          className="rounded-md bg-white/10 px-3 py-1 text-xs text-white/90 transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
        >
          Descargar PDF
        </a>
      </div>
      <iframe
        src={`${cv.pdfPath}#view=FitH`}
        title="Currículum Vitae de Pablo Gastaldi"
        className="h-full w-full flex-1 border-0 bg-white"
      />
    </div>
  );
}
