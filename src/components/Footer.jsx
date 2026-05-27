import { useState } from "react";
import { Link } from "react-router-dom";

const NOTICES = [
  {
    date: "2026.03.15",
    title: "Spring Collection Update",
    body: "New TOP, DRESS, and SKIRT lines will be updated sequentially.",
  },
  {
    date: "2026.03.01",
    title: "Shipping Notice",
    body: "Orders ship within 1–3 business days. Excludes weekends and public holidays.",
  },
  {
    date: "2026.02.20",
    title: "Exchange & Return Policy",
    body: "Unused items may be exchanged or returned within 7 days of delivery.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How do I place an order?",
    a: "Add items to your bag and proceed to checkout from the Order menu.",
  },
  {
    q: "When is payment confirmed?",
    a: "Bank transfers are confirmed within 1–2 hours. Shipping begins once confirmed.",
  },
  {
    q: "How do I exchange or return an item?",
    a: "Contact us at 010-7546-3869 and we will guide you through the process.",
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
            aria-label="Close"
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
      <footer className="mt-auto bg-white border-t border-[#e8e4df] text-[#181512]">
        <div className="max-w-4xl mx-auto px-5 md:px-10 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-[11px] leading-[1.9] tracking-[0.04em] uppercase">
            <div className="text-center md:text-left">
              <p>C/S</p>
              <p>T. 010-7546-3869</p>
              <p>Mon-Fri AM 10:30 - PM 17:30</p>
              <p>Weekend &amp; Holiday Is Closed</p>
              <p className="mt-6">Bank Account</p>
              <p>Shinhan 110-633-003213</p>
              <p>Account Holder: Lee Sumin (CODEMUSE)</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-6 normal-case tracking-normal">
                <button
                  type="button"
                  onClick={() => setOpenPanel("notice")}
                  className="text-[10px] tracking-[0.16em] uppercase text-[#6b6560] hover:text-[#181512] transition-colors border-b border-transparent hover:border-[#181512] pb-0.5"
                >
                  Notice
                </button>
                <span className="text-[#d4cfc8]">/</span>
                <button
                  type="button"
                  onClick={() => setOpenPanel("qa")}
                  className="text-[10px] tracking-[0.16em] uppercase text-[#6b6560] hover:text-[#181512] transition-colors border-b border-transparent hover:border-[#181512] pb-0.5"
                >
                  Q&amp;A
                </button>
              </div>
            </div>

            <div className="text-center md:text-left">
              <p>CODEMUSE</p>
              <p>CEO : Lee Sumin</p>
              <p>Business License : 187-28-02099</p>
              <p>Tel : 010-7546-3869</p>
              <p className="mt-6">Copyright © CODEMUSE All Rights Reserved</p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#e8e4df] flex flex-wrap justify-center gap-x-3 gap-y-2 text-[10px] tracking-[0.15em] uppercase text-[#6b6560]">
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
                <p className="text-xs leading-relaxed text-[#6b6560] normal-case tracking-normal">
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
                <p className="text-xs leading-relaxed text-[#6b6560] normal-case tracking-normal">
                  A. {item.a}
                </p>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-[#e8e4df]">
            <p className="text-xs text-[#6b6560] mb-3 normal-case tracking-normal">
              Have more questions? Contact us anytime.
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
