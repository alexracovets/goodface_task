"use client";

import { z } from "zod";

export const SchemaFormProxies = z.object({
  count: z.number().min(1),
  period: z.string().min(1),
  location: z.object({
    value: z.string().min(1),
    label: z.string().min(1),
    available: z.number(),
    image: z.string().min(1),
  }),
});
