import React from 'react'

import { badgeVariants } from './Badge.styles'
import { BadgeProps } from './Badge.types'

const Badge: React.FC<BadgeProps> = ({
  variant = 'custom',
  text,
  icon,
  className = '',
  customColors,
  show = true,
  children,
}) => {
  if (!show) return null

  const variantConfig = badgeVariants[variant]

  // 커스텀 그라디언트 색상 처리
  const gradientClass = customColors
    ? `bg-gradient-to-r from-[${customColors.from}] to-[${customColors.to}]`
    : variantConfig.gradient

  // 아이콘 컴포넌트
  const IconComponent = icon || (variantConfig.icon && variantConfig.icon)

  // 표시할 텍스트
  const displayText = text || variantConfig.text

  // 브랜드 배지는 오른쪽 아래만 둥글게, 나머지는 아래쪽 전체를 둥글게
  const roundedClass = variant === 'brand' ? 'rounded-br-lg' : 'rounded-b-lg'

  return (
    <div
      className={`
        px-2.5 py-1 text-xs ${roundedClass} shadow-lg text-white
        flex items-center gap-1
        ${gradientClass}
        ${className}
      `}
    >
      {IconComponent && <IconComponent className="w-3 h-3" />}
      {displayText}
      {children}
    </div>
  )
}

export default Badge
