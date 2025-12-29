"use client";

import { useReactTable, getCoreRowModel, TableOptions } from "@tanstack/react-table";

import { TableData } from "@molecules";
import { columns } from "./columns";
import { useMemo } from "react";
import { TableDataType } from "@/src/ui/types";

const data = [
    {
        name: "Price per IP",
        priceFirst: "$3.00",
        priceSecond: "$2.75",
        priceThird: "$2.50",
        priceFourth: "$2.25",
    },
];

export const TableBundleDiscounts = () => {

    const useNoMemo = (options: TableOptions<TableDataType>) => {
        "use no memo";
        return options;
    }

    const table = useReactTable(useNoMemo({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    }));

    return (
        <TableData table={table} />
    );
};