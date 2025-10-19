# Next.js 코드 리뷰 스타일 가이드

## 1. 네이밍 규칙

### 기본 규칙

- **함수명**: camelCase (`getUserData`, `handleSubmit`)
- **컴포넌트명**: PascalCase (`UserProfile`, `ProductCard`)
- **클래스명**: PascalCase (`ApiClient`, `UserService`)
- **상수명**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRY_COUNT`)
- **타입/인터페이스명**: PascalCase (`User`, `ProductResponse`)
- **파일명**:
  - 컴포넌트: PascalCase (`UserProfile.tsx`)
  - 유틸리티/훅: camelCase (`useAuth.ts`, `formatDate.ts`)
  - 타입: camelCase (`user.types.ts`)

### 의미 있는 네이밍

```typescript
// ❌ 나쁜 예
const d = new Date()
const fn = () => {}
const temp = data.filter((x) => x.active)

// ✅ 좋은 예
const currentDate = new Date()
const fetchUserData = () => {}
const activeUsers = data.filter((user) => user.active)
```

## 2. 코드 스타일

### 포매팅

- 한 줄 길이: **120자 이하**
- 들여쓰기: 2 스페이스
- 세미콜론: 사용
- 따옴표: 싱글 쿼트 (JSX는 더블 쿼트)
- 후행 쉼표: 사용

### Import 순서

```typescript
// 1. React 및 Next.js 코어
// 3. 내부 절대 경로 (알파벳 순)
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils'
import { userQueries } from '@/queries/user'
// 2. 외부 라이브러리 (알파벳 순)
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

// 4. 상대 경로
import { UserCard } from './UserCard'
// 5. 스타일 및 정적 파일
import './styles.css'
import type { User } from './types'
```

## 3. React 컴포넌트 패턴

### 컴포넌트 선언

```typescript
// ✅ 권장: export function (호이스팅, 디버깅 우수)
export function ProductCard({ product }: ProductCardProps) {
  return <div>{product.name}</div>
}

// ❌ 지양: 화살표 함수 (컴포넌트에는 적합하지 않음)
const ProductCard = ({ product }: ProductCardProps) => {
  return <div>{product.name}</div>
}
```

### Props 타입 정의

```typescript
// ✅ 좋은 예: 명확한 타입과 주석
interface ProductCardProps {
  /** 표시할 상품 정보 */
  product: Product
  /** 카드 클릭 시 실행될 핸들러 (선택사항) */
  onCardClick?: (productId: string) => void
  /** 컴팩트 모드 여부 */
  isCompact?: boolean
}

export function ProductCard({ product, onCardClick, isCompact = false }: ProductCardProps) {
  // ...
}
```

### 조건부 렌더링

```typescript
// ✅ 좋은 예: 명확한 early return
export function UserProfile({ userId }: Props) {
  const { data: user, isLoading, error } = useUser(userId)

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage error={error} />
  if (!user) return <NotFound />

  return <div>{user.name}</div>
}

// ❌ 나쁜 예: 중첩된 삼항 연산자
export function UserProfile({ userId }: Props) {
  const { data: user, isLoading, error } = useUser(userId)

  return isLoading ? <LoadingSpinner /> : error ? <ErrorMessage /> : user ? <div>{user.name}</div> : <NotFound />
}
```

## 4. Next.js 특화 패턴

### Server Components vs Client Components

```typescript
// ✅ 좋은 예: 서버 컴포넌트 우선 사용
// app/products/page.tsx
export default async function ProductsPage() {
  const products = await fetchProducts() // 서버에서 직접 데이터 페칭

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

// ✅ 클라이언트 컴포넌트: 상호작용이 필요할 때만
'use client'

export function AddToCartButton({ productId }: Props) {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await addToCart(productId)
    })
  }

  return <Button onClick={handleClick} disabled={isPending}>장바구니 추가</Button>
}
```

### 데이터 페칭 전략

```typescript
// ✅ 서버 컴포넌트: fetch with revalidate
export default async function Page() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // 1시간 캐싱
  })

  return <div>{data}</div>
}

// ✅ 클라이언트 컴포넌트: TanStack Query 사용
'use client'

export function UserData() {
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
    staleTime: 5 * 60 * 1000 // 5분
  })

  if (isLoading) return <Skeleton />
  return <div>{data?.name}</div>
}
```

### 동적 라우팅과 메타데이터

```typescript
// ✅ 좋은 예: generateMetadata 활용
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const product = await fetchProduct(params.id)

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage({
  params
}: {
  params: { id: string }
}) {
  const product = await fetchProduct(params.id)
  return <ProductDetail product={product} />
}
```

## 5. TypeScript 모범 사례

### 타입 안전성

```typescript
// ✅ 좋은 예: 제네릭과 타입 가드 활용
function isValidUser(user: unknown): user is User {
  return typeof user === 'object' && user !== null && 'id' in user && 'name' in user
}

// API 응답 타입 정의
interface ApiResponse<T> {
  data: T
  error?: string
  timestamp: number
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  return response.json()
}
```

### any 사용 지양

```typescript
// ❌ 나쁜 예
const data: any = await fetchData()

// ✅ 좋은 예: 명확한 타입 정의
interface UserData {
  id: string
  name: string
  email: string
}

const data: UserData = await fetchData<UserData>('/api/user')

// ✅ unknown 사용 (타입 검증 필요)
const data: unknown = await fetchData()
if (isValidUser(data)) {
  console.log(data.name) // 타입 가드 후 안전하게 사용
}
```

## 6. 성능 최적화

### 메모이제이션

```typescript
// ✅ 좋은 예: 적절한 메모이제이션
'use client'

export function ProductList({ products }: Props) {
  // 비용이 큰 계산만 메모이제이션
  const sortedProducts = useMemo(
    () => products.sort((a, b) => b.price - a.price),
    [products]
  )

  // 자식 컴포넌트에 전달되는 콜백 메모이제이션
  const handleProductClick = useCallback((id: string) => {
    console.log('Clicked:', id)
  }, [])

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={handleProductClick}
        />
      ))}
    </div>
  )
}

// ❌ 나쁜 예: 불필요한 메모이제이션
const sum = useMemo(() => a + b, [a, b]) // 간단한 계산은 메모이제이션 불필요
```

### 이미지 최적화

```typescript
// ✅ Next.js Image 컴포넌트 사용
import Image from 'next/image'

export function ProductImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
    />
  )
}
```

### 동적 import

```typescript
// ✅ 무거운 컴포넌트는 동적 import
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Skeleton />,
  ssr: false // 클라이언트에서만 렌더링
})

export function Dashboard() {
  return (
    <div>
      <h1>대시보드</h1>
      <HeavyChart />
    </div>
  )
}
```

## 7. 상태 관리

### 로컬 vs 전역 상태

```typescript
// ✅ 좋은 예: 로컬 상태는 useState
export function Counter() {
  const [count, setCount] = useState(0) // 컴포넌트 내부에서만 사용

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}

// ✅ 좋은 예: 전역 상태는 Zustand
// stores/authStore.ts
import { create } from 'zustand'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false })
}))
```

### Server State 관리

```typescript
// ✅ TanStack Query로 서버 상태 관리
// queries/productQueries.ts
export const productQueries = {
  all: () => ['products'] as const,
  lists: () => [...productQueries.all(), 'list'] as const,
  list: (filters: string) => [...productQueries.lists(), filters] as const,
  details: () => [...productQueries.all(), 'detail'] as const,
  detail: (id: string) => [...productQueries.details(), id] as const,
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: productQueries.detail(id),
    queryFn: () => fetchProduct(id),
    staleTime: 5 * 60 * 1000,
  })
}
```

## 8. 에러 핸들링

### 예외 처리

```typescript
// ✅ 좋은 예: 구체적인 에러 처리
export async function fetchUserData(userId: string) {
  try {
    const response = await api.get(`/users/${userId}`)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error('사용자를 찾을 수 없습니다')
      }
      if (error.response?.status === 401) {
        throw new Error('인증이 필요합니다')
      }
    }
    throw new Error('사용자 데이터를 불러오는데 실패했습니다')
  }
}

// ✅ Error Boundary 활용
'use client'

export function ErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundaryComponent
      fallback={({ error }) => <ErrorMessage error={error} />}
    >
      {children}
    </ErrorBoundaryComponent>
  )
}
```

## 9. 접근성 (a11y)

### 시맨틱 HTML

```typescript
// ✅ 좋은 예: 시맨틱 태그 사용
export function Article({ title, content }: Props) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <main>
        <p>{content}</p>
      </main>
    </article>
  )
}

// ❌ 나쁜 예
export function Article({ title, content }: Props) {
  return (
    <div>
      <div className="text-2xl font-bold">{title}</div>
      <div>{content}</div>
    </div>
  )
}
```

### ARIA 속성

```typescript
// ✅ 적절한 ARIA 레이블
export function SearchButton() {
  return (
    <button
      aria-label="검색"
      aria-describedby="search-description"
    >
      <SearchIcon />
    </button>
  )
}
```

## 10. 테스트 작성

### 컴포넌트 테스트

```typescript
// ✅ 사용자 중심 테스트
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

describe('LoginForm', () => {
  it('사용자가 로그인 정보를 입력하고 제출할 수 있다', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()

    render(<LoginForm onSubmit={onSubmit} />)

    await user.type(screen.getByLabelText('이메일'), 'test@example.com')
    await user.type(screen.getByLabelText('비밀번호'), 'password123')
    await user.click(screen.getByRole('button', { name: '로그인' }))

    expect(onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    })
  })
})
```

## 11. 보안

### XSS 방지

```typescript
// ✅ React의 자동 이스케이프 활용
export function UserComment({ comment }: Props) {
  return <p>{comment}</p> // 자동으로 이스케이프됨
}

// ⚠️ dangerouslySetInnerHTML 사용 시 sanitize
import DOMPurify from 'dompurify'

export function RichContent({ html }: Props) {
  const sanitizedHtml = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
}
```

### 환경 변수

```typescript
// ✅ 클라이언트 노출 변수는 NEXT_PUBLIC_ 접두사
// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://... // 서버에서만 접근 가능

// 사용
const apiUrl = process.env.NEXT_PUBLIC_API_URL // 클라이언트에서 사용 가능
const dbUrl = process.env.DATABASE_URL // 서버에서만 사용 가능
```

## 12. 코드 구조 및 설계

### 단일 책임 원칙

```typescript
// ❌ 나쁜 예: 하나의 컴포넌트가 너무 많은 일을 함
export function UserDashboard() {
  // 사용자 데이터 페칭
  // 통계 계산
  // UI 렌더링
  // 폼 처리
  // ...
}

// ✅ 좋은 예: 책임 분리
export function UserDashboard() {
  return (
    <div>
      <UserProfile />
      <UserStats />
      <UserActivityFeed />
      <UserSettingsForm />
    </div>
  )
}
```

### 재사용 가능한 훅

```typescript
// ✅ 로직을 커스텀 훅으로 추출
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// 사용
export function SearchInput() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    if (debouncedSearch) {
      performSearch(debouncedSearch)
    }
  }, [debouncedSearch])

  return <input value={search} onChange={e => setSearch(e.target.value)} />
}
```

## 코드 리뷰 체크리스트

### 필수 항목

- [ ] 타입 안전성: `any` 사용 최소화, 적절한 타입 정의
- [ ] 컴포넌트: Server Component 우선, Client Component는 필요시에만
- [ ] 성능: 불필요한 리렌더링 방지, 적절한 메모이제이션
- [ ] 에러 처리: 모든 비동기 작업에 에러 핸들링
- [ ] 네이밍: 명확하고 일관된 이름 사용
- [ ] 접근성: 시맨틱 HTML, ARIA 레이블
- [ ] 보안: XSS 방지, 환경 변수 적절히 사용
- [ ] 코드 중복: DRY 원칙 준수
- [ ] 테스트: 주요 기능에 대한 테스트 작성
- [ ] 문서화: 복잡한 로직에 주석, 파일 요약 주석 작성

### 권장 항목

- [ ] 성능 최적화: 이미지 최적화, 코드 스플리팅
- [ ] SEO: 메타데이터 설정, 시맨틱 마크업
- [ ] 반응형: 모바일 우선 디자인
- [ ] 로딩 상태: 스켈레톤, 로딩 인디케이터
- [ ] 사용자 피드백: 토스트, 에러 메시지
