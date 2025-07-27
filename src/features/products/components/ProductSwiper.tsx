/**
 * Component Summary: Swiper를 사용한 상품 카드 슬라이더 컴포넌트
 * Props: products, title, itemsPerView, spacing, showControls 등
 * Usage: 상품 목록을 슬라이드 형태로 표시하는 재사용 가능한 컴포넌트
 */
'use client'

import { Button } from '@/components/base'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Product } from '../types/product.types'
import ProductCard from './ProductCard'

/**
 * Component Summary: Swiper를 사용한 상품 카드 슬라이더 컴포넌트
 * Props: products, title, itemsPerView, spacing, showControls 등
 * Usage: 상품 목록을 슬라이드 형태로 표시하는 재사용 가능한 컴포넌트
 */

/**
 * Component Summary: Swiper를 사용한 상품 카드 슬라이더 컴포넌트
 * Props: products, title, itemsPerView, spacing, showControls 등
 * Usage: 상품 목록을 슬라이드 형태로 표시하는 재사용 가능한 컴포넌트
 */

interface ProductSwiperProps {
  products: Product[]
  title?: string
  showTitle?: boolean
  itemsPerView?: {
    mobile: number
    tablet: number
    desktop: number
  }
  spacing?: 'tight' | 'normal' | 'loose'
  showControls?: boolean
  enableHover?: boolean
  onProductClick?: (product: Product) => void
  onButtonClick?: (product: Product) => void
  onHeartClick?: (product: Product) => void
  className?: string
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({
  products,
  title = '추천 상품',
  showTitle = true,
  itemsPerView = {
    mobile: 2,
    tablet: 3,
    desktop: 4,
  },
  spacing = 'normal',
  showControls = true,
  enableHover = true,
  onProductClick,
  onButtonClick,
  onHeartClick,
  className = '',
}) => {
  const swiperRef = useRef<SwiperType | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      {/* Swiper 컨테이너 */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={spacing === 'tight' ? 8 : spacing === 'normal' ? 16 : 24}
          slidesPerView={itemsPerView.mobile}
          breakpoints={{
            640: {
              slidesPerView: itemsPerView.tablet,
            },
            1024: {
              slidesPerView: itemsPerView.desktop,
            },
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass:
              'w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200 cursor-pointer',
            bulletActiveClass: 'bg-gray-600',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          className="w-full px-4"
        >
          {products.map((product, index) => (
            <SwiperSlide key={`${product.productNumber}-${index}`}>
              <div className="h-full">
                <ProductCard
                  product={product}
                  enableHover={enableHover}
                  onProductClick={onProductClick}
                  onButtonClick={onButtonClick}
                  onHeartClick={onHeartClick}
                  className="h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 커스텀 네비게이션 버튼 */}
        {showControls && (
          <>
            <button
              ref={prevRef}
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10
                         bg-white/90 hover:bg-white border border-gray-200 shadow-lg
                         rounded-full w-8 h-8 flex items-center justify-center
                         transition-all duration-200 hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              ref={nextRef}
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10
                         bg-white/90 hover:bg-white border border-gray-200 shadow-lg
                         rounded-full w-8 h-8 flex items-center justify-center
                         transition-all duration-200 hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* 커스텀 페이지네이션 (모바일에서만 표시) */}
      <div className="swiper-pagination-custom flex justify-center mt-4 space-x-2 sm:hidden" />
    </div>
  )
}

export default ProductSwiper
