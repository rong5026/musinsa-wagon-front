// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface LoadingState {
  loading?: boolean
}

export interface ErrorState {
  error?: string | null
}