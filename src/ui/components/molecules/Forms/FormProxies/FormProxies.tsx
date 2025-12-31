"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { memo, useMemo } from "react";

import { Form, AtomWrapper, FormDescription } from "@atoms";
import {
  SubscriptionCycle,
  ProxiesCountPick,
  BundleDiscounts,
  LocationSelect,
} from "@molecules";

import { SchemaFormProxies } from "@schemas";
import { useProxyCalculate } from "@hooks";
import { useProxyFormData } from "@store";
import { PeriodType } from "@types";

const FormContext = memo(() => {
  useProxyCalculate();
  return null;
});

FormContext.displayName = "FormContext";

export const FormProxies = () => {
  const { count, period, location, periodOptions } = useProxyFormData();

  const form = useForm({
    resolver: zodResolver(SchemaFormProxies),
    defaultValues: {
      count: count,
      period: period,
      location: location,
    },
  });

  const checkMaxProxies = useMemo(() => {
    return (count: number) => (count > 1000 ? 1000 : count);
  }, []);

  const maxProxies = useMemo(() => {
    return checkMaxProxies(form.getValues("location.available") || 0);
  }, [form, checkMaxProxies]);

  return (
    <Form {...form}>
      <AtomWrapper variant="product_main_content" asChild>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FormContext />
          <FormDescription
            title="Select number of IPs"
            description="Choose the perfect quantity of IPs for your needs effortlessly"
            formDescriptionId="proxies"
          />
          <BundleDiscounts />
          <ProxiesCountPick
            name="count"
            min={0}
            max={maxProxies}
            breaker={100}
          />
          <SubscriptionCycle
            name="period"
            options={periodOptions as PeriodType[]}
          />
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
