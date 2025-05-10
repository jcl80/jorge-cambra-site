import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Jorge Cambra - Software Engineer',
  description:
    'Software engineer and relentless problem-solver fluent in TypeScript, Python, and Solana Web3. Specializing in e-commerce, real-time applications, and blockchain development.',
  keywords: [
    'Software Engineer',
    'TypeScript',
    'Python',
    'Solana',
    'Web3',
    'E-commerce',
    'Real-time Applications',
    'Blockchain Development',
  ],
  icons: {
    icon: '/images/jcl80.png',
    shortcut: '/images/jcl80.png',
    apple: '/images/jcl80.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/jcl80.png',
    },
  },
  openGraph: {
    title: 'Jorge Cambra - Software Engineer',
    description: 'Software engineer and relentless problem-solver fluent in TypeScript, Python, and Solana Web3. Specializing in e-commerce, real-time applications, and blockchain development.',
    url: 'https://jorgecambra.com',
    siteName: 'Jorge Cambra',
    images: [
      {
        url: '/images/jcl80.png',
        width: 800,
        height: 600,
        alt: 'Jorge Cambra',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jorge Cambra - Software Engineer',
    description: 'Software engineer and relentless problem-solver fluent in TypeScript, Python, and Solana Web3. Specializing in e-commerce, real-time applications, and blockchain development.',
    images: ['/images/jcl80.png'],
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
