import { z } from "zod";

export const PaginatedDto = z.object({
  total: z.number().optional(),
  page: z.number(),
  limit: z.number(),
});

export type PaginatedDto = z.infer<typeof PaginatedDto>;
