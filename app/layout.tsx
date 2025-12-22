import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Career, Constraint, and Clarity',
    template: '%s - Career, Constraint, and Clarity'
  },
  description: 'Reflections on work, life, and building a sustainable path forward',
  authors: [{ name: 'Ashwini A', url: 'https://wholecartwheel.com' }],
  keywords: ['career', 'constraints', 'clarity', 'work-life balance', 'sustainable career', 'professional development'],
  creator: 'Ashwini A',
  metadataBase: new URL('https://wholecartwheel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wholecartwheel.com',
    title: 'Career, Constraint, and Clarity',
    description: 'Reflections on work, life, and building a sustainable path forward',
    siteName: 'Career, Constraint, and Clarity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career, Constraint, and Clarity',
    description: 'Reflections on work, life, and building a sustainable path forward',
    creator: '@ashwini', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}