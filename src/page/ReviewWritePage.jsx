import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import StarRating from "../components/StarRating";
import { PRODUCTS } from "../data/products";
import { addReview } from "../lib/reviewStorage";

export default function ReviewWritePage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const presetProductId = searchParams.get("product") ?? "";

  const [productId, setProductId] = useState(presetProductId);
  const [productName, setProductName] = useState(() => {
    const p = PRODUCTS.find((x) => x.id === presetProductId);
    return p?.name ?? "";
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState("");

  const handleProductChange = (id) => {
    setProductId(id);
    const p = PRODUCTS.find((x) => x.id === id);
    if (p) setProductName(p.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!productName.trim() || !title.trim() || !content.trim()) {
      setError("상품명, 제목, 내용을 입력해 주세요.");
      return;
    }

    const review = addReview({
      productId: productId || null,
      productName,
      title,
      content,
      rating,
      authorName,
    });
    navigate(`/reviews/${review.id}`, { replace: true });
  };

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
        <span className="text-[#333] font-medium">글쓰기</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] mb-8">
        REVIEW 글쓰기
      </h2>

      {error && (
        <p className="mb-4 text-[12px] text-[#c45c4a] bg-[#fff5f5] border border-[#ffd6d6] px-3 py-2 max-w-2xl mx-auto">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border border-[#ddd] bg-white"
      >
        <table className="w-full text-[12px]">
          <tbody>
            <tr className="border-b border-[#eee]">
              <th className="w-28 bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666] align-top">
                상품 선택
              </th>
              <td className="py-3 px-4 space-y-2">
                <select
                  value={productId}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="border border-[#ddd] px-3 py-2 w-full"
                >
                  <option value="">직접 입력</option>
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full border border-[#ddd] px-3 py-2 focus:outline-none focus:border-[#333]"
                  placeholder="상품명"
                />
              </td>
            </tr>
            <tr className="border-b border-[#eee]">
              <th className="bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666]">
                리뷰 제목
              </th>
              <td className="py-3 px-4">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-[#ddd] px-3 py-2 focus:outline-none focus:border-[#333]"
                  placeholder="예: 너무 예뻐요"
                />
              </td>
            </tr>
            <tr className="border-b border-[#eee]">
              <th className="bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666]">
                평점
              </th>
              <td className="py-3 px-4">
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
                        className={`material-symbols-outlined text-[26px] fill-1 ${
                          star <= rating ? "text-[#e8a020]" : "text-[#ddd]"
                        }`}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[10px] text-[#aaa] mt-1">
                  <StarRating rating={rating} size={14} />
                </p>
              </td>
            </tr>
            <tr className="border-b border-[#eee]">
              <th className="bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666] align-top">
                내용
              </th>
              <td className="py-3 px-4">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  className="w-full border border-[#ddd] px-3 py-2 resize-y focus:outline-none focus:border-[#333]"
                  placeholder="리뷰 내용을 입력해 주세요"
                />
              </td>
            </tr>
            <tr>
              <th className="bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666]">
                작성자
              </th>
              <td className="py-3 px-4">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full max-w-xs border border-[#ddd] px-3 py-2 focus:outline-none focus:border-[#333]"
                  placeholder="이름 (미입력 시 guest)"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center gap-2 py-6 border-t border-[#eee]">
          <button
            type="submit"
            className="px-8 py-2.5 bg-[#333] text-white text-[12px] hover:bg-black"
          >
            등록
          </button>
          <Link
            to="/reviews"
            className="px-8 py-2.5 border border-[#ccc] text-[12px] hover:border-[#333]"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
