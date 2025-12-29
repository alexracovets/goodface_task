"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { AtomFormLabelType } from "@types";
import { cn } from "@utils";

export const variantsAtomFormLabel = cva("", {
  variants: {
    variant: {
      default:
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    },
    defaultVariants: {
      variant: "default",
    },
  },
});

export const AtomFormLabel = ({
  className,
  variant = "default",
  ...props
}: AtomFormLabelType) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(variantsAtomFormLabel({ variant, className }))}
      {...props}
    />
  );
};
