import type { Dictionary } from "./en";

// Typed against Dictionary (not `as const`) so a missing/extra/mistyped key
// here is a compile error, not a silent runtime fallback to English.
export const ko: Dictionary = {
  common: {
    programGuide: "프로그램 가이드",
    contact: "문의하기",
    teacherLogin: "교사 로그인",
    getStarted: "시작하기",
    privacyPolicy: "개인정보처리방침",
    terms: "이용약관",
    signOut: "로그아웃",
  },

  nav: {
    menu: "메뉴",
    closeMenu: "메뉴 닫기",
    teacherConsole: "교사 콘솔 →",
  },

  footer: {
    programHeading: "프로그램",
    accountHeading: "계정",
    legalHeading: "법적 고지",
    tagline:
      "AI Lab for Kids — 4~8세를 위한, 교사가 이끄는 AI 리터러시 & 영어 수업.",
  },

  scrollCue: {
    scroll: "스크롤",
  },

  hero: {
    eyebrow: "AI 리터러시 + 영어 · 4~8세",
    titleBefore: "아이들은 그냥 ",
    titleUnderlined: "AI",
    titleAfter: "를 갖고 노는 게 아니라 — AI가 어떻게 생각하는지 배웁니다.",
    subtitle:
      "한 화면, 한 학급 — Vora와 함께 영어와 진짜 AI 개념을 나란히 배우는 1년 전체 교사 주도 커리큘럼입니다.",
    terminalLine: "레슨 72개 · 실시간 AI 호출 0회",
    annotation: "한 화면, 한 교사",
    bubble: "안녕! 나는 Vora야.",
    perceptionLabel: "지각",
    reasoningLabel: "추론",
    learningLabel: "학습",
  },

  features: {
    eyebrow: "무엇이 다른가요",
    title: "AI 스티커만 붙인 영어 앱이 아닙니다",
    items: {
      realAiIdeas: {
        title: "라벨이 아니라 진짜 AI 개념",
        body: "모든 유닛은 지각, 패턴, 예시를 통한 학습 같은 AI4K12의 진짜 빅 아이디어 하나를 4~8세 아이가 실제로 할 수 있는 놀이를 통해 가르칩니다.",
      },
      oneScreen: {
        title: "한 화면, 한 교사",
        body: "아이마다 태블릿을 쥐어주는 방식이 아니라, 프로젝터와 교실을 이끄는 교사를 위해 만들어졌습니다. 모든 레슨은 그대로 집어 들고 가르칠 수 있는 완전한 스크립트 수업안입니다.",
      },
      wholeYear: {
        title: "1년 전체가 촘촘하게 설계됨",
        body: "12개 테마 유닛에 걸친 72개의 완전 제작 레슨이 첫 수업부터 마지막까지 교육과정 표준에 맞춰져 있으며, 유닛마다 인쇄 가능한 가이드가 제공됩니다.",
      },
      genuinelyFun: {
        title: "15분 이상, 진짜로 재미있게",
        body: "동작 활동, 챈트, 게임이 교실을 계속 움직이게 합니다 — 로봇 스티커만 붙은 워크시트가 아닙니다.",
      },
    },
  },

  gallery: {
    eyebrow: "Vora와 함께하는 1년",
    title: "12개의 테마 유닛, 각각의 빅 아이디어",
    cta: "전체 프로그램 가이드 보기",
  },

  underTheHood: {
    eyebrow: "내부를 살짝 들여다보면",
    title:
      "모든 레슨은 스크립트로 작성되어 있습니다. 실시간 모델은 전혀 사용하지 않습니다.",
    annotation: "진짜로 72개 레슨입니다",
  },

  finalCta: {
    title: "Vora를 교실로 초대할 준비가 되셨나요?",
    body: "교사 계정을 만들어 보세요 — 학교 관리자의 승인 후 바로 콘솔을 이용할 수 있습니다.",
    cta: "계정 만들기",
  },

  homeStats: {
    lessons: "개 레슨 제작 완료",
    activities: "개 활동",
    engineTypes: "개 활동 유형",
    aiLiteracyActivities: "개 AI 리터러시 활동",
  },

  terminal: {
    lessonsAuthored: "레슨 {n}개 제작 완료",
    activitiesAcrossEngines: "활동 {n}개, {m}가지 유형",
    aiLiteracyActivities: "진짜 AI 리터러시 활동 {n}개",
    noLiveAiCalls: "실시간 AI 호출 0회 — 100% 스크립트 기반, 항상 안전",
  },

  formField: {
    email: "이메일",
    password: "비밀번호",
    name: "이름",
  },

  auth: {
    backToHome: "← 홈으로 돌아가기",
    brandHeading: "머신을 가르치세요. 학급을 가르치세요.",
    login: {
      title: "교사 로그인",
      subtitle: "AI Lab for Kids — 교사 콘솔",
      submit: "로그인",
      submitting: "로그인 중...",
      footerPrompt: "처음이신가요? ",
      footerLink: "계정 만들기",
    },
    signup: {
      title: "계정 만들기",
      subtitle:
        "AI Lab for Kids — 학급을 시작하기 전에 학교 관리자가 새 교사 계정을 승인합니다.",
      submit: "계정 생성",
      submitting: "계정 생성 중...",
      footerPrompt: "이미 계정이 있으신가요? ",
      footerLink: "로그인",
    },
    alreadySignedIn: {
      title: "이미 로그인되어 있습니다",
      bodyBefore: "",
      bodyMiddle: "님으로 로그인되어 있습니다 (",
      bodyAfter:
        "). 다른 계정으로 로그인하거나 가입하려면 먼저 로그아웃해 주세요.",
      goToDashboard: "대시보드로 이동",
    },
    pendingApproval: {
      title: "거의 다 됐어요, {name}님!",
      body: "계정은 생성되었지만 학교 관리자가 교사로 승인하기를 기다리고 있습니다. 승인되면 이 페이지에서 바로 학급으로 이동할 수 있습니다.",
    },
  },

  legal: {
    updated: "최종 업데이트: {year}년 — 아래는 쉬운 말로 정리한 요약입니다.",
  },

  privacy: {
    title: "개인정보처리방침",
    toc: {
      noChildData: "아동 정보는 수집하지 않습니다",
      whatWeCollect: "수집하는 정보",
      noLiveAi: "실시간 AI 없음",
      cookies: "쿠키",
      storage: "데이터 저장 위치",
      questions: "문의사항",
    },
    noChildData: {
      title: "아동의 정보는 절대 수집하지 않습니다",
      body: "AI Lab for Kids에는 학생 계정도, 학생 로그인도 없으며 아이가 무언가를 입력하거나 업로드할 방법이 전혀 없습니다. 교사 한 명이 자신의 기기로 수업을 진행하고 화면을 교실에 투사하는 방식이라, 아이들은 키보드를 만질 일이 없습니다. 저희는 학급 내 아동의 이름, 나이, 사진 등 어떤 정보도 수집하지 않습니다.",
    },
    whatWeCollect: {
      title: "저희가 수집하는 정보",
      items: [
        "교사/관리자 계정 정보: 이름, 이메일 주소, 안전하게 해시 처리된 비밀번호.",
        "기관, 학교, 학급 메타데이터(이름, 학년 표기, 연령 트랙).",
        "레슨 진행 상황: 학급이 레슨에서 마지막으로 도달한 단계와 완료 여부 — 개별 학생과 연결되지 않습니다.",
        "학교 관리자가 커리큘럼 콘텐츠를 커스터마이징하기 위해 자발적으로 업로드하는 사진이나 오디오(예: 어휘 단어 옆에 넣는 학급 사진). 이는 성인이 자발적으로 업로드하는 것이며, 아이가 업로드하는 경우는 없습니다.",
      ],
    },
    noLiveAi: {
      title: "실시간 AI 없음, 제3자 모델로 전송되는 정보 없음",
      body: '모든 레슨은 미리 작성된 스크립트 콘텐츠입니다 — 챗봇도, 실시간 AI 모델도 없으며 교사나 아이가 말하는 어떤 내용도 AI 처리를 위해 어딘가로 전송되지 않습니다. 커리큘럼 속 "AI"는 실시간 서비스로 구동되는 것이 아니라 하나의 개념으로 가르쳐집니다.',
    },
    cookies: {
      title: "쿠키",
      body: "저희는 교사의 로그인 상태를 유지하기 위해 안전한 HTTP-only 세션 쿠키 하나만 사용합니다. 광고 쿠키는 사용하지 않으며, 이 사이트에는 제3자 분석이나 추적 스크립트가 없습니다.",
    },
    storage: {
      title: "데이터 저장 위치",
      body: "계정 및 진행 데이터는 이 배포를 위해 운영되는 Postgres 데이터베이스에 저장됩니다. 업로드된 사진과 오디오는 애플리케이션 서버에 파일로 저장됩니다. 기관 또는 교사 계정을 삭제하면 관련 데이터도 함께 삭제됩니다.",
    },
    questions: {
      title: "문의사항",
      before: "언제든지 ",
      after: " 로 문의해 주세요.",
    },
  },

  terms: {
    title: "이용약관",
    toc: {
      whoFor: "이용 대상",
      accounts: "계정 및 접근 권한",
      uploads: "업로드된 콘텐츠",
      noPromises: "보장하지 않는 사항",
      changes: "변경사항",
      questions: "문의사항",
    },
    whoFor: {
      title: "이용 대상",
      body: "AI Lab for Kids는 교사와 학교 관리자가 교실 수업을 진행할 수 있도록 만들어졌습니다. 계정은 성인 전용이며, 어떤 형태로든 아동을 대상으로 한 로그인은 없습니다.",
    },
    accounts: {
      title: "계정 및 접근 권한",
      body: "새 교사 계정은 학교 관리자가 승인할 때까지 대기 상태로 시작됩니다. 학교 관리자는 누구를 승인하는지, 그리고 승인된 교사가 학급 콘텐츠로 무엇을 하는지에 대한 책임이 있습니다.",
    },
    uploads: {
      title: "업로드된 콘텐츠",
      body: "학교 관리자가 레슨을 커스터마이징하기 위해 사진이나 오디오를 업로드할 경우, 이를 사용할 권리가 있음을 확인하는 것입니다(예: 필요한 학부모/보호자 동의를 학교 자체 정책에 따라 학교가 처리한, 자기 학급의 사진). 저희는 부적절하거나 저작권을 침해하는 것으로 신고된 콘텐츠를 삭제할 수 있습니다.",
    },
    noPromises: {
      title: "보장하지 않는 사항",
      body: "본 서비스는 있는 그대로 제공됩니다. 레슨의 정확성과 앱의 원활한 운영을 위해 최선을 다하지만, 중단 없는 서비스 제공을 보장하지는 않습니다.",
    },
    changes: {
      title: "변경사항",
      body: "제품이 발전함에 따라 본 약관을 업데이트할 수 있습니다. 변경 후에도 서비스를 계속 이용하시면 업데이트에 동의하는 것으로 간주됩니다.",
    },
    questions: {
      title: "문의사항",
      before: "",
      after: " 로 문의해 주세요.",
    },
  },

  contact: {
    eyebrow: "문의하기",
    title: "인사해 주세요.",
    body: "학교에 AI Lab for Kids를 도입하는 것에 대한 질문, 버그 제보, 그 외 무엇이든 — 연락 주시면 실제 담당자가 답변드립니다.",
    annotation: "실제 담당자가, 보통 하루 안에 답장합니다",
    alreadyTeacher:
      "이미 플랫폼에 등록된 교사이신가요? 학교 관리자는 콘솔 내 관리자 패널에서 교사 접근 권한을 추가하거나 제거할 수 있습니다.",
  },

  curriculumPage: {
    eyebrow: "프로그램 가이드",
    subtitle:
      "AI 리터러시를 통한 영어 교육, 한국 초등 교실을 위한, 4~8세 대상 — 교사 주도, 한 화면, 첫 수업부터 마지막까지 교육과정 표준에 맞춰 설계되었습니다.",
    stats: {
      lessons: "개 레슨 완전 제작",
      activitiesEngines: "개 활동 · {n}가지 유형",
      aiLabActivities: "올해 AI Lab 활동",
      bigIdeasCovered: "AI4K12 빅 아이디어 커버리지",
    },
    teacherConsole: "교사 콘솔 →",
    printLabel: "🖨️ 인쇄 / PDF로 저장",
    printFooter:
      "⌘/Ctrl + P를 누르거나 위의 인쇄 버튼을 사용해 이 가이드를 PDF로 저장하세요.",
    programDesign: {
      eyebrow: "프로그램 설계",
      title: "프로그램은 이렇게 구성되어 있습니다",
      foundations: {
        label: "1. 기초 과정",
        body: '8주 · 24개 레슨. "Vora의 교실" — 인사말, 교실 기본 표현, 그리고 첫 AI 개념을 CEFR pre-A1/A1 수준으로 다룹니다.',
      },
      yearCurriculum: {
        label: "2. 연간 커리큘럼",
        body: "4개 학기 · 12개 테마 유닛 · 48개 레슨. 매달 하나의 AI4K12 빅 아이디어를 계절별 영어 테마와 함께 다룹니다.",
      },
      capstone: {
        label: "3. 캡스톤(마무리)",
        body: "12개월 차에는 한 해 동안의 모든 게임과 모든 AI 개념을 복습하며, 연간 최종 듣기 체크포인트도 함께 진행합니다.",
      },
      anatomyLabel: "모든 레슨은 같은 구성을 따릅니다",
      weekJobLabel: "매달, 매주는 각기 다른 역할을 맡습니다",
      weekJobNote:
        "4주 차는 3, 6, 9, 12개월 차에 분기별 듣기 체크포인트를 겸하며, 이 연령대가 흔히 어려워하는 발음 대조를 복습합니다.",
      tracksLabel: "두 개의 연령 트랙, 하나의 커리큘럼",
    },
    yearAtGlance: {
      eyebrow: "한 해 전체",
      title: "한눈에 보는 연간 커리큘럼",
      unit: "유닛",
      theme: "테마",
      bigIdea: "AI 빅 아이디어",
      englishFocus: "영어 초점",
      checkpoint: "체크포인트",
      checkpointMark: "✓ 듣기 체크포인트",
    },
    unitDetail: {
      eyebrow: "핵심 내용",
      title: "유닛별 상세 안내",
      intro:
        "아래의 모든 레슨은 실제로 제작된 콘텐츠입니다 — 목표와 표준은 마케팅 문구가 아니라 커리큘럼 원본 자료에서 그대로 가져온 것입니다.",
      termLabel: "학기",
      unitsLabel: "유닛",
      pacingLink: "이 유닛의 인쇄용 진도 가이드 →",
    },
    foundationsMap: {
      eyebrow: "여기서부터 시작하세요",
      title: "기초 과정 — Vora의 교실",
      introBefore:
        "대부분의 학급이 연간 커리큘럼을 시작하기 전에 완료하는 8주, 24개 레슨의 파일럿 유닛입니다. 전체 맵: ",
      week: "주차",
      day: "일차",
      lesson: "레슨",
      englishFocus: "영어 초점",
      standards: "표준",
    },
    standardsAlignment: {
      eyebrow: "사실에 기반한 신뢰",
      title: "교육과정 표준 연계",
      mappingLabel: "각 활동이 표준과 연결되는 방식",
      lessonsCount: "레슨 {n}개",
    },
    safety: {
      eyebrow: "신뢰",
      title: "안전과 접근 방식",
      teacherLed: {
        heading: "교사 주도, 한 화면 — 설계 원칙",
        body: "교사 한 명이 자신의 노트북을 프로젝터나 스마트보드에 연결해 수업을 진행하며 구두로 학급의 속도를 조절합니다 — 아이마다 각자의 기기를 쥐는 방식이 아닙니다. 이는 한국의 학원과 공교육 교실이 실제로 운영되는 방식과 일치합니다.",
      },
      noChatbot: {
        heading: "실시간 AI 챗봇 없음 — 설계 원칙",
        coppa:
          "아동을 위한 실시간 채팅 화면은 검증 가능한 보호자 동의와 콘텐츠 모더레이션이 필요한 데이터 수집형 제품이며, 레슨 진행 상황만 저장하는 앱과는 완전히 다른 컴플라이언스 영역입니다.",
        pedagogical:
          '이 연령대에서는 "AI가 언어를 어떻게 이해하는가"를 4~8세 아이가 직접 영어를 파싱하고 생성해야 하는 실시간 대화보다 하나의 개념으로 가르치는 편이 더 효과적입니다.',
        simulable:
          '"AI는 예시로부터 학습하며 틀릴 수 있다"와 "AI는 정해진 지시를 순서대로 따른다"는 스크립트화된 결정론적 콘텐츠만으로도 완전히 시연할 수 있습니다 — 실시간 모델 출력과 달리 매번 연령에 적합함이 보장됩니다.',
      },
      notBuilding: {
        heading: "이 프로그램이 의도적으로 만들지 않는 것",
        usCurricula:
          "미국 주(州)별 커리큘럼(텍사스, 캘리포니아 등) — 한국 교실과는 관련이 없습니다. 실질적으로 대응되는 한국 시장 맞춤화는 위에서 다룬 모국어(L1) 타겟팅과 테마 시퀀스 작업입니다.",
        chatbot:
          "실시간 AI 챗봇, 작문 코치, 또는 이미지 생성기 — 위에서 밝힌 '실시간 AI 없음' 안전 원칙과 정면으로 배치됩니다. 저희는 이 결정을 숨기지 않고 먼저 밝힙니다.",
        specialNeeds:
          "특수교육 커리큘럼(ADHD, 자폐, 난독증, 영재 등) — 이 팀이 보유하지 않은 임상 전문성이 필요합니다. 이를 표방하는 것은 취약한 가정을 대상으로 한 허위 역량 주장이 될 것입니다.",
        marketing:
          "비교 페이지, 블로그, 마케팅 가이드 — 커리큘럼이 아니라 콘텐츠 마케팅 영역입니다. 이 페이지 자체가 전체 소개 자료입니다.",
      },
      everyClaim:
        "이 페이지의 모든 내용은 앱이 실제로 구동하는 것과 동일한 커리큘럼 데이터로부터 생성됩니다 — 제품과 별도로 작성된 내용은 없습니다.",
    },
  },
};
