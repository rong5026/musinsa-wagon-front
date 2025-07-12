import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

// LucideIcon 타입 정의
export type LucideIcon = React.ComponentType<{ size?: number; className?: string }>

// 타입 정의
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'outline'
  | 'ghost'
  | 'link'

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'

export type BorderRadius = 'none' | 'small' | 'medium' | 'large' | 'xlarge' | 'full'

export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'

export type TextAlign = 'left' | 'center' | 'right'

export type IconPosition = 'left' | 'right'

export type IconName =
  | 'shopping-cart'
  | 'bell'
  | 'download'
  | 'plus'
  | 'heart'
  | 'share'
  | 'settings'
  | 'user'
  | 'search'
  | 'mail'
  | 'phone'
  | 'check'
  | 'x'
  | 'edit'
  | 'trash'
  | 'arrow-right'
  | 'arrow-left'
  | 'home'
  | 'star'

// 버튼 Props 인터페이스
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  // 기본 속성
  children?: ReactNode
  disabled?: boolean

  // 스타일 관련
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean

  // 색상 관련
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  hoverBackgroundColor?: string
  hoverTextColor?: string

  // 텍스트 관련
  fontSize?: string | number
  fontWeight?: FontWeight
  textAlign?: TextAlign

  // 모양 관련
  borderRadius?: BorderRadius
  border?: boolean
  shadow?: boolean

  // 아이콘 관련
  icon?: IconName | LucideIcon
  iconPosition?: IconPosition
  iconSize?: number
  iconOnly?: boolean

  // 애니메이션 관련
  animation?: boolean
  loading?: boolean

  // 추가 속성
  className?: string
  style?: CSSProperties
}

// 사이즈 스타일 타입
export interface SizeStyle {
  padding: string
  fontSize: string
  minHeight: string
}

// 변형 스타일 타입
export interface VariantStyle {
  backgroundColor: string
  color: string
  borderColor: string
  hoverBackgroundColor: string
  hoverTextColor: string
}
