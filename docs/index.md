# Musinsa Wagon 문서 인덱스

**문서 생성 일시**: 2025-12-06
**스캔 레벨**: Quick Scan (패턴 기반 분석)
**프로젝트 타입**: Web (Next.js + React + TypeScript)

---

## 🚀 빠른 시작

### 개발 환경 설정

```bash
# 1. 의존성 설치
pnpm install

# 2. 개발 서버 시작
pnpm dev

# 3. 브라우저에서 열기
# http://localhost:3000
```

### 주요 개발 명령어

```bash
pnpm dev              # 개발 서버 (코드 생성 포함)
pnpm build:prod       # 프로덕션 빌드
pnpm lint             # ESLint 검사
pnpm fix:lint         # 린트 자동 수정
pnpm type-check       # TypeScript 타입 검사
pnpm storybook        # 컴포넌트 Storybook
pnpm test             # 유닛 테스트
```

---

## 📚 문서 구조

### 프로젝트 이해

| 문서                                        | 목적                                  | 대상             |
| ------------------------------------------- | ------------------------------------- | ---------------- |
| [프로젝트 개요](./project-overview.md)      | 프로젝트 정보, 기술 스택 요약         | 모든 사람        |
| [아키텍처 문서](./architecture.md)          | 시스템 설계, 계층 구조, 데이터 흐름   | 아키텍트, 개발자 |
| [소스 트리 분석](./source-tree-analysis.md) | 디렉토리 구조, 파일 조직, 네이밍 규칙 | 개발자           |

### 개발 및 실행

| 문서                                  | 목적                             | 대상   |
| ------------------------------------- | -------------------------------- | ------ |
| [개발 가이드](./development-guide.md) | 환경 설정, 로컬 개발, 빌드, 배포 | 개발자 |

---

## 🎯 프로젝트 개요

### 기본 정보

- **프로젝트명**: Musinsa Wagon (무신사 프라이스 왜건)
- **버전**: 0.1.0
- **저장소 타입**: Monolith (단일 프로젝트)
- **프로젝트 타입**: Web Application (Next.js)

### 기술 스택

| 계층                | 기술           | 버전   |
| ------------------- | -------------- | ------ |
| **프레임워크**      | Next.js        | 15.3.3 |
| **UI 라이브러리**   | React          | 19.0.0 |
| **언어**            | TypeScript     | 5.x    |
| **스타일링**        | Tailwind CSS   | 4.1.10 |
| **UI 컴포넌트**     | shadcn/ui      | Latest |
| **상태 관리**       | Zustand        | 5.0.5  |
| **서버 상태**       | TanStack Query | 5.80.7 |
| **HTTP 클라이언트** | Axios          | 1.10.0 |

### 핵심 특징

✅ **Component-based Architecture**: 재사용 가능한 컴포넌트 구조
✅ **Feature-based Organization**: 기능 단위 코드 조직화
✅ **Type-safe**: 엄격한 TypeScript 설정
✅ **API-first**: OpenAPI Generator로 자동 생성된 클라이언트
✅ **Modern Stack**: React 19, Next.js 15, Tailwind CSS 4

---

## 📁 프로젝트 구조

### 핵심 디렉토리

```
src/
├── apis/           # OpenAPI 자동 생성 API 클라이언트
├── app/            # Next.js App Router (페이지)
├── components/     # 재사용 가능한 컴포넌트
│   ├── base/      # 기본 컴포넌트 (Button, Badge)
│   ├── layout/    # 레이아웃 (Header, Footer)
│   ├── ui/        # shadcn/ui 컴포넌트
│   └── provider/  # 상태 관리 프로바이더
├── features/       # 기능 모듈
│   ├── auth/      # 인증 (로그인, 세션)
│   ├── products/  # 상품 (목록, 상세)
│   ├── category/  # 카테고리 네비게이션
│   ├── banner/    # 배너/캐러셀
│   └── notifications/  # 알림 시스템
├── hooks/          # 전역 커스텀 훅
├── lib/            # 라이브러리 설정
├── queries/        # TanStack Query 훅
├── stores/         # Zustand 전역 상태
├── types/          # 타입 정의
├── utils/          # 유틸리티 함수
├── constants/      # 상수
├── assets/         # 정적 자산
└── stories/        # Storybook 스토리
```

자세한 내용은 [소스 트리 분석](./source-tree-analysis.md)을 참조하세요.

---

## 🏗️ 아키텍처

### 계층 구조

```
┌─────────────────────────────────┐
│     Presentation Layer           │
│  (Pages, Components, UI)        │
└─────────────────────────────────┘
          ↓
┌─────────────────────────────────┐
│  Feature/Business Logic Layer   │
│  (Features, Hooks)              │
└─────────────────────────────────┘
          ↓
┌─────────────────────────────────┐
│  Data & State Management Layer  │
│  (Queries, Stores, API)         │
└─────────────────────────────────┘
          ↓
┌─────────────────────────────────┐
│      External Services/APIs     │
└─────────────────────────────────┘
```

### 상태 관리 전략

| 상태 타입     | 라이브러리     | 사용 케이스       |
| ------------- | -------------- | ----------------- |
| **전역 상태** | Zustand        | 인증, 사용자 설정 |
| **서버 상태** | TanStack Query | API 데이터, 캐싱  |
| **로컬 상태** | React useState | 폼, UI 토글       |

자세한 내용은 [아키텍처 문서](./architecture.md)를 참조하세요.

---

## 🔧 개발 워크플로우

### 1. 로컬 개발 시작

```bash
pnpm install        # 의존성 설치
pnpm dev            # 개발 서버 시작
```

### 2. 코드 작성

```bash
# 다음 명령어를 자동으로 실행됩니다 (pre-commit 훅):
# - ESLint 검사
# - Prettier 포맷팅
```

### 3. 테스트

```bash
pnpm test           # 유닛 테스트
pnpm storybook      # 컴포넌트 테스트
pnpm type-check     # 타입 검사
```

### 4. 커밋 및 푸시

```bash
git add .
git commit -m "feat: 새로운 기능"
git push
```

### 5. 배포

```bash
pnpm build:prod     # 프로덕션 빌드
# Vercel 자동 배포 또는 Docker 배포
```

자세한 내용은 [개발 가이드](./development-guide.md)를 참조하세요.

---

## 📖 주요 기능 영역

### 인증 (Auth)

**경로**: `src/features/auth/`

- 사용자 로그인/로그아웃
- 세션 관리
- JWT 토큰 처리
- 자동 로그인 만료

**관련 스토어**: `useAuthStore`

### 상품 (Products)

**경로**: `src/features/products/`

- 상품 목록 조회
- 상품 상세정보
- 상품 검색/필터링
- 가격 정보

**관련 쿼리**: `useProductsQuery`, `useProductDetailQuery`

### 카테고리 (Category)

**경로**: `src/features/category/`

- 카테고리 네비게이션
- 카테고리별 상품 필터링

### 배너 (Banner)

**경로**: `src/features/banner/`

- 프로모션 배너
- 캐러셀/슬라이더 (Embla Carousel, Swiper)

### 알림 (Notifications)

**경로**: `src/features/notifications/`

- 토스트 알림 (Sonner)
- 에러 메시지
- 성공 메시지

---

## 🛠️ 개발 도구 및 설정

### 코드 품질 도구

| 도구           | 목적            | 명령어              |
| -------------- | --------------- | ------------------- |
| **ESLint**     | 코드 품질       | `pnpm lint`         |
| **Prettier**   | 코드 포맷팅     | `pnpm fix:prettier` |
| **TypeScript** | 타입 검사       | `pnpm type-check`   |
| **Vitest**     | 유닛 테스트     | `pnpm test`         |
| **Storybook**  | 컴포넌트 문서화 | `pnpm storybook`    |

### 설정 파일

- `tsconfig.json`: TypeScript 엄격 설정
- `tailwind.config.js`: Tailwind CSS 커스터마이제이션
- `components.json`: shadcn/ui 설정
- `next.config.js`: Next.js 설정

---

## 🚀 배포

### Vercel (권장)

```bash
vercel --prod --env-file .env.production
```

### Docker

```bash
docker build -t musinsa-wagon .
docker run -p 3000:3000 musinsa-wagon
```

자세한 내용은 [개발 가이드 - 배포 섹션](./development-guide.md#배포)을 참조하세요.

---

## 📝 코드 컨벤션

### 파일 구조

모든 파일은 목적을 명확히 하는 요약 주석으로 시작합니다:

```typescript
/**
 * 파일 요약: [파일의 목적과 주요 기능]
 * 주요 내보내기: [내보내는 함수/컴포넌트]
 * 의존성: [사용하는 외부 라이브러리]
 */
```

### 컴포넌트 네이밍

```typescript
// ✅ 권장: export function 사용
export function ProductCard() {
  return <div>...</div>;
}

// ❌ 지양: const + arrow function
const ProductCard = () => {
  return <div>...</div>;
};
```

### 네이밍 규칙

| 항목     | 규칙              | 예시              |
| -------- | ----------------- | ----------------- |
| 컴포넌트 | PascalCase        | ProductCard.tsx   |
| 훅       | camelCase + use   | useProducts.ts    |
| 스토어   | camelCase + Store | useAuthStore.ts   |
| 유틸리티 | camelCase         | formatCurrency.ts |
| 상수     | UPPER_SNAKE_CASE  | API_ENDPOINTS.ts  |
| 타입     | PascalCase        | Product.ts        |

자세한 내용은 [개발 가이드 - 코드 컨벤션](./development-guide.md#코드-컨벤션)을 참조하세요.

---

## ❓ FAQ

### Q: API 스펙이 변경되었을 때 어떻게 하나요?

**A**: OpenAPI 클라이언트를 재생성합니다:

```bash
pnpm codegen:dev    # 또는 codegen:prod, codegen:local
```

### Q: 새로운 페이지를 추가하려면?

**A**: `src/app/` 폴더에 라우트를 생성합니다:

```bash
mkdir -p src/app/my-page
# page.tsx 생성
```

### Q: 새로운 기능(Feature)을 추가하려면?

**A**: `src/features/` 폴더에 새로운 기능 모듈을 생성합니다:

```bash
mkdir -p src/features/my-feature/{components,hooks,types}
```

### Q: 환경 변수는 어디서 설정하나요?

**A**: `.env.development`, `.env.production`, `.env.local` 파일에서 설정합니다.

### Q: 프로덕션 빌드는 어떻게 하나요?

**A**:

```bash
pnpm build:prod     # 프로덕션 환경으로 빌드
pnpm start          # 프로덕션 서버 시작
```

---

## 🔗 주요 링크

### 공식 문서

- [Next.js 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev)
- [TypeScript 문서](https://www.typescriptlang.org)
- [Tailwind CSS 문서](https://tailwindcss.com)
- [shadcn/ui 문서](https://ui.shadcn.com)
- [TanStack Query 문서](https://tanstack.com/query/latest)
- [Zustand 문서](https://github.com/pmndrs/zustand)

### 프로젝트 리소스

- GitHub Repository: `[링크]`
- API 문서: `https://devapi.ilsang.co.kr/api-docs`
- Vercel 배포: `[링크]`

---

## 💡 팁과 트릭

### 개발 속도 향상

API 스펙이 변경되지 않았을 때 빠른 시작:

```bash
pnpm dev-without-codegen
```

### 특정 파일만 린트

```bash
pnpm lint -- --fix src/components/MyComponent.tsx
```

### 타입 검사 실행

```bash
pnpm type-check
```

### Storybook에서 컴포넌트 테스트

```bash
pnpm storybook
# http://localhost:6006
```

---

## 📞 지원

### 문제 발생 시

1. [개발 가이드 - 문제 해결](./development-guide.md#문제-해결) 참조
2. GitHub Issues 생성
3. 팀 Slack 채널에서 질문

### 문서 피드백

이 문서에 오류나 개선사항이 있으면 [GitHub Issues](https://github.com)를 통해 보고해주세요.

---

## 📋 체크리스트

### 개발 시작 전

- [ ] Node.js 18.17+ 설치 확인
- [ ] pnpm 10.8.0+ 설치 확인
- [ ] 저장소 클론
- [ ] `pnpm install` 실행
- [ ] 환경 변수 설정

### 개발 중

- [ ] `pnpm dev` 로 개발 서버 실행
- [ ] 컴포넌트는 Storybook에서 테스트
- [ ] `pnpm type-check` 로 타입 검사
- [ ] `pnpm lint` 로 코드 품질 확인
- [ ] `pnpm test` 로 유닛 테스트 실행

### 커밋 전

- [ ] 모든 테스트 통과
- [ ] 타입 검사 통과
- [ ] 린트 검사 통과
- [ ] Pre-commit 훅 통과

### 배포 전

- [ ] `pnpm build:prod` 성공
- [ ] 프로덕션 환경 변수 설정
- [ ] 최종 테스트 완료

---

**마지막 업데이트**: 2025-12-06
**문서 버전**: 1.0
**스캔 레벨**: Quick Scan (패턴 기반 분석)

---

## 🎓 학습 경로

### 초보자

1. 이 인덱스 읽기 ✓
2. [프로젝트 개요](./project-overview.md) 읽기
3. [개발 가이드](./development-guide.md) 읽기
4. `pnpm dev` 로 개발 서버 실행
5. 간단한 컴포넌트 수정 시작

### 중급자

1. [아키텍처 문서](./architecture.md) 읽기
2. [소스 트리 분석](./source-tree-analysis.md) 읽기
3. 새로운 Feature 추가
4. API 통합 구현

### 고급자

1. 성능 최적화
2. E2E 테스트 작성
3. CI/CD 파이프라인 설정
4. 아키텍처 개선
