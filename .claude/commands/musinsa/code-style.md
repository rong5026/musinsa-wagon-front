---
name: musinsa-code-style
description: |
  Musinsa Wagon 프로젝트의 코드 스타일 가이드. Next.js 15 + TypeScript + Tailwind CSS 기반 프로젝트의 코딩 컨벤션을 제공한다.
  사용 시점: (1) 새로운 코드 작성 시, (2) 코드 리뷰 시, (3) 리팩토링 시, (4) 컴포넌트/훅/유틸리티 작성 시
---

# Musinsa Wagon 코드 스타일 가이드

## 핵심 원칙 (최우선)

### 1. 재사용 우선 (Reuse First)

**새 코드 작성 전 반드시 기존 코드 검색**

```
구현 요청
    ↓
기존 코드 검색 (필수)
├─ src/components/ 검색
├─ src/hooks/ 검색
├─ src/utils/ 검색
└─ src/queries/ 검색
    ↓
있음 → 재사용 또는 확장
없음 → 새로 구현
```

**검색 체크리스트**

- [ ] 같은 기능의 컴포넌트가 있는가?
- [ ] 비슷한 로직의 훅이 있는가?
- [ ] 유틸리티 함수로 추출된 것이 있는가?
- [ ] shadcn/ui에 해당 컴포넌트가 있는가?

### 2. 클린 코드 원칙

**SOLID 원칙**

- **S**ingle Responsibility: 하나의 함수/컴포넌트는 하나의 책임만
- **O**pen/Closed: 확장에 열려있고, 수정에 닫혀있게
- **L**iskov Substitution: 하위 타입은 상위 타입을 대체 가능하게
- **I**nterface Segregation: 인터페이스는 작게 분리
- **D**ependency Inversion: 추상화에 의존

**함수 규칙**

- 함수는 한 가지 일만 수행
- 함수 길이 20줄 이하 권장
- 매개변수 3개 이하 권장 (초과 시 객체로 묶기)
- 부수효과(Side Effect) 최소화

**컴포넌트 규칙**

- 컴포넌트 300줄 이하 권장
- 로직이 복잡하면 커스텀 훅으로 분리
- Presentational / Container 패턴 고려
- Props drilling 3단계 이상 시 Context 또는 Zustand 고려

**네이밍**

- 의미 있는 이름 사용 (약어 지양)
- 불린: is, has, can, should 접두사
- 핸들러: handle 접두사 (handleClick, handleSubmit)
- 배열: 복수형 (items, products)

**DRY (Don't Repeat Yourself)**

- 같은 코드 2번 이상 반복 시 추출
- 유틸리티 함수로 분리
- 커스텀 훅으로 분리
- 공통 컴포넌트로 분리

## 기술 스택

- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State**: Zustand (전역) + TanStack Query (서버)
- **API**: OpenAPI Generator + Axios

## 함수 선언 규칙

### React 컴포넌트

```typescript
// 권장: export function 사용
export function ProductCard({ title, price }: ProductCardProps) {
  return <div>{title}</div>
}

// 금지: const + arrow function
const ProductCard = ({ title }: Props) => <div>{title}</div>
```

### 커스텀 훅

```typescript
// 'use client' 지시어 필수 (클라이언트 상태 사용 시)
'use client'

export function useProducts() {
  const { data, isLoading } = useQuery(...)
  return { products: data ?? [], isLoading }
}
```

### 유틸리티 함수

```typescript
export function formatPrice(price: number): string {
  return price.toLocaleString() + '원'
}
```

## Import 순서

```typescript
// 1. React 관련
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import Image from 'next/image'
// 2. Next.js 관련
import { useRouter } from 'next/navigation'

import { useProducts } from '@/hooks'
// 3. 외부 라이브러리
import { useQuery } from '@tanstack/react-query'

// 4. 내부 모듈 (@/ prefix)
import { Button } from '@/components/ui'

import { cn } from '@/lib/utils'
```

## 파일 구조 및 네이밍

| 항목     | 규칙              | 예시               |
| -------- | ----------------- | ------------------ |
| 컴포넌트 | PascalCase        | `ProductCard.tsx`  |
| 훅       | camelCase + use   | `useProducts.ts`   |
| 스토어   | camelCase + Store | `useAuthStore.ts`  |
| 유틸리티 | camelCase         | `formatPrice.ts`   |
| 상수     | UPPER_SNAKE_CASE  | `API_ENDPOINTS.ts` |
| 타입     | PascalCase        | `Product.ts`       |

## 파일 헤더 주석

모든 파일은 요약 주석으로 시작:

```typescript
/**
 * 컴포넌트 요약: 상품 카드 UI
 * Props: title, price, image, onClick
 * 사용법: <ProductCard title="..." price={1000} />
 */
```

## Tailwind CSS 사용

```typescript
// cn() 유틸리티로 조건부 클래스 결합
import { cn } from '@/lib/utils'

<div className={cn(
  'p-4 rounded-lg',
  isActive && 'bg-primary',
  className
)} />
```

## 상태 관리

### 로컬 상태 (useState)

- 폼 입력값
- UI 토글 (모달, 드롭다운)
- 일시적 데이터

### 전역 상태 (Zustand)

- 인증 정보
- 사용자 설정
- 앱 전역 설정

### 서버 상태 (TanStack Query)

- API 데이터 캐싱
- 자동 리페칭
- 로딩/에러 상태

## 상수 정의

```typescript
// as const로 타입 추론 강화
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
} as const

export type BreakpointKey = keyof typeof BREAKPOINTS
```

## 디렉토리 구조 (Colocation 패턴)

```
src/app/
├── products/
│   ├── [id]/
│   │   ├── _components/     # 페이지 전용 컴포넌트
│   │   │   └── ProductDetail.tsx
│   │   └── page.tsx
│   └── page.tsx
```

- `_components/`: 해당 라우트 전용 컴포넌트
- `src/components/`: 전역 공유 컴포넌트
- `src/hooks/`: 전역 커스텀 훅

## 금지 사항

1. `any` 타입 사용 금지
2. `export default` 지양 (named export 권장)
3. 불필요한 주석 금지
4. console.log 커밋 금지
5. 미사용 import 금지
