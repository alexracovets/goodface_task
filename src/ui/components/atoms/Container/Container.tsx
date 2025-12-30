"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { ContainerType } from "@types";
import { cn } from "@utils";

export const variantsContainer = cva("", {
  variants: {
    variant: {
      default: cn(
        "container mx-auto p-[24px] bg-base-white border-[1px] border-grey-200 rounded-[8px]",
        "max-md:p-[16px]"
      ),
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
  asChild,
  ...props
}: ContainerType) => {
  const Component = asChild ? Slot : "section";
  return (
    <Component
      className={cn(variantsContainer({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};
