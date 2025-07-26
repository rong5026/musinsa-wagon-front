// API related types
export interface ApiResponse<T = any> {
  data: T
  status: number
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginationResponse<T> {
  data: T[]
  totalCount: number
  totalPages: number
  currentPage: number
}