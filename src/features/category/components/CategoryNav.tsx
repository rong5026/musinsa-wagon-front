/**
 * Component Summary: 이커머스 카테고리 네비게이션 컴포넌트
 * Props: categories, activeCategory, onCategorySelect, className, enableKeyboardNavigation, enableScrollOpacity
 * Usage: 상품 카테고리를 선택할 수 있는 가로 스크롤 네비게이션
 */
'use client'

import { cn } from '@/lib/utils'
import React, { useCallback, useEffect, useRef, useState } from 'react'

import { CategoryNavProps } from '../types/category'
import CategoryItem from './CategoryItem'

/**
 * Component Summary: 이커머스 카테고리 네비게이션 컴포넌트
 * Props: categories, activeCategory, onCategorySelect, className, enableKeyboardNavigation, enableScrollOpacity
 * Usage: 상품 카테고리를 선택할 수 있는 가로 스크롤 네비게이션
 */

const CategoryNav: React.FC<CategoryNavProps> = ({
  categories,
  activeCategory,
  onCategorySelect,
  className,
  enableKeyboardNavigation = true,
  enableScrollOpacity = true,
}) => {
  const [currentActive, setCurrentActive] = useState(activeCategory || categories[0]?.id)
  const [navOpacity, setNavOpacity] = useState(1)
  const navRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)

  // 카테고리 선택 핸들러
  const handleCategorySelect = useCallback(
    (category: any) => {
      setCurrentActive(category.id)
      onCategorySelect?.(category)

      // 선택된 카테고리로 부드럽게 스크롤
      if (listRef.current) {
        const categoryElement = listRef.current.querySelector(`[data-category="${category.id}"]`)
        if (categoryElement) {
          categoryElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
          })
        }
      }
    },
    [onCategorySelect]
  )

  // 키보드 네비게이션
  useEffect(() => {
    if (!enableKeyboardNavigation) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = categories.findIndex((cat) => cat.id === currentActive)
      let nextIndex = currentIndex

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        nextIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0
      }

      if (nextIndex !== currentIndex) {
        handleCategorySelect(categories[nextIndex])
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [categories, currentActive, enableKeyboardNavigation, handleCategorySelect])

  // 스크롤 시 투명도 조절
  useEffect(() => {
    if (!enableScrollOpacity) return

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setNavOpacity(0.9)
      } else {
        setNavOpacity(1)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [enableScrollOpacity])

  return (
    <div className="w-full max-w-6xl mx-auto px-5">
      <nav
        ref={navRef}
        className={cn(
          'relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 border border-white/20',
          'shadow-xl shadow-black/5',
          'transition-opacity duration-300 ease-out',
          className
        )}
        style={{ opacity: navOpacity }}
      >
        {/* Scroll gradient overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-white/95 to-transparent pointer-events-none z-10 rounded-l-3xl" />
        <div className="absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-white/95 to-transparent pointer-events-none z-10 rounded-r-3xl" />

        {/* Category list */}
        <div
          ref={listRef}
          className={cn(
            'flex justify-between items-center gap-2 overflow-x-auto',
            'scrollbar-none scroll-smooth',
            // Custom scrollbar hiding
            '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]',

            // Responsive justification
            'lg:justify-between lg:gap-2',
            'md:justify-start md:gap-4',
            'sm:justify-start sm:gap-4'
          )}
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              isActive={category.id === currentActive}
              onClick={handleCategorySelect}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </nav>
    </div>
  )
}

export default CategoryNav
