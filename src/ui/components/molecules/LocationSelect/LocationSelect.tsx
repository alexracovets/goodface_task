"use client";

import { FormElementSelect } from "@atoms";

import { FormItemType } from "@types";

const locations = [
  {
    value: "uk",
    label: "United Kingdom",
    available: 1000,
    image: "/png/flags/uk.png",
  },
  {
    value: "au",
    label: "Australia",
    available: 120,
    image: "/png/flags/au.png",
  },
  {
    value: "br",
    label: "Brazil",
    available: 468,
    image: "/png/flags/br.png",
  },
  {
    value: "ca",
    label: "Canada",
    available: 0,
    image: "/png/flags/ca.png",
  },
  {
    value: "de",
    label: "Germany",
    available: 9862,
    image: "/png/flags/de.png",
  },
  {
    value: "es",
    label: "Spain",
    available: 3802,
    image: "/png/flags/es.png",
  },
];

interface LocationSelectProps {
  name: string;
  label: string;
  placeholder: string;
  wrapperVariant?: FormItemType["variant"];
}

export const LocationSelect = ({
  name,
  label,
  placeholder,
  wrapperVariant,
}: LocationSelectProps) => {
  return (
    <FormElementSelect
      name={name}
      label={label}
      placeholder={placeholder}
      wrapperVariant={wrapperVariant}
      options={locations}
    />
  );
};
