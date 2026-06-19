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
      "/products/popcorn-cardigan/ivory-extra-01.png",
      "/products/popcorn-cardigan/ivory-extra-02.png",
      "/products/popcorn-cardigan/gray-1.png",
      "/products/popcorn-cardigan/gray-2.png",
      "/products/popcorn-cardigan/gray-3.png",
      "/products/popcorn-cardigan/gray-4.png",
      "/products/popcorn-cardigan/melange-extra-01.png",
      "/products/popcorn-cardigan/melange-extra-02.png",
      "/products/popcorn-cardigan/melange-extra-03.png",
    ],
    listImages: [
      "/products/popcorn-cardigan/ivory-1.png",
      "/products/popcorn-cardigan/gray-1.png",
    ],
    colorImages: {
      Ivory: [
        "/products/popcorn-cardigan/ivory-1.png",
        "/products/popcorn-cardigan/ivory-2.png",
        "/products/popcorn-cardigan/ivory-extra-01.png",
        "/products/popcorn-cardigan/ivory-extra-02.png",
      ],
      Melange: [
        "/products/popcorn-cardigan/gray-1.png",
        "/products/popcorn-cardigan/gray-2.png",
        "/products/popcorn-cardigan/gray-3.png",
        "/products/popcorn-cardigan/gray-4.png",
        "/products/popcorn-cardigan/melange-extra-01.png",
        "/products/popcorn-cardigan/melange-extra-02.png",
        "/products/popcorn-cardigan/melange-extra-03.png",
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
      customSections: [
        {
          type: "notice",
          heading: "☝︎ 상품정보를 확대해서 볼 수 있어요!",
          title: "[notice]",
          lines: [
            "배송 예정일은 데이터를 분석하여 자동으로 예측한 일정으로,",
            "실제 출고일과는 무관한 점 참고 부탁드립니다.",
          ],
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/intro-01.png",
          alt: "여름 시스루 가디건 인트로 1",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/intro-02.png",
          alt: "여름 시스루 가디건 인트로 2",
        },
        {
          type: "text",
          lines: [
            "어디에서나 있는 흔한 디자인이 아닌,",
            "통기성 좋은 소재와 은은한 비침으로 소장 가치 충분한 가디건 ･ ♡",
            "자연스럽게 떨어지는 드롭 숄더 라인으로",
            "어깨 부각 없이 한층 더 여리여리한 실루엣을 완성해 주어요 !",
            "나시나 탑 위에 툭 걸쳐만 주어도 뻔하지 않은 무드 가득 -",
            "올여름 내내 남다른 감성으로 입어질 썸머 가디건으로 추천드려요",
          ],
        },
        {
          type: "specInfo",
          composition: "아크릴 100",
          size: {
            name: "FREE",
            labels: "가슴단면 / 어깨단면 / 총길이 / 팔길이 / 암홀(cm)",
            values: "55 / 55 / 30 / 43 / 18",
          },
        },
        { type: "label", text: "Ivory" },
        {
          type: "image",
          src: "/products/popcorn-cardigan/ivory-1.png",
          alt: "Ivory",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/ivory-2.png",
          alt: "Ivory",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/ivory-extra-01.png",
          alt: "Ivory",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/ivory-extra-02.png",
          alt: "Ivory",
        },
        { type: "label", text: "Melange" },
        {
          type: "image",
          src: "/products/popcorn-cardigan/gray-1.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/gray-2.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/gray-3.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/gray-4.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/melange-extra-01.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/melange-extra-02.png",
          alt: "Melange",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/melange-extra-03.png",
          alt: "Melange",
        },
        { type: "dividerTitle", text: "DETAIL" },
        {
          type: "image",
          src: "/products/popcorn-cardigan/detail-ivory.png",
          alt: "Ivory detail",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/detail-gray.png",
          alt: "Melange detail",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/detail-black.png",
          alt: "Black detail",
        },
        {
          type: "image",
          src: "/products/popcorn-cardigan/detail-colors.png",
          alt: "Color detail",
        },
      ],
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
      "/products/mood-knit-top/white-extra-01.png",
      "/products/mood-knit-top/white-extra-02.png",
      "/products/mood-knit-top/white-extra-03.png",
      "/products/mood-knit-top/01.png",
      "/products/mood-knit-top/02.png",
      "/products/mood-knit-top/brown-order-01.png",
      "/products/mood-knit-top/brown-order-02.png",
      "/products/mood-knit-top/brown-order-03.png",
      "/products/mood-knit-top/brown-order-04.png",
      "/products/mood-knit-top/brown-order-05.png",
      "/products/mood-knit-top/brown-order-06.png",
      "/products/mood-knit-top/03.png",
      "/products/mood-knit-top/04.png",
      "/products/mood-knit-top/05.png",
      "/products/mood-knit-top/07.png",
    ],
    listImages: [
      "/products/mood-knit-top/white-extra-01.png",
      "/products/mood-knit-top/01.png",
      "/products/mood-knit-top/brown-order-01.png",
    ],
    detailImages: [
      { src: "/products/mood-knit-top/detail-01.png", label: "White" },
      { src: "/products/mood-knit-top/detail-02.png", label: "Brown" },
      { src: "/products/mood-knit-top/detail-03.png", label: "Pink" },
      { src: "/products/mood-knit-top/detail-04.png", label: "Black" },
    ],
    sizes: ["FREE"],
    colors: ["Pink", "Black", "Brown", "White"],
    stock: 60,
    detail: {
      commentImage: "/products/mood-knit-top/07.png",
      customSections: [
        {
          type: "notice",
          heading: "☝︎ 상품정보를 확대해서 볼 수 있어요!",
          title: "[notice]",
          lines: [
            "배송 예정일은 데이터를 분석하여 자동으로 예측한 일정으로,",
            "실제 출고일과는 무관한 점 참고 부탁드립니다.",
          ],
        },
        {
          type: "image",
          src: "/products/mood-knit-top/intro-02.png",
          alt: "골지니트 인트로 1",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/intro-01.png",
          alt: "골지니트 인트로 2",
        },
        {
          type: "text",
          lines: [
            "예쁜 쇄골 라인은 돋보이게 할 하트 스퀘어넥과",
            "상체가 한층 슬림해 보이는 여리핏 실루엣 ♡",
            "바디를 부드럽게 감싸는 쫀쫀한 골지 소재로",
            "미운 군살은 쏙 잡아주어 핏감이 정말 예뻐요 !",
            "스커트부터 편안한 팬츠까지 어디에나 찰떡 -",
            "매일매일 손이 갈 데일리 니트로 추천드려요",
          ],
        },
        {
          type: "specInfo",
          composition: "면 57 모달 38 스판 5",
          size: {
            name: "FREE",
            labels: "가슴단면 / 어깨단면 / 총길이 / 팔길이 / 암홀(cm)",
            values: "30 / 29 / 50 / 9 / 17",
          },
        },
        { type: "label", text: "White" },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-01.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-02.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-03.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-04.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-05.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-06.png",
          alt: "White",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/white-extra-07.png",
          alt: "White",
        },
        { type: "label", text: "Pink" },
        {
          type: "image",
          src: "/products/mood-knit-top/01.png",
          alt: "Pink",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/02.png",
          alt: "Pink",
        },
        { type: "label", text: "Brown" },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-01.png",
          alt: "Brown",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-02.png",
          alt: "Brown",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-03.png",
          alt: "Brown",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-04.png",
          alt: "Brown",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-05.png",
          alt: "Brown",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/brown-order-06.png",
          alt: "Brown",
        },
        { type: "label", text: "Black" },
        {
          type: "image",
          src: "/products/mood-knit-top/03.png",
          alt: "Black",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/04.png",
          alt: "Black",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/05.png",
          alt: "Black",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/07.png",
          alt: "Black",
        },
        { type: "dividerTitle", text: "DETAIL" },
        {
          type: "image",
          src: "/products/mood-knit-top/detail-01.png",
          alt: "White detail",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/detail-02.png",
          alt: "Brown detail",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/detail-03.png",
          alt: "Pink detail",
        },
        {
          type: "image",
          src: "/products/mood-knit-top/detail-04.png",
          alt: "Black detail",
        },
      ],
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
      { src: "/products/puzzle-tee/cream-front.png", label: "Light Yellow" },
      { src: "/products/puzzle-tee/cream-detail.png", label: "Light Yellow" },
      { src: "/products/puzzle-tee/cream-back.png", label: "Light Yellow" },
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
      composition: "면 100",
      size: "FREE",
      modelSize: "Light Yellow FREE 사이즈 착용",
    },
  },
  {
    id: "p18",
    name: "[소장가치] 청량 민트코어 여리 무드 레이스 나시(2color)",
    category: "top",
    price: 12900,
    originalPrice: 18900,
    rating: 4.9,
    reviews: 0,
    badges: ["NEW"],
    tagline: "청량한 민트코어 감성, 화이트 크로스 레이스 포인트 슬림핏 나시",
    description:
      "청량하면서도 사랑스러운 민트코어 무드의 레이스 나시입니다. 은은한 화이트 크로스 레이스 배색이 포인트가 되며, 여리여리한 슬림핏으로 목선과 쇄골 라인을 돋보이게 해 줍니다. White · Mint 두 가지 컬러로 단독 착용은 물론 가디건·볼레로 레이어드에도 활용도가 높습니다.",
    images: [
      "/products/lace-cami/01.png",
      "/products/lace-cami/02.png",
      "/products/lace-cami/03.png",
      "/products/lace-cami/04.png",
      "/products/lace-cami/05.png",
      "/products/lace-cami/06.png",
      "/products/lace-cami/07.png",
      "/products/lace-cami/08.png",
      "/products/lace-cami/09.png",
      "/products/lace-cami/10.png",
    ],
    listImages: [
      "/products/lace-cami/01.png",
      "/products/lace-cami/02.png",
    ],
    sizes: ["FREE"],
    colors: ["White", "Mint"],
    stock: 50,
    detailImages: [
      { src: "/products/lace-cami/white-mannequin.png", label: "White" },
      { src: "/products/lace-cami/mint-mannequin.png", label: "Mint" },
    ],
    detail: {
      commentImage: "/products/lace-cami/01.png",
      comment: [
        "청량하면서도 사랑스러운 '민트코어' 감성의 룩을 연출하고 싶으신 분",
        "여리여리한 목선과 쇄골 라인을 돋보이게 해주는 슬림핏 나시탑을 찾으셨던 분",
        "은은한 화이트 크로스 레이스 배색으로 밋밋함 없이 포인트가 되는 이너를 원하시는 분",
        "여름철 단독 착용은 물론, 얇은 가디건이나 볼레로 안에 활용도 높게 코디하고 싶으신 분",
      ],
      composition: "폴리에스테르 60 레이온 35 스판 5",
      size: "FREE",
      modelSize: "Mint FREE 사이즈 착용",
    },
  },
  {
    id: "p19",
    name: "[체크배색/레이어드] 썸머 바스락 핀턱 와이드 팬츠",
    category: "bottom",
    price: 19900,
    originalPrice: 24900,
    rating: 4.9,
    reviews: 0,
    badges: ["NEW"],
    tagline: "가볍고 시원한 바스락 소재에 체크 배색 허리 디테일이 포인트인 와이드 팬츠",
    description:
      "여름철 편하게 입기 좋은 바스락 와이드 팬츠입니다. 허리 체크 배색과 스트링 디테일이 레이어드한 듯 포인트가 되어주며, 핀턱 라인과 넉넉한 와이드 핏으로 데일리하게 활용하기 좋습니다.",
    images: [
      "/products/summer-pintuck-pants/beige-01.png",
      "/products/summer-pintuck-pants/beige-02.png",
      "/products/summer-pintuck-pants/beige-03.png",
      "/products/summer-pintuck-pants/beige-04.png",
      "/products/summer-pintuck-pants/beige-05.png",
      "/products/summer-pintuck-pants/muk-01.png",
      "/products/summer-pintuck-pants/muk-02.png",
      "/products/summer-pintuck-pants/muk-03.png",
      "/products/summer-pintuck-pants/muk-04.png",
      "/products/summer-pintuck-pants/muk-05.png",
    ],
    listImages: [
      "/products/summer-pintuck-pants/thumb-01-cropped.png",
      "/products/summer-pintuck-pants/thumb-02.png",
      "/products/summer-pintuck-pants/thumb-03.png",
    ],
    thumbnailFit: "contain",
    sizes: ["FREE"],
    colors: ["베이지", "그레이", "먹색", "블랙"],
    stock: 61,
    detail: {
      commentImage:
        "https://d3ha2047wt6x28.cloudfront.net/6Cvyqk8ZXdI/pr:GOODS_DETAIL/czM6Ly9hYmx5LWltYWdlLWxlZ2FjeS9kYXRhL2dvb2RzLzIwMjYwNjE3XzE3ODE2NzY3NTYwMjEzMTNtLnBuZw",
      customSections: [
        {
          type: "notice",
          heading: "☝︎ 상품정보를 확대해서 볼 수 있어요!",
          title: "[notice]",
          lines: [
            "배송 예정일은 데이터를 분석하여 자동으로 예측한 일정으로,",
            "실제 출고일과는 무관한 점 참고 부탁드립니다.",
          ],
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/pattern-detail.png",
          alt: "pattern detail",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/fit-gif.png",
          alt: "fit detail",
        },
        {
          type: "text",
          lines: [
            "허리 라인에 빼꼼 보이는 체크 배색 밴딩과 얇은 스트링 디테일로",
            "마치 트렁크 팬츠를 레이어드한 듯, 룩에 확실한 포인트를 주는 와이드 팬츠예요 ･+♡",
            "프론트 중앙을 따라 핀턱처럼 길게 잡힌 절개 라인이 다리를 한층 더 길고 슬림해 보이게 해주고,",
            "입은 듯 안 입은 듯 쾌적하고 가벼운 바스락 소재라 한여름까지 쭉 시원하게!",
            "짱짱한 허리 고무줄 밴딩으로 하루 종일 입고 있어도 편안함은 물론이고요,",
            "기본 무지 티셔츠나 크롭 나시에 가볍게 툭 입어만 주셔도 힙하고 트렌디한 무드가 완성돼요",
            "편안한데 예쁘기까지 해서 자꾸만 손이 갈 올여름 데일리 포인트 팬츠로 사심 듬뿍 담아 적극 추천드려요",
          ],
        },
        { type: "sizeInfo" },
        { type: "modelInfo", text: "169cm 49kg" },
        { type: "label", text: "베이지" },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/beige-01.png",
          alt: "베이지",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/beige-02.png",
          alt: "베이지",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/beige-03.png",
          alt: "베이지",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/beige-04.png",
          alt: "베이지",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/beige-05.png",
          alt: "베이지",
        },
        { type: "label", text: "먹색" },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/muk-01.png",
          alt: "먹색",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/muk-02.png",
          alt: "먹색",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/muk-03.png",
          alt: "먹색",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/muk-04.png",
          alt: "먹색",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/muk-05.png",
          alt: "먹색",
        },
        { type: "dividerTitle", text: "DETAIL" },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/detail-01.png",
          alt: "detail 1",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/detail-02.png",
          alt: "detail 2",
        },
        {
          type: "image",
          src: "/products/summer-pintuck-pants/detail-03.png",
          alt: "detail 3",
        },
      ],
      comment: [
        "여름철 가볍고 시원하게 입기 좋은 바스락 팬츠를 찾으셨던 분",
        "허리 체크 배색과 스트링 디테일로 밋밋함 없이 포인트를 원하시는 분",
        "핀턱 라인으로 자연스럽게 떨어지는 와이드 핏을 선호하시는 분",
        "데일리룩부터 여행룩까지 편하게 활용할 팬츠를 찾으셨던 분",
      ],
      size: "FREE",
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
