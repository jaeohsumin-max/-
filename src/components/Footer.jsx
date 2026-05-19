import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#181512] text-[#faf9f6] mt-auto">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <p className="font-serif text-3xl mb-4">SUMIN</p>
            <p className="text-sm text-[#a39e98] leading-relaxed">
              일상에 스며드는
              <br />
              감각적인 라이프스타일 쇼핑
            </p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#a39e98]">
              쇼핑
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  전체 상품
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/fashion"
                  className="hover:text-white transition-colors"
                >
                  패션
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/beauty"
                  className="hover:text-white transition-colors"
                >
                  뷰티
                </Link>
              </li>
              <li>
                <Link
                  to="/shop/life"
                  className="hover:text-white transition-colors"
                >
                  라이프
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#a39e98]">
              고객센터
            </h3>
            <ul className="space-y-2 text-sm text-[#d4cfc8]">
              <li>1588-0000</li>
              <li>평일 09:00 - 18:00</li>
              <li>help@sumin.kr</li>
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
          <p>© 2026 SUMIN Market. All rights reserved.</p>
          <p>사업자등록번호 000-00-00000 | 대표 수민</p>
        </div>
      </div>
    </footer>
  );
}
