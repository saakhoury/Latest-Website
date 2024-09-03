// app/layout.tsx
import { ThemeProvider } from '@/app/providers'
import { Container } from '@/components/Container'
import Navigation from '@/components/Navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'

const meta = {
  title: 'Sanskriti Akhoury - Website',
  description: 'singer',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | sakhoury',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="z-10 flex-grow">
            <main className="flex-grow">
            <Container><Navigation /> </Container>
              <Container>{children}</Container>
            </main>
          </div>
          <footer className="z-10 mt-auto py-16">
            <Container>
              <p>
                Built by{' '}
                <Link className="link" href="https://twitter.com/hunterhchang">
                  Sanskriti Akhoury
                </Link>
              </p>
            </Container>
          </footer>
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/images/texture.jpg')] opacity-20 mix-blend-overlay transition-opacity duration-300 dark:opacity-0"></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}