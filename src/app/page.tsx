/**
 * 파일 요약: 홈페이지 메인 컴포넌트, Header와 ProductGrid를 포함한 레이아웃
 * 주요 내보내기: HomePage (default)
 * 의존성: @/components (Header), @/features/products (ProductGrid)
 */

'use client'

import { Header } from '@/components'
import { ProductGrid } from '@/features/products'
import { Product } from '@/features/products/types'
import React from 'react'

/**
 * 파일 요약: 홈페이지 메인 컴포넌트, Header와 ProductGrid를 포함한 레이아웃
 * 주요 내보내기: HomePage (default)
 * 의존성: @/components (Header), @/features/products (ProductGrid)
 */

export default function HomePage() {
  // 임시 샘플 데이터 (Task 2에서 실제 데이터로 대체 예정)
  const sampleProducts: Product[] = []

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductGrid products={sampleProducts} className="mt-4" />
      </main>
    </div>
  )
}
