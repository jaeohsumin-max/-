export const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "fashion", label: "패션" },
  { id: "beauty", label: "뷰티" },
  { id: "life", label: "라이프" },
  { id: "digital", label: "디지털" },
  { id: "food", label: "푸드" },
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "울 블렌드 오버코트",
    category: "fashion",
    price: 289000,
    originalPrice: 359000,
    rating: 4.8,
    reviews: 124,
    badge: "BEST",
    description:
      "이탈리아 수입 울 70% 블렌드. 가볍고 따뜻한 실루엣으로 겨울부터 초봄까지 활용하기 좋은 시그니처 아우터입니다.",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["차콜", "카멜", "블랙"],
    stock: 24,
  },
  {
    id: "p2",
    name: "캐시미어 터틀넥",
    category: "fashion",
    price: 89000,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    badge: "NEW",
    description:
      "부드러운 캐시미어 혼방 소재. 목 라인이 깔끔하고 레이어드에 최적화된 데일리 니트입니다.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["아이보리", "그레이", "네이비"],
    stock: 42,
  },
  {
    id: "p3",
    name: "레더 크로스백",
    category: "fashion",
    price: 168000,
    originalPrice: 198000,
    rating: 4.9,
    reviews: 203,
    badge: "SALE",
    description:
      "천연 가죽 소재의 미니멀 크로스백. 13인치 노트북 수납 가능, 데일리·출근 모두 어울립니다.",
    images: [
      "https://images.unsplash.com/photo-1548039185-6e6278714f77?w=800&q=80",
    ],
    sizes: ["FREE"],
    colors: ["브라운", "블랙"],
    stock: 15,
  },
  {
    id: "p4",
    name: "하이드레이팅 세럼 50ml",
    category: "beauty",
    price: 42000,
    originalPrice: null,
    rating: 4.7,
    reviews: 512,
    badge: "BEST",
    description:
      "히알루론산 3종 복합 + 나이아신아마이드. 끈적임 없이 촉촉하게 스며드는 데일리 세럼입니다.",
    images: [
      "https://images.unsplash.com/photo-1620916564558-83132637ac5a?w=800&q=80",
    ],
    sizes: ["50ml"],
    colors: [],
    stock: 120,
  },
  {
    id: "p5",
    name: "벨벳 립 틴트 세트",
    category: "beauty",
    price: 36000,
    originalPrice: 45000,
    rating: 4.5,
    reviews: 278,
    badge: null,
    description:
      "벨벳 마무리 4컬러 구성. 입술 건조함 없이 선명한 발색이 오래 유지됩니다.",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    ],
    sizes: ["4종 세트"],
    colors: ["로지", "누드", "코랄", "버건디"],
    stock: 67,
  },
  {
    id: "p6",
    name: "아로마 디퓨저 & 리필",
    category: "life",
    price: 58000,
    originalPrice: null,
    rating: 4.4,
    reviews: 156,
    badge: "NEW",
    description:
      "천연 에센셜 오일 블렌드. 거실·침실 20㎡ 기준 8주 사용, 리필 1회 포함 패키지입니다.",
    images: [
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    ],
    sizes: ["200ml"],
    colors: ["화이트 머스크", "시트러스", "라벤더"],
    stock: 38,
  },
  {
    id: "p7",
    name: "세라믹 머그 2P 세트",
    category: "life",
    price: 32000,
    originalPrice: null,
    rating: 4.6,
    reviews: 94,
    badge: null,
    description:
      "핸드메이드 세라믹. 전자레인지·식기세척기 사용 가능, 미니멀한 무광 마감입니다.",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca0d?w=800&q=80",
    ],
    sizes: ["350ml x 2"],
    colors: ["크림", "세이지", "테라코타"],
    stock: 55,
  },
  {
    id: "p8",
    name: "린넨 테이블 러너",
    category: "life",
    price: 45000,
    originalPrice: 52000,
    rating: 4.3,
    reviews: 41,
    badge: "SALE",
    description:
      "유럽산 린넨 100%. 식탁 위 분위기를 살려주는 내추럴 홈 데코 아이템입니다.",
    images: [
      "https://images.unsplash.com/photo-1615874959472-a9a072c566db?w=800&q=80",
    ],
    sizes: ["45x180cm", "45x220cm"],
    colors: ["내추럴", "올리브"],
    stock: 29,
  },
  {
    id: "p9",
    name: "노이즈캔슬링 이어폰",
    category: "digital",
    price: 199000,
    originalPrice: 249000,
    rating: 4.8,
    reviews: 891,
    badge: "BEST",
    description:
      "액티브 노이즈 캔슬링, 30시간 재생. IPX5 방수, 멀티 페어링 지원 무선 이어폰입니다.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    ],
    sizes: ["FREE"],
    colors: ["화이트", "블랙", "실버"],
    stock: 88,
  },
  {
    id: "p10",
    name: "무선 충전 스탠드",
    category: "digital",
    price: 49000,
    originalPrice: null,
    rating: 4.5,
    reviews: 167,
    badge: null,
    description:
      "15W 고속 충전, 아이폰·갤럭시·에어팟 동시 충전. 알루미늄 베이스로 안정적인 거치감.",
    images: [
      "https://images.unsplash.com/photo-1591290619762-c588a1e82624?w=800&q=80",
    ],
    sizes: ["FREE"],
    colors: ["실버", "스페이스 그레이"],
    stock: 73,
  },
  {
    id: "p11",
    name: "유기농 그래놀라 3종",
    category: "food",
    price: 24000,
    originalPrice: null,
    rating: 4.7,
    reviews: 334,
    badge: "BEST",
    description:
      "국내산 귀리·견과류. 설탕 무첨가, 아침 시리얼·요거트 토핑으로 인기 있는 건강 간식입니다.",
    images: [
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
    ],
    sizes: ["300g x 3"],
    colors: [],
    stock: 200,
  },
  {
    id: "p12",
    name: "스페셜티 원두 200g",
    category: "food",
    price: 18000,
    originalPrice: null,
    rating: 4.9,
    reviews: 445,
    badge: "NEW",
    description:
      "에티오피아 예가체프 G1. 밝은 산미와 플로럴 노트, 핸드 드립·에스프레소 모두 추천합니다.",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55c?w=800&q=80",
    ],
    sizes: ["200g", "500g"],
    colors: ["원두", "분쇄"],
    stock: 150,
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR").format(price) + "원";
}

export function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
