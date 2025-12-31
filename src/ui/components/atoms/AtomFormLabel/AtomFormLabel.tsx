"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { AtomFormLabelType } from "@types";
import { cn } from "@utils";

export const variantsAtomFormLabel = cva("cursor-pointer", {
  variants: {
    variant: {
      default:
        "text-sm font-medium leading-none flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      radio_label: cn(
        "text-[16px] text-grey-800 font-[500] leading-[24px] flex justify-start items-center gap-[8px] border border-grey-300 p-[12px] rounded-[4px] outline outline-[2px] outline-transparent",
        "xl:text-[1.6rem] xl:leading-[2.4rem] xl:gap-[0.8rem] xl:p-[1.2rem] xl:rounded-[0.4rem] xl:outline-[0.2rem]",
        "data-[active=true]:outline-primary-500 hover:outline-primary-500",
        "transition-all duration-300 ease-in-out"
      ),
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
