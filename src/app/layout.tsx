import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'

import { Provider } from '@/components/provider'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '무신사 웨건 | 패션 가격 추적 & 분석',
  description: '무신사, 에이블리, 지그재그 가격 히스토리 추적 및 가짜 할인 탐지 플랫폼',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body className="font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
