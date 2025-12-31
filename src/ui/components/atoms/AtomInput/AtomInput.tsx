"use client";

import { cva } from "class-variance-authority";

import { AtomInputType } from "@types";
import { cn } from "@utils";

export const variantsAtomInput = cva(
  "block max-w-full w-full leading-none border border-grey-300 rounded-[4px] focus-visible:outline-none! data-[error=true]:text-destructive xl:rounded-[0.4rem]",
  {
    variants: {
      variant: {
        default: cn(
          "text-[16px] font-[500] leading-[24px] tracking-[-0.2px] px-[12px] py-[8px]",
          "xl:text-[1.6rem] xl:leading-[2.4rem] xl:tracking-[-0.02rem] xl:px-[1.2rem] xl:py-[0.8rem]"
        ),
        discount_code: cn(
          "text-[14px] font-[500] leading-[20px] tracking-[-0.2px] border border-grey-300 pl-[12px] pr-[8px] py-[4px] rounded-[4px]",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem] xl:pl-[1.2rem] xl:pr-[0.8rem] xl:py-[0.4rem] xl:rounded-[0.4rem]"
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
