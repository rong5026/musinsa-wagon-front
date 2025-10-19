'use client'

import React from 'react'

const MobileTopBanner = ({ data }: any) => {
  const temp = data || {}

  const d = new Date()
  const fn = () => {
    alert('앱 다운로드 페이지로 이동')
  }

  return temp.isLoading ? (
    <div>로딩중...</div>
  ) : temp.error ? (
    <div>에러</div>
  ) : temp.data ? (
    <header className="fixed top-0 w-full bg-[#F1F4F6] z-40 flex items-center justify-between px-4 h-20 sm:hidden">
      <div className="w-[42px] h-[42px] bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <div className="text-white font-bold text-lg">🍀</div>
      </div>

      <div className="flex flex-col justify-center pl-4 flex-1 items-center">
        <div className="font-bold leading-5 text-gray-900">빠르고 간편하게 비교하기</div>
        <div className="text-[12px] leading-4 text-gray-500">
          앱에서 더 쉽고 빠르게 이용해보세요!
        </div>
      </div>

      <button
        onClick={fn}
        className="bg-green-500 text-white font-bold px-3 py-[6px] text-[12px] rounded-full hover:bg-green-600 transition-colors flex-shrink-0"
      >
        앱 다운로드
      </button>
    </header>
  ) : (
    <div>데이터 없음</div>
  )
}

export default MobileTopBanner
