"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@atoms";
import { TableBundleDiscounts } from "@molecules";

export const BundleDiscounts = () => {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
        >
            <AccordionItem value="1">
                <AccordionTrigger
                    variant="discounts"
                    variantInner="discounts"
                >
                    Bundle discounts
                </AccordionTrigger>
                <AccordionContent>
                    <TableBundleDiscounts />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};