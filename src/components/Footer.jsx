import { Link } from "react-router-dom";
import { CATEGORIES, getCategoryPath } from "../data/products";

export default function Footer() {
  return (
    <footer className="bg-[#181512] text-[#faf9f6] mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="font-serif text-3xl mb-4">CODEMUSE</p>
            <p className="text-sm text-[#a39e98] leading-relaxed">
              감각적인 데일리룩부터
              <br />
              특별한 날의 드레스까지
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#a39e98]">
              Shop
            </h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={getCategoryPath(cat.id)}
                    className="hover:text-white transition-colors tracking-wide uppercase"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#a39e98]">
              고객센터
            </h3>
            <ul className="space-y-2 text-sm text-[#d4cfc8]">
              <li>1588-0000</li>
              <li>평일 09:00 - 18:00</li>
              <li>help@codemuse.kr</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#a39e98]">
              안내
            </h3>
            <ul className="space-y-2 text-sm text-[#d4cfc8]">
              <li>배송 안내</li>
              <li>교환 · 반품</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#3d3834] mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#6b6560]">
          <p>© 2026 CODEMUSE. All rights reserved.</p>
          <p>사업자등록번호 000-00-00000</p>
        </div>
      </div>
    </footer>
  );
}
