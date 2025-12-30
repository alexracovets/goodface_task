"use client";

export const formatPrice = (price: number) => {
  return price > 0 ? `$${price.toFixed(2)}` : "-";
};
