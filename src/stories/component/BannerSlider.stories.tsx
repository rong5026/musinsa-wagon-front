import BannerSlider from '@/components/banner/BannerSlider'
import { BannerItem } from '@/components/banner/BannerSlider'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BannerSlider> = {
  title: 'Components/BannerSlider',
  component: BannerSlider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    autoplay: {
      control: 'boolean',
      description: 'Enable autoplay',
    },
    autoplayDelay: {
      control: 'number',
      description: 'Autoplay delay in milliseconds',
    },
    showNavigation: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showPagination: {
      control: 'boolean',
      description: 'Show pagination dots',
    },
    loop: {
      control: 'boolean',
      description: 'Enable loop mode',
    },
  },
}

export default meta
type Story = StoryObj<typeof BannerSlider>

const sampleBanners: BannerItem[] = [
  {
    id: '1',
    title: '무신사 특가',
    subtitle: '봄 신상 컬렉션',
    description: '최대 70% 할인',
    subText: '놓치면 후회할 특별한 기회!',
    bgColor: 'bg-gradient-to-r from-blue-500 to-purple-600',
    textColor: 'text-white',
    buttonText: '지금 쇼핑하기',
    buttonLink: '/shop',
    badge: '한정특가',
    price: '29,000원',
    originalPrice: '49,000원',
    discount: '40% OFF',
    ctaType: 'primary',
  },
  {
    id: '2',
    title: '브랜드 위크',
    subtitle: '인기 브랜드 모음',
    description: '선착순 한정 수량',
    subText: '트렌디한 아이템을 만나보세요!',
    bgColor: 'bg-gradient-to-r from-pink-500 to-red-500',
    textColor: 'text-white',
    buttonText: '브랜드 보기',
    buttonLink: '/brands',
    badge: '브랜드위크',
    ctaType: 'secondary',
  },
  {
    id: '3',
    title: '신규 회원',
    subtitle: '웰컴 혜택',
    description: '추가 10% 쿠폰',
    subText: '첫 구매 시 무료배송까지!',
    bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
    textColor: 'text-white',
    buttonText: '회원가입',
    buttonLink: '/signup',
    ctaType: 'outline',
  },
]

const sampleBannersWithImages: BannerItem[] = [
  {
    id: '1',
    title: '여름 신상',
    subtitle: '시원한 패션',
    description: '체크 아웃 세일',
    subText: '여름을 더욱 시원하게!',
    bgColor: 'bg-gradient-to-r from-cyan-500 to-blue-600',
    textColor: 'text-white',
    buttonText: '여름 아이템',
    buttonLink: '/summer',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
  },
  {
    id: '2',
    title: '럭셔리 브랜드',
    subtitle: '프리미엄 컬렉션',
    description: '엄선된 상품',
    subText: '특별한 당신을 위한 선택!',
    bgColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
    textColor: 'text-white',
    buttonText: '럭셔리 샵',
    buttonLink: '/luxury',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop',
  },
]

export const Default: Story = {
  args: {
    banners: sampleBanners,
    autoplay: true,
    autoplayDelay: 4000,
    showNavigation: true,
    showPagination: true,
    loop: true,
  },
}

export const WithImages: Story = {
  args: {
    banners: sampleBannersWithImages,
    autoplay: true,
    autoplayDelay: 5000,
    showNavigation: true,
    showPagination: true,
    loop: true,
  },
}

export const NoAutoplay: Story = {
  args: {
    banners: sampleBanners,
    autoplay: false,
    showNavigation: true,
    showPagination: true,
    loop: true,
  },
}

export const NoNavigation: Story = {
  args: {
    banners: sampleBanners,
    autoplay: true,
    autoplayDelay: 4000,
    showNavigation: false,
    showPagination: true,
    loop: true,
  },
}

export const NoPagination: Story = {
  args: {
    banners: sampleBanners,
    autoplay: true,
    autoplayDelay: 4000,
    showNavigation: true,
    showPagination: false,
    loop: true,
  },
}

export const SingleBanner: Story = {
  args: {
    banners: [sampleBanners[0]],
    autoplay: false,
    showNavigation: false,
    showPagination: false,
    loop: false,
  },
}

export const CustomStyling: Story = {
  args: {
    banners: sampleBanners,
    autoplay: true,
    autoplayDelay: 3000,
    showNavigation: true,
    showPagination: true,
    loop: true,
    className: 'max-w-4xl mx-auto',
    height: 'lg',
  },
}

export const LoadingState: Story = {
  args: {
    banners: [],
    loading: true,
    height: 'md',
  },
}

export const ErrorState: Story = {
  args: {
    banners: [],
    error: 'Failed to load banners',
    height: 'md',
  },
}

export const FadeEffect: Story = {
  args: {
    banners: sampleBanners,
    autoplay: true,
    autoplayDelay: 3000,
    showNavigation: true,
    showPagination: true,
    loop: true,
    effect: 'fade',
    height: 'lg',
  },
}
