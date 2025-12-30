"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const onSubmit = (data: z.infer<typeof SchemaCheckDiscount>) => {
    console.log(data);
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
