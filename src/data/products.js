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
