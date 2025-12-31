import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { TableHelperColumnText } from "./TableHelperText";
import type { HeaderContext, CellContext } from "@tanstack/react-table";
import { TableDataType } from "@types";

describe("TableHelperColumnText", () => {
  it("створює column definition з правильним id", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Name",
    });

    expect(column.id).toBe("name");
  });

  it("створює column з опціональним size", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Name",
      size: 100,
    });

    expect(column.size).toBe(100);
  });

  it("рендерить header з правильним label", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Test Label",
    });

    const headerFunction =
      typeof column.header === "function" ? column.header : null;
    expect(headerFunction).toBeTruthy();
    const mockHeaderContext = {} as HeaderContext<TableDataType, string>;
    const { container } = render(
      headerFunction!(mockHeaderContext) as React.ReactElement
    );
    expect(container.textContent).toBe("Test Label");
  });

  it("рендерить header з align left", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Label",
      align: "left",
    });

    const headerFunction =
      typeof column.header === "function" ? column.header : null;
    expect(headerFunction).toBeTruthy();
    const mockHeaderContext = {} as HeaderContext<TableDataType, string>;
    const { container } = render(
      headerFunction!(mockHeaderContext) as React.ReactElement
    );
    const textElement = container.querySelector('[data-slot="text"]');
    expect(textElement).toHaveClass("text-left");
  });

  it("рендерить header з align right", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Label",
      align: "right",
    });

    const headerFunction =
      typeof column.header === "function" ? column.header : null;
    expect(headerFunction).toBeTruthy();
    const mockHeaderContext = {} as HeaderContext<TableDataType, string>;
    const { container } = render(
      headerFunction!(mockHeaderContext) as React.ReactElement
    );
    const textElement = container.querySelector('[data-slot="text"]');
    expect(textElement).toHaveClass("text-right");
  });

  it("рендерить header з align center", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Label",
      align: "center",
    });

    const headerFunction =
      typeof column.header === "function" ? column.header : null;
    expect(headerFunction).toBeTruthy();
    const mockHeaderContext = {} as HeaderContext<TableDataType, string>;
    const { container } = render(
      headerFunction!(mockHeaderContext) as React.ReactElement
    );
    const textElement = container.querySelector('[data-slot="text"]');
    expect(textElement).toHaveClass("text-center");
  });

  it("рендерить cell зі значенням", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Name",
    });

    const cellFunction = typeof column.cell === "function" ? column.cell : null;
    expect(cellFunction).toBeTruthy();
    const mockCellContext = {
      getValue: () => "Test Value",
    } as unknown as CellContext<TableDataType, string>;

    const { container } = render(
      cellFunction!(mockCellContext) as React.ReactElement
    );
    expect(container.textContent).toBe("Test Value");
  });

  it("рендерить cell з '-' коли значення порожнє", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Name",
    });

    const cellFunction = typeof column.cell === "function" ? column.cell : null;
    expect(cellFunction).toBeTruthy();
    const mockCellContext = {
      getValue: () => "",
    } as unknown as CellContext<TableDataType, string>;

    const { container } = render(
      cellFunction!(mockCellContext) as React.ReactElement
    );
    expect(container.textContent).toBe("-");
  });

  it("рендерить cell з '-' коли значення null", () => {
    const column = TableHelperColumnText({
      name: "name",
      label: "Name",
    });

    const cellFunction = typeof column.cell === "function" ? column.cell : null;
    expect(cellFunction).toBeTruthy();
    const mockCellContext = {
      getValue: () => null,
    } as unknown as CellContext<TableDataType, string>;

    const { container } = render(
      cellFunction!(mockCellContext) as React.ReactElement
    );
    expect(container.textContent).toBe("-");
  });

  it("рендерить cell з align right", () => {
    const column = TableHelperColumnText({
      name: "priceFirst",
      label: "Price",
      align: "right",
    });

    const cellFunction = typeof column.cell === "function" ? column.cell : null;
    expect(cellFunction).toBeTruthy();
    const mockCellContext = {
      getValue: () => "$10.00",
    } as unknown as CellContext<TableDataType, string>;

    const { container } = render(
      cellFunction!(mockCellContext) as React.ReactElement
    );
    const textElement = container.querySelector('[data-slot="text"]');
    expect(textElement).toHaveClass("text-right");
    expect(container.textContent).toBe("$10.00");
  });
});
