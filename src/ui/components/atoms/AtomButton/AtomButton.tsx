"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomButtonType } from "@types";
import { cn } from "@utils";

export const variantsAtomButton = cva(
  "block border-[1px] border-grey-300 cursor-pointer rounded-[4px]",
  {
    variants: {
      variant: {
        default: "",
        back: cn(
          "flex justify-start items-center gap-x-[4px] text-[13px] font-[700] text-grey-800 leading-[20px] px-[12px] py-[4px]"
        ),
        notification:
          "relative w-[36px] h-[36px] cursor-pointer flex items-center justify-center border-none",
        user_details: "border-none outline-none p-[4px] rounded-none",
        secondary:
          "text-grey-800 text-[13px] font-[700] leading-[20px] flex items-center justify-center gap-x-[4px] px-[12px] py-[4px] w-full mb-[8px]",
        navigation_item: cn(
          "flex justify-between items-center w-full py-[4px] bg-transparent border-none",
          "text-[14px] text-grey-800 leading-[20px] font-[500]",
          "[&[data-active='true']]:text-primary-500 [&[data-active='true']]:bg-primary-50  hover:text-primary-500 hover:bg-primary-50",
          "transition-all duration-300 ease-in"
        ),
        destructive:
          "text-[14px] font-[700] leading-[20px] text-primary-500 flex items-center justify-center gap-x-[8px] bg-base-white w-fit px-[16px] py-[4px]",
        select:
          "text-[14px] text-grey-800 font-[500] leading-[20px] tracking-[-0.2px] flex items-center justify-between gap-x-[8px] bg-base-white w-full pl-[12px] pr-[12px] py-[10px]",
        discount: cn(
          "text-[13px] font-[700] leading-[20px] px-[12px] py-[4px]"
        ),
        burger_button: "flex items-center justify-center border-none",
      },
    },
  }
);

export const AtomButton = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}: AtomButtonType) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(variantsAtomButton({ variant, className }))}
      {...props}
    />
  );
};
