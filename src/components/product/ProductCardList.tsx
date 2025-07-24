import { Button } from '@/components/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

import ProductCard from './ProductCard'
import { Product } from './product.types'

interface ProductCardListProps {
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

const ProductCardList: React.FC<ProductCardListProps> = ({
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
  const spacingClasses = {
    tight: 'pl-2',
    normal: 'pl-4',
    loose: 'pl-6',
  }

  const getItemWidth = () => {
    // 반응형 width 계산
    return `
      w-[calc(100%/${itemsPerView.mobile})]
      sm:w-[calc(100%/${itemsPerView.tablet})]
      lg:w-[calc(100%/${itemsPerView.desktop})]
    `
  }

  return (
    <div className={`w-full ${className}`}>
      {/* 제목 섹션 */}
      {showTitle && (
        <div className="flex items-center justify-between mb-6 px-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <Button variant="ghost" size="small" icon="arrow-right" iconPosition="right" enableHover>
            더보기
          </Button>
        </div>
      )}

      {/* 캐러셀 컨테이너 */}
      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={`${product.productNumber}-${index}`}
                className={`${spacingClasses[spacing]} ${getItemWidth()}`}
              >
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
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* 네비게이션 버튼 */}
          {showControls && (
            <>
              <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 shadow-lg">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 shadow-lg">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </>
          )}
        </Carousel>
      </div>

      {/* 인디케이터 (작은 화면에서만 표시) */}
      <div className="flex justify-center mt-4 space-x-2 sm:hidden">
        {Array.from({ length: Math.ceil(products.length / itemsPerView.mobile) }).map(
          (_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 transition-colors duration-200 hover:bg-gray-400"
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  )
}

export default ProductCardList
