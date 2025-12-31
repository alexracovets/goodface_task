import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { AtomImage } from "@atoms";

const meta = {
  title: "Components/AtomImage",
  component: AtomImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "hero", "location", "payment"],
      description: "Image style variant",
    },
    src: {
      control: "text",
      description: "Image source path",
    },
    alt: {
      control: "text",
      description: "Image alt text",
    },
    priority: {
      control: "boolean",
      description: "Whether to prioritize image loading",
    },
    unoptimized: {
      control: "boolean",
      description: "Whether to disable image optimization",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AtomImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    src: "/png/flags/uk.png",
    alt: "Default image",
    unoptimized: true,
  },
};

export const Hero: Story = {
  args: {
    variant: "hero",
    src: "/svg/data_proxies.svg",
    alt: "Hero image",
    unoptimized: true,
  },
};

export const Location: Story = {
  args: {
    variant: "location",
    src: "/png/flags/uk.png",
    alt: "Location flag",
    unoptimized: true,
  },
};

export const Payment: Story = {
  args: {
    variant: "payment",
    src: "/png/payment/american.png",
    alt: "Visa payment",
    unoptimized: true,
  },
};
