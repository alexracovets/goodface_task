"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomButtonType } from "@types";
import { cn } from "@utils";

export const variantsAtomButton = cva(
  "relative block cursor-pointer border-[1px] border-grey-300 rounded-[4px] xl:border-[0.1rem] xl:rounded-[0.4rem]",
  {
    variants: {
      variant: {
        default: "",
        primary: cn(
          "text-[16px] text-base-white font-[700] leading-[24px] flex justify-center items-center px-[12px] py-[8px] bg-primary-500 border-none",
          "xl:text-[1.6rem] xl:leading-[2.4rem] xl:py-[0.8rem] xl:px-[1.2rem]"
        ),
        secondary: cn(
          "text-[13px] text-grey-800 font-[700] leading-[20px] flex justify-center items-center gap-x-[4px] px-[12px] py-[4px]",
          "xl:text-[1.3rem] xl:leading-[2rem] xl:gap-x-[0.4rem] xl:px-[1.2rem] xl:py-[0.4rem]"
        ),
        icon: cn(
          "flex items-center justify-center w-[36px] h-[36px] border-none",
          "xl:w-[3.6rem] xl:h-[3.6rem]"
        ),
        destructive: cn(
          "text-[14px] text-primary-500 font-[700] leading-[20px] flex items-center justify-center gap-x-[8px] bg-base-white w-fit px-[16px] py-[4px]",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:gap-x-[0.8rem] xl:px-[1.6rem] xl:py-[0.4rem]"
        ),
        user_details: cn(
          "border-none outline-none p-[4px] rounded-none",
          "xl:p-[0.4rem]"
        ),
        navigation_item: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px] flex justify-between items-center w-full py-[4px] bg-transparent border-none",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:py-[0.4rem]",
          "[&[data-active='true']]:text-primary-500 [&[data-active='true']]:bg-primary-50 hover:text-primary-500 hover:bg-primary-50",
          "transition-all duration-300 ease-in"
        ),
        select: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px] tracking-[-0.2px] flex items-center justify-between gap-x-[8px] bg-base-white w-full pl-[12px] pr-[12px] py-[10px]",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem] xl:gap-x-[0.8rem] xl:pl-[1.2rem] xl:pr-[1.2rem] xl:py-[1rem]"
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
