import React from "react";
// import "./index.css"; // 위에서 작성한 CSS 임포트

export default function D() {
  return (
    <div className="font-body-md text-body-md overflow-x-hidden">
      {/* Sidebar Navigation Shell */}
      <aside className="fixed left-0 top-0 w-64 border-r border-outline-variant bg-surface-container flex flex-col h-full py-8 px-6 z-50">
        <div className="mb-12">
          <h1 className="font-display-lg text-display-lg text-primary italic leading-none">
            엘란
          </h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 tracking-widest uppercase">
            하이엔드 에디토리얼 패션
          </p>
        </div>
        <nav className="flex-1 space-y-6">
          <a
            className="flex items-center gap-4 text-primary font-bold border-r-2 border-secondary hover:bg-surface-container-high transition-colors py-2 px-1"
            href="https://www.naver.com"
          >
            <span className="material-symbols-outlined">NEW</span>
            <span className="font-label-sm text-label-sm">신상품</span>
          </a>
          <a
            className="flex items-center gap-4 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors py-2 px-1"
            href="#"
          >
            <span className="material-symbols-outlined">
              collections_bookmark
            </span>
            <span className="font-label-sm text-label-sm">컬렉션</span>
          </a>
          <a
            className="flex items-center gap-4 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors py-2 px-1"
            href="#"
          >
            <span className="material-symbols-outlined">apparel</span>
            <span className="font-label-sm text-label-sm">의류</span>
          </a>
          <a
            className="flex items-center gap-4 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors py-2 px-1"
            href="#"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="font-label-sm text-label-sm">액세서리</span>
          </a>
          <a
            className="flex items-center gap-4 text-on-surface-variant font-medium hover:bg-surface-container-high transition-colors py-2 px-1"
            href="#"
          >
            <span className="material-symbols-outlined">history</span>
            <span className="font-label-sm text-label-sm">아카이브</span>
          </a>
        </nav>
        <div className="mt-auto space-y-4">
          <button className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-4 rounded-lg tracking-widest uppercase hover:opacity-90 transition-opacity">
            아틀리에 가입하기
          </button>
          <div className="pt-8 border-t border-outline-variant space-y-4">
            <a
              className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm hover:text-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">help</span> 고객 지원
            </a>
            <a
              className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm hover:text-secondary transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">eco</span> 지속 가능성
            </a>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar Navigation Shell */}
        <header className="fixed top-0 right-0 left-64 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-6">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              부티크
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
              저널
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group">
              <input
                className="bg-transparent border-none text-label-sm focus:ring-0 placeholder:text-outline p-0 w-40 text-right"
                placeholder="컬렉션 검색"
                type="text"
              />
              <div className="absolute bottom-0 right-0 w-0 h-[1px] bg-secondary group-focus-within:w-full transition-all"></div>
            </div>
            <div className="flex items-center gap-6">
              <button className="material-symbols-outlined text-primary hover:text-secondary transition-colors">
                person
              </button>
              <button className="material-symbols-outlined text-primary hover:text-secondary transition-colors">
                favorite
              </button>
              <button className="material-symbols-outlined text-primary hover:text-secondary transition-colors">
                shopping_cart
              </button>
              <button className="font-label-sm text-label-sm text-secondary uppercase font-bold ml-2">
                로그인
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[90vh] mt-16 overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Silk Collection Campaign"
              className="w-full h-full object-cover"
              src="https://zaenio.kr/web/upload/NNEditor/20260512/490c7bbb413f218b6820131d38e29b9e.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
          </div>
          <div className="relative h-full flex flex-col justify-center px-16 max-w-4xl">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-6">
              시즌 에디토리얼
            </span>
            <h2 className="font-display-lg text-[80px] text-primary leading-[1.1] mb-8">
              실크 <br />
              컬렉션
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-12 italic">
              우아한 움직임을 위해 디자인된 유려한 실루엣의 큐레이션을
              만나보세요. 고급스러운 소재의 조용한 럭셔리를 가치 있게 여기는
              현대 여성을 위한 자연스러운 우아함.
            </p>
            <div className="flex gap-6">
              <button className="bg-primary text-on-primary font-label-sm text-label-sm py-5 px-10 rounded-lg tracking-widest uppercase editorial-shadow hover:opacity-90 transition-opacity">
                컬렉션 둘러보기
              </button>
              <button className="border border-secondary text-secondary font-label-sm text-label-sm py-5 px-10 rounded-lg tracking-widest uppercase hover:bg-secondary/5 transition-colors">
                룩북 보기
              </button>
            </div>
          </div>
        </section>

        {/* New Arrivals Grid */}
        <section className="px-16 py-section-gap">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                최신 추가 상품
              </span>
              <h3 className="font-display-lg text-display-lg text-primary mt-4 italic">
                신상품
              </h3>
            </div>
            <a
              className="font-label-sm text-label-sm text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all uppercase tracking-widest"
              href="#"
            >
              신상품 전체 보기
            </a>
          </div>
          <div className="grid grid-cols-4 gap-gutter">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6 relative">
                <img
                  alt="New Arrival Product"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://blog.kakaocdn.net/dna/br7xd6/btrbgoJtWYz/AAAAAAAAAAAAAAAAAAAAANlwY_2Ey0qdhr1PL8jwPX3Q62RFK3eM_kG7-zKjNzYC/img.gif?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=6AIvup2pR3PwIRg7s9f1sbQb7HQ%3D"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 font-label-sm text-[10px] tracking-widest uppercase rounded-full">
                    실크 블렌드
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-sm text-headline-sm italic">
                    루미너스 슬립
                  </h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    $380
                  </span>
                </div>
                <p className="font-label-sm text-[11px] text-on-tertiary-container uppercase tracking-widest">
                  샴페인 / 퓨어 실크
                </p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Product 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAahAZyJHUgpJUl1-njHzs1c51UavUJghL7lU7G9MRDBZYUtJ_0pbkc9OMPC44QwvUyhAAp3yWfrG9oEvfuMvV6OiZBJYQknWrCXgE37HxDQv421WW8CuGdWrcsM0qKGEawGwbKgwy-rsNLxQPUPiPOGaWgSHmLG9bOqnE5j6eqZs-JZ73PoPpr42PE0A55TSZTt5tZQQRR15KMgqYoTXKY3RSP0o15swrUTN-_iAsFY1z4c0A9OwOjQqLhUb-Iqo7XIhyltpKglw"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-sm text-headline-sm italic">
                    아틀리에 블라우스
                  </h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    $295
                  </span>
                </div>
                <p className="font-label-sm text-[11px] text-on-tertiary-container uppercase tracking-widest">
                  샌드 / 오간자
                </p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Product 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGN_eM4dH3OLMGerQyzFu9-IreRAA4gsZG0e5IqHpDxoFt-AbgEo-qDvbMxZN4XxvQcw5SUF1V6McOhfHHzm7EuqENu6n9q3KTeZHOwL5vUmOTSZSCE0XR1flPHk_sZvLe1x1i24Vg-A5vPNd8QJWabKI5ayXRNCEdKTyLlovEwir6nNT5opAyxxNTcFQFHrbZskOQC9zONr5fWn4NRdngbz08-kJD1fnKrFObrozRRmL71VndmgR8UOAzSKIqdb7ArQY5jBwJ7Q"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-sm text-headline-sm italic">
                    에테리얼 가운
                  </h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    $540
                  </span>
                </div>
                <p className="font-label-sm text-[11px] text-on-tertiary-container uppercase tracking-widest">
                  아이보리 / 크레프 드 신
                </p>
              </div>
            </div>
            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Product 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6n16yrk7SIMTa4xGxdIhEeCAGiLnn1ibHH5yBsGd0kdRwNBgW2Gzl05-J_5Lo3XzWC8EpVHyqVZQ1UJsGgiABa7yMnJ6HlPthkZgdlrR8v4fEFY8I4lE-d0ALg5DQkQjMJTYd0VSWWdWalhDr_O7H3MNlJX-5ZQmPW2Kd76ZqUOJMyvx4-lv41Yg9q6yFnvdtpdpcDkcMKoh-k_0rGmFSSg9ieCHhV40ETgq5IYLajWjy5JKSiL0AaP_R8q48Qk9tvqiSt9Qyyw"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="font-headline-sm text-headline-sm italic">
                    미니멀리스트 트렌치
                  </h4>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    $620
                  </span>
                </div>
                <p className="font-label-sm text-[11px] text-on-tertiary-container uppercase tracking-widest">
                  오트 / 파인 린넨
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-surface-container-low py-section-gap px-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="material-symbols-outlined text-secondary text-4xl mb-8">
              spa
            </span>
            <h3 className="font-headline-md text-headline-md text-primary mb-10 leading-relaxed italic px-12">
              "우리는 옷의 울림을 믿습니다. 피부에 닿는 감촉, 빛을 머금는 방식,
              그리고 그것을 입는 여성에게 자신감을 불어넣는 힘을 말입니다."
            </h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-[0.4em]">
              우리의 철학
            </p>
          </div>
        </section>

        {/* Category Spotlight */}
        <section className="grid grid-cols-2 gap-px bg-outline-variant h-[70vh]">
          <div className="bg-surface p-16 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-6">
              에센셜 포인트
            </span>
            <h2 className="font-display-lg text-display-lg text-primary italic mb-8">
              액세서리 에디트
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-sm">
              실루엣을 완성하는 매혹적인 큐레이션 오브제. 부드러운 가죽부터
              장인의 금속 공예까지.
            </p>
            <button className="w-fit border border-primary text-primary font-label-sm text-label-sm py-5 px-10 rounded-lg tracking-widest uppercase hover:bg-primary hover:text-white transition-all">
              더 알아보기
            </button>
          </div>
          <div className="relative overflow-hidden group">
            <img
              alt="Accessories Category Card"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0iZkPoyGYMpk3f-_MU86_CGrcd9oq53cHTePb4FOAwjxSn_Njbzkhj0kxIshtElEYZKAt9xuB02dmvLi2S_aHV0gJA-UAt4WDSacLYswDGnR_kT6gAPh1VNMrWPuYx9eUk8IgsCSKQg90D724_vw1jVWHiQ_21k6-x6ctp3RuvWEAT9KgblltlaB-KrhD_UWwQ9qOhhhmf9hK25ahggOvqWptgU1Nhz61UBfEozg8WM6SlfJvJq_kpUgGMDMpOG3hvToya_rwsQ"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="p-container-padding flex flex-col md:flex-row justify-between items-start md:items-center bg-surface border-t border-outline-variant mt-section-gap">
          <div className="space-y-4">
            <h4 className="font-display-lg text-display-lg text-primary italic leading-none">
              엘란
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              © 2024 엘란 부티크. 안목 있는 분들을 위한 큐레이션.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 mt-8 md:mt-0">
            <div className="space-y-4">
              <p className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                정보
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-all"
                    href="#"
                  >
                    배송 및 반품
                  </a>
                </li>
                <li>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-all"
                    href="#"
                  >
                    개인정보 처리방침
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                회사
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-all"
                    href="#"
                  >
                    채용
                  </a>
                </li>
                <li>
                  <a
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline transition-all"
                    href="#"
                  >
                    연락처
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                소셜
              </p>
              <ul className="flex gap-4">
                <li>
                  <a
                    className="text-primary hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">camera</span>
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary hover:text-secondary transition-colors"
                    href="#"
                  >
                    <span className="material-symbols-outlined">
                      brand_awareness
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
