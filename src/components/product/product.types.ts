// 상품 데이터 타입 정의
export interface Product {
  productNumber: number
  name: string
  brand: string
  starScore: number
  reviewCount: number
  likeCount: number
  imgUrl: string
  shopType: string
  currentPrice: number
  previousPrice: number
  notificationCount?: number
  isNew?: boolean
  isBestSeller?: boolean
  isAdult?: boolean
}
