---
name: musinsa-store-generator
description: |
  Musinsa Wagon 프로젝트용 상태 관리 코드 생성기. Zustand 스토어와 TanStack Query 훅을 프로젝트 규칙에 맞게 생성한다.
  사용 시점: (1) 전역 상태 스토어 생성 시, (2) API 데이터 페칭 훅 생성 시, (3) "상태 관리" 요청 시, (4) 캐싱이 필요한 데이터 관리 시
---

# Musinsa Store Generator

상태 관리 코드 생성 시 아래 결정 트리를 따른다.

## 결정 트리

```
상태 관리 필요
    ↓
어떤 종류의 상태인가?
├─ 서버 데이터 (API) → TanStack Query (src/queries/)
├─ 전역 클라이언트 상태 → Zustand (src/stores/)
└─ 컴포넌트 로컬 상태 → useState
```

## Zustand 스토어

### 기본 스토어

```typescript
/**
 * 스토어 요약: {설명}
 * 상태: {상태 목록}
 * 액션: {액션 목록}
 */

import { create } from 'zustand'

interface {StoreName}State {
  // 상태
  count: number
  // 액션
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const use{StoreName}Store = create<{StoreName}State>((set) => ({
  // 초기 상태
  count: 0,
  // 액션
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
```

### 인증 스토어 예시

```typescript
/**
 * 스토어 요약: 사용자 인증 상태 관리
 * 상태: user, isAuthenticated, token
 * 액션: login, logout, setUser
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      login: (user, token) => set({ user, token, isAuthenticated: true }),
      logout: () => set({ user: null, token: null, isAuthenticated: false }),
      setUser: (user) => set({ user }),
    }),
    { name: 'auth-storage' }
  )
)
```

## TanStack Query 훅

### 기본 쿼리 훅

```typescript
/**
 * 훅 요약: {설명}
 * 반환값: { data, isLoading, error }
 * 사용법: const { data } = use{Name}Query()
 */

import { useQuery } from '@tanstack/react-query'

import { api } from '@/apis/main'

export function use{Name}Query() {
  return useQuery({
    queryKey: ['{name}'],
    queryFn: () => api.get{Name}(),
  })
}
```

### 파라미터가 있는 쿼리

```typescript
/**
 * 훅 요약: 상품 상세 조회
 * 반환값: { data, isLoading, error }
 * 사용법: const { data } = useProductQuery(productId)
 */
import { api } from '@/apis/main'
import { useQuery } from '@tanstack/react-query'

export function useProductQuery(productId: string) {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => api.getProduct(productId),
    enabled: !!productId,
  })
}
```

### 뮤테이션 훅

```typescript
/**
 * 훅 요약: 상품 생성
 * 반환값: { mutate, isLoading, error }
 * 사용법: const { mutate } = useCreateProductMutation()
 */
import { api } from '@/apis/main'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface CreateProductInput {
  name: string
  price: number
}

export function useCreateProductMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (input: CreateProductInput) => api.createProduct(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}
```

## 파일 위치

| 종류           | 위치             | 예시                 |
| -------------- | ---------------- | -------------------- |
| Zustand 스토어 | `src/stores/`    | `useAuthStore.ts`    |
| Query 훅       | `src/queries/`   | `useProductQuery.ts` |
| API 클라이언트 | `src/apis/main/` | OpenAPI 자동 생성    |

## 네이밍 규칙

| 종류        | 패턴                        | 예시                       |
| ----------- | --------------------------- | -------------------------- |
| 스토어      | `use{Name}Store`            | `useAuthStore`             |
| 쿼리 훅     | `use{Name}Query`            | `useProductQuery`          |
| 뮤테이션 훅 | `use{Action}{Name}Mutation` | `useCreateProductMutation` |

## 체크리스트

### Zustand 스토어

- [ ] `src/stores/` 위치
- [ ] `use{Name}Store` 네이밍
- [ ] 상태와 액션 타입 정의
- [ ] 영속성 필요시 persist 미들웨어

### TanStack Query

- [ ] `src/queries/` 위치
- [ ] queryKey 배열 형식
- [ ] enabled 옵션 (조건부 쿼리)
- [ ] 뮤테이션 후 invalidateQueries
