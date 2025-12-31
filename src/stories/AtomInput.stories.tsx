import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn, expect, within } from "storybook/test";

import { AtomInput } from "@atoms";

const meta = {
  title: "Components/AtomInput",
  component: AtomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "discount_code"],
      description: "Style variant of the input",
    },
    type: {
      control: "select",
      options: ["text", "email", "tel", "number"],
      description: "Input type",
    },
    error: {
      control: "boolean",
      description: "Whether the input has an error state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    "aria-label": {
      control: "text",
      description:
        "Accessible label for the input (required when no visible label is present)",
    },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof AtomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Enter text...",
    type: "text",
    "aria-label": "Text input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Text input");

    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-label", "Text input");
  },
};

export const DiscountCode: Story = {
  args: {
    variant: "discount_code",
    placeholder: "Enter discount code",
    type: "text",
    "aria-label": "Discount code",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Discount code");

    await expect(input).toBeInTheDocument();
    await expect(input).toHaveAttribute("aria-label", "Discount code");
  },
};

export const WithValue: Story = {
  args: {
    variant: "default",
    value: "Sample text",
    type: "text",
    "aria-label": "Text input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText("Text input");

    await expect(input).toBeInTheDocument();
    await expect(input).toHaveValue("Sample text");
    await expect(input).toHaveAttribute("aria-label", "Text input");
  },
};
