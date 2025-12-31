import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AtomFormLabel } from "@atoms";

const meta = {
  title: "Components/AtomFormLabel",
  component: AtomFormLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "radio_label"],
      description: "Label style variant",
    },
    htmlFor: {
      control: "text",
      description: "ID of the form element this label is for",
    },
    children: {
      control: "text",
      description: "Label text",
    },
  },
} satisfies Meta<typeof AtomFormLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    htmlFor: "input-id",
    children: "Label text",
  },
};

export const RadioLabel: Story = {
  args: {
    variant: "radio_label",
    htmlFor: "radio-id",
    children: "Radio option label",
  },
};

export const WithLongText: Story = {
  args: {
    variant: "default",
    htmlFor: "input-id",
    children:
      "This is a longer label text that demonstrates how the label handles multiple lines of text",
  },
};

export const RadioLabelSelected: Story = {
  args: {
    variant: "radio_label",
    htmlFor: "radio-id",
    children: "Selected radio option",
  },
};
