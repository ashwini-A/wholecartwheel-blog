import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ashwini Writes',
    template: '%s - Ashwini Writes'
  },
  description: 'Insights, data visualizations, and career portfolio by Ashwini A',
  authors: [{ name: 'Ashwini A', url: 'https://ashwiniwrites.com' }],
  keywords: ['blog', 'data visualization', 'insights', 'portfolio', 'career', 'analytics'],
  creator: 'Ashwini A',
  metadataBase: new URL('https://ashwiniwrites.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashwiniwrites.com',
    title: 'Ashwini Writes',
    description: 'Insights, data visualizations, and career portfolio',
    siteName: 'Ashwini Writes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwini Writes',
    description: 'Insights, data visualizations, and career portfolio',
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