'use client'

import MainLayout from '@/components/layout/MainLayout'
import ProductCardList from '@/components/product/ProductCardList'
import { Product } from '@/components/product/product.types'
import React from 'react'

// 샘플 상품 데이터
const sampleProducts: Product[] = [
  {
    productNumber: 1,
    name: '무신사 스탠다드 오버핏 후드 집업',
    brand: '무신사 스탠다드',
    currentPrice: 49000,
    previousPrice: 59000,
    imgUrl:
      'https://image.msscdn.net/images/goods_img/20231201/3662411/3662411_17013717810043_big.jpg?w=1200',
    starScore: 4.8,
    reviewCount: 1247,
    likeCount: 2340,
    notificationCount: 890,
    shopType: 'MUSINSA',
    isNew: true,
    isBestSeller: false,
  },
  {
    productNumber: 2,
    name: '나이키 에어포스 1 07 화이트',
    brand: '나이키',
    currentPrice: 119000,
    previousPrice: 119000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220222/2424667/2424667_1_big.jpg?w=1200',
    starScore: 4.6,
    reviewCount: 3456,
    likeCount: 8920,
    notificationCount: 1234,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: true,
  },
  {
    productNumber: 3,
    name: '리바이스 511 슬림핏 데님 팬츠',
    brand: 'Levis',
    currentPrice: 89000,
    previousPrice: 109000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20230301/3123456/3123456_1_big.jpg?w=1200',
    starScore: 4.4,
    reviewCount: 892,
    likeCount: 1567,
    notificationCount: 456,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: false,
  },
  {
    productNumber: 4,
    name: '아디다스 수퍼스타 화이트 블랙',
    brand: '아디다스',
    currentPrice: 99000,
    previousPrice: 110000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220315/2456789/2456789_1_big.jpg?w=1200',
    starScore: 4.7,
    reviewCount: 2103,
    likeCount: 4521,
    notificationCount: 789,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: true,
  },
  {
    productNumber: 5,
    name: '챔피온 리버스 위브 후드티',
    brand: '챔피온',
    currentPrice: 69000,
    previousPrice: 79000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20231115/3567890/3567890_1_big.jpg?w=1200',
    starScore: 4.5,
    reviewCount: 675,
    likeCount: 1234,
    notificationCount: 321,
    shopType: 'MUSINSA',
    isNew: true,
    isBestSeller: false,
  },
  {
    productNumber: 6,
    name: '컨버스 척테일러 올스타 하이',
    brand: '컨버스',
    currentPrice: 75000,
    previousPrice: 75000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220401/2678901/2678901_1_big.jpg?w=1200',
    starScore: 4.3,
    reviewCount: 1456,
    likeCount: 2789,
    notificationCount: 567,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: false,
  },
]

export default function HomePage() {
  const handleProductClick = (product: Product) => {
    console.log('상품 클릭:', product)
  }

  const handleButtonClick = (product: Product) => {
    console.log('버튼 클릭:', product)
  }

  const handleHeartClick = (product: Product) => {
    console.log('하트 클릭:', product)
  }

  return (
    <MainLayout>
      {/* 히어로 배너 섹션 */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            무신사 웨건에 오신 것을 환영합니다
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            최신 패션 트렌드와 다양한 브랜드를 만나보세요
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
            쇼핑 시작하기
          </button>
        </div>
      </section>

      {/* 상품 섹션들 */}
      <div className="space-y-16">
        {/* 오늘의 핫딜 */}
        <ProductCardList
          products={sampleProducts.slice(0, 4)}
          title="🔥 오늘의 핫딜"
          enableHover
          onProductClick={handleProductClick}
          onButtonClick={handleButtonClick}
          onHeartClick={handleHeartClick}
        />

        {/* 신상품 */}
        <ProductCardList
          products={sampleProducts.slice(1, 6)}
          title="✨ 신상품"
          enableHover
          onProductClick={handleProductClick}
          onButtonClick={handleButtonClick}
          onHeartClick={handleHeartClick}
        />

        {/* 베스트셀러 */}
        <ProductCardList
          products={sampleProducts}
          title="👑 베스트셀러"
          enableHover
          onProductClick={handleProductClick}
          onButtonClick={handleButtonClick}
          onHeartClick={handleHeartClick}
        />

        {/* 추천 상품 */}
        <ProductCardList
          products={[...sampleProducts].reverse()}
          title="💝 추천 상품"
          enableHover
          onProductClick={handleProductClick}
          onButtonClick={handleButtonClick}
          onHeartClick={handleHeartClick}
        />
      </div>

      {/* CTA 섹션 */}
      <section className="mt-20 mb-12">
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">더 많은 상품을 둘러보세요</h2>
          <p className="text-lg opacity-90 mb-8">
            수천 개의 브랜드와 수만 개의 상품이 여러분을 기다리고 있습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              전체 상품 보기
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
              브랜드 둘러보기
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
