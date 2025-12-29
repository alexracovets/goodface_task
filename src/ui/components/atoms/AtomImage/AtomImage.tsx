"use client";

import { cva } from "class-variance-authority";
import Image from "next/image";

import { AtomImageType } from "@types";
import { cn } from "@utils";

export const variantsAtomImage = cva("block overflow-hidden select-none", {
  variants: {
    variant: {
      default: "",
      hero: "w-[56px] min-w-[56px] h-[56px] min-h-[56px]",
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
