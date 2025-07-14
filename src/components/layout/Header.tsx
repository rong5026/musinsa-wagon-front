import { Search } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '../button/button'
import { IconName } from '../button/button.types'
import NotificationButton from '../notification/NotificationButton'

// 로고 컴포넌트
const Logo = ({ logoText, onClick }: { logoText: string; onClick?: () => void }) => (
  <div className="bg-white flex text-center font-bold text-lg justify-center" onClick={onClick}>
    {logoText}
  </div>
)

// 검색창 컴포넌트
const SearchBar = ({
  searchQuery,
  placeholder,
  onSearch,
  onChange,
  onKeyDown,
}: {
  searchQuery: string
  placeholder: string
  onSearch: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent) => void
}) => (
  <div className="relative ms-4 me-4 sm:ms-7 sm:me-7 xl:ms-9 flex-1">
    <form className="w-full relative flex items-center h-10 overflow-hidden rounded-md bg-gray-100 px-3 py-[10px] lg:px-5 space-x-2">
      <label className="flex items-center py-0.5 flex-none w-4 h-4" onClick={onSearch}>
        <Search size={24} />
      </label>
      <input
        autoComplete="off"
        type="text"
        value={searchQuery}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="flex-auto text-sm bg-transparent placeholder-[#9CA3AF] overflow-hidden text-ellipsis whitespace-nowrap outline-none"
      />
    </form>
  </div>
)

// 메뉴 버튼 컴포넌트
const MenuButton = ({
  icon,
  label,
  onClick,
}: {
  icon: IconName
  label: string
  onClick: () => void
}) => (
  <Button
    onClick={onClick}
    icon={icon}
    variant="ghost"
    size="small"
    className="!text-gray-600 hover:!text-gray-900 hover:!bg-gray-50 !px-3 !py-2.5"
  >
    <span className="hidden md:block text-sm font-medium">{label}</span>
  </Button>
)

// 우측 메뉴 컴포넌트
const RightMenu = ({
  notificationCount,
  onAddProduct,
  onMyPage,
}: {
  notificationCount: number
  onAddProduct: () => void
  onMyPage: () => void
}) => (
  <div className="flex items-center">
    <NotificationButton notificationCount={notificationCount} />
    <MenuButton icon="list-plus" label="상품 등록" onClick={onAddProduct} />
    <MenuButton icon="user" label="마이페이지" onClick={onMyPage} />
  </div>
)

// 헤더 Props 타입 정의
interface HeaderProps {
  logoText?: string
  searchPlaceholder?: string
  notificationCount?: number
  onSearch?: (query: string) => void
  onAddProduct?: () => void
  onMyPage?: () => void
  onNotification?: () => void
  onLogoClick?: () => void
  className?: string
}

// 메인 헤더 컴포넌트
const Header = ({
  logoText = 'MUSINSAWAGON',
  searchPlaceholder = '어떤 상품을 찾으시나요?',
  notificationCount = 4,
  onSearch,
  onAddProduct,
  onMyPage,
  onNotification,
  onLogoClick,
  className = '',
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  // 검색 처리
  const handleSearch = () => {
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim())
    }
  }

  // 엔터키 검색
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // 검색 입력 처리
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // 로고 클릭 처리
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick()
    }
  }

  // 상품 등록 클릭
  const handleAddProduct = () => {
    if (onAddProduct) {
      onAddProduct()
    } else {
      alert('상품 등록 페이지로 이동')
    }
  }

  // 마이페이지 클릭
  const handleMyPage = () => {
    if (onMyPage) {
      onMyPage()
    } else {
      alert('마이페이지로 이동')
    }
  }

  return (
    <header className={`bg-white border-b border-gray-100 shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo logoText={logoText} onClick={handleLogoClick} />

          <SearchBar
            searchQuery={searchQuery}
            placeholder={searchPlaceholder}
            onSearch={handleSearch}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
          />

          <RightMenu
            notificationCount={notificationCount}
            onAddProduct={handleAddProduct}
            onMyPage={handleMyPage}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
