import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "Tên không được để trống"),
  alias: z.string().min(1, "Tên không được để trống"),
  id: z.string().optional(),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
