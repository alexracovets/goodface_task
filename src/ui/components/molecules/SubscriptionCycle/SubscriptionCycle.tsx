"use client";

import { useFormContext, useWatch } from "react-hook-form";

import {
  FormElementRadio,
  RadioGroupItem,
  AtomFormLabel,
  AtomText,
} from "@atoms";

import { PeriodType } from "@types";

interface SubscriptionCycleProps {
  name: string;
  options: PeriodType[];
}

export const SubscriptionCycle = ({
  name,
  options,
}: SubscriptionCycleProps) => {
  const form = useFormContext();
  const period = useWatch({ control: form.control, name: name });

  return (
    <FormElementRadio
      name={name}
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
            {option.discount > 0 && (
              <AtomText variant="discount">Save {option.discount}%</AtomText>
            )}
          </AtomFormLabel>
        );
      })}
    </FormElementRadio>
  );
};
