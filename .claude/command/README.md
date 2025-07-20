\# Claude Commands for Musinsa Price Wagon

이 디렉토리는 Musinsa Price Wagon 프로젝트를 위한 Claude 명령어들을 포함합니다. 각 명령어는 프로젝트의 특정 기술 스택과 아키텍처에 최적화되어 있습니다.

## 기술 스택

- **Framework**: Next.js 15.3.3 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4.1.10 with shadcn/ui components
- **State Management**: Zustand for global state
- **Data Fetching**: TanStack Query (React Query) with custom error handling
- **HTTP Client**: Axios with OpenAPI Generator
- **UI Components**: shadcn/ui with Radix UI primitives
- **Testing**: Vitest with Storybook integration and Playwright
- **Package Manager**: pnpm

## 사용 가능한 명령어

### 1. `@ask.md` - 아키텍처 컨설팅
**사용법**: `@ask.md <TECHNICAL_QUESTION>`

시스템 아키텍처와 기술적 의사결정에 대한 고수준 컨설팅을 제공합니다.

**특징**:
- 4명의 전문 아키텍트가 협력하여 종합적인 조언 제공
- Next.js 15, TypeScript, Tailwind CSS v4 등 프로젝트 특화 가이드
- 확장성, 성능, 위험 분석 포함

### 2. `@code.md` - 코드 구현
**사용법**: `@code.md <FEATURE_DESCRIPTION>`

새로운 기능이나 컴포넌트의 구현을 담당합니다.

**특징**:
- 4명의 개발 전문가가 협력하여 구현
- 프로젝트의 코딩 표준과 패턴 준수
- Next.js 15 App Router, TypeScript, shadcn/ui 최적화

### 3. `@api.md` - API 통합
**사용법**: `@api.md <API_TASK>`

API 통합과 관련된 작업을 담당합니다.

**특징**:
- OpenAPI Generator 워크플로우 관리
- TanStack Query 훅 설계 및 캐싱 전략
- 전역 에러 핸들링 및 재시도 로직

### 4. `@storybook.md` - 컴포넌트 개발
**사용법**: `@storybook.md <COMPONENT_OR_FEATURE>`

Storybook을 활용한 컴포넌트 개발과 테스팅을 담당합니다.

**특징**:
- Storybook 9와 Vitest 통합
- 접근성 테스팅 및 문서화
- shadcn/ui 패턴 준수

### 5. `@debug.md` - 디버깅
**사용법**: `@debug.md <ERROR_DESCRIPTION>`

에러 분석과 해결책 제시를 담당합니다.

**특징**:
- 4명의 디버깅 전문가가 협력
- Next.js 15, TypeScript, TanStack Query 특화 디버깅
- 환경별 이슈 해결 가이드

### 6. `@test.md` - 테스팅
**사용법**: `@test.md <COMPONENT_OR_FEATURE>`

테스팅 전략과 구현을 담당합니다.

**특징**:
- Vitest, Storybook, Playwright 통합
- 단위 테스트, 통합 테스트, E2E 테스트 전략
- 접근성 및 성능 테스팅

### 7. `@deploy-check.md` - 배포 준비
**사용법**: `@deploy-check.md <DEPLOYMENT_TARGET>`

배포 전 준비 상태를 점검합니다.

**특징**:
- 환경별 빌드 검증
- 보안 및 성능 검사
- 롤백 전략 수립

### 8. `@refactor.md` - 리팩토링
**사용법**: `@refactor.md <REFACTOR_SCOPE>`

코드 리팩토링을 담당합니다.

**특징**:
- 점진적 변환 전략
- 기능 보존 및 품질 향상
- 프로젝트 특화 리팩토링 가이드

### 9. `@review.md` - 코드 리뷰
**사용법**: `@review.md <CODE_SCOPE>`

코드 리뷰를 수행합니다.

**특징**:
- 4차원 리뷰 (품질, 보안, 성능, 아키텍처)
- 프로젝트 특화 검토 기준
- 우선순위별 개선 제안

### 10. `@performance.md` - 성능 최적화
**사용법**: `@performance.md <PERFORMANCE_SCOPE>`

성능 최적화 분석 및 개선을 담당합니다.

**특징**:
- Core Web Vitals 최적화
- 번들 크기 분석 및 최적화
- 이미지 및 리소스 최적화
- Next.js 15 성능 최적화

### 11. `@seo.md` - SEO 최적화
**사용법**: `@seo.md <SEO_SCOPE>`

검색 엔진 최적화를 담당합니다.

**특징**:
- Next.js 15 메타데이터 최적화
- 구조화된 데이터 및 스키마
- 이커머스 SEO 모범 사례
- 페이지 속도 및 사용자 경험

### 12. `@accessibility.md` - 접근성 개선
**사용법**: `@accessibility.md <A11Y_SCOPE>`

웹 접근성 개선을 담당합니다.

**특징**:
- WCAG 2.1 AA 준수
- 키보드 내비게이션 및 스크린 리더
- shadcn/ui 접근성 패턴
- 접근성 테스팅 및 검증

## 사용 팁

1. **명령어 조합**: 여러 명령어를 조합하여 복잡한 작업을 수행할 수 있습니다.
2. **프로젝트 컨텍스트**: 모든 명령어는 Musinsa Price Wagon 프로젝트에 특화되어 있습니다.
3. **기술 스택 활용**: Next.js 15, TypeScript, Tailwind CSS v4 등의 최신 기능을 활용합니다.
4. **품질 보장**: 각 명령어는 코드 품질과 유지보수성을 고려합니다.

## 예시 사용법

```bash
# 새로운 기능 구현
@code.md "사용자 프로필 페이지 구현"

# API 통합
@api.md "상품 검색 API 연동"

# 컴포넌트 개발
@storybook.md "ProductCard 컴포넌트"

# 에러 디버깅
@debug.md "API 호출 시 401 에러 발생"

# 성능 최적화
@performance.md "상품 목록 페이지 로딩 성능 개선"

# SEO 최적화
@seo.md "상품 상세 페이지 메타데이터 개선"

# 접근성 개선
@accessibility.md "장바구니 컴포넌트 키보드 접근성"

# 배포 준비
@deploy-check.md "production"
``` 
