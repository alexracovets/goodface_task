import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AtomWrapper, AtomText, EyeIcon, BurgerIcon } from "@atoms";

const meta = {
  title: "Components/AtomWrapper",
  component: AtomWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "goodface_wrapper",
        "navigation_aplication",
        "product_wrapper",
        "product_main",
        "product_sidebar",
        "logo_nav_part",
        "notification_count",
        "navigation_content",
        "icon",
        "icon_small",
        "navigation_additional_content",
        "product_main_content",
        "navigation_item_content",
        "page_hero_block",
        "hero_content",
        "slider_separator_item",
        "select_dropdown_item",
        "center_row_wrapper",
        "dropdown_item_additional",
        "additional_content",
        "additional_content_lists",
        "list",
        "aside_form_item",
        "burger_wrapper",
        "credit_pay",
      ],
      description: "Wrapper style variant",
    },
    asChild: {
      control: "boolean",
      description: "Use Slot for composition",
    },
    children: {
      control: "text",
      description: "Wrapper content",
    },
  },
} satisfies Meta<typeof AtomWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    className: "bg-primary-400",
    children: <AtomText>Default wrapper content</AtomText>,
  },
};

export const Icon: Story = {
  args: {
    variant: "icon",
    className: "bg-primary-400",
    children: <EyeIcon variant="icon" />,
  },
};

export const IconSmall: Story = {
  args: {
    variant: "icon_small",
    className: "bg-primary-400",
    children: <EyeIcon variant="icon_small" />,
  },
};

export const List: Story = {
  args: {
    variant: "list",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 3</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 4</AtomWrapper>
      </>
    ),
  },
};

export const NavigationContent: Story = {
  args: {
    variant: "navigation_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 3</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 4</AtomWrapper>
      </>
    ),
  },
};

export const HeroContent: Story = {
  args: {
    variant: "hero_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 3</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 4</AtomWrapper>
      </>
    ),
  },
};

export const AdditionalContent: Story = {
  args: {
    variant: "additional_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 3</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 4</AtomWrapper>
      </>
    ),
  },
};

export const AsideFormItem: Story = {
  args: {
    variant: "aside_form_item",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 3</AtomWrapper>
        <AtomWrapper className="bg-grey-200">block 4</AtomWrapper>
      </>
    ),
  },
};

export const NotificationCount: Story = {
  args: {
    variant: "notification_count",
    className: "relative",
    children: 2,
  },
};

export const GoodfaceWrapper: Story = {
  args: {
    variant: "goodface_wrapper",
    className: "bg-primary-400 w-[800px] max-w-full",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 w-[280px] flex justify-center items-center">
          280px (sidebar)
        </AtomWrapper>
        <AtomWrapper className="bg-primary-400 flex justify-center items-center">
          auto (main)
        </AtomWrapper>
      </>
    ),
  },
};

export const NavigationAplication: Story = {
  args: {
    variant: "navigation_aplication",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 p-4">Header</AtomWrapper>
        <AtomWrapper className="bg-grey-100 flex-1 p-4">Content</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">Footer</AtomWrapper>
      </>
    ),
  },
};

export const ProductWrapper: Story = {
  args: {
    variant: "product_wrapper",
    className: "bg-primary-400 min-h-[400px] w-[1440px] max-w-full",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 w-[360px] flex justify-center items-center">
          block 2
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 min-h-[100px] flex justify-center items-center">
          block 3
        </AtomWrapper>
      </>
    ),
  },
};

export const ProductMain: Story = {
  args: {
    variant: "product_main",
    className: "bg-primary-400",
    children: <AtomText>Main wrapper</AtomText>,
  },
};

export const ProductSidebar: Story = {
  args: {
    variant: "product_sidebar",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 2
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 3
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 4
        </AtomWrapper>
      </>
    ),
  },
};

export const LogoNavPart: Story = {
  args: {
    variant: "logo_nav_part",
    className: "bg-primary-400",
    children: (
      <>
        <AtomText variant="logo">Logo</AtomText>
      </>
    ),
  },
};

export const NavigationAdditionalContent: Story = {
  args: {
    variant: "navigation_additional_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 2
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 3
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 4
        </AtomWrapper>
      </>
    ),
  },
};

export const ProductMainContent: Story = {
  args: {
    variant: "product_main_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 2
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 3
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 4
        </AtomWrapper>
      </>
    ),
  },
};

export const NavigationItemContent: Story = {
  args: {
    variant: "navigation_item_content",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center">
          block 2
        </AtomWrapper>
      </>
    ),
  },
};

export const PageHeroBlock: Story = {
  args: {
    variant: "page_hero_block",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center p-4">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center p-4">
          block 2
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center p-4">
          block 3
        </AtomWrapper>
      </>
    ),
  },
};

export const SliderSeparatorItem: Story = {
  args: {
    variant: "slider_separator_item",
    className: "bg-primary-400 w-full",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center p-4">
          block 1
        </AtomWrapper>
        <AtomWrapper className="bg-grey-200 flex justify-center items-center p-4">
          block 2
        </AtomWrapper>
      </>
    ),
  },
};

export const SelectDropdownItem: Story = {
  args: {
    variant: "select_dropdown_item",
    className: "bg-primary-200",
    children: (
      <>
        <AtomText>Dropdown Item</AtomText>
        <EyeIcon variant="icon" />
      </>
    ),
  },
};

export const DropdownItemAdditional: Story = {
  args: {
    variant: "dropdown_item_additional",
    children: <AtomText>Additional Info</AtomText>,
  },
};

export const AdditionalContentLists: Story = {
  args: {
    variant: "additional_content_lists",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 p-4">List 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">List 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">List 3</AtomWrapper>
      </>
    ),
  },
};

export const CenterRowWrapper: Story = {
  args: {
    variant: "center_row_wrapper",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 p-4">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">block 3</AtomWrapper>
      </>
    ),
  },
};

export const BurgerWrapper: Story = {
  args: {
    variant: "burger_wrapper",
    className: "bg-primary-400",
    children: <BurgerIcon />,
  },
};

export const CreditPay: Story = {
  args: {
    variant: "credit_pay",
    className: "bg-primary-400",
    children: (
      <>
        <AtomWrapper className="bg-grey-200 p-4">block 1</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">block 2</AtomWrapper>
        <AtomWrapper className="bg-grey-200 p-4">block 3</AtomWrapper>
      </>
    ),
  },
};
