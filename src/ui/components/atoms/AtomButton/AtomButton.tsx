"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomButtonType } from "@types";
import { cn } from "@utils";

export const variantsAtomButton = cva(
  "block border-[1px] xl:border-[0.1rem] border-grey-300 cursor-pointer rounded-[4px] xl:rounded-[0.4rem]",
  {
    variants: {
      variant: {
        default: "",
        primary:
          "text-[16px] xl:text-[1.6rem] font-[700] leading-[24px] xl:leading-[2.4rem] text-base-white py-[8px] xl:py-[0.8rem] px-[12px] xl:px-[1.2rem] bg-primary-500 rounded-[4px] xl:rounded-[0.4rem] border-none",
        back: cn(
          "flex justify-start items-center gap-x-[4px] xl:gap-x-[0.4rem] text-[13px] xl:text-[1.3rem] font-[700] text-grey-800 leading-[20px] xl:leading-[2rem] px-[12px] xl:px-[1.2rem] py-[4px] xl:py-[0.4rem]"
        ),
        notification:
          "relative w-[36px] xl:w-[3.6rem] h-[36px] xl:h-[3.6rem] cursor-pointer flex items-center justify-center border-none",
        user_details: "border-none outline-none p-[4px] xl:p-[0.4rem] rounded-none",
        secondary:
          "text-grey-800 text-[13px] xl:text-[1.3rem] font-[700] leading-[20px] xl:leading-[2rem] flex items-center justify-center gap-x-[4px] xl:gap-x-[0.4rem] px-[12px] xl:px-[1.2rem] py-[4px] xl:py-[0.4rem] w-full mb-[8px] xl:mb-[0.8rem]",
        navigation_item: cn(
          "flex justify-between items-center w-full py-[4px] xl:py-[0.4rem] bg-transparent border-none",
          "text-[14px] xl:text-[1.4rem] text-grey-800 leading-[20px] xl:leading-[2rem] font-[500]",
          "[&[data-active='true']]:text-primary-500 [&[data-active='true']]:bg-primary-50  hover:text-primary-500 hover:bg-primary-50",
          "transition-all duration-300 ease-in"
        ),
        destructive:
          "text-[14px] xl:text-[1.4rem] font-[700] leading-[20px] xl:leading-[2rem] text-primary-500 flex items-center justify-center gap-x-[8px] xl:gap-x-[0.8rem] bg-base-white w-fit px-[16px] xl:px-[1.6rem] py-[4px] xl:py-[0.4rem]",
        select:
          "text-[14px] xl:text-[1.4rem] text-grey-800 font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] flex items-center justify-between gap-x-[8px] xl:gap-x-[0.8rem] bg-base-white w-full pl-[12px] xl:pl-[1.2rem] pr-[12px] xl:pr-[1.2rem] py-[10px] xl:py-[1rem]",
        discount: cn(
          "text-[13px] xl:text-[1.3rem] font-[700] leading-[20px] xl:leading-[2rem] px-[12px] xl:px-[1.2rem] py-[4px] xl:py-[0.4rem]"
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
