"use client";

import { VariantProps } from "class-variance-authority";

import { variantsAtomImage } from "@atoms";

export interface AtomImageType {
  src: string;
  alt: string;
  variant: VariantProps<typeof variantsAtomImage>["variant"];
  priority?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  unoptimized?: boolean;
}
