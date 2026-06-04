import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById, formatPrice } from "../data/products";

export default function CheckoutPage() {
  const { items, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKeys = location.state?.selectedKeys;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    addressDetail: "",
    zip: "",
    memo: "",
    payment: "card",
  });

  const cartLines = items
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...item, product, lineTotal: product.price * item.quantity };
    })
    .filter(Boolean)
    .filter(
      (line) =>
        !selectedKeys?.length || selectedKeys.includes(line.key),
    );

  const subtotal = cartLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  if (cartLines.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-32 text-center">
        <p className="mb-6">주문할 상품이 없습니다.</p>
        <Link to="/shop" className="underline text-sm">
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      alert("필수 정보를 입력해 주세요.");
      return;
    }
    const keysToRemove = cartLines.map((l) => l.key);
    keysToRemove.forEach((key) => removeItem(key));
    if (items.length === keysToRemove.length) {
      clearCart();
    }
    navigate("/order-complete", {
      state: { orderTotal: total, orderName: form.name },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl mb-10">주문 / 결제</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section className="bg-white p-6 md:p-8 rounded-sm editorial-shadow">
              <h2 className="font-serif text-xl mb-6">배송 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    이름 *
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
                    placeholder="홍길동"
                  />
                </label>
                <label className="block">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    연락처 *
                  </span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
                    placeholder="010-0000-0000"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    이메일
                  </span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
                    placeholder="email@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    우편번호
                  </span>
                  <input
                    name="zip"
                    value={form.zip}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
                    placeholder="12345"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    주소 *
                  </span>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512] mb-2"
                    placeholder="서울시 강남구 ..."
                  />
                  <input
                    name="addressDetail"
                    value={form.addressDetail}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
                    placeholder="상세 주소"
                  />
                </label>
                <label className="block md:col-span-2">
                  <span className="text-xs tracking-widest uppercase text-[#6b6560] mb-2 block">
                    배송 메모
                  </span>
                  <textarea
                    name="memo"
                    value={form.memo}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-[#e8e4df] px-4 py-3 text-sm focus:outline-none focus:border-[#181512] resize-none"
                    placeholder="부재 시 문 앞에 놓아주세요"
                  />
                </label>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-sm editorial-shadow">
              <h2 className="font-serif text-xl mb-6">결제 수단</h2>
              <div className="space-y-3">
                {[
                  { id: "card", label: "신용/체크카드" },
                  { id: "transfer", label: "계좌이체" },
                  { id: "kakao", label: "카카오페이" },
                  { id: "naver", label: "네이버페이" },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                      form.payment === method.id
                        ? "border-[#181512] bg-[#faf9f6]"
                        : "border-[#e8e4df]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method.id}
                      checked={form.payment === method.id}
                      onChange={handleChange}
                      className="accent-[#181512]"
                    />
                    <span className="text-sm">{method.label}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-sm editorial-shadow sticky top-28">
              <h2 className="font-serif text-xl mb-6">주문 상품</h2>
              <ul className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {cartLines.map((line) => (
                  <li key={line.key} className="flex gap-3 text-sm">
                    <img
                      src={line.product.images[0]}
                      alt=""
                      className="w-12 h-16 object-cover bg-[#f0ede8]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="line-clamp-2 font-medium">
                        {line.product.name}
                      </p>
                      <p className="text-xs text-[#6b6560]">
                        {line.quantity}개 · {line.size}
                      </p>
                    </div>
                    <p className="shrink-0">{formatPrice(line.lineTotal)}</p>
                  </li>
                ))}
              </ul>
              <dl className="space-y-2 text-sm border-t border-[#e8e4df] pt-4 mb-4">
                <div className="flex justify-between">
                  <dt className="text-[#6b6560]">상품</dt>
                  <dd>{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#6b6560]">배송</dt>
                  <dd>{shipping === 0 ? "무료" : formatPrice(shipping)}</dd>
                </div>
              </dl>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>총 결제</span>
                <span>{formatPrice(total)}</span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#181512] text-white py-4 text-xs tracking-widest uppercase hover:bg-[#3d3834]"
              >
                {formatPrice(total)} 결제하기
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
