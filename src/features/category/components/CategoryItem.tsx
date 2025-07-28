/**
 * Component Summary: 개별 카테고리 아이템 컴포넌트
 * Props: category, isActive, onClick, className
 * Usage: CategoryNav 내부에서 각 카테고리를 렌더링할 때 사용
 */
'use client'

import { cn } from '@/lib/utils'
import React from 'react'

import { CategoryItemProps } from '../types/category'

/**
 * Component Summary: 개별 카테고리 아이템 컴포넌트
 * Props: category, isActive, onClick, className
 * Usage: CategoryNav 내부에서 각 카테고리를 렌더링할 때 사용
 */

/**
 * Component Summary: 개별 카테고리 아이템 컴포넌트
 * Props: category, isActive, onClick, className
 * Usage: CategoryNav 내부에서 각 카테고리를 렌더링할 때 사용
 */

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  isActive = false,
  onClick,
  className,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.(category)
  }

  const getBadgeVariant = (variant?: string) => {
    switch (variant) {
      case 'red':
        return 'bg-gradient-to-r from-red-500 to-red-600'
      case 'blue':
        return 'bg-gradient-to-r from-blue-500 to-blue-600'
      case 'green':
        return 'bg-gradient-to-r from-green-500 to-green-600'
      case 'purple':
        return 'bg-gradient-to-r from-purple-500 to-purple-600'
      case 'orange':
        return 'bg-gradient-to-r from-orange-500 to-orange-600'
      default:
        return 'bg-gradient-to-r from-red-500 to-red-600'
    }
  }

  const getIconStyles = (variant?: string) => {
    switch (variant) {
      case 'red':
        return 'group-hover:border-red-500/50 group-hover:text-red-600 group-hover:shadow-red-500/20'
      case 'blue':
        return 'group-hover:border-blue-500/50 group-hover:text-blue-600 group-hover:shadow-blue-500/20'
      case 'green':
        return 'group-hover:border-green-500/50 group-hover:text-green-600 group-hover:shadow-green-500/20'
      case 'purple':
        return 'group-hover:border-purple-500/50 group-hover:text-purple-600 group-hover:shadow-purple-500/20'
      case 'orange':
        return 'group-hover:border-orange-500/50 group-hover:text-orange-600 group-hover:shadow-orange-500/20'
      default:
        return 'group-hover:border-blue-500/50 group-hover:text-blue-600 group-hover:shadow-blue-500/20'
    }
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        // 기본 스타일
        'relative flex flex-col items-center gap-3 p-5 cursor-pointer min-w-[60px]',
        'transition-all duration-300 ease-out  bg-transparent border-2 border-transparent',
        'group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',

        // 반응형 사이즈
        'lg:min-w-[120px]',
        'md:min-w-[100px]',
        'sm:min-w-[40px]',

        className
      )}
      data-category={category.id}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 아이콘 container */}
      <div
        className={cn(
          'relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl overflow-hidden',
          'bg-gradient-to-br from-slate-50 to-slate-200 border border-white/20',
          'transition-all duration-300 ease-out group-hover:scale-105',
          'group-hover:bg-white/95 group-hover:backdrop-blur-sm group-hover:shadow-lg',

          // Badge variant에 따른 hover 스타일
          category.badge
            ? getIconStyles(category.badge.variant)
            : 'group-hover:border-blue-500/30 group-hover:shadow-blue-500/20',

          // Responsive sizing
          'lg:w-12 lg:h-12 lg:text-2xl',
          'md:w-10 md:h-10 md:text-xl',
          'sm:w-10 sm:h-10 sm:text-lg'
        )}
      >
        {/* Icon gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        {/* 아이콘*/}
        <span className="relative z-10">{category.icon}</span>
      </div>

      {/* 카테고리 문구 */}
      <span
        className={cn(
          'text-sm font-semibold text-gray-700 transition-all duration-300',
          'tracking-tight group-hover:text-blue-700 group-hover:font-bold',
          isActive && 'text-gray-700 font-bold',

          // Responsive text size
          'lg:text-sm',
          'md:text-sm',
          'sm:text-xs'
        )}
      >
        {category.name}
      </span>

      {/* 배지 */}
      {category.badge && (
        <div
          className={cn(
            'absolute top-2 right-3 px-1.5 py-0.5 rounded-lg text-white text-xs font-bold',
            'opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100',
            'transition-all duration-300 ease-out shadow-md',
            getBadgeVariant(category.badge.variant)
          )}
        >
          {category.badge.text}
        </div>
      )}
    </button>
  )
}

export default CategoryItem
