import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RadioGroup, RadioGroupItem, AtomFormLabel } from "@atoms";

const meta = {
  title: "Components/AtomRadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "Default selected value",
    },
    value: {
      control: "text",
      description: "Controlled value",
    },
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="option1" id="option1" />
        <AtomFormLabel htmlFor="option1">Option 1</AtomFormLabel>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="option2" id="option2" />
        <AtomFormLabel htmlFor="option2">Option 2</AtomFormLabel>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <RadioGroupItem value="option3" id="option3" />
        <AtomFormLabel htmlFor="option3">Option 3</AtomFormLabel>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" disabled>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <RadioGroupItem value="option1" id="d1" />
          <AtomFormLabel htmlFor="d1">Disabled option 1</AtomFormLabel>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <RadioGroupItem value="option2" id="d2" />
          <AtomFormLabel htmlFor="d2">Disabled option 2</AtomFormLabel>
        </div>
      </div>
    </RadioGroup>
  ),
};
