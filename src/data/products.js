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
    id: "p13",
    name: "팝콘 스펙클 여리핏 여름 시스루 가디건",
    category: "outer",
    price: 22900,
    originalPrice: 32900,
    rating: 4.9,
    reviews: 0,
    badge: "BEST",
    badges: ["BEST", "NEW"],
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
      "/products/popcorn-cardigan/gray-4.png",
    ],
    listImages: [
      "/products/popcorn-cardigan/ivory-1.png",
      "/products/popcorn-cardigan/gray-1.png",
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
        "/products/popcorn-cardigan/gray-4.png",
      ],
      Black: ["/products/popcorn-cardigan/gray-3.png"],
    },
    sizes: ["FREE"],
    colors: ["Ivory", "Gray", "Black"],
    stock: 48,
    detail: {
      comment: [
        "나시나 탑 위에 가볍게 걸치기만 해도 스타일이 살아나는 루즈핏 니트 가디건",
        "성긴 짜임의 시어한 소재로 은은한 비침이 매력적이며 통기성도 뛰어납니다",
        "여름철 자외선 차단은 물론 실내 에어컨 바람 아래에서도 쾌적하게 착용할 수 있는 시즌리스 아이템",
        "드롭 숄더와 여유 있는 핏이 체형을 자연스럽게 커버해 여리여리한 실루엣을 연출합니다",
        "슬랙스, 데님, 숏팬츠 등 어떤 하의와도 부담 없이 매치하기 좋습니다",
        "Ivory · Gray · Black 세 가지 컬러로 한여름까지 손이 갈 소장 가치 있는 가디건",
      ],
    },
  },
  {
    id: "p14",
    name: "[청순여리/실물극찬] 로지 스퀘어넥 셔링 블라우스",
    category: "top",
    price: 17900,
    originalPrice: 27900,
    rating: 4.9,
    reviews: 0,
    badge: "BEST",
    badges: ["BEST", "NEW"],
    tagline:
      "청순함과 여리여리함을 동시에! 스퀘어넥&오프숄더 투웨이 연출이 가능한 로맨틱 블라우스",
    description:
      "얼굴에 형광등을 켜주는 화사한 딸기우유 핑크 컬러로, 입자마자 사랑스러운 분위기가 가득해지는 블라우스입니다. 넥라인의 은은한 레이스 디테일과 바스트 부분의 리본 셔링이 포인트가 되어주며, 과하지 않은 퍼프 소매가 팔뚝살을 자연스럽게 커버해 줍니다.",
    images: [
      "/products/rosy-blouse/08.png",
      "/products/rosy-blouse/04.png",
      "/products/rosy-blouse/01.png",
      "/products/rosy-blouse/02.png",
      "/products/rosy-blouse/03.png",
      "/products/rosy-blouse/05.png",
      "/products/rosy-blouse/07.png",
      "/products/rosy-blouse/09.png",
    ],
    listImages: [
      "/products/rosy-blouse/08.png",
      "/products/rosy-blouse/04.png",
    ],
    sizes: ["FREE"],
    colors: ["Pink"],
    stock: 52,
    detail: {
      comment: [
        "얼굴에 형광등을 켜주는 화사한 딸기우유 핑크 컬러의 로맨틱 블라우스",
        "입자마자 사랑스러운 분위기가 가득해지며, 넥라인 레이스와 바스트 리본 셔링이 포인트가 됩니다",
        "과하지 않은 퍼프 소매가 팔뚝살을 자연스럽게 커버해 줍니다",
        "어깨를 올려 청순한 스퀘어넥으로, 살짝 내려 여리여리한 오프숄더로 연출할 수 있는 투웨이 디자인",
        "스퀘어넥과 오프숄더 두 가지 스타일링이 가능해 활용도가 높은 아이템입니다",
        "데이트룩, 휴양지룩, 피크닉룩으로 강력 추천하는 데일리 블라우스",
      ],
    },
  },
  {
    id: "p15",
    name: "[살안타/데일리룩] 배색 여름 긴팔 티셔츠",
    category: "top",
    price: 11300,
    originalPrice: 12600,
    rating: 4.9,
    reviews: 0,
    badge: "BEST",
    badges: ["BEST", "NEW"],
    tagline: "꾸안꾸 데일리룩으로 완벽한 여리핏 배색 나그랑 티셔츠입니다.",
    description:
      "여유 있게 파인 보트넥 디자인으로, 한쪽 어깨를 살짝 내려 은근한 오프숄더로 연출해 주시면 목선과 쇄골 라인이 한층 더 여리여리하게 돋보입니다. 어깨 라인이 부각되지 않는 나그랑(래글런) 소매 배색이 상체를 더욱 슬림해 보이게 만들어줍니다.",
    images: [
      "/products/raglan-tee/07.png",
      "/products/raglan-tee/01.png",
      "/products/raglan-tee/02.png",
      "/products/raglan-tee/03.png",
      "/products/raglan-tee/04.png",
      "/products/raglan-tee/05.png",
      "/products/raglan-tee/06.png",
      "/products/raglan-tee/08.png",
    ],
    listImages: [
      "/products/raglan-tee/07.png",
      "/products/raglan-tee/03.png",
    ],
    sizes: ["FREE"],
    colors: ["Navy", "Purple"],
    stock: 56,
    detail: {
      comment: [
        "꾸안꾸 데일리룩으로 완벽한 여리핏 배색 나그랑 티셔츠",
        "여유 있게 파인 보트넥 디자인으로 목선과 쇄골 라인이 여리여리하게 돋보입니다",
        "한쪽 어깨를 살짝 내려 은근한 오프숄더로 연출하기 좋은 스타일",
        "어깨 라인이 부각되지 않는 나그랑 소매 배색이 상체를 더욱 슬림해 보이게 만들어 줍니다",
        "바디에 부드럽게 감기는 가볍고 유연한 소재감으로 여름 실내 에어컨 룩에 적합합니다",
        "살안타템으로도 활용하기 좋은 데일리 긴팔 티셔츠",
      ],
    },
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductListImages(product) {
  if (product?.listImages?.length) return product.listImages;
  return product?.images ?? [];
}

export function getProductBadges(product) {
  if (product?.badges?.length) return product.badges;
  if (product?.badge) return [product.badge];
  return [];
}

export function hasProductBadge(product, badge) {
  return getProductBadges(product).includes(badge);
}

export function getCategoryPath(categoryId) {
  return categoryId === "all" ? "/shop" : `/shop/${categoryId}`;
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return PRODUCTS;
  if (category === "new") {
    return PRODUCTS.filter(
      (p) => hasProductBadge(p, "NEW") || p.originalPrice,
    );
  }
  if (category === "best") {
    return PRODUCTS.filter((p) => hasProductBadge(p, "BEST"));
  }
  if (category === "made") return PRODUCTS.filter((p) => p.made === true);
  if (category === "outer") {
    return PRODUCTS.filter((p) => p.category === "outer" || p.name.includes("코트"));
  }
  if (category === "acc") return PRODUCTS.filter((p) => p.category === "acc");
  return PRODUCTS.filter((p) => p.category === category);
}

export function getNewArrivals(limit = 20) {
  return [...PRODUCTS]
    .sort(
      (a, b) =>
        (hasProductBadge(b, "NEW") ? 1 : 0) - (hasProductBadge(a, "NEW") ? 1 : 0),
    )
    .slice(0, limit);
}

export function getBestItems(limit = 20) {
  return [...PRODUCTS]
    .filter((p) => hasProductBadge(p, "BEST") || p.reviews >= 150)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, limit);
}

export function formatPrice(price) {
  return `${new Intl.NumberFormat("en-US").format(price)} won`;
}

export function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
