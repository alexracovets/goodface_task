"use client";

import { useFormContext, useWatch } from "react-hook-form";

import {
  FormElementRadio,
  RadioGroupItem,
  AtomFormLabel,
  AtomText,
} from "@atoms";

export const SubscriptionCycle = () => {
  const form = useFormContext();
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
      discount: 20,
      id: "2",
    },
  ];

  return (
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
            {option.discount && (
              <AtomText variant="discount">Save {option.discount}%</AtomText>
            )}
          </AtomFormLabel>
        );
      })}
    </FormElementRadio>
  );
};
