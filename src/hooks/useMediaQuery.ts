'use client'

import { useEffect, useState } from 'react'

import { type BreakpointKey, MEDIA_QUERIES } from '@/constants/breakpoints'

export function useMediaQuery(query: BreakpointKey | string): boolean {
  const mediaQuery = query in MEDIA_QUERIES ? MEDIA_QUERIES[query as BreakpointKey] : query

  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    setMatches(mediaQueryList.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)
    return () => mediaQueryList.removeEventListener('change', handleChange)
  }, [mediaQuery])

  return matches
}

export function useIsMobile(): boolean {
  return !useMediaQuery('md')
}

export function useIsDesktop(): boolean {
  return useMediaQuery('lg')
}
