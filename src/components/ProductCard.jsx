import { Link } from "react-router-dom";
import {
  getDiscountPercent,
  getProductBadges,
  hasProductBadge,
} from "../data/products";
import ProductCardMedia from "./ProductCardMedia";
import ProductPriceDisplay, { ColorSwatches } from "./ProductPriceDisplay";

export default function ProductCard({
  product,
  compact = false,
  list = false,
  mall = false,
}) {
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const isNew = hasProductBadge(product, "NEW");
  const isBest = hasProductBadge(product, "BEST");
  const displayBadges = getProductBadges(product);

  if (mall) {
    return (
      <Link to={`/product/${product.id}`} className="group block text-left">
        <ProductCardMedia
          product={product}
          className="aspect-[3/4] mb-2 group-hover:opacity-95 transition-opacity"
        />
        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-1 min-h-[14px] md:min-h-[20px]">
          {isBest && (
            <span className="text-[9px] md:text-[11px] text-[#888] border border-[#ddd] px-1 md:px-2.5 md:py-0.5 tracking-wide">
              Best
            </span>
          )}
          {isNew && (
            <span className="text-[9px] md:text-[11px] text-[#888] border border-[#ddd] px-1 md:px-2.5 md:py-0.5 tracking-wide">
              New
            </span>
          )}
        </div>
        <p className="text-[10px] text-[#aaa] mb-0.5">codemuse</p>
        <p className="text-[11px] text-[#333] line-clamp-2 leading-snug mb-2 min-h-[2.25rem]">
          {product.name}
        </p>
        <ProductPriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
        />
        <ColorSwatches colors={product.colors} className="mt-2" />
        <p className="text-[10px] text-[#ccc] mt-1.5">리뷰 :</p>
      </Link>
    );
  }

  const nameClass = list
    ? "text-[11px] md:text-[12px] text-[#333] line-clamp-2 leading-snug mb-2 min-h-[2.5rem]"
    : `text-[#333] line-clamp-2 leading-snug mb-1 group-hover:underline ${
        compact ? "text-[11px] md:text-[12px]" : "text-[12px] md:text-[13px]"
      }`;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <ProductCardMedia
        product={product}
        className="aspect-[3/4] mb-2 md:mb-3 group-hover:opacity-95 transition-opacity"
      >
        {displayBadges.length > 0 && (
          <div className="absolute top-2 left-2 md:top-2.5 md:left-2.5 flex flex-wrap gap-1 md:gap-1.5 z-[2]">
            {displayBadges.map((badge) => (
              <span
                key={badge}
                className="bg-black text-white text-[9px] md:text-[11px] px-1.5 md:px-2.5 py-0.5 md:py-1 tracking-wide"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        {discount > 0 && (
          <span className="absolute top-2 right-2 bg-[#c45c4a] text-white text-[9px] font-bold px-1.5 py-0.5">
            {discount}%
          </span>
        )}
        <div className="absolute inset-x-0 bottom-0 z-[2] flex opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex-1 bg-black/80 text-white text-[10px] py-2 text-center">
            장바구니 담기
          </span>
        </div>
      </ProductCardMedia>

      <p className={nameClass}>{product.name}</p>

      <ProductPriceDisplay
        price={product.price}
        originalPrice={product.originalPrice}
      />
      <ColorSwatches colors={product.colors} className="mt-2" />
    </Link>
  );
}
