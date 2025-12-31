import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn, expect, within, userEvent } from "storybook/test";

import {
  AtomButton,
  DotsVerticalIcon,
  BurgerIcon,
  EditIcon,
  AtomText,
  AtomWrapper,
  BellIcon,
} from "@atoms";

const meta = {
  title: "Components/AtomButton",
  component: AtomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "icon",
        "destructive",
        "user_details",
        "navigation_item",
        "burger_button",
      ],
      description: "Style variant of the button",
    },
    asChild: {
      control: "boolean",
      description: "Use Slot for composition",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    children: {
      control: "text",
      description: "Content of the button",
    },
    "aria-label": {
      control: "text",
      description: "Accessible label for icon buttons",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AtomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("data-slot", "button");

    if (args.onClick) {
      await userEvent.click(button);
      await expect(args.onClick).toHaveBeenCalled();
    }
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Primary" });

    await expect(button).toBeInTheDocument();
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    "aria-label": "Notifications",
    children: (
      <>
        <BellIcon />
        <AtomWrapper variant="notification_count">
          <AtomText variant="notification_count">{2}</AtomText>
        </AtomWrapper>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Notifications" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-label", "Notifications");
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <EditIcon />
        Destructive
      </>
    ),
  },
};

export const UserDetails: Story = {
  args: {
    variant: "user_details",
    "aria-label": "User menu",
    children: <DotsVerticalIcon />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "User menu" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-label", "User menu");
  },
};

export const BurgerButton: Story = {
  args: {
    variant: "burger_button",
    "aria-label": "Open menu",
    children: <BurgerIcon />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Open menu" });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-label", "Open menu");
  },
};
