"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";

import { AtomLinkType } from "@types";
import { cn } from "@utils";

export const variantsAtomLink = cva("whitespace-nowrap inline-block w-fit", {
  variants: {
    variant: {
      default: "",
      navigation_additional_item:
        "text-[13px] text-grey-800 leading-[16px] font-[400] px-[4px] py-[4px] bg-transparent border-none w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const AtomLink = ({
  href,
  className,
  variant,
  target,
  onClick,
  rel,
  ...props
}: AtomLinkType) => {
  return (
    <Link
      rel={rel}
      href={href}
      className={cn(variantsAtomLink({ variant, className }))}
      target={target}
      onClick={onClick}
      {...props}
    />
  );
};
