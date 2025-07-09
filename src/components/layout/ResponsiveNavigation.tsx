'use client'

import { cn } from '@/lib/utils'
import { useIsMobile, useIsTablet } from '@/stores/useViewportStore'
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react'
import { useState } from 'react'

const navigationItems = [
  { label: '홈', href: '/' },
  { label: '상품', href: '/products' },
  { label: '브랜드', href: '/brands' },
  { label: '세일', href: '/sale' },
  { label: '고객센터', href: '/support' },
]

export function ResponsiveNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">무신사 웨건</h1>
          </div>

          {/* 데스크탑 네비게이션 */}
          {!isMobile && !isTablet && (
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* 우측 아이콘들 */}
          <div className="flex items-center space-x-4">
            {/* 검색 아이콘 */}
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <Search size={20} />
            </button>

            {/* 장바구니 아이콘 */}
            <button className="text-gray-600 hover:text-gray-900 p-2 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* 사용자 아이콘 */}
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <User size={20} />
            </button>

            {/* 모바일/태블릿 햄버거 메뉴 */}
            {(isMobile || isTablet) && (
              <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* 모바일/태블릿 메뉴 */}
        {(isMobile || isTablet) && (
          <div
            className={cn(
              'md:hidden transition-all duration-300 ease-in-out',
              isMenuOpen
                ? 'max-h-96 opacity-100 border-t border-gray-200'
                : 'max-h-0 opacity-0 overflow-hidden'
            )}
          >
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
