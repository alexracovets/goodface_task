import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import { Slider } from "@atoms";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "object",
      description: "Default slider value",
    },
    value: {
      control: "object",
      description: "Controlled slider value",
    },
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step value",
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

const SliderWithState = ({
  defaultValue,
  min,
  max,
  ...args
}: {
  defaultValue?: number[];
  min?: number;
  max?: number;
  [key: string]: unknown;
}) => {
  const [value, setValue] = useState(defaultValue || [50]);
  return (
    <div style={{ width: "400px" }}>
      <Slider
        {...args}
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

const RangeSliderWithState = ({
  defaultValue,
  min,
  max,
  ...args
}: {
  defaultValue?: number[];
  min?: number;
  max?: number;
  [key: string]: unknown;
}) => {
  const [value, setValue] = useState(defaultValue || [25, 75]);
  return (
    <div style={{ width: "400px" }}>
      <Slider
        {...args}
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

const CustomRangeSliderWithState = ({
  defaultValue,
  min,
  max,
  ...args
}: {
  defaultValue?: number[];
  min?: number;
  max?: number;
  [key: string]: unknown;
}) => {
  const [value, setValue] = useState(defaultValue || [10]);
  return (
    <div style={{ width: "400px" }}>
      <Slider
        {...args}
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

const LargeRangeSliderWithState = ({
  defaultValue,
  min,
  max,
  ...args
}: {
  defaultValue?: number[];
  min?: number;
  max?: number;
  [key: string]: unknown;
}) => {
  const [value, setValue] = useState(defaultValue || [500]);
  return (
    <div style={{ width: "400px" }}>
      <Slider
        {...args}
        defaultValue={defaultValue}
        min={min}
        max={max}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
  },
  render: (args) => <SliderWithState {...args} />,
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
  },
  render: (args) => <RangeSliderWithState {...args} />,
};

export const CustomRange: Story = {
  args: {
    defaultValue: [10],
    min: 0,
    max: 50,
  },
  render: (args) => <CustomRangeSliderWithState {...args} />,
};

export const LargeRange: Story = {
  args: {
    defaultValue: [500],
    min: 0,
    max: 1000,
  },
  render: (args) => <LargeRangeSliderWithState {...args} />,
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    disabled: true,
  },
  render: (args) => <SliderWithState {...args} />,
};
