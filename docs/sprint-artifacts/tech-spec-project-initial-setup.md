# Tech-Spec: 프로젝트 초기 세팅 - src 폴더 구조 재구성

**Created:** 2026-01-06
**Status:** Ready for Development

---

## Overview

### Problem Statement

현재 src/ 폴더에 이전 구현 코드들이 남아있어 프로젝트를 깨끗한 초기 상태로 재시작하기 어려움. Architecture 문서에 정의된 구조는 있지만 실제 코드베이스가 혼재되어 있는 상태.

### Solution

src/ 폴더를 완전히 초기화하여 디렉토리 구조만 잡힌 깨끗한 상태로 재구성. 각 폴더에는 빈 index.ts 파일만 생성하여 패키지 분리는 완료되었지만 실제 구현은 없는 상태로 만듦.

### Scope

**In Scope:**

- ✅ src/features/ 완전히 비우기 (빈 index.ts만)
- ✅ src/components/base, layout, ui 비우기 (빈 index.ts만)
- ✅ src/hooks, lib, queries, stores, types, utils, constants, stories 비우기 (빈 index.ts만)
- ✅ src/app/ 기본 파일만 유지 (page.tsx, layout.tsx, loading.tsx, not-found.tsx)
- ✅ src/middleware.ts 삭제

**Out of Scope:**

- ❌ src/components/provider/ 폴더 (그대로 유지)
- ❌ src/apis/main/ (OpenAPI 생성 폴더, 나중에 codegen으로 생성)
- ❌ 실제 비즈니스 로직 구현
- ❌ 환경 설정 파일 수정 (tsconfig.json, package.json 등)

---

## Context for Development

### Codebase Patterns

**파일 요약 표준 (CLAUDE.md):**
모든 TypeScript 파일은 다음 형식의 주석으로 시작해야 함:

```typescript
/**
 * 파일 요약: [파일 목적과 주요 기능]
 * 주요 내보내기: [내보내는 함수/컴포넌트]
 * 의존성: [사용하는 외부 라이브러리]
 */
```

**컴포넌트 작성 표준:**

- `export function` 사용 (const 금지)
- React 19 함수형 컴포넌트
- TypeScript 엄격 모드 준수

**디렉토리 구조 (Architecture.md 기반):**

```
src/
├── apis/main/            # OpenAPI 자동 생성 (제외)
├── app/                  # Next.js App Router (기본 파일만 유지)
│   ├── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   └── not-found.tsx
├── components/
│   ├── base/             # 기본 컴포넌트 (비우기)
│   ├── layout/           # 레이아웃 컴포넌트 (비우기)
│   ├── ui/               # shadcn/ui 컴포넌트 (비우기)
│   └── provider/         # 프로바이더 (유지)
├── features/             # Feature 모듈 (완전히 비우기)
├── hooks/                # 커스텀 훅 (비우기)
├── lib/                  # 유틸리티 및 설정 (비우기)
├── queries/              # TanStack Query 훅 (비우기)
├── stores/               # Zustand 스토어 (비우기)
├── types/                # 타입 정의 (비우기)
├── utils/                # 유틸리티 함수 (비우기)
├── constants/            # 상수 (비우기)
├── assets/               # 정적 자산 (비우기, 폴더만)
└── stories/              # Storybook 스토리 (비우기)
```

### Files to Reference

**읽어야 할 문서:**

- `docs/architecture.md` - 전체 아키텍처 구조
- `CLAUDE.md` - 코딩 표준 및 파일 요약 규칙
- `tsconfig.json` - TypeScript 설정 (경로 매핑: @/\*)

**건드리지 말아야 할 파일:**

- `src/components/provider/*` - 기존 프로바이더 유지
- `src/apis/main/*` - OpenAPI 생성 폴더 (있다면)

### Technical Decisions

**결정 1: 완전한 초기화 vs 선택적 유지**

- **선택:** 완전한 초기화 (provider 제외)
- **이유:** 깨끗한 상태에서 체계적으로 재구현하기 위함

**결정 2: 빈 index.ts vs 폴더만**

- **선택:** 빈 index.ts 생성
- **이유:**
  - import 경로 테스트 가능
  - 패키지 분리 명확히 표시
  - 나중에 export 추가 용이

**결정 3: app/ 폴더 처리**

- **선택:** 기본 파일만 유지
- **이유:** Next.js 실행을 위한 최소 구조 필요

---

## Implementation Plan

### Tasks

- [ ] **Task 1:** src/features/ 하위 모든 폴더 및 파일 삭제
- [ ] **Task 2:** src/features/index.ts 빈 파일로 생성
- [ ] **Task 3:** src/components/base/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 4:** src/components/layout/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 5:** src/components/ui/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 6:** src/hooks/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 7:** src/lib/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 8:** src/queries/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 9:** src/stores/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 10:** src/types/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 11:** src/utils/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 12:** src/constants/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 13:** src/stories/ 하위 모든 파일 삭제 후 빈 index.ts 생성
- [ ] **Task 14:** src/middleware.ts 삭제
- [ ] **Task 15:** src/app/ 폴더에서 기본 파일 외 삭제 (page.tsx, layout.tsx, loading.tsx, not-found.tsx만 유지)
- [ ] **Task 16:** src/assets/ 폴더 생성 (비어있음)
- [ ] **Task 17:** TypeScript 컴파일 확인 (pnpm type-check)

### Acceptance Criteria

- [ ] **AC 1:** Given src/features/ 폴더를 확인할 때, When ls 명령어를 실행하면, Then index.ts 파일 하나만 존재해야 함
- [ ] **AC 2:** Given src/components/ 폴더를 확인할 때, When ls 명령어를 실행하면, Then base/, layout/, ui/, provider/ 폴더만 존재하고, base/layout/ui는 index.ts만 있어야 함
- [ ] **AC 3:** Given src/components/provider/ 폴더를 확인할 때, When ls 명령어를 실행하면, Then 기존 파일들이 그대로 유지되어야 함
- [ ] **AC 4:** Given src/app/ 폴더를 확인할 때, When ls 명령어를 실행하면, Then page.tsx, layout.tsx, loading.tsx, not-found.tsx만 존재해야 함
- [ ] **AC 5:** Given src/ 루트를 확인할 때, When ls 명령어를 실행하면, Then middleware.ts가 존재하지 않아야 함
- [ ] **AC 6:** Given 전체 프로젝트에서, When pnpm type-check를 실행하면, Then 타입 에러 없이 통과해야 함
- [ ] **AC 7:** Given src/hooks, lib, queries, stores, types, utils, constants, stories 폴더를 확인할 때, When 각 폴더의 내용을 확인하면, Then 각각 빈 index.ts 파일만 존재해야 함

---

## Additional Context

### Dependencies

**사용할 도구:**

- Bash 명령어 (rm, mkdir 등)
- Write 도구 (빈 index.ts 생성)
- TypeScript 컴파일러 (type-check)

**영향받는 패키지:**

- 없음 (package.json 변경 없음)

### Testing Strategy

**테스트 방법:**

1. 각 폴더 ls 명령어로 확인
2. pnpm type-check 실행
3. 가능하면 pnpm dev-without-codegen 실행하여 Next.js 시작 확인 (에러 있을 수 있음, 괜찮음)

**예상 에러:**

- import 구문에서 찾을 수 없는 모듈 에러 (정상, 아직 구현 안함)
- app/page.tsx에서 참조하는 컴포넌트 누락 (정상)

### Notes

**주의사항:**

- ⚠️ src/components/provider/ 절대 건드리지 말 것
- ⚠️ git 상태 확인 후 작업 (혹시 몰라 백업 권장)
- ⚠️ src/apis/main/ 폴더는 건드리지 말 것 (OpenAPI 자동 생성)

**다음 단계:**

- 이 Tech-Spec 완료 후 실제 기능 구현은 별도 스펙으로 진행
- PRD, Architecture, UX 문서 기반으로 feature별 구현 계획 수립

---

**Tech-Spec 작성자:** Barry (Quick Flow Solo Dev)
**예상 작업 시간:** ⚠️ 시간 예측 금지 - AI 시대에는 의미 없음
