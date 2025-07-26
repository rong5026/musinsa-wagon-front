import { Badge } from '@/components/base'
import { Gift, Heart } from 'lucide-react'
import React from 'react'

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '상품이나 콘텐츠에 표시되는 배지 컴포넌트입니다. NEW, BEST, SALE 등 다양한 상태를 표시할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['new', 'best', 'sale', 'hot', 'limited', 'brand', 'custom'],
      description: '배지 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '배지 크기',
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
      description: '배지 위치',
    },
    text: {
      control: 'text',
      description: '커스텀 텍스트',
    },
    show: {
      control: 'boolean',
      description: '배지 표시 여부',
    },
  },
  decorators: [
    (Story) => (
      <div className="relative w-48 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0">
          <Story />
        </div>
      </div>
    ),
  ],
}

// 기본 NEW 배지
export const Default = {
  args: {
    variant: 'new',
    show: true,
  },
}

// BEST 배지
export const Best = {
  args: {
    variant: 'best',
    show: true,
  },
}

// SALE 배지
export const Sale = {
  args: {
    variant: 'sale',
    show: true,
  },
}

// HOT 배지
export const Hot = {
  args: {
    variant: 'hot',
    show: true,
  },
}

// LIMITED 배지
export const Limited = {
  args: {
    variant: 'limited',
    show: true,
  },
}

// 브랜드 배지
export const Brand = {
  args: {
    variant: 'brand',
    text: '무신사 스탠다드',
    show: true,
  },
}

// 작은 크기
export const Small = {
  args: {
    variant: 'new',
    size: 'small',
    show: true,
  },
}

// 큰 크기
export const Large = {
  args: {
    variant: 'best',
    size: 'large',
    show: true,
  },
}

// 다른 위치들
export const TopRight = {
  args: {
    variant: 'sale',
    position: 'top-right',
    show: true,
  },
}

export const BottomLeft = {
  args: {
    variant: 'hot',
    position: 'bottom-left',
    show: true,
  },
}

export const BottomRight = {
  args: {
    variant: 'limited',
    position: 'bottom-right',
    show: true,
  },
}

// 커스텀 텍스트
export const CustomText = {
  args: {
    variant: 'custom',
    text: '50% OFF',
    icon: <Gift className="w-3 h-3" />,
    customColors: {
      from: '#8B5CF6',
      to: '#EC4899',
    },
    show: true,
  },
}

// 여러 배지 조합
export const MultipleBadges = {
  render: () => (
    <div className="relative w-64 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 flex gap-0">
        <Badge variant="brand" text="BRAND" show={true} />
        <Badge variant="new" show={true} />
        <Badge variant="best" show={true} />
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: '여러 배지를 함께 표시하는 예시입니다.',
      },
    },
  },
}

// 인터랙티브 예제
export const Interactive = {
  args: {
    variant: 'new',
    size: 'medium',
    position: 'top-left',
    show: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 모든 속성을 실시간으로 조작해볼 수 있는 인터랙티브 배지입니다.',
      },
    },
  },
}
