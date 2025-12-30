"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useEffect } from "react";

import { Form, AtomWrapper, FormDescription } from "@atoms";
import {
  SubscriptionCycle,
  ProxiesCountPick,
  BundleDiscounts,
  LocationSelect,
} from "@molecules";

import { SchemaFormProxies } from "@schemas";
import { useProxyFormData } from "@store";
import { LocationType, PeriodType } from "@types";

export const FormProxies = () => {
  const {
    count,
    period,
    location,
    periodOptions,
    setCount,
    setPeriod,
    setLocation,
  } = useProxyFormData();

  const form = useForm({
    resolver: zodResolver(SchemaFormProxies),
    defaultValues: {
      count: count,
      period: period,
      location: location,
    },
  });

  const formCount = useWatch({
    control: form.control,
    name: "count",
  });
  const formPeriod = useWatch({
    control: form.control,
    name: "period",
  });
  const formLocation = useWatch({
    control: form.control,
    name: "location",
  });
  const availableProxies = useWatch({
    control: form.control,
    name: "location.available",
  });

  useEffect(() => {
    setCount(formCount);
  }, [formCount, setCount]);

  useEffect(() => {
    if (formPeriod) {
      const period = periodOptions.find(
        (option) => option.value === formPeriod
      );
      setPeriod(period?.value || "");
    }
  }, [formPeriod, periodOptions, setPeriod]);

  useEffect(() => {
    if (formLocation) {
      setLocation(formLocation as LocationType);
    }
  }, [formLocation, setLocation]);

  return (
    <Form {...form}>
      <AtomWrapper variant="product_main_content" asChild>
        <form>
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
