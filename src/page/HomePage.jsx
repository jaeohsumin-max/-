import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen flex flex-col items-center justify-center px-margin-desktop font-body-base">
      <div className="max-w-[800px] w-full space-y-xl text-center">
        {/* Header Section */}
        <header className="space-y-md mb-xxl">
          <h1 className="font-display-xl text-display-xl text-primary tracking-tighter leading-none">
            EduSpark
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
            원하시는 메뉴를 선택해 주세요.
          </p>
        </header>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-md justify-center">
          <Link
            to="/list"
            className="px-xl py-md bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-tint transition-colors text-center"
          >
            코스 리스트 페이지로 이동
          </Link>

          <Link
            to="/detail"
            className="px-xl py-md border-[0.5px] border-outline-variant text-primary font-label-sm text-label-sm uppercase tracking-widest hover:border-primary transition-colors text-center"
          >
            코스 세부 페이지로 이동
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
