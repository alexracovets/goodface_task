"use client";

import { useFormContext } from "react-hook-form";

import {
  FormMessage,
  FormControl,
  RadioGroup,
  FormLabel,
  FormField,
  FormItem,
} from "@atoms";

import { FormItemType } from "@types";

interface FormElementRadioProps {
  name: string;
  label: string;
  wrapperVariant?: FormItemType["variant"];
  className?: string;
  children: React.ReactNode;
}

export const FormElementRadio = ({
  name,
  label,
  wrapperVariant,
  className,
  children,
}: FormElementRadioProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem variant={wrapperVariant} className={className}>
            <FormMessage />
            <FormLabel asChild className="cursor-auto">
              <p>{label}</p>
            </FormLabel>
            <FormControl>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                onBlur={field.onBlur}
                id={name}
                name={name}
              >
                {children}
              </RadioGroup>
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
