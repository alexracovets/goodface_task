"use client";

import { VariantProps } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";

import { variantsAtomFormLabel } from "@atoms";

export interface AtomFormLabelType extends React.ComponentProps<
  typeof LabelPrimitive.Root
> {
  variant?: VariantProps<typeof variantsAtomFormLabel>["variant"];
}
