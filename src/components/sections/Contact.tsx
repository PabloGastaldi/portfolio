'use client';

import { useState, type FormEvent } from 'react';
import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const inputClass =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:ring-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (FORMSPREE_ENDPOINT) {
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
    } else {
      const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
      const body = encodeURIComponent(
        `Hola Pablo,\n\n${message}\n\nDe: ${name} (${email})`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    }
  }

  return (
    <Section id="contacto" label="Contacto" heading="Contacto">
      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <div role="status" aria-live="polite" aria-atomic="true">
            {status === 'success' && (
              <p className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
                Mensaje enviado. Te respondo a la brevedad.
              </p>
            )}

            {status === 'error' && (
              <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-400">
                No se pudo enviar el mensaje. Escribime directamente a{' '}
                <a href={`mailto:${profile.email}`} className="underline">
                  {profile.email}
                </a>
                .
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Contame en qué estás trabajando o qué tenés en mente."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="focus-visible:ring-accent inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">Email</p>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Enviar email a Pablo Gastaldi"
              className="focus-visible:ring-accent inline-flex items-center gap-2 break-all text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <EmailIcon />
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver perfil de LinkedIn de Pablo Gastaldi (abre en nueva pestaña)"
              className="focus-visible:ring-accent inline-flex items-center gap-2 text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <LinkedInIcon />
              linkedin.com/in/pablogastaldigut
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">Ubicación</p>
            <p className="text-sm">{profile.location}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
