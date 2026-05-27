import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-16 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl mb-10">My Page</h1>
      <div className="grid gap-4">
        {[
          { label: "주문 내역", to: "/checkout", desc: "최근 주문 확인" },
          { label: "장바구니", to: "/cart", desc: "담은 상품 보기" },
          { label: "회원 정보", to: "/login", desc: "로그인 후 이용 가능" },
        ].map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className="flex justify-between items-center bg-white p-5 border border-[#e8e4df] hover:border-[#181512] transition-colors"
          >
            <div>
              <p className="text-sm font-medium tracking-wide">{item.label}</p>
              <p className="text-xs text-[#6b6560] mt-1">{item.desc}</p>
            </div>
            <span className="material-symbols-outlined text-[20px] text-[#6b6560]">
              chevron_right
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
