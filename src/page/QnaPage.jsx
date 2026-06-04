import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { formatQaDateTime, getCategoryLabel, getQaPosts } from "../lib/qaStorage";
import { getQaViewCount } from "../lib/qaViews";

const PER_PAGE = 10;

const SEARCH_PERIODS = [
  { id: "week", label: "일주일" },
  { id: "month", label: "한달" },
  { id: "quarter", label: "세달" },
  { id: "all", label: "전체" },
];

const SEARCH_FIELDS = [
  { id: "title", label: "제목" },
  { id: "content", label: "내용" },
  { id: "author", label: "글쓴이" },
];

function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null;
  return (
    <nav className="mt-8 flex flex-wrap items-center justify-center gap-1 text-[12px] text-[#666]">
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        첫 페이지
      </button>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => onPage(page - 1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        이전 페이지
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPage(p)}
          className={`min-w-[28px] h-7 px-1 border ${
            page === p
              ? "border-black text-black font-semibold"
              : "border-[#ddd] hover:border-[#999]"
          }`}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(page + 1)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        다음 페이지
      </button>
      <button
        type="button"
        disabled={page === totalPages}
        onClick={() => onPage(totalPages)}
        className="px-2 py-1 hover:text-black disabled:opacity-30"
      >
        마지막 페이지
      </button>
    </nav>
  );
}

export default function QnaPage() {
  const posts = getQaPosts();
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [field, setField] = useState("title");
  const [period, setPeriod] = useState("all");
  const [searched, setSearched] = useState(false);

  const filtered = useMemo(() => {
    let list = [...posts];

    if (searched && keyword.trim()) {
      const q = keyword.trim().toLowerCase();
      list = list.filter((p) => {
        if (field === "title") return p.title.toLowerCase().includes(q);
        if (field === "content") return p.content.toLowerCase().includes(q);
        if (field === "author") return p.author.toLowerCase().includes(q);
        return (
          p.title.toLowerCase().includes(q) ||
          p.content.toLowerCase().includes(q)
        );
      });
    }

    if (period !== "all" && searched) {
      const now = Date.now();
      const days = period === "week" ? 7 : period === "month" ? 30 : 90;
      const cutoff = now - days * 24 * 60 * 60 * 1000;
      list = list.filter((p) => new Date(p.createdAt).getTime() >= cutoff);
    }

    return list;
  }, [posts, keyword, field, period, searched]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const listNumberStart = filtered.length - (currentPage - 1) * PER_PAGE;

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    setPage(1);
  };

  const emptyMessage =
    searched && keyword.trim()
      ? "검색결과가 없습니다."
      : "등록된 문의가 없습니다.";

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <nav className="text-[11px] text-[#999] mb-6 flex items-center flex-wrap gap-1">
        <Link to="/" className="hover:text-black">
          홈
        </Link>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#888]">게시판</span>
        <span className="text-[#ccc]">›</span>
        <span className="text-[#333] font-medium">Q&amp;A</span>
      </nav>

      <h2 className="text-center text-lg md:text-xl font-semibold text-[#111] mb-8">
        Q&amp;A
      </h2>

      <div className="overflow-x-auto border-t border-[#333]">
        <table className="w-full min-w-[720px] text-[12px] text-[#333] border-collapse">
          <caption className="sr-only">상품 게시판 목록</caption>
          <thead>
            <tr className="bg-[#fafafa] border-b border-[#ddd]">
              <th className="w-12 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                번호
              </th>
              <th className="py-3 px-3 font-medium text-[#666] text-left border-r border-[#eee]">
                제목
              </th>
              <th className="w-24 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                작성자
              </th>
              <th className="w-36 py-3 px-2 font-medium text-[#666] border-r border-[#eee]">
                작성일
              </th>
              <th className="w-14 py-3 px-2 font-medium text-[#666]">조회</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-16 text-center text-[#999]">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paginated.map((post, index) => {
                const listNo = listNumberStart - index;
                const categoryLabel = getCategoryLabel(post.category);
                return (
                  <tr
                    key={post.id}
                    className="border-b border-[#eee] hover:bg-[#fafafa]"
                  >
                    <td className="py-3 px-2 text-center text-[#888] border-r border-[#f0f0f0]">
                      {listNo}
                    </td>
                    <td className="py-3 px-3 text-left border-r border-[#f0f0f0]">
                      <Link
                        to={`/qa/${post.id}`}
                        className="text-[#111] hover:underline"
                      >
                        {post.answer && (
                          <span className="text-[10px] text-[#888] mr-1">[답변]</span>
                        )}
                        <span className="text-[10px] text-[#c45c4a] mr-1">
                          [{categoryLabel}]
                        </span>
                        {post.title}
                      </Link>
                    </td>
                    <td className="py-3 px-2 text-center text-[#666] border-r border-[#f0f0f0]">
                      {post.author}
                    </td>
                    <td className="py-3 px-2 text-center text-[#888] border-r border-[#f0f0f0] whitespace-nowrap">
                      {formatQaDateTime(post.createdAt)}
                    </td>
                    <td className="py-3 px-2 text-center text-[#888]">
                      {getQaViewCount(post.id)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          to="/qa/write"
          className="px-5 py-2 bg-[#333] text-white text-[12px] hover:bg-black transition-colors"
        >
          글쓰기
        </Link>
      </div>

      <Pagination page={currentPage} totalPages={totalPages} onPage={setPage} />

      <form
        onSubmit={handleSearch}
        className="mt-10 pt-8 border-t border-[#eee] flex flex-col md:flex-row md:items-center md:justify-end gap-3"
      >
        <span className="text-[11px] text-[#888] md:mr-auto">게시물 검색</span>
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="border border-[#ddd] px-2 py-2 text-[12px] bg-white"
          >
            {SEARCH_PERIODS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
          <select
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="border border-[#ddd] px-2 py-2 text-[12px] bg-white"
          >
            {SEARCH_FIELDS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
          <input
            type="search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="border border-[#ddd] px-3 py-2 text-[12px] w-40 md:w-52 focus:outline-none focus:border-[#333]"
          />
          <button
            type="submit"
            className="px-4 py-2 border border-[#333] text-[12px] hover:bg-[#333] hover:text-white transition-colors"
          >
            찾기
          </button>
        </div>
      </form>
    </div>
  );
}
