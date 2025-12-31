import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

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
  },
};

export const DiscountCode: Story = {
  args: {
    variant: "discount_code",
    placeholder: "Enter discount code",
    type: "text",
  },
};

export const WithValue: Story = {
  args: {
    variant: "default",
    value: "Sample text",
    type: "text",
  },
};
