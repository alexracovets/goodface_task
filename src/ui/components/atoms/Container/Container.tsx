"use client";

import { cva } from "class-variance-authority";

import { ContainerType } from "@types";
import { cn } from "@utils";

export const variantsContainer = cva("", {
  variants: {
    variant: {
      default:
        "container mx-auto p-[24px] bg-base-white border-[1px] border-grey-200 rounded-[8px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const Container = ({
  children,
  variant = "default",
  className,
  ...props
}: ContainerType) => {
  return (
    <div className={cn(variantsContainer({ variant }), className)} {...props}>
      {children}
    </div>
  );
};
