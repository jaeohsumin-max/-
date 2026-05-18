import React from "react";

export default function CourseDetail() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');

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

      <div className="bg-surface text-on-surface antialiased min-h-screen font-body-base">
        {/* Top Navigation Bar */}
        <nav className="flex justify-between items-center w-full px-margin-desktop py-lg bg-surface border-b-[0.5px] border-outline-variant fixed top-0 z-50">
          <span className="font-headline-md text-headline-md text-primary tracking-tighter">
            EduSpark
          </span>
          <div className="hidden md:flex gap-xl">
            <a
              className="text-primary font-bold underline underline-offset-[4px] decoration-1 font-body-base text-body-base"
              href="#courses"
            >
              COURSES
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary transition-none"
              href="#library"
            >
              LIBRARY
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary transition-none"
              href="#research"
            >
              RESEARCH
            </a>
            <a
              className="text-secondary font-body-base text-body-base hover:text-primary transition-none"
              href="#logout"
            >
              LOGOUT
            </a>
          </div>
        </nav>

        <main className="pt-[100px] pb-xxl px-margin-desktop">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xxl">
            {/* Article Content (Single Column Blog Layout) */}
            <article className="lg:col-span-8">
              {/* Header */}
              <header className="mb-xl">
                <h1 className="font-headline-lg text-headline-lg text-primary mb-md leading-tight">
                  모더니즘 건축: 구조적 논리와 형태의 본질
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  이 강의는 20세기 모더니즘 건축의 본질적인 원리를 탐구합니다.
                  형태와 기능 사이의 관계, 그리고 현대 건축을 정의하는 논리적
                  구조를 분석합니다.
                </p>
              </header>

              {/* Body */}
              <div className="space-y-xl border-t-[0.5px] border-outline-variant pt-xl">
                <section>
                  <h2 className="font-headline-md text-headline-md text-primary mb-md">
                    01. 형태는 기능을 따르는가?
                  </h2>
                  <p className="font-body-base text-body-base text-on-surface mb-md leading-relaxed">
                    모더니즘 건축의 가장 핵심적인 명제는 '형태는 기능을
                    따른다'는 것입니다. 우리는 이 문장이 담고 있는 철학적 깊이를
                    역사적 전례를 통해 살펴봅니다. 과거의 장식적인 건축물에서
                    벗어나, 왜 20세기 건축가들이 구조적 순수함에 집착했는지 그
                    배경을 이해하는 것이 첫 번째 단계입니다.
                  </p>
                  <blockquote className="border-l-2 border-primary pl-md py-sm italic font-body-base text-on-surface-variant mb-md">
                    "건축은 시대의 의지를 공간으로 번역하는 것이다."
                  </blockquote>
                </section>
                <section>
                  <h2 className="font-headline-md text-headline-md text-primary mb-md">
                    02. 재료의 진정성과 구조적 정직성
                  </h2>
                  <p className="font-body-base text-body-base text-on-surface mb-md leading-relaxed">
                    철골과 콘크리트, 그리고 유리. 이 세 가지 재료는 현대 도시의
                    풍경을 바꾸어 놓았습니다. 재료 그 자체가 가진 특성을 숨기지
                    않고 드러내는 '진정성'에 대해 논의합니다. 구조가 곧 디자인이
                    되는 논리적 흐름을 추적합니다.
                  </p>
                  <div className="bg-surface-container p-lg mb-md">
                    <span className="font-label-sm text-label-sm text-primary block mb-sm uppercase">
                      Key Takeaway
                    </span>
                    <p className="font-body-base text-body-base">
                      구조적 정직성은 단순히 기술적인 문제가 아니라, 건축가의
                      윤리적 태도와 직결됩니다.
                    </p>
                  </div>
                </section>
                <section>
                  <h2 className="font-headline-md text-headline-md text-primary mb-md">
                    03. 평면의 해방과 자유로운 입면
                  </h2>
                  <p className="font-body-base text-body-base text-on-surface mb-md leading-relaxed">
                    내력벽의 구속에서 벗어난 자유로운 평면은 공간의 흐름을
                    어떻게 바꾸었을까요? 르 코르뷔지에의 '건축의 5원칙'을
                    중심으로, 현대 건축이 공간을 조직하는 새로운 논리를
                    학습합니다. 평면의 해방이 가져온 삶의 변화를 고찰합니다.
                  </p>
                </section>
              </div>

              <div className="flex items-center justify-between mt-xl pt-xl border-t-[0.5px] border-outline-variant font-metadata text-metadata text-secondary tracking-widest">
                <a
                  className="flex items-center gap-xs hover:text-primary transition-none"
                  href="#prev"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_left
                  </span>
                  <span>이전 (PREV)</span>
                </a>
                <a
                  className="flex items-center gap-xs hover:text-primary transition-none"
                  href="#next"
                >
                  <span>다음 (NEXT)</span>
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                </a>
              </div>
            </article>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-xl bg-surface border-t-[0.5px] border-outline-variant gap-lg">
          <div className="flex flex-col gap-xs">
            <span className="font-headline-md text-headline-md text-primary">
              EduSpark
            </span>
            <span className="font-metadata text-metadata text-on-surface-variant uppercase tracking-widest">
              © EDUSPARK. ALL RIGHTS RESERVED.
            </span>
          </div>
          <div className="flex gap-lg">
            <a
              className="font-metadata text-metadata text-on-surface-variant hover:text-primary transition-none"
              href="#privacy"
            >
              PRIVACY
            </a>
            <a
              className="font-metadata text-metadata text-on-surface-variant hover:text-primary transition-none"
              href="#terms"
            >
              TERMS
            </a>
            <a
              className="font-metadata text-metadata text-on-surface-variant hover:text-primary transition-none"
              href="#archive"
            >
              ARCHIVE
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
