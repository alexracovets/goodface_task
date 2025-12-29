"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

import { Form, AtomText, AtomWrapper } from "@atoms";
import { BundleDiscounts } from "@molecules";

import { SchemaFormProxies } from "@schemas";

export const FormProxies = () => {
  const form = useForm({
    resolver: zodResolver(SchemaFormProxies),
    defaultValues: {
      count: 0,
      period: 1,
      location: "us",
    },
  });

  const onSubmit = useCallback(() => {
    console.log(form.getValues());
  }, [form]);

  return (
    <Form {...form}>
      <AtomWrapper variant="product_main_content" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <AtomWrapper variant="form_part_info">
            <AtomText variant="form_part_title">Select number of IPs</AtomText>
            <AtomText variant="form_part_description">
              Choose the perfect quantity of IPs for your needs effortlessly
            </AtomText>
          </AtomWrapper>
          <BundleDiscounts />
        </form>
      </AtomWrapper>
    </Form>
  );
};
