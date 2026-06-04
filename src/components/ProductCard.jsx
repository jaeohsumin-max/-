import { Link } from "react-router-dom";
import { formatPrice, getDiscountPercent } from "../data/products";

export default function ProductCard({ product, compact = false, list = false }) {
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const hasSale = product.originalPrice && product.originalPrice > product.price;
  const savedAmount = hasSale ? product.originalPrice - product.price : 0;

  const nameClass = list
    ? "text-[11px] md:text-[12px] text-[#333] line-clamp-2 leading-snug mb-2 min-h-[2.5rem]"
    : `text-[#333] line-clamp-2 leading-snug mb-1 group-hover:underline ${
        compact ? "text-[11px] md:text-[12px]" : "text-[12px] md:text-[13px]"
      }`;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5f5] mb-2 md:mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:opacity-95 transition-opacity"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-[9px] px-1.5 py-0.5">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-[#c45c4a] text-white text-[9px] font-bold px-1.5 py-0.5">
            {discount}%
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 flex opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex-1 bg-black/80 text-white text-[10px] py-2 text-center">
            장바구니 담기
          </span>
        </div>
      </div>

      <p className={nameClass}>{product.name}</p>

      <div className={`space-y-0.5 ${list ? "text-[11px] md:text-[12px]" : "text-[11px] md:text-[12px]"} text-[#666]`}>
        {hasSale ? (
          <>
            <p>
              <span className="text-[#888] font-medium">판매가 :</span>{" "}
              <span className="text-[#999]">{formatPrice(product.originalPrice)}</span>
            </p>
            <p>
              <span className="text-[#888] font-medium">할인판매가 :</span>{" "}
              <span className="text-[#111] font-semibold">{formatPrice(product.price)}</span>
              <span className="text-[#c45c4a] ml-1">
                ( {savedAmount.toLocaleString()}원 할인)
              </span>
            </p>
          </>
        ) : (
          <p>
            <span className="text-[#888] font-medium">판매가 :</span>{" "}
            <span className="text-[#111] font-semibold">{formatPrice(product.price)}</span>
          </p>
        )}
        {product.colors?.length > 0 && list && (
          <p className="text-[10px] text-[#aaa] pt-0.5">
            <span className="text-[#888]">상품색상 :</span> {product.colors.length} color
          </p>
        )}
      </div>
    </Link>
  );
}
