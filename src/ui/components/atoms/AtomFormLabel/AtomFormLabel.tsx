"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { AtomFormLabelType } from "@types";
import { cn } from "@utils";

export const variantsAtomFormLabel = cva("cursor-pointer", {
  variants: {
    variant: {
      default:
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      radio_label: cn(
        "text-[16px] xl:text-[1.6rem] text-grey-800 font-[500] leading-[24px] xl:leading-[2.4rem] flex justify-start items-center gap-[8px] xl:gap-[0.8rem] p-[12px] xl:p-[1.2rem] border border-grey-300 rounded-[4px] xl:rounded-[0.4rem] outline outline-[2px] xl:outline-[0.2rem] outline-transparent",
        "data-[active=true]:outline-primary-500 hover:outline-primary-500",
        "ease-in-out duration-300"
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
