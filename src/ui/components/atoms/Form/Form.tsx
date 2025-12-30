"use client";

import { cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import {
  type ControllerProps,
  type FieldValues,
  useFormContext,
  type FieldPath,
  FormProvider,
  useFormState,
  Controller,
} from "react-hook-form";

import { AtomFormLabel, AtomWrapper, AtomText } from "@atoms";

import { FormItemType, FormLabelType } from "@types";
import { cn } from "@utils";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

export const formItemVariants = cva("", {
  variants: {
    variant: {
      default: "flex flex-col gap-[8px] w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function FormItem({ className, variant = "default", ...props }: FormItemType) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn(formItemVariants({ variant, className }))}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

export const variantsFormLabel = cva(
  "data-[error=true]:text-destructive cursor-pointer w-fit",
  {
    variants: {
      variant: {
        default:
          "text-[14px] text-grey-800 font-[700] leading-[20px] tracking-[0.2px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function FormLabel({
  variant = "default",
  className,
  ...props
}: FormLabelType) {
  const { error, formItemId } = useFormField();

  return (
    <AtomFormLabel
      data-slot="form-label"
      data-error={!!error}
      className={cn(variantsFormLabel({ variant, className }))}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
}

interface FormDescriptionProps {
  title: string;
  description: string;
  formDescriptionId: string;
}

function FormDescription({
  title,
  description,
  formDescriptionId,
}: FormDescriptionProps) {
  return (
    <AtomWrapper
      variant="form_part_info"
      data-slot="form-description"
      id={formDescriptionId}
    >
      <AtomText variant="form_part_title" asChild>
        <h2>{title}</h2>
      </AtomText>
      <AtomText variant="form_part_description">{description}</AtomText>
    </AtomWrapper>
  );
}

function FormMessage({ className, ...props }: React.ComponentProps<"p">) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;

  if (!body) {
    return null;
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
