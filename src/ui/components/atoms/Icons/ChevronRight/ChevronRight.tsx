"use client";

import { NavigationIconType } from "@types";

export const ChevronRight = ({ className }: NavigationIconType) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </div>
  );
};
