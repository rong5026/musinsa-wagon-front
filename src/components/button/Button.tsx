import React from 'react'

import { ButtonIcon } from './ButtonIcon'
import { LoadingSpinner } from './LoadingSpinner'
import { ButtonProps } from './button.types'
import { generateButtonClasses } from './button.utils'

/**
 * 버튼 컴포넌트
 * 다양한 스타일, 크기, 아이콘을 지원하는 재사용 가능한 버튼
 */
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
  // 버튼 클래스 생성
  const buttonClasses = generateButtonClasses({
    variant,
    size,
    fullWidth,
    fontWeight,
    textAlign,
    customColors,
    borderRadius,
    border,
    shadow,
    iconOnly,
    animation,
    loading,
    enableHover,
    disabled,
    className,
  })

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {/* 로딩 스피너 */}
      {loading && <LoadingSpinner />}

      {/* 왼쪽 아이콘 */}
      {icon && iconPosition === 'left' && !iconOnly && (
        <ButtonIcon icon={icon} iconSize={iconSize} iconOnly={false} />
      )}

      {/* 아이콘 전용 */}
      {icon && iconOnly && <ButtonIcon icon={icon} iconSize={iconSize} iconOnly={true} />}

      {/* 텍스트 */}
      {!iconOnly && children}

      {/* 오른쪽 아이콘 */}
      {icon && iconPosition === 'right' && !iconOnly && (
        <ButtonIcon icon={icon} iconSize={iconSize} iconOnly={false} />
      )}
    </button>
  )
}

export { Button }
export type { ButtonProps }
