'use client'

import { useViewportStore } from '@/stores/useViewportStore'
import { useEffect } from 'react'

interface ViewportProviderProps {
  children: React.ReactNode
}

export function ViewportProvider({ children }: ViewportProviderProps) {
  const updateViewport = useViewportStore((state) => state.updateViewport)

  useEffect(() => {
    // 초기 뷰포트 설정
    updateViewport()

    // 리사이즈 이벤트 리스너
    const handleResize = () => {
      updateViewport()
    }

    window.addEventListener('resize', handleResize)

    // 오리엔테이션 변경 이벤트 (모바일)
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [updateViewport])

  return <>{children}</>
}
