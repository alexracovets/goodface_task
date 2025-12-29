import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

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
  "flex items-center justify-between gap-x-[16px] w-full focus-visible:border-ring focus-visible:ring-ring/50 transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90",
  {
    variants: {
      variant: {
        default: cn(
          "text-[14px] text-grey-800 leading-[20px] font-[500] pl-[12px] pr-[8px] py-[4px]",
          "[&[data-state=open]]:text-primary-500 [&[data-state=open]]:bg-primary-50 rounded-[4px]"
        ),
        discounts: cn(
          "text-[14px] text-grey-800 leading-[20px] font-[500] pr-[8px] py-[4px] w-fit gap-x-[4px]",
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
  "flex items-center justify-between gap-x-[16px]",
  {
    variants: {
      variantInner: {
        default: "text-[14px] text-grey-800 leading-[20px] font-[500]",
        discounts: "text-[14px] text-grey-800 leading-[20px] font-[500]",
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
        <ChevronRightIcon className="w-[20px] h-[20px] text-grey-600 translate-y-0.5 transition-transform duration-200" />
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
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-[4px] pb-[12px]", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
