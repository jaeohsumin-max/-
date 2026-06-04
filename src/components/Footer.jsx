import { Link } from "react-router-dom";
import { BANK_INFO, COMPANY_INFO, CS_CENTER } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-white border-t border-[#e5e5e5] text-[#333]">
      <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div>
            <h3 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wide">
              Customer Center
            </h3>
            <p className="text-[11px] text-[#666] leading-relaxed whitespace-pre-line">
              {CS_CENTER.hours}
              {"\n"}
              {CS_CENTER.off}
            </p>
            <p className="text-[11px] text-[#888] mt-2 leading-relaxed">
              {CS_CENTER.inquiry}
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wide">
              Bank Account
            </h3>
            <p className="text-[11px] text-[#666] leading-relaxed">{BANK_INFO.bank}</p>
            <p className="text-[11px] text-[#666]">예금주 : {BANK_INFO.holder}</p>
            <p className="text-[10px] text-[#aaa] mt-2 leading-relaxed">
              무통장 거래시 입금자명과 주문자명이 다를 경우 입금확인이 지연될 수
              있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wide">
              Shop Guide
            </h3>
            <div className="flex flex-col gap-1.5 text-[11px] text-[#666]">
              <Link to="/shop" className="hover:text-black">
                쇼핑몰 바로가기
              </Link>
              <button type="button" className="text-left hover:text-black">
                이용약관
              </button>
              <button type="button" className="text-left hover:text-black">
                개인정보처리방침
              </button>
              <Link to="/cart" className="hover:text-black">
                장바구니
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wide">
              Community
            </h3>
            <div className="flex flex-col gap-1.5 text-[11px] text-[#666]">
              <Link to="/notice" className="hover:text-black">
                NOTICE
              </Link>
              <Link to="/qa" className="hover:text-black">
                Q&A
              </Link>
              <Link to="/reviews" className="hover:text-black">
                REVIEW
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold text-[#111] mb-3 uppercase tracking-wide">
              Social
            </h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-[#666] hover:text-black"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#eee] text-center sm:text-left">
          <p className="text-[10px] text-[#aaa] leading-relaxed">
            Business Name. {COMPANY_INFO.name} · CEO. {COMPANY_INFO.ceo} · Business
            Registration. {COMPANY_INFO.businessNo}
          </p>
          <p className="text-[10px] text-[#bbb] mt-2">
            Copyright © {COMPANY_INFO.name} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
