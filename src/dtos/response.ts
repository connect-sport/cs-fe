import { z } from "zod";

export const Reponse = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any(),
});

export type ResponseDto = z.infer<typeof Reponse>;
