import { fontWeightStyles, getSizeStyles, getVariantStyles, radiusStyles } from './button.styles'
import { ButtonProps } from './button.types'

interface ClassGenerationProps {
  variant: ButtonProps['variant']
  size: ButtonProps['size']
  fullWidth: boolean
  fontWeight: ButtonProps['fontWeight']
  textAlign: ButtonProps['textAlign']
  customColors?: string
  borderRadius: ButtonProps['borderRadius']
  border: boolean
  shadow: boolean
  iconOnly: boolean
  animation: boolean
  loading: boolean
  enableHover: boolean
  disabled: boolean
  className?: string
}

// 텍스트 정렬 클래스 매핑
const textAlignClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
} as const

/**
 * 버튼의 모든 클래스를 생성하는 유틸리티 함수
 */
export const generateButtonClasses = ({
  variant = 'primary',
  size = 'medium',
  fullWidth,
  fontWeight = 'medium',
  textAlign = 'center',
  customColors,
  borderRadius = 'medium',
  border,
  shadow,
  iconOnly,
  animation,
  loading,
  enableHover,
  disabled,
  className = '',
}: ClassGenerationProps): string => {
  const sizeClasses = getSizeStyles(iconOnly)[size]
  const variantClasses = getVariantStyles(customColors, enableHover)[variant]
  const radiusClasses = radiusStyles[borderRadius]
  const fontWeightClasses = fontWeightStyles[fontWeight]

  const baseClasses = [
    // 기본 버튼 스타일
    'inline-flex items-center font-inherit select-none outline-none relative overflow-hidden transition-all duration-200',

    // 정렬
    iconOnly ? 'justify-center' : textAlignClasses[textAlign],

    // 간격
    iconOnly ? '' : 'gap-2',

    // 상태별 커서
    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',

    // 너비
    fullWidth ? 'w-full' : 'w-auto',

    // 테두리
    border ? 'border' : 'border-0',

    // 그림자
    shadow && enableHover ? 'shadow-md hover:shadow-lg' : shadow ? 'shadow-md' : '',

    // 애니메이션
    animation && !disabled && enableHover ? 'hover:-translate-y-0.5 active:translate-y-0' : '',

    // 로딩 상태
    loading ? 'text-transparent' : '',

    // 스타일 클래스들
    radiusClasses,
    fontWeightClasses,
    sizeClasses,
    variantClasses,

    // 커스텀 클래스
    className,
  ]

  return baseClasses.filter(Boolean).join(' ')
}
