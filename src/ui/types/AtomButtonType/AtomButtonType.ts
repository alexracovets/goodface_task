"use client";

import { VariantProps } from "class-variance-authority";
import { variantsAtomButton } from "@atoms";

export interface AtomButtonType extends React.ComponentProps<"button"> {
  variant?: VariantProps<typeof variantsAtomButton>["variant"];
  asChild?: boolean;
}
