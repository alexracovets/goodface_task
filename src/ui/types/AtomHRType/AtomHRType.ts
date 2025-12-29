"use client";

import { VariantProps } from "class-variance-authority";
import { variantsAtomHR } from "@atoms";

export interface AtomHRType extends React.ComponentProps<"hr"> {
  variant?: VariantProps<typeof variantsAtomHR>["variant"];
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}
