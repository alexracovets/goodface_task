"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useCallback } from "react";

import { BundleDiscounts, ProxiesCountPick } from "@molecules";
import {
  Form,
  AtomWrapper,
  FormDescription,
  FormElementRadio,
  RadioGroupItem,
  AtomFormLabel,
} from "@atoms";

import { SchemaFormProxies } from "@schemas";

export const FormProxies = () => {
  const form = useForm({
    resolver: zodResolver(SchemaFormProxies),
    defaultValues: {
      count: 0,
      period: "3",
      location: "us",
    },
  });
  const period = useWatch({ control: form.control, name: "period" });

  const options = [
    {
      value: "1",
      label: "1 month",
      id: "0",
    },
    {
      value: "3",
      label: "3 months",
      id: "1",
    },
    {
      value: "12",
      label: "12 months",
      id: "2",
    },
  ];

  const onSubmit = useCallback(() => {
    console.log(form.getValues());
  }, [form]);

  return (
    <Form {...form}>
      <AtomWrapper variant="product_main_content" asChild>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormDescription
            title="Select number of IPs"
            description="Choose the perfect quantity of IPs for your needs effortlessly"
            formDescriptionId="proxies"
          />
          <BundleDiscounts />
          <ProxiesCountPick name="count" min={0} max={1000} breaker={100} />
          <FormElementRadio
            name="period"
            label="Subscription Cycle"
            wrapperVariant="default"
          >
            {options.map((option) => {
              return (
                <AtomFormLabel
                  key={option.id}
                  htmlFor={option.value}
                  variant="radio_label"
                  data-active={period === option.value}
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  {option.label}
                </AtomFormLabel>
              );
            })}
          </FormElementRadio>
        </form>
      </AtomWrapper>
    </Form>
  );
};
