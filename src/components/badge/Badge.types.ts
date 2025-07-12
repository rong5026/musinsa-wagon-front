import { LucideIcon } from 'lucide-react'
import { ReactNode } from 'react'

export type BadgeVariant = 'new' | 'best' | 'sale' | 'hot' | 'limited' | 'brand' | 'custom'

export interface BadgeProps {
  variant?: BadgeVariant
  text?: string
  icon?: LucideIcon
  className?: string
  customColors?: {
    from: string
    to: string
  }
  show?: boolean
  children?: ReactNode
}
