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
              <li>월-금 AM 10:30 - PM 17:30</li>
              <li>주말 &amp; 공휴일 OFF</li>
            </ul>
            <div className="flex items-center gap-5 pt-1">
              <button
                type="button"
                className="text-[11px] tracking-[0.16em] uppercase text-[#181512] border-b-2 border-[#181512] pb-1 hover:opacity-70 transition-opacity"
              >
                Notice
              </button>
              <span className="text-[#e8e4df] text-sm">/</span>
              <button
                type="button"
                className="text-[11px] tracking-[0.16em] uppercase text-[#6b6560] hover:text-[#181512] transition-colors"
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
            <p className="text-xs leading-relaxed mb-4">이수민(코드뮤즈)</p>
            <a
              href="https://bank.shinhan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-wide text-[#6b6560] hover:text-[#181512] transition-colors group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#181512]">
                account_balance
              </span>
              <span className="border-b border-transparent group-hover:border-[#181512] pb-0.5">
                Shinhan Online Banking
              </span>
              <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_outward
              </span>
            </a>
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
