"use client";

import { NavigationIconType } from "@types";
import { AtomWrapper } from "@atoms";

export const CodeChangelogIcon = ({
  className,
  variant = "icon",
}: NavigationIconType) => {
  return (
    <AtomWrapper variant={variant} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.5 13.5l-1.5 -1.5l1.5 -1.5" />
        <path d="M15.5 10.5l1.5 1.5l-1.5 1.5" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M13 9.5l-2 5.5" />
      </svg>
    </AtomWrapper>
  );
};
