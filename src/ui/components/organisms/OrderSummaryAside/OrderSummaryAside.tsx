"use client";

import { AtomHR, AtomText, AtomWrapper, Container } from "@atoms";
import {
  FormCheckDiscount,
  AsideProxyValues,
  AsideTotalPrice,
  AsideList,
} from "@molecules";

export const OrderSummaryAside = () => {
  return (
    <AtomWrapper variant="product_sidebar" asChild>
      <aside aria-labelledby="order-summary-title">
        <Container>
          <AtomWrapper variant="additional_content">
            <AtomText variant="aside_title" asChild>
              <h2 id="order-summary-title">Order Summary</h2>
            </AtomText>
            <AsideList />
            <AsideProxyValues />
            <FormCheckDiscount />
            <AtomHR />
            <AsideTotalPrice />
          </AtomWrapper>
        </Container>
      </aside>
    </AtomWrapper>
  );
};
