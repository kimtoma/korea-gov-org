# CLAUDE.md — korea-gov-org

## 프로젝트

대한민국 정부조직도 (비공식) 인터랙티브 시각화.
단일 HTML 파일 + 인라인 데이터. 프레임워크 없음.

## 파일 구조

- `index.html` — 모든 것이 인라인 (CSS, 데이터, JS/D3 차트)
- `data.js` — 데이터 원본 참조용 (index.html에 인라인 복사본 존재)
- `data-sources/` — 공공데이터포털 CSV 원본 (git 미추적, 참조용)
  - `gov-org-info.csv` — 정부조직도 기구정보 (영문명·기관코드)
  - `budget-by-ministry.csv` — 부처별 예산현황
  - `public-institutions.csv` — 공공기관 지정현황 344개
- `favicon.svg`, `og-image.png/.svg` — 정적 에셋
- `CHANGELOG.md` — v0~v24 변경 이력
- `CLAUDE.md` — 이 파일 (Claude Code 작업 지침)
- `README.md` — 프로젝트 문서

## 아키텍처 (index.html 내부 순서)

1. `<head>` — 메타태그, OG, favicon, D3 CDN, CSS
2. `<style>` — 전체 CSS (청와대 컬러 토큰, 반응형 미디어쿼리 3단계)
3. `<body>` — topbar (view-toggle + budget-toggle), radialView(SVG + hover-tooltip + legend), orgView(div), sheetBackdrop, detailPanel, sources modal
4. `<script>` 1번째 — 데이터 (people, govData, sources)
5. `<script>` 2번째 — 앱 로직 (budget utils, view switching, hover highlight, detail panel, radial tree, org chart, bottom sheet swipe, init)
6. Cloudflare Web Analytics beacon (`</body>` 앞)

## 핵심 데이터 구조

- `people{}` — 이름 → {role, date, photo?, bio?}
- `govData{}` — 트리 구조: name, nameEn, nameEnAbbr?, type, head?, url?, desc?, budget?, divisions?[], publicInstitutions?[], children?[]
- `colorMapLight{}` / `colorMapDark{}` — 테마별 SVG 노드 색상
- `colorMap` — 현재 활성 테마의 colorMap (light 또는 dark)

## 뷰 모드

- `radial` — D3 radial tree, `renderRadial()`. 호버 시 관계도 하이라이트 + 리치 툴팁
- `org` — HTML 카드 레이아웃, `renderOrgChart()`. 예산 모드 시 순위 배지 + 상대비율 바
- `budgetMode` — 토글, 양쪽 뷰에 영향. 레이디얼: 노드 크기 비례, 조직도: 정렬+바
- 모바일 상세 패널 → 바텀시트 (55vh ↔ 92vh ↔ 닫힘, 스와이프)

## 컬러 시스템 (v22~ 청와대 기반)

대한민국 대통령실 홈페이지(president.go.kr)의 디자인 토큰을 기반으로 구성.

### 라이트 모드 주요 토큰
- Primary: `#0076D8` (청와대 primary50)
- Gray scale: 블루 틴트 (`#EEF2F7`, `#E9F1FC`, ..., `#0D0B2C`, `#000`)
- 어두운 gray(80~100)에 남보라 언더톤 — 의도적 브랜드 선택

### 다크 모드 주요 토큰
- 배경: `#02001F` (딥 네이비, Tailwind Slate가 아님)
- Surface: `#0D0B2C`, Border: `#1B1936`
- Primary accent: `#4C87F6` (밝기 보정)
- 텍스트: `#EEF2F7` (gray5)

### 기관 유형별 색상 (CSS 변수)
- `--c-president`: 대통령 (primary blue)
- `--c-pm`: 국무총리 (`#6366F1` indigo)
- `--c-ministry`: 부 (`#0FA573` green)
- `--c-office`: 처 (`#F59E0B` amber)
- `--c-commission`: 위원회 (`#D63D4A` 청와대 point50)
- `--c-agency`: 청 (`#8B5CF6` purple)

### 테마 전환
- `[data-theme="dark"]` CSS 변수 오버라이드
- `toggleTheme()` → `applyTheme('light'|'dark')` → colorMap 교체 + 재렌더링
- `localStorage.theme`에 저장, `prefers-color-scheme` 자동 감지

## 딥링크 & 공유

- URL 해시 `#기관명` → `loadFromHash()` → `showNodeDetail()`
- `shareOrg(name)` → clipboard 복사 + 토스트
- `showDetail(data,{syncHash,hashName})` / `hideDetail({syncHash})` 단일 진입점으로 해시 동기화

## 반응형 브레이크포인트

- 1024px — 태블릿
- 768px — 모바일 (바텀시트, 호버 비활성, auto-fit 줌)
- 480px — 소형 모바일

## 배포

```bash
wrangler pages deploy . --project-name korea-gov-org
```

URL: https://korea-gov-org.pages.dev

## 데이터 업데이트 시 주의

- `index.html` 안의 인라인 데이터와 `data.js`가 별도로 존재 — 양쪽 다 수정해야 동기화
- `node scripts/validate-data.mjs`로 동기화/무결성(헤드참조·중복·예산포맷·집계수치) 검증
- 예산 문자열 파싱: "110.4조" → 1,104,000억, "5,200억" → 5200 (`parseBudget()`)
- Wikipedia 사진 URL 패턴: `W + "경로/200px-파일명"`
- 명칭변경 부처는 새 도메인 사용 (motir, mcee, kmcc, mods)
- 공식 영문명/약어는 공공데이터포털 정부조직도 기구정보 CSV 기준 (정부조직법 2025-10-01)
- `publicInstitutions[]`는 공기업+준정부기관만 포함, 기타공공기관(253개)은 제외
