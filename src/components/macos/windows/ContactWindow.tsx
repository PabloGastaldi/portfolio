'use client';

import { useState, type FormEvent } from 'react';
import { profile } from '@/data/profile';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

type Status = 'idle' | 'sending' | 'success' | 'error';

const fieldClass =
  'w-full bg-transparent text-sm text-white/90 placeholder:text-white/30 focus:outline-none';
const labelClass = 'w-16 shrink-0 text-xs font-medium tracking-wider text-white/45 uppercase';

export function ContactWindow() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col" noValidate>
      <div className="flex flex-col divide-y divide-white/5">
        <Row label="Para">
          <span className="text-sm text-white/80">
            {profile.name} &lt;
            <span className="text-white/55">{profile.email}</span>
            &gt;
          </span>
        </Row>
        <Row label="De">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={fieldClass}
          />
        </Row>
        <Row label="Nombre">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className={fieldClass}
          />
        </Row>
      </div>

      <div className="flex flex-1 flex-col px-4 py-4">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hola Pablo, te escribo porque…"
          className={`${fieldClass} h-full min-h-[180px] resize-none leading-relaxed`}
        />
      </div>

      <div role="status" aria-live="polite" aria-atomic="true">
        {status === 'success' && (
          <p className="mx-4 mb-3 rounded-md border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">
            Mensaje enviado. Te respondo a la brevedad.
          </p>
        )}
        {status === 'error' && (
          <p className="mx-4 mb-3 rounded-md border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-xs text-rose-200">
            {FORMSPREE_ENDPOINT
              ? 'No se pudo enviar. Probá de nuevo o escribime por LinkedIn.'
              : 'Formspree no está configurado. Escribime por LinkedIn mientras tanto.'}
          </p>
        )}
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-white/5 bg-black/20 px-4 py-3">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-white/55 underline-offset-4 hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
        >
          Conectemos en LinkedIn ↗
        </a>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-md bg-white px-4 py-1.5 text-sm font-medium text-black transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar'}
        </button>
      </footer>
    </form>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3 px-4 py-2.5">
      <span className={labelClass}>{label}</span>
      <span className="flex-1">{children}</span>
    </label>
  );
}
