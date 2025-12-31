"use client";

import { cva } from "class-variance-authority";
import Image from "next/image";

import { AtomImageType } from "@types";
import { cn } from "@utils";

export const variantsAtomImage = cva("block overflow-hidden select-none", {
  variants: {
    variant: {
      default: "",
      hero: cn(
        "w-[56px] min-w-[56px] h-[56px] min-h-[56px]",
        "xl:w-[5.6rem] xl:min-w-[5.6rem] xl:h-[5.6rem] xl:min-h-[5.6rem]"
      ),
      location: cn(
        "w-[20px] min-w-[20px] h-[20px] min-h-[20px] rounded-[4px] overflow-hidden",
        "xl:w-[2rem] xl:min-w-[2rem] xl:h-[2rem] xl:min-h-[2rem] xl:rounded-[0.4rem]"
      ),
      payment: cn(
        "w-[40px] min-w-[40px] h-[24px] min-h-[24px]",
        "xl:w-[4rem] xl:min-w-[4rem] xl:h-[2.4rem] xl:min-h-[2.4rem]"
      ),
    },
  },
});

export const AtomImage = ({
  src,
  alt,
  variant,
  className,
  onClick,
  unoptimized = true,
  priority = false,
}: AtomImageType) => {
  return (
    <div
      className={cn("relative", variantsAtomImage({ variant }), className)}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        fill
        className={"object-cover"}
        unoptimized={unoptimized}
      />
    </div>
  );
};
