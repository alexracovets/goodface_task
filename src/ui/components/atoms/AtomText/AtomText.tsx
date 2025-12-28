"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils";
import { AtomTextType } from "@types";

export const variantsAtomText = cva("", {
  variants: {
    variant: {
      default: "",
      logo: "text-[24px] font-[500] leading-[32px] text-grey-800",
      notification_count: cn("text-[12px] font-[600] text-base-white"),
      user_name: cn("text-[14px] font-[500] leading-[20px] text-grey-800"),
      user_email: cn("text-[14px] font-[500] leading-[20px] tracking-[-0.2px] text-grey-600"),
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
