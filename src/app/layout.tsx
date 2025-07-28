import { Footer, Header } from '@/components/layout'
import { Provider } from '@/components/provider'
import { LoadingPage } from '@/components/ui/loading'
import { Toaster } from '@/components/ui/sonner'
import type { Metadata } from 'next'
import { Suspense } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: '무신사 웨건 - 이커머스 플랫폼',
  description: '무신사 웨건 이커머스 웹 애플리케이션',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Provider>
          <div className="flex-1">
            <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          </div>
          <Footer />
        </Provider>
        <Toaster />
      </body>
    </html>
  )
}
