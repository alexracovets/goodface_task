"use client";

import { AtomLink, AtomButton, ChevronLeft } from "@atoms";

export const HeaderProduct = () => {
  return (
    <header>
      <nav>
        <AtomLink href="/" variant="default">
          <AtomButton variant="back">
            <ChevronLeft className="w-[16px] h-[16px]" />
            Back to all
          </AtomButton>
        </AtomLink>
      </nav>
    </header>
  );
};
