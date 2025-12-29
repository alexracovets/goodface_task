"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { TableHeaderBlock } from "../TableHeaderBlock";
import { TableCellBlock } from "../TableCellBlock";

import { TableDataType } from "@types";

interface TableHelperColumnTextProps {
  name: string;
  label: string;
  size?: number;
  align?: "left" | "right" | "center";
}

const ColumnHelper = createColumnHelper<TableDataType>();

export const TableHelperColumnText = ({
  name,
  label,
  size,
  align,
}: TableHelperColumnTextProps) => {
  return ColumnHelper.accessor(name as keyof TableDataType, {
    id: name,
    header: () => <TableHeaderBlock name={label} align={align} />,
    cell: (info) => (
      <TableCellBlock align={align}>
        {info.getValue() ? info.getValue() : "-"}
      </TableCellBlock>
    ),
    size: size,
  });
};
