import { Bell, BellPlus, Heart, ShoppingCart, Star } from 'lucide-react'
import React from 'react'

import ProductCard from '../../components/product/ProductCard'

// 샘플 상품 데이터
const sampleProduct = {
  productNumber: 1,
  name: '무신사 스탠다드 오버핏 스웨트셔츠',
  brand: '무신사 스탠다드',
  starScore: 4.8,
  reviewCount: 1248,
  likeCount: 2341,
  imgUrl:
    'https://image.msscdn.net/images/goods_img/20230202/3056893/3056893_16759355110509_500.jpg',
  shopType: 'online',
  currentPrice: 59000,
  previousPrice: 79000,
  notificationCount: 523,
  isNew: false,
  isBestSeller: true,
}

const sampleProductNew = {
  productNumber: 2,
  name: '나이키 에어포스 1 로우 화이트',
  brand: 'Nike',
  starScore: 4.9,
  reviewCount: 3421,
  likeCount: 5678,
  imgUrl:
    'https://image.msscdn.net/images/goods_img/20230202/3056893/3056893_16759355110509_500.jpg',
  shopType: 'brand',
  currentPrice: 119000,
  previousPrice: 119000,
  notificationCount: 1024,
  isNew: true,
  isBestSeller: false,
}

const sampleProductPriceUp = {
  productNumber: 3,
  name: '리바이스 501 오리지널 진',
  brand: "Levi's",
  starScore: 4.6,
  reviewCount: 892,
  likeCount: 1456,
  imgUrl:
    'https://image.msscdn.net/images/goods_img/20230202/3056893/3056893_16759355110509_500.jpg',

  shopType: 'brand',
  currentPrice: 149000,
  previousPrice: 129000,
  notificationCount: 245,
  isNew: false,
  isBestSeller: false,
}

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '상품 정보를 보여주는 카드 컴포넌트입니다. 이미지, 가격, 평점, 브랜드 등의 정보를 표시합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    imageHeight: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '상품 이미지 높이',
    },
    showBrand: {
      control: 'boolean',
      description: '브랜드 표시 여부',
    },
    showPreviousPrice: {
      control: 'boolean',
      description: '이전 가격 표시 여부',
    },
    showNotificationCount: {
      control: 'boolean',
      description: '알림 카운트 표시 여부',
    },
    buttonText: {
      control: 'text',
      description: '버튼 텍스트',
    },
    enableHover: {
      control: 'boolean',
      description: '호버 효과 활성화',
    },
    onButtonClick: { action: 'button clicked' },
    onProductClick: { action: 'product clicked' },
    onHeartClick: { action: 'heart clicked' },
  },
}

// 기본 상품 카드
export const Default = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
    enableHover: false,
  },
}

// 새 상품
export const NewProduct = {
  args: {
    product: sampleProductNew,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: 'NEW 배지가 표시된 새 상품 카드입니다.',
      },
    },
  },
}

// 가격 상승 상품
export const PriceUpProduct = {
  args: {
    product: sampleProductPriceUp,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '가격이 상승한 상품의 카드입니다. 가격 변동률이 빨간색으로 표시됩니다.',
      },
    },
  },
}

// 작은 이미지 크기
export const SmallImage = {
  args: {
    product: sampleProduct,
    imageHeight: 'small',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '작은 크기의 이미지로 표시된 상품 카드입니다.',
      },
    },
  },
}

// 큰 이미지 크기
export const LargeImage = {
  args: {
    product: sampleProduct,
    imageHeight: 'large',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '큰 크기의 이미지로 표시된 상품 카드입니다.',
      },
    },
  },
}

// 브랜드 숨김
export const WithoutBrand = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: false,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '브랜드가 숨겨진 상품 카드입니다.',
      },
    },
  },
}

// 이전 가격 숨김
export const WithoutPreviousPrice = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: false,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '이전 가격이 숨겨진 상품 카드입니다.',
      },
    },
  },
}

// 알림 카운트 숨김
export const WithoutNotificationCount = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: false,
    buttonText: '알림 등록하기',
  },
  parameters: {
    docs: {
      description: {
        story: '알림 카운트가 숨겨진 상품 카드입니다.',
      },
    },
  },
}

// 커스텀 버튼
export const CustomButton = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '장바구니 담기',
    buttonIcon: <ShoppingCart className="w-4 h-4 mr-2" />,
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 버튼 텍스트와 아이콘이 적용된 상품 카드입니다.',
      },
    },
  },
}

// 다양한 상품 그리드
export const ProductGrid = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <ProductCard
        product={sampleProduct}
        imageHeight="medium"
        onButtonClick={(product) => console.log('Button clicked:', product)}
        onProductClick={(product) => console.log('Product clicked:', product)}
        onHeartClick={(product) => console.log('Heart clicked:', product)}
      />
      <ProductCard
        product={sampleProductNew}
        imageHeight="medium"
        onButtonClick={(product) => console.log('Button clicked:', product)}
        onProductClick={(product) => console.log('Product clicked:', product)}
        onHeartClick={(product) => console.log('Heart clicked:', product)}
      />
      <ProductCard
        product={sampleProductPriceUp}
        imageHeight="medium"
        onButtonClick={(product) => console.log('Button clicked:', product)}
        onProductClick={(product) => console.log('Product clicked:', product)}
        onHeartClick={(product) => console.log('Heart clicked:', product)}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '그리드 레이아웃으로 배치된 여러 상품 카드들을 보여줍니다.',
      },
    },
  },
}

// 다양한 크기 비교
export const SizeComparison = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Small</h3>
        <ProductCard
          product={sampleProduct}
          imageHeight="small"
          onButtonClick={(product) => console.log('Button clicked:', product)}
          onProductClick={(product) => console.log('Product clicked:', product)}
          onHeartClick={(product) => console.log('Heart clicked:', product)}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Medium</h3>
        <ProductCard
          product={sampleProduct}
          imageHeight="medium"
          onButtonClick={(product) => console.log('Button clicked:', product)}
          onProductClick={(product) => console.log('Product clicked:', product)}
          onHeartClick={(product) => console.log('Heart clicked:', product)}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Large</h3>
        <ProductCard
          product={sampleProduct}
          imageHeight="large"
          onButtonClick={(product) => console.log('Button clicked:', product)}
          onProductClick={(product) => console.log('Product clicked:', product)}
          onHeartClick={(product) => console.log('Heart clicked:', product)}
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '다양한 이미지 크기의 상품 카드들을 비교해볼 수 있습니다.',
      },
    },
  },
}

// 호버 효과 없음
export const NoHover = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
    enableHover: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          '호버 효과가 비활성화된 상품 카드입니다. 마우스를 올려도 확대나 그림자 효과가 나타나지 않습니다.',
      },
    },
  },
}

// 인터랙티브 예제
export const Interactive = {
  args: {
    product: sampleProduct,
    imageHeight: 'medium',
    showBrand: true,
    showPreviousPrice: true,
    showNotificationCount: true,
    buttonText: '알림 등록하기',
    enableHover: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Controls 패널에서 모든 속성을 실시간으로 조작해볼 수 있는 인터랙티브 상품 카드입니다.',
      },
    },
  },
}
