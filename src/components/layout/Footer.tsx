import { Container } from '@/components/ui/Container';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hidden border-t border-border py-8 md:block">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-foreground/50">
            © {year} {profile.name}. Santa Fe, Argentina.
          </p>
          <nav aria-label="Links de contacto">
            <ul className="flex items-center gap-4">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Enviar email a Pablo Gastaldi"
                  className="focus-visible:ring-accent inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <EmailIcon />
                  Email
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver perfil de LinkedIn de Pablo Gastaldi (abre en nueva pestaña)"
                  className="focus-visible:ring-accent inline-flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
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
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
