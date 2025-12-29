"use client";

import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { variantsAtomInput } from "@atoms";

export interface AtomInputType extends ComponentProps<"input"> {
  error?: boolean;
  variant?: VariantProps<typeof variantsAtomInput>["variant"];
}
