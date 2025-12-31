import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { AtomLink } from "@atoms";

const meta = {
  title: "Components/AtomLink",
  component: AtomLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "navigation_additional_item"],
      description: "Link style variant",
    },
    href: {
      control: "text",
      description: "Link URL",
    },
    target: {
      control: "select",
      options: ["_self", "_blank", "_parent", "_top"],
      description: "Link target",
    },
    children: {
      control: "text",
      description: "Link content",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AtomLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    href: "#",
    children: "Default link",
  },
};

export const NavigationAdditionalItem: Story = {
  args: {
    variant: "navigation_additional_item",
    href: "#",
    children: "Navigation item",
  },
};
