"use client";

import { AtomWrapper, AtomText } from "@atoms";

import { useProxyFormData } from "@store";
import { formatPrice } from "@utils";

export const AsideProxyValues = () => {
  const { count, location, pricePerIp } = useProxyFormData();

  return (
    <AtomWrapper variant="list" asChild>
      <ul>
        <AtomWrapper variant="aside_form_item" asChild>
          <li>
            <AtomText variant="aside_form_title">Quantity of IP</AtomText>
            <AtomText variant="aside_form_value">{count}</AtomText>
          </li>
        </AtomWrapper>
        <AtomWrapper variant="aside_form_item" asChild>
          <li>
            <AtomText variant="aside_form_title">Location</AtomText>
            <AtomText variant="aside_form_value">{location?.label}</AtomText>
          </li>
        </AtomWrapper>
        <AtomWrapper variant="aside_form_item" asChild>
          <li>
            <AtomText variant="aside_form_title">Price per IP</AtomText>
            <AtomText variant="aside_form_value">
              {formatPrice(pricePerIp)}
            </AtomText>
          </li>
        </AtomWrapper>
      </ul>
    </AtomWrapper>
  );
};
