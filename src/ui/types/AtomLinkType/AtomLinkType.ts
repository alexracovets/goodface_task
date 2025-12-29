"use client";

import { VariantProps } from "class-variance-authority";
import { variantsAtomLink } from "@atoms";

export interface AtomLinkType extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: VariantProps<typeof variantsAtomLink>["variant"];
  target?: string;
  onClick?: () => void;
  rel?: string;
}
