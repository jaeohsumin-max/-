import { useState } from "react";
import { Link } from "react-router-dom";
import { BANK_INFO, COMPANY_INFO, CS_CENTER } from "../data/site";

const NOTICES = [
  {
    date: "2026.03.15",
    title: "Spring Collection Update",
    body: "NEW TOP, DRESS, SKIRT 라인이 순차 업데이트됩니다.",
  },
  {
    date: "2026.03.01",
    title: "배송 안내",
    body: "주문 후 1~3일 내 출고 (주말·공휴일 제외)",
  },
];

function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/40"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white border border-[#ddd]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#eee]">
          <h2 className="text-base font-semibold text-[#111]">{title}</h2>
          <button type="button" onClick={onClose} className="text-[#999] hover:text-black">
            ✕
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openPanel, setOpenPanel] = useState(null);

  return (
    <>
      <footer className="mt-auto bg-white border-t border-[#e5e5e5] text-[#333]">
        <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            <div>
              <h3 className="text-[13px] font-bold text-[#111] mb-3 tracking-wide">
                CS CENTER
              </h3>
              <p className="text-[12px] text-[#555] leading-relaxed mb-2">
                {CS_CENTER.inquiry}
              </p>
              <Link to="/qa" className="text-[11px] text-[#666] hover:text-black underline underline-offset-2">
                Q&A 게시판 바로가기
              </Link>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-[#111] mb-3">BANK INFO</h3>
              <p className="text-[12px] text-[#555]">{BANK_INFO.bank}</p>
              <p className="text-[12px] text-[#555]">예금주: {BANK_INFO.holder}</p>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-[#111] mb-3">FOLLOW US</h3>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-[12px] text-[#666] hover:text-black"
              >
                @INSTAGRAM
              </a>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-[#111] mb-3">COMMUNITY</h3>
              <div className="flex flex-col gap-1.5 text-[12px]">
                <button
                  type="button"
                  onClick={() => setOpenPanel("notice")}
                  className="text-left text-[#666] hover:text-black"
                >
                  NOTICE
                </button>
                <Link to="/qa" className="text-[#666] hover:text-black">
                  Q&A
                </Link>
                <Link to="/reviews" className="text-[#666] hover:text-black">
                  REVIEW
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#eee]">
            <div className="flex flex-wrap gap-3 text-[11px] text-[#999] mb-4">
              <button type="button" className="hover:text-[#333]">
                AGREEMENT
              </button>
              <button type="button" className="hover:text-[#333]">
                PRIVACY POLICY
              </button>
              <Link to="/shop" className="hover:text-[#333]">
                GUIDE
              </Link>
            </div>
            <p className="text-[10px] text-[#aaa] leading-relaxed">
              COMPANY. {COMPANY_INFO.name} · CEO. {COMPANY_INFO.ceo} · BUSINESS NO.{" "}
              {COMPANY_INFO.businessNo}
            </p>
            <p className="text-[10px] text-[#bbb] mt-3">
              COPYRIGHT © {COMPANY_INFO.name.toUpperCase()} ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {openPanel === "notice" && (
        <Modal title="NOTICE" onClose={() => setOpenPanel(null)}>
          <ul className="space-y-4">
            {NOTICES.map((item) => (
              <li key={item.title} className="pb-4 border-b border-[#eee] last:border-0">
                <p className="text-[10px] text-[#aaa] mb-1">{item.date}</p>
                <p className="text-[13px] font-medium text-[#111] mb-1">{item.title}</p>
                <p className="text-[12px] text-[#666]">{item.body}</p>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
}
