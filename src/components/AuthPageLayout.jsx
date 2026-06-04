import { Link } from "react-router-dom";

export default function AuthPageLayout({
  title,
  subtitle,
  breadcrumb = "member",
  children,
  side,
}) {
  return (
    <div className="flex-1 bg-[#f7f7f7]">
      <div className="max-w-[1100px] mx-auto px-4 py-8 md:py-12">
        <nav className="text-[11px] text-[#999] mb-6">
          <Link to="/" className="hover:text-[#333]">
            HOME
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-[#666]">{breadcrumb}</span>
          <span className="mx-1.5">/</span>
          <span className="text-[#333]">{title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
          <div className="bg-white border border-[#ddd]">
            <div className="px-5 md:px-8 py-6 border-b border-[#eee]">
              <h1 className="text-lg md:text-xl font-semibold text-[#111] tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[12px] text-[#888] mt-2 leading-relaxed">{subtitle}</p>
              )}
            </div>
            <div className="px-5 md:px-8 py-6 md:py-8">{children}</div>
          </div>

          {side && (
            <aside className="space-y-4">
              {side}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

export function AuthBenefitBox() {
  return (
    <div className="bg-white border border-[#ddd] p-5 text-[12px] text-[#555] leading-relaxed">
      <p className="font-semibold text-[#111] mb-3 text-[13px]">회원 혜택</p>
      <ul className="space-y-2 list-disc pl-4">
        <li>회원가입 시 2,000원 적립금</li>
        <li>전상품 무료배송</li>
        <li>주문·배송 조회</li>
        <li>위시리스트 · 최근 본 상품</li>
      </ul>
    </div>
  );
}

export const authInputClass =
  "w-full border border-[#ddd] bg-white px-3 py-2.5 text-[13px] text-[#333] placeholder:text-[#bbb] focus:outline-none focus:border-[#333]";

export const authBtnPrimary =
  "w-full bg-[#111] text-white py-3 text-[12px] font-medium hover:bg-[#333] transition-colors disabled:opacity-50";

export const authBtnOutline =
  "shrink-0 border border-[#ccc] bg-[#fafafa] px-3 py-2.5 text-[11px] text-[#333] hover:border-[#333] transition-colors whitespace-nowrap disabled:opacity-50";
