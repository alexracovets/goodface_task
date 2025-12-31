"use client";

import { AtomLink, AtomButton, ChevronLeftIcon } from "@atoms";

export const HeaderProduct = () => {
  return (
    <header>
      <nav>
        <AtomLink href="/" variant="default">
          <AtomButton variant="secondary" aria-label="Back to all">
            <ChevronLeftIcon variant="icon_small" />
            Back to all
          </AtomButton>
        </AtomLink>
      </nav>
    </header>
  );
};
