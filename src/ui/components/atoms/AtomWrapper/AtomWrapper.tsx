"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomWrapperType } from "@types";
import { cn } from "@utils";

export const variantsAtomWrapper = cva("", {
  variants: {
    variant: {
      default: "w-full",
      goodface_wrapper: "grid grid-cols-[auto_1fr] h-screen",
      navigation_aplication:
        "w-[280px] bg-base-white border border-grey-200 grid grid-rows-[auto_1fr_auto] h-screen",
      product_wrapper: "grid grid-cols-[1fr_auto] w-full gap-x-[48px]",
      product_main: "w-full flex flex-col py-[24px] px-[48px] gap-y-[24px]",
      product_sidebar: "w-[360px]",
      logo_nav_part: "flex items-center justify-between px-[16px] py-[8px]",
      notification_count: cn(
        "absolute top-[4px] right-[-4px]",
        "w-[20px] h-[16px] flex items-center justify-center bg-primary-400 rounded-[20px] outline outline-[2px] outline-base-white"
      ),
      navigation_content:
        "flex flex-col w-full p-[16px] gap-y-[16px] overflow-y-auto min-h-0",
      navigation_section: "flex flex-col w-full gap-y-[8px]",
      navigation_section_content: "flex flex-col w-full gap-y-[4px]",
      navigation_additional: "flex flex-col w-full gap-y-[4px]",
      navigation_additional_content:
        "flex flex-col w-full gap-y-[4px] px-[8px]",
      product_main_content: "flex flex-col gap-y-[24px] w-full",
      navigation_item_content:
        "flex items-center justify-between gap-x-[16px] pl-[12px] pr-[8px]",
      page_hero_block: "flex w-full gap-x-[16px]",
      hero_content: "flex flex-col gap-y-[4px]",
      form_part_info: "flex flex-col w-full",
      slider_separator: "flex justify-between items-center",
      slider_separator_item:
        "flex justify-center items-center first:justify-start last:justify-end",
      select_dropdown_item: cn(
        "text-[14px] text-grey-800 font-[500] leading-[20px] tracking-[-0.2px] flex items-center justify-between gap-x-[8px] bg-base-white w-full px-[12px] py-[8px] cursor-pointer",
        "hover:bg-grey-100 hover:scale-[1.005]",
        "transition-all duration-300 ease-in-out"
      ),
      dropdown_item_inner: "flex items-center gap-x-[8px]",
      dropdown_item_additional:
        "text-[12px] text-grey-500 font-[500] leading-[16px] tracking-[0.2px]",
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
