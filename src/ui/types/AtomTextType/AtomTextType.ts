"use client";

import { VariantProps } from "class-variance-authority";

import { variantsAtomText } from "@atoms";

export interface AtomTextType extends React.ComponentProps<"p"> {
  variant?: VariantProps<typeof variantsAtomText>["variant"];
  asChild?: boolean;
}
