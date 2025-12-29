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
      navigation_additional_content: "flex flex-col w-full gap-y-[4px]",
      product_main_content: "flex flex-col gap-y-[24px] w-full",
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
