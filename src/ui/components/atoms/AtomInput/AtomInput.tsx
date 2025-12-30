"use client";

import { cva } from "class-variance-authority";

import { AtomInputType } from "@types";
import { cn } from "@utils";

export const variantsAtomInput = cva(
  "data-[error=true]:text-destructive block max-w-full w-full leading-none focus-visible:outline-none! border border-grey-300 rounded-[4px] xl:rounded-[0.4rem]",
  {
    variants: {
      variant: {
        default: cn(
          "text-[16px] xl:text-[1.6rem] font-[500] leading-[24px] xl:leading-[2.4rem] tracking-[-0.2px] xl:tracking-[-0.02rem] px-[12px] xl:px-[1.2rem] py-[8px] xl:py-[0.8rem]"
        ),
        discount_code: cn(
          "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] pl-[12px] xl:pl-[1.2rem] pr-[8px] xl:pr-[0.8rem] py-[4px] xl:py-[0.4rem] border border-grey-300 rounded-[4px] xl:rounded-[0.4rem]"
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
