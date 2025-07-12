import React, { useState } from 'react'

import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 스타일과 옵션을 지원하는 범용 버튼 컴포넌트',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'outline', 'ghost', 'link'],
      describe: '버튼 스타일',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
      describe: '버튼 크기',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'xlarge', 'full'],
      describe: '버튼 모서리 둥글기',
    },
    fontWeight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      describe: '버튼 텍스트 두께',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      describe: '버튼 텍스트 정렬',
    },
    backgroundColor: {
      control: 'color',
      describe: '버튼 배경색',
    },
    textColor: {
      control: 'color',
      describe: '버튼 텍스트 색상',
    },
    disabled: {
      control: 'boolean',
      describe: '버튼 비활성화 여부',
    },
    loading: {
      control: 'boolean',
      describe: '버튼 로딩 상태',
    },
    animation: {
      control: 'boolean',
      describe: '버튼 애니메이션 여부',
    },
    shadow: {
      control: 'boolean',
      describe: '버튼 그림자 여부',
    },
    border: {
      control: 'boolean',
      describe: '버튼 테두리 여부',
    },
    icon: {
      control: 'select',
      options: [
        'shopping-cart',
        'bell',
        'download',
        'plus',
        'heart',
        'share',
        'settings',
        'user',
        'search',
        'mail',
        'phone',
        'check',
        'x',
        'edit',
        'trash',
        'arrow-right',
        'arrow-left',
        'home',
        'star',
      ],
      describe: '아이콘 이름',
    },
    iconOnly: {
      control: 'boolean',
      describe: '아이콘 전용 버튼 여부',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      describe: '아이콘 위치',
    },
    onClick: { action: 'clicked' },
  },
}

export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
}

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '사용 가능한 버튼 유형 보여주기',
      },
    },
  },
}

// 모든 크기들 스토리
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">XLarge</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '사용 가능한 모든 버튼 크기들을 보여줍니다.',
      },
    },
  },
}

// 아이콘 버튼들 스토리
export const WithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button icon="shopping-cart" backgroundColor="#3B82F6">
        구매하기
      </Button>
      <Button icon="bell" backgroundColor="#10B981">
        알림 등록
      </Button>
      <Button icon="download" variant="outline">
        다운로드
      </Button>
      <Button icon="plus" iconPosition="right" variant="success">
        추가
      </Button>
      <Button icon="heart" iconOnly variant="danger" />
      <Button icon="share" iconOnly variant="outline" />
      <Button icon="settings" iconOnly variant="ghost" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 아이콘과 함께 사용하는 버튼들을 보여줍니다.',
      },
    },
  },
}

// 모서리 둥글기 스토리
export const BorderRadius = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button borderRadius="none">사각형</Button>
      <Button borderRadius="small">작은 둥글기</Button>
      <Button borderRadius="medium">중간 둥글기</Button>
      <Button borderRadius="large">큰 둥글기</Button>
      <Button borderRadius="full">완전 둥글기</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 모서리 둥글기 옵션들을 보여줍니다.',
      },
    },
  },
}

// 커스텀 색상 스토리
export const CustomColors = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button backgroundColor="#8B5CF6" hoverBackgroundColor="#7C3AED" icon="star">
        Purple
      </Button>
      <Button backgroundColor="#EC4899" hoverBackgroundColor="#DB2777" icon="heart">
        Pink
      </Button>
      <Button backgroundColor="#06B6D4" hoverBackgroundColor="#0891B2" icon="mail">
        Cyan
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '커스텀 색상을 적용한 버튼들을 보여줍니다.',
      },
    },
  },
}

// 특수 상태 스토리
export const SpecialStates = {
  render: () => {
    const [loading, setLoading] = useState(false)

    const handleLoadingTest = () => {
      setLoading(true)
      setTimeout(() => setLoading(false), 2000)
    }

    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button disabled>비활성화</Button>
        <Button loading={loading} onClick={handleLoadingTest}>
          {loading ? '로딩 중...' : '로딩 테스트'}
        </Button>
        <Button shadow>그림자 효과</Button>
        <Button animation={false}>애니메이션 없음</Button>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: '특수한 상태의 버튼들을 보여줍니다. 로딩 테스트 버튼을 클릭해보세요!',
      },
    },
  },
}

// 전체 너비 스토리
export const FullWidth = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Button fullWidth icon="check" size="large">
        전체 너비 버튼
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '컨테이너의 전체 너비를 차지하는 버튼입니다.',
      },
    },
  },
}

// 텍스트 정렬 스토리
export const TextAlignment = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px' }}>
      <Button fullWidth textAlign="left" icon="arrow-left">
        왼쪽 정렬
      </Button>
      <Button fullWidth textAlign="center" icon="home">
        중앙 정렬
      </Button>
      <Button fullWidth textAlign="right" icon="arrow-right" iconPosition="right">
        오른쪽 정렬
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 텍스트 정렬 옵션들을 보여줍니다.',
      },
    },
  },
}

// 폰트 굵기 스토리
export const FontWeights = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button fontWeight="light">Light</Button>
      <Button fontWeight="normal">Normal</Button>
      <Button fontWeight="medium">Medium</Button>
      <Button fontWeight="semibold">Semibold</Button>
      <Button fontWeight="bold">Bold</Button>
      <Button fontWeight="extrabold">Extra Bold</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 폰트 굵기 옵션들을 보여줍니다.',
      },
    },
  },
}

// 인터랙티브 스토리 (Controls Panel에서 조작 가능)
export const Interactive = {
  args: {
    children: 'Interactive Button',
    variant: 'primary',
    size: 'medium',
    icon: 'star',
    iconPosition: 'left',
    borderRadius: 'medium',
    fontWeight: 'medium',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconOnly: false,
    shadow: false,
    animation: true,
    border: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 모든 속성을 실시간으로 조작해볼 수 있는 인터랙티브 버튼입니다.',
      },
    },
  },
}

// 실제 사용 예시 스토리
export const RealWorldExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      {/* 액션 버튼 그룹 */}
      <div>
        <h3 style={{ marginBottom: '12px', color: '#374151' }}>액션 버튼 그룹</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="primary" icon="check">
            저장
          </Button>
          <Button variant="outline" icon="x">
            취소
          </Button>
          <Button variant="danger" icon="trash">
            삭제
          </Button>
        </div>
      </div>

      {/* 네비게이션 */}
      <div>
        <h3 style={{ marginBottom: '12px', color: '#374151' }}>네비게이션</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="ghost" icon="arrow-left">
            이전
          </Button>
          <Button variant="ghost" icon="home">
            홈
          </Button>
          <Button variant="ghost" icon="arrow-right" iconPosition="right">
            다음
          </Button>
        </div>
      </div>

      {/* 소셜 액션 */}
      <div>
        <h3 style={{ marginBottom: '12px', color: '#374151' }}>소셜 액션</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button variant="outline" icon="heart" iconOnly />
          <Button variant="outline" icon="share" iconOnly />
          <Button variant="primary" icon="plus">
            팔로우
          </Button>
        </div>
      </div>

      {/* CTA 버튼 */}
      <div>
        <h3 style={{ marginBottom: '12px', color: '#374151' }}>Call to Action</h3>
        <Button
          fullWidth
          size="large"
          icon="shopping-cart"
          backgroundColor="#059669"
          hoverBackgroundColor="#047857"
        >
          지금 구매하기
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 웹사이트에서 사용할 수 있는 버튼 조합 예시들입니다.',
      },
    },
  },
}
