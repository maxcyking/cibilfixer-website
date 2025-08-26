import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'CIBIL FIXER - Credit Score Improvement & CIBIL Report Management',
  description: 'Professional CIBIL score improvement services. Fix your credit score with our expert guidance and comprehensive packages.',
  keywords: 'CIBIL, credit score, credit improvement, financial services, credit report, CIBIL FIXER',
  authors: [{ name: 'CIBIL FIXER' }],
  creator: 'CIBIL FIXER',
  publisher: 'CIBIL FIXER',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'CIBIL FIXER - Credit Score Improvement Services',
    description: 'Professional CIBIL score improvement services. Fix your credit score with our expert guidance.',
    url: 'https://cibilfixer.com',
    siteName: 'CIBIL FIXER',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CIBIL FIXER Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CIBIL FIXER - Credit Score Improvement Services',
    description: 'Professional CIBIL score improvement services. Fix your credit score with our expert guidance.',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
} 