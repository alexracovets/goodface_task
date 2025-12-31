import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { AtomButton, DotsVerticalIcon, BurgerIcon, AtomImage, ChevronDownIcon, EditIcon, AtomText, AtomWrapper, BellIcon } from "@atoms";
import { cn } from "@utils";

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
};

export const Primary: Story = {
    args: {
        variant: "primary",
        children: "Primary",
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
        children: <>
            <BellIcon />
            <AtomWrapper variant="notification_count">
                <AtomText variant="notification_count">{2}</AtomText>
            </AtomWrapper>
        </>,
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: <>
            <EditIcon />
            Destructive
        </>,
    },
};

export const UserDetails: Story = {
    args: {
        variant: "user_details",
        children: <DotsVerticalIcon />,
    },
};

export const BurgerButton: Story = {
    args: {
        variant: "burger_button",
        children: <BurgerIcon />,
    },
};