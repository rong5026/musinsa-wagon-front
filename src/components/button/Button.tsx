import React, { CSSProperties, useState } from 'react'

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

  // 색상 관련
  backgroundColor,
  textColor,
  borderColor,
  hoverBackgroundColor,
  hoverTextColor,

  // 텍스트 관련
  fontSize,
  fontWeight = 'medium',
  textAlign = 'center',

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
  animation = true,
  loading = false,

  // 추가 속성
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const IconComponent = typeof icon === 'string' ? iconMap[icon as IconName] : icon

  const sizeStyles = getSizeStyles(iconOnly)
  const variantStyles = getVariantStyles(
    backgroundColor,
    textColor,
    borderColor,
    hoverBackgroundColor,
    hoverTextColor
  )

  const currentVariant = variantStyles[variant]
  const currentSize = sizeStyles[size]

  const buttonStyle: CSSProperties = {
    // 기본 스타일
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: iconOnly ? 'center' : textAlign,
    gap: iconOnly ? '0' : '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: border ? `1px solid ${currentVariant.borderColor}` : 'none',
    borderRadius: radiusStyles[borderRadius],
    fontFamily: 'inherit',
    textDecoration: 'none',
    userSelect: 'none',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',

    // 크기 관련
    ...currentSize,
    width: fullWidth ? '100%' : 'auto',
    fontSize: fontSize || currentSize.fontSize,
    fontWeight: fontWeightStyles[fontWeight],

    // 색상 관련
    backgroundColor: isHovered
      ? currentVariant.hoverBackgroundColor
      : currentVariant.backgroundColor,
    color: isHovered ? currentVariant.hoverTextColor : currentVariant.color,

    // 그림자
    boxShadow: shadow ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',

    // 애니메이션
    transition: animation ? 'all 0.2s ease-in-out' : 'none',
    transform: animation && isHovered && !disabled ? 'translateY(-1px)' : 'none',

    // 비활성화 상태
    opacity: disabled ? 0.5 : 1,

    // 로딩 상태
    ...(loading && {
      color: 'transparent',
    }),

    // 커스텀 스타일
    ...style,
  }

  return (
    <>
      <button
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
        className={className}
        {...props}
      >
        {/* 로딩 스피너 */}
        {loading && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              border: '2px solid transparent',
              borderTop: '2px solid currentColor',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
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

      {/* 애니메이션 스타일 */}
      <style>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export { Button }
export type { ButtonProps }
