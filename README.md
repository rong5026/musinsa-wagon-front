# Musinsa Wagon V2

무신사, 에이블리, 지그재그 등 한국 주요 패션몰의 가격 투명성을 제공하는 웹 플랫폼입니다. 명절 시즌 "가짜 할인"을 탐지하고, 가격 히스토리를 추적하여 합리적인 소비를 돕습니다.

## ✨ 주요 기능

- **브랜드 중심 가격 추적**: 쇼핑몰별/브랜드별 상품 가격 히스토리 추적
- **명절 속임수 탐지**: 가격 조작 패턴(원가 급등 후 할인) 자동 감지 및 경고
- **실시간 가격 평가**: 30일/90일 최저가 대비 현재가 분석 (역대 최저가, 좋은 딜 등)
- **찜 & 알림**: 목표가 도달 및 최저가 갱신 시 푸시 알림

## 🛠 기술 스택

- **Framework**: Next.js 15.3.3 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4, shadcn/ui
- **State Management**:
  - Global: Zustand
  - Server: TanStack Query v5
- **API Client**: Axios (OpenAPI Generator로 자동 생성)
- **Test**: Vitest, Storybook

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.17+
- pnpm 10.8.0+

### 설치

```bash
# 의존성 설치
pnpm install
```

### 개발 서버 실행

API 변경 여부에 따라 두 가지 모드로 실행할 수 있습니다.

```bash
# 1. API 클라이언트 코드를 생성하고 개발 서버 실행 (권장)
# .env.development 환경 변수를 사용합니다.
pnpm dev

# 2. 코드 생성 없이 개발 서버 실행 (빠른 시작)
pnpm dev-without-codegen
```

- 개발 서버: http://localhost:3000
- Storybook: http://localhost:6006

## 📜 스크립트 명령어

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 개발 API 연동 및 개발 서버 실행 |
| `pnpm prod` | 프로덕션 API 연동 및 개발 서버 실행 |
| `pnpm build:dev` | 개발 환경 설정으로 빌드 |
| `pnpm build:prod` | 프로덕션 환경 설정으로 빌드 |
| `pnpm codegen:dev` | OpenAPI 스펙 기반 개발용 API 클라이언트 생성 |
| `pnpm lint` | ESLint 코드 검사 |
| `pnpm fix:lint` | ESLint 자동 수정 |
| `pnpm prettier` | Prettier 포맷팅 검사 |
| `pnpm fix:prettier` | Prettier 자동 수정 |
| `pnpm type-check` | TypeScript 타입 검사 |
| `pnpm storybook` | Storybook 실행 |

## 📁 프로젝트 구조

```bash
src/
├── app/                 # Next.js App Router (페이지 및 레이아웃)
├── components/          # 공통 컴포넌트
│   ├── base/           # 기본 UI 요소
│   ├── layout/         # 헤더, 푸터 등 레이아웃
│   ├── provider/       # Context Providers
│   └── ui/             # shadcn/ui 컴포넌트
├── features/            # 비즈니스 기능별 모듈
├── hooks/               # 커스텀 훅
├── lib/                 # 유틸리티 함수 (cn 등)
├── queries/             # React Query 훅
├── stores/              # Zustand 스토어
├── types/               # 전역 타입 정의
└── styles/              # 전역 스타일
```

## 🎨 스타일링 가이드

- **Tailwind CSS v4**: CSS 변수 기반의 테마 시스템을 사용합니다.
- **shadcn/ui**: `src/components/ui` 폴더에 위치하며, 필요시 커스터마이징하여 사용합니다.
- **조건부 스타일링**: `cn()` 유틸리티 함수를 사용하여 클래스를 병합합니다.

```tsx
import { cn } from '@/lib/utils'

export function MyComponent({ className }: { className?: string }) {
  return <div className={cn("bg-primary text-primary-foreground", className)}>...</div>
}
```

## 🤝 기여하기

1. Issue 생성 또는 할당
2. Feature 브랜치 생성 (`feat/기능명`)
3. 작업 완료 후 PR 생성
4. 코드 리뷰 및 Merge
