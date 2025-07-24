import React from 'react'

import { iconMap } from './button.styles'
import { IconName, LucideIcon } from './button.types'

interface ButtonIconProps {
  icon: IconName | LucideIcon
  iconSize: number
  iconOnly: boolean
}

/**
 * 버튼 아이콘을 렌더링하는 컴포넌트
 */
export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, iconSize, iconOnly }) => {
  const IconComponent = typeof icon === 'string' ? iconMap[icon as IconName] : icon

  if (!IconComponent) {
    return null
  }

  // iconOnly인 경우 위치와 상관없이 렌더링
  if (iconOnly) {
    return <IconComponent size={iconSize} />
  }

  // 일반적인 경우 위치에 따라 렌더링
  return <IconComponent size={iconSize} />
}
