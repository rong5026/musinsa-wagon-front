'use client'

import { cn } from '@/lib/utils'
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react'
import { memo, useCallback, useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
// Swiper CSS imports
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface BannerItem {
  id: string
  title: string
  subtitle: string
  description: string
  subText: string
  bgColor: string
  textColor: string
  buttonText: string
  buttonLink?: string
  image?: string
  mobileImage?: string
  discount?: string
  price?: string
  originalPrice?: string
  badge?: string
  ctaType?: 'primary' | 'secondary' | 'outline'
}

export interface BannerSliderConfig {
  autoplay: boolean
  autoplayDelay: number
  showNavigation: boolean
  showPagination: boolean
  loop: boolean
  height: 'sm' | 'md' | 'lg' | 'xl'
  effect: 'slide' | 'fade'
}

interface BannerSliderProps extends Partial<BannerSliderConfig> {
  banners: BannerItem[]
  className?: string
  loading?: boolean
  error?: string
  onSlideChange?: (index: number) => void
  onBannerClick?: (banner: BannerItem) => void
}

// URL 검증 유틸리티 함수
const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url)
    return ['http:', 'https:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

// 이미지 URL 검증 함수
const validateImageUrl = (url: string): boolean => {
  return url.startsWith('https://') || url.startsWith('data:image/') || url.startsWith('/')
}

const BannerSlider = memo<BannerSliderProps>(function BannerSlider({
  banners,
  autoplay = true,
  autoplayDelay = 4000,
  showNavigation = true,
  showPagination = true,
  loop = true,
  className = '',
  height = 'md',
  effect = 'slide',
  loading = false,
  error,
  onSlideChange,
  onBannerClick,
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isImageLoaded, setIsImageLoaded] = useState<Record<string, boolean>>({})
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const heightClasses = {
    sm: 'h-48 md:h-56',
    md: 'h-64 md:h-80',
    lg: 'h-80 md:h-96',
    xl: 'h-96 md:h-[28rem]',
  }

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      const realIndex = swiper.realIndex
      setCurrentIndex(realIndex)
      onSlideChange?.(realIndex)
    },
    [onSlideChange]
  )

  const handlePrevClick = useCallback(() => {
    swiperRef.current?.slidePrev()
  }, [])

  const handleNextClick = useCallback(() => {
    swiperRef.current?.slideNext()
  }, [])

  const handleBannerClick = useCallback(
    (banner: BannerItem) => {
      if (onBannerClick) {
        onBannerClick(banner)
      } else if (banner.buttonLink && isValidUrl(banner.buttonLink)) {
        window.open(banner.buttonLink, '_blank', 'noopener,noreferrer')
      }
    },
    [onBannerClick]
  )

  const handleImageLoad = useCallback((bannerId: string) => {
    setIsImageLoaded((prev) => ({ ...prev, [bannerId]: true }))
  }, [])

  const handleImageError = useCallback((bannerId: string) => {
    setImageErrors((prev) => ({ ...prev, [bannerId]: true }))
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className={cn('relative w-full', className)}>
        <div
          className={cn(
            'rounded-xl overflow-hidden shadow-lg bg-gray-200 animate-pulse',
            heightClasses[height]
          )}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className={cn('relative w-full', className)}>
        <div
          className={cn(
            'rounded-xl overflow-hidden shadow-lg bg-red-50 border border-red-200 flex items-center justify-center',
            heightClasses[height]
          )}
        >
          <div className="text-center p-8">
            <div className="text-red-500 text-lg font-semibold mb-2">배너를 불러올 수 없습니다</div>
            <div className="text-red-400 text-sm">{error}</div>
          </div>
        </div>
      </div>
    )
  }

  if (!banners || banners.length === 0) {
    return (
      <div className={cn('relative w-full', className)}>
        <div
          className={cn(
            'rounded-xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center',
            heightClasses[height]
          )}
        >
          <div className="text-center p-8">
            <div className="text-gray-500 text-lg font-semibold mb-2">표시할 배너가 없습니다</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative w-full', className)}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={loop && banners.length > 1}
        effect={effect}
        autoplay={
          autoplay && banners.length > 1
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={false}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50 hover:bg-white/70',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-white',
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className={cn(
                'relative flex items-center justify-between px-6 md:px-12 cursor-pointer group overflow-hidden',
                heightClasses[height],
                banner.bgColor,
                banner.textColor
              )}
              onClick={() => handleBannerClick(banner)}
            >
              {/* Background Image */}
              {banner.image && validateImageUrl(banner.image) && !imageErrors[banner.id] && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={banner.image}
                    alt={banner.title}
                    loading="lazy"
                    className={cn(
                      'w-full h-full object-cover transition-opacity duration-300',
                      isImageLoaded[banner.id] ? 'opacity-100' : 'opacity-0'
                    )}
                    onLoad={() => handleImageLoad(banner.id)}
                    onError={() => handleImageError(banner.id)}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 flex-1 space-y-4 max-w-lg">
                {/* Badge */}
                {banner.badge && (
                  <div className="inline-flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    <ShoppingBag className="w-3 h-3" />
                    {banner.badge}
                  </div>
                )}

                {/* Title Section */}
                <div className="space-y-2">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold transition-transform group-hover:scale-105 leading-tight">
                    {banner.title}
                  </h1>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block transition-all group-hover:bg-white/30">
                    <span className="text-lg md:text-xl font-semibold">{banner.subtitle}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg opacity-90 transition-opacity group-hover:opacity-100">
                  {banner.description}
                </p>

                {/* Price Section */}
                {banner.price && (
                  <div className="flex items-center gap-2">
                    {banner.originalPrice && (
                      <span className="text-sm text-gray-300 line-through">
                        {banner.originalPrice}
                      </span>
                    )}
                    <span className="text-xl md:text-2xl font-bold text-yellow-300">
                      {banner.price}
                    </span>
                    {banner.discount && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {banner.discount}
                      </span>
                    )}
                  </div>
                )}

                {/* Sub Text */}
                <p className="text-sm opacity-80 transition-opacity group-hover:opacity-90">
                  {banner.subText}
                </p>

                {/* CTA Button */}
                {banner.buttonLink && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleBannerClick(banner)
                    }}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all hover:scale-105 active:scale-95',
                      banner.ctaType === 'primary' && 'bg-white text-black hover:bg-gray-100',
                      banner.ctaType === 'secondary' && 'bg-black/20 text-white hover:bg-black/30',
                      banner.ctaType === 'outline' &&
                        'border-2 border-white text-white hover:bg-white hover:text-black',
                      !banner.ctaType && 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white'
                    )}
                  >
                    {banner.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Decorative Elements - Only show if no image */}
              {!banner.image && (
                <div className="relative z-10 flex-1 flex justify-end items-center">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/20">
                      <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-white/30">
                        <div className="w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white/30 rounded-full backdrop-blur-sm"></div>
                      </div>
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm animate-pulse delay-300"></div>
                    <div className="absolute top-1/2 -right-8 w-4 h-4 bg-white/20 rounded-full backdrop-blur-sm animate-pulse delay-700"></div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {showNavigation && banners.length > 1 && (
        <>
          <button
            onClick={handlePrevClick}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110 active:scale-95 z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNextClick}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all hover:scale-110 active:scale-95 z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Custom Pagination */}
      {showPagination && banners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all',
                index === currentIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {banners.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
          {currentIndex + 1} / {banners.length}
        </div>
      )}
    </div>
  )
})

export default BannerSlider
