// 데이트 코스 데이터
var courses = [
    {
        id: 1,
        title: "홍대 카페 & 공방 데이트",
        region: "홍대",
        budget: "low",
        mood: "casual",
        time: "afternoon",
        emoji: "☕",
        summary: "감성 카페에서 시작해 공방 체험까지 즐기는 코스",
        description: "홍대의 유명한 감성 카페에서 여유로운 시간을 보내고, 함께 도자기를 만들어 보는 특별한 데이트예요.",
        places: [
            { name: "앤트러사이트 카페", type: "카페", desc: "폐공장을 개조한 감성 카페" },
            { name: "홍대 공방거리", type: "체험", desc: "커플 도자기 만들기 체험" },
            { name: "홍대 버스킹 거리", type: "산책", desc: "길거리 공연 구경하며 산책" }
        ],
        budget_detail: "카페 약 1만원 + 공방 약 2만원 = 총 3만원 이하",
        tip: "공방은 미리 예약하는 게 좋아요! 주말엔 빨리 마감돼요."
    },
    {
        id: 2,
        title: "강남 루프탑 로맨틱 디너",
        region: "강남",
        budget: "high",
        mood: "romantic",
        time: "evening",
        emoji: "🌆",
        summary: "야경이 아름다운 루프탑에서 즐기는 로맨틱 저녁",
        description: "강남의 멋진 루프탑 레스토랑에서 서울 야경을 보며 특별한 저녁을 보내세요. 기념일에 딱 어울리는 코스예요.",
        places: [
            { name: "강남 루프탑 레스토랑", type: "레스토랑", desc: "서울 야경이 보이는 루프탑 다이닝" },
            { name: "코엑스 주변 산책", type: "산책", desc: "식후 코엑스 근처 야경 산책" },
            { name: "강남 디저트 카페", type: "카페", desc: "달콤한 디저트로 마무리" }
        ],
        budget_detail: "루프탑 디너 1인 약 8~10만원",
        tip: "예약 필수! 창가 자리 요청하면 야경이 훨씬 잘 보여요."
    },
    {
        id: 3,
        title: "인사동 전통 문화 탐방",
        region: "인사동",
        budget: "low",
        mood: "cultural",
        time: "afternoon",
        emoji: "🎨",
        summary: "전통과 현대 예술이 공존하는 인사동 데이트",
        description: "인사동 갤러리와 공예품 가게를 둘러보며 한국 문화를 함께 즐겨요. 구경하는 재미가 쏠쏠해요.",
        places: [
            { name: "인사동 갤러리", type: "전시", desc: "다양한 미술 작품 무료 관람" },
            { name: "쌈지길", type: "쇼핑", desc: "개성 있는 소품과 공예품 구경" },
            { name: "인사동 전통 찻집", type: "카페", desc: "전통차와 함께 여유로운 시간" }
        ],
        budget_detail: "입장료 없음 + 음료 약 1만원",
        tip: "쌈지길에서 커플 소품 하나씩 사는 것도 추천해요!"
    },
    {
        id: 4,
        title: "이태원 세계 음식 투어",
        region: "이태원",
        budget: "mid",
        mood: "casual",
        time: "evening",
        emoji: "🌍",
        summary: "다양한 나라 음식을 함께 즐기는 이태원 푸드 투어",
        description: "이태원의 다양한 세계 음식 레스토랑을 돌며 새로운 맛을 함께 발견해봐요.",
        places: [
            { name: "이태원 멕시칸 레스토랑", type: "레스토랑", desc: "정통 타코와 부리또" },
            { name: "해방촌 골목 카페", type: "카페", desc: "분위기 있는 골목 카페" },
            { name: "이태원 거리 산책", type: "산책", desc: "다국적 분위기 즐기며 산책" }
        ],
        budget_detail: "1인 음식값 약 3~5만원",
        tip: "배고플 때 가세요! 먹을 게 너무 많아요."
    },
    {
        id: 5,
        title: "신촌 보드게임 데이트",
        region: "신촌",
        budget: "low",
        mood: "casual",
        time: "afternoon",
        emoji: "🎲",
        summary: "보드게임으로 함께 즐기는 신나는 실내 데이트",
        description: "신촌의 보드게임 카페에서 함께 게임을 즐기며 웃음이 넘치는 시간을 보내요. 경쟁하면서 더 가까워지는 느낌!",
        places: [
            { name: "신촌 보드게임 카페", type: "체험", desc: "다양한 보드게임 즐기기" },
            { name: "신촌 떡볶이 거리", type: "식사", desc: "매콤한 떡볶이와 튀김" },
            { name: "신촌 노래방", type: "체험", desc: "둘만의 노래 시간" }
        ],
        budget_detail: "보드게임 시간당 약 5천원 + 식사 약 1만원",
        tip: "보드게임은 2시간 이상 즐기는 게 좋아요!"
    },
    {
        id: 6,
        title: "한강 피크닉 데이트",
        region: "홍대",
        budget: "low",
        mood: "romantic",
        time: "afternoon",
        emoji: "🧺",
        summary: "한강에서 즐기는 여유롭고 로맨틱한 피크닉",
        description: "편의점에서 간식을 사서 한강에서 돗자리 펴고 하늘 보며 이야기해요. 별것 없어도 둘이라서 행복한 날!",
        places: [
            { name: "편의점", type: "쇼핑", desc: "피크닉 간식 장보기" },
            { name: "한강 공원", type: "공원", desc: "돗자리 펴고 피크닉" },
            { name: "홍대 저녁 거리", type: "산책", desc: "음악 들으며 저녁 산책" }
        ],
        budget_detail: "편의점 간식 약 1~2만원",
        tip: "돗자리 챙기는 거 잊지 마세요! 출발 전 날씨 꼭 확인하세요."
    },
    {
        id: 7,
        title: "강남 뮤지컬 & 저녁 식사",
        region: "강남",
        budget: "high",
        mood: "romantic",
        time: "evening",
        emoji: "🎭",
        summary: "뮤지컬 관람 후 근사한 저녁 식사",
        description: "감동적인 뮤지컬을 함께 보고 맛있는 저녁으로 특별한 하루를 마무리해요. 기념일에 강력 추천!",
        places: [
            { name: "예스24 스테이지", type: "공연", desc: "뮤지컬 또는 연극 관람" },
            { name: "강남 이탈리안 레스토랑", type: "레스토랑", desc: "파스타와 와인으로 저녁" },
            { name: "가로수길 야간 산책", type: "산책", desc: "분위기 있는 밤 산책" }
        ],
        budget_detail: "뮤지컬 티켓 5~10만원 + 식사 약 5만원",
        tip: "뮤지컬은 최소 2주 전에 미리 예매하세요! 인기 공연은 금방 매진돼요."
    },
    {
        id: 8,
        title: "인사동 한복 체험",
        region: "인사동",
        budget: "mid",
        mood: "cultural",
        time: "morning",
        emoji: "👘",
        summary: "한복 입고 인사동 & 경복궁 근처 산책",
        description: "한복을 빌려 입고 전통 거리를 함께 걷는 낭만적이고 특별한 경험이에요. 사진이 정말 예쁘게 나와요.",
        places: [
            { name: "한복 대여점", type: "체험", desc: "예쁜 한복 골라서 대여" },
            { name: "인사동 전통 거리", type: "산책", desc: "한복 입고 사진 찍기" },
            { name: "전통 디저트 카페", type: "카페", desc: "전통 과자와 차 즐기기" }
        ],
        budget_detail: "한복 대여 약 2~3만원 + 음료 약 1만원",
        tip: "날씨 좋은 날 가세요! 맑은 날 사진이 정말 잘 나와요."
    },
    {
        id: 9,
        title: "이태원 루프탑 칵테일 바",
        region: "이태원",
        budget: "mid",
        mood: "romantic",
        time: "night",
        emoji: "🍸",
        summary: "이태원 루프탑에서 야경 보며 칵테일 한 잔",
        description: "이태원의 감성 루프탑 바에서 야경을 바라보며 칵테일을 즐겨요. 분위기 하나는 정말 최고예요.",
        places: [
            { name: "이태원 루프탑 바", type: "바", desc: "야경 보이는 루프탑 칵테일 바" },
            { name: "경리단길 산책", type: "산책", desc: "밤의 경리단길 걷기" },
            { name: "야식 포차", type: "식사", desc: "포차에서 가볍게 야식" }
        ],
        budget_detail: "칵테일 2잔 약 3~4만원",
        tip: "21시 이후에 가면 야경이 가장 예뻐요."
    },
    {
        id: 10,
        title: "신촌 클라이밍 액티브 데이트",
        region: "신촌",
        budget: "mid",
        mood: "active",
        time: "morning",
        emoji: "🧗",
        summary: "클라이밍으로 함께 땀 흘리는 활동적인 데이트",
        description: "실내 클라이밍을 함께 배우고 도전하며 서로를 응원하는 시간을 가져요. 운동 후 먹는 밥이 최고!",
        places: [
            { name: "신촌 클라이밍 센터", type: "운동", desc: "초보자도 할 수 있는 실내 클라이밍" },
            { name: "근처 국수 집", type: "식사", desc: "운동 후 칼칼한 국수 한 그릇" },
            { name: "신촌 카페", type: "카페", desc: "커피 한 잔하며 오늘 이야기 나누기" }
        ],
        budget_detail: "클라이밍 약 1.5만원 + 식사 약 1만원",
        tip: "운동화와 편한 옷 입고 가세요! 청바지는 불편해요."
    },
    {
        id: 11,
        title: "홍대 라이브 클럽 데이트",
        region: "홍대",
        budget: "mid",
        mood: "casual",
        time: "night",
        emoji: "🎵",
        summary: "홍대 라이브 클럽에서 음악과 함께하는 밤",
        description: "홍대의 라이브 클럽에서 인디밴드 공연을 보며 음악으로 가득한 밤을 즐겨요.",
        places: [
            { name: "홍대 라이브 클럽", type: "공연", desc: "인디밴드 라이브 공연 관람" },
            { name: "홍대 포차거리", type: "식사", desc: "맥주와 안주로 밤 분위기" },
            { name: "새벽 빵집 구경", type: "카페", desc: "새벽에 갓 구운 빵 구경하며 마무리" }
        ],
        budget_detail: "입장료 약 1만원 + 음식 약 2~3만원",
        tip: "라이브 공연 스케줄은 미리 SNS에서 확인하고 가세요!"
    },
    {
        id: 12,
        title: "강남 커플 스파 & 힐링",
        region: "강남",
        budget: "high",
        mood: "romantic",
        time: "afternoon",
        emoji: "💆",
        summary: "커플 스파로 함께 릴렉싱하는 특별한 데이트",
        description: "커플 스파에서 함께 힐링하고 고급스러운 티타임까지 즐겨요. 기념일 선물로도 최고예요.",
        places: [
            { name: "강남 커플 스파", type: "스파", desc: "전신 마사지 & 스파 체험" },
            { name: "애프터눈 티 카페", type: "카페", desc: "고급스러운 애프터눈 티 세트" },
            { name: "청담동 디저트 가게", type: "디저트", desc: "달콤한 디저트로 마무리" }
        ],
        budget_detail: "커플 스파 약 15~20만원",
        tip: "기념일에 예약하면 서비스가 좋아요!"
    },
    {
        id: 13,
        title: "인사동 아침 사진 데이트",
        region: "인사동",
        budget: "low",
        mood: "romantic",
        time: "morning",
        emoji: "📸",
        summary: "조용한 아침 인사동에서 사진 찍으며 산책",
        description: "사람이 적은 이른 아침, 인사동의 고즈넉한 골목을 함께 걸으며 사진을 찍어요. 평소와 다른 분위기!",
        places: [
            { name: "북촌 한옥마을", type: "산책", desc: "아침 한옥 골목 산책" },
            { name: "인사동 아침 카페", type: "카페", desc: "조용한 카페에서 아침 커피" },
            { name: "청계천 산책", type: "산책", desc: "청계천 따라 걷기" }
        ],
        budget_detail: "음료 약 1만원 (거의 무료!)",
        tip: "9시 이전에 가면 사람이 없어서 사진 찍기 정말 좋아요!"
    },
    {
        id: 14,
        title: "신촌 영화 & 맛집 데이트",
        region: "신촌",
        budget: "mid",
        mood: "casual",
        time: "evening",
        emoji: "🎬",
        summary: "영화 한 편 보고 맛있는 저녁 식사",
        description: "신촌에서 보고 싶었던 영화를 보고 근처 맛집에서 저녁 식사를 즐겨요. 데이트의 기본이죠!",
        places: [
            { name: "신촌 CGV", type: "영화", desc: "보고 싶은 영화 함께 보기" },
            { name: "신촌 삼겹살 맛집", type: "식사", desc: "고기 구워먹으며 영화 이야기" },
            { name: "신촌 카페 거리", type: "카페", desc: "디저트 카페에서 마무리" }
        ],
        budget_detail: "영화 1인 약 1.5만원 + 식사 약 2~3만원",
        tip: "영화 전에 식사하면 너무 배불러요. 영화 먼저 보는 걸 추천!"
    },
    {
        id: 15,
        title: "이태원 미술관 & 브런치",
        region: "이태원",
        budget: "mid",
        mood: "cultural",
        time: "afternoon",
        emoji: "🖼️",
        summary: "이태원 근처 미술관에서 문화적인 데이트",
        description: "이태원 근처의 멋진 미술관에서 예술 작품을 감상하고 함께 이야기 나눠요. 나중에 카페에서 서로 느낀 점 이야기하면 더 좋아요.",
        places: [
            { name: "리움미술관", type: "전시", desc: "현대미술 & 한국 고미술 관람" },
            { name: "이태원 브런치 카페", type: "식사", desc: "감각적인 브런치 메뉴" },
            { name: "경리단길 골목 탐방", type: "산책", desc: "독특한 가게들 구경하기" }
        ],
        budget_detail: "미술관 입장료 약 1만원 + 브런치 약 2만원",
        tip: "리움미술관 입장 전 홈페이지에서 예약 여부 확인해보세요!"
    }
];
