"use client";

import { AtomWrapper } from "@atoms";

export const OrderSummaryAside = () => {
    return (
        <AtomWrapper variant="product_sidebar" asChild>
            <aside aria-label="Order Summary">
                <h2>Order Summary</h2>
            </aside>
        </AtomWrapper>
    );
};