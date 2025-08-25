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
    icon: 'https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/logo%2Fic_launcher.jpg?alt=media&token=2f6352b5-d996-4e13-8b4f-c92790a1234f',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/logo%2Fic_launcher.jpg?alt=media&token=2f6352b5-d996-4e13-8b4f-c92790a1234f',
    apple: 'https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/logo%2Fic_launcher.jpg?alt=media&token=2f6352b5-d996-4e13-8b4f-c92790a1234f',
  },
  openGraph: {
    title: 'CIBIL FIXER - Credit Score Improvement Services',
    description: 'Professional CIBIL score improvement services. Fix your credit score with our expert guidance.',
    url: 'https://cibilfixer.com',
    siteName: 'CIBIL FIXER',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/logo%2Fic_launcher.jpg?alt=media&token=2f6352b5-d996-4e13-8b4f-c92790a1234f',
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
    images: ['https://firebasestorage.googleapis.com/v0/b/future-capital-91977.firebasestorage.app/o/logo%2Fic_launcher.jpg?alt=media&token=2f6352b5-d996-4e13-8b4f-c92790a1234f'],
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