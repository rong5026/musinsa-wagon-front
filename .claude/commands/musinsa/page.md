---
name: musinsa-page-generator
description: |
  Musinsa Wagon 프로젝트용 Next.js App Router 페이지 생성기. Colocation 패턴을 따르는 페이지와 관련 파일을 생성한다.
  사용 시점: (1) 새 페이지 생성 요청 시, (2) 라우트 추가 시, (3) "페이지 만들어줘" 요청 시, (4) 동적 라우트 생성 시
---

# Musinsa Page Generator

Next.js App Router 페이지 생성 시 아래 워크플로우를 따른다.

## 워크플로우

```
페이지 생성 요청
    ↓
라우트 유형 결정
├─ 정적 라우트 → src/app/{route}/page.tsx
├─ 동적 라우트 → src/app/{route}/[id]/page.tsx
└─ 라우트 그룹 → src/app/({group})/{route}/page.tsx
    ↓
필요 파일 생성
├─ page.tsx (필수)
├─ layout.tsx (선택)
├─ loading.tsx (선택)
├─ error.tsx (선택)
└─ _components/ (페이지 전용 컴포넌트)
```

## 파일 템플릿

### 기본 페이지 (page.tsx)

```typescript
/**
 * 페이지 요약: {설명}
 * 라우트: /{route}
 * 렌더링: Server Component
 */

export default function {PageName}Page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">{페이지 제목}</h1>
    </main>
  )
}
```

### 메타데이터가 있는 페이지

```typescript
/**
 * 페이지 요약: {설명}
 * 라우트: /{route}
 * 렌더링: Server Component
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{페이지 제목} | 무신사 웨건',
  description: '{페이지 설명}',
}

export default function {PageName}Page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold">{페이지 제목}</h1>
    </main>
  )
}
```

### 동적 라우트 페이지

```typescript
/**
 * 페이지 요약: 상품 상세 페이지
 * 라우트: /products/[id]
 * 렌더링: Server Component
 */

import type { Metadata } from 'next'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  return {
    title: `상품 ${id} | 무신사 웨건`,
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params

  return (
    <main className="container mx-auto py-8">
      <h1>상품 상세: {id}</h1>
    </main>
  )
}
```

### 레이아웃 (layout.tsx)

```typescript
/**
 * 레이아웃 요약: {설명}
 * 적용 범위: /{route} 하위 모든 페이지
 */

interface Props {
  children: React.ReactNode
}

export default function {LayoutName}Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      {/* 공통 네비게이션, 헤더 등 */}
      {children}
    </div>
  )
}
```

### 로딩 UI (loading.tsx)

```typescript
/**
 * 로딩 요약: {라우트} 페이지 로딩 UI
 */

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
    </div>
  )
}
```

### 에러 UI (error.tsx)

```typescript
'use client'

/**
 * 에러 요약: {라우트} 페이지 에러 UI
 */

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h2 className="text-xl font-bold">문제가 발생했습니다</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        다시 시도
      </button>
    </div>
  )
}
```

## 디렉토리 구조 예시

```
src/app/
├── (auth)/                    # 라우트 그룹 (URL에 포함 안됨)
│   ├── login/
│   │   ├── _components/       # 페이지 전용 컴포넌트
│   │   │   └── LoginForm.tsx
│   │   └── page.tsx
│   └── layout.tsx             # 인증 페이지 공통 레이아웃
├── products/
│   ├── [id]/                  # 동적 라우트
│   │   ├── _components/
│   │   │   └── ProductDetail.tsx
│   │   ├── page.tsx
│   │   └── loading.tsx
│   └── page.tsx               # 상품 목록
└── layout.tsx                 # 루트 레이아웃
```

## 라우트 유형

| 유형        | 문법                     | URL 예시         |
| ----------- | ------------------------ | ---------------- |
| 정적        | `products/page.tsx`      | `/products`      |
| 동적        | `products/[id]/page.tsx` | `/products/123`  |
| Catch-all   | `[...slug]/page.tsx`     | `/a/b/c`         |
| 라우트 그룹 | `(auth)/login/page.tsx`  | `/login`         |
| 병렬 라우트 | `@modal/page.tsx`        | 모달 병렬 렌더링 |

## 체크리스트

- [ ] 적절한 라우트 위치 선택
- [ ] Metadata 설정 (SEO)
- [ ] 페이지 전용 컴포넌트는 `_components/`에 배치
- [ ] 필요시 loading.tsx, error.tsx 추가
- [ ] Server Component 우선 (필요시만 'use client')
