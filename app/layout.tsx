import type { Metadata } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Rootinize | AI Automation & Development',
  description: 'Transform operations with intelligent automation. Rootinize builds custom AI systems that automate manual processes, deploy chatbots, and create internal tools for businesses ready to scale efficiently.',
  keywords: ['AI automation', 'business automation', 'custom development', 'AI chatbots', 'internal tools'],
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#3A2A6C" />
      </head>
      <body className="min-h-screen antialiased">
        <div className="min-h-screen w-full relative">
          {/* Dark Horizon Glow */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
            }}
          />

          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
