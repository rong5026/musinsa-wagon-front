// Common types used across the application
export type Size = 'sm' | 'md' | 'lg' | 'xl'
export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type Color = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'

export interface SelectOption {
  label: string
  value: string | number
}

export type Environment = 'development' | 'production' | 'local'