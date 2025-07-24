'use client'

import { cn } from '@/lib/utils'
import { useIsDesktop, useIsMobile, useIsTablet, useViewportStore } from '@/stores/useViewportStore'
import React, { useEffect } from 'react'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  fullWidth?: boolean // Header/Footer 등에서 전체 너비 사용시
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
}

/**
 * 반응형 컨테이너 컴포넌트
 * - Header/Footer: fullWidth=true로 전체 너비, 패딩 없음
 * - 본문 영역: PC는 좌우 여백, 태블릿/모바일은 여백 없음
 */
export function ResponsiveContainer({
  children,
  className,
  fullWidth = false,
  maxWidth = '7xl',
}: ResponsiveContainerProps) {
  const updateViewport = useViewportStore((state) => state.updateViewport)
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  // 뷰포트 업데이트 및 리사이즈 이벤트 등록
  useEffect(() => {
    // 초기 뷰포트 설정
    updateViewport()

    // 리사이즈 이벤트 리스너
    const handleResize = () => {
      updateViewport()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [updateViewport])

  // fullWidth인 경우 (Header/Footer) - 항상 전체 너비, 패딩 없음
  if (fullWidth) {
    return <div className={cn('w-full', className)}>{children}</div>
  }

  // 본문 영역 - 반응형 여백 적용
  return (
    <div
      className={cn(
        'w-full mx-auto',
        // PC: 좌우 여백 있음
        isDesktop && 'px-6 lg:px-8',
        // 태블릿: 최소 여백
        isTablet && 'px-4',
        // 모바일: 여백 없음
        isMobile && 'px-0',
        // 최대 너비 설정
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  )
}
