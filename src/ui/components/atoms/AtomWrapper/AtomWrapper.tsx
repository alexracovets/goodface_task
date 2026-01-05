"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomWrapperType } from "@types";
import { cn } from "@utils";

export const variantsAtomWrapper = cva("", {
  variants: {
    variant: {
      default: "w-full relative",
      goodface_wrapper: cn(
        "grid grid-cols-[auto_1fr] h-screen",
        "max-sm:flex max-sm:flex-col max-sm:h-auto"
      ),
      navigation_aplication: cn(
        "bg-base-white border border-grey-200 grid grid-rows-[auto_1fr_auto] w-[280px] h-screen",
        "xl:w-[28rem]",
        "max-sm:w-full max-sm:h-auto"
      ),
      product_wrapper: cn(
        "grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[1fr_auto] w-full gap-x-[48px] gap-y-[16px] min-h-0",
        "xl:gap-x-[4.8rem] xl:gap-y-[1.6rem]",
        "max-short-desktop:gap-x-[16px]",
        "md:gap-y-[24px]",
        "max-md:flex max-md:flex-col"
      ),
      product_main: cn(
        "flex flex-col w-full gap-y-[24px] py-[24px] px-[48px]",
        "xl:py-[2.4rem] xl:px-[4.8rem] xl:gap-y-[2.4rem]",
        "max-short-desktop:px-[16px]",
        "max-sm:px-[16px] max-md:gap-y-[16px]",
        "max-sm:mt-[72px]"
      ),
      product_sidebar: cn(
        "flex flex-col gap-y-[16px] w-[360px] order-1",
        "xl:w-[36rem] xl:gap-y-[1.6rem]",
        "max-md:order-1 max-md:w-full"
      ),
      logo_nav_part: cn(
        "relative flex items-center justify-between bg-base-white px-[16px] py-[8px] z-[60]",
        "xl:px-[1.6rem] xl:py-[0.8rem]",
        "max-sm:p-[16px]"
      ),
      notification_count: cn(
        "absolute top-[4px] right-[-4px] flex items-center justify-center bg-primary-400 w-[20px] h-[16px] rounded-[20px] outline outline-[2px] outline-base-white",
        "xl:top-[0.4rem] xl:right-[-0.4rem] xl:w-[2rem] xl:h-[1.6rem] xl:rounded-[2rem] xl:outline-[0.2rem]"
      ),
      navigation_content: cn(
        "flex flex-col w-full gap-y-[16px] p-[16px]",
        "xl:gap-y-[1.6rem] xl:p-[1.6rem]"
      ),
      icon: cn("w-[20px] h-[20px]", "xl:w-[2rem] xl:h-[2rem]"),
      icon_small: cn("w-[16px] h-[16px]", "xl:w-[1.6rem] xl:h-[1.6rem]"),
      list: cn("flex flex-col w-full gap-y-[8px]", "xl:gap-y-[0.8rem]"),
      navigation_additional_content: cn(
        "flex flex-col w-full gap-y-[4px] px-[8px]",
        "xl:gap-y-[0.4rem] xl:px-[0.8rem]"
      ),
      product_main_content: cn(
        "flex flex-col gap-y-[24px] w-full",
        "xl:gap-y-[2.4rem]"
      ),
      navigation_item_content: cn(
        "flex items-center justify-between gap-x-[16px] pl-[12px] pr-[8px]",
        "xl:gap-x-[1.6rem] xl:pl-[1.2rem] xl:pr-[0.8rem]"
      ),
      page_hero_block: cn("flex w-full gap-x-[16px]", "xl:gap-x-[1.6rem]"),
      hero_content: cn("flex flex-col gap-y-[4px]", "xl:gap-y-[0.4rem]"),
      slider_separator_item:
        "flex justify-center items-center first:justify-start last:justify-end",
      select_dropdown_item: cn(
        "text-[14px] text-grey-800 font-[500] leading-[20px] tracking-[-0.2px] flex items-center justify-between gap-x-[8px] bg-base-white w-full px-[12px] py-[8px] cursor-pointer outline-none!",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem] xl:gap-x-[0.8rem] xl:px-[1.2rem] xl:py-[0.8rem]",
        "hover:bg-grey-100 hover:scale-[1.005] aria-selected:bg-grey-100 aria-selected:scale-[1.005] focus:bg-grey-100 focus:scale-[1.005]",
        "transition-all duration-300 ease-in-out"
      ),
      dropdown_item_additional: cn(
        "text-[12px] text-grey-500 font-[500] leading-[16px] tracking-[0.2px] whitespace-nowrap",
        "xl:text-[1.2rem] xl:leading-[1.6rem] xl:tracking-[0.02rem]"
      ),
      additional_content: cn(
        "flex flex-col gap-y-[16px] w-full",
        "xl:gap-y-[1.6rem]"
      ),
      additional_content_lists: cn(
        "grid grid-cols-2 gap-x-[16px] w-full",
        "xl:gap-x-[1.6rem]",
        "max-[1030px]:grid-cols-[auto_auto]",
        "max-sd:flex max-sd:flex-col max-sd:gap-y-[8px]"
      ),
      center_row_wrapper: cn(
        "flex items-center gap-x-[8px] w-full",
        "xl:gap-x-[0.8rem]"
      ),
      aside_form_item: cn(
        "flex items-center justify-between gap-x-[8px] w-full",
        "xl:gap-x-[0.8rem]"
      ),
      burger_wrapper: cn(
        "flex items-center justify-center gap-x-[24px]",
        "xl:gap-x-[2.4rem]"
      ),
      credit_pay: "flex justify-center items-center",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const AtomWrapper = ({
  children,
  variant = "default",
  className,
  asChild = false,
  ...props
}: AtomWrapperType) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={cn(variantsAtomWrapper({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};
