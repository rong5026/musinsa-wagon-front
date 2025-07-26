import React from 'react'

import { Product } from '../types/product.types'
import ProductCard from './ProductCard'

// ProductGrid Props 타입 정의
interface ProductGridProps {
  products: Product[]
  className?: string
  onProductClick?: (product: Product) => void
  onHeartClick?: (product: Product) => void
}

// ProductGrid 컴포넌트
const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  className = '',
  onProductClick,
  onHeartClick,
}) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.productNumber}
          product={product}
          showBrand={true}
          showPreviousPrice={true}
          showNotificationCount={true}
          buttonText={'알림 등록하기'}
          buttonIcon={'bell-plus'}
          onProductClick={onProductClick}
          onHeartClick={onHeartClick}
        />
      ))}
    </div>
  )
}

export default ProductGrid
