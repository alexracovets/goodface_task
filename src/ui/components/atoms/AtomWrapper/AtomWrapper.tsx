"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { AtomWrapperType } from "@types";
import { cn } from "@utils";

export const variantsAtomWrapper = cva("", {
    variants: {
        variant: {
            default: "w-full",
            goodface_wrapper: "grid grid-cols-[auto_1fr] h-screen",
            navigation_aplication: "w-[280px] bg-base-white border border-grey-200",
            product_wrapper: "grid grid-cols-[1fr_auto] w-full gap-x-[48px]",
            product_main: "w-full flex flex-col py-[24px] px-[48px] gap-y-[24px]",
            product_sidebar: "w-[360px]"
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const AtomWrapper = ({
    children,
    variant = "default",
    className,
    asChild = false,
    ...props
}: AtomWrapperType) => {
    const Component = asChild ? Slot : "div";
    return (
        <Component className={cn(variantsAtomWrapper({ variant, className }))} {...props}>
            {children}
        </Component>
    );
};
