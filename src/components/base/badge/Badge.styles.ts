import { Clock, Flame, Gift, Sparkles, Star } from 'lucide-react'

// 배지 변형별 스타일
export const badgeVariants = {
  new: {
    gradient: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    text: 'NEW',
    icon: Sparkles,
  },
  best: {
    gradient: 'bg-gradient-to-r from-orange-500 to-red-500',
    text: 'BEST',
    icon: Star,
  },
  sale: {
    gradient: 'bg-gradient-to-r from-red-500 to-pink-500',
    text: 'SALE',
    icon: Gift,
  },
  hot: {
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    text: 'HOT',
    icon: Flame,
  },
  limited: {
    gradient: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    text: 'LIMITED',
    icon: Clock,
  },
  brand: {
    gradient: 'bg-black bg-opacity-60',
    text: 'BRAND',
    icon: null,
  },
  custom: {
    gradient: 'bg-gradient-to-r from-gray-500 to-gray-600',
    text: 'CUSTOM',
    icon: null,
  },
}
