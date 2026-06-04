import { Link } from "react-router-dom";
import { formatPrice, getDiscountPercent } from "../data/products";

export default function ProductCard({ product, compact = false }) {
  const discount = getDiscountPercent(product.price, product.originalPrice);

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f0f0f0] mb-2">
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
        <div className="absolute inset-x-0 bottom-0 flex gap-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="flex-1 bg-black/75 text-white text-[10px] py-2 text-center">
            장바구니 담기
          </span>
        </div>
      </div>
      <p
        className={`text-[#333] line-clamp-2 leading-snug mb-1 group-hover:underline ${
          compact ? "text-[11px] md:text-[12px]" : "text-[12px] md:text-[13px]"
        }`}
      >
        {product.name}
      </p>
      <p className="text-[11px] md:text-[12px] text-[#666]">
        <span className="text-[#999] mr-1">판매가 :</span>
        {product.originalPrice && (
          <span className="line-through text-[#bbb] mr-1.5">
            {formatPrice(product.originalPrice)}
          </span>
        )}
        <span className="text-[#111] font-medium">{formatPrice(product.price)}</span>
      </p>
    </Link>
  );
}
