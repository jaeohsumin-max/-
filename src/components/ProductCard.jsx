import { Link } from "react-router-dom";
import {
  formatPrice,
  getDiscountPercent,
  CATEGORIES,
} from "../data/products";

export default function ProductCard({ product }) {
  const discount = getDiscountPercent(product.price, product.originalPrice);
  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label ?? "";

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block editorial-shadow hover:shadow-xl transition-shadow duration-300 bg-white rounded-sm overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f0ede8]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#181512] text-white text-[10px] tracking-widest px-2 py-1">
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-[#c45c4a] text-white text-[10px] font-bold px-2 py-1">
            {discount}%
          </span>
        )}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
          aria-label="찜하기"
        >
          <span className="material-symbols-outlined text-[20px] text-[#181512]">
            favorite_border
          </span>
        </button>
      </div>
      <div className="p-4">
        <p className="text-[10px] tracking-widest uppercase text-[#a39e98] mb-1">
          {categoryLabel}
        </p>
        <h3 className="text-sm font-medium text-[#181512] line-clamp-2 mb-2 group-hover:underline underline-offset-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          <span className="material-symbols-outlined text-[14px] text-[#c45c4a] fill-1">
            star
          </span>
          <span className="text-xs text-[#6b6560]">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-baseline gap-2">
          {product.originalPrice && (
            <span className="text-xs text-[#a39e98] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-sm font-semibold text-[#181512]">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}
