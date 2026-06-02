import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_REVIEWS = [
  {
    id: 1,
    product: "캐시미어 터틀넥",
    author: "muse***",
    date: "2026.03.17",
    rating: 5,
    content: "소재가 부드럽고 핏도 예뻐요. 레이어드하기 좋습니다.",
  },
  {
    id: 2,
    product: "와이드 슬랙스",
    author: "code***",
    date: "2026.03.14",
    rating: 4,
    content: "기장감이 좋고 데일리로 입기 편해요. 색상도 사진과 같아요.",
  },
  {
    id: 3,
    product: "실크 미디 드레스",
    author: "guest***",
    date: "2026.03.10",
    rating: 5,
    content: "은은한 광택이 고급스럽고 라인이 예쁩니다. 만족합니다.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`material-symbols-outlined text-[16px] ${
            star <= rating ? "text-[#c4a882] fill-1" : "text-[#e8e4df]"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

function formatDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join(".");
}

export default function ReviewPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [openId, setOpenId] = useState(null);
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim() || !content.trim()) return;

    setReviews((prev) => [
      {
        id: Date.now(),
        product: product.trim(),
        author: "guest***",
        date: formatDate(new Date()),
        rating,
        content: content.trim(),
      },
      ...prev,
    ]);
    setProduct("");
    setRating(5);
    setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-10 py-12 md:py-16">
      <nav className="text-xs text-[#6b6560] mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-[#181512]">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#181512]">Reviews</span>
      </nav>

      <h1 className="font-serif text-3xl md:text-4xl mb-3">Reviews</h1>
      <p className="text-sm text-[#6b6560] mb-10">
        구매하신 상품의 후기를 남겨 주세요.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#e8e4df] p-5 md:p-6 mb-10 space-y-4"
      >
        <p className="text-xs tracking-widest uppercase text-[#6b6560]">
          Write Review
        </p>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="상품명"
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
        />
        <div>
          <p className="text-xs text-[#6b6560] mb-2">별점</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="p-0.5"
                aria-label={`${star}점`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] ${
                    star <= rating ? "text-[#c4a882] fill-1" : "text-[#e8e4df]"
                  }`}
                >
                  star
                </span>
              </button>
            ))}
          </div>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="리뷰 내용을 입력해 주세요."
          rows={4}
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512] resize-none"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#181512] text-white px-8 py-3 text-xs tracking-widest uppercase"
        >
          리뷰 등록
        </button>
      </form>

      <div className="border-t border-[#181512]">
        <div className="hidden sm:grid grid-cols-[1fr_100px_90px_80px] gap-4 px-4 py-3 text-[10px] tracking-widest uppercase text-[#6b6560] border-b border-[#e8e4df]">
          <span>Product</span>
          <span className="text-center">Author</span>
          <span className="text-center">Date</span>
          <span className="text-center">Rating</span>
        </div>

        <ul>
          {reviews.map((review) => {
            const isOpen = openId === review.id;

            return (
              <li key={review.id} className="border-b border-[#e8e4df]">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : review.id)}
                  className="w-full text-left px-4 py-4 hover:bg-[#faf9f6] transition-colors"
                >
                  <div className="sm:grid sm:grid-cols-[1fr_100px_90px_80px] sm:gap-4 sm:items-center">
                    <p className="text-sm text-[#181512] mb-2 sm:mb-0">
                      {review.product}
                    </p>
                    <p className="text-xs text-[#6b6560] sm:text-center">
                      {review.author}
                    </p>
                    <p className="text-xs text-[#6b6560] sm:text-center">
                      {review.date}
                    </p>
                    <div className="sm:flex sm:justify-center">
                      <StarRating rating={review.rating} />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 bg-[#faf9f6]">
                    <StarRating rating={review.rating} />
                    <p className="text-sm text-[#6b6560] leading-relaxed mt-3 whitespace-pre-wrap">
                      {review.content}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
