# Musinsa Wagon Frontend Architecture Overview

## 프로젝트 구조

이 문서는 **Musinsa Wagon** 프론트엔드 프로젝트의 아키텍처 개요를 제공합니다.

### 관련 문서

- **[UI Architecture](ui-architecture.md)** - 프론트엔드 상세 아키텍처 (컴포넌트, 상태관리, 라우팅 등)
- **[Project Brief](brief.md)** - 프로젝트 전체 개요 및 비즈니스 요구사항
- **[Backend Architecture](../../musinsa-wagon-spring-server-v2/docs/architecture.md)** - 백엔드 및 크롤러 아키텍처 (별도 저장소)

---

## 시스템 아키텍처 개요

Musinsa Wagon은 3-tier 마이크로서비스 아키텍처를 채택합니다:

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (This Project)                 │
│                                                              │
│  Next.js 15.3.3 + TypeScript + TailwindCSS                 │
│  - App Router                                               │
│  - Server Components + Client Components                   │
│  - TanStack Query (data fetching)                          │
│  - Zustand (global state)                                  │
│                                                              │
│  Port: 3000                                                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
                         HTTP/REST API
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                 Backend API (Spring Boot)                   │
│                                                              │
│  - User authentication & authorization                      │
│  - Business logic                                           │
│  - Product management                                       │
│  - Watchlist & notifications                               │
│                                                              │
│  Port: 8080 (dev), 8081 (prod)                             │
└─────────────────────────────────────────────────────────────┘
                              ↓
                      Internal API Call
                              ↓
┌─────────────────────────────────────────────────────────────┐
│               Crawler Service (Python Flask)                │
│                                                              │
│  - Web scraping (Musinsa, Ably, Zigzag)                   │
│  - Daily batch crawling                                    │
│  - On-demand crawling                                      │
│                                                              │
│  Port: 5000                                                 │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                        MySQL Database                       │
│                                                              │
│  - products, price_history                                 │
│  - users, watchlist, notifications                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 프론트엔드 기술 스택

### 핵심 프레임워크

- **Next.js 15.3.3** with App Router
- **TypeScript** (strict mode)
- **React 19** (Server Components + Client Components)

### 스타일링 & UI

- **Tailwind CSS v4.1.10**
- **shadcn/ui** (Radix UI 기반 컴포넌트)
- **Lucide React** (아이콘)

### 데이터 페칭 & 상태관리

- **TanStack Query (React Query)** - 서버 상태 관리
- **Zustand** - 전역 클라이언트 상태
- **Axios** - HTTP 클라이언트

### 개발 도구

- **Vitest** - 유닛 테스트
- **Storybook** - 컴포넌트 개발 환경
- **Playwright** - E2E 테스트
- **ESLint + Prettier** - 코드 품질
- **pnpm** - 패키지 매니저

---

## API 통합

### API 클라이언트 생성

프로젝트는 OpenAPI Generator를 사용하여 백엔드 API 스펙에서 TypeScript 클라이언트를 자동 생성합니다.

```bash
# 환경별 API 클라이언트 생성
pnpm codegen:dev    # 개발 환경 API
pnpm codegen:prod   # 프로덕션 환경 API
pnpm codegen:local  # 로컬 환경 API
```

**생성 위치:** `src/apis/main/`

### 주요 API 엔드포인트

| 엔드포인트                         | 메서드 | 설명           |
| ---------------------------------- | ------ | -------------- |
| `/api/auth/login`                  | POST   | 사용자 로그인  |
| `/api/auth/signup`                 | POST   | 회원가입       |
| `/api/products`                    | GET    | 상품 목록 조회 |
| `/api/products/{id}`               | GET    | 상품 상세 정보 |
| `/api/products/{id}/price-history` | GET    | 가격 히스토리  |
| `/api/watchlist`                   | GET    | 사용자 찜 목록 |
| `/api/watchlist`                   | POST   | 찜 추가        |
| `/api/notifications`               | GET    | 알림 목록      |

### 환경별 API URL

- **Development:** `http://localhost:8080`
- **Production:** `https://api.musinsa-wagon.com` (TBD)
- **Local:** `http://localhost:8081`

---

## 디렉토리 구조

```
src/
├── apis/main/          # OpenAPI 자동 생성 API 클라이언트
├── app/                # Next.js App Router 페이지
│   ├── (auth)/        # 인증 관련 페이지 (로그인, 회원가입)
│   ├── products/      # 상품 관련 페이지
│   └── watchlist/     # 찜 목록 페이지
├── components/         # 재사용 가능한 컴포넌트
│   ├── base/          # 기본 컴포넌트 (Button, Badge, Text)
│   ├── layout/        # 레이아웃 컴포넌트 (Header, Footer)
│   ├── ui/            # shadcn/ui 컴포넌트
│   └── provider/      # Context Providers
├── features/          # 기능별 컴포넌트 & 로직
│   ├── auth/          # 인증 기능
│   ├── products/      # 상품 표시 및 상호작용
│   ├── banner/        # 배너/캐러셀
│   └── notifications/ # 알림 시스템
├── hooks/             # 커스텀 React 훅
├── queries/           # TanStack Query 훅
├── stores/            # Zustand 스토어
├── types/             # TypeScript 타입 정의
└── utils/             # 유틸리티 함수
```

---

## 주요 기능 플로우

### 1. 사용자 로그인

```
User → Login Page → POST /api/auth/login → JWT Token
     → Store in localStorage → Redirect to Home
```

### 2. 상품 검색 및 상세보기

```
User → Search Products → GET /api/products?query={keyword}
     → Select Product → GET /api/products/{id}
     → Display Price History (Chart.js)
```

### 3. 찜 추가 및 알림 설정

```
User → Click "찜" Button → POST /api/watchlist
     → Set Alert Price → Backend monitors price changes
     → User receives notification when price drops
```

### 4. 가격 히스토리 시각화

```
User → View Product Detail
     → GET /api/products/{id}/price-history
     → Chart.js renders 30-day/90-day price trends
     → Display "Deal Score" (역대 최저가/좋은 딜/보통/비싼 편)
```

---

## 인증 & 세션 관리

### JWT 기반 인증

1. 로그인 성공 시 백엔드에서 JWT 토큰 발급
2. 프론트엔드는 `localStorage`에 토큰 저장
3. 모든 API 요청 시 `Authorization: Bearer {token}` 헤더 포함
4. 401 응답 시 자동 로그아웃 및 로그인 페이지 리다이렉트

### 전역 에러 처리

- **커스텀 QueryClient 프로바이더**에서 API 에러를 전역적으로 처리
- 401 에러 → 세션 정리 + 로그인 페이지 이동
- 일반 에러 → Sonner 토스트 알림

---

## 개발 가이드

### 환경별 개발 서버 실행

```bash
# 개발 환경 (코드 생성 포함)
pnpm dev

# 코드 생성 없이 빠른 시작
pnpm dev-without-codegen

# 프로덕션 환경
pnpm prod

# 로컬 환경
pnpm local
```

### 코드 품질 검사

```bash
# 타입 검사
pnpm type-check

# 린팅
pnpm lint
pnpm fix:lint

# 포맷팅
pnpm prettier
pnpm fix:prettier
```

### 테스팅 & Storybook

```bash
# Storybook 실행
pnpm storybook

# Storybook 빌드
pnpm build-storybook
```

---

## 배포 전략

### 환경별 빌드

```bash
# 개발 환경 빌드
pnpm build:dev

# 프로덕션 환경 빌드
pnpm build:prod

# 로컬 환경 빌드
pnpm build:local
```

### 환경 변수

각 환경별로 `.env.development`, `.env.production`, `.env.local` 파일에서 API URL 및 설정 관리

---

## 팀 협업 가이드

### Git Workflow

- **Main Branch:** `main` - 프로덕션 배포용
- **Development Branch:** `develop` - 개발 통합 브랜치
- **Feature Branches:** `feature/{feature-name}` - 기능 개발용

### Commit Convention

```
feat: 새로운 기능 추가
fix: 버그 수정
refactor: 코드 리팩토링
style: 코드 포맷팅, 세미콜론 누락 등
docs: 문서 수정
test: 테스트 코드 추가/수정
chore: 빌드 설정, 패키지 업데이트 등
```

### Pre-commit Hooks

Husky + lint-staged를 통해 커밋 전 자동 검사:

- ESLint 검사
- Prettier 포맷팅
- TypeScript 타입 검사

---

## 추가 리소스

- **CLAUDE.md** - Claude Code AI 개발 가이드
- **ui-architecture.md** - 프론트엔드 상세 아키텍처 문서
- **brief.md** - 프로젝트 전체 브리프 및 비즈니스 요구사항

---

**문서 작성:** Winston (Architect Agent)
**최종 업데이트:** 2025-11-01
**버전:** 1.0
