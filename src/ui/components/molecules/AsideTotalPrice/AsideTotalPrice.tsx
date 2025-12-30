"use client";

import { AtomWrapper, AtomText } from "@atoms";

import { useProxyFormData } from "@store";
import { formatPrice } from "@utils";

export const AsideTotalPrice = () => {
  const { totalPrice, subscriptionDiscount } = useProxyFormData();

  const subDiscount = subscriptionDiscount
    ? (totalPrice * subscriptionDiscount) / 100
    : 0;

  const finalPrice = totalPrice - subDiscount;
  console.log(subscriptionDiscount);
  return (
    <AtomWrapper variant="aside_list_block" asChild>
      <ul>
        <AtomWrapper variant="aside_form_item" asChild>
          <li>
            <AtomText variant="aside_form_total">Total</AtomText>
            <AtomText variant="aside_form_total_value">
              {formatPrice(finalPrice)}
            </AtomText>
          </li>
        </AtomWrapper>
      </ul>
    </AtomWrapper>
  );
};
