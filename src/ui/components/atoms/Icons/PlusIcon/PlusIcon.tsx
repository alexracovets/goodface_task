"use client";

import { NavigationIconType } from "@types";
import { AtomWrapper } from "@atoms";

export const PlusIcon = ({
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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
    </AtomWrapper>
  );
};
