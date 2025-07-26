import { ProductGrid } from '@/features/products'
import React from 'react'

// 샘플 상품 데이터
const sampleProducts = [
  {
    productNumber: 1,
    name: '오버핏 레터링 후드티 블랙',
    brand: '무신사 스탠다드',
    starScore: 4.8,
    reviewCount: 2547,
    likeCount: 12340,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20210831/2095932/2095932_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 39900,
    previousPrice: 49900,
    notificationCount: 850,
    isNew: true,
    isBestSeller: false,
    isAdult: false,
  },
  {
    productNumber: 2,
    name: '에센셜 코튼 반팔 티셔츠 화이트',
    brand: '유니클로',
    starScore: 4.5,
    reviewCount: 1890,
    likeCount: 5670,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220420/2519471/2519471_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 19900,
    previousPrice: 19900,
    notificationCount: 320,
    isNew: false,
    isBestSeller: true,
    isAdult: false,
  },
  {
    productNumber: 3,
    name: '슬림 스트레이트 데님 팬츠 인디고',
    brand: '리바이스',
    starScore: 4.7,
    reviewCount: 3241,
    likeCount: 8920,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20210301/1856432/1856432_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 89900,
    previousPrice: 119900,
    notificationCount: 1240,
    isNew: false,
    isBestSeller: false,
    isAdult: false,
  },
  {
    productNumber: 4,
    name: '클래식 로고 스웨트셔츠 그레이',
    brand: '챔피온',
    starScore: 4.6,
    reviewCount: 1567,
    likeCount: 4320,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220815/2723891/2723891_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 65900,
    previousPrice: 75900,
    notificationCount: 690,
    isNew: false,
    isBestSeller: true,
    isAdult: false,
  },
  {
    productNumber: 5,
    name: '미니멀 크루넥 니트 베이지',
    brand: 'COS',
    starScore: 4.9,
    reviewCount: 890,
    likeCount: 2760,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20221020/2891234/2891234_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 129000,
    previousPrice: 149000,
    notificationCount: 450,
    isNew: true,
    isBestSeller: false,
    isAdult: false,
  },
  {
    productNumber: 6,
    name: '오버사이즈 코튼 셔츠 화이트',
    brand: '앤더슨벨',
    starScore: 4.4,
    reviewCount: 1203,
    likeCount: 3450,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220328/2456789/2456789_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 95000,
    previousPrice: 95000,
    notificationCount: 280,
    isNew: false,
    isBestSeller: false,
    isAdult: false,
  },
  {
    productNumber: 7,
    name: '어센틱 스니커즈 올 블랙',
    brand: '반스',
    starScore: 4.8,
    reviewCount: 4567,
    likeCount: 15680,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20210520/1945678/1945678_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 59000,
    previousPrice: 69000,
    notificationCount: 1890,
    isNew: false,
    isBestSeller: true,
    isAdult: false,
  },
  {
    productNumber: 8,
    name: '레귤러 핏 치노 팬츠 카키',
    brand: '폴로 랄프 로렌',
    starScore: 4.7,
    reviewCount: 2156,
    likeCount: 6780,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220712/2634567/2634567_1_125.jpg',
    shopType: 'musinsa',
    currentPrice: 139000,
    previousPrice: 159000,
    notificationCount: 520,
    isNew: false,
    isBestSeller: false,
    isAdult: false,
  },
]

export default {
  title: 'Components/ProductGrid',
  component: ProductGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '상품 카드들을 반응형 그리드 레이아웃으로 표시하는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    products: {
      description: '표시할 상품 배열',
      control: { type: 'object' },
    },
    imageHeight: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '상품 이미지 높이',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    onProductClick: { action: 'product clicked' },
    onHeartClick: { action: 'heart clicked' },
  },
}

// 기본 그리드
export const Default = {
  args: {
    products: sampleProducts,
    imageHeight: 'medium',
  },
}

// 많은 상품 수
export const ManyProducts = {
  args: {
    products: [
      ...sampleProducts,
      ...sampleProducts.map((product) => ({
        ...product,
        productNumber: product.productNumber + 8,
        name: product.name + ' (추가)',
      })),
    ],
    imageHeight: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: '많은 수의 상품을 표시하는 경우입니다.',
      },
    },
  },
}

// 반응형 테스트
export const ResponsiveTest = {
  render: () => (
    <div className="w-full">
      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          화면 크기를 조절해보세요:
          <br />• 1024px 이상: 4열
          <br />• 768px-1023px: 3열
          <br />• 767px 이하: 2열
        </p>
      </div>
      <ProductGrid products={sampleProducts} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 화면 크기에서의 반응형 레이아웃을 보여줍니다.',
      },
    },
  },
}

// 인터랙티브 그리드
export const Interactive = {
  args: {
    products: sampleProducts,
    imageHeight: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 속성을 조작해볼 수 있는 인터랙티브 그리드입니다.',
      },
    },
  },
}
