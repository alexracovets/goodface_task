import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

import { LocationType, PeriodType } from "@types";

const calculatePricePerIp = (count: number): number => {
  if (count >= 100) return 2.25;
  if (count >= 50) return 2.5;
  if (count >= 25) return 2.75;
  if (count >= 10) return 3.0;
  return 0;
};

interface ProxyFormDataStoreType {
  count: number;
  period: string;
  location: LocationType;
  pricePerIp: number;
  totalPrice: number;
  subscriptionDiscount: number;
  periodOptions: PeriodType[];
  setCount: (count: number) => void;
  setPeriod: (period: string) => void;
  setLocation: (location: LocationType) => void;
  setPricePerIp: (pricePerIp: number) => void;
}

const periodOptions: PeriodType[] = [
  {
    value: "1",
    label: "1 month",
    id: "0",
    discount: 0,
  },
  {
    value: "3",
    label: "3 months",
    id: "1",
    discount: 0,
  },
  {
    value: "12",
    label: "12 months",
    discount: 20,
    id: "2",
  },
];

const initialPeriod = "3";
const initialPeriodOption = periodOptions.find(
  (option) => option.value === initialPeriod
);

export const useProxyFormData = create<ProxyFormDataStoreType>()(
  immer((set) => ({
    count: 0,
    period: initialPeriod,
    location: {
      value: "uk",
      label: "United Kingdom",
      available: 777,
      image: "/png/flags/uk.png",
    },
    pricePerIp: 0,
    totalPrice: 0,
    subscriptionDiscount: initialPeriodOption?.discount || 0,
    periodOptions,
    setCount: (count: number) =>
      set((state) => {
        state.count = count;
        state.pricePerIp = calculatePricePerIp(count);
        state.totalPrice = count * state.pricePerIp;
      }),
    setPeriod: (period: string) =>
      set((state) => {
        state.period = period;
        const periodOption = state.periodOptions.find(
          (option) => option.value === period
        );
        state.subscriptionDiscount = periodOption?.discount || 0;
      }),
    setLocation: (location: LocationType) =>
      set((state) => {
        state.location = location;
        if (state.location.available > 0) {
          state.pricePerIp = calculatePricePerIp(state.count);
          state.totalPrice = state.count * state.pricePerIp;
        } else {
          state.totalPrice = 0;
        }
      }),
    setPricePerIp: (pricePerIp: number) =>
      set((state) => {
        state.pricePerIp = pricePerIp;
        state.totalPrice = state.count * pricePerIp;
      }),
  }))
);
