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
      Melange: [
        "/products/popcorn-cardigan/gray-1.png",
        "/products/popcorn-cardigan/gray-2.png",
        "/products/popcorn-cardigan/gray-3.png",
        "/products/popcorn-cardigan/gray-4.png",
      ],
    },
    detailImages: [
      { src: "/products/popcorn-cardigan/detail-ivory.png", label: "Ivory" },
      { src: "/products/popcorn-cardigan/detail-gray.png", label: "Melange" },
      { src: "/products/popcorn-cardigan/detail-black.png", label: "Black" },
      { src: "/products/popcorn-cardigan/detail-colors.png" },
    ],
    sizes: ["FREE"],
    colors: ["Ivory", "Melange", "Black"],
    stock: 48,
    detail: {
      commentImage: "/products/popcorn-cardigan/ivory-1.png",
      comment: [
        "여름철 가볍게 걸치기 좋은 시스루 가디건을 찾으셨던 분",
        "은은한 비침과 통기성 좋은 소재를 선호하시는 분",
        "드롭 숄더로 여리여리한 실루엣을 원하시는 분",
        "나시·탑 위에 레이어드하기 좋은 시즌리스 아이템을 찾으셨던 분",
      ],
      composition: "아크릴 100",
      size: "FREE",
      modelSize: "Ivory FREE 사이즈 착용",
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
    badges: ["NEW"],
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
      commentImage: "/products/rosy-blouse/08.png",
      comment: [
        "화사한 핑크 컬러로 로맨틱한 무드를 원하시는 분",
        "스퀘어넥·오프숄더 투웨이 스타일링을 즐기시는 분",
        "팔뚝살을 자연스럽게 커버하는 퍼프 소매를 원하시는 분",
        "데이트룩·휴양지룩에 어울리는 블라우스를 찾으셨던 분",
      ],
    },
  },
  {
    id: "p15",
    name: "[살안타/데일리룩] 배색 나그랑 여름 긴팔 티셔츠",
    category: "top",
    price: 11300,
    originalPrice: 12600,
    rating: 4.9,
    reviews: 0,
    badges: ["NEW"],
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
      "/products/raglan-tee/04.png",
    ],
    sizes: ["FREE"],
    colors: ["Navy", "Purple"],
    stock: 56,
    detail: {
      commentImage: "/products/raglan-tee/07.png",
      comment: [
        "꾸안꾸 데일리룩을 좋아하시는 분",
        "목선과 쇄골이 여리여리해 보이는 넥라인을 원하시는 분",
        "나그랑 소매로 상체가 슬림해 보이길 원하시는 분",
        "여름 실내 에어컨 룩에 활용하기 좋은 긴팔 티를 찾으셨던 분",
      ],
      composition: "폴리에스테르 65 레이온 35",
      size: "FREE",
    },
  },
  {
    id: "p16",
    name: "[-3kg/여리핏] 무드 스퀘어넥 셔링 골지 니트반팔",
    category: "top",
    price: 15900,
    originalPrice: 25900,
    rating: 4.9,
    reviews: 0,
    badge: "BEST",
    badges: ["BEST", "NEW"],
    tagline:
      "심플하면서도 상체가 정말 말라 보이는 실루엣을 완성해 주는 하트 스퀘어넥 골지 니트",
    description:
      "심플하면서도 상체가 정말 말라 보이는 실루엣을 완성해 주는 하트 스퀘어넥 골지 니트입니다. 은근하게 파인 하트넥 디자인이 목선과 쇄골 라인을 가장 예쁘게 강조해 주어 완벽한 여리핏을 연출해 줍니다.",
    images: [
      "/products/mood-knit-top/07.png",
      "/products/mood-knit-top/03.png",
      "/products/mood-knit-top/04.png",
      "/products/mood-knit-top/05.png",
      "/products/mood-knit-top/01.png",
      "/products/mood-knit-top/02.png",
      "/products/mood-knit-top/06.png",
    ],
    listImages: [
      "/products/mood-knit-top/07.png",
      "/products/mood-knit-top/01.png",
      "/products/mood-knit-top/06.png",
    ],
    detailImages: [
      { src: "/products/mood-knit-top/white.png", label: "White" },
      { src: "/products/mood-knit-top/brown.png", label: "Brown" },
      { src: "/products/mood-knit-top/pink.png", label: "Pink" },
      { src: "/products/mood-knit-top/black.png", label: "Black" },
    ],
    sizes: ["FREE"],
    colors: ["Pink", "Black", "Brown", "White"],
    stock: 60,
    detail: {
      commentImage: "/products/mood-knit-top/07.png",
      comment: [
        "상체가 슬림해 보이는 여리핏 니트를 원하시는 분",
        "하트 스퀘어넥으로 쇄골 라인을 강조하고 싶으신 분",
        "쫀쫀한 골지 소재로 군살을 잡아주는 핏을 선호하시는 분",
        "스커트·팬츠 모두 잘 어울리는 데일리 니트를 찾으셨던 분",
      ],
      composition: "면 57 모달 38 스판 5",
      size: {
        labels: "가슴단면 / 어깨단면 / 총길이 / 팔길이 / 암홀(cm)",
        values: "30 / 29 / 50 / 9 / 17",
      },
    },
  },
  {
    id: "p17",
    name: "[핀터무드] 몽글몽글 솜사탕 퍼즐 배색 티셔츠(3color)",
    category: "top",
    price: 14900,
    originalPrice: 21900,
    rating: 4.9,
    reviews: 0,
    badges: ["NEW"],
    tagline:
      "핀터레스트 감성의 빈티지 키치 무드, 퍼즐 패치 포인트 스탠다드 핏 티셔츠",
    description:
      "몽글몽글 솜사탕 같은 퍼즐 패치 그래픽이 포인트가 되는 스탠다드 핏 티셔츠입니다. Light Yellow · White · Light Mint 세 가지 컬러로 스커트와 러블리하게, 팬츠와 캐주얼하게 다양하게 연출할 수 있습니다.",
    images: [
      "/products/puzzle-tee/01.png",
      "/products/puzzle-tee/02.png",
      "/products/puzzle-tee/03.png",
      "/products/puzzle-tee/04.png",
      "/products/puzzle-tee/05.png",
    ],
    listImages: [
      "/products/puzzle-tee/01.png",
      "/products/puzzle-tee/02.png",
    ],
    sizes: ["FREE"],
    colors: ["Light Yellow", "White", "Light Mint"],
    stock: 54,
    detailImages: [
      { src: "/products/puzzle-tee/cream-back.png", label: "Light Yellow" },
      { src: "/products/puzzle-tee/cream-front.png", label: "Light Yellow" },
      { src: "/products/puzzle-tee/cream-detail.png", label: "Light Yellow" },
      { src: "/products/puzzle-tee/white.png", label: "White" },
      { src: "/products/puzzle-tee/mint.png", label: "Light Mint" },
    ],
    detail: {
      commentImage: "/products/puzzle-tee/01.png",
      comment: [
        "핀터레스트 감성의 빈티지하고 키치한 무드를 선호하시는 분",
        "밋밋함 없이 티셔츠 하나만으로도 확실한 포인트가 되는 상의를 찾으셨던 분",
        "부해 보임 없이 상체 라인을 깔끔하게 잡아주는 여리여리한 스탠다드 핏을 원하시는 분",
        "스커트와 러블리하게, 팬츠와 캐주얼하게 다양한 믹스매치 코디를 즐기시는 분",
      ],
      modelSize: "Light Yellow FREE 사이즈 착용",
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
    return PRODUCTS.filter((p) => hasProductBadge(p, "NEW"));
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
  return PRODUCTS.filter((p) => hasProductBadge(p, "NEW")).slice(0, limit);
}

export function getBestItems(limit = 20) {
  return PRODUCTS.filter((p) => hasProductBadge(p, "BEST")).slice(0, limit);
}

export function formatPrice(price) {
  return `${new Intl.NumberFormat("en-US").format(price)} won`;
}

export function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
