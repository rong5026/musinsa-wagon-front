import { ButtonHTMLAttributes, ReactNode } from 'react'

// LucideIcon 타입 정의
export type LucideIcon = React.ComponentType<{ size?: number; className?: string }>

// 타입 정의
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'heart'
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
  | 'bell-plus'
  | 'download'
  | 'list-plus'
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

  // 스타일 관련
  fontWeight?: FontWeight
  textAlign?: TextAlign
  customColors?: string

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
  enableHover?: boolean

  // 추가 속성
  className?: string
}
