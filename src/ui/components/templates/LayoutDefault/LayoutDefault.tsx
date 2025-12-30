"use client";

import { ChildrenType } from "@types";
import { space_grotesk } from "@fonts";
import "@styles/globals.css";

export const LayoutDefault = ({ children }: ChildrenType) => {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${space_grotesk.className} antialiased bg-background h-100dvh w-full overflow-hidden max-sm:h-auto max-sm:overflow-visible`}
      >
        {children}
      </body>
    </html>
  );
};
