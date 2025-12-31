"use client";

import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import { useRef } from "react";

interface CustomScrollProps {
  children: React.ReactNode;
  onScrollStateChange?: (state: {
    canScrollLeft: boolean;
    canScrollRight: boolean;
  }) => void;
  className?: string;
}

export const CustomScroll = ({ children, className }: CustomScrollProps) => {
  const scrollRef = useRef<OverlayScrollbarsComponentRef<"div">>(null);

  return (
    <OverlayScrollbarsComponent
      ref={scrollRef}
      options={{
        scrollbars: {
          theme: "os-theme-custom",
          clickScroll: false,
        },
      }}
      className={className}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};
