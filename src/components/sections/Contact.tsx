'use client';

import { useState, type FormEvent } from 'react';
import { Section } from '@/components/ui/Section';
import { profile } from '@/data/profile';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto desde portfolio — ${name}`);
    const body = encodeURIComponent(
      `Hola Pablo,\n\n${message}\n\nDe: ${name} (${email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm focus-visible:ring-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';

  return (
    <Section id="contact" label="Contacto" heading="Contacto">
      <div className="grid gap-12 sm:grid-cols-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
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
              placeholder="¿En qué te puedo ayudar?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="focus-visible:ring-accent inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Enviar mensaje
          </button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">Email directo</p>
            <a
              href={`mailto:${profile.email}`}
              className="focus-visible:ring-accent break-all text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">LinkedIn</p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:ring-accent text-accent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label="Ver perfil de LinkedIn (abre en nueva pestaña)"
            >
              linkedin.com/in/pablogastaldigut
            </a>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-foreground/60">Ubicación</p>
            <p>{profile.location}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
