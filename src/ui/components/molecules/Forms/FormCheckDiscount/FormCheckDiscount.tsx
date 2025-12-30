"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, AtomWrapper, FormElement, AtomButton } from "@atoms";

import { SchemaCheckDiscount } from "@schemas";

export const FormCheckDiscount = () => {
  const form = useForm({
    resolver: zodResolver(SchemaCheckDiscount),
    defaultValues: {
      discountCode: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = () => {
    form.setError("discountCode", {
      message: "API not exist",
    });
  };

  return (
    <Form {...form}>
      <AtomWrapper variant="check_discount_form" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormElement
            name="discountCode"
            placeholder="Add discount code"
            variant="discount_code"
            error={!!form.formState.errors.discountCode}
          />
          <AtomButton type="submit" disabled={isSubmitting} variant="discount">
            Apply
          </AtomButton>
        </form>
      </AtomWrapper>
    </Form>
  );
};
