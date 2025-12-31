"use client";

import { AtomWrapper } from "@atoms";
import { NavigationIconType } from "@types";

export const ChevronLeftIcon = ({
  className,
  variant = "icon_small",
}: NavigationIconType) => {
  return (
    <AtomWrapper variant={variant} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </AtomWrapper>
  );
};
