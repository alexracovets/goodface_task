"use client";

import { NavigationIconType } from "@types";
import { AtomWrapper } from "@atoms";

export const СircleCheck = ({
  className,
  variant = "icon",
}: NavigationIconType) => {
  return (
    <AtomWrapper variant={variant} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#1fb356"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M9 12l2 2l4 -4" />
      </svg>
    </AtomWrapper>
  );
};
