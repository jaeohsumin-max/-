import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { getProductById } from "../data/products";
import { formatReviewDateTime, getReviewById } from "../lib/reviewStorage";
import { getReviewViewCount, recordReviewView } from "../lib/reviewViews";

export default function ReviewDetailPage() {
  const { id } = useParams();
  const review = getReviewById(id);
  const [views, setViews] = useState(() => (review ? getReviewViewCount(review.id) : 0));

  const product = review?.productId ? getProductById(review.productId) : null;

  useEffect(() => {
    if (!review) return;
    setViews(recordReviewView(review.id));
  }, [review]);

  if (!review) {
    return <Navigate to="/reviews" replace />;
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
        <Link to="/reviews" className="hover:text-black">
          REVIEW
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium line-clamp-1">{review.title}</span>
      </nav>

      {product && (
        <div className="mb-6 flex gap-4 items-start border border-[#eee] p-4 bg-[#fafafa]">
          <Link
            to={`/product/${product.id}`}
            className="shrink-0 w-20 h-24 bg-[#f0f0f0] overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </Link>
          <div className="text-[12px]">
            <Link
              to={`/product/${product.id}`}
              className="text-[#111] font-medium hover:underline"
            >
              {product.name}
            </Link>
          </div>
        </div>
      )}

      <div className="border-t border-[#333] border-b border-[#ddd]">
        <div className="px-4 py-5 md:px-6 border-b border-[#eee] bg-[#fafafa]">
          {!product && (
            <p className="text-[12px] text-[#666] mb-2">{review.productName}</p>
          )}
          <h1 className="text-base md:text-lg font-semibold text-[#111] mb-2">
            {review.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#888]">
            <span>작성자 {review.author}</span>
            <span>작성일 {formatReviewDateTime(review.createdAt)}</span>
            <span>조회 {views}</span>
            <StarRating rating={review.rating} />
          </div>
        </div>
        <div className="px-4 py-8 md:px-6 text-[13px] text-[#444] leading-relaxed whitespace-pre-line min-h-[120px]">
          {review.content}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        <Link
          to="/reviews"
          className="px-8 py-2.5 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white transition-colors"
        >
          목록
        </Link>
        <Link
          to="/reviews/write"
          className="px-8 py-2.5 bg-[#333] text-white text-[12px] hover:bg-black"
        >
          리뷰 작성
        </Link>
      </div>
    </div>
  );
}
