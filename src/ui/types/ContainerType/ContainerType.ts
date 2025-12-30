"use client";

import { VariantProps } from "class-variance-authority";

import { variantsContainer } from "@atoms";

export interface ContainerType {
  variant?: VariantProps<typeof variantsContainer>["variant"];
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}
