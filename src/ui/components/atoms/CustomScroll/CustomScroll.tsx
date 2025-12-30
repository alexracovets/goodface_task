"use client";

import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import { useEffect, useRef, useState } from "react";

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
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      if (scrollRef.current) {
        const instance = scrollRef.current.osInstance();
        if (instance) {
          instance.destroy();
        }
      }
      setKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <OverlayScrollbarsComponent
      key={key}
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
