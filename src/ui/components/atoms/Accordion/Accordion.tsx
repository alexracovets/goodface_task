import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@utils";
import { cva, VariantProps } from "class-variance-authority";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(className)}
      {...props}
    />
  );
}

const variantsAccordionTrigger = cva(
  "flex items-center justify-between gap-x-[16px] w-full outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90 transition-all xl:gap-x-[1.6rem]",
  {
    variants: {
      variant: {
        default: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px] flex items-center justify-between pl-[12px] pr-[8px] py-[4px] rounded-[4px]",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:pl-[1.2rem] xl:pr-[0.8rem] xl:py-[0.4rem] xl:rounded-[0.4rem]",
          "[&[data-state=open]]:text-primary-500 [&[data-state=open]]:bg-primary-50"
        ),
        discounts: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px] flex items-center justify-between gap-x-[4px] pr-[8px] py-[4px] w-fit",
          "xl:text-[1.4rem] xl:leading-[2rem] xl:gap-x-[0.4rem] xl:pr-[0.8rem] xl:py-[0.4rem]",
          "[&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-270"
        ),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const variantsAccordionTriggerInner = cva(
  "flex items-center justify-between gap-x-[16px] xl:gap-x-[1.6rem]",
  {
    variants: {
      variantInner: {
        default: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px]",
          "xl:text-[1.4rem] xl:leading-[2rem]"
        ),
        discounts: cn(
          "text-[14px] text-grey-800 font-[500] leading-[20px]",
          "xl:text-[1.4rem] xl:leading-[2rem]"
        ),
      },
    },
  }
);

function AccordionTrigger({
  className,
  children,
  variant = "default",
  variantInner = "default",
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  variant?: VariantProps<typeof variantsAccordionTrigger>["variant"];
  variantInner?: VariantProps<
    typeof variantsAccordionTriggerInner
  >["variantInner"];
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(variantsAccordionTrigger({ variant }), className)}
        {...props}
      >
        <div className={variantsAccordionTriggerInner({ variantInner })}>
          {children}
        </div>
        <ChevronRightIcon className="w-[20px] xl:w-[2rem] h-[20px] xl:h-[2rem] text-grey-600 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
      {...props}
    >
      <div className={cn("pt-[4px] xl:pt-[0.4rem] pb-[12px] xl:pb-[1.2rem]", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
