import { useState } from "react";
import { Link } from "react-router-dom";

const NOTICES = [
  {
    date: "2026.03.15",
    title: "Spring Collection 업데이트",
    body: "신상 TOP · DRESS · SKIRT 라인이 순차적으로 업데이트됩니다.",
  },
  {
    date: "2026.03.01",
    title: "배송 안내",
    body: "주문 후 1~3영업일 이내 출고됩니다. 주말·공휴일 제외.",
  },
  {
    date: "2026.02.20",
    title: "교환 · 반품 안내",
    body: "상품 수령 후 7일 이내 미착용 상품에 한해 교환·반품 가능합니다.",
  },
];

const FAQ_ITEMS = [
  {
    q: "주문은 어떻게 하나요?",
    a: "원하시는 상품을 장바구니에 담은 뒤 Order 메뉴에서 결제를 진행해 주세요.",
  },
  {
    q: "입금 확인은 언제 되나요?",
    a: "입금 후 1~2시간 이내 확인되며, 확인 즉시 배송 준비가 시작됩니다.",
  },
  {
    q: "교환 · 반품은 어떻게 하나요?",
    a: "고객센터(010-7546-3869) 또는 아래 문의로 연락 주시면 안내드립니다.",
  },
];

function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-[#181512]/40 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white border border-[#e8e4df] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8e4df]">
          <h2 className="font-serif text-xl text-[#181512]">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#6b6560] hover:text-[#181512] transition-colors"
            aria-label="닫기"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openPanel, setOpenPanel] = useState(null);

  const closePanel = () => setOpenPanel(null);

  return (
    <>
      <footer className="mt-auto bg-white border-t border-[#e8e4df] text-[#6b6560]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
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
                  onClick={() => setOpenPanel("notice")}
                  className={`text-[11px] tracking-[0.16em] uppercase pb-1 transition-opacity hover:opacity-70 ${
                    openPanel === "notice"
                      ? "text-[#181512] border-b-2 border-[#181512]"
                      : "text-[#181512] border-b-2 border-[#181512]"
                  }`}
                >
                  Notice
                </button>
                <span className="text-[#e8e4df] text-sm">/</span>
                <button
                  type="button"
                  onClick={() => setOpenPanel("qa")}
                  className={`text-[11px] tracking-[0.16em] uppercase transition-colors hover:text-[#181512] ${
                    openPanel === "qa"
                      ? "text-[#181512] border-b border-[#181512] pb-0.5"
                      : "text-[#6b6560]"
                  }`}
                >
                  Q&amp;A
                </button>
              </div>
            </div>

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
                  <span className="text-[#a39e98]">사업자등록번호</span>{" "}
                  187-28-02099
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

      {openPanel === "notice" && (
        <Modal title="Notice" onClose={closePanel}>
          <ul className="space-y-5">
            {NOTICES.map((item) => (
              <li
                key={item.title}
                className="pb-5 border-b border-[#e8e4df] last:border-0 last:pb-0"
              >
                <p className="text-[10px] tracking-widest uppercase text-[#a39e98] mb-1">
                  {item.date}
                </p>
                <p className="text-sm font-medium text-[#181512] mb-1">
                  {item.title}
                </p>
                <p className="text-xs leading-relaxed text-[#6b6560]">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Modal>
      )}

      {openPanel === "qa" && (
        <Modal title="Q&A" onClose={closePanel}>
          <ul className="space-y-5 mb-6">
            {FAQ_ITEMS.map((item) => (
              <li key={item.q}>
                <p className="text-sm font-medium text-[#181512] mb-1">
                  Q. {item.q}
                </p>
                <p className="text-xs leading-relaxed text-[#6b6560]">
                  A. {item.a}
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-[#e8e4df]">
            <p className="text-xs text-[#6b6560] mb-3">
              더 궁금한 점이 있으시면 문의해 주세요.
            </p>
            <a
              href="tel:01075463869"
              className="inline-block text-[11px] tracking-widest uppercase text-[#181512] border-b border-[#181512] pb-0.5"
            >
              010-7546-3869
            </a>
          </div>
        </Modal>
      )}
    </>
  );
}
