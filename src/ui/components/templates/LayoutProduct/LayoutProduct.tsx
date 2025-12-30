"use client";

import { HeaderProduct, OrderSummaryAside } from "@organisms";
import { AtomWrapper, CustomScroll } from "@atoms";

import { ChildrenType } from "@types";

export const LayoutProduct = ({ children }: ChildrenType) => {
  return (
    <CustomScroll>
      <AtomWrapper variant="product_main" asChild>
        <main className="w-full flex-1 flex flex-col min-h-0">
          <HeaderProduct />
          <AtomWrapper variant="product_wrapper">
            {children}
            <OrderSummaryAside />
          </AtomWrapper>
          <footer className="hidden"></footer>
        </main>
      </AtomWrapper>
    </CustomScroll>
  );
};
