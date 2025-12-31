import { describe, it, expect } from "vitest";
import { cn } from "./cn";

describe("cn", () => {
  it("об'єднує класи", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });

  it("обробляє умовні класи", () => {
    expect(cn("base", true && "conditional")).toBe("base conditional");
    expect(cn("base", false && "conditional")).toBe("base");
  });

  it("обробляє масиви класів", () => {
    expect(cn(["class1", "class2"])).toBe("class1 class2");
  });

  it("обробляє об'єкти з умовними класами", () => {
    expect(cn({ class1: true, class2: false })).toBe("class1");
  });

  it("видаляє конфліктні Tailwind класи", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
    expect(cn("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  it("обробляє undefined та null", () => {
    expect(cn("base", undefined, null)).toBe("base");
  });

  it("обробляє порожні рядки", () => {
    expect(cn("base", "")).toBe("base");
  });
});
