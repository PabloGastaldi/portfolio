# Portfolio — Pablo Gastaldi

Personal portfolio for Pablo Gastaldi. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS 3.

## Dev commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Content

All content lives in `src/data/*.ts`. To add a project, append an object to `projects.ts`. No component changes needed.

## Variables de entorno

El formulario de contacto puede enviar directamente a Formspree (sin backend propio).

1. Creá un formulario en [formspree.io](https://formspree.io) y copiá el endpoint (ej: `https://formspree.io/f/xxxxxxxx`).
2. En desarrollo: creá `.env.local` en la raíz con:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
3. En Vercel: agregá `NEXT_PUBLIC_FORMSPREE_ENDPOINT` en **Project Settings → Environment Variables**.

Si la variable no está definida, el formulario abre el cliente de email del usuario (mailto: fallback).

## Deploy

Connected to Vercel. Pushes to `main` trigger automatic deploys.
