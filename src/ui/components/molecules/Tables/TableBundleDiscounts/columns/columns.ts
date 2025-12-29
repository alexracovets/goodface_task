"use client";

import { TableHelperColumnText } from "@atoms";

export const columns = [
    TableHelperColumnText({
        name: "name",
        label: "IPs",
        size: 98,
        align: "left",
    }),
    TableHelperColumnText({
        name: "priceFirst",
        label: "10–24",
        size: 133.5,
    }),
    TableHelperColumnText({
        name: "priceSecond",
        label: "25–49",
        size: 133.5,
    }),
    TableHelperColumnText({
        name: "priceThird",
        label: "50–99",
        size: 133.5,
    }),
    TableHelperColumnText({
        name: "priceFourth",
        label: "100+",
        size: 133.5,
    }),
];