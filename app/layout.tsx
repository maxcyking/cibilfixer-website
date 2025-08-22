import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'CibilFixer - Credit Score Improvement & CIBIL Report Management',
  description: 'Professional CIBIL score improvement services. Fix your credit score with our expert guidance and comprehensive packages.',
  keywords: 'CIBIL, credit score, credit improvement, financial services, credit report, cibil fixer',
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