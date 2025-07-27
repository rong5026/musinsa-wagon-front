/**
 * Storybook stories for CategoryNav component
 */
import { CategoryNav } from '@/features/category'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'

// 샘플 카테고리 데이터
const sampleCategories = [
  {
    id: 'clothes',
    name: '상의',
    icon: '👕',
    badge: { type: 'NEW' as const, text: 'NEW', variant: 'blue' as const },
  },
  {
    id: 'outer',
    name: '아우터',
    icon: '🧥',
    badge: { type: 'HOT' as const, text: 'HOT', variant: 'red' as const },
  },
  {
    id: 'pants',
    name: '바지',
    icon: '👖',
  },
  {
    id: 'onepiece',
    name: '원피스',
    icon: '👗',
    badge: { type: 'SALE' as const, text: 'SALE', variant: 'green' as const },
  },
  {
    id: 'shoes',
    name: '신발',
    icon: '👟',
  },
  {
    id: 'bag',
    name: '가방',
    icon: '👜',
    badge: { type: 'PERCENT' as const, text: '-50%', variant: 'orange' as const },
  },
  {
    id: 'fashion',
    name: '패션소품',
    icon: '🎩',
  },
  {
    id: 'beauty',
    name: '뷰티',
    icon: '💄',
    badge: { type: 'NEW' as const, text: 'NEW', variant: 'purple' as const },
  },
]

const meta: Meta<typeof CategoryNav> = {
  title: 'Components/CategoryNav',
  component: CategoryNav,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '이커머스 카테고리 네비게이션 컴포넌트입니다. 가로 스크롤과 키보드 네비게이션을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    categories: {
      description: '표시할 카테고리 배열',
    },
    activeCategory: {
      control: 'text',
      description: '활성화된 카테고리 ID',
    },
    enableKeyboardNavigation: {
      control: 'boolean',
      description: '키보드 네비게이션 활성화',
    },
    enableScrollOpacity: {
      control: 'boolean',
      description: '스크롤 시 투명도 변경 활성화',
    },
    onCategorySelect: {
      action: 'category-selected',
      description: '카테고리 선택 시 호출되는 콜백',
    },
  },
}

export default meta
type Story = StoryObj<typeof CategoryNav>

// 기본 스토리
export const Default: Story = {
  args: {
    categories: sampleCategories,
    activeCategory: 'onepiece',
    enableKeyboardNavigation: true,
    enableScrollOpacity: true,
  },
  decorators: [
    (Story: any) => (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-10">
        <Story />
      </div>
    ),
  ],
}

// 뱃지 없는 버전
export const WithoutBadges: Story = {
  args: {
    ...Default.args,
    categories: sampleCategories.map((cat) => ({ ...cat, badge: undefined })),
    activeCategory: 'clothes',
  },
  decorators: Default.decorators,
  parameters: {
    docs: {
      description: {
        story: '뱃지가 없는 깔끔한 카테고리 네비게이션입니다.',
      },
    },
  },
}

// 키보드 네비게이션 비활성화
export const NoKeyboardNavigation: Story = {
  args: {
    ...Default.args,
    enableKeyboardNavigation: false,
    activeCategory: 'shoes',
  },
  decorators: Default.decorators,
  parameters: {
    docs: {
      description: {
        story: '키보드 네비게이션이 비활성화된 버전입니다. 마우스/터치로만 조작 가능합니다.',
      },
    },
  },
}

// 스크롤 투명도 효과 비활성화
export const NoScrollOpacity: Story = {
  args: {
    ...Default.args,
    enableScrollOpacity: false,
    activeCategory: 'fashion',
  },
  decorators: Default.decorators,
  parameters: {
    docs: {
      description: {
        story: '스크롤 시 투명도 변경 효과가 비활성화된 버전입니다.',
      },
    },
  },
}

// 적은 수의 카테고리
export const FewCategories: Story = {
  args: {
    ...Default.args,
    categories: sampleCategories.slice(0, 4),
    activeCategory: 'outer',
  },
  decorators: Default.decorators,
  parameters: {
    docs: {
      description: {
        story: '적은 수의 카테고리로 구성된 네비게이션입니다.',
      },
    },
  },
}

// 많은 수의 카테고리
export const ManyCategories: Story = {
  args: {
    ...Default.args,
    categories: [
      ...sampleCategories,
      { id: 'tech', name: '디지털', icon: '📱' },
      {
        id: 'sports',
        name: '스포츠',
        icon: '⚽',
        badge: { type: 'NEW' as const, text: 'NEW', variant: 'blue' as const },
      },
      { id: 'home', name: '홈&리빙', icon: '🏠' },
      { id: 'books', name: '도서', icon: '📚' },
      {
        id: 'food',
        name: '푸드',
        icon: '🍕',
        badge: { type: 'HOT' as const, text: 'HOT', variant: 'red' as const },
      },
    ],
    activeCategory: 'tech',
  },
  decorators: Default.decorators,
  parameters: {
    docs: {
      description: {
        story: '많은 수의 카테고리가 있을 때 가로 스크롤이 작동하는 모습을 확인할 수 있습니다.',
      },
    },
  },
}

// 인터랙티브 데모
export const Interactive: Story = {
  render: (args: any) => {
    const [activeCategory, setActiveCategory] = React.useState('onepiece')

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">카테고리 네비게이션 데모</h2>
          <p className="text-gray-600">
            활성 카테고리: <span className="font-semibold text-indigo-600">{activeCategory}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">키보드 좌우 화살표로도 탐색 가능합니다</p>
        </div>

        <CategoryNav
          {...args}
          activeCategory={activeCategory}
          onCategorySelect={(category) => {
            setActiveCategory(category.id)
            // Storybook action은 여전히 호출됩니다
            args.onCategorySelect?.(category)
          }}
        />

        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">선택된 카테고리</h3>
            <div className="text-4xl mb-2">
              {sampleCategories.find((cat) => cat.id === activeCategory)?.icon}
            </div>
            <p className="text-gray-600">
              {sampleCategories.find((cat) => cat.id === activeCategory)?.name}
            </p>
          </div>
        </div>
      </div>
    )
  },
  args: {
    categories: sampleCategories,
    enableKeyboardNavigation: true,
    enableScrollOpacity: true,
  },
  parameters: {
    docs: {
      description: {
        story: '실제로 카테고리를 선택해볼 수 있는 인터랙티브 데모입니다.',
      },
    },
  },
}

// 다크 테마 버전
export const DarkTheme: Story = {
  args: {
    ...Default.args,
    className: 'bg-gray-800/95 border-gray-700/20',
  },
  decorators: [
    (Story: any) => (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-10">
        <style jsx global>{`
          .category-item {
            color: white;
          }
          .category-item:hover {
            background: rgba(55, 65, 81, 0.8);
          }
          .category-item.active {
            background: rgba(55, 65, 81, 0.9);
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: '다크 테마 환경에서의 카테고리 네비게이션입니다.',
      },
    },
  },
}
