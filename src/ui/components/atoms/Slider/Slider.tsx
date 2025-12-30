"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { DragIcon } from "@atoms";
import { cn } from "@utils";

export const Slider = ({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) => {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full pt-[40px] touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-grey-100 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-[8px] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[8px] cursor-pointer"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary-400 absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {max > 0 &&
        Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb
            data-slot="slider-thumb"
            key={index}
            className="flex justify-center items-center disabled:pointer-events-none disabled:opacity-50 border-[1px] border-primary-500 rounded-[4px] relative cursor-pointer"
          >
            <div className="absolute bottom-[calc(100%+12px)] left-[50%] translate-x-[-50%] px-[8px] py-[4px] bg-primary-500 text-white rounded-[4px] transition-all ease-in-out whitespace-nowrap">
              {value + " IP"}
            </div>
            <div className="absolute bottom-[calc(100%)] left-[50%] translate-x-[-50%]">
              <svg
                width="18px"
                height="12px"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <path
                  d="M 12 6 C 12 9.314 14.686 12 18 12 L 0 12 C 3.314 12 6 9.314 6 6 C 6 2.703 3.34 0.027 0.051 0 L 18 0 C 14.7 0 12 2.88 12 6 Z"
                  fill="#5547EB"
                ></path>
              </svg>
            </div>
            <DragIcon className="w-[22px] h-[22px]" />
          </SliderPrimitive.Thumb>
        ))}
    </SliderPrimitive.Root>
  );
};
