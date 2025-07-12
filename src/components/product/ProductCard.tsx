import { Badge } from '@/components/badge'
import { Button, IconName, LucideIcon } from '@/components/button'
import { formatNumber, getPriceChange } from '@/utils/number'
import { flatMap } from 'es-toolkit'
import { ArrowDown, ArrowUp, Bell, BellPlus, Heart, ShoppingCart, Star } from 'lucide-react'
import React from 'react'

import { Product } from './product.types'

// 컴포넌트 Props 타입 정의
interface ProductCardProps {
  product: Product
  className?: string
  imageHeight?: 'small' | 'medium' | 'large'
  showBrand?: boolean
  showPreviousPrice?: boolean
  showNotificationCount?: boolean
  buttonText?: string
  buttonIcon?: IconName | LucideIcon
  enableHover?: boolean
  ieLike?: boolean
  onButtonClick?: (product: Product) => void
  onProductClick?: (product: Product) => void
  onHeartClick?: (product: Product) => void
}

// 메인 ProductCard 컴포넌트
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
  imageHeight = 'medium',
  showBrand = true,
  showPreviousPrice = true,
  showNotificationCount = true,
  buttonText = '알림 등록하기',
  buttonIcon = 'bell-plus',
  enableHover = false,
  ieLike = false,
  onButtonClick,
  onProductClick,
  onHeartClick,
}) => {
  // 이미지 높이 설정
  const imageHeightClasses = {
    small: 'h-32 sm:h-36',
    medium: 'h-40 sm:h-52',
    large: 'h-48 sm:h-64',
  }

  // 기본 상품 클릭 핸들러
  const handleProductClick = () => {
    if (onProductClick) {
      onProductClick(product)
    }
  }

  // 버튼 클릭 핸들러
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onButtonClick) {
      onButtonClick(product)
    }
  }

  // 하트 클릭 핸들러
  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onHeartClick) {
      onHeartClick(product)
    }
  }

  // 가격 변동 정보
  const priceChange = getPriceChange(product.currentPrice, product.previousPrice)
  const isPriceUp = product.currentPrice > product.previousPrice

  // 호버 효과 클래스
  const hoverClasses = enableHover
    ? 'hover:shadow-2xl hover:cursor-pointer hover:scale-[1.02] hover:-translate-y-1'
    : ''

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 border border-gray-100 ${hoverClasses} ${className}`}
      onClick={handleProductClick}
    >
      {/* 상품 이미지 영역 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
        <img
          src={product.imgUrl}
          alt={product.name}
          className={`w-full ${imageHeightClasses[imageHeight]} object-cover transition-transform duration-700 ${enableHover ? 'group-hover:scale-110' : ''}`}
        />

        {/* 상단 배지들 */}
        <div className="absolute top-0 left-0 z-20 flex">
          {/* 브랜드 배지 */}
          <Badge variant="brand" text={product.brand} show={showBrand} />
          <Badge variant="new" show={product.isNew} />
          <Badge variant="best" show={product.isBestSeller} />
        </div>

        {/* 하트 아이콘 (우하단) */}
        <Heart
          className={`absolute bottom-2 right-3 z-20 w-6 h-6 hover:text-rose-500 hover:fill-current transition-all duration-300 cursor-pointer ${
            ieLike ? 'text-rose-500 fill-current' : 'text-white'
          }`}
          onClick={handleHeartClick}
        />
      </div>

      {/* 상품 정보 영역 */}
      <div className="p-5 flex flex-col h-auto">
        {/* 상품명 */}
        <h3 className="text-lg font-bold mb-3 leading-tight text-gray-900 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* 가격 정보 */}
        <div className="mb-4">
          {/* 이전 가격 */}
          {showPreviousPrice && !isPriceUp && (
            <div className="text-xs text-gray-500 line-through mb-1">
              {product.previousPrice.toLocaleString()}원
            </div>
          )}

          {/* 현재 가격 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-2xl font-bold text-gray-900">
              {product.currentPrice.toLocaleString()}
              <span className="text-lg font-medium ml-1">원</span>
            </span>

            {/* 가격 변동 표시 */}
            {Math.abs(priceChange.diff) > 0 && (
              <div
                className={`flex items-center px-2 py-1 rounded-full text-xs font-medium w-fit ${
                  isPriceUp ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                }`}
              >
                {isPriceUp ? (
                  <ArrowUp className="w-3 h-3 mr-1" />
                ) : (
                  <ArrowDown className="w-3 h-3 mr-1" />
                )}
                <span className="sm:hidden">{Math.abs(priceChange.diff).toLocaleString()}원</span>
                <span className="sm:hidden">&nbsp;(</span>
                {Math.abs(Number(priceChange.percentage))}%<span className="sm:hidden">)</span>
              </div>
            )}
          </div>
        </div>

        {/* 평점 및 리뷰 */}
        <div className="flex items-center mb-4 gap-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">
              {product.starScore.toFixed(1)}
            </span>
            <span className="text-sm text-gray-500">({formatNumber(product.reviewCount)})</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-rose-400 fill-current" />
              <span>{formatNumber(product.likeCount)}</span>
            </div>

            {showNotificationCount && (
              <div className="flex items-center gap-1">
                <Bell className="w-4 h-4 text-blue-400 fill-current" />
                <span>{formatNumber(product.notificationCount || 0)}</span>
              </div>
            )}
          </div>
        </div>

        {/* 액션 버튼 */}
        <Button
          onClick={handleButtonClick}
          fullWidth
          border={false}
          icon={buttonIcon}
          className="bg-slate-700 hover:bg-slate-800
           py-3 font-semibold flex items-center justify-center text-sm shadow-lg hover:shadow-xl "
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default ProductCard
