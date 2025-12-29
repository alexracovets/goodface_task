"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva } from "class-variance-authority";

import { cn } from "@utils";
import { AtomHRType } from "@types";

export const variantsAtomHR = cva("", {
  variants: {
    variant: {
      default:
        "bg-grey-200 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export const AtomHR = ({
  className,
  orientation = "horizontal",
  decorative = true,
  variant = "default",
  ...props
}: AtomHRType) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(variantsAtomHR({ variant, className }), className)}
      {...props}
    />
  );
};
