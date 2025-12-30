"use client";

import { AtomLink, AtomButton, ChevronLeftIcon } from "@atoms";

export const HeaderProduct = () => {
  return (
    <header>
      <nav>
        <AtomLink href="/" variant="default">
          <AtomButton variant="back">
            <ChevronLeftIcon className="w-[16px] xl:w-[1.6rem] h-[16px] xl:h-[1.6rem]" />
            Back to all
          </AtomButton>
        </AtomLink>
      </nav>
    </header>
  );
};
