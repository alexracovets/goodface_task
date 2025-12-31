"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomWrapperType } from "@types";
import { cn } from "@utils";

export const variantsAtomWrapper = cva("", {
  variants: {
    variant: {
      default: "w-full",
      goodface_wrapper: cn(
        "grid grid-cols-[auto_1fr] h-screen",
        "max-sm:flex max-sm:flex-col max-sm:h-auto"
      ),
      navigation_aplication: cn(
        "w-[280px] xl:w-[28rem] bg-base-white border border-grey-200 grid grid-rows-[auto_1fr_auto] h-screen",
        "max-sm:w-full max-sm:h-auto"
      ),
      product_wrapper: cn(
        "grid grid-cols-[1fr_auto] grid-rows-[1fr_auto] w-full gap-x-[48px] xl:gap-x-[4.8rem] gap-y-[16px] xl:gap-y-[1.6rem] min-h-0",
        "max-short-desktop:gap-x-[16px]",
        "md:gap-y-[24px]",
        "max-md:flex max-md:flex-col",
      ),
      product_main: cn(
        "w-full flex flex-col py-[24px] xl:py-[2.4rem] px-[48px] xl:px-[4.8rem] gap-y-[24px] xl:gap-y-[2.4rem]",
        "max-short-desktop:px-[16px]",
        "max-sm:px-[16px] max-md:gap-y-[16px]",
        "max-sm:mt-[72px]"
      ),
      product_sidebar: cn(
        "w-[360px] xl:w-[36rem] flex flex-col gap-y-[16px] xl:gap-y-[1.6rem] order-1",
        "max-md:order-1 max-md:w-full"
      ),
      logo_nav_part: cn(
        "flex items-center justify-between px-[16px] xl:px-[1.6rem] py-[8px] xl:py-[0.8rem] relative z-[60] bg-base-white",
        "max-sm:p-[16px]"
      ),
      notification_count: cn(
        "absolute top-[4px] xl:top-[0.4rem] right-[-4px] xl:right-[-0.4rem]",
        "w-[20px] xl:w-[2rem] h-[16px] xl:h-[1.6rem] flex items-center justify-center bg-primary-400 rounded-[20px] xl:rounded-[2rem] outline outline-[2px] xl:outline-[0.2rem] outline-base-white"
      ),
      navigation_content: "flex flex-col w-full p-[16px] xl:p-[1.6rem] gap-y-[16px] xl:gap-y-[1.6rem]",
      navigation_section: "flex flex-col w-full gap-y-[8px] xl:gap-y-[0.8rem]",
      navigation_section_content: "flex flex-col w-full gap-y-[4px] xl:gap-y-[0.4rem]",
      navigation_additional: "flex flex-col w-full gap-y-[4px] xl:gap-y-[0.4rem]",
      navigation_additional_content:
        "flex flex-col w-full gap-y-[4px] xl:gap-y-[0.4rem] px-[8px] xl:px-[0.8rem]",
      product_main_content: "flex flex-col gap-y-[24px] xl:gap-y-[2.4rem] w-full",
      navigation_item_content:
        "flex items-center justify-between gap-x-[16px] xl:gap-x-[1.6rem] pl-[12px] xl:pl-[1.2rem] pr-[8px] xl:pr-[0.8rem]",
      page_hero_block: "flex w-full gap-x-[16px] xl:gap-x-[1.6rem]",
      hero_content: "flex flex-col gap-y-[4px] xl:gap-y-[0.4rem]",
      form_part_info: "flex flex-col w-full",
      slider_separator: "flex justify-between items-center",
      slider_separator_item:
        "flex justify-center items-center first:justify-start last:justify-end",
      select_dropdown_item: cn(
        "text-[14px] xl:text-[1.4rem] text-grey-800 font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] flex items-center justify-between gap-x-[8px] xl:gap-x-[0.8rem] bg-base-white w-full px-[12px] xl:px-[1.2rem] py-[8px] xl:py-[0.8rem] cursor-pointer outline-none!",
        "hover:bg-grey-100 hover:scale-[1.005] aria-selected:bg-grey-100 aria-selected:scale-[1.005] focus:bg-grey-100 focus:scale-[1.005]",
        "transition-all duration-300 ease-in-out"
      ),
      dropdown_item_inner: "flex items-center gap-x-[8px] xl:gap-x-[0.8rem]",
      dropdown_item_additional:
        "text-[12px] xl:text-[1.2rem] text-grey-500 font-[500] leading-[16px] xl:leading-[1.6rem] tracking-[0.2px] xl:tracking-[0.02rem]",
      additional_content: "flex flex-col gap-y-[16px] xl:gap-y-[1.6rem] w-full",
      additional_content_lists: cn(
        "grid grid-cols-2 gap-x-[16px] xl:gap-x-[1.6rem] w-full",
        "max-[1030px]:grid-cols-[auto_auto]",
        "max-sd:flex max-sd:flex-col max-sd:gap-y-[8px]"
      ),
      additional_content_list: "flex flex-col gap-y-[8px] xl:gap-y-[0.8rem] w-fit",
      additional_content_list_item: "flex items-center gap-x-[8px] xl:gap-x-[0.8rem] w-full",
      aside_list_block: "flex flex-col gap-y-[8px] xl:gap-y-[0.8rem] w-full",
      aside_form_item: "flex items-center justify-between gap-x-[8px] xl:gap-x-[0.8rem] w-full",
      check_discount_form: "flex gap-x-[8px] xl:gap-x-[0.8rem] w-full items-start",
      burger_wrapper: "flex items-center justify-center gap-x-[24px] xl:gap-x-[2.4rem]",
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
