"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils";
import { AtomTextType } from "@types";

export const variantsAtomText = cva("", {
  variants: {
    variant: {
      default: "",
      h4: cn(
        "text-[24px] font-[500] leading-[32px]",
        "xl:text-[2.4rem] xl:leading-[3.2rem]"
      ),
      logo: cn(
        "text-[24px] text-grey-800 font-[500] leading-[32px]",
        "xl:text-[2.4rem] xl:leading-[3.2rem]"
      ),
      notification_count: cn(
        "text-[12px] text-base-white font-[600]",
        "xl:text-[1.2rem]"
      ),
      user_name: cn(
        "text-[14px] text-grey-800 font-[500] leading-[20px]",
        "xl:text-[1.4rem] xl:leading-[2rem]"
      ),
      user_email: cn(
        "text-[14px] text-grey-600 font-[500] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      navigation_section_title: cn(
        "text-[12px] text-grey-700 font-[500] leading-[20px] tracking-[0.7px] uppercase",
        "xl:text-[1.2rem] xl:leading-[2rem] xl:tracking-[0.07rem]"
      ),
      hero_description: cn(
        "text-[14px] text-grey-500 font-[500] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      form_part_title: cn(
        "text-[14px] text-grey-800 font-[700] leading-[20px] tracking-[0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[0.02rem]"
      ),
      form_part_description: cn(
        "text-[14px] text-grey-500 font-[500] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      table_data: cn(
        "text-[14px] text-grey-700 font-[500] leading-[20px] tracking-[-0.2px] text-right py-[8px] px-[12px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem] xl:py-[0.8rem] xl:px-[1.2rem]"
      ),
      table_header: cn(
        "text-[14px] text-grey-500 font-[500] leading-[20px] text-right py-[8px] px-[12px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:py-[0.8rem] xl:px-[1.2rem]"
      ),
      slider_separator_item: cn(
        "text-[14px] text-grey-500 leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]",
        "max-md:text-[12px]",
        "max-sm:text-[11px]"
      ),
      discount: cn(
        "text-[12px] text-green-800 font-[500] leading-[16px] tracking-[0.2px] bg-green-50 border border-green-300 px-[5px] py-[1px] rounded-[4px]",
        "xl:text-[1.2rem] xl:leading-[1.6rem] xl:tracking-[0.02rem] xl:px-[0.5rem] xl:py-[0.1rem] xl:rounded-[0.4rem]"
      ),
      additional_title: cn(
        "text-[18px] text-grey-800 font-[500] leading-[24px]",
        "xl:text-[1.8rem] xl:leading-[2.4rem]"
      ),
      additional_content_list_item: cn(
        "text-[14px] text-grey-600 font-[500] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      aside_title: cn(
        "text-[20px] text-grey-800 font-[500] leading-[28px]",
        "xl:text-[2rem] xl:leading-[2.8rem]"
      ),
      aside_list_block_title: cn(
        "text-[16px] text-grey-800 font-[500] leading-[24px]",
        "xl:text-[1.6rem] xl:leading-[2.4rem]"
      ),
      aside_form_title: cn(
        "text-[14px] text-grey-600 font-[800] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      aside_form_total: cn(
        "text-[14px] text-grey-700 font-[500] leading-[20px]",
        "xl:text-[1.4rem] xl:leading-[2rem]"
      ),
      aside_form_value: cn(
        "text-[14px] text-grey-800 font-[500] leading-[20px] tracking-[-0.2px]",
        "xl:text-[1.4rem] xl:leading-[2rem] xl:tracking-[-0.02rem]"
      ),
      aside_form_total_value: cn(
        "text-[24px] text-grey-800 font-[500] leading-[32px]",
        "xl:text-[2.4rem] xl:leading-[3.2rem]"
      ),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const AtomText = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}: AtomTextType) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="text"
      className={cn(variantsAtomText({ variant, className }))}
      {...props}
    />
  );
};
