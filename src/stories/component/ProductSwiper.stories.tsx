import { Product, ProductSwiper } from '@/features/products'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'

// 샘플 상품 데이터
const sampleProducts: Product[] = [
  {
    productNumber: 1,
    name: '무신사 스탠다드 오버핏 후드 집업',
    brand: '무신사 스탠다드',
    currentPrice: 49000,
    previousPrice: 59000,
    imgUrl:
      'https://image.msscdn.net/images/goods_img/20231201/3662411/3662411_17013717810043_big.jpg?w=1200',
    starScore: 4.8,
    reviewCount: 1247,
    likeCount: 2340,
    notificationCount: 890,
    shopType: 'MUSINSA',
    isNew: true,
    isBestSeller: false,
  },
  {
    productNumber: 2,
    name: '나이키 에어포스 1 07 화이트',
    brand: '나이키',
    currentPrice: 119000,
    previousPrice: 119000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220222/2424667/2424667_1_big.jpg?w=1200',
    starScore: 4.6,
    reviewCount: 3456,
    likeCount: 8920,
    notificationCount: 1234,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: true,
  },
  {
    productNumber: 3,
    name: '리바이스 511 슬림핏 데님 팬츠',
    brand: 'Levis',
    currentPrice: 89000,
    previousPrice: 109000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20230301/3123456/3123456_1_big.jpg?w=1200',
    starScore: 4.4,
    reviewCount: 892,
    likeCount: 1567,
    notificationCount: 456,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: false,
  },
  {
    productNumber: 4,
    name: '아디다스 수퍼스타 화이트 블랙',
    brand: '아디다스',
    currentPrice: 99000,
    previousPrice: 110000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220315/2456789/2456789_1_big.jpg?w=1200',
    starScore: 4.7,
    reviewCount: 2103,
    likeCount: 4521,
    notificationCount: 789,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: true,
  },
  {
    productNumber: 5,
    name: '챔피온 리버스 위브 후드티',
    brand: '챔피온',
    currentPrice: 69000,
    previousPrice: 79000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20231115/3567890/3567890_1_big.jpg?w=1200',
    starScore: 4.5,
    reviewCount: 675,
    likeCount: 1234,
    notificationCount: 321,
    shopType: 'MUSINSA',
    isNew: true,
    isBestSeller: false,
  },
  {
    productNumber: 6,
    name: '컨버스 척테일러 올스타 하이',
    brand: '컨버스',
    currentPrice: 75000,
    previousPrice: 75000,
    imgUrl: 'https://image.msscdn.net/images/goods_img/20220401/2678901/2678901_1_big.jpg?w=1200',
    starScore: 4.3,
    reviewCount: 1456,
    likeCount: 2789,
    notificationCount: 567,
    shopType: 'MUSINSA',
    isNew: false,
    isBestSeller: false,
  },
]

const meta: Meta<typeof ProductSwiper> = {
  title: 'Components/ProductSwiper',
  component: ProductSwiper,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '상품 카드들을 Swiper 슬라이더로 표시하는 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    products: {
      description: '표시할 상품 배열',
    },
    title: {
      control: 'text',
      description: '리스트 제목',
    },
    showTitle: {
      control: 'boolean',
      description: '제목 표시 여부',
    },
    itemsPerView: {
      control: 'object',
      description: '화면별 표시할 아이템 수',
    },
    spacing: {
      control: 'select',
      options: ['tight', 'normal', 'loose'],
      description: '아이템 간격',
    },
    showControls: {
      control: 'boolean',
      description: '네비게이션 버튼 표시 여부',
    },
    enableHover: {
      control: 'boolean',
      description: '호버 효과 활성화',
    },
    onProductClick: { action: 'product-clicked' },
    onButtonClick: { action: 'button-clicked' },
    onHeartClick: { action: 'heart-clicked' },
  },
}

export default meta
type Story = StoryObj<typeof ProductSwiper>

// 기본 스토리
export const Default: Story = {
  args: {
    products: sampleProducts,
    title: '추천 상품',
    showTitle: true,
    itemsPerView: {
      mobile: 2,
      tablet: 3,
      desktop: 4,
    },
    spacing: 'normal',
    showControls: true,
    enableHover: true,
  },
}

// 다양한 설정의 스토리들
export const WithoutTitle: Story = {
  args: {
    ...Default.args,
    showTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story: '제목 없이 표시되는 상품 리스트입니다.',
      },
    },
  },
}

export const CompactLayout: Story = {
  args: {
    ...Default.args,
    title: '인기 상품',
    itemsPerView: {
      mobile: 2,
      tablet: 3,
      desktop: 5,
    },
    spacing: 'tight',
  },
  parameters: {
    docs: {
      description: {
        story: '더 많은 아이템을 표시하는 컴팩트한 레이아웃입니다.',
      },
    },
  },
}

export const LooseLayout: Story = {
  args: {
    ...Default.args,
    title: '프리미엄 컬렉션',
    itemsPerView: {
      mobile: 2,
      tablet: 3,
      desktop: 3,
    },
    spacing: 'loose',
  },
  parameters: {
    docs: {
      description: {
        story: '여유로운 간격으로 표시되는 레이아웃입니다.',
      },
    },
  },
}

export const WithoutControls: Story = {
  args: {
    ...Default.args,
    title: '스와이프로 둘러보기',
    showControls: false,
  },
  parameters: {
    docs: {
      description: {
        story: '네비게이션 버튼 없이 터치/드래그로만 조작 가능한 버전입니다.',
      },
    },
  },
}

// 다양한 상품 수량으로 테스트
export const FewProducts: Story = {
  args: {
    ...Default.args,
    products: sampleProducts.slice(0, 3),
    title: '신상품 (적은 수량)',
  },
  parameters: {
    docs: {
      description: {
        story: '상품 수가 적을 때의 표시 상태입니다.',
      },
    },
  },
}

export const ManyProducts: Story = {
  args: {
    ...Default.args,
    products: [
      ...sampleProducts,
      ...sampleProducts.map((p) => ({ ...p, productNumber: p.productNumber + 100 })),
      ...sampleProducts.map((p) => ({ ...p, productNumber: p.productNumber + 200 })),
    ],
    title: '전체 상품 (많은 수량)',
  },
  parameters: {
    docs: {
      description: {
        story: '상품 수가 많을 때의 스크롤 동작을 확인할 수 있습니다.',
      },
    },
  },
}

// 실제 사용 시나리오
export const RealWorldExample: Story = {
  render: () => (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <ProductSwiper
          products={sampleProducts.slice(0, 4)}
          title="🔥 오늘의 핫딜"
          itemsPerView={{ mobile: 2, tablet: 3, desktop: 4 }}
          spacing="normal"
          enableHover
        />

        <ProductSwiper
          products={sampleProducts.slice(1, 6)}
          title="✨ 신상품"
          itemsPerView={{ mobile: 2, tablet: 3, desktop: 5 }}
          spacing="tight"
          enableHover
        />

        <ProductSwiper
          products={sampleProducts}
          title="👑 베스트셀러"
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          spacing="loose"
          enableHover
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 사용 환경과 유사한 다중 섹션 레이아웃입니다.',
      },
    },
  },
}

// 인터랙티브 스토리
export const Interactive: Story = {
  args: {
    products: sampleProducts,
    title: '인터랙티브 상품 리스트',
    showTitle: true,
    itemsPerView: {
      mobile: 2,
      tablet: 3,
      desktop: 4,
    },
    spacing: 'normal',
    showControls: true,
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 모든 속성을 실시간으로 조작해볼 수 있는 인터랙티브 버전입니다.',
      },
    },
  },
}
