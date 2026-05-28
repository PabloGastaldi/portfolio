import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground text-lg">Esta página no existe.</p>
      <Link
        href="/"
        className="text-accent hover:underline focus-visible:ring-accent rounded focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
