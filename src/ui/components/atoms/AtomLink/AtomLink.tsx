"use client";

import { cva } from "class-variance-authority";
import Link from "next/link";

import { AtomLinkType } from "@types";
import { cn } from "@utils";

export const variantsAtomLink = cva("whitespace-nowrap inline-block w-fit", {
    variants: {
        variant: {
            default: "",
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
