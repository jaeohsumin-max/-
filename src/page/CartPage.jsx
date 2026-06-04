import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById, formatPrice } from "../data/products";

function CartGuide() {
  return (
    <div className="mt-12 border-t border-[#eee] pt-10">
      <h3 className="text-[14px] font-semibold text-[#111] mb-6">이용안내</h3>

      <div className="space-y-8 text-[12px] text-[#666] leading-relaxed">
        <section>
          <h4 className="text-[13px] font-medium text-[#333] mb-3">
            장바구니 이용안내
          </h4>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              선택하신 상품의 수량을 변경하시려면 수량 변경 후 [변경] 버튼을
              누르시면 됩니다.
            </li>
            <li>
              [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.
            </li>
            <li>
              장바구니에 담긴 상품은 7일 동안 보관되며, 이후 자동으로 삭제될 수
              있습니다.
            </li>
            <li>코드뮤즈는 전 상품 무료배송으로 운영하고 있습니다.</li>
          </ul>
        </section>

        <section>
          <h4 className="text-[13px] font-medium text-[#333] mb-3">
            주문/결제 이용안내
          </h4>
          <ul className="list-disc pl-4 space-y-1.5">
            <li>
              [전체상품주문] 버튼을 누르시면 장바구니에 담긴 모든 상품에 대한
              주문/결제가 이루어집니다.
            </li>
            <li>
              [선택상품주문] 버튼을 누르시면 선택한 상품만 주문/결제 하실 수
              있습니다.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("domestic");
  const [selectedKeys, setSelectedKeys] = useState(() => new Set());
  const [qtyDraft, setQtyDraft] = useState({});

  const cartLines = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId);
          if (!product) return null;
          return {
            ...item,
            product,
            lineTotal: product.price * item.quantity,
          };
        })
        .filter(Boolean),
    [items],
  );

  const domesticCount = cartLines.reduce((s, l) => s + l.quantity, 0);

  useEffect(() => {
    setSelectedKeys(new Set(cartLines.map((l) => l.key)));
    const draft = {};
    cartLines.forEach((l) => {
      draft[l.key] = l.quantity;
    });
    setQtyDraft(draft);
  }, [cartLines]);

  const toggleAll = (checked) => {
    setSelectedKeys(
      checked ? new Set(cartLines.map((l) => l.key)) : new Set(),
    );
  };

  const toggleOne = (key, checked) => {
    setSelectedKeys((prev) => {
      const next = new Set(prev);
      if (checked) next.add(key);
      else next.delete(key);
      return next;
    });
  };

  const applyQty = (key) => {
    const qty = Number(qtyDraft[key]);
    if (!Number.isFinite(qty) || qty < 1) return;
    updateQuantity(key, Math.min(99, Math.floor(qty)));
  };

  const subtotal = cartLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const selectedLines = cartLines.filter((l) => selectedKeys.has(l.key));
  const selectedSubtotal = selectedLines.reduce(
    (sum, line) => sum + line.lineTotal,
    0,
  );

  const goCheckout = (keys) => {
    if (keys.length === 0) {
      alert("주문할 상품을 선택해 주세요.");
      return;
    }
    navigate("/checkout", { state: { selectedKeys: keys } });
  };

  const orderButtons = (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      <button
        type="button"
        onClick={() => goCheckout(cartLines.map((l) => l.key))}
        disabled={cartLines.length === 0}
        className="min-w-[140px] px-6 py-2.5 bg-[#333] text-white text-[12px] hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed"
      >
        전체상품주문
      </button>
      <button
        type="button"
        onClick={() => goCheckout([...selectedKeys])}
        disabled={selectedKeys.size === 0}
        className="min-w-[140px] px-6 py-2.5 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
      >
        선택상품주문
      </button>
      <Link
        to="/shop"
        className="min-w-[140px] px-6 py-2.5 border border-[#ccc] text-[12px] text-center hover:border-[#333]"
      >
        쇼핑계속하기
      </Link>
    </div>
  );

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium">장바구니</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] mb-8">
        장바구니
      </h2>

      <ul className="flex border-b border-[#ddd] text-[12px] mb-4">
        <li>
          <button
            type="button"
            onClick={() => setActiveTab("domestic")}
            className={`px-4 py-2.5 border-b-2 -mb-px ${
              activeTab === "domestic"
                ? "border-[#333] text-[#111] font-medium"
                : "border-transparent text-[#888] hover:text-[#333]"
            }`}
          >
            국내배송상품 ({domesticCount})
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setActiveTab("overseas")}
            className={`px-4 py-2.5 border-b-2 -mb-px ${
              activeTab === "overseas"
                ? "border-[#333] text-[#111] font-medium"
                : "border-transparent text-[#888] hover:text-[#333]"
            }`}
          >
            해외배송상품 (0)
          </button>
        </li>
      </ul>

      <p className="text-[11px] text-[#888] mb-6">
        장바구니에 담긴 상품은 7일 동안 보관됩니다.
      </p>

      {activeTab === "overseas" ? (
        <>
          <p className="py-20 text-center text-[13px] text-[#999]">
            해외배송 장바구니가 비어 있습니다.
          </p>
          {orderButtons}
          <CartGuide />
        </>
      ) : cartLines.length === 0 ? (
        <>
          <p className="py-20 text-center text-[13px] text-[#999]">
            장바구니가 비어 있습니다.
          </p>
          {orderButtons}
          <CartGuide />
        </>
      ) : (
        <>
          <div className="overflow-x-auto border-t border-[#333]">
            <table className="w-full min-w-[900px] text-[12px] text-[#333] border-collapse">
              <caption className="sr-only">장바구니 목록</caption>
              <thead>
                <tr className="bg-[#fafafa] border-b border-[#ddd]">
                  <th className="w-10 py-3 px-2 border-r border-[#eee]">
                    <input
                      type="checkbox"
                      checked={
                        cartLines.length > 0 &&
                        selectedKeys.size === cartLines.length
                      }
                      onChange={(e) => toggleAll(e.target.checked)}
                      aria-label="전체 선택"
                    />
                  </th>
                  <th className="py-3 px-3 text-left font-medium text-[#666] border-r border-[#eee]">
                    상품정보
                  </th>
                  <th className="w-36 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                    수량
                  </th>
                  <th className="w-28 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                    상품구매금액
                  </th>
                  <th className="w-24 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                    배송구분
                  </th>
                  <th className="w-20 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                    배송비
                  </th>
                  <th className="w-28 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                    합계
                  </th>
                  <th className="w-16 py-3 px-2 font-medium text-[#666]">
                    선택
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartLines.map((line) => {
                  const optionLabel = [
                    line.size,
                    line.color !== "-" ? line.color : null,
                  ]
                    .filter(Boolean)
                    .join(" / ");

                  return (
                    <tr
                      key={line.key}
                      className="border-b border-[#eee] align-top"
                    >
                      <td className="py-4 px-2 text-center border-r border-[#f0f0f0]">
                        <input
                          type="checkbox"
                          checked={selectedKeys.has(line.key)}
                          onChange={(e) =>
                            toggleOne(line.key, e.target.checked)
                          }
                          aria-label={`${line.product.name} 선택`}
                        />
                      </td>
                      <td className="py-4 px-3 border-r border-[#f0f0f0]">
                        <div className="flex gap-3">
                          <Link
                            to={`/product/${line.product.id}`}
                            className="shrink-0 w-16 h-20 bg-[#f5f5f5] overflow-hidden"
                          >
                            <img
                              src={line.product.images[0]}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </Link>
                          <div className="min-w-0">
                            <Link
                              to={`/product/${line.product.id}`}
                              className="text-[#111] font-medium hover:underline line-clamp-2"
                            >
                              {line.product.name}
                            </Link>
                            {optionLabel && (
                              <p className="text-[11px] text-[#888] mt-1">
                                옵션: {optionLabel}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-2 border-r border-[#f0f0f0]">
                        <div className="flex items-center justify-center gap-1">
                          <input
                            type="number"
                            min={1}
                            max={99}
                            value={qtyDraft[line.key] ?? line.quantity}
                            onChange={(e) =>
                              setQtyDraft((prev) => ({
                                ...prev,
                                [line.key]: e.target.value,
                              }))
                            }
                            className="w-12 border border-[#ddd] px-1 py-1 text-center text-[12px]"
                          />
                          <button
                            type="button"
                            onClick={() => applyQty(line.key)}
                            className="px-2 py-1 border border-[#ccc] text-[11px] hover:border-[#333] whitespace-nowrap"
                          >
                            변경
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-center border-r border-[#f0f0f0] whitespace-nowrap">
                        {formatPrice(line.product.price)}
                      </td>
                      <td className="py-4 px-2 text-center text-[#666] border-r border-[#f0f0f0]">
                        기본배송
                      </td>
                      <td className="py-4 px-2 text-center text-[#888] border-r border-[#f0f0f0]">
                        무료
                      </td>
                      <td className="py-4 px-2 text-center font-medium border-r border-[#f0f0f0] whitespace-nowrap">
                        {formatPrice(line.lineTotal)}
                      </td>
                      <td className="py-4 px-2 text-center">
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          className="text-[11px] text-[#888] hover:text-[#c45c4a] underline"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-4 text-[12px]">
            <div className="sm:text-right space-y-1 text-[#666]">
              <p>
                <span className="text-[#999] mr-2">전체 상품금액</span>
                <span className="text-[#111] font-medium">
                  {formatPrice(subtotal)}
                </span>
              </p>
              <p>
                <span className="text-[#999] mr-2">선택 상품금액</span>
                <span className="text-[#111] font-medium">
                  {formatPrice(selectedSubtotal)}
                </span>
              </p>
              <p>
                <span className="text-[#999] mr-2">배송비</span>
                <span className="text-[#111]">무료</span>
              </p>
            </div>
          </div>

          {orderButtons}
          <CartGuide />
        </>
      )}
    </div>
  );
}
