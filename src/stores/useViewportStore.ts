import { create } from 'zustand'

interface ViewportState {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLoaded: boolean
  updateViewport: () => void
}

// 이커머스 웹앱용 브레이크포인트
const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 1024,
} as const

const defaultWidth = typeof window !== 'undefined' ? window.innerWidth : 0
const defaultHeight = typeof window !== 'undefined' ? window.innerHeight : 0

const getDeviceType = (width: number) => ({
  isMobile: width < BREAKPOINTS.MOBILE,
  isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET,
  isDesktop: width >= BREAKPOINTS.TABLET,
})

export const useViewportStore = create<ViewportState>((set) => ({
  width: defaultWidth,
  height: defaultHeight,
  ...getDeviceType(defaultWidth),
  isLoaded: false,

  updateViewport: () => {
    if (typeof window === 'undefined') return

    const newWidth = window.innerWidth
    const newHeight = window.innerHeight

    set({
      width: newWidth,
      height: newHeight,
      ...getDeviceType(newWidth),
      isLoaded: true,
    })
  },
}))

// 편의 함수들
export const useIsMobile = () => useViewportStore((state) => state.isMobile)
export const useIsTablet = () => useViewportStore((state) => state.isTablet)
export const useIsDesktop = () => useViewportStore((state) => state.isDesktop)
