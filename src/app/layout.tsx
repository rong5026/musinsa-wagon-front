import { Provider } from '@/components/provider'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: '무신사 웨건',
  description: '무신사 웨건 이커머스 웹 애플리케이션',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
