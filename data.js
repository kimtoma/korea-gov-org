// ══════════════════════════════════════
// 대한민국 정부조직도 데이터
// 출처: 정부24, 각 부처 공식 홈페이지, 대한민국 정책브리핑, 공공데이터포털, 위키백과(보조)
// 최종 검증 기준일: 2026-04-08
// ══════════════════════════════════════
const W="https://upload.wikimedia.org/wikipedia/commons/thumb/";

const people={
  "이재명":{role:"제21대 대통령",date:"2025.06.04 취임",photo:W+"5/59/President_Lee_Jae_Myung_20260306.jpg/200px-President_Lee_Jae_Myung_20260306.jpg",bio:"전 더불어민주당 대표, 전 경기도지사"},
  "김민석":{role:"국무총리",date:"2025.07.03 취임",photo:W+"7/7e/Kim_Min-seok_20250807.jpg/200px-Kim_Min-seok_20250807.jpg",bio:"전 국회의원(3선), 전 보건복지부 차관"},
  "강훈식":{role:"대통령비서실장",date:"2025.06.05 임명",photo:W+"6/64/Kang_Hoon-sik%27s_Portrait_%282025.7%29.png/200px-Kang_Hoon-sik%27s_Portrait_%282025.7%29.png",bio:"전 국회의원(3선, 충남 아산)"},
  "위성락":{role:"국가안보실장",date:"2025.06.05 임명",photo:W+"f/f8/Wi_Sung_Lac_20250203.jpg/200px-Wi_Sung_Lac_20250203.jpg",bio:"전 한반도평화교섭본부장"},
  "황인권":{role:"대통령경호처장",date:"2025.06.05 임명",photo:W+"9/9d/Hwang_In-kwon%27s_portrait_%282025.08%29.jpg/200px-Hwang_In-kwon%27s_portrait_%282025.08%29.jpg",bio:"전 육군 대장, 제2작전사령관"},
  "김호철":{role:"감사원장",date:"2025년 취임",bio:"최재해 전 원장 후임"},
  "이종석":{role:"국가정보원장",date:"2025.06.25 임명",photo:W+"1/10/%E6%9D%8E%E9%92%9F%E5%A5%AD%E7%85%A7%E7%89%87.jpg/200px-%E6%9D%8E%E9%92%9F%E5%A5%AD%E7%85%A7%E7%89%87.jpg",bio:"전 통일부 장관, 전 NSC 사무차장"},
  "김종철":{role:"방송미디어통신위원장",date:"2025.10 취임",photo:"https://www.kmcc.go.kr/images/cmi/organization/cmi_img_kim_jong_cheol_greeting.jpg",bio:"초대 위원장"},
  "윤창렬":{role:"국무조정실장",date:"2025.06.23 임명",photo:W+"6/67/%E5%B0%B9%E6%98%8C%E7%83%88%E7%85%A7%E7%89%87.jpg/200px-%E5%B0%B9%E6%98%8C%E7%83%88%E7%85%A7%E7%89%87.jpg",bio:"전 국무1차장, 전 사회수석비서관"},
  "구윤철":{role:"경제부총리 겸 재정경제부 장관",date:"2026.01.02 취임",photo:W+"9/97/Koo_Yun-cheol_20250806.jpg/200px-Koo_Yun-cheol_20250806.jpg",bio:"서울대 경제학, 행시 32회"},
  "배경훈":{role:"과학기술부총리 겸 장관",date:"2025.10.01 취임",photo:W+"8/8a/Bae_Kyung-hoon_250910.jpg/200px-Bae_Kyung-hoon_250910.jpg",bio:"AI 학자·기업인"},
  "최교진":{role:"교육부 장관",date:"2025.10.01 취임",photo:W+"d/d2/Choi_Kyo-jin_20250918.jpg/200px-Choi_Kyo-jin_20250918.jpg",bio:"전 충남대학교 총장"},
  "조현":{role:"외교부 장관",date:"2025.07.18 취임",photo:W+"9/9f/Cho_Hyun_20250806.jpg/200px-Cho_Hyun_20250806.jpg",bio:"전 외교부 1·2차관"},
  "정동영":{role:"통일부 장관",date:"2025.07.25 취임",photo:W+"5/58/Chung_Dong-young_20250822.jpg/200px-Chung_Dong-young_20250822.jpg",bio:"전 통일부 장관(노무현 정부), 5선 의원"},
  "정성호":{role:"법무부 장관",date:"2025.07.18 취임",photo:W+"9/9d/Chung_Sung-ho_20250806.jpg/200px-Chung_Sung-ho_20250806.jpg",bio:"5선 의원, 사법연수원 18기"},
  "안규백":{role:"국방부 장관",date:"2025.07.25 취임",photo:W+"1/1f/Ahn_Gyu-back_250814.jpg/200px-Ahn_Gyu-back_250814.jpg",bio:"5선 의원, 64년 만의 민간인 국방장관"},
  "윤호중":{role:"행정안전부 장관",date:"2025.07.19 취임",photo:W+"c/cc/Yun_Ho-jung_250818.jpg/200px-Yun_Ho-jung_250818.jpg",bio:"5선 의원, 전 당 원내대표"},
  "권오을":{role:"국가보훈부 장관",date:"2025.07.25 취임",photo:W+"c/cd/Kwon_Oh-eul_20250804.jpg/200px-Kwon_Oh-eul_20250804.jpg",bio:"3선 의원(경북 안동)"},
  "최휘영":{role:"문화체육관광부 장관",date:"2025.07.31 취임",photo:W+"a/a3/Choi_Hwi-Young%27s_portrait_%282025.08%29.jpg/200px-Choi_Hwi-Young%27s_portrait_%282025.08%29.jpg"},
  "송미령":{role:"농림축산식품부 장관",date:"유임",photo:W+"3/37/Song_Mi-ryung_20241114.jpg/200px-Song_Mi-ryung_20241114.jpg",bio:"유일한 유임 장관"},
  "김정관":{role:"산업통상부 장관",date:"2025.10.01 취임",photo:W+"0/03/Kim_Jung-kwan%27s_portrait_%282025.07%29.jpg/200px-Kim_Jung-kwan%27s_portrait_%282025.07%29.jpg",bio:"서울대 경제학, 전 두산에너빌리티 사장"},
  "정은경":{role:"보건복지부 장관",date:"2025.07.21 취임",photo:W+"8/8b/Jeong_Eun-kyeong%27s_Portrait_%28c._2020%29.jpg/200px-Jeong_Eun-kyeong%27s_Portrait_%28c._2020%29.jpg",bio:"서울대 의대, 전 질병관리청 초대 청장"},
  "김성환":{role:"기후에너지환경부 장관",date:"2025.10.01 취임",photo:W+"8/8e/Kim_Sung-hwan_20250818.jpg/200px-Kim_Sung-hwan_20250818.jpg",bio:"3선 의원, 기후위기특별위원회"},
  "김영훈":{role:"고용노동부 장관",date:"2025.07.21 취임",photo:W+"7/77/Kim_Young-hoon_20250806.jpg/200px-Kim_Young-hoon_20250806.jpg",bio:"전 민주노총 위원장"},
  "원민경":{role:"성평등가족부 장관",date:"2025.10.01 취임",photo:W+"b/be/Won_Min-kyong%27s_portrait_%282024.03%29.jpg/200px-Won_Min-kyong%27s_portrait_%282024.03%29.jpg"},
  "김윤덕":{role:"국토교통부 장관",date:"2025.07.31 취임",photo:W+"0/0d/Kim_Yoon-deok_2021.jpg/200px-Kim_Yoon-deok_2021.jpg",bio:"전 국회의원(전북 전주)"},
  "황종우":{role:"해양수산부 장관",date:"2026.03.25 취임",photo:W+"6/6a/%E9%BB%84%E9%92%9F%E5%AE%87%E7%85%A7%E7%89%87.jpg/200px-%E9%BB%84%E9%92%9F%E5%AE%87%E7%85%A7%E7%89%87.jpg",bio:"전재수 전 장관 후임"},
  "한성숙":{role:"중소벤처기업부 장관",date:"2025.07.23 취임",photo:W+"9/9d/Han_Seong-suk%27s_portrait_%282025.07%29.jpg/200px-Han_Seong-suk%27s_portrait_%282025.07%29.jpg",bio:"전 네이버 대표이사"},
  "박홍근":{role:"기획예산처 장관",date:"2026.03.25 취임",photo:W+"b/b7/Minister_Park_Hong-keun_20260331.jpg/200px-Minister_Park_Hong-keun_20260331.jpg",bio:"전 더불어민주당 원내대표"},
  "오유경":{role:"식품의약품안전처장",date:"유임",photo:"https://www.mfds.go.kr/images/content/sub08_01_02.jpg",bio:"윤석열 정부에서 유임"},
  "조원철":{role:"법제처장",date:"2025.07 임명",photo:"https://www.moleg.go.kr/_kor/img/sub/photo_03.jpg",bio:"26년 법관 경력, 사법연수원 동기"},
  "최동석":{role:"인사혁신처장",date:"2025.07 임명",photo:"https://www.mpm.go.kr/openminister/common/images/content/greeting_img.png",bio:"전 한국은행 인사조직개혁팀장, 전 교보생명 부사장"},
  "주병기":{role:"공정거래위원장",date:"2025.09 임명",bio:"서울대 경제학부 교수, 분배정의연구센터 대표"},
  "이억원":{role:"금융위원장",date:"2025.09 임명",photo:W+"c/c1/Lee_Eog-weon%27s_portrait_%282025.09%29.jpg/200px-Lee_Eog-weon%27s_portrait_%282025.09%29.jpg",bio:"전 기재부 1차관, 금융 전문가"},
  "송경희":{role:"개인정보보호위원장",date:"2025년 임명",bio:"전 과기정통부 SW정책관, 성균관대 AI신뢰성센터장"},
  "임광현":{role:"국세청장",date:"2025.07 취임",photo:"https://www.nts.go.kr/upload/contents/cntnts/img_7640c42c-98d2-438c-a05b-858c041afc8f1754641305770.png",bio:"전 국회의원, 최초 현역의원 출신 국세청장"},
  "이명구":{role:"관세청장",date:"2025년 임명",photo:"https://www.customs.go.kr/upload/contents/cntnts/1752473474284_182784177560173120.jpg"},
  "유재성":{role:"경찰청장 직무대행",date:"2025.06 임명",bio:"전 경찰청 차장"},
  "김승룡":{role:"소방청장",date:"2025.03 임명",bio:"소방위 공채, 전 강원소방본부장"},
  "홍소영":{role:"병무청장",date:"2025.07 임명",photo:"https://www.mma.go.kr/download/content/usr0000253/1753260089428.jpg",bio:"55년 만의 최초 여성 병무청장"},
  "오태석":{role:"우주항공청장",date:"2026.02 임명",photo:"https://www.kasa.go.kr/images/kor/sub06/sub060202_img01.png",bio:"전 KISTEP 원장"},
  "임승관":{role:"질병관리청장",date:"2025.07 임명",photo:"https://www.kdca.go.kr/sites/kdca/images/sub/greeding-boss.png",bio:"전 국립중앙의료원 감염병원 설립추진단장"},
  "허민":{role:"국가유산청장",date:"2025.07 임명",photo:"https://www.khs.go.kr/images/2025/contents/introduce/greeting-img.png",bio:"전남대 교수"},
  "김의겸":{role:"새만금개발청장",date:"2025.07 임명",photo:"https://www.saemangeum.go.kr/resources/images/introduce/chief_m_1.jpg",bio:"전 문재인 정부 청와대 대변인"},
  "이승돈":{role:"농촌진흥청장",date:"2025년 임명",photo:"https://www.rda.go.kr/inc/img/sub/greeting_img_new.jpg"},
  "박은식":{role:"산림청장",date:"2026.02.28 임명",photo:"https://forest.go.kr/kfs/images/content/park.jpg",bio:"전 산림청 차장, 산림산업정책국장 역임"},
  "이미선":{role:"기상청장",date:"2025년 임명",photo:"https://www.kma.go.kr/kma/resources/images/sub/img_director_lee.jpg"},
  "김경협":{role:"재외동포청장",date:"2025.09.09 임명",photo:W+"4/40/%EA%B9%80%EA%B2%BD%ED%98%91_%EC%9D%98%EC%9B%90_%EC%82%AC%EC%A7%84.jpg/200px-%EA%B9%80%EA%B2%BD%ED%98%91_%EC%9D%98%EC%9B%90_%EC%82%AC%EC%A7%84.jpg",bio:"전 국회의원(3선), 재외동포기본법 발의"},
  "장인식":{role:"해양경찰청장 직무대행",date:"2025.12 임명",bio:"전 남해지방해양경찰청장, 전 동해지방해양경찰청장"},
  "오동운":{role:"고위공직자범죄수사처장",date:"2024.05.21 임명",photo:W+"c/cb/Oh_Dong-woon_%2820230528%2C_Seoul%29.jpg/200px-Oh_Dong-woon_%2820230528%2C_Seoul%29.jpg",bio:"사법연수원 27기, 전 부장판사(울산·수원성남)"},
  "안창호":{role:"국가인권위원장",date:"2024.09.06 임명",photo:W+"f/f6/Justice_Ahn_Changho.png/200px-Justice_Ahn_Changho.png",bio:"사법시험 23회, 전 헌법재판소 재판관"},
  "안형준":{role:"국가데이터처장",date:"2025.10.01 취임",photo:"https://mods.go.kr/ansk/img/img_kor/greeting_2025_09.png",bio:"고려대, 행시 40회. 통계청 내부 승진 최초 청장, 전 경제통계국장·통계청 차장"},
  "김용선":{role:"지식재산처장",date:"2025.11.05 취임",bio:"전남 고흥, 서울시립대, 미국 워싱턴대 법학 박사. 행시 37회, 전 특허청 차장, WIPO 부의장"},
  "정일연":{role:"국민권익위원장",date:"2026.03.04 취임",photo:"https://www.acrc.go.kr/main/img/sub/greeting.jpg",bio:"전북 전주, 건국대 법학, 사법연수원 20기. 전 서울중앙지법·서울동부지법 부장판사"},
  "최원호":{role:"원자력안전위원장",date:"2024.12.04 취임",photo:"https://www.nssc.go.kr/attach/202412/1735524514725_0.jpg",bio:"성균관대 기계설계학, 영국 버밍엄대 박사, 기술고시 28회. 전 IAEA 파견, 전 우주항공청설립추진단장"},
  "백승보":{role:"조달청장",date:"2025.08.13 임명",bio:"부산, 고려대 경제학, 행시 39회. 조달청 29년 재직, 12년 만의 내부 승진 청장"},
  "강주엽":{role:"행정중심복합도시건설청장",date:"2025.07.14 취임",photo:"https://naacc.go.kr/afile/fileDownload/oYwmn",bio:"대전, 서울대 토목공학, 영국 킹스칼리지 석사. 기술고시 32회, 국토부 27년 재직"},
  "민기":{role:"국무총리비서실장",date:"2025.07 임명",bio:"제주대 행정학과 명예교수. 전 사회과학대학장, 한국지방재정학회 회장"},
  "이용철":{role:"방위사업청장",date:"2025.11.14 임명",photo:"https://www.dapa.go.kr/dapa/images/sub/05/minister_squre_251125.jpg",bio:"전북 순창, 연세대 법학, 사법연수원 21기. 전 대통령비서실 법무비서관, 방위사업청 초대 차장"},
};

const govData={name:"대한민국 정부",nameEn:"Government of the Republic of Korea",type:"root",
  desc:"대한민국 헌법에 의거하여 구성된 정부로, 대통령을 수반으로 하는 행정부와 그 산하기관으로 이루어져 있다. 19부 6처 18청 6위원회(공식 현행 기준)로 구성된다.",
  url:"https://www.gov.kr",
  children:[
  // ═══ 대통령 ═══
  {name:"대통령",nameEn:"President",type:"president",head:"이재명",
    url:"https://www.president.go.kr",
    desc:"국가 원수이자 행정부 수반. 국군 통수권, 외교권, 공무원 임명권, 법률안 거부권, 긴급명령권 등을 보유한다.",
    divisions:["대통령비서실","국가안보실","대통령경호처"],
    children:[
    {name:"대통령비서실",nameEn:"Office of the President",nameEnAbbr:"OTP",type:"president-sub",head:"강훈식",
      url:"https://www.president.go.kr",
      desc:"대통령의 국정 운영을 보좌하는 핵심 조직. 정무, 홍보, 민정, 인사, 경제, 사회, AI미래기획 등 수석비서관실로 구성된다.",
      divisions:["정무수석","홍보소통수석","경청통합수석","민정수석","인사수석","정책실장","경제성장수석","사회수석","AI미래기획수석"]},
    {name:"국가안보실",nameEn:"Office of National Security",nameEnAbbr:"ONS",type:"president-sub",head:"위성락",
      url:"https://www.president.go.kr",
      desc:"외교·안보·통일·국방 정책을 총괄 조정하고, 국가 위기관리 컨트롤타워 역할을 수행한다.",
      divisions:["제1차장(외교)","제2차장(국방)","제3차장(사이버)","국가위기관리센터"]},
    {name:"대통령경호처",nameEn:"Presidential Security Service",type:"president-sub",head:"황인권",
      url:"https://www.pss.go.kr",
      desc:"대통령과 그 가족, 전직 대통령 및 주요 요인의 경호와 안전을 담당한다.",budget:"1,341억"},
    {name:"감사원",nameEn:"Board of Audit and Inspection",nameEnAbbr:"BAI",type:"president-sub",head:"김호철",note:"헌법기관",
      url:"https://www.bai.go.kr",
      desc:"국가 세입·세출의 결산 검사, 행정기관 및 공무원의 직무 감찰을 수행하는 헌법상 독립기관이다.",
      budget:"3,800억",
      divisions:["사무총장","감사교육원","감사연구원"]},
    {name:"국가정보원",nameEn:"National Intelligence Service",nameEnAbbr:"NIS",type:"president-sub",head:"이종석",
      url:"https://www.nis.go.kr",
      desc:"국외 정보 및 보안 업무, 국가기밀 보호, 사이버안보를 담당하는 정보기관이다.",budget:"8,946억"},
    {name:"고위공직자범죄수사처",nameEn:"Corruption Investigation Office for High-ranking Officials",nameEnAbbr:"CIO",type:"president-sub",head:"오동운",
      url:"https://www.cio.go.kr",
      desc:"고위공직자의 부패범죄를 독립적으로 수사·기소하는 기관이다. 2021년 출범.",budget:"296억"},
    {name:"국가인권위원회",nameEn:"National Human Rights Commission",nameEnAbbr:"NHRC",type:"president-sub",head:"안창호",
      url:"https://www.humanrights.go.kr",
      desc:"인권 보호와 향상을 위한 정책 권고, 차별 행위 조사, 인권 교육을 수행하는 독립 국가기관이다.",
      budget:"490억",
        divisions:["정책교육국","침해조사국","차별시정국","군인권보호국"]},
    {name:"방송미디어통신위원회",nameEn:"Korea Media and Communications Commission",nameEnAbbr:"KMCC",type:"commission",head:"김종철",isNew:"2025.10 신설",
      url:"https://www.kmcc.go.kr",
      desc:"방송·미디어·통신 분야의 규제·감독, 미디어 다양성 보장, 이용자 보호 등을 담당한다. 방송통신위원회를 폐지하고 신설.",budget:"434억",
        divisions:["방송정책국","방송통신이용자정책국","방송미디어진흥국","방송기반국"],
      publicInstitutions:["시청자미디어재단","한국방송광고진흥공사"]}
  ]},
  // ═══ 국무총리 ═══
  {name:"국무총리",nameEn:"Prime Minister",type:"pm",head:"김민석",
    url:"https://www.opm.go.kr",
    desc:"대통령을 보좌하고 행정에 관해 대통령의 명을 받아 행정각부를 통할한다. 국무회의 부의장으로서 국정 전반을 조정한다.",
    children:[
    {name:"국무총리 소속 처",nameEn:"PM Offices",type:"pm-group",children:[
      {name:"법제처",nameEn:"Ministry of Government Legislation",nameEnAbbr:"MOLEG",type:"office",head:"조원철",
        url:"https://www.moleg.go.kr",
        desc:"법령의 입안·심사·해석, 법제 정비, 행정심판을 담당한다.",budget:"920억",
        divisions:["법제정책국","행정법제국","경제법제국","사회문화법제국","법령해석국"]},
      {name:"인사혁신처",nameEn:"Ministry of Personnel Management",nameEnAbbr:"MPM",type:"office",head:"최동석",
        url:"https://www.mpm.go.kr",
        desc:"공무원 인사제도 기획, 채용·평가·보수, 공직윤리, 정부조직 관리를 담당한다.",budget:"7,600억",
        divisions:["인재채용국","인사혁신국","인사관리국","윤리복무국"],
      publicInstitutions:["공무원연금공단"]},
      {name:"식품의약품안전처",nameEn:"Ministry of Food and Drug Safety",nameEnAbbr:"MFDS",type:"office",head:"오유경",
        url:"https://www.mfds.go.kr",
        desc:"식품·의약품·의료기기·화장품의 안전관리, 인허가, 검사를 담당한다.",budget:"1.1조",
        divisions:["식품안전정책국","의약품안전국","바이오생약국","의료기기안전국"],
      publicInstitutions:["식품안전정보원","한국마약퇴치운동본부","한국식품안전관리인증원","한국의료기기안전정보원","한국의약품안전관리원"]},
      {name:"기획예산처",nameEn:"Ministry of Planning and Budget",nameEnAbbr:"MPB",type:"office",head:"박홍근",isNew:"2026.01 신설",
        url:"https://www.mpb.go.kr",
        desc:"국가 재정 운용 계획, 예산 편성·배분·집행 관리, 공공기관 관리를 담당한다. 기획재정부에서 예산 기능이 분리되어 신설.",
        divisions:["예산총괄국","예산관리국","재정혁신국","공공기관관리국"]},
      {name:"국가데이터처",nameEn:"Ministry of Data and Statistics",nameEnAbbr:"MODS",type:"office",head:"안형준",isNew:"통계청 승격",
        url:"https://mods.go.kr",
        desc:"국가 통계 생산·관리, 공공데이터 개방·활용, 데이터 기반 행정 혁신을 담당한다. 통계청에서 승격.",budget:"4,567억",
        divisions:["데이터정책국","통계기획국","통계분석국","국가통계센터"]},
      {name:"지식재산처",nameEn:"Ministry of Intellectual Property",nameEnAbbr:"MOIP",type:"office",head:"김용선",isNew:"특허청 승격",
        url:"https://www.kipo.go.kr",
        desc:"특허·실용신안·디자인·상표 등 산업재산권의 출원·심사·등록과 지식재산 정책을 담당한다. 특허청에서 승격.",budget:"6,308억",
        divisions:["특허심사정책국","상표디자인심사국","국제지식재산국","지식재산정책국"]}
    ]},
    {name:"국무총리 소속 위원회",nameEn:"PM Commissions",type:"pm-group",children:[
      {name:"공정거래위원회",nameEn:"Korea Fair Trade Commission",nameEnAbbr:"KFTC",type:"commission",head:"주병기",
        url:"https://www.ftc.go.kr",
        desc:"독과점 규제, 불공정거래 시정, 소비자 보호, 하도급 거래 감시 등 공정한 시장경쟁 질서를 확립한다.",budget:"1,900억",
        divisions:["경쟁정책국","소비자정책국","기업거래정책국"],
      publicInstitutions:["한국소비자원"]},
      {name:"금융위원회",nameEn:"Financial Services Commission",nameEnAbbr:"FSC",type:"commission",head:"이억원",
        url:"https://www.fsc.go.kr",
        desc:"금융정책 수립, 금융기관 인허가·감독, 자본시장 규제, 금융소비자 보호를 담당한다.",budget:"5.5조",
        divisions:["금융정책국","금융산업국","자본시장국","금융소비자국"],
      publicInstitutions:["신용보증기금","예금보험공사","한국자산관리공사","한국주택금융공사"]},
      {name:"국민권익위원회",nameEn:"Anti-corruption & Civil Rights Commission",nameEnAbbr:"ACRC",type:"commission",head:"정일연",
        url:"https://www.acrc.go.kr",
        desc:"부패방지, 국민권익 보호, 고충민원 처리, 행정심판을 담당한다.",budget:"1,500억",
        divisions:["부패방지국","심사보호국","고충처리국","행정심판국","권익개선정책국"]},
      {name:"개인정보보호위원회",nameEn:"Personal Information Protection Commission",nameEnAbbr:"PIPC",type:"commission",head:"송경희",
        url:"https://www.pipc.go.kr",
        desc:"개인정보 보호 정책 수립, 개인정보 침해 조사·처분, AI 시대 데이터 보호 정책을 담당한다.",budget:"1,200억",
        divisions:["개인정보정책국","조사조정국"]},
      {name:"원자력안전위원회",nameEn:"Nuclear Safety and Security Commission",nameEnAbbr:"NSSC",type:"commission",head:"최원호",
        url:"https://www.nssc.go.kr",
        desc:"원자력 시설의 안전규제, 방사선 방호, 원자력 안전 연구·기술 개발을 담당한다.",budget:"2,800억",
        divisions:["안전정책국","방사선방재국"],
      publicInstitutions:["한국원자력안전기술원","한국원자력안전재단","한국원자력통제기술원"]}
    ]},
    {name:"총리 직속",nameEn:"PM Direct",type:"pm-group",children:[
      {name:"국무조정실",nameEn:"Office for Government Policy Coordination",nameEnAbbr:"OPC",type:"pm-sub",head:"윤창렬",
        url:"https://www.opc.go.kr",
        desc:"각 부처 간 정책 조정, 정부업무 평가, 규제개혁, 정부 합동감사를 담당한다.",budget:"5,600억"},
      {name:"국무총리비서실",nameEn:"Prime Minister's Secretariat",nameEnAbbr:"PMS",type:"pm-sub",head:"민기",
        url:"https://www.opm.go.kr",
        desc:"국무총리의 국정 운영을 보좌하고, 국무회의 안건 준비 등 비서 업무를 수행한다.",budget:"989억"}
    ]}
  ]},
  // ═══ 행정각부 ═══
  {name:"행정각부",nameEn:"Ministries",type:"ministries-group",children:[
    {name:"재정경제부",nameEn:"Ministry of Economy and Finance",nameEnAbbr:"MOEF",type:"ministry",head:"구윤철",badge:"경제부총리",
      url:"https://www.mofe.go.kr",
      desc:"거시 경제정책, 금융·세제·국고·국유재산 관리, 대외경제 협력을 담당한다. 기획재정부에서 분리.",
      budget:"29.2조",
      divisions:["세제실","국고국","경제정책국","대외경제국","국제금융국"],
      
      publicInstitutions:["한국재정정보원","한국조폐공사","예금보험공사","한국자산관리공사","신용보증기금","한국주택금융공사"],
      children:[
        {name:"국세청",nameEn:"National Tax Service",nameEnAbbr:"NTS",type:"agency",head:"임광현",
          url:"https://www.nts.go.kr",desc:"내국세의 부과·징수, 세무조사, 탈세 방지를 담당한다.",budget:"2.2조",
        divisions:["징세법무국","개인납세국","법인납세국","자산과세국","조사국","국제조세관리관"]},
        {name:"관세청",nameEn:"Korea Customs Service",nameEnAbbr:"KCS",type:"agency",head:"이명구",
          url:"https://www.customs.go.kr",desc:"수출입 통관, 관세 부과·징수, 밀수 단속, FTA 원산지 관리를 담당한다.",budget:"8,900억",
        divisions:["통관국","심사국","조사국","국제관세협력국","관세국경위험관리센터"],
      publicInstitutions:["한국원산지정보원"]},
        {name:"조달청",nameEn:"Public Procurement Service",nameEnAbbr:"PPS",type:"agency",head:"백승보",
          url:"https://www.pps.go.kr",desc:"정부 물자 조달, 공공 계약, 나라장터 운영, 비축 물자 관리를 담당한다.",budget:"4,200억",
        divisions:["디지털공정조달국","구매사업국","기술서비스국","시설사업국","공공물자국"]}
    ]},
    {name:"과학기술정보통신부",nameEn:"Ministry of Science and ICT",nameEnAbbr:"MSIT",type:"ministry",head:"배경훈",badge:"과학기술부총리",
      url:"https://www.msit.go.kr",
      desc:"과학기술·ICT 정책, 국가 R&D, AI·데이터·우주·원자력 진흥, 정보통신 산업 육성을 담당한다.",
      budget:"20.5조",
      divisions:["과학기술혁신본부","연구개발정책국","정보통신정책국","AI디지털정책국","우주기술정책국"],
      
      publicInstitutions:["(재)우체국금융개발원","(재)우체국물류지원단","한국방송통신전파진흥원","한국연구재단","한국인터넷진흥원","한국지능정보사회진흥원","정보통신기획평가원"],
      children:[
        {name:"우주항공청",nameEn:"Korea AeroSpace Administration",nameEnAbbr:"KASA",type:"agency",head:"오태석",
          url:"https://www.kasa.go.kr",desc:"우주개발, 항공우주 연구, 위성 발사 및 운영을 담당한다. 2024년 신설.",budget:"8,000억",
        divisions:["우주항공정책국","우주항공산업국","우주항공임무본부"]}
    ]},
    {name:"교육부",nameEn:"Ministry of Education",nameEnAbbr:"MOE",type:"ministry",head:"최교진",
      url:"https://www.moe.go.kr",
      desc:"학교 교육·평생교육 정책, 교원 양성·관리, 학술·인재 양성, 교육과정 편성을 담당한다.",
      budget:"106.4조",
      divisions:["학교혁신지원국","교육자치협력국","인재양성정책국","평생직업교육국"],
      publicInstitutions:["국가평생교육진흥원","사립학교교직원연금공단","한국교육학술정보원","한국장학재단","한국학중앙연구원","동북아역사재단"]},
    {name:"외교부",nameEn:"Ministry of Foreign Affairs",nameEnAbbr:"MOFA",type:"ministry",head:"조현",
      url:"https://www.mofa.go.kr",
      desc:"외교정책 수립·시행, 재외국민 보호, 국제기구 협력, 통상교섭 지원을 담당한다.",
      budget:"3.2조",
      divisions:["기획조정실","아시아태평양국","북미국","유럽국","국제기구국","통상교섭본부"],
      
      publicInstitutions:["한국국제교류재단","한국국제협력단"],
      children:[
        {name:"재외동포청",nameEn:"Overseas Koreans Agency",nameEnAbbr:"OKA",type:"agency",head:"김경협",
          url:"https://www.oka.go.kr",desc:"재외동포의 권익 보호, 교육·문화 지원, 네트워크 구축을 담당한다. 2023년 신설.",budget:"1,127억",
        divisions:["재외동포정책국","교류협력국"],
      publicInstitutions:["재외동포협력센터"]}
    ]},
    {name:"통일부",nameEn:"Ministry of Unification",nameEnAbbr:"MOU",type:"ministry",head:"정동영",
      url:"https://www.unikorea.go.kr",
      desc:"남북관계 발전, 통일정책 수립, 남북 교류·협력, 북한이탈주민 정착 지원을 담당한다.",
      budget:"2.1조",
      divisions:["통일정책국","교류협력국","인도협력국"]},
    {name:"법무부",nameEn:"Ministry of Justice",nameEnAbbr:"MOJ",type:"ministry",head:"정성호",
      url:"https://www.moj.go.kr",
      desc:"검찰·법무 행정, 인권 보호, 출입국·이민 관리, 교정·보호 업무를 담당한다.",
      budget:"4.7조",
      divisions:["기획조정실","법무실","인권국","교정본부","출입국·외국인정책본부"],
      children:[
        {name:"검찰청",nameEn:"Supreme Prosecutors' Office",nameEnAbbr:"SPO",type:"agency",
          url:"https://www.spo.go.kr",
          desc:"검찰 사무를 총괄하며 공소 유지, 형사사법 절차 지원, 범죄 피해자 보호 등을 담당한다."},
        {name:"공소청",nameEn:"Public Prosecution Office",type:"agency",status:"planned",isNew:"2026.10 신설예정",
          desc:"검찰청 폐지 후 기소 기능을 전담하는 신설 기관. 수사·기소 분리 원칙에 따라 설립 예정."}
    ]},
    {name:"국방부",nameEn:"Ministry of National Defense",nameEnAbbr:"MND",type:"ministry",head:"안규백",
      url:"https://www.mnd.go.kr",
      desc:"국방정책 수립, 군사력 건설·운용, 병역 행정, 방위산업 육성을 담당한다.",
      budget:"65.9조",
      divisions:["국방정책실","전력자원관리실","국방개혁실"],
      children:[
        {name:"병무청",nameEn:"Military Manpower Administration",nameEnAbbr:"MMA",type:"agency",head:"홍소영",
          url:"https://www.mma.go.kr",desc:"병역 자원 관리, 징·소집, 병역 판정 검사, 대체복무 관리를 담당한다.",budget:"9,800억",
        divisions:["병역자원국","입영동원국","사회복무국"]},
        {name:"방위사업청",nameEn:"Defense Acquisition Program Administration",nameEnAbbr:"DAPA",type:"agency",head:"이용철",
          url:"https://www.dapa.go.kr",desc:"무기 체계 획득, 방위산업 육성, 군수품 조달, 국방과학기술 연구를 담당한다.",budget:"18.7조",
        divisions:["방위사업정책국","방위산업진흥국","국방기술개발보호국","기반전력사업본부","미래전력사업본부"],
      publicInstitutions:["국방전직교육원","전쟁기념사업회","한국국방연구원","국방과학연구소","국방기술품질원","국방기술진흥연구소"]}
    ]},
    {name:"행정안전부",nameEn:"Ministry of the Interior and Safety",nameEnAbbr:"MOIS",type:"ministry",head:"윤호중",
      url:"https://www.mois.go.kr",
      desc:"지방자치·행정, 재난안전 관리, 전자정부, 공무원 제도, 선거 지원을 담당한다.",
      budget:"73.5조",
      divisions:["기획조정실","지방자치분권실","안전정책실","디지털정부실"],
      publicInstitutions:["(재)일제강제동원피해자지원재단","민주화운동기념사업회","한국승강기안전공단","한국도로교통공단","한국소방산업기술원"],
      children:[
        {name:"경찰청",nameEn:"National Police Agency",nameEnAbbr:"NPA",type:"agency",head:"유재성",
          url:"https://www.police.go.kr",desc:"치안 유지, 범죄 수사, 교통 관리, 정보·보안 업무를 수행한다.",budget:"14.3조",
        divisions:["생활안전교통국","범죄예방대응국","경비국","국제협력관","국가수사본부"],
      publicInstitutions:["한국도로교통공단"]},
        {name:"소방청",nameEn:"National Fire Agency",nameEnAbbr:"NFA",type:"agency",head:"김승룡",
          url:"https://www.nfa.go.kr",desc:"화재 예방·진압, 구조·구급, 소방산업 육성을 담당한다.",budget:"1.5조",
        divisions:["119대응국","화재예방국","장비기술국","119종합상황실"],
      publicInstitutions:["한국소방산업기술원"]},
        {name:"중대범죄수사청",nameEn:"Serious Crimes Investigation",type:"agency",status:"planned",isNew:"2026.10 신설예정",
          desc:"검찰청 폐지 후 중대범죄 수사를 전담하는 신설 기관. 수사·기소 분리 원칙에 따라 설립 예정."}
    ]},
    {name:"문화체육관광부",nameEn:"Ministry of Culture, Sports and Tourism",nameEnAbbr:"MCST",type:"ministry",head:"최휘영",
      url:"https://www.mcst.go.kr",
      desc:"문화·예술·체육·관광 정책, 콘텐츠 산업 육성, 국정 홍보, 종교 업무를 담당한다.",
      budget:"7.5조",
      divisions:["문화정책국","예술정책국","체육국","관광국","미디어정책국"],
      
      publicInstitutions:["(재)예술경영지원센터","게임물관리위원회","국제방송교류재단","그랜드코리아레저(주)","대한체육회","서울올림픽기념국민체육진흥공단","영화진흥위원회","예술의전당","태권도진흥재단","한국공예디자인문화진흥원","한국관광공사","한국문학번역원","한국방송광고진흥공사","한국언론진흥재단","한국저작권위원회","국가유산진흥원"],
      children:[
        {name:"국가유산청",nameEn:"Korea Heritage Service",nameEnAbbr:"KHS",type:"agency",head:"허민",
          url:"https://www.khs.go.kr",desc:"국가유산(문화재)의 보존·관리·활용, 매장문화재 조사, 세계유산 등재를 담당한다.",budget:"1.3조",
        divisions:["유산정책국","문화유산국","자연유산국","무형유산국"],
      publicInstitutions:["국가유산진흥원"]}
    ]},
    {name:"농림축산식품부",nameEn:"Ministry of Agriculture, Food and Rural Affairs",nameEnAbbr:"MAFRA",type:"ministry",head:"송미령",
      url:"https://www.mafra.go.kr",
      desc:"농업·축산·식품 산업 정책, 농가 소득 지원, 식량 안보, 농촌 발전을 담당한다.",
      budget:"18.2조",
      divisions:["농업정책국","식량정책국","축산정책국","식품산업정책국","농촌정책국"],
      
      publicInstitutions:["가축위생방역지원본부","농림수산식품교육문화정보원","농업정책보험금융원","축산물품질평가원","한국농수산식품유통공사","한국농어촌공사","한국마사회","한국식품산업클러스터진흥원","한식진흥원","한국농업기술진흥원","한국등산·트레킹지원센터","한국산림복지진흥원","한국수목원정원관리원","한국임업진흥원"],
      children:[
        {name:"농촌진흥청",nameEn:"Rural Development Administration",nameEnAbbr:"RDA",type:"agency",head:"이승돈",
          url:"https://www.rda.go.kr",desc:"농업 기술 연구·개발, 농촌지도, 농업인 교육 훈련을 담당한다.",budget:"1.6조",
        divisions:["연구정책국","농촌지원국","기술협력국"],
      publicInstitutions:["한국농업기술진흥원"]},
        {name:"산림청",nameEn:"Korea Forest Service",nameEnAbbr:"KFS",type:"agency",head:"박은식",
          url:"https://www.forest.go.kr",desc:"산림 보전·조성, 산불 예방, 산림 자원 활용, 임업 육성을 담당한다.",budget:"3.1조",
        divisions:["산림산업정책국","산림복지국","산림보호국","산림재난통제관"],
      publicInstitutions:["한국등산·트레킹지원센터","한국산림복지진흥원","한국수목원정원관리원","한국임업진흥원","한국치산기술협회"]}
    ],
      publicInstitutions:["한국산림복지진흥원","한국수목원정원관리원"]},
    {name:"산업통상부",nameEn:"Ministry of Trade, Industry and Resources",nameEnAbbr:"MOTIR",type:"ministry",head:"김정관",isNew:"명칭변경",
      url:"https://www.motir.go.kr",
      desc:"산업정책, 무역·통상, 에너지 자원 관리를 담당한다. 산업통상자원부에서 에너지 기능을 기후에너지환경부로 이관 후 명칭 변경.",
      budget:"12.8조",
      divisions:["산업정책국","첨단산업정책국","무역투자실","통상교섭본부"],
      publicInstitutions:["강원랜드","대한무역투자진흥공사","한국가스기술공사","한국가스공사","한국가스안전공사","한국광해광업공단","한국남동발전","한국남부발전","한국동서발전","한국무역보험공사","한국산업기술기획평가원","한국산업기술진흥원","한국산업단지공단","한국서부발전","한국석유공사","한국석유관리원","한국수력원자력","한국에너지공단","한국원자력환경공단","한국전기안전공사","한국전력거래소","한국전력공사","한국전력기술주식회사","한국중부발전","한국지역난방공사","한전KDN","한전KPS"]},
    {name:"보건복지부",nameEn:"Ministry of Health and Welfare",nameEnAbbr:"MOHW",type:"ministry",head:"정은경",
      url:"https://www.mohw.go.kr",
      desc:"보건의료, 사회복지, 연금·건강보험, 저출산·고령사회, 장애인 정책을 담당한다.",
      budget:"137.5조",
      divisions:["보건의료정책국","건강보험정책국","사회복지정책국","인구정책국","장애인정책국"],
      
      publicInstitutions:["(재)한국보건의료정보원","건강보험심사평가원","국립암센터","국립중앙의료원","국민건강보험공단","국민연금공단","아동권리보장원","의료기관평가인증원","한국건강증진개발원","한국노인인력개발원","한국보건복지인재원","한국보건산업진흥원","한국사회보장정보원","한국의료분쟁조정중재원","국민건강보험공단 일산병원","서울요양원"],
      children:[
        {name:"질병관리청",nameEn:"Korea Disease Control and Prevention Agency",nameEnAbbr:"KDCA",type:"agency",head:"임승관",
          url:"https://www.kdca.go.kr",desc:"감염병 예방·관리, 예방접종, 만성질환 관리, 검역·방역을 담당한다.",budget:"1.8조",
        divisions:["감염병정책국","감염병위기관리국","진단분석국","의료안전예방국","만성질환관리국"]}
    ]},
    {name:"기후에너지환경부",nameEn:"Ministry of Climate, Energy and Environment",nameEnAbbr:"MCEE",type:"ministry",head:"김성환",isNew:"2025.10 개편",
      url:"https://www.mcee.go.kr",
      desc:"기후변화 대응, 탄소중립, 에너지 전환, 대기·수질·토양 환경보전, 자원순환을 담당한다. 환경부에 에너지 기능을 통합하여 개편.",
      budget:"14.3조",
      divisions:["기후정책국","에너지정책국","환경보전국","물환경정책국","자원순환국"],
      
      publicInstitutions:["국립공원공단","국립생태원","한국수자원공사","한국환경공단","한국환경산업기술원","아시아·태평양경제협력체 기후센터","한국기상산업기술원"],
      children:[
        {name:"기상청",nameEn:"Korea Meteorological Administration",nameEnAbbr:"KMA",type:"agency",head:"이미선",
          url:"https://www.kma.go.kr",desc:"기상관측·예보, 기후변화 감시, 지진·화산 관측, 기상산업 육성을 담당한다.",budget:"5,200억",
        divisions:["예보국","관측기반국","기후과학국","기상서비스진흥국","지진화산국"],
      publicInstitutions:["아시아·태평양경제협력체 기후센터","차세대수치예보모델개발사업단","한국기상산업기술원"]}
    ]},
    {name:"고용노동부",nameEn:"Ministry of Employment and Labor",nameEnAbbr:"MOEL",type:"ministry",head:"김영훈",
      url:"https://www.moel.go.kr",
      desc:"고용정책, 직업능력 개발, 근로조건·노사관계, 산업안전·보건, 고용보험을 담당한다.",
      budget:"35.2조",
      divisions:["고용정책실","노동정책실","산업안전보건정책관"],
      publicInstitutions:["건설근로자공제회","근로복지공단","노사발전재단","학교법인한국폴리텍","한국고용노동교육원","한국고용정보원","한국기술교육대학교","한국사회적기업진흥원","한국산업안전보건공단","한국산업인력공단","한국잡월드","한국장애인고용공단"]},
    {name:"성평등가족부",nameEn:"Ministry of Gender Equality and Family",nameEnAbbr:"MOGEF",type:"ministry",head:"원민경",isNew:"명칭변경",
      url:"https://www.mogef.go.kr",
      desc:"성평등 정책, 가족·다문화 정책, 청소년 보호·육성, 양성평등 기본계획 수립을 담당한다. 여성가족부에서 명칭 변경.",
      budget:"1.5조",
      divisions:["성평등정책국","가족정책국","청소년정책국"]},
    {name:"국토교통부",nameEn:"Ministry of Land, Infrastructure and Transport",nameEnAbbr:"MOLIT",type:"ministry",head:"김윤덕",
      url:"https://www.molit.go.kr",
      desc:"국토 관리, 주택·부동산 정책, 도로·철도·항공 교통, 건설 산업을 담당한다.",
      budget:"28.9조",
      divisions:["주택토지실","건설정책국","도로국","철도국","항공정책국","교통물류실"],
      
      publicInstitutions:["공간정보품질관리원","국가철도공단","국토교통과학기술진흥원","국토안전관리원","새만금개발공사","인천국제공항공사","제주국제자유도시개발센터","주식회사 에스알","주택도시보증공사","한국공항공사","한국교통안전공단","한국국토정보공사","한국도로공사","한국부동산원","한국철도공사","한국토지주택공사"],
      children:[
        {name:"행정중심복합도시건설청",nameEn:"National Agency for Administrative City Construction",nameEnAbbr:"NAACC",type:"agency",head:"강주엽",
          url:"https://www.naacc.go.kr",desc:"세종특별자치시 행정중심복합도시 건설을 총괄한다.",budget:"2,904억",
        divisions:["도시계획국","시설사업국"]},
        {name:"새만금개발청",nameEn:"Saemangeum Development and Investment Agency",nameEnAbbr:"SDIA",type:"agency",head:"김의겸",
          url:"https://www.saemangeum.go.kr",desc:"새만금 종합개발 사업의 계획·시행·관리를 담당한다.",budget:"1.2조",
        divisions:["개발전략국","개발사업국"]}
    ]},
    {name:"해양수산부",nameEn:"Ministry of Oceans and Fisheries",nameEnAbbr:"MOF",type:"ministry",head:"황종우",
      url:"https://www.mof.go.kr",
      desc:"해양정책, 수산업 진흥, 항만 건설·운영, 해양환경 보전, 해운·물류를 담당한다.",
      budget:"7.8조",
      divisions:["해양정책국","수산정책국","항만국","해운물류국"],
      
      publicInstitutions:["국립해양과학관","국립해양박물관","국립해양생물자원관","부산항만공사","여수광양항만공사","울산항만공사","인천항만공사","한국수산자원공단","한국어촌어항공단","한국해양교통안전공단","한국해양수산연수원","한국해양진흥공사","해양수산과학기술진흥원","해양환경공단"],
      children:[
        {name:"해양경찰청",nameEn:"Korea Coast Guard",nameEnAbbr:"KCG",type:"agency",head:"장인식",
          url:"https://www.kcg.go.kr",desc:"해양에서의 치안·경비, 해양 수색·구조, 해양오염 방제를 담당한다.",budget:"2.1조",
        divisions:["경비국","구조안전국","수사국","국제정보국","해양오염방제국"]}
    ]},
    {name:"중소벤처기업부",nameEn:"Ministry of SMEs and Startups",nameEnAbbr:"MSS",type:"ministry",head:"한성숙",
      url:"https://www.mss.go.kr",
      desc:"중소기업·소상공인·벤처·스타트업 정책, 기술혁신 지원, 창업 생태계 조성을 담당한다.",
      budget:"18.4조",
      divisions:["기획조정실","중소기업정책국","창업벤처혁신국","소상공인정책국"],
      publicInstitutions:["(주)공영홈쇼핑","기술보증기금","소상공인시장진흥공단","신용보증재단중앙회","중소기업기술정보진흥원","중소벤처기업연구원","중소벤처기업진흥공단","창업진흥원","한국벤처투자","한국중소벤처기업유통원"]},
    {name:"국가보훈부",nameEn:"Ministry of Patriots and Veterans Affairs",nameEnAbbr:"MPVA",type:"ministry",head:"권오을",
      url:"https://www.mpva.go.kr",
      desc:"국가유공자·보훈대상자의 예우·지원, 보훈의료, 독립유공자 발굴·선양을 담당한다.",
      budget:"6.8조",
      divisions:["보훈정책국","보상정책국","제대군인정책국"]}
  ]}
]};

// ═══ 데이터 출처 ═══
const sources = [
  {id:"gov24-org",name:"정부24 중앙행정기관 조직도 (공식)",url:"https://www.gov.kr/portal/orgInfo",desc:"기관 분류·소속 체계의 1차 기준 (검증 기준일: 2026-04-07)",
      publicInstitutions:["88관광개발(주)","독립기념관","한국보훈복지의료공단"]},
  {id:"official-sites",name:"각 부처·기관 공식 홈페이지 (공식)",url:"https://www.gov.kr/portal/orgInfo",desc:"기관 업무·조직 설명, 공식 도메인 확인"},
  {id:"policy-briefing",name:"대한민국 정책브리핑 (공식)",url:"https://www.korea.kr",desc:"장관 후보자 지명, 차관급 인사 발표"},
  {id:"budget-2026-proposal",name:"2026년 정부 예산안·보도자료 (공식)",url:"https://www.mpb.go.kr",desc:"부처별 예산 규모 및 정책 변화 확인"},
  {id:"wiki-cabinet",name:"위키백과: 이재명 정부의 국무위원 (보조)",url:"https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%9E%AC%EB%AA%85_%EC%A0%95%EB%B6%80%EC%9D%98_%EA%B5%AD%EB%AC%B4%EC%9C%84%EC%9B%90",desc:"장관 프로필 사진 및 인사 이력 보조 확인"},
  {id:"wiki-lee-gov",name:"위키백과: 이재명 정부 (보조)",url:"https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%9E%AC%EB%AA%85_%EC%A0%95%EB%B6%80",desc:"정부 조직 개편 이력 보조 확인"},
  {id:"namu-personnel",name:"나무위키: 이재명 정부/인사 (보조)",url:"https://namu.wiki/w/%EC%9D%B4%EC%9E%AC%EB%AA%85%20%EC%A0%95%EB%B6%80/%EC%9D%B8%EC%82%AC",desc:"청장·처장·위원장급 인사 교차 확인"},
  {id:"krds",name:"KRDS 대한민국 정부 디자인 시스템",url:"https://www.krds.go.kr",desc:"UI/UX 디자인 가이드라인 참고"},
  {id:"data-go-kr-org",name:"공공데이터포털: 정부조직도 기구정보 (공식)",url:"https://www.data.go.kr/data/15147671/fileData.do",desc:"공식 영문명·약어, 기관코드, 조직 계층 구조 (정부조직법 2025-10-01 기준)"},
  {id:"data-go-kr-budget",name:"공공데이터포털: 부처별 예산현황 (공식)",url:"https://www.data.go.kr/data/15095848/fileData.do",desc:"기획재정부 부처별 세출예산 (2024 정부안 기준, 누락 기관 보완용)"},
  {id:"data-go-kr-public-institutions",name:"공공데이터포털: 공공기관 지정현황 (공식)",url:"https://www.data.go.kr/data/15088742/fileData.do",desc:"재정경제부 공공기관 지정현황 344개 (2025-05-26 기준, 공기업·준정부기관)"}
];

const SOURCE_METADATA_DEFAULTS={
  "gov24-org":{datasetId:"gov.kr-orgInfo",publisher:"행정안전부 정부24",sourceType:"official-directory",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"정부24 중앙행정기관 조직도 페이지를 기준 디렉터리로 사용"},
  "official-sites":{datasetId:"official-site-cross-check",publisher:"각 중앙행정기관",sourceType:"official-website",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"기관별 공식 홈페이지의 조직/업무 소개 페이지로 교차 검증"},
  "policy-briefing":{datasetId:"korea.kr-personnel-briefings",publisher:"대한민국 정책브리핑",sourceType:"official-newsroom",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"정부 인사·조직 개편 관련 공식 보도자료 및 브리핑을 확인"},
  "budget-2026-proposal":{datasetId:"2026-government-budget-proposal",publisher:"기획예산처·대한민국 정부",sourceType:"official-budget-doc",lastVerified:"2026-04-08",updateCadence:"연간",methodology:"2026년 정부 예산안 및 부처별 보도자료 기준의 display budget 사용"},
  "wiki-cabinet":{datasetId:"wikipedia-cabinet-reference",publisher:"Wikipedia contributors",sourceType:"reference-secondary",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"공개 라이선스 사진·인사 보조 확인용 2차 출처"},
  "wiki-lee-gov":{datasetId:"wikipedia-lee-government-reference",publisher:"Wikipedia contributors",sourceType:"reference-secondary",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"정부 개편 이력 보조 확인용 2차 출처"},
  "namu-personnel":{datasetId:"namuwiki-personnel-reference",publisher:"namu.wiki",sourceType:"reference-secondary",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"차관급/청장급 인사 보조 확인용 2차 출처"},
  "krds":{datasetId:"krds-design-system",publisher:"대한민국 정부 디자인시스템",sourceType:"design-reference",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"UI 톤·패턴 참고용, 정책 데이터 source-of-truth 아님"},
  "data-go-kr-org":{datasetId:"15147671",publisher:"공공데이터포털",sourceType:"official-open-data",lastVerified:"2026-04-08",updateCadence:"수시",methodology:"정부조직도 기구정보 CSV의 기관코드·영문명·계층 구조를 기준값으로 사용"},
  "data-go-kr-budget":{datasetId:"15095848",publisher:"공공데이터포털",sourceType:"official-open-data",lastVerified:"2026-04-08",updateCadence:"연간",methodology:"부처별 예산현황 파일과 정부 예산안 자료를 함께 사용"},
  "data-go-kr-public-institutions":{datasetId:"15088742",publisher:"공공데이터포털",sourceType:"official-open-data",lastVerified:"2026-04-08",updateCadence:"연간",methodology:"공공기관 지정현황 파일 기준으로 공기업·준정부기관 소속을 연결"}
};

sources.forEach(source=>Object.assign(source,SOURCE_METADATA_DEFAULTS[source.id]||{}));

const ORG_SOURCE_DEFAULTS={datasetId:"15147671",sourceId:"data-go-kr-org",status:"official"};
const BUDGET_SOURCE_DEFAULTS={datasetId:"15095848",sourceId:"budget-2026-proposal",status:"derived"};

const orgCodeOverrides={
  "대한민국 정부":{orgCode:"ROOT-KR-GOV",orgCodeType:"synthetic-root",status:"synthetic",canonicalId:"kr-gov-root"},
  "대통령":{orgCode:"0000001",canonicalId:"org-0000001"},
  "국무총리":{orgCode:"0000002",canonicalId:"org-0000002"},
  "대통령비서실":{orgCode:"1011000",orgCodeType:"alias",status:"mapped-alias",canonicalId:"org-1011000",officialName:"대통령실"},
  "감사원":{orgCode:"1020000",canonicalId:"org-1020000"},
  "국가정보원":{orgCode:"1030000",canonicalId:"org-1030000"},
  "대통령경호처":{orgCode:"1012000",canonicalId:"org-1012000"},
  "법제처":{orgCode:"1170000",canonicalId:"org-1170000"},
  "인사혁신처":{orgCode:"1613000",canonicalId:"org-1613000"},
  "식품의약품안전처":{orgCode:"1471000",canonicalId:"org-1471000"},
  "공정거래위원회":{orgCode:"1130000",canonicalId:"org-1130000"},
  "금융위원회":{orgCode:"1160000",canonicalId:"org-1160000"},
  "국민권익위원회":{orgCode:"1140100",canonicalId:"org-1140100"},
  "개인정보보호위원회":{orgCode:"PIPC-KR",orgCodeType:"style-independent",status:"independent",canonicalId:"org-pipc-kr"},
  "원자력안전위원회":{orgCode:"1070000",canonicalId:"org-1070000"},
  "국무조정실":{orgCode:"1092000",canonicalId:"org-1092000"},
  "국무총리비서실":{orgCode:"1091000",canonicalId:"org-1091000"},
  "과학기술정보통신부":{orgCode:"1721000",canonicalId:"org-1721000"},
  "교육부":{orgCode:"1342000",canonicalId:"org-1342000"},
  "외교부":{orgCode:"1262000",canonicalId:"org-1262000"},
  "통일부":{orgCode:"1250000",canonicalId:"org-1250000"},
  "법무부":{orgCode:"1270000",canonicalId:"org-1270000"},
  "국방부":{orgCode:"1290000",canonicalId:"org-1290000"},
  "행정안전부":{orgCode:"MOIS-2025",orgCodeType:"style-provisional",status:"provisional",canonicalId:"org-mois-2025"},
  "문화체육관광부":{orgCode:"1371000",canonicalId:"org-1371000"},
  "농림축산식품부":{orgCode:"1543000",canonicalId:"org-1543000"},
  "보건복지부":{orgCode:"1352000",canonicalId:"org-1352000"},
  "고용노동부":{orgCode:"1492000",canonicalId:"org-1492000"},
  "국토교통부":{orgCode:"MOLIT-2025",orgCodeType:"style-provisional",status:"provisional",canonicalId:"org-molit-2025"},
  "해양수산부":{orgCode:"1192000",canonicalId:"org-1192000"},
  "중소벤처기업부":{orgCode:"1421000",canonicalId:"org-1421000"},
  "국가보훈부":{orgCode:"1180000",canonicalId:"org-1180000"},
  "국세청":{orgCode:"1210000",canonicalId:"org-1210000"},
  "관세청":{orgCode:"1220000",canonicalId:"org-1220000"},
  "조달청":{orgCode:"1230000",canonicalId:"org-1230000"},
  "우주항공청":{orgCode:"1721692",canonicalId:"org-1721692"},
  "재외동포청":{orgCode:"1263000",canonicalId:"org-1263000"},
  "병무청":{orgCode:"1300000",canonicalId:"org-1300000"},
  "방위사업청":{orgCode:"1690000",canonicalId:"org-1690000"},
  "경찰청":{orgCode:"1320000",canonicalId:"org-1320000"},
  "소방청":{orgCode:"1661000",canonicalId:"org-1661000"},
  "국가유산청":{orgCode:"1550000",canonicalId:"org-1550000"},
  "농촌진흥청":{orgCode:"1390000",canonicalId:"org-1390000"},
  "산림청":{orgCode:"1400000",canonicalId:"org-1400000"},
  "질병관리청":{orgCode:"1790387",canonicalId:"org-1790387"},
  "기상청":{orgCode:"1360000",canonicalId:"org-1360000"},
  "행정중심복합도시건설청":{orgCode:"NAACC-2025",orgCodeType:"style-provisional",status:"provisional",canonicalId:"org-naacc"},
  "새만금개발청":{orgCode:"SDIA-2025",orgCodeType:"style-provisional",status:"provisional",canonicalId:"org-sdia"},
  "해양경찰청":{orgCode:"1532000",canonicalId:"org-1532000"},
  "고위공직자범죄수사처":{orgCode:"CIO-KR-2021",orgCodeType:"style-independent",status:"independent",canonicalId:"org-cio-kr"},
  "국가인권위원회":{orgCode:"NHRC-KR",orgCodeType:"style-independent",status:"independent",canonicalId:"org-nhrc-kr"},
  "기획예산처":{orgCode:"MPB-2026",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-mpb-2026",predecessorOrgCode:"1051000"},
  "국가데이터처":{orgCode:"MODS-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-mods-2025",predecessorOrgCode:"1242000"},
  "지식재산처":{orgCode:"MOIP-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-moip-2025",predecessorOrgCode:"1430000"},
  "재정경제부":{orgCode:"MOEF-2026",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-moef-2026",predecessorOrgCode:"1051000"},
  "산업통상부":{orgCode:"MOTIR-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-motir-2025",predecessorOrgCode:"1450000"},
  "기후에너지환경부":{orgCode:"MCEE-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-mcee-2025",predecessorOrgCode:"1480000"},
  "성평등가족부":{orgCode:"MOGEF-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-mogef-2025",predecessorOrgCode:"1383000"},
  "방송미디어통신위원회":{orgCode:"KMCC-2025",orgCodeType:"style-provisional",status:"planned-active",canonicalId:"org-kmcc-2025",predecessorOrgCode:"1570000"}
};

const nodeMetadata={
  "대한민국 정부":{effective:{from:"1948-08-15",to:null,status:"active"},sourceRefs:["gov24-org","data-go-kr-org"]},
  "기획예산처":{effective:{from:"2026-01-02",to:null,status:"active"},history:[{date:"2026-01-02",event:"split",summary:"기획재정부 예산 기능 분리로 신설.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "재정경제부":{effective:{from:"2026-01-02",to:null,status:"active"},history:[{date:"2026-01-02",event:"split",summary:"기획재정부에서 재정·세제·국고 기능을 중심으로 재편.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "국가데이터처":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"upgrade",summary:"통계청이 처급 기관으로 승격되어 국가데이터처로 개편.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "지식재산처":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"upgrade",summary:"특허청이 처급 기관으로 승격되어 지식재산처로 개편.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "산업통상부":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"rename",summary:"산업통상자원부에서 에너지 기능 분리 후 산업통상부로 명칭 변경.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "기후에너지환경부":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"reorg",summary:"환경부에 에너지 기능을 통합해 기후에너지환경부로 개편.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "성평등가족부":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"rename",summary:"여성가족부가 성평등가족부로 명칭 변경.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "방송미디어통신위원회":{effective:{from:"2025-10-01",to:null,status:"active"},history:[{date:"2025-10-01",event:"replace",summary:"방송통신위원회를 대체해 방송·미디어·통신 통합 규제기관으로 신설.",sourceRefs:["policy-briefing","wiki-lee-gov"]}]},
  "우주항공청":{effective:{from:"2024-05-27",to:null,status:"active"},history:[{date:"2024-05-27",event:"new",summary:"우주항공 전담 중앙행정기관으로 신설.",sourceRefs:["data-go-kr-org","policy-briefing"]}]},
  "재외동포청":{effective:{from:"2023-06-05",to:null,status:"active"},history:[{date:"2023-06-05",event:"new",summary:"재외동포 정책 전담기관으로 신설.",sourceRefs:["data-go-kr-org","policy-briefing"]}]},
  "국가유산청":{effective:{from:"2024-05-17",to:null,status:"active"},history:[{date:"2024-05-17",event:"rename",summary:"문화재청이 국가유산청으로 명칭 변경.",sourceRefs:["data-go-kr-org","policy-briefing"]}]},
  "질병관리청":{effective:{from:"2020-09-12",to:null,status:"active"},history:[{date:"2020-09-12",event:"upgrade",summary:"질병관리본부가 청으로 승격.",sourceRefs:["data-go-kr-org","official-sites"]}]},
  "공소청":{effective:{from:"2026-10-01",to:null,status:"planned"},history:[{date:"2026-10-01",event:"planned",summary:"검찰청 폐지 후 기소 기능을 전담하도록 계획된 기관.",sourceRefs:["wiki-lee-gov"]}]},
  "중대범죄수사청":{effective:{from:"2026-10-01",to:null,status:"planned"},history:[{date:"2026-10-01",event:"planned",summary:"수사·기소 분리 원칙에 따라 신설 예정인 중대범죄 수사기관.",sourceRefs:["wiki-lee-gov"]}]}
};

// BEGIN GENERATED POLICY INDICATORS (source: data/policy-indicators/*.json)
const policyIndicatorsByCanonicalId={
  "org-moef-2026": [
    {
      "id": "consumer-price-inflation",
      "name": "소비자물가상승률",
      "value": 2.3,
      "valueDisplay": "2.3%",
      "unit": "%",
      "year": 2025,
      "sourceId": "kosis-consumer-price",
      "sourceRefs": [
        "kosis-consumer-price"
      ],
      "datasetId": "KOSIS",
      "summary": "소비자물가 상승 폭. 거시경제 안정과 체감물가 관리의 대표 지표.",
      "trendDirection": "down",
      "trendLabel": "전년 3.6% → 2.3%",
      "series": [
        {
          "year": 2021,
          "value": 2.5
        },
        {
          "year": 2022,
          "value": 5.1
        },
        {
          "year": 2023,
          "value": 3.6
        },
        {
          "year": 2024,
          "value": 2.7
        },
        {
          "year": 2025,
          "value": 2.3
        }
      ],
      "target": {
        "value": 2,
        "display": "2% 내외",
        "label": "물가안정 목표"
      },
      "datasetName": "소비자물가상승률",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1J22003",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국"
    },
    {
      "id": "national-debt-gdp",
      "name": "국가채무비율",
      "value": 48.4,
      "valueDisplay": "48.4%",
      "unit": "% GDP",
      "year": 2025,
      "sourceId": "e-nara-fiscal-soundness",
      "sourceRefs": [
        "e-nara-fiscal-soundness"
      ],
      "datasetId": "e-나라지표",
      "summary": "재정 건전성을 보여주는 핵심 지표. 본예산·정부안 논의와 함께 자주 참조됨.",
      "trendDirection": "up",
      "trendLabel": "전년 47.4% → 48.4%",
      "series": [
        {
          "year": 2021,
          "value": 43.8
        },
        {
          "year": 2022,
          "value": 46.9
        },
        {
          "year": 2023,
          "value": 46.1
        },
        {
          "year": 2024,
          "value": 47.4
        },
        {
          "year": 2025,
          "value": 48.4
        }
      ],
      "datasetName": "국가채무비율",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1108",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국"
    },
    {
      "id": "tax-revenue-collected",
      "name": "국세수입 실적",
      "value": 382.4,
      "valueDisplay": "382.4조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "mofe-tax-revenue",
      "sourceRefs": [
        "mofe-tax-revenue"
      ],
      "datasetId": "재정경제부",
      "summary": "내국세 징수 실적을 통해 재정 여력과 경기 흐름을 함께 읽을 수 있는 대표 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 344.1조 → 382.4조",
      "series": [
        {
          "year": 2021,
          "value": 293.5
        },
        {
          "year": 2022,
          "value": 395.9
        },
        {
          "year": 2023,
          "value": 344.1
        },
        {
          "year": 2024,
          "value": 367.3
        },
        {
          "year": 2025,
          "value": 382.4
        }
      ],
      "datasetName": "국세수입 실적",
      "sourceUrl": "https://www.moef.go.kr/",
      "sourcePublisher": "재정경제부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "재정경제부 세입결산·세입예산 보도자료 기반 연간 국세수입 집계값 사용.",
      "coverage": "전국"
    }
  ],
  "org-motir-2025": [
    {
      "id": "trade-balance",
      "name": "연간 수출액",
      "value": 714.2,
      "valueDisplay": "7,142억달러",
      "unit": "억달러",
      "year": 2025,
      "sourceId": "kosis-trade-balance",
      "sourceRefs": [
        "kosis-trade-balance"
      ],
      "datasetId": "KOSIS",
      "summary": "수출 중심 산업경쟁력과 통상 성과를 함께 보여주는 대표 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 6,836억달러 → 7,142억달러",
      "series": [
        {
          "year": 2021,
          "value": 6444
        },
        {
          "year": 2022,
          "value": 6836
        },
        {
          "year": 2023,
          "value": 6327
        },
        {
          "year": 2024,
          "value": 6836
        },
        {
          "year": 2025,
          "value": 7142
        }
      ],
      "target": {
        "value": 7300,
        "display": "7,300억달러",
        "label": "중기 수출 목표"
      },
      "datasetName": "수출입총괄",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=134&tblId=DT_134001_001",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "월간",
      "methodology": "KOSIS 무역통계 표 `DT_134001_001`(관세청, 수출입총괄)에서 최근 공표값을 사용한다. 현재 경제지표 카드는 이 표의 `수출액` 계열을 대표값으로 보여주며, 필요 시 동일 표의 수입액·무역수지와 함께 교차 해석할 수 있다.",
      "coverage": "전국"
    },
    {
      "id": "manufacturing-output-index",
      "name": "제조업 생산지수",
      "value": 109.4,
      "valueDisplay": "109.4",
      "unit": "2020=100",
      "year": 2025,
      "sourceId": "motie-industrial-output",
      "sourceRefs": [
        "motie-industrial-output"
      ],
      "datasetId": "산업통상부",
      "summary": "주력 제조업 가동과 산업활력의 흐름을 보여주는 기본 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 106.8 → 109.4",
      "series": [
        {
          "year": 2021,
          "value": 101.3
        },
        {
          "year": 2022,
          "value": 104.2
        },
        {
          "year": 2023,
          "value": 103.7
        },
        {
          "year": 2024,
          "value": 106.8
        },
        {
          "year": 2025,
          "value": 109.4
        }
      ],
      "datasetName": "제조업 생산지수",
      "sourceUrl": "https://www.motie.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "fdi-inflow",
      "name": "외국인직접투자 신고액",
      "value": 327,
      "valueDisplay": "327억달러",
      "unit": "억달러",
      "year": 2025,
      "sourceId": "motir-fdi-inflow",
      "sourceRefs": [
        "motir-fdi-inflow"
      ],
      "datasetId": "산업통상부",
      "summary": "산업 경쟁력과 투자 매력도를 보여주는 대표 통상·투자 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 304억달러 → 327억달러",
      "series": [
        {
          "year": 2021,
          "value": 295.1
        },
        {
          "year": 2022,
          "value": 304.5
        },
        {
          "year": 2023,
          "value": 284.7
        },
        {
          "year": 2024,
          "value": 304
        },
        {
          "year": 2025,
          "value": 327
        }
      ],
      "datasetName": "외국인직접투자 신고액",
      "sourceUrl": "https://www.motie.go.kr/",
      "sourcePublisher": "산업통상부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "산업통상부 외국인직접투자 동향 보도자료 기준 신고액 집계값.",
      "coverage": "전국"
    }
  ],
  "org-1421000": [
    {
      "id": "venture-investment",
      "name": "벤처투자 규모",
      "value": 11.9,
      "valueDisplay": "11.9조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "kosis-venture-investment",
      "sourceRefs": [
        "kosis-venture-investment"
      ],
      "datasetId": "KOSIS",
      "summary": "스타트업·벤처 생태계의 투자 활력을 보여주는 대표 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 10.7조 → 11.9조",
      "series": [
        {
          "year": 2021,
          "value": 15.9
        },
        {
          "year": 2022,
          "value": 12.5
        },
        {
          "year": 2023,
          "value": 10.9
        },
        {
          "year": 2024,
          "value": 10.7
        },
        {
          "year": 2025,
          "value": 11.9
        }
      ],
      "datasetName": "벤처투자 실적",
      "sourceUrl": "https://news.kvic.or.kr/article/2025-venture-investment-trend",
      "sourcePublisher": "한국벤처투자",
      "sourceType": "official-sector-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "실제 카드 값은 벤처투자 집행액 기준이므로 KOSIS 보조표 대신 한국벤처투자 벤처투자 동향 집계를 1차 근거로 사용.",
      "coverage": "전국",
      "qualityNote": "벤처투자조합 결성실적이 아닌 실제 투자 실적 기준으로 전환"
    },
    {
      "id": "small-business-digitalization",
      "name": "소상공인 디지털전환 지원 누적",
      "value": 198,
      "valueDisplay": "198만개사",
      "unit": "만개사",
      "year": 2025,
      "sourceId": "mss-digitalization",
      "sourceRefs": [
        "mss-digitalization"
      ],
      "datasetId": "중기부",
      "summary": "스마트상점·온라인 판로 등 디지털 전환 지원을 받은 소상공인 누적 규모.",
      "trendDirection": "up",
      "trendLabel": "전년 163만개사 → 198만개사",
      "series": [
        {
          "year": 2021,
          "value": 52
        },
        {
          "year": 2022,
          "value": 88
        },
        {
          "year": 2023,
          "value": 121
        },
        {
          "year": 2024,
          "value": 163
        },
        {
          "year": 2025,
          "value": 198
        }
      ],
      "datasetName": "소상공인 디지털전환",
      "sourceUrl": "https://www.mss.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국 소상공인"
    },
    {
      "id": "new-startups",
      "name": "신설법인 수",
      "value": 12.6,
      "valueDisplay": "12.6만개",
      "unit": "만개",
      "year": 2025,
      "sourceId": "mss-new-startups",
      "sourceRefs": [
        "mss-new-startups"
      ],
      "datasetId": "중소벤처기업부",
      "summary": "창업 생태계의 유입과 사업활동 활력을 보여주는 기초 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 11.9만개 → 12.6만개",
      "series": [
        {
          "year": 2021,
          "value": 10.3
        },
        {
          "year": 2022,
          "value": 10.9
        },
        {
          "year": 2023,
          "value": 11.2
        },
        {
          "year": 2024,
          "value": 11.9
        },
        {
          "year": 2025,
          "value": 12.6
        }
      ],
      "datasetName": "신설법인 수",
      "sourceUrl": "https://www.mss.go.kr/",
      "sourcePublisher": "중소벤처기업부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "중소벤처기업부 창업기업동향 및 신설법인 통계 기준 연간 값 사용.",
      "coverage": "전국"
    }
  ],
  "org-1721000": [
    {
      "id": "rnd-investment-gdp",
      "name": "국가연구개발투자 비중",
      "value": 5,
      "valueDisplay": "GDP의 5.0%",
      "unit": "% GDP",
      "year": 2024,
      "sourceId": "kosis-rnd-gdp",
      "sourceRefs": [
        "kosis-rnd-gdp"
      ],
      "datasetId": "KOSIS",
      "summary": "국가 전체 연구개발 투자 강도를 보여주는 핵심 과학기술 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 4.9% → 5.0%",
      "series": [
        {
          "year": 2020,
          "value": 4.8
        },
        {
          "year": 2021,
          "value": 4.9
        },
        {
          "year": 2022,
          "value": 4.9
        },
        {
          "year": 2023,
          "value": 4.9
        },
        {
          "year": 2024,
          "value": 5
        }
      ],
      "datasetName": "연구개발비 및 GDP 대비 연구개발비 비율",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=127&tblId=DT_KBA0001",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "KOSIS 연구개발활동조사 표 `DT_KBA0001`(과학기술정보통신부, 연구개발비 및 GDP 대비 연구개발비 비율)에서 최근 공표 연도값을 사용한다. 지표 카드의 퍼센트 값은 동일 표의 `GDP 대비 연구개발비 비율` 계열을 기준으로 해석한다.",
      "coverage": "전국"
    },
    {
      "id": "ict-exports",
      "name": "ICT 수출액",
      "value": 220.1,
      "valueDisplay": "220.1십억달러",
      "unit": "십억달러",
      "year": 2025,
      "sourceId": "e-nara-ict-exports",
      "sourceRefs": [
        "e-nara-ict-exports"
      ],
      "datasetId": "e-나라지표",
      "summary": "반도체·디스플레이·통신장비 등을 포함한 ICT 산업 수출 규모.",
      "trendDirection": "up",
      "trendLabel": "전년 205.4 → 220.1",
      "series": [
        {
          "year": 2021,
          "value": 214.9
        },
        {
          "year": 2022,
          "value": 233
        },
        {
          "year": 2023,
          "value": 180.3
        },
        {
          "year": 2024,
          "value": 205.4
        },
        {
          "year": 2025,
          "value": 220.1
        }
      ],
      "datasetName": "ICT 산업 수출입 동향",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2782",
      "sourcePublisher": "과학기술정보통신부 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "e-나라지표 idx_cd=2782 상세 페이지의 'ICT 산업 수출입 동향' 지표를 사용. 자료 출처는 ICT수출입통계(통계승인번호 제120021호)이며, 관세청 통관실적을 ICT산업분류 기준으로 재분류한 연간 공표값을 기준으로 함.",
      "coverage": "전국"
    },
    {
      "id": "ai-digital-service-users",
      "name": "AI·디지털 공공서비스 이용 규모",
      "value": 3280,
      "valueDisplay": "3,280만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "msit-ai-digital-service",
      "sourceRefs": [
        "msit-ai-digital-service"
      ],
      "datasetId": "과기정통부",
      "summary": "AI·데이터 기반 공공서비스와 디지털 전환 성과를 보여주는 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 2,610만건 → 3,280만건",
      "series": [
        {
          "year": 2021,
          "value": 840
        },
        {
          "year": 2022,
          "value": 1320
        },
        {
          "year": 2023,
          "value": 1890
        },
        {
          "year": 2024,
          "value": 2610
        },
        {
          "year": 2025,
          "value": 3280
        }
      ],
      "datasetName": "AI·디지털 공공서비스 이용규모",
      "sourceUrl": "https://www.msit.go.kr/",
      "sourcePublisher": "과학기술정보통신부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "과기정통부 디지털정부·AI 서비스 보도자료 및 사업실적 집계를 기준으로 연간 이용건수를 구성.",
      "coverage": "전국"
    }
  ],
  "org-1262000": [
    {
      "id": "oda-volume",
      "name": "공적개발원조(ODA) 규모",
      "value": 6.8,
      "valueDisplay": "6.8조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "e-nara-oda-volume",
      "sourceRefs": [
        "e-nara-oda-volume"
      ],
      "datasetId": "e-나라지표",
      "summary": "국제개발협력 재원의 확대 수준. 대외정책과 국제기여도를 함께 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 6.1조 → 6.8조",
      "series": [
        {
          "year": 2021,
          "value": 3.7
        },
        {
          "year": 2022,
          "value": 4.5
        },
        {
          "year": 2023,
          "value": 5.2
        },
        {
          "year": 2024,
          "value": 6.1
        },
        {
          "year": 2025,
          "value": 6.8
        }
      ],
      "datasetName": "ODA 원조규모",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1687",
      "sourcePublisher": "외교부 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "e-나라지표 idx_cd=1687 'ODA 원조규모' 상세 페이지를 사용. 순지출(net disbursement) 기준 ODA 총액을 기준으로 하며, 2018년 이후 OECD DAC grant equivalent 체계 전환에 유의.",
      "coverage": "대한민국 공여 ODA"
    },
    {
      "id": "overseas-koreans-support",
      "name": "재외국민 영사서비스 처리건수",
      "value": 128.4,
      "valueDisplay": "128.4만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "mofa-consular-services",
      "sourceRefs": [
        "mofa-consular-services"
      ],
      "datasetId": "외교부",
      "summary": "여권·공증·사건사고 지원 등 재외국민 대상 영사서비스 처리 규모.",
      "trendDirection": "up",
      "trendLabel": "전년 118.2만건 → 128.4만건",
      "series": [
        {
          "year": 2021,
          "value": 72
        },
        {
          "year": 2022,
          "value": 84.5
        },
        {
          "year": 2023,
          "value": 103.8
        },
        {
          "year": 2024,
          "value": 118.2
        },
        {
          "year": 2025,
          "value": 128.4
        }
      ],
      "datasetName": "영사서비스 처리 실적",
      "sourceUrl": "https://www.mofa.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "재외국민"
    },
    {
      "id": "passport-issuance",
      "name": "여권 발급 건수",
      "value": 789,
      "valueDisplay": "789만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "mofa-passport-issuance",
      "sourceRefs": [
        "mofa-passport-issuance"
      ],
      "datasetId": "외교부",
      "summary": "해외 이동 회복과 영사 행정 수요를 직접 보여주는 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 702만건 → 789만건",
      "series": [
        {
          "year": 2021,
          "value": 118
        },
        {
          "year": 2022,
          "value": 265
        },
        {
          "year": 2023,
          "value": 514
        },
        {
          "year": 2024,
          "value": 702
        },
        {
          "year": 2025,
          "value": 789
        }
      ],
      "datasetName": "여권 발급 건수",
      "sourceUrl": "https://www.mofa.go.kr/",
      "sourcePublisher": "외교부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "외교부 영사서비스 통계 및 여권 발급 실적 보도자료 기준.",
      "coverage": "내·외국민 여권 발급"
    }
  ],
  "org-1250000": [
    {
      "id": "north-defectors-support",
      "name": "북한이탈주민 정착지원 인원",
      "value": 2.2,
      "valueDisplay": "2.2천명",
      "unit": "천명",
      "year": 2025,
      "sourceId": "mou-settlement-support",
      "sourceRefs": [
        "mou-settlement-support"
      ],
      "datasetId": "통일부",
      "summary": "정착지원·교육·상담 등 정책 대상 규모를 보여주는 기본 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 2.0천명 → 2.2천명",
      "series": [
        {
          "year": 2021,
          "value": 1.4
        },
        {
          "year": 2022,
          "value": 1.5
        },
        {
          "year": 2023,
          "value": 1.7
        },
        {
          "year": 2024,
          "value": 2
        },
        {
          "year": 2025,
          "value": 2.2
        }
      ],
      "datasetName": "북한이탈주민 정착지원",
      "sourceUrl": "https://www.unikorea.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "북한이탈주민"
    },
    {
      "id": "inter-korean-humanitarian",
      "name": "남북 인도협력 사업 규모",
      "value": 1860,
      "valueDisplay": "1,860억원",
      "unit": "억원",
      "year": 2025,
      "sourceId": "e-nara-inter-korean-coop",
      "sourceRefs": [
        "e-nara-inter-korean-coop"
      ],
      "datasetId": "e-나라지표",
      "summary": "인도협력·교류 기반 사업의 집행 규모를 보여주는 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 1,420억 → 1,860억",
      "series": [
        {
          "year": 2021,
          "value": 820
        },
        {
          "year": 2022,
          "value": 970
        },
        {
          "year": 2023,
          "value": 1110
        },
        {
          "year": 2024,
          "value": 1420
        },
        {
          "year": 2025,
          "value": 1860
        }
      ],
      "datasetName": "남북교류협력 및 인도협력 사업 실적",
      "sourceUrl": "https://www.unikorea.go.kr/unikorea/business/NKExchange/",
      "sourcePublisher": "통일부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "통일부 남북교류협력 및 인도협력 사업 통계를 기준으로 대표 규모를 산출. 미확정 e-나라지표 루트 링크 대신 통일부 1차 자료로 대체.",
      "coverage": "남북 인도협력 사업",
      "qualityNote": "사업 승인·기금 집행 등 복수 통계를 묶은 대표값"
    },
    {
      "id": "inter-korean-exchange-projects",
      "name": "남북교류협력 승인 건수",
      "value": 412,
      "valueDisplay": "412건",
      "unit": "건",
      "year": 2025,
      "sourceId": "mou-inter-korean-exchange",
      "sourceRefs": [
        "mou-inter-korean-exchange"
      ],
      "datasetId": "통일부",
      "summary": "남북교류 협력의 제도적 가동 수준을 보여주는 기본 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 356건 → 412건",
      "series": [
        {
          "year": 2021,
          "value": 188
        },
        {
          "year": 2022,
          "value": 214
        },
        {
          "year": 2023,
          "value": 267
        },
        {
          "year": 2024,
          "value": 356
        },
        {
          "year": 2025,
          "value": 412
        }
      ],
      "datasetName": "남북교류협력 승인 건수",
      "sourceUrl": "https://www.unikorea.go.kr/",
      "sourcePublisher": "통일부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "통일부 남북교류협력 통계연보 및 승인 실적 자료 기준.",
      "coverage": "전국"
    }
  ],
  "org-1270000": [
    {
      "id": "major-crime-clearance-rate",
      "name": "주요 범죄 검거율",
      "value": 83.1,
      "valueDisplay": "83.1%",
      "unit": "%",
      "year": 2025,
      "sourceId": "kosis-crime-clearance",
      "sourceRefs": [
        "kosis-crime-clearance"
      ],
      "datasetId": "KOSIS",
      "summary": "형사사법 체계의 대응 성과를 보여주는 대표 치안·검찰 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 81.8% → 83.1%",
      "series": [
        {
          "year": 2021,
          "value": 78.4
        },
        {
          "year": 2022,
          "value": 79.6
        },
        {
          "year": 2023,
          "value": 80.7
        },
        {
          "year": 2024,
          "value": 81.8
        },
        {
          "year": 2025,
          "value": 83.1
        }
      ],
      "datasetName": "범죄 검거율",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=132&tblId=DT_13204_2004_1",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-10",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "경찰청 범죄통계 기반 KOSIS 상세표에서 주요 범죄 검거율 연간 값을 사용.",
      "coverage": "전국",
      "qualityNote": "경찰청 범죄통계 상세표 직접 연결"
    },
    {
      "id": "foreigner-arrivals",
      "name": "외국인 입국자 수",
      "value": 1715,
      "valueDisplay": "1,715만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "moj-immigration-arrivals",
      "sourceRefs": [
        "moj-immigration-arrivals"
      ],
      "datasetId": "법무부",
      "summary": "출입국·체류 행정 수요를 보여주는 대표 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 1,562만명 → 1,715만명",
      "series": [
        {
          "year": 2021,
          "value": 96
        },
        {
          "year": 2022,
          "value": 438
        },
        {
          "year": 2023,
          "value": 1104
        },
        {
          "year": 2024,
          "value": 1562
        },
        {
          "year": 2025,
          "value": 1715
        }
      ],
      "datasetName": "출입국통계",
      "sourceUrl": "https://www.immigration.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "registered-foreign-residents",
      "name": "등록외국인 체류자 수",
      "value": 156.2,
      "valueDisplay": "156.2만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "moj-resident-foreigners",
      "sourceRefs": [
        "moj-resident-foreigners"
      ],
      "datasetId": "법무부",
      "summary": "이민·체류 행정 수요와 국내 외국인 인구 규모를 보여주는 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 149.5만명 → 156.2만명",
      "series": [
        {
          "year": 2021,
          "value": 109.3
        },
        {
          "year": 2022,
          "value": 121.7
        },
        {
          "year": 2023,
          "value": 137.8
        },
        {
          "year": 2024,
          "value": 149.5
        },
        {
          "year": 2025,
          "value": 156.2
        }
      ],
      "datasetName": "등록외국인 체류자 수",
      "sourceUrl": "https://www.moj.go.kr/",
      "sourcePublisher": "법무부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "출입국·외국인정책본부 등록외국인 통계 기준 연말 체류자 수 사용.",
      "coverage": "전국"
    }
  ],
  "org-mois-2025": [
    {
      "id": "digital-government-index",
      "name": "디지털정부 온라인서비스 지수",
      "value": 0.92,
      "valueDisplay": "0.92",
      "unit": "index",
      "year": 2024,
      "sourceId": "un-digital-government",
      "sourceRefs": [
        "un-digital-government"
      ],
      "datasetId": "UN EGDI",
      "summary": "전자정부·디지털 행정의 국제적 성숙도를 보여주는 대표 지표.",
      "trendDirection": "up",
      "trendLabel": "전기 0.89 → 0.92",
      "series": [
        {
          "year": 2016,
          "value": 0.74
        },
        {
          "year": 2018,
          "value": 0.81
        },
        {
          "year": 2020,
          "value": 0.86
        },
        {
          "year": 2022,
          "value": 0.89
        },
        {
          "year": 2024,
          "value": 0.92
        }
      ],
      "target": {
        "value": 0.95,
        "display": "0.95",
        "label": "상위권 유지 목표"
      },
      "datasetName": "UN E-Government Survey Online Service Index",
      "sourceUrl": "https://publicadministration.desa.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024",
      "sourcePublisher": "United Nations DESA",
      "sourceType": "international-org",
      "lastVerified": "2026-04-08",
      "updateCadence": "격년",
      "methodology": "UN E-Government Survey 원문 지표 인용",
      "coverage": "국가 간 비교"
    },
    {
      "id": "disaster-safety-budget-local",
      "name": "지자체 재난안전 예산",
      "value": 19.8,
      "valueDisplay": "19.8조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "e-nara-disaster-budget",
      "sourceRefs": [
        "e-nara-disaster-budget"
      ],
      "datasetId": "e-나라지표",
      "summary": "재난 예방·대응 체계에 투입되는 지방정부 재정 규모.",
      "trendDirection": "up",
      "trendLabel": "전년 18.6조 → 19.8조",
      "series": [
        {
          "year": 2021,
          "value": 15.1
        },
        {
          "year": 2022,
          "value": 16
        },
        {
          "year": 2023,
          "value": 17.3
        },
        {
          "year": 2024,
          "value": 18.6
        },
        {
          "year": 2025,
          "value": 19.8
        }
      ],
      "datasetName": "지방자치단체 재난안전 분야 예산",
      "sourceUrl": "https://lofin.mois.go.kr/",
      "sourcePublisher": "행정안전부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "지방재정365 및 행정안전부 재난안전예산 집계를 기준으로 지자체 재난안전 분야 예산 총액을 대표값으로 사용. 포털 루트 대신 1차 재정 시스템을 연결.",
      "coverage": "지방정부",
      "qualityNote": "지방정부 예산 집계를 대표값으로 사용하며 세부 분류 기준은 연도별로 달라질 수 있음"
    },
    {
      "id": "local-tax-revenue",
      "name": "지방세 수입",
      "value": 122.6,
      "valueDisplay": "122.6조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "mois-local-tax-revenue",
      "sourceRefs": [
        "mois-local-tax-revenue"
      ],
      "datasetId": "행정안전부",
      "summary": "지방재정 기반과 지방정부 재정여력을 보여주는 핵심 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 118.4조 → 122.6조",
      "series": [
        {
          "year": 2021,
          "value": 105.9
        },
        {
          "year": 2022,
          "value": 112.7
        },
        {
          "year": 2023,
          "value": 115.6
        },
        {
          "year": 2024,
          "value": 118.4
        },
        {
          "year": 2025,
          "value": 122.6
        }
      ],
      "datasetName": "지방세 수입",
      "sourceUrl": "https://www.mois.go.kr/",
      "sourcePublisher": "행정안전부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "지방재정365 및 행정안전부 지방세 통계연감 기준 연간 지방세 수입 집계값.",
      "coverage": "전국 지방정부"
    }
  ],
  "org-1220000": [
    {
      "id": "customs-trade-total-exports",
      "name": "통관기준 수출액",
      "value": 683.7,
      "valueDisplay": "683.7십억달러",
      "unit": "십억달러",
      "year": 2024,
      "sourceId": "kosis-trade-balance",
      "sourceRefs": [
        "kosis-trade-balance"
      ],
      "datasetId": "KOSIS",
      "summary": "관세청 통관 실적 기준으로 집계되는 대표 지표. 관세행정·통관 물동량의 전체 규모를 가장 직접적으로 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 632.2 → 683.7",
      "series": [
        {
          "year": 2020,
          "value": 512.5
        },
        {
          "year": 2021,
          "value": 644.4
        },
        {
          "year": 2022,
          "value": 683.6
        },
        {
          "year": 2023,
          "value": 632.2
        },
        {
          "year": 2024,
          "value": 683.7
        }
      ],
      "datasetName": "수출입총괄",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=134&tblId=DT_134001_001",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "월간",
      "methodology": "KOSIS 무역통계 표 `DT_134001_001`(관세청, 수출입총괄)에서 최근 공표값을 사용한다. 현재 경제지표 카드는 이 표의 `수출액` 계열을 대표값으로 보여주며, 필요 시 동일 표의 수입액·무역수지와 함께 교차 해석할 수 있다.",
      "coverage": "전국"
    }
  ],
  "org-1471000": [
    {
      "id": "mfds-drug-approvals",
      "name": "의약품 허가·신고 처리건수",
      "value": 1724,
      "valueDisplay": "1,724건",
      "unit": "건",
      "year": 2024,
      "sourceId": "mfds-drug-approvals",
      "sourceRefs": [
        "mfds-drug-approvals"
      ],
      "datasetId": "식품의약품안전처 통계연보",
      "summary": "신약·자료제출의약품·제네릭 등을 포함한 허가·신고 처리 규모. 규제기관으로서 MFDS의 핵심 업무량을 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 1,608건 → 1,724건",
      "series": [
        {
          "year": 2020,
          "value": 1428
        },
        {
          "year": 2021,
          "value": 1512
        },
        {
          "year": 2022,
          "value": 1586
        },
        {
          "year": 2023,
          "value": 1608
        },
        {
          "year": 2024,
          "value": 1724
        }
      ],
      "datasetName": "의약품 허가·신고 현황",
      "sourceUrl": "https://www.mfds.go.kr",
      "sourcePublisher": "식품의약품안전처",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "식품의약품안전처 통계연보·통계간행물에 공표되는 연도별 의약품 허가·신고 처리 건수를 기준으로 사용한다. 상세 품목군 구분은 통계연보 최신판 기준으로 합산한다.",
      "coverage": "전국"
    }
  ],
  "org-1790387": [
    {
      "id": "kdca-child-vaccination-rate",
      "name": "국가예방접종 완전접종률(12개월)",
      "value": 97.2,
      "valueDisplay": "97.2%",
      "unit": "%",
      "year": 2024,
      "sourceId": "kdca-child-vaccination-rate",
      "sourceRefs": [
        "kdca-child-vaccination-rate"
      ],
      "datasetId": "예방접종등록관리정보시스템",
      "summary": "국가예방접종사업의 도달률을 보여주는 대표 운영지표. 질병관리청이 직접 관리하는 예방접종 등록자료 기반이다.",
      "trendDirection": "up",
      "trendLabel": "전년 96.8% → 97.2%",
      "series": [
        {
          "year": 2020,
          "value": 96.4
        },
        {
          "year": 2021,
          "value": 96.6
        },
        {
          "year": 2022,
          "value": 96.9
        },
        {
          "year": 2023,
          "value": 96.8
        },
        {
          "year": 2024,
          "value": 97.2
        }
      ],
      "datasetName": "12개월 완전접종률",
      "sourceUrl": "https://nip.kdca.go.kr",
      "sourcePublisher": "질병관리청",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "질병관리청 예방접종등록관리정보시스템 및 국가예방접종사업 연보에 공표되는 12개월 완전접종률을 기준으로 사용한다. 행정등록 기반이라 KDCA 소관업무와 직접 대응한다.",
      "coverage": "전국 영아"
    }
  ],
  "org-1230000": [
    {
      "id": "pps-narajangteo-contracts",
      "name": "나라장터 조달계약 규모",
      "value": 196.4,
      "valueDisplay": "196.4조원",
      "unit": "조원",
      "year": 2024,
      "sourceId": "pps-narajangteo-contracts",
      "sourceRefs": [
        "pps-narajangteo-contracts"
      ],
      "datasetId": "조달청 연보",
      "summary": "나라장터를 통해 체결된 공공조달 계약 총액. 조달청의 플랫폼·구매 집행 규모를 가장 직관적으로 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 188.9조 → 196.4조",
      "series": [
        {
          "year": 2020,
          "value": 161.1
        },
        {
          "year": 2021,
          "value": 171.5
        },
        {
          "year": 2022,
          "value": 180.6
        },
        {
          "year": 2023,
          "value": 188.9
        },
        {
          "year": 2024,
          "value": 196.4
        }
      ],
      "datasetName": "나라장터 조달계약 규모",
      "sourceUrl": "https://www.pps.go.kr",
      "sourcePublisher": "조달청",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "조달청 연보와 나라장터 운영실적에 공표되는 연간 조달계약 총액을 대표값으로 사용한다. 중앙·지방·공공기관이 나라장터를 통해 체결한 계약 총액 기준이다.",
      "coverage": "전국 공공조달"
    }
  ],
  "org-1342000": [
    {
      "id": "private-education-monthly",
      "name": "학생 1인당 월평균 사교육비",
      "value": 47.4,
      "valueDisplay": "47.4만원",
      "unit": "만원/월",
      "year": 2024,
      "sourceId": "kosis-private-education",
      "sourceRefs": [
        "kosis-private-education"
      ],
      "datasetId": "KOSIS",
      "summary": "초중고 학생의 사교육비 부담 수준. 교육격차·공교육 체감도와 자주 같이 해석된다.",
      "trendDirection": "up",
      "trendLabel": "전년 43.4만원 → 47.4만원",
      "series": [
        {
          "year": 2020,
          "value": 30.2
        },
        {
          "year": 2021,
          "value": 36.7
        },
        {
          "year": 2022,
          "value": 41
        },
        {
          "year": 2023,
          "value": 43.4
        },
        {
          "year": 2024,
          "value": 47.4
        }
      ],
      "datasetName": "학생 1인당 월평균 사교육비",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=354&tblId=DT_HIRA4A",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국 초중고"
    },
    {
      "id": "higher-education-enrollment",
      "name": "고등교육기관 진학률",
      "value": 76.2,
      "valueDisplay": "76.2%",
      "unit": "%",
      "year": 2024,
      "sourceId": "kosis-higher-education",
      "sourceRefs": [
        "kosis-higher-education"
      ],
      "datasetId": "KOSIS",
      "summary": "고등학교 졸업자의 대학 등 진학 비중.",
      "trendDirection": "down",
      "trendLabel": "전년 대비 소폭 하락",
      "series": [
        {
          "year": 2020,
          "value": 72.5
        },
        {
          "year": 2021,
          "value": 75.2
        },
        {
          "year": 2022,
          "value": 76.4
        },
        {
          "year": 2023,
          "value": 76.9
        },
        {
          "year": 2024,
          "value": 76.2
        }
      ],
      "datasetName": "고등교육기관 진학률",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=334&tblId=DT_1YL20991",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국 고졸자"
    },
    {
      "id": "students-per-teacher",
      "name": "교원 1인당 학생 수",
      "value": 11.8,
      "valueDisplay": "11.8명",
      "unit": "명",
      "year": 2024,
      "sourceId": "kosis-students-per-teacher",
      "sourceRefs": [
        "kosis-students-per-teacher"
      ],
      "datasetId": "KOSIS",
      "summary": "학급 밀도와 교육여건을 간접적으로 보여주는 대표 교육 지표.",
      "trendDirection": "down",
      "trendLabel": "전년 12.1명 → 11.8명",
      "series": [
        {
          "year": 2020,
          "value": 13.2
        },
        {
          "year": 2021,
          "value": 12.8
        },
        {
          "year": 2022,
          "value": 12.5
        },
        {
          "year": 2023,
          "value": 12.1
        },
        {
          "year": 2024,
          "value": 11.8
        }
      ],
      "datasetName": "교원 1인당 학생 수",
      "sourceUrl": "https://kosis.kr/",
      "sourcePublisher": "교육부 / KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "교육기본통계 기반 학생 수와 교원 수를 활용한 교원 1인당 학생 수 연간 지표.",
      "coverage": "전국"
    }
  ],
  "org-1352000": [
    {
      "id": "total-fertility-rate",
      "name": "합계출산율",
      "value": 0.75,
      "valueDisplay": "0.75명",
      "unit": "명",
      "year": 2024,
      "sourceId": "kosis-fertility-rate",
      "sourceRefs": [
        "kosis-fertility-rate"
      ],
      "datasetId": "KOSIS",
      "summary": "가임여성 1명이 평생 낳을 것으로 기대되는 평균 출생아 수.",
      "trendDirection": "up",
      "trendLabel": "전년 0.72명 → 0.75명",
      "series": [
        {
          "year": 2020,
          "value": 0.84
        },
        {
          "year": 2021,
          "value": 0.81
        },
        {
          "year": 2022,
          "value": 0.78
        },
        {
          "year": 2023,
          "value": 0.72
        },
        {
          "year": 2024,
          "value": 0.75
        }
      ],
      "target": {
        "value": 1,
        "display": "1.0명",
        "label": "정책 반등 기준선"
      },
      "datasetName": "합계출산율",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B81A15",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국/시도"
    },
    {
      "id": "life-expectancy",
      "name": "기대수명",
      "value": 83.5,
      "valueDisplay": "83.5세",
      "unit": "세",
      "year": 2024,
      "sourceId": "kosis-life-expectancy",
      "sourceRefs": [
        "kosis-life-expectancy"
      ],
      "datasetId": "KOSIS",
      "summary": "보건의료 성과와 건강수준을 보여주는 장기 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 대비 완만한 증가",
      "series": [
        {
          "year": 2020,
          "value": 83
        },
        {
          "year": 2021,
          "value": 83.1
        },
        {
          "year": 2022,
          "value": 83.2
        },
        {
          "year": 2023,
          "value": 83.4
        },
        {
          "year": 2024,
          "value": 83.5
        }
      ],
      "datasetName": "기대수명",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B42",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국"
    },
    {
      "id": "longterm-care-beneficiaries",
      "name": "장기요양 인정자 수",
      "value": 118.6,
      "valueDisplay": "118.6만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mohw-longterm-care",
      "sourceRefs": [
        "mohw-longterm-care"
      ],
      "datasetId": "보건복지부",
      "summary": "고령사회 대응과 돌봄 수요 확장을 보여주는 복지 체감 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 112.1만명 → 118.6만명",
      "series": [
        {
          "year": 2021,
          "value": 95.7
        },
        {
          "year": 2022,
          "value": 101.2
        },
        {
          "year": 2023,
          "value": 106.4
        },
        {
          "year": 2024,
          "value": 112.1
        },
        {
          "year": 2025,
          "value": 118.6
        }
      ],
      "datasetName": "노인장기요양보험 통계",
      "sourceUrl": "https://www.mohw.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "national-health-insurance-coverage",
      "name": "건강보험 보장률",
      "value": 65.7,
      "valueDisplay": "65.7%",
      "unit": "%",
      "year": 2024,
      "sourceId": "mohw-health-insurance-coverage",
      "sourceRefs": [
        "mohw-health-insurance-coverage"
      ],
      "datasetId": "보건복지부",
      "summary": "의료비 보장 수준과 건강보험 정책의 체감 성과를 보여주는 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 64.9% → 65.7%",
      "series": [
        {
          "year": 2020,
          "value": 64.5
        },
        {
          "year": 2021,
          "value": 64.3
        },
        {
          "year": 2022,
          "value": 64.8
        },
        {
          "year": 2023,
          "value": 64.9
        },
        {
          "year": 2024,
          "value": 65.7
        }
      ],
      "datasetName": "건강보험 보장률",
      "sourceUrl": "https://www.mohw.go.kr/",
      "sourcePublisher": "보건복지부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "건강보험 보장성 분석 결과와 보건복지부 발표 기준의 연간 보장률 사용.",
      "coverage": "전국"
    }
  ],
  "org-1492000": [
    {
      "id": "employment-rate-15-64",
      "name": "15~64세 고용률",
      "value": 70.3,
      "valueDisplay": "70.3%",
      "unit": "%",
      "year": 2025,
      "sourceId": "e-nara-employment-rate",
      "sourceRefs": [
        "e-nara-employment-rate"
      ],
      "datasetId": "e-나라지표",
      "summary": "경제활동 가능 연령대의 고용 수준. 노동시장 체력과 정책 성과를 함께 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 69.8% → 70.3%",
      "series": [
        {
          "year": 2021,
          "value": 67.2
        },
        {
          "year": 2022,
          "value": 68.5
        },
        {
          "year": 2023,
          "value": 69.2
        },
        {
          "year": 2024,
          "value": 69.8
        },
        {
          "year": 2025,
          "value": 70.3
        }
      ],
      "target": {
        "value": 70,
        "display": "70%",
        "label": "정책 기준선 달성"
      },
      "datasetName": "고용률",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1063",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국, 15~64세"
    },
    {
      "id": "youth-employment-rate",
      "name": "청년 고용률",
      "value": 46.8,
      "valueDisplay": "46.8%",
      "unit": "%",
      "year": 2025,
      "sourceId": "e-nara-youth-employment",
      "sourceRefs": [
        "e-nara-youth-employment"
      ],
      "datasetId": "e-나라지표",
      "summary": "청년층 일자리 상황을 보여주는 대표 지표.",
      "trendDirection": "flat",
      "trendLabel": "전년 대비 소폭 개선",
      "series": [
        {
          "year": 2021,
          "value": 44.2
        },
        {
          "year": 2022,
          "value": 45.1
        },
        {
          "year": 2023,
          "value": 46.1
        },
        {
          "year": 2024,
          "value": 46.6
        },
        {
          "year": 2025,
          "value": 46.8
        }
      ],
      "datasetName": "청년 고용률",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=3038",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국, 청년층"
    },
    {
      "id": "industrial-accident-rate",
      "name": "산업재해 사고사망만인율",
      "value": 0.38,
      "valueDisplay": "0.38",
      "unit": "명/만인",
      "year": 2025,
      "sourceId": "moel-industrial-accidents",
      "sourceRefs": [
        "moel-industrial-accidents"
      ],
      "datasetId": "고용노동부",
      "summary": "산업안전 정책 성과를 보여주는 대표 안전 지표.",
      "trendDirection": "down",
      "trendLabel": "전년 0.43 → 0.38",
      "series": [
        {
          "year": 2021,
          "value": 0.52
        },
        {
          "year": 2022,
          "value": 0.49
        },
        {
          "year": 2023,
          "value": 0.46
        },
        {
          "year": 2024,
          "value": 0.43
        },
        {
          "year": 2025,
          "value": 0.38
        }
      ],
      "target": {
        "value": 0.3,
        "display": "0.30 이하",
        "label": "중대재해 감축 목표"
      },
      "datasetName": "산업재해 사고사망만인율",
      "sourceUrl": "https://www.moel.go.kr/",
      "sourcePublisher": "고용노동부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "고용노동부 산업재해 현황 통계 기준 사고사망만인율 사용.",
      "coverage": "전국"
    }
  ],
  "org-mogef-2025": [
    {
      "id": "gender-wage-gap",
      "name": "성별임금격차",
      "value": 29.9,
      "valueDisplay": "29.9%",
      "unit": "%",
      "year": 2024,
      "sourceId": "e-nara-gender-gap",
      "sourceRefs": [
        "e-nara-gender-gap"
      ],
      "datasetId": "e-나라지표",
      "summary": "성평등 정책이 실질 노동시장 격차를 얼마나 줄였는지 보여주는 핵심 지표.",
      "trendDirection": "down",
      "trendLabel": "전년 31.2% → 29.9%",
      "series": [
        {
          "year": 2020,
          "value": 34.6
        },
        {
          "year": 2021,
          "value": 33.1
        },
        {
          "year": 2022,
          "value": 32
        },
        {
          "year": 2023,
          "value": 31.2
        },
        {
          "year": 2024,
          "value": 29.9
        }
      ],
      "target": {
        "value": 25,
        "display": "25% 이하",
        "label": "중기 격차 축소 목표"
      },
      "datasetName": "성별임금격차",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1ES3E01",
      "sourcePublisher": "고용노동부 / KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "고용형태별근로실태조사 기반 성별임금격차 관련 KOSIS 상세표를 연결. 기존 포털 루트 링크를 구체 통계표로 교체.",
      "coverage": "전국",
      "qualityNote": "성별 시간당 임금 격차 계열 표를 대표 근거로 사용"
    },
    {
      "id": "family-center-users",
      "name": "가족센터 이용자 수",
      "value": 812,
      "valueDisplay": "812만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mogef-family-centers",
      "sourceRefs": [
        "mogef-family-centers"
      ],
      "datasetId": "성평등가족부",
      "summary": "가족돌봄·다문화·상담 서비스 이용 확산을 보여주는 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 761만명 → 812만명",
      "series": [
        {
          "year": 2021,
          "value": 598
        },
        {
          "year": 2022,
          "value": 643
        },
        {
          "year": 2023,
          "value": 704
        },
        {
          "year": 2024,
          "value": 761
        },
        {
          "year": 2025,
          "value": 812
        }
      ],
      "datasetName": "가족센터 이용자 수",
      "sourceUrl": "https://www.mogef.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "youth-counseling-cases",
      "name": "청소년 상담복지 지원건수",
      "value": 486,
      "valueDisplay": "486만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "mogef-youth-counseling",
      "sourceRefs": [
        "mogef-youth-counseling"
      ],
      "datasetId": "성평등가족부",
      "summary": "청소년·가족 지원망의 실제 이용 규모를 보여주는 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 441만건 → 486만건",
      "series": [
        {
          "year": 2021,
          "value": 312
        },
        {
          "year": 2022,
          "value": 348
        },
        {
          "year": 2023,
          "value": 391
        },
        {
          "year": 2024,
          "value": 441
        },
        {
          "year": 2025,
          "value": 486
        }
      ],
      "datasetName": "청소년 상담복지 지원건수",
      "sourceUrl": "https://www.mogef.go.kr/",
      "sourcePublisher": "성평등가족부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "청소년상담복지센터 운영실적 및 위기청소년 지원 통계 기준.",
      "coverage": "전국"
    }
  ],
  "org-1180000": [
    {
      "id": "national-merit-beneficiaries",
      "name": "보훈급여·예우 대상자 수",
      "value": 86.4,
      "valueDisplay": "86.4만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mpva-national-merit",
      "sourceRefs": [
        "mpva-national-merit"
      ],
      "datasetId": "국가보훈부",
      "summary": "보훈정책이 직접 닿는 핵심 대상 규모를 보여주는 기본 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 84.9만명 → 86.4만명",
      "series": [
        {
          "year": 2021,
          "value": 81.8
        },
        {
          "year": 2022,
          "value": 82.7
        },
        {
          "year": 2023,
          "value": 83.6
        },
        {
          "year": 2024,
          "value": 84.9
        },
        {
          "year": 2025,
          "value": 86.4
        }
      ],
      "datasetName": "보훈대상자 예우 통계",
      "sourceUrl": "https://www.mpva.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "veterans-compensation-budget",
      "name": "보훈 보상·예우 집행 규모",
      "value": 6.4,
      "valueDisplay": "6.4조원",
      "unit": "조원",
      "year": 2025,
      "sourceId": "e-nara-veterans-compensation",
      "sourceRefs": [
        "e-nara-veterans-compensation"
      ],
      "datasetId": "e-나라지표",
      "summary": "보상금·의료·복지 지원을 포함한 체감형 예우 규모.",
      "trendDirection": "up",
      "trendLabel": "전년 6.0조 → 6.4조",
      "series": [
        {
          "year": 2021,
          "value": 5.1
        },
        {
          "year": 2022,
          "value": 5.4
        },
        {
          "year": 2023,
          "value": 5.7
        },
        {
          "year": 2024,
          "value": 6
        },
        {
          "year": 2025,
          "value": 6.4
        }
      ],
      "datasetName": "보훈보상 및 예우 예산 집행 규모",
      "sourceUrl": "https://www.mpva.go.kr/mpva/contents.do?key=58",
      "sourcePublisher": "국가보훈부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "국가보훈부 보훈예산·보상 집행 통계를 기반으로 대표 규모를 구성. e-나라지표 루트 링크 대신 보훈부 1차 자료로 전환.",
      "coverage": "전국",
      "qualityNote": "예산과 집행 실적을 함께 참고한 대표 규모"
    },
    {
      "id": "veterans-medical-visits",
      "name": "보훈의료 이용 건수",
      "value": 912,
      "valueDisplay": "912만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "mpva-medical-visits",
      "sourceRefs": [
        "mpva-medical-visits"
      ],
      "datasetId": "국가보훈부",
      "summary": "보훈병원·위탁의료 등 보훈의료 서비스 체감 규모를 보여주는 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 861만건 → 912만건",
      "series": [
        {
          "year": 2021,
          "value": 702
        },
        {
          "year": 2022,
          "value": 748
        },
        {
          "year": 2023,
          "value": 801
        },
        {
          "year": 2024,
          "value": 861
        },
        {
          "year": 2025,
          "value": 912
        }
      ],
      "datasetName": "보훈의료 이용 건수",
      "sourceUrl": "https://www.mpva.go.kr/",
      "sourcePublisher": "국가보훈부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "국가보훈부 보훈의료서비스 운영 통계 기준 연간 이용 건수 사용.",
      "coverage": "전국"
    }
  ],
  "org-1371000": [
    {
      "id": "inbound-tourists",
      "name": "외래관광객 수",
      "value": 1860,
      "valueDisplay": "1,860만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "kosis-inbound-tourists",
      "sourceRefs": [
        "kosis-inbound-tourists"
      ],
      "datasetId": "KOSIS",
      "summary": "한국 방문 외래객 규모. 관광산업 회복과 문화매력 확산을 보여준다.",
      "trendDirection": "up",
      "trendLabel": "전년 1,640만명 → 1,860만명",
      "series": [
        {
          "year": 2021,
          "value": 96
        },
        {
          "year": 2022,
          "value": 320
        },
        {
          "year": 2023,
          "value": 1103
        },
        {
          "year": 2024,
          "value": 1640
        },
        {
          "year": 2025,
          "value": 1860
        }
      ],
      "datasetName": "외래객 입국-목적별/국적별",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=314&tblId=DT_TGT_ENT_AGG_MONTH",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "월간",
      "methodology": "KOSIS 출입국관광통계 표 `DT_TGT_ENT_AGG_MONTH`(한국관광공사, 외래객 입국-목적별/국적별)에서 최근 공표값을 사용한다. 연간 카드 값은 월별 누적 또는 연간 합산 공표치를 기준으로 읽는다.",
      "coverage": "전국"
    },
    {
      "id": "content-industry-exports",
      "name": "콘텐츠산업 수출액",
      "value": 151,
      "valueDisplay": "151억달러",
      "unit": "억달러",
      "year": 2024,
      "sourceId": "mcst-content-exports",
      "sourceRefs": [
        "mcst-content-exports"
      ],
      "datasetId": "문체부",
      "summary": "게임·방송·음악·출판 등 K-콘텐츠 수출 성과를 보여주는 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 138억달러 → 151억달러",
      "series": [
        {
          "year": 2020,
          "value": 119
        },
        {
          "year": 2021,
          "value": 124
        },
        {
          "year": 2022,
          "value": 132
        },
        {
          "year": 2023,
          "value": 138
        },
        {
          "year": 2024,
          "value": 151
        }
      ],
      "target": {
        "value": 160,
        "display": "160억달러",
        "label": "산업 확장 목표"
      },
      "datasetName": "콘텐츠산업조사",
      "sourceUrl": "https://www.mcst.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "sports-club-members",
      "name": "생활체육 참여 등록 인원",
      "value": 685,
      "valueDisplay": "685만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mcst-sports-club-members",
      "sourceRefs": [
        "mcst-sports-club-members"
      ],
      "datasetId": "문체부",
      "summary": "생활체육 저변 확대와 체육정책 체감도를 보여주는 대표 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 641만명 → 685만명",
      "series": [
        {
          "year": 2021,
          "value": 514
        },
        {
          "year": 2022,
          "value": 559
        },
        {
          "year": 2023,
          "value": 603
        },
        {
          "year": 2024,
          "value": 641
        },
        {
          "year": 2025,
          "value": 685
        }
      ],
      "datasetName": "생활체육 참여 등록 인원",
      "sourceUrl": "https://www.mcst.go.kr/",
      "sourcePublisher": "문화체육관광부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "문체부 생활체육·스포츠클럽 육성사업 운영 통계 기준 참여 등록 인원 사용.",
      "coverage": "전국"
    }
  ],
  "org-1543000": [
    {
      "id": "food-self-sufficiency",
      "name": "식량자급률",
      "value": 49.8,
      "valueDisplay": "49.8%",
      "unit": "%",
      "year": 2024,
      "sourceId": "e-nara-food-self-sufficiency",
      "sourceRefs": [
        "e-nara-food-self-sufficiency"
      ],
      "datasetId": "e-나라지표",
      "summary": "국내 식량 생산 기반의 안정성을 보여주는 농정 핵심 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 48.3% → 49.8%",
      "series": [
        {
          "year": 2020,
          "value": 45.8
        },
        {
          "year": 2021,
          "value": 46.9
        },
        {
          "year": 2022,
          "value": 47.8
        },
        {
          "year": 2023,
          "value": 48.3
        },
        {
          "year": 2024,
          "value": 49.8
        }
      ],
      "datasetName": "식량자급률",
      "sourceUrl": "https://www.krei.re.kr/krei/researchReportView.do?key=67&biblioId=",
      "sourcePublisher": "농림축산식품부·한국농촌경제연구원",
      "sourceType": "official-research-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "농식품부 식량정책 자료와 KREI 식품수급표 해설에서 공표하는 식량자급률 대표값을 사용. e-나라지표 미확정 링크 대신 농정 1차 근거에 가까운 자료로 전환.",
      "coverage": "전국",
      "qualityNote": "KREI·농식품부 해설 자료 기준의 대표값 사용"
    },
    {
      "id": "smart-farm-area",
      "name": "스마트팜 보급면적",
      "value": 9.2,
      "valueDisplay": "9.2천ha",
      "unit": "천ha",
      "year": 2025,
      "sourceId": "mafra-smart-farm",
      "sourceRefs": [
        "mafra-smart-farm"
      ],
      "datasetId": "농식품부",
      "summary": "디지털 농업 전환의 확산 수준을 보여주는 대표 사업 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 7.8천ha → 9.2천ha",
      "series": [
        {
          "year": 2021,
          "value": 4.3
        },
        {
          "year": 2022,
          "value": 5.2
        },
        {
          "year": 2023,
          "value": 6.4
        },
        {
          "year": 2024,
          "value": 7.8
        },
        {
          "year": 2025,
          "value": 9.2
        }
      ],
      "datasetName": "스마트팜 확산 현황",
      "sourceUrl": "https://www.mafra.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "rice-self-sufficiency",
      "name": "쌀 자급률",
      "value": 93.1,
      "valueDisplay": "93.1%",
      "unit": "%",
      "year": 2024,
      "sourceId": "mafra-rice-self-sufficiency",
      "sourceRefs": [
        "mafra-rice-self-sufficiency"
      ],
      "datasetId": "농식품부",
      "summary": "주곡 공급 안정성과 식량안보를 보여주는 핵심 보조 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 92.4% → 93.1%",
      "series": [
        {
          "year": 2020,
          "value": 92.1
        },
        {
          "year": 2021,
          "value": 91.9
        },
        {
          "year": 2022,
          "value": 92.3
        },
        {
          "year": 2023,
          "value": 92.4
        },
        {
          "year": 2024,
          "value": 93.1
        }
      ],
      "datasetName": "쌀 자급률",
      "sourceUrl": "https://www.mafra.go.kr/",
      "sourcePublisher": "농림축산식품부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "농식품부 식량정책 자료와 양곡수급 통계를 바탕으로 쌀 자급률 산출값 사용.",
      "coverage": "전국"
    }
  ],
  "org-molit-2025": [
    {
      "id": "housing-supply-rate",
      "name": "주택보급률",
      "value": 102.5,
      "valueDisplay": "102.5%",
      "unit": "%",
      "year": 2024,
      "sourceId": "e-nara-housing-supply",
      "sourceRefs": [
        "e-nara-housing-supply"
      ],
      "datasetId": "e-나라지표",
      "summary": "가구 수 대비 주택 stock 규모. 공급 기반을 보는 기본 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 102.1% → 102.5%",
      "series": [
        {
          "year": 2020,
          "value": 100.8
        },
        {
          "year": 2021,
          "value": 101.4
        },
        {
          "year": 2022,
          "value": 101.7
        },
        {
          "year": 2023,
          "value": 102.1
        },
        {
          "year": 2024,
          "value": 102.5
        }
      ],
      "datasetName": "주택보급률",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1238",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국"
    },
    {
      "id": "public-transport-share",
      "name": "대중교통 분담률",
      "value": 41.5,
      "valueDisplay": "41.5%",
      "unit": "%",
      "year": 2023,
      "sourceId": "kosis-public-transport-share",
      "sourceRefs": [
        "kosis-public-transport-share"
      ],
      "datasetId": "KOSIS",
      "summary": "도시권 이동에서 대중교통이 차지하는 비중. 교통정책·탄소감축과 함께 본다.",
      "trendDirection": "flat",
      "trendLabel": "코로나 이후 회복세",
      "series": [
        {
          "year": 2018,
          "value": 42.1
        },
        {
          "year": 2019,
          "value": 42.3
        },
        {
          "year": 2020,
          "value": 35.2
        },
        {
          "year": 2022,
          "value": 40.6
        },
        {
          "year": 2023,
          "value": 41.5
        }
      ],
      "datasetName": "대중교통 분담률",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=116&tblId=DT_MLTM_1244",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "월간·분기·연간(표별 상이)",
      "methodology": "KOSIS 통계표 기준 최근 공표값 사용",
      "coverage": "전국/도시권"
    },
    {
      "id": "jeonse-fraud-relief",
      "name": "전세사기 피해지원 실적",
      "value": 3.4,
      "valueDisplay": "3.4만건",
      "unit": "만건",
      "year": 2025,
      "sourceId": "molit-jeonse-risk",
      "sourceRefs": [
        "molit-jeonse-risk"
      ],
      "datasetId": "국토교통부",
      "summary": "주거안전 대응과 긴급지원 행정의 체감도를 보여주는 운영 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 2.6만건 → 3.4만건",
      "series": [
        {
          "year": 2022,
          "value": 0.8
        },
        {
          "year": 2023,
          "value": 1.7
        },
        {
          "year": 2024,
          "value": 2.6
        },
        {
          "year": 2025,
          "value": 3.4
        }
      ],
      "datasetName": "전세사기 피해지원 실적",
      "sourceUrl": "https://www.molit.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "housing-completions",
      "name": "주택 준공실적",
      "value": 43.8,
      "valueDisplay": "43.8만호",
      "unit": "만호",
      "year": 2025,
      "sourceId": "molit-housing-completions",
      "sourceRefs": [
        "molit-housing-completions"
      ],
      "datasetId": "국토교통부",
      "summary": "실제 주택 공급 성과를 보여주는 대표 실물 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 40.6만호 → 43.8만호",
      "series": [
        {
          "year": 2021,
          "value": 36.2
        },
        {
          "year": 2022,
          "value": 38.1
        },
        {
          "year": 2023,
          "value": 39.4
        },
        {
          "year": 2024,
          "value": 40.6
        },
        {
          "year": 2025,
          "value": 43.8
        }
      ],
      "datasetName": "주택 준공실적",
      "sourceUrl": "https://www.molit.go.kr/",
      "sourcePublisher": "국토교통부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "주택건설실적 통계 중 준공실적 기준 연간 호수 사용.",
      "coverage": "전국"
    }
  ],
  "org-1192000": [
    {
      "id": "port-cargo-volume",
      "name": "전국 무역항 물동량",
      "value": 1620,
      "valueDisplay": "16.2억톤",
      "unit": "백만톤",
      "year": 2025,
      "sourceId": "e-nara-maritime-logistics",
      "sourceRefs": [
        "e-nara-maritime-logistics"
      ],
      "datasetId": "e-나라지표",
      "summary": "항만 경쟁력과 해운·물류 흐름을 보여주는 대표 해양경제 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 15.4억톤 → 16.2억톤",
      "series": [
        {
          "year": 2021,
          "value": 1498
        },
        {
          "year": 2022,
          "value": 1536
        },
        {
          "year": 2023,
          "value": 1511
        },
        {
          "year": 2024,
          "value": 1540
        },
        {
          "year": 2025,
          "value": 1620
        }
      ],
      "datasetName": "전국 무역항 물동량",
      "sourceUrl": "https://www.mof.go.kr/statPortal/",
      "sourcePublisher": "해양수산부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간 또는 월간(통계표별 상이)",
      "methodology": "해양수산통계시스템의 무역항 물동량 연간 집계값을 사용. 미확정 e-나라지표 루트 링크 대신 해수부 통계 포털로 교체.",
      "coverage": "전국 무역항",
      "qualityNote": "해양수산통계시스템 연간 확정치 기준"
    },
    {
      "id": "fisheries-household-income",
      "name": "어가 평균소득",
      "value": 53.2,
      "valueDisplay": "5,320만원",
      "unit": "백만원",
      "year": 2025,
      "sourceId": "mof-fisheries-income",
      "sourceRefs": [
        "mof-fisheries-income"
      ],
      "datasetId": "해양수산부",
      "summary": "수산업 종사 가구의 소득 체감도를 보여주는 기초 민생 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 4,970만원 → 5,320만원",
      "series": [
        {
          "year": 2021,
          "value": 44.6
        },
        {
          "year": 2022,
          "value": 47.8
        },
        {
          "year": 2023,
          "value": 48.9
        },
        {
          "year": 2024,
          "value": 49.7
        },
        {
          "year": 2025,
          "value": 53.2
        }
      ],
      "datasetName": "어가소득",
      "sourceUrl": "https://www.mof.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국 어가"
    },
    {
      "id": "marine-accidents",
      "name": "해양사고 발생건수",
      "value": 2810,
      "valueDisplay": "2,810건",
      "unit": "건",
      "year": 2025,
      "sourceId": "kosis-marine-accidents",
      "sourceRefs": [
        "kosis-marine-accidents"
      ],
      "datasetId": "KOSIS",
      "summary": "해양안전 체계 개선 정도를 확인하는 운영 지표.",
      "trendDirection": "down",
      "trendLabel": "전년 2,946건 → 2,810건",
      "series": [
        {
          "year": 2021,
          "value": 3124
        },
        {
          "year": 2022,
          "value": 3058
        },
        {
          "year": 2023,
          "value": 2991
        },
        {
          "year": 2024,
          "value": 2946
        },
        {
          "year": 2025,
          "value": 2810
        }
      ],
      "datasetName": "해양사고 총괄",
      "sourceUrl": "https://kosis.kr/statHtml/statHtml.do?orgId=146&tblId=DT_MLTM_5003054",
      "sourcePublisher": "통계청 KOSIS",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-09",
      "updateCadence": "연간",
      "methodology": "KOSIS 해양사고현황 표 `DT_MLTM_5003054`(해양수산부, 해양사고 총괄)에서 최근 공표값을 사용한다. 카드 값은 연간 총 발생건수 기준으로 읽는다.",
      "coverage": "전국"
    },
    {
      "id": "coastal-passenger-volume",
      "name": "연안여객선 이용객 수",
      "value": 1680,
      "valueDisplay": "1,680만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mof-coastal-passengers",
      "sourceRefs": [
        "mof-coastal-passengers"
      ],
      "datasetId": "해양수산부",
      "summary": "도서지역 연결성과 연안교통 수요를 보여주는 생활·물류 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 1,544만명 → 1,680만명",
      "series": [
        {
          "year": 2021,
          "value": 1184
        },
        {
          "year": 2022,
          "value": 1312
        },
        {
          "year": 2023,
          "value": 1457
        },
        {
          "year": 2024,
          "value": 1544
        },
        {
          "year": 2025,
          "value": 1680
        }
      ],
      "datasetName": "연안여객선 이용객 수",
      "sourceUrl": "https://www.mof.go.kr/",
      "sourcePublisher": "해양수산부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "연안여객선 운항실적 통계 기준 연간 승객 수 사용.",
      "coverage": "전국 연안항로"
    }
  ],
  "org-mcee-2025": [
    {
      "id": "greenhouse-gas-emissions",
      "name": "온실가스 총배출량",
      "value": 624.2,
      "valueDisplay": "624.2MtCO₂eq",
      "unit": "MtCO₂eq",
      "year": 2023,
      "sourceId": "e-nara-ghg-emissions",
      "sourceRefs": [
        "e-nara-ghg-emissions"
      ],
      "datasetId": "e-나라지표",
      "summary": "국가 탄소배출 총량. 기후대응 정책의 최상위 성과지표 중 하나.",
      "trendDirection": "down",
      "trendLabel": "전년 대비 감소",
      "series": [
        {
          "year": 2019,
          "value": 701.3
        },
        {
          "year": 2020,
          "value": 656
        },
        {
          "year": 2021,
          "value": 679.6
        },
        {
          "year": 2022,
          "value": 633.5
        },
        {
          "year": 2023,
          "value": 624.2
        }
      ],
      "datasetName": "온실가스 총배출량",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2438",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국"
    },
    {
      "id": "renewable-generation-share",
      "name": "재생에너지 발전 비중",
      "value": 9.6,
      "valueDisplay": "9.6%",
      "unit": "%",
      "year": 2024,
      "sourceId": "e-nara-renewable-share",
      "sourceRefs": [
        "e-nara-renewable-share"
      ],
      "datasetId": "e-나라지표",
      "summary": "전체 발전량 중 재생에너지가 차지하는 비중.",
      "trendDirection": "up",
      "trendLabel": "전년 8.9% → 9.6%",
      "series": [
        {
          "year": 2020,
          "value": 6.5
        },
        {
          "year": 2021,
          "value": 7.1
        },
        {
          "year": 2022,
          "value": 7.8
        },
        {
          "year": 2023,
          "value": 8.9
        },
        {
          "year": 2024,
          "value": 9.6
        }
      ],
      "target": {
        "value": 10,
        "display": "10%",
        "label": "단기 보급 목표"
      },
      "datasetName": "재생에너지 발전 비중",
      "sourceUrl": "https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2974",
      "sourcePublisher": "통계개발원·각 소관부처 / e-나라지표",
      "sourceType": "official-stat-portal",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 분기(지표별 상이)",
      "methodology": "국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용",
      "coverage": "전국"
    },
    {
      "id": "air-quality-good-days",
      "name": "초미세먼지 좋음일수",
      "value": 212,
      "valueDisplay": "212일",
      "unit": "일",
      "year": 2025,
      "sourceId": "mcee-air-quality-good-days",
      "sourceRefs": [
        "mcee-air-quality-good-days"
      ],
      "datasetId": "기후에너지환경부",
      "summary": "대기질 개선 체감도를 직관적으로 보여주는 생활밀착형 환경 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 198일 → 212일",
      "series": [
        {
          "year": 2021,
          "value": 176
        },
        {
          "year": 2022,
          "value": 181
        },
        {
          "year": 2023,
          "value": 189
        },
        {
          "year": 2024,
          "value": 198
        },
        {
          "year": 2025,
          "value": 212
        }
      ],
      "datasetName": "초미세먼지 좋음일수",
      "sourceUrl": "https://www.me.go.kr/",
      "sourcePublisher": "기후에너지환경부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "대기환경연보 및 환경부 대기질 측정망 통계에서 전국 평균 기준 좋음일수를 집계.",
      "coverage": "전국"
    }
  ],
  "org-1290000": [
    {
      "id": "defense-budget-gdp-share",
      "name": "국방비 GDP 대비 비중",
      "value": 2.7,
      "valueDisplay": "2.7%",
      "unit": "% GDP",
      "year": 2025,
      "sourceId": "e-nara-defense-budget-share",
      "sourceRefs": [
        "e-nara-defense-budget-share"
      ],
      "datasetId": "e-나라지표",
      "summary": "안보 투자 강도와 중기 전력증강 규모를 함께 읽을 수 있는 지표.",
      "trendDirection": "flat",
      "trendLabel": "전년 수준 유지",
      "series": [
        {
          "year": 2021,
          "value": 2.8
        },
        {
          "year": 2022,
          "value": 2.7
        },
        {
          "year": 2023,
          "value": 2.7
        },
        {
          "year": 2024,
          "value": 2.7
        },
        {
          "year": 2025,
          "value": 2.7
        }
      ],
      "datasetName": "국방예산 현황 및 GDP 대비 비중",
      "sourceUrl": "https://www.mnd.go.kr/mbshome/mbs/mnd/subview.jsp?id=mnd_020600000000",
      "sourcePublisher": "국방부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "국방부 예산 현황 자료의 연도별 국방예산과 명목 GDP 공표치를 교차해 GDP 대비 비중을 산출하는 보조 지표로 정리. e-나라지표 미확정 링크 대신 국방부 1차 자료로 전환.",
      "coverage": "전국",
      "qualityNote": "직접 단일 통계표보다 국방예산 공표치와 GDP 산식을 결합한 지표"
    },
    {
      "id": "defense-exports",
      "name": "방산수출 수주액",
      "value": 138,
      "valueDisplay": "138억달러",
      "unit": "억달러",
      "year": 2025,
      "sourceId": "mnd-defense-exports",
      "sourceRefs": [
        "mnd-defense-exports"
      ],
      "datasetId": "국방부",
      "summary": "국방정책과 산업정책이 만나는 방산 수출 성과 지표.",
      "trendDirection": "up",
      "trendLabel": "전년 104억달러 → 138억달러",
      "series": [
        {
          "year": 2021,
          "value": 72
        },
        {
          "year": 2022,
          "value": 173
        },
        {
          "year": 2023,
          "value": 95
        },
        {
          "year": 2024,
          "value": 104
        },
        {
          "year": 2025,
          "value": 138
        }
      ],
      "target": {
        "value": 150,
        "display": "150억달러",
        "label": "수출 확대 목표"
      },
      "datasetName": "방산수출 수주액",
      "sourceUrl": "https://www.mnd.go.kr",
      "sourcePublisher": "각 중앙행정기관 공식 통계/업무보고",
      "sourceType": "official-ministry",
      "lastVerified": "2026-04-08",
      "updateCadence": "연간 또는 수시",
      "methodology": "소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용",
      "coverage": "전국"
    },
    {
      "id": "military-service-fulfillment",
      "name": "병역의무 이행 인원",
      "value": 25.6,
      "valueDisplay": "25.6만명",
      "unit": "만명",
      "year": 2025,
      "sourceId": "mnd-military-service",
      "sourceRefs": [
        "mnd-military-service"
      ],
      "datasetId": "국방부",
      "summary": "병력 운영과 병역자원 관리의 규모를 보여주는 대표 국방 운영 지표.",
      "trendDirection": "flat",
      "trendLabel": "전년 25.4만명 → 25.6만명",
      "series": [
        {
          "year": 2021,
          "value": 27.8
        },
        {
          "year": 2022,
          "value": 27.1
        },
        {
          "year": 2023,
          "value": 26.5
        },
        {
          "year": 2024,
          "value": 25.4
        },
        {
          "year": 2025,
          "value": 25.6
        }
      ],
      "datasetName": "병역의무 이행 인원",
      "sourceUrl": "https://www.mnd.go.kr/",
      "sourcePublisher": "국방부",
      "sourceType": "official-ministry-stat",
      "lastVerified": "2026-04-10",
      "updateCadence": "연간",
      "methodology": "병무청·국방부 병역자원 통계와 현역 입영 실적 자료를 종합한 연간 규모.",
      "coverage": "전국"
    }
  ]
};

sources.push(
  {"id":"e-nara-defense-budget-share","name":"e-나라지표: 국방비 GDP 대비 비중","url":"https://www.mnd.go.kr/mbshome/mbs/mnd/subview.jsp?id=mnd_020600000000","desc":"GDP 대비 국방비 비중","publisher":"국방부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"국방부 예산 현황 자료의 연도별 국방예산과 명목 GDP 공표치를 교차해 GDP 대비 비중을 산출하는 보조 지표로 정리. e-나라지표 미확정 링크 대신 국방부 1차 자료로 전환.","trust":"official-secondary","datasetName":"국방예산 현황 및 GDP 대비 비중","datasetId":"국방예산 현황 (보조 산식 포함)","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"직접 단일 통계표보다 국방예산 공표치와 GDP 산식을 결합한 지표"},
  {"id":"e-nara-disaster-budget","name":"e-나라지표: 재난안전 예산","url":"https://lofin.mois.go.kr/","desc":"재난안전 분야 예산 규모 지표","publisher":"행정안전부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"지방재정365 및 행정안전부 재난안전예산 집계를 기준으로 지자체 재난안전 분야 예산 총액을 대표값으로 사용. 포털 루트 대신 1차 재정 시스템을 연결.","trust":"official-secondary","datasetName":"지방자치단체 재난안전 분야 예산","datasetId":"지방재정365 재난안전 분야 예산","sourcePortal":"e-나라지표","coverage":"지방정부","lastVerified":"2026-04-10","qualityNote":"지방정부 예산 집계를 대표값으로 사용하며 세부 분류 기준은 연도별로 달라질 수 있음"},
  {"id":"e-nara-employment-rate","name":"e-나라지표: 고용률","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1063","desc":"15~64세 고용률 대표 지표","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"고용률","datasetId":"idx_cd=1063","sourcePortal":"e-나라지표","coverage":"전국, 15~64세","lastVerified":"2026-04-08"},
  {"id":"e-nara-fiscal-soundness","name":"e-나라지표: 국가채무비율","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1108","desc":"GDP 대비 국가채무 비율","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"국가채무비율","datasetId":"idx_cd=1108","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"e-nara-food-self-sufficiency","name":"e-나라지표: 식량자급률","url":"https://www.krei.re.kr/krei/researchReportView.do?key=67&biblioId=","desc":"국내 식량자급 수준 지표","publisher":"농림축산식품부·한국농촌경제연구원","sourceType":"official-research-stat","updateCadence":"연간","methodology":"농식품부 식량정책 자료와 KREI 식품수급표 해설에서 공표하는 식량자급률 대표값을 사용. e-나라지표 미확정 링크 대신 농정 1차 근거에 가까운 자료로 전환.","trust":"official-secondary","datasetName":"식량자급률","datasetId":"KREI 식품수급표 기반 식량자급률","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"KREI·농식품부 해설 자료 기준의 대표값 사용"},
  {"id":"e-nara-gender-gap","name":"e-나라지표: 성별임금격차","url":"https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1ES3E01","desc":"성평등 정책과 함께 보는 핵심 격차 지표","publisher":"고용노동부 / KOSIS","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"고용형태별근로실태조사 기반 성별임금격차 관련 KOSIS 상세표를 연결. 기존 포털 루트 링크를 구체 통계표로 교체.","trust":"official-secondary","datasetName":"성별임금격차","datasetId":"DT_1ES3E01","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"성별 시간당 임금 격차 계열 표를 대표 근거로 사용"},
  {"id":"e-nara-ghg-emissions","name":"e-나라지표: 온실가스 총배출량","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2438","desc":"국가 온실가스 총배출량 지표","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"온실가스 총배출량","datasetId":"idx_cd=2438","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"e-nara-housing-supply","name":"e-나라지표: 주택보급률","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1238","desc":"가구 수 대비 주택 stock 지표","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"주택보급률","datasetId":"idx_cd=1238","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"e-nara-ict-exports","name":"e-나라지표: ICT 산업 수출입 동향","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2782","desc":"관세청 통관 기준을 ICT산업분류로 재가공한 ICT 수출입 통계","publisher":"과학기술정보통신부 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간","methodology":"e-나라지표 idx_cd=2782 상세 페이지의 'ICT 산업 수출입 동향' 지표를 사용. 자료 출처는 ICT수출입통계(통계승인번호 제120021호)이며, 관세청 통관실적을 ICT산업분류 기준으로 재분류한 연간 공표값을 기준으로 함.","trust":"official-secondary","datasetName":"ICT 산업 수출입 동향","datasetId":"idx_cd=2782","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"e-nara-inter-korean-coop","name":"e-나라지표: 남북 인도협력 사업 규모","url":"https://www.unikorea.go.kr/unikorea/business/NKExchange/","desc":"남북 인도협력 관련 규모 지표","publisher":"통일부","sourceType":"official-ministry-stat","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"통일부 남북교류협력 및 인도협력 사업 통계를 기준으로 대표 규모를 산출. 미확정 e-나라지표 루트 링크 대신 통일부 1차 자료로 대체.","trust":"official-secondary","datasetName":"남북교류협력 및 인도협력 사업 실적","datasetId":"남북교류협력·인도협력 통계","sourcePortal":"e-나라지표","coverage":"남북 인도협력 사업","lastVerified":"2026-04-10","qualityNote":"사업 승인·기금 집행 등 복수 통계를 묶은 대표값"},
  {"id":"e-nara-maritime-logistics","name":"e-나라지표: 항만 물동량","url":"https://www.mof.go.kr/statPortal/","desc":"전국 무역항 항만 물동량","publisher":"해양수산부","sourceType":"official-ministry-stat","updateCadence":"연간 또는 월간(통계표별 상이)","methodology":"해양수산통계시스템의 무역항 물동량 연간 집계값을 사용. 미확정 e-나라지표 루트 링크 대신 해수부 통계 포털로 교체.","trust":"official-secondary","datasetName":"전국 무역항 물동량","datasetId":"해양수산통계시스템 항만물동량","sourcePortal":"e-나라지표","coverage":"전국 무역항","lastVerified":"2026-04-10","qualityNote":"해양수산통계시스템 연간 확정치 기준"},
  {"id":"e-nara-oda-volume","name":"e-나라지표: ODA 원조규모","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=1687","desc":"공적개발원조 총규모(순지출 기준) 지표","publisher":"외교부 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간","methodology":"e-나라지표 idx_cd=1687 'ODA 원조규모' 상세 페이지를 사용. 순지출(net disbursement) 기준 ODA 총액을 기준으로 하며, 2018년 이후 OECD DAC grant equivalent 체계 전환에 유의.","trust":"official-secondary","datasetName":"ODA 원조규모","datasetId":"idx_cd=1687","sourcePortal":"e-나라지표","coverage":"대한민국 공여 ODA","lastVerified":"2026-04-09"},
  {"id":"e-nara-renewable-share","name":"e-나라지표: 재생에너지 발전 비중","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=2974","desc":"전체 발전량 대비 재생에너지 비중","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"재생에너지 발전 비중","datasetId":"idx_cd=2974","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"e-nara-veterans-compensation","name":"e-나라지표: 국가보훈 보상·예우 규모","url":"https://www.mpva.go.kr/mpva/contents.do?key=58","desc":"보훈 급여 및 예우 대상 규모 지표","publisher":"국가보훈부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"국가보훈부 보훈예산·보상 집행 통계를 기반으로 대표 규모를 구성. e-나라지표 루트 링크 대신 보훈부 1차 자료로 전환.","trust":"official-secondary","datasetName":"보훈보상 및 예우 예산 집행 규모","datasetId":"보훈예산 및 집행 현황","sourcePortal":"e-나라지표","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"예산과 집행 실적을 함께 참고한 대표 규모"},
  {"id":"e-nara-youth-employment","name":"e-나라지표: 청년 고용률","url":"https://www.index.go.kr/unity/potal/main/EachDtlPageDetail.do?idx_cd=3038","desc":"청년층 고용 상황 대표 지표","publisher":"통계개발원·각 소관부처 / e-나라지표","sourceType":"official-stat-portal","updateCadence":"연간 또는 분기(지표별 상이)","methodology":"국가승인통계·행정통계를 e-나라지표 상세 페이지 기준으로 재인용","trust":"official-secondary","datasetName":"청년 고용률","datasetId":"idx_cd=3038","sourcePortal":"e-나라지표","coverage":"전국, 청년층","lastVerified":"2026-04-08"},
  {"id":"kdca-child-vaccination-rate","name":"질병관리청 예방접종등록관리정보시스템: 12개월 완전접종률","url":"https://nip.kdca.go.kr","desc":"국가예방접종사업 12개월 완전접종률","publisher":"질병관리청","sourceType":"official-ministry","updateCadence":"연간","methodology":"질병관리청 예방접종등록관리정보시스템 및 국가예방접종사업 연보에 공표되는 12개월 완전접종률을 기준으로 사용한다. 행정등록 기반이라 KDCA 소관업무와 직접 대응한다.","trust":"official-primary","datasetName":"12개월 완전접종률","datasetId":"예방접종등록관리정보시스템 / 국가예방접종사업 연보","sourcePortal":"질병관리청","coverage":"전국 영아","lastVerified":"2026-04-09"},
  {"id":"kosis-consumer-price","name":"KOSIS: 소비자물가상승률","url":"https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1J22003","desc":"전국 소비자물가 상승률","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"소비자물가상승률","datasetId":"DT_1J22003","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"kosis-crime-clearance","name":"KOSIS: 범죄 검거율","url":"https://kosis.kr/statHtml/statHtml.do?orgId=132&tblId=DT_13204_2004_1","desc":"주요 범죄 검거율","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"경찰청 범죄통계 기반 KOSIS 상세표에서 주요 범죄 검거율 연간 값을 사용.","trust":"official-primary","datasetName":"범죄 검거율","datasetId":"DT_13204_2004_1","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"경찰청 범죄통계 상세표 직접 연결"},
  {"id":"kosis-female-manager-share","name":"KOSIS: 여성관리자 비율","url":"https://kosis.kr","desc":"조직 내 여성 관리자 비중","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"여성관리자 비율","datasetId":"KOSIS 통계표 상세 확인 필요","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-08","qualityNote":"표 ID 미확정 — 루트 링크 유지"},
  {"id":"kosis-fertility-rate","name":"KOSIS: 합계출산율","url":"https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B81A15","desc":"시도·전국 합계출산율","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"합계출산율","datasetId":"DT_1B81A15","sourcePortal":"KOSIS","coverage":"전국/시도","lastVerified":"2026-04-08"},
  {"id":"kosis-higher-education","name":"KOSIS: 고등교육기관 진학률","url":"https://kosis.kr/statHtml/statHtml.do?orgId=334&tblId=DT_1YL20991","desc":"고교 졸업자 진학률","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"고등교육기관 진학률","datasetId":"DT_1YL20991","sourcePortal":"KOSIS","coverage":"전국 고졸자","lastVerified":"2026-04-08"},
  {"id":"kosis-inbound-tourists","name":"KOSIS: 외래객 입국-목적별/국적별","url":"https://kosis.kr/statHtml/statHtml.do?orgId=314&tblId=DT_TGT_ENT_AGG_MONTH","desc":"방한 외래객 입국자 수","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간","methodology":"KOSIS 출입국관광통계 표 `DT_TGT_ENT_AGG_MONTH`(한국관광공사, 외래객 입국-목적별/국적별)에서 최근 공표값을 사용한다. 연간 카드 값은 월별 누적 또는 연간 합산 공표치를 기준으로 읽는다.","trust":"official-primary","datasetName":"외래객 입국-목적별/국적별","datasetId":"DT_TGT_ENT_AGG_MONTH","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"kosis-life-expectancy","name":"KOSIS: 기대수명","url":"https://kosis.kr/statHtml/statHtml.do?orgId=101&tblId=DT_1B42","desc":"생명표 기반 기대수명","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"기대수명","datasetId":"DT_1B42","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"kosis-marine-accidents","name":"KOSIS: 해양사고 총괄","url":"https://kosis.kr/statHtml/statHtml.do?orgId=146&tblId=DT_MLTM_5003054","desc":"연간 해양사고 총괄 현황","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"연간","methodology":"KOSIS 해양사고현황 표 `DT_MLTM_5003054`(해양수산부, 해양사고 총괄)에서 최근 공표값을 사용한다. 카드 값은 연간 총 발생건수 기준으로 읽는다.","trust":"official-primary","datasetName":"해양사고 총괄","datasetId":"DT_MLTM_5003054","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"kosis-private-education","name":"KOSIS: 학생 1인당 월평균 사교육비","url":"https://kosis.kr/statHtml/statHtml.do?orgId=354&tblId=DT_HIRA4A","desc":"초중고 사교육비 조사","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"학생 1인당 월평균 사교육비","datasetId":"DT_HIRA4A","sourcePortal":"KOSIS","coverage":"전국 초중고","lastVerified":"2026-04-08"},
  {"id":"kosis-public-transport-share","name":"KOSIS: 대중교통 분담률","url":"https://kosis.kr/statHtml/statHtml.do?orgId=116&tblId=DT_MLTM_1244","desc":"교통수단 분담률","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간·분기·연간(표별 상이)","methodology":"KOSIS 통계표 기준 최근 공표값 사용","trust":"official-primary","datasetName":"대중교통 분담률","datasetId":"DT_MLTM_1244","sourcePortal":"KOSIS","coverage":"전국/도시권","lastVerified":"2026-04-08"},
  {"id":"kosis-rnd-gdp","name":"KOSIS: 연구개발비 및 GDP 대비 연구개발비 비율","url":"https://kosis.kr/statHtml/statHtml.do?orgId=127&tblId=DT_KBA0001","desc":"국가 총연구개발비와 GDP 대비 연구개발비 비율","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"연간","methodology":"KOSIS 연구개발활동조사 표 `DT_KBA0001`(과학기술정보통신부, 연구개발비 및 GDP 대비 연구개발비 비율)에서 최근 공표 연도값을 사용한다. 지표 카드의 퍼센트 값은 동일 표의 `GDP 대비 연구개발비 비율` 계열을 기준으로 해석한다.","trust":"official-primary","datasetName":"연구개발비 및 GDP 대비 연구개발비 비율","datasetId":"DT_KBA0001","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"kosis-students-per-teacher","name":"KOSIS: 교원 1인당 학생 수","url":"https://kosis.kr/","desc":"학교급 통합 교원 1인당 학생 수","publisher":"교육부 / KOSIS","sourceType":"official-stat-portal","updateCadence":"연간","methodology":"교육기본통계 기반 학생 수와 교원 수를 활용한 교원 1인당 학생 수 연간 지표.","trust":"official-primary","datasetName":"교원 1인당 학생 수","datasetId":"KOSIS","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"kosis-trade-balance","name":"KOSIS: 수출입총괄","url":"https://kosis.kr/statHtml/statHtml.do?orgId=134&tblId=DT_134001_001","desc":"전국 수출액·수입액·무역수지 총괄","publisher":"통계청 KOSIS","sourceType":"official-stat-portal","updateCadence":"월간","methodology":"KOSIS 무역통계 표 `DT_134001_001`(관세청, 수출입총괄)에서 최근 공표값을 사용한다. 현재 경제지표 카드는 이 표의 `수출액` 계열을 대표값으로 보여주며, 필요 시 동일 표의 수입액·무역수지와 함께 교차 해석할 수 있다.","trust":"official-primary","datasetName":"수출입총괄","datasetId":"DT_134001_001","sourcePortal":"KOSIS","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"kosis-venture-investment","name":"KOSIS: 벤처투자조합 결성실적 (인접 공식 통계)","url":"https://news.kvic.or.kr/article/2025-venture-investment-trend","desc":"벤처투자 규모 해석에 인접한 중기부 벤처투자조합 결성실적","publisher":"한국벤처투자","sourceType":"official-sector-stat","updateCadence":"연간","methodology":"실제 카드 값은 벤처투자 집행액 기준이므로 KOSIS 보조표 대신 한국벤처투자 벤처투자 동향 집계를 1차 근거로 사용.","trust":"official-primary","datasetName":"벤처투자 실적","datasetId":"한국벤처투자 벤처투자 동향","sourcePortal":"한국벤처투자","coverage":"전국","lastVerified":"2026-04-10","qualityNote":"벤처투자조합 결성실적이 아닌 실제 투자 실적 기준으로 전환"},
  {"id":"mafra-rice-self-sufficiency","name":"농식품부: 쌀 자급률","url":"https://www.mafra.go.kr/","desc":"국내 쌀 자급 수준","publisher":"농림축산식품부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"농식품부 식량정책 자료와 양곡수급 통계를 바탕으로 쌀 자급률 산출값 사용.","trust":"official-primary","datasetName":"쌀 자급률","datasetId":"쌀 자급률","sourcePortal":"농림축산식품부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mafra-smart-farm","name":"농식품부: 스마트팜 확산 현황","url":"https://www.mafra.go.kr","desc":"스마트팜 보급 면적/농가 현황","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"스마트팜 확산 현황","datasetId":"농식품부 스마트팜 보급 실적","sourcePortal":"농식품부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"mcee-air-quality-good-days","name":"기후에너지환경부: 초미세먼지 좋음일수","url":"https://www.me.go.kr/","desc":"연간 초미세먼지 좋음 등급 일수","publisher":"기후에너지환경부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"대기환경연보 및 환경부 대기질 측정망 통계에서 전국 평균 기준 좋음일수를 집계.","trust":"official-primary","datasetName":"초미세먼지 좋음일수","datasetId":"초미세먼지 좋음일수","sourcePortal":"기후에너지환경부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mcst-content-exports","name":"문체부: 콘텐츠산업조사","url":"https://www.mcst.go.kr","desc":"콘텐츠산업 수출 통계","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"콘텐츠산업조사","datasetId":"콘텐츠산업조사 수출 통계","sourcePortal":"문체부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"mcst-sports-club-members","name":"문체부: 생활체육 참여 등록 인원","url":"https://www.mcst.go.kr/","desc":"등록 스포츠클럽 및 생활체육 프로그램 참여 인원","publisher":"문화체육관광부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"문체부 생활체육·스포츠클럽 육성사업 운영 통계 기준 참여 등록 인원 사용.","trust":"official-primary","datasetName":"생활체육 참여 등록 인원","datasetId":"생활체육 참여 등록 인원","sourcePortal":"문화체육관광부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mfds-drug-approvals","name":"식품의약품안전처 통계연보: 의약품 허가·신고 현황","url":"https://www.mfds.go.kr","desc":"식품의약품안전처 연도별 의약품 허가·신고 처리 현황","publisher":"식품의약품안전처","sourceType":"official-ministry","updateCadence":"연간","methodology":"식품의약품안전처 통계연보·통계간행물에 공표되는 연도별 의약품 허가·신고 처리 건수를 기준으로 사용한다. 상세 품목군 구분은 통계연보 최신판 기준으로 합산한다.","trust":"official-primary","datasetName":"의약품 허가·신고 현황","datasetId":"식품의약품안전처 통계연보","sourcePortal":"식품의약품안전처","coverage":"전국","lastVerified":"2026-04-09"},
  {"id":"mnd-defense-exports","name":"국방부/방사청: 방산수출 수주액","url":"https://www.mnd.go.kr","desc":"방산수출 수주 실적","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"방산수출 수주액","datasetId":"국방부·방사청 방산수출 실적","sourcePortal":"국방부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"mnd-military-service","name":"국방부: 병역의무 이행 인원","url":"https://www.mnd.go.kr/","desc":"현역·대체복무 등 병역의무 이행 규모","publisher":"국방부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"병무청·국방부 병역자원 통계와 현역 입영 실적 자료를 종합한 연간 규모.","trust":"official-primary","datasetName":"병역의무 이행 인원","datasetId":"병역의무 이행 인원","sourcePortal":"국방부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"moel-industrial-accidents","name":"고용노동부: 산업재해 사고사망만인율","url":"https://www.moel.go.kr/","desc":"산업재해 사고사망만인율","publisher":"고용노동부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"고용노동부 산업재해 현황 통계 기준 사고사망만인율 사용.","trust":"official-primary","datasetName":"산업재해 사고사망만인율","datasetId":"산업재해 사고사망만인율","sourcePortal":"고용노동부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mof-coastal-passengers","name":"해양수산부: 연안여객선 이용객 수","url":"https://www.mof.go.kr/","desc":"연간 연안여객선 이용객 수","publisher":"해양수산부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"연안여객선 운항실적 통계 기준 연간 승객 수 사용.","trust":"official-primary","datasetName":"연안여객선 이용객 수","datasetId":"연안여객선 이용객 수","sourcePortal":"해양수산부","coverage":"전국 연안항로","lastVerified":"2026-04-10"},
  {"id":"mof-fisheries-income","name":"해양수산부: 어가소득","url":"https://www.mof.go.kr","desc":"어가 평균소득 통계","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"어가소득","datasetId":"해양수산부 어가경제조사","sourcePortal":"해양수산부","coverage":"전국 어가","lastVerified":"2026-04-08"},
  {"id":"mofa-consular-services","name":"외교부: 영사서비스 처리 실적","url":"https://www.mofa.go.kr","desc":"재외국민 영사서비스 처리 규모","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"영사서비스 처리 실적","datasetId":"외교부 재외국민영사국 집계","sourcePortal":"외교부","coverage":"재외국민","lastVerified":"2026-04-08"},
  {"id":"mofa-passport-issuance","name":"외교부: 여권 발급 건수","url":"https://www.mofa.go.kr/","desc":"연간 여권 발급 실적","publisher":"외교부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"외교부 영사서비스 통계 및 여권 발급 실적 보도자료 기준.","trust":"official-primary","datasetName":"여권 발급 건수","datasetId":"여권 발급 건수","sourcePortal":"외교부","coverage":"내·외국민 여권 발급","lastVerified":"2026-04-10"},
  {"id":"mofe-tax-revenue","name":"재정경제부: 국세수입 실적","url":"https://www.moef.go.kr/","desc":"연간 국세수입 실적","publisher":"재정경제부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"재정경제부 세입결산·세입예산 보도자료 기반 연간 국세수입 집계값 사용.","trust":"official-primary","datasetName":"국세수입 실적","datasetId":"국세수입 실적","sourcePortal":"재정경제부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mogef-family-centers","name":"성평등가족부: 가족센터 이용자 수","url":"https://www.mogef.go.kr","desc":"가족지원 서비스 이용 규모","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"가족센터 이용자 수","datasetId":"성평등가족부 가족센터 운영 실적","sourcePortal":"성평등가족부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"mogef-youth-counseling","name":"성평등가족부: 청소년 상담복지 지원건수","url":"https://www.mogef.go.kr/","desc":"청소년상담복지센터 지원 실적","publisher":"성평등가족부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"청소년상담복지센터 운영실적 및 위기청소년 지원 통계 기준.","trust":"official-primary","datasetName":"청소년 상담복지 지원건수","datasetId":"청소년 상담복지 지원건수","sourcePortal":"성평등가족부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mohw-health-insurance-coverage","name":"보건복지부: 건강보험 보장률","url":"https://www.mohw.go.kr/","desc":"건강보험 보장률","publisher":"보건복지부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"건강보험 보장성 분석 결과와 보건복지부 발표 기준의 연간 보장률 사용.","trust":"official-primary","datasetName":"건강보험 보장률","datasetId":"건강보험 보장률","sourcePortal":"보건복지부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mohw-longterm-care","name":"보건복지부: 노인장기요양보험 통계","url":"https://www.mohw.go.kr","desc":"장기요양 인정자 및 서비스 이용 규모","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"노인장기요양보험 통계","datasetId":"장기요양보험 인정자 통계","sourcePortal":"보건복지부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"mois-local-tax-revenue","name":"행정안전부: 지방세 수입","url":"https://www.mois.go.kr/","desc":"연간 지방세 수입 규모","publisher":"행정안전부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"지방재정365 및 행정안전부 지방세 통계연감 기준 연간 지방세 수입 집계값.","trust":"official-primary","datasetName":"지방세 수입","datasetId":"지방세 수입","sourcePortal":"행정안전부","coverage":"전국 지방정부","lastVerified":"2026-04-10"},
  {"id":"moj-immigration-arrivals","name":"법무부 출입국통계","url":"https://www.immigration.go.kr","desc":"외국인 입국·체류 관련 대표 통계","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"출입국통계","datasetId":"법무부 출입국·외국인정책본부 통계","sourcePortal":"법무부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"moj-resident-foreigners","name":"법무부: 등록외국인 체류자 수","url":"https://www.moj.go.kr/","desc":"등록외국인 체류 현황","publisher":"법무부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"출입국·외국인정책본부 등록외국인 통계 기준 연말 체류자 수 사용.","trust":"official-primary","datasetName":"등록외국인 체류자 수","datasetId":"등록외국인 체류자 수","sourcePortal":"법무부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"molit-housing-completions","name":"국토교통부: 주택 준공실적","url":"https://www.molit.go.kr/","desc":"연간 주택 준공 호수","publisher":"국토교통부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"주택건설실적 통계 중 준공실적 기준 연간 호수 사용.","trust":"official-primary","datasetName":"주택 준공실적","datasetId":"주택 준공실적","sourcePortal":"국토교통부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"molit-jeonse-risk","name":"국토교통부: 전세사기 피해지원 실적","url":"https://www.molit.go.kr","desc":"주거안전 정책 대응 규모","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"전세사기 피해지원 실적","datasetId":"국토교통부 피해지원 집계","sourcePortal":"국토교통부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"motie-industrial-output","name":"산업통상부: 제조업 생산지수","url":"https://www.motie.go.kr","desc":"제조업 생산 활동 대표 지표","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"제조업 생산지수","datasetId":"산업활동동향(제조업 생산)","sourcePortal":"산업통상부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"motir-fdi-inflow","name":"산업통상부: 외국인직접투자 신고액","url":"https://www.motie.go.kr/","desc":"연간 외국인직접투자 신고액","publisher":"산업통상부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"산업통상부 외국인직접투자 동향 보도자료 기준 신고액 집계값.","trust":"official-primary","datasetName":"외국인직접투자 신고액","datasetId":"외국인직접투자 신고액","sourcePortal":"산업통상부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mou-inter-korean-exchange","name":"통일부: 남북교류협력 승인 건수","url":"https://www.unikorea.go.kr/","desc":"남북교류협력 승인 실적","publisher":"통일부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"통일부 남북교류협력 통계연보 및 승인 실적 자료 기준.","trust":"official-primary","datasetName":"남북교류협력 승인 건수","datasetId":"남북교류협력 승인 건수","sourcePortal":"통일부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mou-settlement-support","name":"통일부: 북한이탈주민 정착지원","url":"https://www.unikorea.go.kr","desc":"북한이탈주민 정착지원 통계","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"북한이탈주민 정착지원","datasetId":"통일부 정착지원 통계","sourcePortal":"통일부","coverage":"북한이탈주민","lastVerified":"2026-04-08"},
  {"id":"mpva-medical-visits","name":"국가보훈부: 보훈의료 이용 건수","url":"https://www.mpva.go.kr/","desc":"보훈병원 및 위탁의료 이용 규모","publisher":"국가보훈부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"국가보훈부 보훈의료서비스 운영 통계 기준 연간 이용 건수 사용.","trust":"official-primary","datasetName":"보훈의료 이용 건수","datasetId":"보훈의료 이용 건수","sourcePortal":"국가보훈부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mpva-national-merit","name":"국가보훈부: 보훈대상자 예우 통계","url":"https://www.mpva.go.kr","desc":"보훈급여 및 예우 대상자 현황","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"보훈대상자 예우 통계","datasetId":"국가보훈부 보훈통계","sourcePortal":"국가보훈부","coverage":"전국","lastVerified":"2026-04-08"},
  {"id":"msit-ai-digital-service","name":"과기정통부: AI·디지털 공공서비스 이용규모","url":"https://www.msit.go.kr/","desc":"AI·디지털 기반 공공서비스 이용량","publisher":"과학기술정보통신부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"과기정통부 디지털정부·AI 서비스 보도자료 및 사업실적 집계를 기준으로 연간 이용건수를 구성.","trust":"official-primary","datasetName":"AI·디지털 공공서비스 이용규모","datasetId":"AI·디지털 공공서비스 이용규모","sourcePortal":"과기정통부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"mss-digitalization","name":"중기부: 소상공인 디지털전환","url":"https://www.mss.go.kr","desc":"스마트상점·온라인 전환 지원 누적","publisher":"각 중앙행정기관 공식 통계/업무보고","sourceType":"official-ministry","updateCadence":"연간 또는 수시","methodology":"소관 부처 공식 통계·업무보고·보도자료 기준 대표값 사용","trust":"official-primary","datasetName":"소상공인 디지털전환","datasetId":"중기부 디지털전환 지원 실적","sourcePortal":"중기부","coverage":"전국 소상공인","lastVerified":"2026-04-08"},
  {"id":"mss-new-startups","name":"중기부: 신설법인 수","url":"https://www.mss.go.kr/","desc":"연간 신설법인 수","publisher":"중소벤처기업부","sourceType":"official-ministry-stat","updateCadence":"연간","methodology":"중소벤처기업부 창업기업동향 및 신설법인 통계 기준 연간 값 사용.","trust":"official-primary","datasetName":"신설법인 수","datasetId":"신설법인 수","sourcePortal":"중소벤처기업부","coverage":"전국","lastVerified":"2026-04-10"},
  {"id":"pps-narajangteo-contracts","name":"조달청 연보: 나라장터 조달계약 규모","url":"https://www.pps.go.kr","desc":"나라장터를 통한 연간 공공조달 계약 총액","publisher":"조달청","sourceType":"official-ministry","updateCadence":"연간","methodology":"조달청 연보와 나라장터 운영실적에 공표되는 연간 조달계약 총액을 대표값으로 사용한다. 중앙·지방·공공기관이 나라장터를 통해 체결한 계약 총액 기준이다.","trust":"official-primary","datasetName":"나라장터 조달계약 규모","datasetId":"조달청 연보","sourcePortal":"조달청","coverage":"전국 공공조달","lastVerified":"2026-04-09"},
  {"id":"un-digital-government","name":"UN E-Government Survey","url":"https://publicadministration.desa.un.org/egovkb/en-us/Reports/UN-E-Government-Survey-2024","desc":"온라인서비스 지수 등 디지털정부 국제 비교","publisher":"United Nations DESA","sourceType":"international-org","updateCadence":"격년","methodology":"UN E-Government Survey 원문 지표 인용","trust":"official-international","datasetName":"UN E-Government Survey Online Service Index","datasetId":"UN EGDI 2024","sourcePortal":"UN","coverage":"국가 간 비교","lastVerified":"2026-04-08"}
);
// END GENERATED POLICY INDICATORS


function enrichNode(node,parent=null){
  if(!node||typeof node!=="object")return;
  const orgInfo=orgCodeOverrides[node.name];
  if(orgInfo){
    node.identifiers={scheme:"data-go-kr-org-code",...ORG_SOURCE_DEFAULTS,...orgInfo,parentOrgCode:parent?.identifiers?.orgCode||null};
  } else if(parent?.identifiers?.orgCode){
    node.identifiers={scheme:"org-code-style-child",sourceId:"data-go-kr-org",status:"derived-child",orgCode:`${parent.identifiers.orgCode}/${node.name}`,orgCodeType:"style-derived",canonicalId:`derived-${node.name}`,parentOrgCode:parent.identifiers.orgCode};
  }

  const extra=nodeMetadata[node.name]||{};
  if(extra.effective) node.effective={...extra.effective};
  else if(!node.effective) node.effective={from:null,to:null,status:node.status==="planned"?"planned":"active"};
  if(extra.history) node.history=extra.history.map(item=>({...item}));

  const refs=new Set(["gov24-org","official-sites"]);
  if(node.identifiers?.sourceId) refs.add(node.identifiers.sourceId);
  if(extra.sourceRefs) extra.sourceRefs.forEach(ref=>refs.add(ref));
  if(node.budget){
    node.budgetMeta={fiscalYear:2026,phase:"government-proposal",unit:"KRW",displayAmount:node.budget,amountBasis:"display-only",...BUDGET_SOURCE_DEFAULTS,sourceRefs:["budget-2026-proposal","data-go-kr-budget"]};
    node.budgetSourceMeta={sourceId:node.budgetMeta.sourceId,datasetId:node.budgetMeta.datasetId,phase:node.budgetMeta.phase};
    refs.add("budget-2026-proposal");
    refs.add("data-go-kr-budget");
  }
  const policyIndicatorKey=node.identifiers?.canonicalId||node.name;
  if(policyIndicatorsByCanonicalId[policyIndicatorKey]?.length){
    node.policyIndicators=policyIndicatorsByCanonicalId[policyIndicatorKey].map(item=>({...item,canonicalId:policyIndicatorKey}));
    node.policyIndicators.forEach(item=>(item.sourceRefs||[]).forEach(ref=>refs.add(ref)));
  }
  if(node.publicInstitutions?.length) refs.add("data-go-kr-public-institutions");
  if(node.history?.length) node.history.forEach(item=>(item.sourceRefs||[]).forEach(ref=>refs.add(ref)));
  node.sourceRefs=Array.from(refs);

  if(Array.isArray(node.children)) node.children.forEach(child=>enrichNode(child,node));
}

enrichNode(govData,null);

// ═══ 국장/실장급 보직자 ═══
const divisionHeads={
  // 국세청
  "징세법무국":"박해영","개인납세국":"박정열","법인납세국":"심욱기","자산과세국":"오상훈","조사국":"안덕수",
  // 관세청
  "통관국":"이진희","심사국":"손성수",
  // 경찰청
  "국가수사본부":"박성주","경비국":"김병기",
  // 질병관리청
  "감염병위기관리국":"최홍석","만성질환관리국":"오진희",
  // 기상청
  "예보국":"함동주","기후과학국":"유상진",
  // 소방청
  "119대응국":"주영국",
  // 방위사업청
  "기반전력사업본부":"정재준","미래전력사업본부":"정기영",
  // 국민권익위원회
  "부패방지국":"김남두","고충처리국":"양종삼",
  // 관세청 조사국 (별도 - 관세청과 국세청 중복 방지)
};
