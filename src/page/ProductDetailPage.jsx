import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  getProductById,
  formatPrice,
  getDiscountPercent,
  CATEGORIES,
} from "../data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-32 text-center">
        <p className="text-lg mb-6">상품을 찾을 수 없습니다.</p>
        <Link to="/shop" className="underline text-sm">
          쇼핑 계속하기
        </Link>
      </div>
    );
  }

  const discount = getDiscountPercent(product.price, product.originalPrice);
  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label ?? "";
  const size = selectedSize || product.sizes[0] || "FREE";
  const color = selectedColor || product.colors[0] || "-";

  const handleAddToCart = () => {
    addItem(product.id, size, color, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product.id, size, color, quantity);
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
      <nav className="text-xs text-[#6b6560] mb-8 flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-[#181512]">
          홈
        </Link>
        <span>/</span>
        <Link
          to={`/shop/${product.category}`}
          className="hover:text-[#181512]"
        >
          {categoryLabel}
        </Link>
        <span>/</span>
        <span className="text-[#181512] line-clamp-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="aspect-[3/4] bg-[#f0ede8] overflow-hidden rounded-sm mb-4">
            <img
              src={product.images[imageIndex] ?? product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setImageIndex(i)}
                  className={`w-16 h-20 overflow-hidden border-2 ${
                    imageIndex === i ? "border-[#181512]" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          {product.badge && (
            <span className="inline-block text-[10px] tracking-widest bg-[#181512] text-white px-2 py-1 mb-3">
              {product.badge}
            </span>
          )}
          <p className="text-xs tracking-widest uppercase text-[#a39e98] mb-2">
            {categoryLabel}
          </p>
          <h1 className="font-serif text-2xl md:text-4xl mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-[#c45c4a]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`material-symbols-outlined text-[18px] ${
                    i <= Math.round(product.rating) ? "fill-1" : ""
                  }`}
                >
                  star
                </span>
              ))}
            </div>
            <span className="text-sm text-[#6b6560]">
              {product.rating} · 리뷰 {product.reviews}개
            </span>
          </div>

          <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-[#e8e4df]">
            {product.originalPrice && (
              <>
                <span className="text-lg text-[#a39e98] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-sm font-bold text-[#c45c4a]">
                  {discount}%
                </span>
              </>
            )}
            <span className="text-2xl font-semibold">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-sm text-[#6b6560] leading-relaxed mb-8">
            {product.description}
          </p>

          {product.sizes.length > 0 && (
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">사이즈</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[48px] px-4 py-2 text-sm border ${
                      size === s
                        ? "border-[#181512] bg-[#181512] text-white"
                        : "border-[#e8e4df] hover:border-[#181512]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors.length > 0 && (
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase mb-3">컬러</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 text-sm border ${
                      color === c
                        ? "border-[#181512] bg-[#181512] text-white"
                        : "border-[#e8e4df] hover:border-[#181512]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8">
            <p className="text-xs tracking-widest uppercase mb-3">수량</p>
            <div className="inline-flex items-center border border-[#e8e4df]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-[#f0ede8]"
              >
                −
              </button>
              <span className="w-12 text-center text-sm">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-[#f0ede8]"
              >
                +
              </button>
            </div>
            <p className="text-xs text-[#6b6560] mt-2">
              재고 {product.stock}개
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 border border-[#181512] py-4 text-xs tracking-widest uppercase hover:bg-[#181512] hover:text-white transition-colors"
            >
              {added ? "장바구니에 담았습니다 ✓" : "장바구니 담기"}
            </button>
            <button
              type="button"
              onClick={handleBuyNow}
              className="flex-1 bg-[#181512] text-white py-4 text-xs tracking-widest uppercase hover:bg-[#3d3834] transition-colors"
            >
              바로 구매
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center text-xs text-[#6b6560]">
            <div className="p-4 bg-white rounded-sm">
              <span className="material-symbols-outlined text-[24px] mb-2 block">
                local_shipping
              </span>
              무료배송
            </div>
            <div className="p-4 bg-white rounded-sm">
              <span className="material-symbols-outlined text-[24px] mb-2 block">
                sync
              </span>
              1일 교환
            </div>
            <div className="p-4 bg-white rounded-sm">
              <span className="material-symbols-outlined text-[24px] mb-2 block">
                verified
              </span>
              정품 보증
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
