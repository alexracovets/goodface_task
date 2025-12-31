import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  AtomButton,
  AtomText,
} from "@atoms";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

const SheetExample = ({
  side = "right" as "top" | "right" | "bottom" | "left",
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <AtomButton aria-label="Open Sheet">Open Sheet</AtomButton>
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>This is a sheet description.</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <AtomText>Sheet content goes here.</AtomText>
        </div>
        <SheetFooter>
          <AtomButton variant="primary" aria-label="Save">
            Save
          </AtomButton>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export const RightSide: Story = {
  render: () => <SheetExample side="right" />,
};

export const LeftSide: Story = {
  render: () => <SheetExample side="left" />,
};

export const TopSide: Story = {
  render: () => <SheetExample side="top" />,
};

export const BottomSide: Story = {
  render: () => <SheetExample side="bottom" />,
};
