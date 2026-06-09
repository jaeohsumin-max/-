import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductImageSlideshow from "../components/ProductImageSlideshow";
import ProductPriceDisplay, { ColorSwatches } from "../components/ProductPriceDisplay";
import { useCart } from "../context/CartContext";
import {
  DEFAULT_EXCHANGE_INFO,
  DEFAULT_PAYMENT_INFO,
  DEFAULT_SHIPPING_INFO,
  ProductDetailTabs,
  RichProductDetail,
} from "../components/ProductDetailSections";
import {
  getProductById,
  formatPrice,
  getProductBadges,
  CATEGORIES,
} from "../data/products";

function getColorImageGroups(product) {
  if (!product.colorImages) {
    return [{ color: null, images: product.images }];
  }
  return product.colors
    .map((colorName) => ({
      color: colorName,
      images: product.colorImages[colorName] ?? [],
    }))
    .filter((group) => group.images.length > 0);
}

const DETAIL_TABS = [
  { id: "detail", label: "상품상세" },
  { id: "shipping", label: "배송/교환" },
  { id: "payment", label: "결제안내" },
  { id: "review", label: "REVIEW" },
  { id: "qa", label: "Q&A" },
];

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
  const [activeTab, setActiveTab] = useState("detail");

  useEffect(() => {
    setSelectedSize("");
    setSelectedColor("");
    setImageIndex(0);
    setQuantity(1);
  }, [id]);

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

  const categoryLabel =
    CATEGORIES.find((c) => c.id === product.category)?.label ?? "";
  const lineTotal = product.price * quantity;
  const isRich = Boolean(product.detail);
  const colorImageGroups = getColorImageGroups(product);
  const displayImages = product.images;
  const needsColor = product.colors.length > 0;
  const needsSize = product.sizes.length > 0;
  const optionsReady =
    (!needsColor || selectedColor) && (!needsSize || selectedSize);

  const handleAddToCart = () => {
    if (!optionsReady) {
      window.alert("COLOR, SIZE 옵션을 선택해 주세요.");
      return;
    }
    addItem(product.id, selectedSize, selectedColor, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    if (!optionsReady) {
      window.alert("COLOR, SIZE 옵션을 선택해 주세요.");
      return;
    }
    addItem(product.id, selectedSize, selectedColor, quantity);
    navigate("/cart");
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-6 md:py-10">
        <nav className="text-[11px] text-[#888] mb-6 flex items-center gap-1.5 flex-wrap">
          <Link to="/" className="hover:text-[#111]">
            홈
          </Link>
          <span>&gt;</span>
          <Link
            to={`/shop/${product.category}`}
            className="hover:text-[#111]"
          >
            {categoryLabel}
          </Link>
          <span>&gt;</span>
          <span className="text-[#333] line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="aspect-[3/4] bg-[#f7f7f7] overflow-hidden mb-3">
              <ProductImageSlideshow
                images={displayImages}
                alt={product.name}
                index={imageIndex}
                onIndexChange={setImageIndex}
                autoPlay={displayImages.length > 1}
              />
            </div>
            {displayImages.length > 1 && (
              <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
                {displayImages.map((img, i) => (
                  <button
                    key={`${img}-${i}`}
                    type="button"
                    onClick={() => setImageIndex(i)}
                    className={`shrink-0 w-14 h-[4.5rem] overflow-hidden border ${
                      imageIndex === i ? "border-[#333]" : "border-[#ddd]"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            {getProductBadges(product).length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {getProductBadges(product).map((badge) => (
                  <span
                    key={badge}
                    className="inline-block text-[10px] tracking-wide border border-[#ccc] text-[#666] px-2 py-0.5"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-[18px] md:text-[22px] font-medium text-[#111] leading-snug mb-2">
              {product.name}
            </h1>

            {product.tagline && (
              <p className="text-[12px] md:text-[13px] text-[#666] leading-relaxed mb-4">
                {product.tagline}
              </p>
            )}

            <div className="mb-6 pb-6 border-b border-[#e5e5e5]">
              <ProductPriceDisplay
                price={product.price}
                originalPrice={product.originalPrice}
                variant="detail"
              />
              <ColorSwatches colors={product.colors} className="mt-3" />
            </div>

            {!isRich && (
              <p className="text-[13px] text-[#666] leading-relaxed mb-6">
                {product.description}
              </p>
            )}

            <table className="w-full text-[12px] md:text-[13px] border-t border-[#e5e5e5] mb-6">
              <tbody>
                {product.colors.length > 0 && (
                  <tr className="border-b border-[#e5e5e5]">
                    <th className="w-[30%] py-3 px-3 bg-[#fafafa] text-left font-medium text-[#555] align-middle">
                      COLOR
                    </th>
                    <td className="py-3 px-3">
                      <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-full max-w-[240px] border border-[#ccc] bg-white px-3 py-2 text-[13px] focus:outline-none focus:border-[#333]"
                      >
                        <option value="">옵션 선택</option>
                        {product.colors.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )}
                {product.sizes.length > 0 && (
                  <tr className="border-b border-[#e5e5e5]">
                    <th className="py-3 px-3 bg-[#fafafa] text-left font-medium text-[#555] align-middle">
                      SIZE
                    </th>
                    <td className="py-3 px-3">
                      <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-full max-w-[240px] border border-[#ccc] bg-white px-3 py-2 text-[13px] focus:outline-none focus:border-[#333]"
                      >
                        <option value="">옵션 선택</option>
                        {product.sizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )}
                <tr className="border-b border-[#e5e5e5]">
                  <th className="py-3 px-3 bg-[#fafafa] text-left font-medium text-[#555] align-middle">
                    수량
                  </th>
                  <td className="py-3 px-3">
                    <div className="inline-flex items-center border border-[#ccc]">
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="w-8 h-8 flex items-center justify-center text-[#666] hover:bg-[#f5f5f5]"
                        aria-label="수량 감소"
                      >
                        −
                      </button>
                      <span className="w-10 text-center text-[13px]">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                        className="w-8 h-8 flex items-center justify-center text-[#666] hover:bg-[#f5f5f5]"
                        aria-label="수량 증가"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="flex items-center justify-between py-4 border-t border-[#333] mb-5">
              <span className="text-[12px] text-[#666]">Total (Qty)</span>
              <span className="text-[16px] font-semibold text-[#111]">
                {formatPrice(lineTotal)}{" "}
                <span className="text-[12px] font-normal text-[#888]">
                  ({quantity}개)
                </span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={!optionsReady}
                className="py-3.5 text-[12px] md:text-[13px] bg-[#333] text-white hover:bg-[#111] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                BUY NOW
              </button>
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!optionsReady}
                className="py-3.5 text-[12px] md:text-[13px] border border-[#333] text-[#333] hover:bg-[#333] hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {added ? "ADDED ✓" : "ADD TO CART"}
              </button>
            </div>

            <p className="text-[11px] text-[#999] mt-3 leading-relaxed">
              할인판매가가 적용된 최종 결제예정금액은 주문 시 확인할 수 있습니다.
            </p>

            <p className="text-[11px] text-[#aaa] mt-2">재고 {product.stock}개</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 md:px-6 pb-16">
        <ProductDetailTabs
          tabs={DETAIL_TABS}
          active={activeTab}
          onChange={setActiveTab}
        />

        <div className="py-8 md:py-10">
          {activeTab === "detail" && (
            <>
              {isRich ? (
                <RichProductDetail detail={product.detail} />
              ) : (
                <p className="text-[13px] text-[#444] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              )}
              {colorImageGroups.some((g) => g.images.length > 0) && (
                <div className="mt-10 space-y-10">
                  {colorImageGroups.map((group) => (
                    <div key={group.color ?? "all"}>
                      {group.color && (
                        <h4 className="text-[13px] font-semibold text-[#111] mb-3 pb-2 border-b border-[#eee]">
                          {group.color}
                        </h4>
                      )}
                      <div className="space-y-2">
                        {group.images.map((img, i) => (
                          <img
                            key={`${group.color}-${img}-${i}`}
                            src={img}
                            alt={`${product.name} ${group.color ?? ""} ${i + 1}`}
                            className="w-full"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {product.detailImages?.length > 0 && (
                <div className="mt-16 md:mt-24 pt-10 md:pt-14 space-y-12 md:space-y-16">
                  {product.detailImages.map((item, i) => {
                    const src = typeof item === "string" ? item : item.src;
                    const label = typeof item === "string" ? null : item.label;

                    return (
                      <div key={`detail-${src}-${i}`}>
                        <img
                          src={src}
                          alt={`${product.name} ${label ?? "상세"} ${i + 1}`}
                          className="w-full"
                          loading="lazy"
                        />
                        {label && (
                          <p className="mt-4 text-center text-[13px] md:text-[14px] text-[#333] tracking-wide">
                            {label}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {activeTab === "shipping" && (
            <div className="text-[13px] text-[#444] leading-[1.85] whitespace-pre-line space-y-8">
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-3">
                  배송정보
                </h3>
                <p>{DEFAULT_SHIPPING_INFO}</p>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-3">
                  교환 및 반품정보
                </h3>
                <p>{DEFAULT_EXCHANGE_INFO}</p>
              </div>
            </div>
          )}

          {activeTab === "payment" && (
            <p className="text-[13px] text-[#444] leading-[1.85] whitespace-pre-line">
              {DEFAULT_PAYMENT_INFO}
            </p>
          )}

          {activeTab === "review" && (
            <div className="text-center py-12 text-[13px] text-[#888]">
              <p className="mb-4">게시물이 없습니다</p>
              <Link
                to="/reviews"
                className="text-[12px] text-[#333] underline underline-offset-2"
              >
                REVIEW 전체보기
              </Link>
            </div>
          )}

          {activeTab === "qa" && (
            <div className="text-center py-12 text-[13px] text-[#888]">
              <p className="mb-4">게시물이 없습니다</p>
              <Link
                to="/qa"
                className="text-[12px] text-[#333] underline underline-offset-2"
              >
                Q&A 전체보기
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
