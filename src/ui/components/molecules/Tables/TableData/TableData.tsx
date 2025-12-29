"use client";

import { flexRender, Table as TableType } from "@tanstack/react-table";
import {
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  AtomText,
  TableRow,
  Table,
} from "@atoms";

import { TableDataType } from "@types";

interface TableDataProps {
  table: TableType<TableDataType>;
}

export const TableData = ({ table }: TableDataProps) => {
  return (
    <Table className="w-fit mx-auto">
      <TableHeader className="sticky top-0 z-10">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                style={{
                  width: "100%",
                  maxWidth: `${header.getSize()}px`,
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                    minWidth: cell.column.getSize(),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={table.getAllColumns().length}>
              <AtomText variant="table_data">Data not found</AtomText>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
