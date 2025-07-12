import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  Download,
  Edit,
  Heart,
  Home,
  Mail,
  Phone,
  Plus,
  Search,
  Settings,
  Share2,
  ShoppingCart,
  Star,
  Trash2,
  User,
  X,
} from 'lucide-react'

import {
  BorderRadius,
  ButtonSize,
  ButtonVariant,
  FontWeight,
  IconName,
  LucideIcon,
  SizeStyle,
  VariantStyle,
} from './button.types'

// 아이콘 매핑
export const iconMap: Record<IconName, LucideIcon> = {
  'shopping-cart': ShoppingCart,
  bell: Bell,
  download: Download,
  plus: Plus,
  heart: Heart,
  share: Share2,
  settings: Settings,
  user: User,
  search: Search,
  mail: Mail,
  phone: Phone,
  check: Check,
  x: X,
  edit: Edit,
  trash: Trash2,
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  home: Home,
  star: Star,
}

// 사이즈 스타일
export const getSizeStyles = (iconOnly: boolean): Record<ButtonSize, SizeStyle> => ({
  small: {
    padding: iconOnly ? '8px' : '8px 16px',
    fontSize: '14px',
    minHeight: '32px',
  },
  medium: {
    padding: iconOnly ? '12px' : '12px 24px',
    fontSize: '16px',
    minHeight: '40px',
  },
  large: {
    padding: iconOnly ? '16px' : '16px 32px',
    fontSize: '18px',
    minHeight: '48px',
  },
  xlarge: {
    padding: iconOnly ? '20px' : '20px 40px',
    fontSize: '20px',
    minHeight: '56px',
  },
})

// 변형 스타일
export const getVariantStyles = (
  backgroundColor?: string,
  textColor?: string,
  borderColor?: string,
  hoverBackgroundColor?: string,
  hoverTextColor?: string
): Record<ButtonVariant, VariantStyle> => ({
  primary: {
    backgroundColor: backgroundColor || '#3B82F6',
    color: textColor || '#FFFFFF',
    borderColor: borderColor || '#3B82F6',
    hoverBackgroundColor: hoverBackgroundColor || '#2563EB',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  secondary: {
    backgroundColor: backgroundColor || '#6B7280',
    color: textColor || '#FFFFFF',
    borderColor: borderColor || '#6B7280',
    hoverBackgroundColor: hoverBackgroundColor || '#4B5563',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  success: {
    backgroundColor: backgroundColor || '#10B981',
    color: textColor || '#FFFFFF',
    borderColor: borderColor || '#10B981',
    hoverBackgroundColor: hoverBackgroundColor || '#059669',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  danger: {
    backgroundColor: backgroundColor || '#EF4444',
    color: textColor || '#FFFFFF',
    borderColor: borderColor || '#EF4444',
    hoverBackgroundColor: hoverBackgroundColor || '#DC2626',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  warning: {
    backgroundColor: backgroundColor || '#F59E0B',
    color: textColor || '#FFFFFF',
    borderColor: borderColor || '#F59E0B',
    hoverBackgroundColor: hoverBackgroundColor || '#D97706',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  outline: {
    backgroundColor: backgroundColor || 'transparent',
    color: textColor || '#3B82F6',
    borderColor: borderColor || '#3B82F6',
    hoverBackgroundColor: hoverBackgroundColor || '#3B82F6',
    hoverTextColor: hoverTextColor || '#FFFFFF',
  },
  ghost: {
    backgroundColor: backgroundColor || 'transparent',
    color: textColor || '#6B7280',
    borderColor: borderColor || 'transparent',
    hoverBackgroundColor: hoverBackgroundColor || '#F3F4F6',
    hoverTextColor: hoverTextColor || '#374151',
  },
  link: {
    backgroundColor: backgroundColor || 'transparent',
    color: textColor || '#3B82F6',
    borderColor: borderColor || 'transparent',
    hoverBackgroundColor: hoverBackgroundColor || 'transparent',
    hoverTextColor: hoverTextColor || '#2563EB',
  },
})

// 모서리 둥글기 설정
export const radiusStyles: Record<BorderRadius, string> = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '12px',
  xlarge: '16px',
  full: '9999px',
}

// 폰트 굵기 설정
export const fontWeightStyles: Record<FontWeight, string> = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
}
