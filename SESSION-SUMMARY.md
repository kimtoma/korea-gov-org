# 세션 요약 — 대한민국 정부조직도 (비공식)

> 2026-04-14 · 정책지표/공공기관/상세 패널 구조 개선 반영

## 프로젝트 개요

- **이름**: 대한민국 정부조직도 (비공식)
- **URL**: https://korea-gov-org.pages.dev
- **GitHub**: https://github.com/kimtoma/korea-gov-org
- **레퍼런스**: [machineryofgovernment.uk](https://machineryofgovernment.uk) (영국 정부 조직도)
- **디자인 참고**: [KRDS](https://www.krds.go.kr) (대한민국 정부 디자인 시스템)

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
| Wikipedia 공식 사진 | 17장 (장관급) |
| 공식 홈페이지 URL | 49개 |
| 예산 데이터 | 주요 부처 + 청 단위 (신설예정은 집계 제외) |
| 데이터 출처 | 11개+ |

## 버전 이력 (v0 → v23)

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
- **v16~v22** — 다크모드/데이터 최신화/컬러 시스템 고도화
- **v23** — 공식 현행 기준(19/6/18/6) 정렬, 해시 동기화 리팩터링, `validate-data.mjs` 추가

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
├── index.html          # 메인 (106KB, CSS+데이터+JS 인라인)
├── data.js             # 데이터 원본 (참조용)
├── favicon.svg         # SVG 파비콘
├── og-image.svg        # OG 이미지 소스
├── og-image.png        # OG 이미지 (1200x630)
├── CHANGELOG.md        # v0~v23 변경 이력
├── CLAUDE.md           # Claude Code 작업 지침
├── README.md           # 프로젝트 문서
├── SESSION-SUMMARY.md  # 이 파일
└── scripts/validate-data.mjs  # 데이터 동기화/무결성 검증
```

## 만든 사람

**kimtoma** — [kimtoma.com](https://kimtoma.com) · [LinkedIn](https://www.linkedin.com/in/kimkyungsoo/)

AI 어시스턴트: Claude Opus 4.6 (1M context)


## 최근 UI 구조 업데이트 (v32)
- 상세 패널 정보 순서를 사용 맥락 중심으로 재배치
  1. 소관 업무
  2. 기관장
  3. 내부 조직
  4. 산하기관
  5. 소속 공공기관
  6. 대표 정책지표
  7. 근거 출처
  8. Data Backbone
- 대표 정책지표 카드를 1열 전체폭으로 확대해 시계열/배지/근거 메타 가독성 강화
- 예산의 phase / dataset / source status / amount basis를 Data Backbone 하단으로 이동
