"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { ButtonType } from "@types";
import { cn } from "@utils";

export const buttonVariants = cva("block border-[1px] border-grey-300 cursor-pointer rounded-[4px]", {
    variants: {
        variant: {
            default: "",
            back: cn(
                "flex justify-start items-center gap-x-[4px] text-[13px] font-bold text-grey-800 leading-[20px] px-[12px] py-[4px]"
            )
        },
    },
});

export const Button = ({
    className,
    variant = "default",
    asChild = false,
    ...props
}: ButtonType) => {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        />
    );
};
