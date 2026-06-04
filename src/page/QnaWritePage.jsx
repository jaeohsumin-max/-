import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addQaPost, QA_CATEGORIES } from "../lib/qaStorage";

export default function QnaWritePage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("shipping");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim() || !content.trim()) {
      setError("제목과 내용을 입력해 주세요.");
      return;
    }

    const post = addQaPost({
      category,
      title,
      content,
      authorName,
    });
    navigate(`/qa/${post.id}`, { replace: true });
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
        <Link to="/qa" className="hover:text-black">
          Q&amp;A
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium">글쓰기</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] mb-8">
        Q&amp;A 글쓰기
      </h2>

      {error && (
        <p className="mb-4 text-[12px] text-[#c45c4a] bg-[#fff5f5] border border-[#ffd6d6] px-3 py-2">
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
              <th className="w-28 bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666]">
                문의 유형
              </th>
              <td className="py-3 px-4">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-[#ddd] px-3 py-2 w-full max-w-xs"
                >
                  {QA_CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr className="border-b border-[#eee]">
              <th className="bg-[#fafafa] py-3 px-4 text-left font-medium text-[#666]">
                제목
              </th>
              <td className="py-3 px-4">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-[#ddd] px-3 py-2 focus:outline-none focus:border-[#333]"
                  placeholder="제목을 입력해 주세요"
                />
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
                  rows={8}
                  className="w-full border border-[#ddd] px-3 py-2 resize-y focus:outline-none focus:border-[#333]"
                  placeholder="문의 내용을 입력해 주세요"
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
                <p className="text-[10px] text-[#aaa] mt-1">
                  개인정보 보호를 위해 일부 마스킹되어 표시됩니다.
                </p>
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
            to="/qa"
            className="px-8 py-2.5 border border-[#ccc] text-[12px] hover:border-[#333]"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
