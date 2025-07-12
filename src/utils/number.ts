// 1000단위로 k 붙이기
export const formatNumber = (num: number): string => {
  return num > 999 ? (num / 1000).toFixed(1) + 'k' : num.toString()
}

// 가격 변동 정보 계산
export const getPriceChange = (current: number, previous: number) => {
  const diff = current - previous
  const percentage = ((diff / previous) * 100).toFixed(1)
  return { diff, percentage }
}
