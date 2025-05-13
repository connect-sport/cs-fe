import { z } from "zod";

export const UserDto = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  isOwner: z.boolean(),
  phoneNumber: z.string().optional(),
});

export type UserDto = z.infer<typeof UserDto>;
