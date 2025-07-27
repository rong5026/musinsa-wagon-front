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

  return (
    <button
      onClick={handleClick}
      className={cn(
        // Base styles
        'relative flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer',
        'transition-all duration-300 ease-out min-w-[120px] bg-transparent border-2 border-transparent',
        'group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2',

        // Hover effects
        'hover:bg-white hover:shadow-lg hover:shadow-indigo-500/10',

        // Active state
        isActive && 'bg-white shadow-lg shadow-indigo-500/10',

        // Responsive sizing
        'lg:min-w-[120px] lg:p-5',
        'md:min-w-[100px] md:p-4',
        'sm:min-w-[80px] sm:p-3 sm:gap-2',

        className
      )}
      data-category={category.id}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon container */}
      <div
        className={cn(
          'relative w-12 h-12 rounded-xl flex items-center justify-center text-2xl overflow-hidden',
          'bg-gradient-to-br from-slate-50 to-slate-200 border border-white/20',
          'transition-all duration-300 ease-out group-hover:scale-105',
          'group-hover:bg-white/95 group-hover:backdrop-blur-sm group-hover:border-indigo-500/30',
          'group-hover:shadow-lg group-hover:shadow-indigo-500/20',

          // Active state
          isActive && [
            'bg-gradient-to-br from-indigo-500 to-purple-600 text-white scale-110',
            'shadow-lg shadow-indigo-500/40 border-white/30',
            'animate-pulse',
          ],

          // Responsive sizing
          'lg:w-12 lg:h-12 lg:text-2xl',
          'md:w-10 md:h-10 md:text-xl',
          'sm:w-10 sm:h-10 sm:text-lg'
        )}
      >
        {/* Icon gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

        {/* Icon */}
        <span className="relative z-10">{category.icon}</span>
      </div>

      {/* Category text */}
      <span
        className={cn(
          'text-sm font-semibold text-gray-700 transition-all duration-300',
          'tracking-tight group-hover:text-indigo-600 group-hover:font-bold',
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
            'absolute top-2 right-2 px-1.5 py-0.5 rounded-lg text-white text-xs font-bold',
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
