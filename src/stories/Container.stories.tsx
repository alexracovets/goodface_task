import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "@atoms";
import { AtomText } from "@atoms";

const meta = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default"],
      description: "Container style variant",
    },
    asChild: {
      control: "boolean",
      description: "Use Slot for composition",
    },
    children: {
      control: "text",
      description: "Container content",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: <AtomText>Container content</AtomText>,
  },
};

export const WithMultipleChildren: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <AtomText variant="heading1">Container Title</AtomText>
        <AtomText>
          This is container content with multiple children elements.
        </AtomText>
        <AtomText>You can add any content here.</AtomText>
      </>
    ),
  },
};

