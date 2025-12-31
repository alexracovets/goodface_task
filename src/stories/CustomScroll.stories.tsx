import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CustomScroll } from "@atoms";
import { AtomText, AtomWrapper } from "@atoms";

const meta = {
  title: "Components/CustomScroll",
  component: CustomScroll,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    children: {
      control: "text",
      description: "Scrollable content",
    },
  },
} satisfies Meta<typeof CustomScroll>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-[200px] w-[300px]",
    children: (
      <>
        {Array.from({ length: 20 }, (_, i) => (
          <AtomWrapper key={i} className="p-4 mb-2 bg-grey-100">
            <AtomText>Scrollable item {i + 1}</AtomText>
          </AtomWrapper>
        ))}
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    className: "h-[300px] w-[400px]",
    children: (
      <>
        {Array.from({ length: 50 }, (_, i) => (
          <AtomWrapper key={i} className="p-4 mb-2 bg-grey-100">
            <AtomText>Long scrollable content item {i + 1}</AtomText>
          </AtomWrapper>
        ))}
      </>
    ),
  },
};

export const HorizontalScroll: Story = {
  args: {
    className: "h-[150px] w-[400px]",
    children: (
      <div className="flex gap-4" style={{ width: "800px" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <AtomWrapper
            key={i}
            className="p-4 bg-grey-100 flex-shrink-0"
            style={{ width: "150px" }}
          >
            <AtomText>Item {i + 1}</AtomText>
          </AtomWrapper>
        ))}
      </div>
    ),
  },
};
