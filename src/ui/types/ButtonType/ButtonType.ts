"use client";

import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@atoms";

export interface ButtonType extends React.ComponentProps<"button"> {
    variant?: VariantProps<typeof buttonVariants>["variant"];
    asChild?: boolean;
}