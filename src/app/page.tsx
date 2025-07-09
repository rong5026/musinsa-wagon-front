'use client'

import { ProductGrid } from '@/components/ecommerce/ProductGrid'
import { ResponsiveContainer } from '@/components/layout/ResponsiveContainer'
import { ResponsiveNavigation } from '@/components/layout/ResponsiveNavigation'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ResponsiveNavigation />

      <main>
        {/* 히어로 섹션 */}
        <section className="bg-white py-12">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">무신사 웨건</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Zustand를 활용한 반응형 이커머스 플랫폼
              </p>
            </div>
          </ResponsiveContainer>
        </section>

        {/* 상품 그리드 섹션 */}
        <section className="py-12">
          <ResponsiveContainer>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">인기 상품</h2>
              <p className="text-gray-600">지금 가장 인기 있는 상품들을 확인해보세요</p>
            </div>

            <ProductGrid />
          </ResponsiveContainer>
        </section>
      </main>

      {/* 간단한 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <ResponsiveContainer>
          <div className="text-center">
            <p>&copy; 2024 무신사 웨건. All rights reserved.</p>
          </div>
        </ResponsiveContainer>
      </footer>
    </div>
  )
}
