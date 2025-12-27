"use client";

import { VariantProps } from "class-variance-authority";
import { variantsAtomWrapper } from "@atoms";

export interface AtomWrapperType extends React.ComponentProps<"div"> {
    variant?: VariantProps<typeof variantsAtomWrapper>["variant"];
    asChild?: boolean;
}