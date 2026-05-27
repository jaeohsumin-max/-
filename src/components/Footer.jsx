import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-[#e8e4df] text-[#6b6560]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {/* Customer Center */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#a39e98] mb-5">
              Customer Center
            </h3>
            <p className="text-2xl md:text-[28px] text-[#c4a882] tracking-wide mb-4">
              010-7546-3869
            </p>
            <ul className="space-y-1 text-xs leading-relaxed mb-6">
              <li>Weekdays AM 10:30 - PM 17:30</li>
              <li>Weekends &amp; Holidays OFF</li>
            </ul>
            <div className="flex gap-2">
              <button
                type="button"
                className="px-5 py-2.5 bg-[#c4a882] text-white text-[10px] tracking-widest uppercase"
              >
                Notice
              </button>
              <button
                type="button"
                className="px-5 py-2.5 border border-[#d4cfc8] text-[#6b6560] text-[10px] tracking-widest uppercase hover:border-[#181512] hover:text-[#181512] transition-colors"
              >
                Q&amp;A
              </button>
            </div>
          </div>

          {/* Bank Info */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#a39e98] mb-5">
              Bank Info
            </h3>
            <p className="text-xs leading-relaxed mb-1">
              신한은행 110-633-003213
            </p>
            <p className="text-xs leading-relaxed mb-6">이수민(코드뮤즈)</p>
            <label className="block">
              <span className="sr-only">인터넷뱅킹 바로가기</span>
              <select className="w-full max-w-xs border border-[#e8e4df] bg-white px-3 py-2.5 text-xs text-[#6b6560] focus:outline-none focus:border-[#181512] appearance-none cursor-pointer">
                <option>인터넷뱅킹 바로가기</option>
                <option value="shinhan">신한은행</option>
              </select>
            </label>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#a39e98] mb-5">
              Company
            </h3>
            <ul className="space-y-1.5 text-[11px] leading-relaxed">
              <li>
                <span className="text-[#a39e98]">상호</span> 코드뮤즈 (CODEMUSE)
              </li>
              <li>
                <span className="text-[#a39e98]">대표</span> 이수민
              </li>
              <li>
                <span className="text-[#a39e98]">사업자등록번호</span> 187-28-02099
              </li>
            </ul>
            <p className="text-[10px] text-[#a39e98] mt-6 tracking-wide">
              © CODEMUSE. All rights reserved.
            </p>
          </div>
        </div>

        <div className="border-t border-[#e8e4df] mt-12 pt-6 flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] tracking-[0.15em] uppercase">
          <Link to="/login" className="hover:text-[#181512] transition-colors">
            Agreement
          </Link>
          <span className="text-[#d4cfc8]">|</span>
          <Link to="/mypage" className="hover:text-[#181512] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#d4cfc8]">|</span>
          <Link to="/shop" className="hover:text-[#181512] transition-colors">
            Shop Guide
          </Link>
        </div>
      </div>
    </footer>
  );
}
