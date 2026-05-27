import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import heroGif from "../assets/output.gif";

const BEST_ITEMS = [
  { name: "울 블렌드 오버코트", price: 289000 },
  { name: "캐시미어 터틀넥", price: 89000 },
  { name: "실크 미디 드레스", price: 168000 },
  { name: "와이드 슬랙스", price: 98000 },
  { name: "오버사이즈 블레이저", price: 198000 },
  { name: "A라인 롱 스커트", price: 72000 },
  { name: "랩 원피스", price: 128000 },
  { name: "플리츠 미니 스커트", price: 78000 },
];

const NEW_ITEMS = [
  { name: "캐시미어 터틀넥", price: 89000 },
  { name: "와이드 슬랙스", price: 98000 },
  { name: "A라인 롱 스커트", price: 72000 },
  { name: "크롭 니트 가디건", price: 62000 },
  { name: "오버핏 셔츠", price: 54000 },
  { name: "롱 트렌치 코트", price: 218000 },
  { name: "랩 원피스", price: 128000 },
  { name: "실크 미디 드레스", price: 168000 },
];

const SALE_ITEMS = [
  { name: "린넨 오버셔츠", price: 78000, originalPrice: 98000 },
  { name: "하이웨이스트 데님", price: 89000, originalPrice: 109000 },
  { name: "플리츠 미니 스커트", price: 68000, originalPrice: 82000 },
  { name: "울 블렌드 오버코트", price: 289000, originalPrice: 359000 },
  { name: "코튼 맨투맨", price: 45000, originalPrice: 52000 },
  { name: "벨벳 미디 원피스", price: 118000, originalPrice: 148000 },
  { name: "오버사이즈 블레이저", price: 198000, originalPrice: 248000 },
  { name: "크롭 니트 가디건", price: 62000, originalPrice: 78000 },
];

function ProductGrid({ items, showSale = false, linkTo = "/shop" }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((item, index) => (
        <Link
          key={`${item.name}-${index}`}
          to={linkTo}
          className="group block"
        >
          <div className="aspect-[3/4] bg-[#ece8e3] mb-3 flex items-center justify-center">
            <span className="text-[10px] tracking-widest uppercase text-[#a39e98]">
              Image
            </span>
          </div>
          <p className="text-xs md:text-sm text-[#181512] line-clamp-2 leading-snug mb-1.5 group-hover:underline underline-offset-2">
            {item.name}
          </p>
          <div className="flex items-baseline gap-2 flex-wrap">
            {showSale && item.originalPrice && (
              <span className="text-[11px] text-[#a39e98] line-through">
                {formatPrice(item.originalPrice)}
              </span>
            )}
            <span className="text-xs md:text-sm text-[#6b6560]">
              {formatPrice(item.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function SectionHeader({ title, linkTo }) {
  return (
    <div className="flex justify-between items-center mb-6 md:mb-8">
      <h2 className="text-sm tracking-[0.25em] uppercase text-[#181512]">
        {title}
      </h2>
      <Link
        to={linkTo}
        className="text-[11px] text-[#6b6560] hover:text-[#181512] tracking-wide"
      >
        View all
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="w-full bg-[#f0ede8] flex items-center justify-center py-6 md:py-10">
        <img
          src={heroGif}
          alt="CODEMUSE"
          className="w-full max-w-3xl md:max-w-4xl max-h-[45vh] md:max-h-[50vh] object-contain mx-auto px-5"
        />
      </section>

      <section className="bg-white py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <SectionHeader title="BEST" linkTo="/shop/best" />
          <ProductGrid items={BEST_ITEMS} linkTo="/shop/best" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-14">
        <SectionHeader title="NEW" linkTo="/shop/new" />
        <ProductGrid items={NEW_ITEMS} linkTo="/shop/new" />
      </section>

      <section className="max-w-6xl mx-auto px-5 md:px-10 py-10 md:py-14 border-t border-[#e8e4df]">
        <SectionHeader title="SALE" linkTo="/shop" />
        <ProductGrid items={SALE_ITEMS} showSale linkTo="/shop" />
      </section>
    </>
  );
}
