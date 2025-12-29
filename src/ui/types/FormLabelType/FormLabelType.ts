"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { VariantProps } from "class-variance-authority";
import { variantsFormLabel } from "@atoms";

export interface FormLabelType extends React.ComponentProps<
  typeof LabelPrimitive.Root
> {
  variant?: VariantProps<typeof variantsFormLabel>["variant"];
}
