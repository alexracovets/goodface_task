"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomButtonType } from "@types";
import { cn } from "@utils";

export const variantsAtomButton = cva(
  "block border-[1px] border-grey-300 cursor-pointer rounded-[4px]",
  {
    variants: {
      variant: {
        default: "",
        back: cn(
          "flex justify-start items-center gap-x-[4px] text-[13px] font-[700] text-grey-800 leading-[20px] px-[12px] py-[4px]"
        ),
        notification:
          "relative w-[36px] h-[36px] cursor-pointer flex items-center justify-center border-none outline-none",
        user_details: "border-none outline-none p-[4px] rounded-none",
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
