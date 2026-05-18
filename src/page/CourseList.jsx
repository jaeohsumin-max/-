import React from "react";

export default function CourseList() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Geist', sans-serif;
          background-color: #f9f9f9;
          color: #1a1c1c;
          margin: 0;
          padding: 0;
        }

        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <div className="bg-background text-primary selection:bg-primary selection:text-on-primary antialiased min-h-screen">
        {/* Top Navigation Bar */}
        <nav className="docked full-width top-0 border-b-[0.5px] border-outline-variant bg-surface flex justify-between items-center w-full px-margin-desktop py-lg fixed z-50">
          <div className="font-headline-md text-headline-md text-primary tracking-tighter">
            EduSpark
          </div>
          <div className="hidden md:flex gap-lg items-center">
            <a
              className="text-primary font-bold underline underline-offset-[4px] decoration-1 font-body-base text-body-base"
              href="#courses"
            >
              COURSES
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary"
              href="#library"
            >
              LIBRARY
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary"
              href="#research"
            >
              RESEARCH
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary"
              href="#logout"
            >
              LOGOUT
            </a>
          </div>
        </nav>

        <main className="min-h-screen pt-[100px] pb-xxl px-margin-desktop">
          {/* Main Heading Area */}
          <header className="mb-xxl max-w-[650px]">
            <h1 className="font-headline-lg text-headline-lg md:text-headline-lg mb-md">
              커리큘럼 선택
            </h1>
            <div className="w-12 h-[2px] bg-primary"></div>
          </header>

          {/* Course List Section */}
          <div className="space-y-xxl">
            {/* Category: 컴퓨터 과학 */}
            <section className="max-w-[650px]">
              <div className="font-label-sm text-label-sm uppercase mb-lg tracking-widest text-secondary">
                컴퓨터 과학
              </div>
              <ul className="space-y-lg">
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    논리와 회로 설계
                  </span>
                </li>
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    알고리즘 분석의 기초
                  </span>
                </li>
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    운영체제 설계론
                  </span>
                </li>
              </ul>
            </section>

            {/* Category: 시스템 아키텍처 */}
            <section className="max-w-[650px]">
              <div className="font-label-sm text-label-sm uppercase mb-lg tracking-widest text-secondary">
                시스템 아키텍처
              </div>
              <ul className="space-y-lg">
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    분산 컴퓨팅 원리
                  </span>
                </li>
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    양자 알고리즘 기초
                  </span>
                </li>
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    고급 클라우드 인프라
                  </span>
                </li>
              </ul>
            </section>

            {/* Category: 데이터 사이언스 */}
            <section className="max-w-[650px]">
              <div className="font-label-sm text-label-sm uppercase mb-lg tracking-widest text-secondary">
                데이터 사이언스
              </div>
              <ul className="space-y-lg">
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    확률 및 통계적 추론
                  </span>
                </li>
                <li className="flex items-baseline border-b border-outline-variant/30 pb-xs hover:border-primary transition-colors cursor-pointer group">
                  <span className="font-headline-md text-headline-md">
                    머신러닝 시스템 디자인
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Pagination/Action Area */}
          <div className="mt-xxl flex justify-between items-center max-w-[650px]">
            <div className="flex items-center gap-xl">
              <button className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors tracking-widest uppercase">
                PREV
              </button>
              <div className="flex items-center gap-lg">
                <button className="font-label-sm text-label-sm text-primary underline underline-offset-4 decoration-1 tracking-widest">
                  1
                </button>
                <button className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors tracking-widest">
                  2
                </button>
                <button className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors tracking-widest">
                  3
                </button>
              </div>
              <button className="font-label-sm text-label-sm text-on-tertiary-container hover:text-primary transition-colors tracking-widest uppercase">
                NEXT
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="docked full-width bottom-0 border-t-[0.5px] border-outline-variant bg-surface flex justify-between items-center w-full px-margin-desktop py-xl">
          <div className="font-headline-md text-headline-md text-primary">
            EDUSPARK
          </div>
          <div className="flex gap-lg">
            <span className="font-metadata text-metadata uppercase tracking-widest text-on-surface-variant">
              © EDUSPARK. ALL RIGHTS RESERVED.
            </span>
            <div className="hidden md:flex gap-md">
              <a
                className="font-metadata text-metadata uppercase tracking-widest text-on-surface-variant hover:text-primary transition-none"
                href="#privacy"
              >
                PRIVACY
              </a>
              <a
                className="font-metadata text-metadata uppercase tracking-widest text-on-surface-variant hover:text-primary transition-none"
                href="#terms"
              >
                TERMS
              </a>
              <a
                className="font-metadata text-metadata uppercase tracking-widest text-on-surface-variant hover:text-primary transition-none"
                href="#archive"
              >
                ARCHIVE
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
