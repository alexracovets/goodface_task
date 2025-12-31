"use client";

import { useFormContext } from "react-hook-form";
import { useState, useEffect } from "react";

import {
  AtomButton,
  AtomText,
  AtomWrapper,
  FormField,
  Slider,
  EditIcon,
  FormElement,
} from "@atoms";

interface ProxiesCountPickProps {
  name: string;
  min: number;
  max: number;
  breaker: number;
}

interface SliderFieldProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  breaker: number;
  name: string;
}

const SliderField = ({
  value,
  onChange,
  min,
  max,
  breaker,
  name,
}: SliderFieldProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <AtomWrapper className="flex flex-col gap-[12px] xl:gap-[1.2rem]">
      <Slider
        value={[localValue]}
        min={min}
        max={max}
        onValueChange={(newValue: number[]) => {
          setLocalValue(newValue[0]);
        }}
        onValueCommit={(newValue: number[]) => {
          onChange(newValue[0]);
        }}
        name={name}
        aria-label={`Proxies count, from ${min} to ${max}`}
      />
      <AtomWrapper className="relative w-full h-[20px] xl:h-8">
        {Array.from(
          {
            length: Math.floor((max - min) / breaker) + 1,
          },
          (_, index) => {
            const value = min + index * breaker;
            const position = ((value - min) / (max - min)) * 100;
            const thumbOffset = (position * 22) / 100;
            return (
              <AtomWrapper
                key={index}
                style={{
                  position: "absolute",
                  left: `calc(${position}% - ${thumbOffset}px + 11px)`,
                  transform: "translateX(-50%)",
                }}
                variant="slider_separator_item"
                className="justify-center"
              >
                <AtomText variant="slider_separator_item">{value}</AtomText>
              </AtomWrapper>
            );
          }
        )}
      </AtomWrapper>
    </AtomWrapper>
  );
};

export const ProxiesCountPick = ({
  name,
  min,
  max,
  breaker,
}: ProxiesCountPickProps) => {
  const form = useFormContext();
  const [isSlider, setIsSlider] = useState(true);

  return (
    <>
      <>
        {isSlider ? (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
              return (
                <SliderField
                  value={field.value}
                  onChange={field.onChange}
                  min={min}
                  max={max}
                  breaker={breaker}
                  name={name}
                />
              );
            }}
          />
        ) : (
          <FormElement
            name={name}
            label="Custom quantity"
            placeholder="0"
            wrapperVariant="default"
            type="number"
            max={max}
            error={!!form.formState.errors[name]}
          />
        )}
      </>

      <AtomButton
        variant="destructive"
        aria-label={
          isSlider ? "Enter a custom quantity" : "Select from the range"
        }
        type="button"
        onClick={() => setIsSlider((prev) => !prev)}
      >
        {isSlider ? (
          <>
            <EditIcon />
            Enter a custom quantity
          </>
        ) : (
          <>Select from the range</>
        )}
      </AtomButton>
    </>
  );
};
