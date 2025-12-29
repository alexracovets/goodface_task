"use client";

import { cva } from "class-variance-authority";

import { AtomInputType } from "@types";
import { cn } from "@utils";

export const variantsAtomInput = cva(
  "data-[error=true]:text-destructive block max-w-full w-full leading-none focus-visible:outline-none! border border-grey-300 rounded-[4px]",
  {
    variants: {
      variant: {
        default: cn(
          "text-[16px] font-[500] leading-[24px] tracking-[-0.2px] px-[12px] py-[8px]"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const AtomInput = ({
  className,
  type,
  variant = "default",
  error,
  ...props
}: AtomInputType) => {
  return (
    <input
      type={type}
      className={cn(variantsAtomInput({ variant }), className)}
      data-error={error ? "true" : undefined}
      {...props}
    />
  );
};
