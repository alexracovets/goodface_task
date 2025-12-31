"use client";

import { VariantProps } from "class-variance-authority";

import { variantsAtomWrapper } from "@atoms";

export interface NavigationIconType {
  className?: string;
  variant?: VariantProps<typeof variantsAtomWrapper>["variant"];
}
