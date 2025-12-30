"use client";

import { z } from "zod";

export const SchemaCheckDiscount = z.object({
  discountCode: z.string().min(5, "Min 5 characters"),
});
