"use client";

import { AtomText } from "@atoms";
import { cn } from "@utils";

interface TableCellProps {
    children: React.ReactNode;
    align?: "left" | "right" | "center";
}

export const TableCellBlock = ({
    children,
    align,
}: TableCellProps) => {
    return (
        <AtomText variant="table_data" className={cn(align === "left" && "text-left", align === "right" && "text-right", align === "center" && "text-center")}>
            {children}
        </AtomText>
    );
};
