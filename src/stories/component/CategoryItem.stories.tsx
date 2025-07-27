/**
 * Storybook stories for CategoryItem component
 */
import { CategoryItem } from '@/features/category'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'

// 샘플 카테고리 데이터
const sampleCategory = {
  id: 'clothes',
  name: '상의',
  icon: '👕',
  badge: { type: 'NEW' as const, text: 'NEW', variant: 'blue' as const },
}

const meta: Meta<typeof CategoryItem> = {
  title: 'Components/CategoryItem',
  component: CategoryItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '개별 카테고리 아이템 컴포넌트입니다. CategoryNav 내부에서 사용되며 독립적으로도 사용 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      description: '카테고리 데이터 객체',
    },
    isActive: {
      control: 'boolean',
      description: '활성화 상태',
    },
    onClick: {
      action: 'category-clicked',
      description: '클릭 시 호출되는 콜백',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
  },
  decorators: [
    (Story: any) => (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-[200px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CategoryItem>

// 기본 스토리
export const Default: Story = {
  args: {
    category: sampleCategory,
    isActive: false,
  },
}

// 활성화된 상태
export const Active: Story = {
  args: {
    category: sampleCategory,
    isActive: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '활성화된 상태의 카테고리 아이템입니다. 그라데이션 배경과 애니메이션 효과가 적용됩니다.',
      },
    },
  },
}

// 뱃지가 없는 버전
export const WithoutBadge: Story = {
  args: {
    category: {
      id: 'shoes',
      name: '신발',
      icon: '👟',
    },
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: '뱃지가 없는 깔끔한 카테고리 아이템입니다.',
      },
    },
  },
}

// 다양한 뱃지 색상들
export const RedBadge: Story = {
  args: {
    category: {
      id: 'sale',
      name: '세일',
      icon: '🔥',
      badge: { type: 'HOT' as const, text: 'HOT', variant: 'red' as const },
    },
    isActive: false,
  },
}

export const GreenBadge: Story = {
  args: {
    category: {
      id: 'eco',
      name: '친환경',
      icon: '🌱',
      badge: { type: 'SALE' as const, text: 'ECO', variant: 'green' as const },
    },
    isActive: false,
  },
}

export const PurpleBadge: Story = {
  args: {
    category: {
      id: 'premium',
      name: '프리미엄',
      icon: '💎',
      badge: { type: 'NEW' as const, text: 'VIP', variant: 'purple' as const },
    },
    isActive: false,
  },
}

export const OrangeBadge: Story = {
  args: {
    category: {
      id: 'discount',
      name: '할인',
      icon: '💰',
      badge: { type: 'PERCENT' as const, text: '-50%', variant: 'orange' as const },
    },
    isActive: false,
  },
}

// 긴 텍스트 테스트
export const LongText: Story = {
  args: {
    category: {
      id: 'accessories',
      name: '패션액세서리',
      icon: '💍',
      badge: { type: 'NEW' as const, text: 'LIMITED', variant: 'blue' as const },
    },
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: '긴 텍스트가 있는 카테고리 아이템의 표시 방식을 확인할 수 있습니다.',
      },
    },
  },
}

// 다양한 이모지들
export const VariousIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {[
        { id: '1', name: '의류', icon: '👔' },
        { id: '2', name: '신발', icon: '👠' },
        { id: '3', name: '가방', icon: '🎒' },
        { id: '4', name: '시계', icon: '⌚' },
        { id: '5', name: '모자', icon: '👒' },
        { id: '6', name: '선글라스', icon: '🕶️' },
        { id: '7', name: '향수', icon: '🌸' },
        { id: '8', name: '스포츠', icon: '🏃‍♂️' },
      ].map((cat, index) => (
        <CategoryItem key={cat.id} category={cat} isActive={index === 2} />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘과 카테고리로 구성된 그리드 레이아웃입니다.',
      },
    },
  },
}

// 인터랙션 데모
export const Interactive: Story = {
  render: (args: any) => {
    const [isActive, setIsActive] = React.useState(false)
    const [clickCount, setClickCount] = React.useState(0)

    return (
      <div className="text-center">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">인터랙티브 데모</h3>
          <p className="text-sm text-gray-600">
            클릭 횟수: <span className="font-bold text-indigo-600">{clickCount}</span>
          </p>
          <p className="text-sm text-gray-600">
            상태: <span className="font-bold text-indigo-600">{isActive ? '활성' : '비활성'}</span>
          </p>
        </div>

        <CategoryItem
          {...args}
          category={sampleCategory}
          isActive={isActive}
          onClick={(category) => {
            setIsActive(!isActive)
            setClickCount((prev) => prev + 1)
            args.onClick?.(category)
          }}
        />

        <button
          onClick={() => {
            setIsActive(false)
            setClickCount(0)
          }}
          className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          리셋
        </button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '클릭하면 활성 상태가 토글되는 인터랙티브 데모입니다.',
      },
    },
  },
}

// 커스텀 스타일
export const CustomStyle: Story = {
  args: {
    category: {
      id: 'custom',
      name: '커스텀',
      icon: '🎨',
      badge: { type: 'NEW' as const, text: 'CUSTOM', variant: 'purple' as const },
    },
    isActive: false,
    className: 'ring-2 ring-pink-500 bg-pink-50 hover:bg-pink-100',
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 CSS 클래스가 적용된 카테고리 아이템입니다.',
      },
    },
  },
}

// 비교 뷰 (활성/비활성)
export const Comparison: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="text-center">
        <h4 className="text-sm font-medium text-gray-600 mb-3">비활성 상태</h4>
        <CategoryItem category={sampleCategory} isActive={false} />
      </div>

      <div className="text-center">
        <h4 className="text-sm font-medium text-gray-600 mb-3">활성 상태</h4>
        <CategoryItem category={sampleCategory} isActive={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '활성 상태와 비활성 상태를 나란히 비교해볼 수 있습니다.',
      },
    },
  },
}

// 모든 뱃지 변형들 한번에 보기
export const AllBadgeVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      {[
        { variant: 'red', text: 'HOT', name: '인기' },
        { variant: 'blue', text: 'NEW', name: '신상' },
        { variant: 'green', text: 'ECO', name: '친환경' },
        { variant: 'purple', text: 'VIP', name: '프리미엄' },
        { variant: 'orange', text: '-50%', name: '할인' },
        { variant: undefined, text: 'DEFAULT', name: '기본' },
      ].map((badge, index) => (
        <div key={index} className="text-center">
          <h4 className="text-xs font-medium text-gray-600 mb-2 capitalize">
            {badge.variant || 'Default'}
          </h4>
          <CategoryItem
            category={{
              id: `badge-${index}`,
              name: badge.name,
              icon: '🏷️',
              badge: badge.variant
                ? { type: 'NEW' as const, text: badge.text, variant: badge.variant as any }
                : { type: 'NEW' as const, text: badge.text },
            }}
            isActive={false}
          />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 뱃지 색상 변형을 한번에 확인할 수 있습니다.',
      },
    },
  },
}
