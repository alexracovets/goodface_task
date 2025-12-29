"use client";

import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

import { formItemVariants } from "@atoms";

export interface FormItemType extends ComponentProps<"div"> {
  variant?: VariantProps<typeof formItemVariants>["variant"];
}
