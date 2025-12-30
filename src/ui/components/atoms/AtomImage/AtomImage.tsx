"use client";

import { cva } from "class-variance-authority";
import Image from "next/image";

import { AtomImageType } from "@types";
import { cn } from "@utils";

export const variantsAtomImage = cva("block overflow-hidden select-none", {
  variants: {
    variant: {
      default: "",
      hero: "w-[56px] xl:w-[5.6rem] min-w-[56px] xl:min-w-[5.6rem] h-[56px] xl:h-[5.6rem] min-h-[56px] xl:min-h-[5.6rem]",
      location:
        "w-[20px] xl:w-[2rem] min-w-[20px] xl:min-w-[2rem] h-[20px] xl:h-[2rem] min-h-[20px] xl:min-h-[2rem] rounded-[4px] xl:rounded-[0.4rem] overflow-hidden",
      payment: "w-[40px] xl:w-[4rem] min-w-[40px] xl:min-w-[4rem] h-[24px] xl:h-[2.4rem] min-h-[24px] xl:min-h-[2.4rem]",
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
