"use client";

import { z } from "zod";

export const SchemaFormProxies = z.object({
    count: z.number().min(1),
    period: z.number().min(1),
    location: z.string().min(1),
});