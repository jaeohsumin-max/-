export const CATEGORIES = [
  { id: "all", label: "ALL" },
  { id: "new", label: "NEW 10%" },
  { id: "outer", label: "OUTER" },
  { id: "top", label: "TOP" },
  { id: "bottom", label: "BOTTOM" },
  { id: "skirt", label: "SKIRT" },
  { id: "dress", label: "DRESS/SET" },
  { id: "acc", label: "ACC" },
];

export const PRODUCTS = [
  {
    id: "p1",
    name: "울 블렌드 오버코트",
    category: "outer",
    made: true,
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
    category: "top",
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
    name: "린넨 오버셔츠",
    category: "top",
    price: 78000,
    originalPrice: 98000,
    rating: 4.7,
    reviews: 156,
    badge: "SALE",
    description:
      "통기성 좋은 린넨 혼방. 여름 레이어드나 단독 착용 모두 어울리는 오버핏 셔츠입니다.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2b?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["화이트", "베이지", "스카이"],
    stock: 31,
  },
  {
    id: "p4",
    name: "실크 미디 드레스",
    category: "dress",
    price: 168000,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    badge: "BEST",
    description:
      "은은한 광택의 실크 혼방 원단. 바디 라인을 살린 미디 기장의 데이트·하객룩 원피스입니다.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b5?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["블랙", "샴페인", "로즈"],
    stock: 18,
  },
  {
    id: "p5",
    name: "플리츠 미니 스커트",
    category: "skirt",
    price: 68000,
    originalPrice: 82000,
    rating: 4.5,
    reviews: 98,
    badge: null,
    description:
      "잔잔한 플리츠 디테일. 허리 밴딩으로 편안하며 캐주얼부터 오피스룩까지 활용 가능합니다.",
    images: [
      "https://images.unsplash.com/photo-1583498276836-2a896f8bf6b5?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["블랙", "네이비", "카키"],
    stock: 45,
  },
  {
    id: "p6",
    name: "와이드 슬랙스",
    category: "bottom",
    price: 98000,
    originalPrice: null,
    rating: 4.6,
    reviews: 167,
    badge: "NEW",
    description:
      "드레이핑감 있는 텐셀 혼방. 와이드 핏으로 다리 라인을 슬림하게 연출하는 데일리 슬랙스입니다.",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["차콜", "블랙", "베이지"],
    stock: 52,
  },
  {
    id: "p7",
    name: "코튼 맨투맨",
    category: "top",
    price: 52000,
    originalPrice: null,
    rating: 4.4,
    reviews: 234,
    badge: null,
    description:
      "기모 없는 라이트웨이트 코튼. 부드러운 안감과 여유로운 실루엣의 데일리 맨투맨입니다.",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["그레이", "오트밀", "블랙"],
    stock: 67,
  },
  {
    id: "p8",
    name: "하이웨이스트 데님",
    category: "bottom",
    price: 89000,
    originalPrice: 109000,
    rating: 4.7,
    reviews: 312,
    badge: "SALE",
    description:
      "탄탄한 12oz 데님. 하이웨이스트로 다리를 길어 보이게 하는 스트레이트 핏 팬츠입니다.",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["인디고", "라이트블루", "블랙"],
    stock: 38,
  },
  {
    id: "p9",
    name: "오버사이즈 블레이저",
    category: "top",
    price: 198000,
    originalPrice: 248000,
    rating: 4.8,
    reviews: 189,
    badge: "BEST",
    description:
      "구조적인 어깨 라인의 오버핏 블레이저. 출근룩·데이트룩 모두 완성하는 시그니처 아우터입니다.",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["블랙", "베이지", "그레이"],
    stock: 22,
  },
  {
    id: "p10",
    name: "크롭 니트 가디건",
    category: "top",
    price: 62000,
    originalPrice: null,
    rating: 4.5,
    reviews: 145,
    badge: null,
    description:
      "크롭 기장의 라운드 니트 가디건. 레이어드에 최적이며 봄·가을 시즌 필수 아이템입니다.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["크림", "핑크", "민트"],
    stock: 41,
  },
  {
    id: "p11",
    name: "랩 원피스",
    category: "dress",
    price: 128000,
    originalPrice: null,
    rating: 4.8,
    reviews: 276,
    badge: "BEST",
    description:
      "허리 랩 디테일로 체형 보완. 플레어 실루엣이 우아한 분위기를 연출하는 롱 원피스입니다.",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59aaffbc1f8f?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["버건디", "네이비", "올리브"],
    stock: 29,
  },
  {
    id: "p13",
    name: "팝콘 스펙클 여리핏 여름 시스루 가디건",
    category: "outer",
    price: 22900,
    originalPrice: 32900,
    rating: 4.9,
    reviews: 0,
    badge: "NEW",
    tagline:
      "입는 순간 여리여리한 실루엣 완성, 한여름까지 손이 갈 필수 소장 가디건",
    description:
      "나시나 탑 위에 가볍게 툭 걸치기만 해도 스타일이 살아나는 루즈핏 니트 가디건입니다. 성긴 짜임의 시어한 소재감으로 은은한 비침이 매력적이며, 여름철 강한 자외선 차단은 물론 실내 에어컨 바람 아래서도 쾌적하게 착용하기 좋은 시즌리스 아이템이에요.",
    images: [
      "/products/popcorn-cardigan/ivory-1.png",
      "/products/popcorn-cardigan/ivory-2.png",
      "/products/popcorn-cardigan/gray-1.png",
      "/products/popcorn-cardigan/gray-2.png",
      "/products/popcorn-cardigan/gray-3.png",
    ],
    colorImages: {
      Ivory: [
        "/products/popcorn-cardigan/ivory-1.png",
        "/products/popcorn-cardigan/ivory-2.png",
      ],
      Gray: [
        "/products/popcorn-cardigan/gray-1.png",
        "/products/popcorn-cardigan/gray-2.png",
        "/products/popcorn-cardigan/gray-3.png",
      ],
      Black: ["/products/popcorn-cardigan/gray-3.png"],
    },
    sizes: ["FREE"],
    colors: ["Ivory", "Gray", "Black"],
    stock: 48,
    detail: {
      tagline:
        "입는 순간 여리여리한 실루엣 완성, 한여름까지 손이 갈 필수 소장 가디건",
      summary: [
        "나시나 탑 위에 가볍게 툭 걸치기만 해도 스타일이 살아나는 루즈핏 니트 가디건입니다.",
        "성긴 짜임의 시어한 소재감으로 은은한 비침이 매력적이며, 여름철 강한 자외선 차단은 물론 실내 에어컨 바람 아래서도 쾌적하게 착용하기 좋은 시즌리스 아이템이에요.",
        "자연스럽게 떨어지는 드롭 숄더와 낙낙한 핏이 체형을 완벽하게 커버해 주어 누구나 부담 없이 여리여리한 아웃핏을 연출하실 수 있습니다.",
      ],
      delightPoints: [
        {
          title: "POINT 1. 부해 보임 없는 내추럴 루즈핏",
          body: "어깨라인이 자연스럽게 내려오는 드롭 숄더 디자인과 여유 있는 소매 기장감으로, 상체 라인을 한결 슬림하고 가녀려 보이게 만들어 줍니다.",
        },
        {
          title: "POINT 2. 시원하고 감각적인 시스루 니트 짜임",
          body: "답답함 없이 통기성이 우수한 원사로 제작되어 한여름에도 쾌적함을 유지해 주며, 슬랙스·데님·숏팬츠 등 어떤 하의와도 이지하게 매치됩니다.",
        },
        {
          title: "POINT 3. 소장 가치 높은 3가지 컬러 웨이",
          body: "Ivory, Gray, Black 세 가지 컬러로 데일리부터 오피스룩까지 다양하게 스타일링할 수 있습니다.",
        },
      ],
      colors: [
        {
          name: "Ivory",
          note: "은은한 파스텔톤 컬러 스펙클이 콕콕 박혀 사랑스럽고 키치한 포인트를 더해줍니다.",
        },
        {
          name: "Gray",
          note: "은은한 보풀 느낌의 원사 믹스로 캐주얼하면서도 모던한 분위기를 연출합니다.",
        },
        {
          name: "Black",
          note: "깔끔하고 시크한 무드로 어떤 이너와도 자연스럽게 어울리는 데일리 컬러입니다.",
        },
      ],
      productInfo: [
        { label: "FABRIC", value: "아크릴 / 폴리에스테르 혼방 (여름용 얇은 원사)" },
        { label: "FIT", value: "루즈핏 / 세미 크롭" },
        {
          label: "두께감",
          value: "얇음 / 비침 : 있음 / 신축성 : 좋음 / 안감 : 없음",
        },
        { label: "SIZE TIP", value: "FREE (44 ~ 66 추천)" },
      ],
      washingGuide:
        "소재 특성상 올 풀림이나 변형을 방지하기 위해 첫 세탁은 드라이클리닝 또는 찬물에 중성세제를 이용한 단독 손세탁을 권장합니다. (세탁기 사용 시 반드시 세탁망에 넣어주세요.)",
    },
  },
  {
    id: "p12",
    name: "A라인 롱 스커트",
    category: "skirt",
    price: 72000,
    originalPrice: null,
    rating: 4.6,
    reviews: 198,
    badge: "NEW",
    description:
      "자연스러운 A라인 실루엣. 무릎 아래 기장으로 체형 커버에 탁월한 롱 스커트입니다.",
    images: [
      "https://images.unsplash.com/photo-1583498276836-2a896f8bf6b5?w=800&q=80",
    ],
    sizes: ["S", "M", "L"],
    colors: ["블랙", "브라운", "카키"],
    stock: 36,
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getCategoryPath(categoryId) {
  return categoryId === "all" ? "/shop" : `/shop/${categoryId}`;
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  if (category === "new") {
    return PRODUCTS.filter((p) => p.badge === "NEW" || p.originalPrice);
  }
  if (category === "best") return PRODUCTS.filter((p) => p.badge === "BEST");
  if (category === "made") return PRODUCTS.filter((p) => p.made === true);
  if (category === "outer") {
    return PRODUCTS.filter((p) => p.category === "outer" || p.name.includes("코트"));
  }
  if (category === "acc") return PRODUCTS.filter((p) => p.category === "acc");
  return PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(limit = 20) {
  return [...PRODUCTS]
    .sort((a, b) => (b.badge === "NEW" ? 1 : 0) - (a.badge === "NEW" ? 1 : 0))
    .slice(0, limit);
}

export function getBestItems(limit = 20) {
  return [...PRODUCTS]
    .filter((p) => p.badge === "BEST" || p.reviews >= 150)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ko-KR").format(price) + "원";
}

export function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
