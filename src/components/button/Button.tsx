import React from 'react'

import {
  fontWeightStyles,
  getSizeStyles,
  getVariantStyles,
  iconMap,
  radiusStyles,
} from './button.styles'
import { ButtonProps, IconName } from './button.types'

// 버튼 컴포넌트
const Button: React.FC<ButtonProps> = ({
  // 기본 속성
  children,
  onClick,
  disabled = false,
  type = 'button',

  // 스타일 관련
  variant = 'primary',
  size = 'medium',
  fullWidth = false,

  // 스타일 관련
  fontWeight = 'medium',
  textAlign = 'center',
  customColors,

  // 모양 관련
  borderRadius = 'medium',
  border = true,
  shadow = false,

  // 아이콘 관련
  icon,
  iconPosition = 'left',
  iconSize = 20,
  iconOnly = false,

  // 애니메이션 관련
  animation = false,
  loading = false,
  enableHover = false,

  // 추가 속성
  className = '',
  ...props
}) => {
  const IconComponent = typeof icon === 'string' ? iconMap[icon as IconName] : icon

  const sizeClasses = getSizeStyles(iconOnly)[size]
  const variantClasses = getVariantStyles(customColors, enableHover)[variant]
  const radiusClasses = radiusStyles[borderRadius]
  const fontWeightClasses = fontWeightStyles[fontWeight]

  // 텍스트 정렬 클래스
  const textAlignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  // 기본 클래스들
  const baseClasses = [
    'inline-flex items-center font-inherit select-none outline-none relative overflow-hidden transition-all duration-200',
    iconOnly ? 'justify-center' : textAlignClasses[textAlign],
    iconOnly ? '' : 'gap-2',
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    fullWidth ? 'w-full' : 'w-auto',
    border ? 'border' : 'border-0',
    shadow && enableHover ? 'shadow-md hover:shadow-lg' : shadow ? 'shadow-md' : '',
    animation && !disabled && enableHover ? 'hover:-translate-y-0.5 active:translate-y-0' : '',
    loading ? 'text-transparent' : '',
    radiusClasses,
    fontWeightClasses,
    sizeClasses,
    variantClasses,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={baseClasses}
        {...props}
      >
        {/* 로딩 스피너 */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* 아이콘 (왼쪽) */}
        {IconComponent && iconPosition === 'left' && !iconOnly && <IconComponent size={iconSize} />}

        {/* 아이콘 전용 */}
        {IconComponent && iconOnly && <IconComponent size={iconSize} />}

        {/* 텍스트 */}
        {!iconOnly && children}

        {/* 아이콘 (오른쪽) */}
        {IconComponent && iconPosition === 'right' && !iconOnly && (
          <IconComponent size={iconSize} />
        )}
      </button>
    </>
  )
}

export { Button }
export type { ButtonProps }
