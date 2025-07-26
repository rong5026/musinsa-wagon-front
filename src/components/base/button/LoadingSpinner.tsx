import React from 'react'

/**
 * 버튼 로딩 스피너 컴포넌트
 */
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
