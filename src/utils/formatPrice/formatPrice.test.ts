import { describe, it, expect } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("форматує додатнє число з $ та 2 знаками після коми", () => {
    expect(formatPrice(10)).toBe("$10.00");
    expect(formatPrice(100.5)).toBe("$100.50");
    expect(formatPrice(0.99)).toBe("$0.99");
    expect(formatPrice(1234.56)).toBe("$1234.56");
  });

  it("повертає '-' для нуля", () => {
    expect(formatPrice(0)).toBe("-");
  });

  it("повертає '-' для від'ємних чисел", () => {
    expect(formatPrice(-10)).toBe("-");
    expect(formatPrice(-0.01)).toBe("-");
  });

  it("правильно форматує дрібні числа", () => {
    expect(formatPrice(0.1)).toBe("$0.10");
    expect(formatPrice(0.01)).toBe("$0.01");
  });
});

