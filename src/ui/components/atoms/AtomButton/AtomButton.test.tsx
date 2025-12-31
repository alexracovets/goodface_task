import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AtomButton } from "./AtomButton";

describe("AtomButton", () => {
  it("рендерить кнопку з текстом", () => {
    render(<AtomButton>Натисни мене</AtomButton>);
    const button = screen.getByRole("button", { name: /натисни мене/i });
    expect(button).toBeInTheDocument();
  });

  it("рендерить кнопку з різними варіантами", () => {
    const { rerender } = render(<AtomButton variant="primary">Primary</AtomButton>);
    let button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    rerender(<AtomButton variant="secondary">Secondary</AtomButton>);
    button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    rerender(<AtomButton variant="destructive">Destructive</AtomButton>);
    button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("використовує варіант default за замовчуванням", () => {
    render(<AtomButton>Default Button</AtomButton>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-slot", "button");
  });

  it("викликає обробник onClick при кліку", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<AtomButton onClick={handleClick}>Click me</AtomButton>);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("приймає додатковий className", () => {
    render(<AtomButton className="custom-class">Button</AtomButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("передає інші props до кнопки", () => {
    render(<AtomButton disabled data-testid="test-button">Button</AtomButton>);
    const button = screen.getByTestId("test-button");
    expect(button).toBeDisabled();
  });

  it("має правильний data-slot атрибут", () => {
    render(<AtomButton>Button</AtomButton>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-slot", "button");
  });

  it("використовує Slot компонент коли asChild={true}", () => {
    render(
      <AtomButton asChild>
        <a href="/test">Link Button</a>
      </AtomButton>
    );
    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("data-slot", "button");
    expect(link).toHaveAttribute("href", "/test");
  });
});

