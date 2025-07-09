import { cn } from '@/lib/utils'
import { useIsDesktop, useIsMobile, useIsTablet } from '@/stores/useViewportStore'

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
}

export function ResponsiveContainer({
  children,
  className,
  maxWidth = '2xl',
}: ResponsiveContainerProps) {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const isDesktop = useIsDesktop()

  return (
    <div
      className={cn(
        'w-full mx-auto',
        // 동적 패딩 - 디바이스 타입에 따라 다름
        isMobile && 'px-4',
        isTablet && 'px-6',
        isDesktop && 'px-8',
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  )
}
