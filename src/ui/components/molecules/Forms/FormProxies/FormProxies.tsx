"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useCallback } from "react";

import { Form, AtomWrapper, FormDescription } from "@atoms";
import {
  SubscriptionCycle,
  ProxiesCountPick,
  BundleDiscounts,
  LocationSelect,
} from "@molecules";

import { SchemaFormProxies } from "@schemas";

export const FormProxies = () => {
  const form = useForm({
    resolver: zodResolver(SchemaFormProxies),
    defaultValues: {
      count: 0,
      period: "3",
      location: {
        value: "uk",
        label: "United Kingdom",
        available: 777,
        image: "/png/flags/uk.png",
      },
    },
  });
  const availableProxies = useWatch({
    control: form.control,
    name: "location.available",
  });

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
          <ProxiesCountPick
            name="count"
            min={0}
            max={
              availableProxies && availableProxies >= 1000
                ? 1000
                : availableProxies || 0
            }
            breaker={100}
          />
          <SubscriptionCycle />
          <LocationSelect
            name="location"
            label="Select location"
            placeholder="Select location"
          />
        </form>
      </AtomWrapper>
    </Form>
  );
};
