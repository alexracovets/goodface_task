"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils";
import { AtomTextType } from "@types";

export const variantsAtomText = cva("", {
  variants: {
    variant: {
      default: "",
      h4: "text-[24px] xl:text-[2.4rem] font-[500] leading-[32px] xl:leading-[3.2rem]",
      logo: "text-[24px] xl:text-[2.4rem] font-[500] leading-[32px] xl:leading-[3.2rem] text-grey-800",
      notification_count: cn("text-[12px] xl:text-[1.2rem] font-[600] text-base-white"),
      user_name: cn("text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] text-grey-800"),
      user_email: cn(
        "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-600"
      ),
      navigation_section_title: cn(
        "text-[12px] xl:text-[1.2rem] font-[500] leading-[20px] xl:leading-[2rem] text-grey-700 tracking-[0.7px] xl:tracking-[0.07rem] uppercase"
      ),
      hero_description: cn(
        "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-500"
      ),
      form_part_title: cn(
        "text-[14px] xl:text-[1.4rem] font-[700] leading-[20px] xl:leading-[2rem] tracking-[0.2px] xl:tracking-[0.02rem] text-grey-800"
      ),
      form_part_description: cn(
        "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-500"
      ),
      table_data: cn(
        "text-[14px] xl:text-[1.4rem] text-right font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-700 py-[8px] xl:py-[0.8rem] px-[12px] xl:px-[1.2rem]"
      ),
      table_header: cn(
        "text-[14px] xl:text-[1.4rem] text-right font-[500] leading-[20px] xl:leading-[2rem] text-grey-500 py-[8px] xl:py-[0.8rem] px-[12px] xl:px-[1.2rem]"
      ),
      slider_separator_item: cn(
        "text-[14px] xl:text-[1.4rem] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-500",
        "max-md:text-[12px]",
        "max-sm:text-[11px]"
      ),
      discount: cn(
        "text-[12px] xl:text-[1.2rem] text-green-800 font-[500] leading-[16px] xl:leading-[1.6rem] tracking-[0.2px] xl:tracking-[0.02rem] bg-green-50 px-[5px] xl:px-[0.5rem] py-[1px] xl:py-[0.1rem] rounded-[4px] xl:rounded-[0.4rem] border border-green-300"
      ),
      additional_title: cn(
        "text-[18px] xl:text-[1.8rem] text-grey-800 font-[500] leading-[24px] xl:leading-[2.4rem]"
      ),
      additional_content_list_item: cn(
        "text-[14px] xl:text-[1.4rem] text-grey-600 font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem]"
      ),
      aside_title: cn("text-[20px] xl:text-[2rem] font-[500] leading-[28px] xl:leading-[2.8rem] text-grey-800"),
      aside_list_block_title: cn(
        "text-[16px] xl:text-[1.6rem] font-[500] leading-[24px] xl:leading-[2.4rem] text-grey-800"
      ),
      aside_form_title: cn(
        "text-[14px] xl:text-[1.4rem] font-[800] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-600"
      ),
      aside_form_total: cn(
        "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] text-grey-700"
      ),
      aside_form_value: cn(
        "text-[14px] xl:text-[1.4rem] font-[500] leading-[20px] xl:leading-[2rem] tracking-[-0.2px] xl:tracking-[-0.02rem] text-grey-800"
      ),
      aside_form_total_value: cn(
        "text-[24px] xl:text-[2.4rem] font-[500] leading-[32px] xl:leading-[3.2rem] text-grey-800"
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
