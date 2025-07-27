/**
 * File Summary: 카테고리 관련 타입 정의
 * Key exports: Category, CategoryBadge, CategoryNavProps, CategoryItemProps
 * Dependencies: 없음
 */

export interface Category {
  id: string
  name: string
  icon: string
  href?: string
  badge?: CategoryBadge
}

export interface CategoryBadge {
  type: 'NEW' | 'HOT' | 'SALE' | 'PERCENT'
  text: string
  variant?: 'red' | 'blue' | 'green' | 'purple' | 'orange'
}

export interface CategoryNavProps {
  categories: Category[]
  activeCategory?: string
  onCategorySelect?: (category: Category) => void
  className?: string
  enableKeyboardNavigation?: boolean
  enableScrollOpacity?: boolean
}

export interface CategoryItemProps {
  category: Category
  isActive?: boolean
  onClick?: (category: Category) => void
  className?: string
}
