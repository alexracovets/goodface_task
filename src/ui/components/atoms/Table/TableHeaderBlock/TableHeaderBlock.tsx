"use client";

import { AtomText } from "@atoms";

import { cn } from "@utils";

interface TableHeaderBlockProps {
    name: string | number;
    align?: "left" | "right" | "center";
}

export const TableHeaderBlock = ({ name, align }: TableHeaderBlockProps) => {
    return <AtomText variant="table_header" className={cn(align === "left" && "text-left", align === "right" && "text-right", align === "center" && "text-center")}>{name}</AtomText>;
};
