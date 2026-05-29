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

function FooterColumn({ title, children, className = "" }) {
  return (
    <div className={className}>
      <h3 className="font-serif text-[15px] text-[#181512] mb-4 tracking-wide">
        {title}
      </h3>
      <div className="space-y-2 text-xs text-[#6b6560] leading-relaxed normal-case tracking-normal">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block hover:text-[#181512] transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const [openPanel, setOpenPanel] = useState(null);

  const closePanel = () => setOpenPanel(null);

  return (
    <>
      <footer className="mt-auto bg-[#faf9f6] border-t border-[#e8e4df] text-[#181512]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-10">
            <FooterColumn title="Customer Center" className="col-span-2 md:col-span-1">
              <p>모든 문의는 게시판 문의 부탁드립니다</p>
              <p>
                교환 반품은 7일이내만 가능하며, 교환반품 신청 후 게시판으로
                문의주셔야 수거가 진행됩니다
              </p>
            </FooterColumn>

            <FooterColumn title="Bank Account" className="col-span-2 md:col-span-1">
              <p className="text-[#181512]">신한 110-633-003213</p>
              <p>예금주: 이수민(코드뮤즈)</p>
            </FooterColumn>

            <FooterColumn title="Community">
              <button
                type="button"
                onClick={() => setOpenPanel("notice")}
                className="block text-left hover:text-[#181512] transition-colors"
              >
                Notice
              </button>
              <FooterLink to="/qa">Q&amp;A</FooterLink>
              <FooterLink to="/shop/best">Reviews</FooterLink>
            </FooterColumn>

            <FooterColumn title="Social" className="col-span-2 md:col-span-1 lg:col-span-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#181512] transition-colors"
              >
                Instagram
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </FooterColumn>
          </div>

          <div className="mt-12 pt-6 border-t border-[#e8e4df] text-center text-[10px] text-[#a39e98] leading-relaxed tracking-[0.06em] uppercase">
            <p className="mb-1">
              CODEMUSE · CEO Lee Sumin · Business License 187-28-02099
            </p>
            <p>Copyright © CODEMUSE All Rights Reserved</p>
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

    </>
  );
}
