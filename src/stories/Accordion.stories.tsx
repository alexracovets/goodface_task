import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AtomText,
} from "@atoms";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Accordion type",
    },
    collapsible: {
      control: "boolean",
      description: "Whether accordion items can be collapsed",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: "single", collapsible: true },
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger variant="default">
            <AtomText>Is it accessible?</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>Yes. It adheres to the WAI-ARIA design pattern.</AtomText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="default">
            <AtomText>Is it styled?</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>
              Yes. It comes with default styles that matches the other
              components aesthetic.
            </AtomText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger variant="default">
            <AtomText>Is it animated?</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AtomText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Discounts: Story = {
  args: { type: "single", collapsible: true },
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion type="single" collapsible>
        <AccordionItem value="discount-1">
          <AccordionTrigger variant="discounts" variantInner="discounts">
            <AtomText>Bundle Discount</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>Save 10% when buying 3+ items</AtomText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="discount-2">
          <AccordionTrigger variant="discounts" variantInner="discounts">
            <AtomText>Seasonal Sale</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>Get 20% off on all products</AtomText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  args: { type: "multiple" },
  render: () => (
    <div style={{ width: "400px" }}>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger variant="default">
            <AtomText>First item</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>Content for first item</AtomText>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger variant="default">
            <AtomText>Second item</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>Content for second item</AtomText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const SingleItem: Story = {
  args: { type: "single", collapsible: true, defaultValue: "item-1" },
  render: (args) => (
    <div style={{ width: "400px" }}>
      <Accordion
        type="single"
        collapsible
        defaultValue={args.defaultValue as string}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger variant="default">
            <AtomText>Single accordion item</AtomText>
          </AccordionTrigger>
          <AccordionContent>
            <AtomText>
              This is a single accordion item that can be expanded and
              collapsed.
            </AtomText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
