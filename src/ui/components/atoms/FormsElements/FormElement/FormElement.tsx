"use client";

import { VariantProps } from "class-variance-authority";
import { useFormContext } from "react-hook-form";

import type React from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  AtomInput,
  FormMessage,
  variantsAtomInput,
} from "@atoms";

import { FormItemType } from "@types";
import { cn } from "@utils";

interface FormElementProps {
  name: string;
  label?: string;
  placeholder: string;
  wrapperVariant?: FormItemType["variant"];
  variant?: VariantProps<typeof variantsAtomInput>["variant"];
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
  variant,
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
          } else {
            letNewValue = value;
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
          <FormItem
            variant={wrapperVariant}
            className={cn(
              className,
              error ? "pb-[14px] xl:pb-[1.4rem]" : "pb-[0px]"
            )}
          >
            <FormMessage />
            {label && (
              <FormLabel htmlFor={name} {...props}>
                {label}
              </FormLabel>
            )}
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
                inputMode={type === "number" ? "numeric" : undefined}
                max={max}
                error={error}
                disabled={disabled}
                onChange={handleChange}
                variant={variant}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};
