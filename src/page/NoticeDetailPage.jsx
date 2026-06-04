import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getNoticeById } from "../data/notices";

function getViewCount(id, base) {
  const key = `codemuse_notice_views_${id}`;
  const stored = localStorage.getItem(key);
  if (stored) return Number(stored);
  localStorage.setItem(key, String(base));
  return base;
}

function incrementViews(id, base) {
  const key = `codemuse_notice_views_${id}`;
  const next = getViewCount(id, base) + 1;
  localStorage.setItem(key, String(next));
  return next;
}

export default function NoticeDetailPage() {
  const { id } = useParams();
  const notice = getNoticeById(id);
  const [views, setViews] = useState(notice?.views ?? 0);

  useEffect(() => {
    if (!notice) return;
    setViews(incrementViews(notice.id, notice.views));
  }, [notice]);

  if (!notice) {
    return <Navigate to="/notice" replace />;
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#888]">게시판</span>
        <span className="text-[#ccc]">›</span>
        <Link to="/notice" className="hover:text-black">
          NOTICE
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium line-clamp-1">{notice.title}</span>
      </nav>

      <div className="border-t border-[#333] border-b border-[#ddd]">
        <div className="px-4 py-5 md:px-6 border-b border-[#eee] bg-[#fafafa]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {notice.pinned && (
              <span className="text-[10px] text-[#c45c4a] font-semibold border border-[#f0c4c0] px-1.5 py-0.5">
                공지
              </span>
            )}
            <h1 className="text-base md:text-lg font-semibold text-[#111]">
              {notice.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-[#888]">
            <span>작성자 {notice.author}</span>
            <span>작성일 {notice.date}</span>
            <span>조회 {views}</span>
          </div>
        </div>
        <div className="px-4 py-8 md:px-6 md:py-10 text-[13px] text-[#444] leading-relaxed whitespace-pre-line min-h-[200px]">
          {notice.body}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/notice"
          className="px-8 py-2.5 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white transition-colors"
        >
          목록
        </Link>
      </div>
    </div>
  );
}
