import Header from '@/components/layout/Header'
import React from 'react'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '메인 헤더 컴포넌트 - 로고, 검색창, 알림, 상품등록, 마이페이지 기능을 포함합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    logoText: {
      control: 'text',
      description: '로고 텍스트',
    },
    searchPlaceholder: {
      control: 'text',
      description: '검색창 플레이스홀더 텍스트',
    },
    notificationCount: {
      control: 'number',
      description: '알림 개수 (0이면 숨김)',
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
    },
    onSearch: { action: 'searched' },
    onAddProduct: { action: 'add-product-clicked' },
    onMyPage: { action: 'my-page-clicked' },
    onNotification: { action: 'notification-clicked' },
    onLogoClick: { action: 'logo-clicked' },
  },
}

export const Default = {
  args: {
    logoText: 'MUSINSAWAGON',
    searchPlaceholder: '어떤 상품을 찾으시나요?',
    notificationCount: 3,
  },
}
