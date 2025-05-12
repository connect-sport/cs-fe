import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, "The username must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
