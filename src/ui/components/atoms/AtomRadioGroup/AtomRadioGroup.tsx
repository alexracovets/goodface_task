import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cn } from "@utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "group bg-grey-300 size-[16px] xl:size-[1.6rem] rounded-full border-none outline-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        "data-[state=checked]:bg-primary-500",
        "ease-in-out duration-300",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center border-none! outline-none!"
      >
        <span
          className={cn(
            "bg-base-white absolute top-1/2 left-1/2 size-[14px] xl:size-[1.4rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
            "group-data-[state=checked]:size-[6px] xl:group-data-[state=checked]:size-[0.6rem]",
            "ease-in-out duration-300"
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
