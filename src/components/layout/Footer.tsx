import { Container } from '@/components/ui/Container';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
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
                  className="focus-visible:ring-accent text-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label="Enviar email a Pablo Gastaldi"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:ring-accent text-sm text-foreground/60 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                  aria-label="Ver perfil de LinkedIn de Pablo Gastaldi (abre en nueva pestaña)"
                >
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
