"use client";

import { NavigationIconType } from "@types";
import { AtomWrapper } from "@atoms";

export const LiveLog = ({
  className,
  variant = "icon",
}: NavigationIconType) => {
  return (
    <AtomWrapper variant={variant} className={className}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="10"
          cy="10"
          r="6"
          fill="#00B67A"
          fillOpacity="0.2"
          className="animate-pulse"
        />
        <circle
          cx="10"
          cy="10"
          r="2.5"
          fill="#00B67A"
          className="animate-pulse delay-50"
        />
      </svg>
    </AtomWrapper>
  );
};
