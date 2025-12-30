"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";

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
                <AtomWrapper className="flex flex-col gap-[12px] xl:gap-[1.2rem]">
                  <Slider
                    value={value}
                    min={min}
                    max={max}
                    onValueChange={(newValue: number[]) => {
                      field.onChange(newValue[0]);
                    }}
                    name={name}
                  />
                  <AtomWrapper
                    variant="slider_separator"
                    className="relative w-full h-[20px] xl:h-[2rem]"
                  >
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
                            className="!justify-center"
                          >
                            <AtomText variant="slider_separator_item">
                              {value}
                            </AtomText>
                          </AtomWrapper>
                        );
                      }
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
            <EditIcon className="w-[16px] xl:w-[1.6rem] h-[16px] xl:h-[1.6rem]" />
            Enter a custom quantity
          </>
        ) : (
          <>Select from the range</>
        )}
      </AtomButton>
    </>
  );
};
