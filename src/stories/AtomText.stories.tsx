import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AtomText } from "@atoms";

const meta = {
  title: "Components/AtomText",
  component: AtomText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "heading1",
        "logo",
        "notification_count",
        "user_name",
        "user_email",
        "navigation_section_title",
        "hero_description",
        "form_part_title",
        "form_part_description",
        "table_data",
        "table_header",
        "slider_separator_item",
        "discount",
        "additional_title",
        "additional_content_list_item",
        "aside_title",
        "aside_list_block_title",
        "aside_form_title",
        "aside_form_total",
        "aside_form_value",
        "aside_form_total_value",
      ],
      description: "Text style variant",
    },
    asChild: {
      control: "boolean",
      description: "Use Slot for composition",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
} satisfies Meta<typeof AtomText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default text",
  },
};

export const Header: Story = {
  args: {
    variant: "heading1",
    children: "Heading 1",
  },
};

export const Logo: Story = {
  args: {
    variant: "logo",
    children: "Logo Text",
  },
};

export const NotificationCount: Story = {
  args: {
    variant: "notification_count",
    className: "bg-black",
    children: 2,
  },
};

export const UserName: Story = {
  args: {
    variant: "user_name",
    children: "John Doe",
  },
};

export const UserEmail: Story = {
  args: {
    variant: "user_email",
    children: "john.doe@example.com",
  },
};

export const NavigationSectionTitle: Story = {
  args: {
    variant: "navigation_section_title",
    children: "NAVIGATION SECTION",
  },
};

export const HeroDescription: Story = {
  args: {
    variant: "hero_description",
    children: "This is a hero description text",
  },
};

export const FormPartTitle: Story = {
  args: {
    variant: "form_part_title",
    children: "Form Part Title",
  },
};

export const FormPartDescription: Story = {
  args: {
    variant: "form_part_description",
    children: "Form part description text",
  },
};

export const TableData: Story = {
  args: {
    variant: "table_data",
    children: "Table data cell",
  },
};

export const TableHeader: Story = {
  args: {
    variant: "table_header",
    children: "Table Header",
  },
};

export const Discount: Story = {
  args: {
    variant: "discount",
    children: "-20%",
  },
};

export const AdditionalTitle: Story = {
  args: {
    variant: "additional_title",
    children: "Additional Title",
  },
};

export const AsideTitle: Story = {
  args: {
    variant: "aside_title",
    children: "Aside Title",
  },
};

export const AsideFormTotalValue: Story = {
  args: {
    variant: "aside_form_total_value",
    children: "$99.99",
  },
};
