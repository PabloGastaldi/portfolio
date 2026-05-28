import type { ComponentType } from 'react';
import { cv } from '@/data/desktop';

export type MobileNavTarget =
  | { type: 'scroll'; sectionId: string }
  | { type: 'external'; href: string };

export type MobileNavItem = {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  target: MobileNavTarget;
};

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function DocIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export const mobileNavItems: MobileNavItem[] = [
  {
    id: 'intro',
    label: 'Inicio',
    Icon: HomeIcon,
    target: { type: 'scroll', sectionId: 'intro' },
  },
  {
    id: 'proyectos',
    label: 'Proyectos',
    Icon: FolderIcon,
    target: { type: 'scroll', sectionId: 'proyectos' },
  },
  {
    id: 'cv',
    label: 'CV',
    Icon: DocIcon,
    target: { type: 'external', href: cv.pdfPath },
  },
  {
    id: 'contacto',
    label: 'Contacto',
    Icon: MailIcon,
    target: { type: 'scroll', sectionId: 'contacto' },
  },
];
