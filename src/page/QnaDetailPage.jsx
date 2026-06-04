import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  formatQaDateTime,
  getCategoryLabel,
  getQaPostById,
} from "../lib/qaStorage";
import { getQaViewCount, recordQaView } from "../lib/qaViews";

export default function QnaDetailPage() {
  const { id } = useParams();
  const post = getQaPostById(id);
  const [views, setViews] = useState(() => (post ? getQaViewCount(post.id) : 0));

  useEffect(() => {
    if (!post) return;
    setViews(recordQaView(post.id));
  }, [post]);

  if (!post) {
    return <Navigate to="/qa" replace />;
  }

  const categoryLabel = getCategoryLabel(post.category);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#888]">게시판</span>
        <span className="text-[#ccc]">›</span>
        <Link to="/qa" className="hover:text-black">
          Q&amp;A
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium line-clamp-1">{post.title}</span>
      </nav>

      <div className="border-t border-[#333] border-b border-[#ddd]">
        <div className="px-4 py-5 md:px-6 border-b border-[#eee] bg-[#fafafa]">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] text-[#c45c4a] font-medium">[{categoryLabel}]</span>
            <h1 className="text-base md:text-lg font-semibold text-[#111]">
              {post.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-[#888]">
            <span>작성자 {post.author}</span>
            <span>작성일 {formatQaDateTime(post.createdAt)}</span>
            <span>조회 {views}</span>
          </div>
        </div>

        <div className="px-4 py-8 md:px-6 text-[13px] text-[#444] leading-relaxed whitespace-pre-line min-h-[120px]">
          {post.content}
        </div>

        {post.answer ? (
          <div className="px-4 py-6 md:px-6 bg-[#f9f9f9] border-t border-[#eee]">
            <p className="text-[11px] text-[#888] mb-2 font-medium">[답변] 코드뮤즈</p>
            <p className="text-[13px] text-[#333] leading-relaxed whitespace-pre-line">
              {post.answer}
            </p>
            {post.answeredAt && (
              <p className="text-[10px] text-[#aaa] mt-3">
                답변일 {formatQaDateTime(post.answeredAt)}
              </p>
            )}
          </div>
        ) : (
          <div className="px-4 py-6 md:px-6 bg-[#fafafa] border-t border-[#eee] text-[12px] text-[#888]">
            답변 준비 중입니다. 빠른 시일 내에 답변드리겠습니다.
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/qa"
          className="px-8 py-2.5 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white transition-colors"
        >
          목록
        </Link>
      </div>
    </div>
  );
}
