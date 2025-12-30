"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils";
import { AtomTextType } from "@types";

export const variantsAtomText = cva("", {
  variants: {
    variant: {
      default: "",
      h4: "text-[24px] font-[500] leading-[32px]",
      logo: "text-[24px] font-[500] leading-[32px] text-grey-800",
      notification_count: cn("text-[12px] font-[600] text-base-white"),
      user_name: cn("text-[14px] font-[500] leading-[20px] text-grey-800"),
      user_email: cn(
        "text-[14px] font-[500] leading-[20px] tracking-[-0.2px] text-grey-600"
      ),
      navigation_section_title: cn(
        "text-[12px] font-[500] leading-[20px] text-grey-700 tracking-[0.7px] uppercase"
      ),
      hero_description: cn(
        "text-[14px] font-[500] leading-[20px] tracking-[-0.2px] text-grey-500"
      ),
      form_part_title: cn(
        "text-[14px] font-[700] leading-[20px] tracking-[0.2px] text-grey-800"
      ),
      form_part_description: cn(
        "text-[14px] font-[500] leading-[20px] tracking-[-0.2px] text-grey-500"
      ),
      table_data: cn(
        "text-[14px] text-right font-[500] leading-[20px] tracking-[-0.2px] text-grey-700 py-[8px] px-[12px]"
      ),
      table_header: cn(
        "text-[14px] text-right font-[500] leading-[20px] text-grey-500 py-[8px] px-[12px]"
      ),
      slider_separator_item: cn(
        "text-[14px] leading-[20px] tracking-[-0.2px] text-grey-500"
      ),
      discount: cn(
        "text-[12px] text-green-800 font-[500] leading-[16px] tracking-[0.2px] bg-green-50 px-[5px] py-[1px] rounded-[4px] border border-green-300"
      ),
      additional_title: cn(
        "text-[18px] text-grey-800 font-[500] leading-[24px]"
      ),
      additional_content_list_item: cn(
        "text-[14px] text-grey-600 font-[500] leading-[20px] tracking-[-0.2px]"
      ),
      aside_title: cn("text-[20px] font-[500] leading-[28px] text-grey-800"),
      aside_list_block_title: cn(
        "text-[16px] font-[500] leading-[24px] text-grey-800"
      ),
      aside_form_title: cn(
        "text-[14px] font-[800] leading-[20px] tracking-[-0.2px] text-grey-600"
      ),
      aside_form_total: cn(
        "text-[14px] font-[500] leading-[20px] text-grey-700"
      ),
      aside_form_value: cn(
        "text-[14px] font-[500] leading-[20px] tracking-[-0.2px] text-grey-800"
      ),
      aside_form_total_value: cn(
        "text-[24px] font-[500] leading-[32px] text-grey-800"
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
