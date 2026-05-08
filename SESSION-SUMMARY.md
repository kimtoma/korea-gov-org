# 세션 요약 — 대한민국 정부조직도 (비공식)

> 2026-05-08 · v33 — 공유용 URL 파라미터 추가, 사진 썸네일 화이트리스트 패치, v32 상세 패널 정보 구조 재배치

## 프로젝트 개요

- **이름**: 대한민국 정부조직도 (비공식)
- **URL**: https://korea-gov-org.pages.dev
- **GitHub**: https://github.com/kimtoma/korea-gov-org
- **레퍼런스**: [machineryofgovernment.uk](https://machineryofgovernment.uk) (영국 정부 조직도)
- **디자인 참고**: [KRDS](https://www.krds.go.kr) (폰트·레이아웃) + [대한민국 대통령실](https://www.president.go.kr) (컬러 토큰)

## 기술 스택

| 항목 | 선택 |
|------|------|
| 차트 | D3.js v7 (radial tree, zoom, circle packing) |
| 프레임워크 | 없음 (Vanilla HTML/CSS/JS) |
| 폰트 | Pretendard Variable |
| 호스팅 | Cloudflare Pages |
| 분석 | Cloudflare Web Analytics |
| 버전관리 | GitHub |

## 데이터 규모

| 항목 | 수량 |
|------|------|
| 기관 | 49개 (19부 + 6처 + 18청 + 6위원회, 공식 현행 기준) |
| 기관장 프로필 | 40명+ |
| Wikipedia 공식 사진 | 31장 (250px 화이트리스트 썸네일) |
| 공식 홈페이지 URL | 49개 |
| 예산 데이터 | 54개 budget fact (display 문자열 → KRW 정규화) |
| 정책지표 | 64개 fact, 23개 기관 커버 (e-나라지표/KOSIS/부처 통계) |
| 소속 공공기관 매핑 | 31개 부처/처/청/위원회에 공기업·준정부기관 연결 |
| 공식 영문명/약어 | `nameEn` 39개 교체, `nameEnAbbr` 57개 부여 |
| 데이터 출처 | 11개 (공공데이터포털 3개 포함) |

## 버전 이력 (v0 → v33)

### Phase 1: 프로토타입 (v0~v1)
- **v0** — 다크테마 정적 HTML 카드 레이아웃 (첫 프로토타입)
- **v1** — D3.js Circle Packing 차트, KRDS 라이트 테마, 검색 기능

### Phase 2: 데이터 보강 (v2~v5)
- **v2** — 30명+ 기관장 프로필, Wikipedia 사진 17장
- **v3** — 듀얼 뷰 (레이디얼 트리 + 전통 조직도), 상세 패널
- **v4** — 청장/처장/위원장 15명 추가 (총 40명+)
- **v5** — 공식 URL 49개, 업무 설명, 예산, 내부 조직, 출처 모달

### Phase 3: 인터랙션 (v6~v8)
- **v6** — 예산 시각화 모드 (노드 크기 비례 + 정렬)
- **v7** — 반응형 웹 (3단계 브레이크포인트), 예산 토글 스위치
- **v8** — 호버 관계도 하이라이트 + 리치 툴팁

### Phase 4: 모바일 최적화 (v9~v10)
- **v9** — 모바일 바텀시트 (호버 대신 탭 → 시트), 백드롭, 스와이프
- **v10** — 바텀시트 3단 스냅 (닫힘 ↔ 55vh ↔ 92vh)

### Phase 5: 배포 & 완성도 (v11~v14)
- **v11** — Favicon, OG 이미지, 비공식 고지, 크레딧, Cloudflare Pages 배포
- **v12** — 범례 접기/펼치기 토글, 모바일 예산 텍스트
- **v13** — 범례 +/- 아이콘 모션
- **v14** — 조직도 예산 바 개선 (상대 비율 + 순위)

### Phase 6: 데이터 기준 정렬 & 신뢰성 강화 (v15~v23)
- **v15** — 딥링크/공유 기능 도입
- **v16~v22** — 다크모드/데이터 최신화/청와대 컬러 시스템 도입
- **v23** — 공식 현행 기준(19/6/18/6) 정렬, 해시 동기화 리팩터링, `validate-data.mjs` 추가

### Phase 7: 데이터 백본 & 정책지표 (v24~v32)
- **v24** — 공공데이터포털 연동: 공식 영문명/약어, 누락 예산 6개 보완, 공공기관 91개 연결, 출처 3개 추가, 헤더 카운트 정정(18청 6위원회)
- **v25** — Phase 2 정규화 기반 추가: `data/normalization-foundation.json`(canonical/source/alias/lineage/budget fact 분리), `build-normalization-foundation.mjs`
- **v26** — Phase 3 정책지표 레이어: 6개 핵심 부처 12개 지표(e-나라지표/KOSIS), 상세 패널 카드 UI 추가
- **v27** — 정책지표 13개 기관/26개 지표로 확장 + `series` 시계열·미니 스파크라인
- **v28** — e-나라지표 상세 링크 정밀화, methodology/qualityNote 명시
- **v29** — KOSIS 표 ID 4건 확정, source metadata에 모수/계열 명시
- **v30** — 비부처 공공기관 매핑 확장 (방미통위·식약처·원안위·관세청·산림청 등 11개)
- **v31** — 비부처 정책지표 1차 확장 (관세청·식약처·질병청·조달청), `indicatorFactCount=45`, `indicatorCoverageOrgCount=23`
- **v32** — 상세 패널 정보 구조 재배치(소관 업무→기관장→내부 조직→산하기관→소속 공공기관→대표 정책지표→근거 출처→Data Backbone), 정책지표 카드 1열 전체폭 확장

### v33 — 공유용 URL 파라미터 + 데이터 패치 (2026-05-08)
- **공유용 URL 파라미터 추가** — `?view=org|radial`, `?budget=1`, `?theme=dark|light`로 임의 화면을 직링크. 기존 `#기관명` 해시와 결합 가능 (`?view=org&budget=1#국방부`). localStorage 미수정 일회성 적용
- **부처 정책지표 추가 확장 + 공공기관 커버리지 보강** (`indicatorFacts: 64`, 31개 기관 공공기관 매핑)
- **상세 패널 메타데이터/지표 순서 정돈** (refactor: detail panel metadata)
- **Wikimedia 사진 썸네일 250px 일괄 교체** — Commons는 화이트리스트 너비(20/40/60/120/250/330/500/...)만 리사이즈하므로 200px는 원본 풀사이즈를 반환했다. 31개 사진 URL을 250px로 통일

## 핵심 기능

### 레이디얼 뷰
- 대통령을 중심에 놓고 모든 기관이 방사형으로 배치
- 프로필 사진이 있는 노드는 원형 클립으로 표시
- 동심원 가이드라인으로 계층 깊이 표현
- 마우스 오버 시 대통령까지의 경로 하이라이트 + 관련 없는 노드 dim
- 커서 근처에 리치 툴팁 (계층 경로 + 업무 설명 + 예산 + 기관장)

### 조직도 뷰
- 전통적인 카드 기반 계층형 레이아웃
- 대통령 → 직속기관 / 국무총리 소속 좌우 2열
- 19개 행정각부 그리드
- 산하 청 태그, 신설/명칭변경/부총리 배지

### 예산 모드
- 레이디얼: 노드 크기가 예산에 비례 (d3.scaleSqrt)
- 조직도: 예산 내림차순 정렬 + 상대 비율 바 + 순위 배지

### 상세 패널 (v32 기준)
- 데스크탑: 우측 사이드 패널 / 모바일: 하단 바텀시트(스와이프 3단 스냅)
- 정보 순서: 소관 업무 → 기관장 → 내부 조직 → 산하기관 → 소속 공공기관 → 대표 정책지표(스파크라인) → 근거 출처 → Data Backbone
- 정책지표 카드는 1열 전체폭, 시계열·YoY·기간 최고/최저·목표 배지 + dataset/publisher/lastVerified/coverage/methodology 표시

### 다크 모드
- 청와대(president.go.kr) CSS 토큰 기반 라이트/다크
- `[data-theme="dark"]` 변수 오버라이드, `localStorage` + `prefers-color-scheme`

### 모바일
- auto-fit 줌으로 레이디얼 차트 자동 맞춤
- 하단 바텀시트 (스와이프로 확장/축소/닫기)
- 범례 접기/펼치기 토글

## 사용된 주요 기술

- **D3 radial tree** — `d3.tree().size([2*Math.PI, radius])` + 극좌표 변환
- **D3 zoom** — 핀치 줌, 패닝, 프로그래매틱 auto-fit
- **CSS `::before/::after`** — +/- 토글 아이콘
- **CSS `cubic-bezier`** — 바텀시트 슬라이드 모션
- **Touch events** — 바텀시트 스와이프 (touchstart/move/end)
- **getBBox()** — SVG 바운딩 박스로 auto-fit 줌 계산

## 파일 구조

```
korea-gov-org/
├── index.html          # 메인 (≈272KB, CSS+데이터+JS 인라인)
├── data.js             # 데이터 원본 (참조용; index.html에 인라인 복사본)
├── data/
│   ├── normalization-foundation.json   # canonical/source/alias/lineage/budget/indicator fact
│   └── policy-indicators/
│       ├── economy.json | society.json | territory.json | governance.json
│       └── sources.json                # 정책지표 출처 카탈로그
├── data-sources/       # 공공데이터포털 CSV (git 미추적, 참조용)
├── scripts/
│   ├── validate-data.mjs               # 인라인 동기화 + 무결성 + 정규화 산출물 검증
│   ├── build-normalization-foundation.mjs
│   └── sync-policy-indicators.mjs      # source 파일 → data.js / index.html 동기화
├── favicon.svg, og-image.svg|png       # 정적 에셋
├── CHANGELOG.md        # v0~v32 변경 이력
├── CLAUDE.md / AGENTS.md   # AI 어시스턴트 작업 지침
├── README.md           # 프로젝트 문서
├── blog-post.md        # 회고 블로그 포스트
└── SESSION-SUMMARY.md  # 이 파일
```

## 만든 사람

**kimtoma** — [kimtoma.com](https://kimtoma.com) · [LinkedIn](https://www.linkedin.com/in/kimkyungsoo/)

AI 어시스턴트: Claude Opus 4.7 (1M context)
