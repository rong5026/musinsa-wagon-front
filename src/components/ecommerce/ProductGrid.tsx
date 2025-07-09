'use client'

import { cn } from '@/lib/utils'
import { useIsDesktop, useIsMobile, useIsTablet } from '@/stores/useViewportStore'
import { Heart, ShoppingCart } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  imageUrl: string
  brand: string
  isLiked?: boolean
}

interface ProductGridProps {
  products: Product[]
  className?: string
}

// 임시 상품 데이터
const sampleProducts: Product[] = [
  {
    id: '1',
    name: '오버사이즈 후드 티셔츠',
    price: 39000,
    originalPrice: 59000,
    imageUrl: '/api/placeholder/300/400',
    brand: '무신사 스탠다드',
    isLiked: false,
  },
  {
    id: '2',
    name: '슬림 핏 청바지',
    price: 79000,
    imageUrl: '/api/placeholder/300/400',
    brand: '리바이스',
    isLiked: true,
  },
  {
    id: '3',
    name: '베이직 크루넥 니트',
    price: 49000,
    imageUrl: '/api/placeholder/300/400',
    brand: '유니클로',
    isLiked: false,
  },
  {
    id: '4',
    name: '스니커즈 화이트',
    price: 89000,
    originalPrice: 119000,
    imageUrl: '/api/placeholder/300/400',
    brand: '나이키',
    isLiked: false,
  },
  {
    id: '5',
    name: '울 코트',
    price: 159000,
    imageUrl: '/api/placeholder/300/400',
    brand: '자라',
    isLiked: true,
  },
  {
    id: '6',
    name: '캐시미어 머플러',
    price: 69000,
    imageUrl: '/api/placeholder/300/400',
    brand: '에잇세컨즈',
    isLiked: false,
  },
]

function ProductCard({ product }: { product: Product }) {
  const isMobile = useIsMobile()

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* 상품 이미지 */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* 좋아요 버튼 */}
        <button
          className={cn(
            'absolute top-2 right-2 p-2 rounded-full transition-colors',
            'bg-white/80 hover:bg-white',
            product.isLiked ? 'text-red-500' : 'text-gray-400'
          )}
        >
          <Heart size={isMobile ? 16 : 20} fill={product.isLiked ? 'currentColor' : 'none'} />
        </button>

        {/* 할인 뱃지 */}
        {product.originalPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}

        {/* 호버 시 장바구니 버튼 */}
        <button className="absolute bottom-2 right-2 p-2 bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ShoppingCart size={isMobile ? 16 : 20} />
        </button>
      </div>

      {/* 상품 정보 */}
      <div className="p-3">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3
          className={cn(
            'font-medium text-gray-900 mb-2 line-clamp-2',
            isMobile ? 'text-sm' : 'text-base'
          )}
        >
          {product.name}
        </h3>

        <div className="flex items-center space-x-2">
          <span className={cn('font-bold text-gray-900', isMobile ? 'text-sm' : 'text-base')}>
            {product.price.toLocaleString()}원
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.originalPrice.toLocaleString()}원
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProductGrid({ products = sampleProducts, className }: ProductGridProps) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  // 디바이스별 그리드 컬럼 수
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-2'
    if (isTablet) return 'grid-cols-3'
    if (isDesktop) return 'grid-cols-4'
    return 'grid-cols-2' // 기본값
  }

  return (
    <div className={cn('grid gap-4', getGridCols(), isMobile && 'gap-2', className)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
