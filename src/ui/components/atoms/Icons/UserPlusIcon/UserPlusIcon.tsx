"use client";

import { NavigationIconType } from "@types";
import { AtomWrapper } from "@atoms";

export const UserPlusIcon = ({
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
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>
    </AtomWrapper>
  );
};
