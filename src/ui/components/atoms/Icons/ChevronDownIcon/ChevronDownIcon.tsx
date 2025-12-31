"use client";

import { AtomWrapper } from "../../AtomWrapper";
import { NavigationIconType } from "@types";

export const ChevronDownIcon = ({
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
        <path d="M6 9l6 6l6 -6" />
      </svg>
    </AtomWrapper>
  );
};
