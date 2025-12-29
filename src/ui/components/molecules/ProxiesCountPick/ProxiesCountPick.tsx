"use client";

import { useFormContext } from "react-hook-form";

import {
  AtomButton,
  AtomText,
  AtomWrapper,
  FormField,
  Slider,
  EditIcon,
  FormElement,
} from "@atoms";
import { useState } from "react";

interface ProxiesCountPickProps {
  name: string;
  min: number;
  max: number;
  breaker: number;
}

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
              const value = Array.isArray(field.value)
                ? field.value
                : [field.value ?? 0];
              return (
                <AtomWrapper className="flex flex-col gap-[12px]">
                  <Slider
                    value={value}
                    min={min}
                    max={max}
                    onValueChange={(newValue: number[]) => {
                      field.onChange(newValue[0]);
                    }}
                    name={name}
                  />
                  <AtomWrapper variant="slider_separator">
                    {Array.from(
                      { length: Math.floor((max - min) / breaker) + 1 },
                      (_, index) => (
                        <AtomWrapper
                          key={index}
                          style={{
                            width: `${100 / (Math.floor((max - min) / breaker) + 1)}%`,
                          }}
                          variant="slider_separator_item"
                        >
                          <AtomText variant="slider_separator_item">
                            {min + index * breaker}
                          </AtomText>
                        </AtomWrapper>
                      )
                    )}
                  </AtomWrapper>
                </AtomWrapper>
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
        type="button"
        onClick={() => setIsSlider(!isSlider)}
      >
        {isSlider ? (
          <>
            <EditIcon className="w-[16px] h-[16px]" />
            Enter a custom quantity
          </>
        ) : (
          <>Select from the range</>
        )}
      </AtomButton>
    </>
  );
};
