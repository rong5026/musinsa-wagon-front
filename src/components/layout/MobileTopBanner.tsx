/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

'use client'

import React from 'react'

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

/**
 * Component Summary: Mobile top banner promoting app download
 * Props: None (static banner)
 * Usage: Display above main header on mobile devices only
 */

export function MobileTopBanner() {
  const handleAppDownload = () => {
    // TODO: 실제 앱 다운로드 링크로 연결
    alert('앱 다운로드 페이지로 이동')
  }

  return (
    <header className="fixed top-0 w-full bg-[#F1F4F6] z-40 flex items-center justify-between px-4 h-20 sm:hidden">
      {/* 로고 아이콘 */}
      <div className="w-[42px] h-[42px] bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <span className="text-white font-bold text-lg">🍀</span>
      </div>

      {/* 텍스트 영역 */}
      <div className="flex flex-col justify-center pl-4 flex-1 items-center">
        <span className="font-bold leading-5 text-gray-900">빠르고 간편하게 비교하기</span>
        <span className="text-[12px] leading-4 text-gray-500">
          앱에서 더 쉽고 빠르게 이용해보세요!
        </span>
      </div>

      {/* 다운로드 버튼 */}
      <button
        onClick={handleAppDownload}
        className="bg-green-500 text-white font-bold px-3 py-[6px] text-[12px] rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
      >
        앱 다운로드
      </button>
    </header>
  )
}
