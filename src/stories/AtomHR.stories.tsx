import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AtomHR, AtomWrapper, AtomText } from "@atoms";

const meta = {
  title: "Components/AtomHR",
  component: AtomHR,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default"],
      description: "Separator style variant",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Separator orientation",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is decorative",
    },
  },
} satisfies Meta<typeof AtomHR>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    orientation: "horizontal",
    decorative: true,
  },
};

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <AtomText>Content above</AtomText>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomText>Content below</AtomText>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "200px",
        gap: "16px",
      }}
    >
      <AtomText>Left content</AtomText>
      <AtomHR variant="default" orientation="vertical" decorative />
      <AtomText>Right content</AtomText>
    </div>
  ),
};

export const BetweenSections: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      <AtomWrapper variant="default">
        <AtomText variant="heading1">Section 1</AtomText>
        <AtomText>This is the first section content.</AtomText>
      </AtomWrapper>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomWrapper variant="default">
        <AtomText variant="heading1">Section 2</AtomText>
        <AtomText>This is the second section content.</AtomText>
      </AtomWrapper>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomWrapper variant="default">
        <AtomText variant="heading1">Section 3</AtomText>
        <AtomText>This is the third section content.</AtomText>
      </AtomWrapper>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <AtomText>Item 1</AtomText>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomText>Item 2</AtomText>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomText>Item 3</AtomText>
      <AtomHR variant="default" orientation="horizontal" decorative />
      <AtomText>Item 4</AtomText>
    </div>
  ),
};
