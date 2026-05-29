import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ThemeScript } from './theme-script';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroProvider } from '@/lib/hero/HeroProvider';
import { siteMetadata } from '@/lib/site';
import './globals.css';

const sans = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  alternates: {
    canonical: siteMetadata.url,
  },
  openGraph: {
    type: 'website',
    locale: siteMetadata.locale,
    url: siteMetadata.url,
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        width: siteMetadata.ogImageWidth,
        height: siteMetadata.ogImageHeight,
        alt: siteMetadata.ogImageAlt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${sans.variable} ${mono.variable} bg-background font-sans text-foreground antialiased`}
      >
        <HeroProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </HeroProvider>
        <Analytics />
      </body>
    </html>
  );
}
