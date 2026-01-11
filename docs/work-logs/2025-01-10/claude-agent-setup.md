# Claude Agent & MCP 설정 작업 기록

**작업일**: 2025-01-10

---

## 1. 생성된 파일 구조

```
.claude/
├── commands/musinsa/
│   ├── agents/                    # Agent (자율적 역할 수행)
│   │   ├── frontend-dev.md
│   │   ├── code-reviewer.md
│   │   └── feature-builder.md
│   │
│   ├── code-style.md              # Skill (참조용 가이드)
│   ├── component.md
│   ├── page.md
│   └── store.md
│
└── skills/                        # Skill 원본
    ├── musinsa-code-style/
    ├── musinsa-component-generator/
    ├── musinsa-store-generator/
    └── musinsa-page-generator/
```

---

## 2. Agent 요약

### 2.1 frontend-dev (프론트엔드 개발자)

```yaml
name: musinsa-frontend-dev
description: 단일 컴포넌트, 페이지, 훅, 스토어 구현
tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, Context7, Exa
model: sonnet
skills: code-style, component, page, store
```

**트리거**: "컴포넌트 만들어줘", "훅 생성", "스토어 추가"

**호출**: `/musinsa:agents:frontend-dev`

---

### 2.2 code-reviewer (코드 리뷰어)

```yaml
name: musinsa-code-reviewer
description: 코드 리뷰, 컨벤션 체크
tools: Read, Glob, Grep # 읽기 전용
model: haiku # 빠른 피드백
skills: code-style
```

**트리거**: "리뷰해줘", "코드 검토", "PR 리뷰"

**호출**: `/musinsa:agents:code-reviewer`

---

### 2.3 feature-builder (기능 빌더)

```yaml
name: musinsa-feature-builder
description: 복합 기능 구현, 여러 파일 자동 생성
tools: Read, Write, Edit, Glob, Grep, Bash, WebSearch, Context7, Exa
model: sonnet
skills: code-style, component, page, store
```

**트리거**: "기능 만들어줘", "CRUD 구현", "목록+상세 페이지"

**호출**: `/musinsa:agents:feature-builder`

---

## 3. Skill 요약

| Skill      | 호출                  | 용도                          |
| ---------- | --------------------- | ----------------------------- |
| code-style | `/musinsa:code-style` | 코딩 컨벤션, 클린코드 원칙    |
| component  | `/musinsa:component`  | 컴포넌트 생성 템플릿          |
| page       | `/musinsa:page`       | Next.js 페이지 생성 템플릿    |
| store      | `/musinsa:store`      | Zustand/TanStack Query 템플릿 |

---

## 4. 핵심 원칙

### 4.1 재사용 우선 (Reuse First)

```
구현 요청
    ↓
[Phase 0: 재사용 검색] ★ 필수
├─ src/components/ 검색
├─ src/hooks/ 검색
├─ src/queries/ 검색
└─ shadcn/ui 확인
    ↓
있음 → 재사용/확장
없음 → 새로 구현
```

### 4.2 클린 코드

- **SOLID 원칙** 준수
- **DRY**: 같은 코드 2번 반복 시 추출
- **함수**: 20줄 이하
- **컴포넌트**: 300줄 이하
- **매개변수**: 3개 이하

### 4.3 최신 문서 참조

**Context7 MCP**: 라이브러리 최신 문서 참조

- Next.js, TanStack Query, shadcn/ui, Zustand, Tailwind CSS

**Exa AI MCP**: AI 기반 웹 검색 및 코드 컨텍스트

- 최신 기술 트렌드, 에러 해결, 코드 예제 검색

---

## 5. MCP 설정

### 5.1 설치된 MCP

```bash
# 확인 명령어
claude mcp list
```

| MCP        | 상태   | 용도                        |
| ---------- | ------ | --------------------------- |
| context7   | 설치됨 | 최신 라이브러리 문서        |
| exa        | 설치됨 | AI 웹 검색 및 코드 컨텍스트 |
| claude-mem | 설치됨 | 메모리/컨텍스트             |

### 5.2 Context7 설치 명령어

```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp@latest
```

### 5.3 Exa AI 설치 (API 키 불필요)

```bash
# HTTP transport 방식 (API 키 불필요)
claude mcp add --transport http exa https://mcp.exa.ai/mcp
```

**제공 기능**:

- `web_search_exa`: AI 기반 웹 검색
- `get_code_context_exa`: 코드 관련 컨텍스트 검색

---

## 6. 사용 예시

### 기능 구현

```bash
/musinsa:agents:feature-builder
> "상품 목록 페이지 만들어줘. 필터랑 정렬 기능 필요해"
```

### 코드 리뷰

```bash
/musinsa:agents:code-reviewer
> "src/app/products/page.tsx 리뷰해줘"
```

### 컴포넌트 생성

```bash
/musinsa:agents:frontend-dev
> "ProductCard 컴포넌트 만들어줘"
```

---

## 7. Agent vs Skill 차이

| 구분     | Agent                 | Skill              |
| -------- | --------------------- | ------------------ |
| 역할     | 자율적 판단/행동      | 참조용 가이드      |
| 페르소나 | 있음                  | 없음               |
| 자율성   | 높음                  | 낮음               |
| 예시     | "개발자로서 구현해줘" | "이 템플릿 참고해" |

---

## 8. Subagent 형식

```yaml
---
name: agent-name
description: 언제 호출되는지 설명
tools: 사용 가능한 도구들
model: sonnet
skills: 자동 로드할 skill들
---
# 시스템 프롬프트
```

**주요 필드**:

- `tools`: 사용 가능한 도구 제한
- `skills`: 자동 로드할 skill
- `model`: sonnet/opus/haiku
