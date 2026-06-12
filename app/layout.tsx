import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { PostHogProvider } from '../components/PostHogProvider'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Cambra - Software Engineer, Machine Learning',
  description:
  'Software engineer specializing in machine learning. Building evaluation and threat detection infrastructure for global catastrophic risk monitoring at Sentinel.',

  keywords: [
    'Software Engineer',
    'Machine Learning',
    'LLM Evaluation',
    'Benchmarking',
    'Fine-tuning',
    'Knowledge Distillation',
    'Threat Detection',
    'Python',
    'JavaScript',
    "Next.js",
    "Express",
    "Golang",
  ],
  icons: {
    icon: '/images/fox-icon.png',
    shortcut: '/images/fox-icon.png',
    apple: '/images/fox-icon-180.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/fox-icon-180.png',
    },
  },
  openGraph: {
    title: 'Jorge Cambra - Software Engineer, Machine Learning',
    description:
      'Software engineer specializing in machine learning. Currently building evaluation and threat detection infrastructure for global catastrophic risk monitoring at Sentinel.',
    url: 'https://jorgecambra.com',
    siteName: 'Jorge Cambra',
    images: [
      {
        url: '/images/fox-icon-og.png',
        width: 1024,
        height: 1024,
        alt: 'Jorge Cambra',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jorge Cambra - Software Engineer, Machine Learning',
    description:
      'Software engineer specializing in machine learning. Currently building evaluation and threat detection infrastructure for global catastrophic risk monitoring at Sentinel.',
    images: ['/images/fox-icon-og.png'],
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
        <PostHogProvider>
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
        </PostHogProvider>
      </body>
    </html>
  )
}
