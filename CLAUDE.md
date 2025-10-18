# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 참고할 수 있는 가이드를 제공합니다.

## 기술 스택

- **프레임워크**: Next.js 15.3.3 with App Router
- **언어**: TypeScript (엄격한 설정)
- **스타일링**: Tailwind CSS v4.1.10 with shadcn/ui 컴포넌트
- **상태 관리**: Zustand (전역 상태)
- **데이터 페칭**: TanStack Query (React Query) with 커스텀 에러 처리
- **HTTP 클라이언트**: Axios
- **UI 컴포넌트**: shadcn/ui with Radix UI primitives
- **아이콘**: Lucide React
- **알림**: Sonner (toast 알림)
- **패키지 매니저**: pnpm
- **테스팅**: Vitest with Storybook 통합 및 Playwright
- **코드 품질**: ESLint, Prettier, Husky (git hooks)

## 개발 명령어

### 환경별 개발 서버

```bash
# 개발 환경
pnpm dev

# 프로덕션 환경
pnpm prod

# 로컬 환경
pnpm local
```

### 빌드 명령어

```bash
# 환경별 빌드
pnpm build:dev
pnpm build:prod
pnpm build:local
```

### 코드 생성

```bash
# OpenAPI 스펙에서 API 클라이언트 생성
pnpm codegen:dev    # 개발 API
pnpm codegen:prod   # 프로덕션 API
pnpm codegen:local  # 로컬 API

# 코드 생성 없이 개발 (더 빠른 시작)
pnpm dev-without-codegen
pnpm prod-without-codegen
pnpm local-without-codegen
```

### 코드 품질

```bash
# 린팅
pnpm lint           # 린트 오류 검사
pnpm fix:lint       # 린트 오류 수정

# 포맷팅
pnpm prettier       # 포맷팅 검사
pnpm fix:prettier   # 포맷팅 수정

# 타입 검사
pnpm type-check     # TypeScript 타입 검사 실행
```

### 테스팅 및 개발 도구

```bash
# Storybook
pnpm storybook         # Storybook 개발 서버 시작
pnpm build-storybook   # Storybook 빌드

# 프로덕션 서버 시작
pnpm start
```

## 프로젝트 아키텍처

### 디렉토리 구조

- `src/apis/main/` - OpenAPI 스펙에서 자동 생성된 API 클라이언트
- `src/app/` - Next.js App Router 페이지 및 레이아웃
- `src/components/` - 목적별로 구성된 재사용 가능한 React 컴포넌트
  - `src/components/base/` - 기본 컴포넌트 (Badge, Button, Text)
  - `src/components/layout/` - 레이아웃 컴포넌트 (Header, Footer, Navigation)
  - `src/components/ui/` - shadcn/ui 컴포넌트
  - `src/components/provider/` - 컨텍스트 프로바이더 (QueryClient, Viewport)
- `src/features/` - 기능 기반 구성
  - `src/features/auth/` - 인증 기능 컴포넌트 및 훅
  - `src/features/banner/` - 배너/캐러셀 기능
  - `src/features/category/` - 카테고리 네비게이션 및 표시
  - `src/features/notifications/` - 알림 시스템
  - `src/features/products/` - 상품 표시 및 상호작용
- `src/hooks/` - 커스텀 React 훅
- `src/lib/` - 유틸리티 함수 및 설정
- `src/queries/` - TanStack Query 훅 및 설정
- `src/stores/` - Zustand 스토어 정의
- `src/types/` - TypeScript 타입 정의
- `src/utils/` - 일반적인 유틸리티 함수
- `src/stories/` - 컴포넌트용 Storybook 스토리

### 주요 설정 파일

- `tsconfig.json` - 엄격한 TypeScript 설정과 경로 매핑 (`@/*` → `src/*`)
- `components.json` - shadcn/ui 설정 (New York 스타일, CSS 변수)
- `vitest.config.ts` - Storybook 통합 테스트 설정
- `postcss.config.js` - Tailwind CSS v4 및 Autoprefixer와 함께하는 PostCSS

### API 통합

- OpenAPI Generator를 사용하여 TypeScript API 클라이언트 생성
- `src/apis/main/`에 API 클라이언트 생성
- 401 응답에 대한 전역 에러 처리가 포함된 커스텀 QueryClient
- 인증 오류 시 자동 세션 제거 및 로그인 페이지 리다이렉트

### 전역 에러 처리

- 커스텀 QueryClient 프로바이더가 API 에러를 전역적으로 처리
- 401 에러 시 자동 세션 정리 및 로그인 페이지 리다이렉트
- Sonner를 사용한 일반 에러 토스트 알림

### 상태 관리

- Zustand로 전역 상태 관리
- TanStack Query로 서버 상태 관리
- 에러 처리가 포함된 커스텀 쿼리 캐시

### UI 컴포넌트

- Tailwind CSS v4와 함께하는 shadcn/ui 컴포넌트
- 접근성을 위한 Radix UI primitives
- 아이콘을 위한 Lucide React
- 조건부 클래스명을 위한 커스텀 유틸리티 함수 `cn()` (clsx + tailwind-merge)

### 개발 워크플로

1. API 변경 시 `codegen:*` 명령어를 통한 코드 생성 트리거
2. lint-staged를 통해 스테이지된 파일에 ESLint 및 Prettier 실행하는 pre-commit 훅
3. 포괄적인 규칙을 통한 엄격한 TypeScript 설정으로 타입 안전성 보장
4. Vitest 통합과 함께하는 컴포넌트 개발 및 테스팅용 Storybook
5. 기능 기반 구성으로 코드 재사용성 및 유지보수성 향상
6. dev, prod, local 설정을 지원하는 환경별 빌드

## 파일 요약 표준

모든 파일은 Claude Code가 파일의 목적을 빠르게 이해할 수 있도록 요약 주석으로 시작해야 합니다:

### TypeScript/JavaScript 파일

```typescript
/**
 * 파일 요약: [파일 목적과 주요 기능에 대한 간단한 설명]
 * 주요 내보내기: [내보내는 주요 함수, 클래스, 또는 컴포넌트]
 * 의존성: [사용하는 중요한 외부 의존성]
 */
```

### React 컴포넌트

```typescript
/**
 * 컴포넌트 요약: [컴포넌트 목적과 주요 기능]
 * Props: [주요 props와 타입]
 * 사용법: [일반적인 사용 사례 또는 예시]
 */
```

### 훅 파일

```typescript
/**
 * 훅 요약: [훅의 목적과 기능]
 * 반환값: [훅이 반환하는 것]
 * 사용법: [언제 그리고 어떻게 이 훅을 사용하는지]
 */
```

### 유틸리티 파일

```typescript
/**
 * 유틸리티 요약: [제공되는 유틸리티들]
 * 주요 함수: [핵심 유틸리티 함수들]
 * 목적: [이 유틸리티들이 존재하는 이유]
 */
```

### 스타일 파일

```css
/*
 * 스타일 요약: [스타일링 목적과 범위]
 * 컴포넌트: [이 스타일들이 대상으로 하는 컴포넌트]
 * 기능: [주요 스타일링 기능이나 패턴]
 */
```

**Claude Code가 파일을 읽을 때, 전체 코드를 분석하기 전에 빠른 컨텍스트 이해를 위해 이러한 요약을 우선적으로 참고합니다.**

## 코딩 표준

### React 컴포넌트

- **컴포넌트에는 `const`보다 `export function`을 선호**
  - `export function`은 더 나은 호이스팅과 디버깅 경험 제공
  - React DevTools에서 함수명이 명확히 표시됨
  - Next.js 및 React 생태계 표준과 일치

```typescript
// 권장
export function MyComponent({ prop }: Props) {
  return <div>{prop}</div>
}

// 컴포넌트에는 지양
const MyComponent = ({ prop }: Props) => {
  return <div>{prop}</div>
}
export default MyComponent
```

## 중요 지침

### 파일 생성 및 수정

- 새로운 파일을 생성하는 것보다 기존 파일을 편집하는 것을 항상 우선시
- 작업에 절대적으로 필요한 경우가 아니면 파일 생성 금지
- 명시적으로 요청되지 않는 한 문서 파일(\*.md)이나 README 파일을 미리 생성하지 않기
- 새로운 기능을 추가할 때는 `src/features/`의 기능 기반 구성 패턴을 따르기

### 코드 품질 요구사항

- 중요한 변경 후 TypeScript 준수를 보장하기 위해 `pnpm type-check` 실행
- 코드 품질 표준을 유지하기 위해 `pnpm lint` 및 `pnpm fix:lint` 사용
- 엄격한 TypeScript 설정을 따르기 - 모든 컴파일러 옵션이 의도적으로 엄격함

### 환경 및 빌드 프로세스

- API와 작업할 때 환경별 명령어 사용 (`dev`, `prod`, `local`)
- API 스키마가 변경되면 codegen 명령어 실행
- API가 변경되지 않았을 때 더 빠른 개발을 위해 `*-without-codegen` 변형 사용
