import { Link, useLocation } from "react-router-dom";
import { formatPrice } from "../data/products";

export default function OrderCompletePage() {
  const location = useLocation();
  const orderTotal = location.state?.orderTotal ?? 0;
  const orderName = location.state?.orderName ?? "고객";
  const orderId = `SM${Date.now().toString().slice(-8)}`;

  return (
    <div className="max-w-2xl mx-auto px-5 py-20 md:py-32 text-center">
      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#e8e4df] flex items-center justify-center">
        <span className="material-symbols-outlined text-[40px] text-[#181512]">
          check_circle
        </span>
      </div>
      <h1 className="font-serif text-3xl md:text-4xl mb-4">주문이 완료되었습니다</h1>
      <p className="text-[#6b6560] text-sm mb-10 leading-relaxed">
        {orderName}님, 주문해 주셔서 감사합니다.
        <br />
        주문 확인 메일이 곧 발송됩니다.
      </p>

      <div className="bg-white p-8 rounded-sm editorial-shadow text-left mb-10">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-[#6b6560]">주문번호</dt>
            <dd className="font-medium">{orderId}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#6b6560]">결제금액</dt>
            <dd className="font-semibold text-lg">{formatPrice(orderTotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#6b6560]">배송 예정</dt>
            <dd>2~3 영업일 이내</dd>
          </div>
        </dl>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/shop"
          className="inline-block bg-[#181512] text-white px-8 py-4 text-xs tracking-widest uppercase"
        >
          쇼핑 계속하기
        </Link>
        <Link
          to="/"
          className="inline-block border border-[#181512] px-8 py-4 text-xs tracking-widest uppercase"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
