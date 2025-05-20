import { EMAIL_VALIDATION_REGEX } from "@/constants/regex";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().refine((val) => {
    if (val) {
      return EMAIL_VALIDATION_REGEX.test(val);
    }
    return true;
  }, "Định dạng email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
