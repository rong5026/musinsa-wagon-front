import {
  ArrowLeft,
  ArrowRight,
  Bell,
  BellPlus,
  Check,
  Download,
  Edit,
  Heart,
  Home,
  ListPlus,
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
} from './button.types'

// 아이콘 매핑
export const iconMap: Record<IconName, LucideIcon> = {
  'shopping-cart': ShoppingCart,
  bell: Bell,
  'bell-plus': BellPlus,
  download: Download,
  plus: Plus,
  'list-plus': ListPlus,
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

// 사이즈 스타일 (Tailwind 클래스)
export const getSizeStyles = (iconOnly: boolean): Record<ButtonSize, string> => ({
  small: iconOnly ? 'p-2 text-sm min-h-8' : 'px-4 py-2 text-sm min-h-8',
  medium: iconOnly ? 'p-3 text-base min-h-10' : 'px-6 py-3 text-base min-h-10',
  large: iconOnly ? 'p-4 text-lg min-h-12' : 'px-8 py-4 text-lg min-h-12',
  xlarge: iconOnly ? 'p-5 text-xl min-h-14' : 'px-10 py-5 text-xl min-h-14',
})

// 변형 스타일 (Tailwind 클래스)
export const getVariantStyles = (
  customClasses?: string,
  enableHover: boolean = true
): Record<ButtonVariant, string> => ({
  primary:
    customClasses ||
    `bg-blue-500 text-white border-blue-500 ${enableHover ? 'hover:bg-blue-600 hover:border-blue-600' : ''}`,
  secondary:
    customClasses ||
    `bg-gray-500 text-white border-gray-500 ${enableHover ? 'hover:bg-gray-600 hover:border-gray-600' : ''}`,
  success:
    customClasses ||
    `bg-emerald-500 text-white border-emerald-500 ${enableHover ? 'hover:bg-emerald-600 hover:border-emerald-600' : ''}`,
  heart:
    customClasses ||
    `text-white ${enableHover ? 'hover:text-rose-500 hover:border-rose-500 [&>svg]:hover:fill-current' : ''}`,
  warning:
    customClasses ||
    `bg-amber-500 text-white border-amber-500 ${enableHover ? 'hover:bg-amber-600 hover:border-amber-600' : ''}`,
  outline:
    customClasses ||
    `bg-transparent text-blue-500 border-blue-500 ${enableHover ? 'hover:bg-blue-500 hover:text-white hover:border-blue-500' : ''}`,
  ghost:
    customClasses ||
    `bg-transparent text-gray-500 border-transparent ${enableHover ? 'hover:bg-gray-100 hover:text-gray-700' : ''}`,
  link:
    customClasses ||
    `bg-transparent text-blue-500 border-transparent ${enableHover ? 'hover:bg-transparent hover:text-blue-600 hover:underline' : ''}`,
})

// 모서리 둥글기 설정 (Tailwind 클래스)
export const radiusStyles: Record<BorderRadius, string> = {
  none: 'rounded-none',
  small: 'rounded-sm',
  medium: 'rounded-md',
  large: 'rounded-lg',
  xlarge: 'rounded-xl',
  full: 'rounded-full',
}

// 폰트 굵기 설정 (Tailwind 클래스)
export const fontWeightStyles: Record<FontWeight, string> = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
}
