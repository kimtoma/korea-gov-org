# 대한민국 정부조직도 (비공식)

> **Interactive Machinery of Government — Republic of Korea**

이재명 정부(2025.06~)의 행정부 조직 구조를 인터랙티브하게 시각화한 **비공식** 웹 페이지입니다.

**[Live Demo](https://korea-gov-org.pages.dev)**

![OG Image](og-image.png)

## 비공식 자료 안내

이 프로젝트는 공개된 정보를 기반으로 **개인이 제작한 비공식 자료**입니다.
대한민국 정부가 운영하는 공식 사이트가 아니며, 기관 구조/인사/예산 등이 실제와 다를 수 있습니다.
정확한 정보는 [정부24](https://www.gov.kr/portal/orgInfo)를 참고하세요.

## 주요 기능

### 듀얼 뷰

| 레이디얼 | 조직도 |
|----------|--------|
| D3.js radial tree — 대통령 중심 방사형 | 카드 기반 계층형 레이아웃 |
| 줌/패닝, 호버 관계도 하이라이트 | 기관 유형별 색상 코딩 |

### 데이터

- **49개 기관** — 19부, 6처, 18청, 6위원회 (공식 현행 기준)
- **기관장 프로필** — 40명+ 이름·직위·경력·취임일, 17장 Wikipedia 공식 사진
- **예산 시각화** — 2026년 예산안 기준, 노드 크기 비례 + 정렬 모드
- **공식 영문명** — 정부조직법 기준 공식 English name + 약어 (MOEF, MSIT 등)
- **소속 공공기관** — 부처별 공기업·준정부기관 91개 (공공기관 지정현황 기반)
- **대표 정책지표** — e-나라지표/KOSIS/부처 통계 기반 핵심 지표 26개를 13개 기관 상세 패널에 연결
- **시계열 미니차트** — 정책지표 카드 안에서 최근 5년 내외 추이를 스파크라인으로 바로 확인
- **업무 설명** — 각 기관 소관 업무 1~2문장
- **공식 홈페이지 URL** — 모든 기관 `.go.kr` 링크
- **내부 조직** — 주요 부처 실/국/본부 구조

### 인터랙션

- **호버 관계도** — 마우스 오버 시 대통령까지의 경로 하이라이트 + 리치 툴팁
- **예산 모드** — 토글 ON 시 노드 크기가 예산에 비례, 조직도는 예산순 정렬 + 순위 배지 + 상대 비율 바
- **상세 패널** — 데스크탑: 우측 사이드 패널 / 모바일: 하단 바텀시트 (스와이프 확장)
- **딥링크 & 공유** — URL 해시(`#국방부`)로 특정 기관 바로 열기, 상세 패널에서 공유 버튼으로 URL 복사
- **다크 모드** — 탑바 토글로 라이트/다크 전환, 시스템 테마 자동 감지
- **출처 모달** — 11개 데이터 출처 명시 (공공데이터포털 3개 포함)

### 반응형

- **데스크탑** (1024px+): 풀사이즈 레이디얼, 우측 상세 패널
- **태블릿** (768~1024px): 축소 패널
- **모바일** (<768px): auto-fit 줌, 바텀시트 (55vh ↔ 92vh ↔ 닫힘), 터치 제스처

## 기술 스택

- **D3.js v7** — radial tree layout, zoom, circle packing
- **Vanilla HTML/CSS/JS** — 프레임워크 없음, 단일 `index.html` (인라인 데이터)
- **Pretendard** — 폰트 (KRDS 정부 디자인시스템 참고)
- **청와대 컬러 시스템** — [president.go.kr](https://www.president.go.kr) CSS 토큰 기반 라이트/다크 모드
- **Cloudflare Pages** — 호스팅 + Web Analytics

## 파일 구조

```
index.html      # 메인 (CSS + 데이터 + D3 차트 + 뷰 로직 전부 인라인)
data.js         # UI용 데이터 원본 (index.html에도 인라인 복사본 포함)
data/           # Phase 2 정규화 기반 산출물
  normalization-foundation.json  # canonical/source/alias/lineage/budget/indicator fact 분리본
data-sources/   # 공공데이터포털 CSV 원본 (git 미추적, 참조용)
scripts/
  validate-data.mjs              # UI 데이터 + 정규화 기반 검증
  build-normalization-foundation.mjs
favicon.svg     # SVG 파비콘
og-image.svg    # OG 이미지 소스 (SVG)
og-image.png    # OG 이미지 (1200x630)
CHANGELOG.md    # v0~v25 변경 이력
CLAUDE.md       # Claude Code 작업 지침
README.md       # 프로젝트 문서
```

## 배포

```bash
# Cloudflare Pages
wrangler pages deploy . --project-name korea-gov-org
```

## 데이터 검증

```bash
# UI 데이터 → 정규화 기반 JSON 재생성
node scripts/build-normalization-foundation.mjs

# 인라인 동기화 + 무결성 + 정규화 산출물 검증
node scripts/validate-data.mjs
```

## Phase 2 정규화 기반

현재 UI는 그대로 `data.js` / `index.html` 인라인 데이터를 사용한다. 대신 Phase 2부터는 그 위에 **정규화 레이어**를 별도로 생성한다.

`data/normalization-foundation.json`에는 아래 5개 축이 분리돼 있다.

- `canonicalOrgs` — 화면 표시용 이름과 별개인 기준 기관 레코드
- `sourceNodes` — 현재 UI 노드가 어떤 source/orgCode에서 왔는지 추적 가능한 매핑
- `aliases` — 표기명/공식명 alias 준비값
- `lineage` — 개편 이력 및 predecessor orgCode 단서
- `budgetFacts` — 예산 문자열(`1.2조`)을 정규화한 KRW 숫자 fact
- `indicatorFacts` — e-나라지표/KOSIS 기반 정책지표 fact

이 구조 덕분에 정책지표·추가 공공데이터를 UI 노드 이름에 직접 매달리지 않고 `canonicalId` 중심으로 조인할 수 있다. 현재는 13개 핵심 기관에 대해 실용 지표 레이어를 붙였고, 각 지표 fact에는 간단한 `series` 배열을 함께 실어 추이 UI와 후속 시계열 확장 기반을 마련했다.

## 데이터 출처

| 출처 | 용도 |
|------|------|
| [정부24](https://www.gov.kr/portal/orgInfo) | 공식 정부 조직 정보 |
| [위키백과: 이재명 정부의 국무위원](https://ko.wikipedia.org/wiki/이재명_정부의_국무위원) | 장관 프로필 사진, 인사 |
| [대한민국 정책브리핑](https://www.korea.kr) | 장관 후보자 지명, 차관급 인사 |
| [나무위키: 이재명 정부/인사](https://namu.wiki/w/이재명%20정부/인사) | 청장·처장·위원장급 인사 |
| 각 부처 공식 홈페이지 | 업무 소개, 조직도 |
| 2026년 정부 예산안·보도자료 | 부처별 예산 규모 및 정책 변화 확인 |
| [KRDS](https://www.krds.go.kr) | UI/UX 디자인 가이드라인 참고 |
| [대한민국 대통령실](https://www.president.go.kr) | 컬러 시스템 (라이트/다크 모드 토큰) |
| [machineryofgovernment.uk](https://machineryofgovernment.uk) | 인터랙션 디자인 참고 |
| [공공데이터포털: 정부조직도 기구정보](https://www.data.go.kr/data/15147671/fileData.do) | 공식 영문명·약어, 기관코드 |
| [공공데이터포털: 부처별 예산현황](https://www.data.go.kr/data/15095848/fileData.do) | 부처별 세출예산 (누락 보완) |
| [공공데이터포털: 공공기관 지정현황](https://www.data.go.kr/data/15088742/fileData.do) | 공기업·준정부기관 344개 |

## 만든 사람

**kimtoma** — [kimtoma.com](https://kimtoma.com) · [LinkedIn](https://www.linkedin.com/in/kimkyungsoo/)

## 라이선스

프로필 사진은 [Wikimedia Commons](https://commons.wikimedia.org/) 공개 라이선스 이미지입니다.
코드는 MIT License로 자유롭게 사용 가능합니다.
