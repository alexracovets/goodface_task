import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Loader } from "@atoms";

const meta = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    absolute: {
      control: "boolean",
      description:
        "Whether the loader uses absolute positioning instead of fixed",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    absolute: false,
  },
};

export const Absolute: Story = {
  args: {
    absolute: true,
  },
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "300px",
          border: "1px solid #ccc",
        }}
      >
        <Story />
      </div>
    ),
  ],
};
