"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { DragIcon } from "@atoms";
import { cn } from "@utils";

interface SliderProps extends React.ComponentProps<
  typeof SliderPrimitive.Root
> {
  "aria-label"?: string;
}

export const Slider = ({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  "aria-label": ariaLabel,
  ...props
}: SliderProps) => {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  // Генеруємо aria-label для кожного thumb, якщо не передано явно
  const getThumbAriaLabel = (index: number, thumbValue: number) => {
    if (ariaLabel) {
      return _values.length > 1
        ? `${ariaLabel} ${index + 1}, value ${thumbValue}`
        : ariaLabel;
    }
    // Автоматична генерація на основі значення та діапазону
    return `Slider value ${thumbValue} of ${min} to ${max}`;
  };

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full pt-[40px] xl:pt-[4rem] touch-none items-center select-none data-disabled:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-grey-100 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-[8px] xl:data-[orientation=horizontal]:h-[0.8rem] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[8px] xl:data-[orientation=vertical]:w-[0.8rem] cursor-pointer"
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
        Array.from({ length: _values.length }, (_, index) => {
          const thumbValue = _values[index] ?? min;
          return (
            <SliderPrimitive.Thumb
              data-slot="slider-thumb"
              key={index}
              aria-label={getThumbAriaLabel(index, thumbValue)}
              className="flex justify-center items-center disabled:pointer-events-none disabled:opacity-50 border-[1px] xl:border-[0.1rem] border-primary-500 rounded-[4px] xl:rounded-[0.4rem] relative cursor-pointer"
            >
              <div className="text-[16px] xl:text-[1.6rem] absolute bottom-[calc(100%+12px)] xl:bottom-[calc(100%+1.2rem)] left-[50%] translate-x-[-50%] px-[8px] xl:px-[0.8rem] py-[4px] xl:py-[0.4rem] bg-primary-500 text-white rounded-[4px] xl:rounded-[0.4rem] transition-all ease-in-out whitespace-nowrap">
                {thumbValue} IP
              </div>
              <div className="absolute bottom-[calc(100%)] left-[50%] translate-x-[-50%]">
                <div className="w-[18px] xl:w-[1.8rem] h-[12px] xl:h-[1.2rem]">
                  <svg
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
              </div>
              <DragIcon />
            </SliderPrimitive.Thumb>
          );
        })}
    </SliderPrimitive.Root>
  );
};
