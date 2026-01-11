---
name: musinsa-component-generator
description: |
  Musinsa Wagon 프로젝트용 React 컴포넌트 생성기. 프로젝트 규칙에 맞는 컴포넌트를 자동 생성한다.
  사용 시점: (1) 새 컴포넌트 생성 요청 시, (2) "컴포넌트 만들어줘" 요청 시, (3) UI 컴포넌트 작성 시, (4) 페이지 전용 컴포넌트 생성 시
---

# Musinsa Component Generator

컴포넌트 생성 시 아래 워크플로우를 따른다.

## 워크플로우

```
컴포넌트 생성 요청
    ↓
위치 결정 (전역 vs 페이지 전용)
├─ 전역 공유 → src/components/{base|layout|ui}/
└─ 페이지 전용 → src/app/{route}/_components/
    ↓
타입 정의
    ↓
컴포넌트 작성
    ↓
index.ts export 추가
```

## 컴포넌트 템플릿

### 기본 컴포넌트

```typescript
/**
 * 컴포넌트 요약: {설명}
 * Props: {props 목록}
 * 사용법: <{ComponentName} {...props} />
 */

import { cn } from '@/lib/utils'

interface {ComponentName}Props {
  className?: string
  children?: React.ReactNode
}

export function {ComponentName}({ className, children }: {ComponentName}Props) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  )
}
```

### 클라이언트 컴포넌트 (상태 사용)

```typescript
'use client'

/**
 * 컴포넌트 요약: {설명}
 * Props: {props 목록}
 * 사용법: <{ComponentName} {...props} />
 */

import { useState } from 'react'

import { cn } from '@/lib/utils'

interface {ComponentName}Props {
  className?: string
}

export function {ComponentName}({ className }: {ComponentName}Props) {
  const [state, setState] = useState(false)

  return (
    <div className={cn('', className)}>
      {/* 컨텐츠 */}
    </div>
  )
}
```

### Props가 많은 컴포넌트

```typescript
/**
 * 컴포넌트 요약: 상품 카드
 * Props: product, onAddToCart, onLike
 * 사용법: <ProductCard product={...} onAddToCart={...} />
 */

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'

interface Product {
  id: string
  name: string
  price: number
  imageUrl: string
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (id: string) => void
  onLike?: (id: string) => void
  className?: string
}

export function ProductCard({
  product,
  onAddToCart,
  onLike,
  className
}: ProductCardProps) {
  return (
    <div className={cn('rounded-lg border p-4', className)}>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={200}
        height={200}
      />
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.price.toLocaleString()}원</p>
      <div className="flex gap-2">
        <Button onClick={() => onAddToCart?.(product.id)}>
          장바구니
        </Button>
        <Button variant="outline" onClick={() => onLike?.(product.id)}>
          찜하기
        </Button>
      </div>
    </div>
  )
}
```

## 위치 결정 기준

| 조건                     | 위치                           |
| ------------------------ | ------------------------------ |
| 2개 이상 페이지에서 사용 | `src/components/`              |
| 특정 페이지에서만 사용   | `src/app/{route}/_components/` |
| shadcn/ui 기반           | `src/components/ui/`           |
| 기본 빌딩 블록           | `src/components/base/`         |
| 레이아웃 관련            | `src/components/layout/`       |

## 체크리스트

- [ ] `export function` 사용 (const 금지)
- [ ] 파일 상단 주석 작성
- [ ] Props interface 정의
- [ ] className prop 지원
- [ ] cn() 유틸리티로 스타일 조합
- [ ] index.ts에 export 추가
