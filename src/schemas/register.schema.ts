import {
  EMAIL_VALIDATION_REGEX,
  PHONE_VALIDATION_REGEX,
} from "@/constants/regex";
import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Tên đăng nhập phải có ít nhất 3 ký tự")
      .max(20, "Tên đăng nhập không được vượt quá 20 ký tự"),
    email: z.string().refine((val) => {
      if (val) {
        return EMAIL_VALIDATION_REGEX.test(val);
      }
      return true;
    }, "Định dạng email không hợp lệ"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    confirmPassword: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    isOwner: z.boolean(),
    phoneNumber: z
      .string()
      .optional()
      .refine((val) => {
        if (val) {
          return PHONE_VALIDATION_REGEX.test(val);
        }
        return true;
      }, "Số điện thoại không hợp lệ"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Mật khẩu xác nhận không khớp",
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;
