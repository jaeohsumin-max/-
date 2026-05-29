import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_POSTS = [
  {
    id: 1,
    title: "배송은 얼마나 걸리나요?",
    author: "guest***",
    date: "2026.03.18",
    status: "answered",
    answer: "주문 후 1~3영업일 이내 출고됩니다. 주말·공휴일은 제외됩니다.",
  },
  {
    id: 2,
    title: "사이즈 교환 가능한가요?",
    author: "muse***",
    date: "2026.03.16",
    status: "answered",
    answer: "미착용 상품에 한해 수령 후 7일 이내 Q&A로 교환 문의해 주세요.",
  },
  {
    id: 3,
    title: "입금 확인 문의드립니다.",
    author: "code***",
    date: "2026.03.20",
    status: "pending",
    answer: null,
  },
];

export default function QnaPage() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [openId, setOpenId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const today = new Date();
    const date = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join(".");

    setPosts((prev) => [
      {
        id: Date.now(),
        title: title.trim(),
        author: "guest***",
        date,
        status: "pending",
        answer: null,
        content: content.trim(),
      },
      ...prev,
    ]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="max-w-3xl mx-auto px-5 md:px-10 py-12 md:py-16">
      <nav className="text-xs text-[#6b6560] mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-[#181512]">
          Home
        </Link>
        <span>/</span>
        <span className="text-[#181512]">Q&amp;A</span>
      </nav>

      <h1 className="font-serif text-3xl md:text-4xl mb-3">Q&amp;A</h1>
      <p className="text-sm text-[#6b6560] mb-10">
        모든 상담은 Q&amp;A 게시판으로 진행됩니다.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-[#e8e4df] p-5 md:p-6 mb-10 space-y-4"
      >
        <p className="text-xs tracking-widest uppercase text-[#6b6560]">
          Write Inquiry
        </p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512]"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="문의 내용을 입력해 주세요."
          rows={4}
          className="w-full border border-[#e8e4df] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#181512] resize-none"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-[#181512] text-white px-8 py-3 text-xs tracking-widest uppercase"
        >
          문의 등록
        </button>
      </form>

      <div className="border-t border-[#181512]">
        <div className="hidden sm:grid grid-cols-[1fr_100px_90px_80px] gap-4 px-4 py-3 text-[10px] tracking-widest uppercase text-[#6b6560] border-b border-[#e8e4df]">
          <span>Title</span>
          <span className="text-center">Author</span>
          <span className="text-center">Date</span>
          <span className="text-center">Status</span>
        </div>

        <ul>
          {posts.map((post) => {
            const isOpen = openId === post.id;

            return (
              <li key={post.id} className="border-b border-[#e8e4df]">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : post.id)}
                  className="w-full text-left px-4 py-4 hover:bg-[#faf9f6] transition-colors"
                >
                  <div className="sm:grid sm:grid-cols-[1fr_100px_90px_80px] sm:gap-4 sm:items-center">
                    <p className="text-sm text-[#181512] mb-2 sm:mb-0">
                      {post.title}
                    </p>
                    <p className="text-xs text-[#6b6560] sm:text-center">
                      {post.author}
                    </p>
                    <p className="text-xs text-[#6b6560] sm:text-center">
                      {post.date}
                    </p>
                    <p className="text-[10px] tracking-widest uppercase sm:text-center">
                      <span
                        className={
                          post.status === "answered"
                            ? "text-[#181512]"
                            : "text-[#c4a882]"
                        }
                      >
                        {post.status === "answered" ? "Answered" : "Pending"}
                      </span>
                    </p>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 bg-[#faf9f6]">
                    {post.content && (
                      <p className="text-sm text-[#6b6560] leading-relaxed mb-4 whitespace-pre-wrap">
                        {post.content}
                      </p>
                    )}
                    {post.answer ? (
                      <div className="border-l-2 border-[#c4a882] pl-4">
                        <p className="text-[10px] tracking-widest uppercase text-[#a39e98] mb-2">
                          Answer
                        </p>
                        <p className="text-sm text-[#181512] leading-relaxed">
                          {post.answer}
                        </p>
                      </div>
                    ) : (
                      <p className="text-xs text-[#a39e98]">
                        답변 준비 중입니다.
                      </p>
                    )}
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
