"use client";

import { useFormContext } from "react-hook-form";
import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@atoms";

import {
  FormControl,
  FormMessage,
  AtomWrapper,
  AtomButton,
  FormField,
  FormLabel,
  AtomImage,
  FormItem,
} from "@atoms";

import { FormItemType, LocationType } from "@types";
import { cn } from "@utils";

interface FormElementSelectProps {
  name: string;
  label: string;
  placeholder: string;
  wrapperVariant?: FormItemType["variant"];
  className?: string;
  options: LocationType[];
}

export const FormElementSelect = ({
  name,
  label,
  wrapperVariant,
  className,
  placeholder,
  options,
}: FormElementSelectProps) => {
  const form = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selectedOption = field.value
          ? options.find((opt) => opt.value === field.value.value) ||
            field.value
          : null;

        return (
          <FormItem variant={wrapperVariant} className={className}>
            <FormMessage />
            <FormLabel asChild className="cursor-auto">
              <p>{label}</p>
            </FormLabel>
            <FormControl>
              <Select.Root
                value={selectedOption?.value}
                onValueChange={(value) => {
                  const option = options.find((opt) => opt.value === value);
                  if (option) {
                    field.onChange(option);
                  }
                }}
                onOpenChange={setOpen}
                disabled={options.length === 0}
              >
                <Select.Trigger aria-label={label} asChild>
                  <AtomButton type="button" variant="default">
                    <Select.Value placeholder={placeholder} asChild>
                      <div className="flex items-center gap-x-[8px] xl:gap-x-[0.8rem]">
                        {selectedOption?.image ? (
                          <AtomImage
                            src={selectedOption.image}
                            alt={selectedOption.label || ""}
                            variant="location"
                          />
                        ) : null}
                        <span>{selectedOption?.label || placeholder}</span>
                      </div>
                    </Select.Value>
                    <ChevronDownIcon
                      variant="icon"
                      className={cn(
                        "text-grey-700 transition-all duration-300 ease-in-out",
                        open && "rotate-180"
                      )}
                    />
                  </AtomButton>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content
                    className={cn(
                      "z-50 max-h-[300px] overflow-hidden",
                      "bg-base-white border border-grey-300 rounded-[4px] xl:rounded-[0.4rem]",
                      "shadow-lg"
                    )}
                    style={{ minWidth: "var(--radix-select-trigger-width)" }}
                    position="popper"
                    sideOffset={4}
                  >
                    <Select.Viewport className="p-[4px] xl:p-[0.4rem]">
                      {options.map((option) => (
                        <Select.Item
                          key={option.value}
                          value={option.value}
                          asChild
                        >
                          <AtomWrapper
                            aria-selected={option === selectedOption}
                            variant="select_dropdown_item"
                            className={cn(
                              option.available === 0 && "grayscale"
                            )}
                          >
                            <AtomWrapper variant="center_row_wrapper">
                              <AtomImage
                                src={option.image}
                                alt={option.label}
                                variant="location"
                              />
                              {option.label}
                            </AtomWrapper>
                            <AtomWrapper variant="dropdown_item_additional">
                              <p>{option.available} available</p>
                            </AtomWrapper>
                          </AtomWrapper>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
