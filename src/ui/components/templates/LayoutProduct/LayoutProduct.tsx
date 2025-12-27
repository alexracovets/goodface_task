"use client";

import { HeaderProduct, OrderSummaryAside } from "@organisms";
import { AtomWrapper } from "@atoms";

import { ChildrenType } from "@types";

export const LayoutProduct = ({ children }: ChildrenType) => {
    return (
        <AtomWrapper variant="product_main" asChild>
            <main>
                <HeaderProduct />
                <AtomWrapper variant="product_wrapper">
                    <div className="w-full">
                        {children}
                    </div>
                    <OrderSummaryAside />
                </AtomWrapper>
                <footer></footer>
            </main>
        </AtomWrapper>
    );
};