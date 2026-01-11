---
name: musinsa-orchestration
description: |
  Musinsa Wagon 오케스트레이션 시스템.
  복합 작업 요청 시 여러 에이전트를 병렬/순차/백그라운드로 실행하여 효율적으로 처리한다.
  "전체 구현해줘", "기능 만들고 테스트까지", "리뷰하고 수정해줘" 등의 복합 요청에 사용.
---

# Musinsa Orchestration System

복합 작업을 분석하고 여러 에이전트를 효율적으로 조합하여 실행하는 시스템입니다.

## 시스템 구성

### 에이전트 계층

```
┌─────────────────────────────────────────────────────────┐
│                    Orchestrator                          │
│            (작업 분석, 할당, 실행 관리)                    │
└─────────────────────────┬───────────────────────────────┘
                          │
      ┌───────────────────┼───────────────────┐
      │                   │                   │
      ▼                   ▼                   ▼
┌──────────┐       ┌──────────┐       ┌──────────┐
│ 구현 그룹 │       │ 검증 그룹 │       │ 분석 그룹 │
├──────────┤       ├──────────┤       ├──────────┤
│ feature- │       │ test-    │       │ code-    │
│ builder  │       │ runner   │       │ reviewer │
│          │       │          │       │          │
│ frontend │       │ build-   │       │ Explore  │
│ -dev     │       │ validator│       │          │
└──────────┘       └──────────┘       └──────────┘
```

### 에이전트 목록

| 에이전트        | 역할            | 호출 경로                        |
| --------------- | --------------- | -------------------------------- |
| orchestrator    | 마스터 조율자   | `musinsa:agents:orchestrator`    |
| feature-builder | 기능 구현       | `musinsa:agents:feature-builder` |
| frontend-dev    | 프론트엔드 개발 | `musinsa:agents:frontend-dev`    |
| code-reviewer   | 코드 리뷰       | `musinsa:agents:code-reviewer`   |
| test-runner     | 테스트 실행     | `musinsa:agents:test-runner`     |
| build-validator | 빌드 검증       | `musinsa:agents:build-validator` |

## 실행 패턴

### 1. 병렬 실행 (Parallel)

독립적인 작업은 동시에 실행:

```
[동시 실행]
├─ Agent A (작업 1)
├─ Agent B (작업 2)
└─ Agent C (작업 3)
    ↓
[모든 완료 후 통합]
```

**적합한 상황:**

- 여러 컴포넌트 동시 생성
- 독립적인 파일 리뷰
- 관련 없는 기능 구현

### 2. 순차 실행 (Sequential)

의존성 있는 작업은 순서대로:

```
Agent A (구현)
    ↓ 결과 전달
Agent B (리뷰)
    ↓ 결과 전달
Agent C (수정)
```

**적합한 상황:**

- 구현 → 리뷰 → 수정
- API 생성 → 타입 생성 → UI 구현
- 분석 → 설계 → 구현

### 3. 백그라운드 실행 (Background)

장시간 작업은 백그라운드로:

```
[즉시 반환]
    │
    ├─ 메인 작업 계속
    │
    └─ [백그라운드]
        ├─ 테스트 실행
        └─ 빌드 검증
            ↓
        [완료 시 결과 확인]
```

**적합한 상황:**

- 전체 테스트 스위트 실행
- 프로덕션 빌드
- 대규모 코드 분석

### 4. 하이브리드 실행

복합 패턴 조합:

```
[Phase 1: 순차]
feature-builder (기능 구현)
    ↓
[Phase 2: 병렬 백그라운드]
├─ test-runner (테스트)         [백그라운드]
├─ build-validator (빌드 검증)   [백그라운드]
└─ code-reviewer (코드 리뷰)     [병렬]
    ↓
[Phase 3: 통합]
결과 수집 및 보고
```

## Task 도구 사용법

### 병렬 호출

한 메시지에서 여러 Task 도구를 동시 호출:

```typescript
// 3개 작업 동시 실행
Task({
  subagent_type: 'general-purpose',
  prompt: 'musinsa:agents:feature-builder로 Header 구현',
  description: 'Header 구현',
})
Task({
  subagent_type: 'general-purpose',
  prompt: 'musinsa:agents:feature-builder로 Footer 구현',
  description: 'Footer 구현',
})
Task({
  subagent_type: 'general-purpose',
  prompt: 'musinsa:agents:feature-builder로 Sidebar 구현',
  description: 'Sidebar 구현',
})
```

### 백그라운드 호출

```typescript
Task({
  subagent_type: 'general-purpose',
  prompt: 'musinsa:agents:test-runner로 전체 테스트',
  description: '테스트 실행',
  run_in_background: true,
})
// → output_file 경로 반환
// → 나중에 TaskOutput으로 결과 확인
```

### 결과 확인

```typescript
TaskOutput({
  task_id: '반환된_task_id',
  block: false, // 논블로킹 확인
  timeout: 5000,
})
```

## 사용 시나리오

### 시나리오 1: 기능 구현 + 검증

```
요청: "상품 목록 페이지 만들고 테스트까지 돌려줘"

실행 계획:
1. [순차] feature-builder → 페이지 구현
2. [병렬 백그라운드]
   - test-runner → 테스트
   - build-validator → 빌드
3. [통합] 결과 보고
```

### 시나리오 2: 리팩토링 + 리뷰

```
요청: "이 컴포넌트 리팩토링하고 리뷰해줘"

실행 계획:
1. [순차] frontend-dev → 리팩토링
2. [순차] code-reviewer → 리뷰
3. [순차] frontend-dev → 리뷰 반영
```

### 시나리오 3: 전체 기능 개발

```
요청: "회원가입 기능 전체 구현해줘"

실행 계획:
1. [순차] Explore → 기존 인증 코드 분석
2. [순차] feature-builder → 기능 구현
3. [병렬 백그라운드]
   - test-runner → 테스트
   - build-validator → 빌드
   - code-reviewer → 리뷰
4. [통합] 종합 보고
```

## 성능 최적화 팁

1. **독립 작업은 항상 병렬로**: 의존성 없으면 무조건 병렬
2. **장시간 작업은 백그라운드**: 테스트, 빌드는 백그라운드로
3. **빠른 피드백 우선**: 타입 체크 → 린트 → 빌드 순서로
4. **실패 시 조기 종료**: 핵심 작업 실패 시 의존 작업 스킵

## 오류 처리

- 에이전트 실패 시 해당 작업만 실패 처리
- 의존 작업은 스킵하되 독립 작업은 계속
- 최종 보고서에 실패 원인과 수정 방안 포함

---

**오케스트레이터 호출**: `/musinsa:agents:orchestrator`
