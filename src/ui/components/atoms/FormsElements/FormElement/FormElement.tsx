"use client";

import { useFormContext } from "react-hook-form";

import type React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  AtomInput,
  FormMessage,
} from "@atoms";

import { FormItemType } from "@types";

interface FormElementProps {
  name: string;
  label: string;
  placeholder: string;
  wrapperVariant?: FormItemType["variant"];
  className?: string;
  type?: "number" | "text" | "email" | "tel";
  error?: boolean;
  disabled?: boolean;
  value?: string;
  max?: number;
}

export const FormElement = ({
  name,
  label,
  placeholder,
  wrapperVariant,
  className,
  type = "text",
  error,
  disabled,
  value,
  max,
  ...props
}: FormElementProps) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const validationMaxNumber = (value: string, max: number) => {
          const numberValue = Number(value.replace(/[^0-9+.-]/g, ""));
          let validatedValue = numberValue.toString();
          if (value.length > 1 && value[0] === "0" && value[1] !== ".") {
            validatedValue = numberValue.toString().slice(1);
          } else if (Number(value) > max) {
            validatedValue = max.toString();
          }
          return validatedValue;
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          let letNewValue = "";
          if (max !== undefined && type === "number") {
            letNewValue = validationMaxNumber(value, max);
          }

          field.onChange({
            ...e,
            target: {
              ...e.target,
              value: letNewValue,
            },
          });
        };

        return (
          <FormItem variant={wrapperVariant} className={className}>
            <FormMessage />
            <FormLabel htmlFor={name} {...props}>
              {label}
            </FormLabel>
            <FormControl>
              <AtomInput
                autoComplete="off"
                placeholder={placeholder}
                {...field}
                {...props}
                value={value ?? field.value ?? ""}
                id={name}
                name={name}
                type={type === "number" ? "text" : type}
                max={max}
                error={error}
                disabled={disabled}
                onChange={handleChange}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
