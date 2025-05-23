import { PHONE_VALIDATION_REGEX } from "@/constants/regex";
import { z } from "zod";

export const articleSchema = z.object({
  title: z.string().min(1, "Tên không được để trống"),
  phoneNumber: z
    .string()
    .min(1, "Số điện thoại không được để trống")
    .max(20, "Số điện thoại không được vượt quá 20 ký tự")
    .refine((val) => {
      if (val) {
        return PHONE_VALIDATION_REGEX.test(val);
      }
      return true;
    }, "Số điện thoại không hợp lệ"),
  address: z.string().min(1, "Địa chỉ không được để trống"),
  description: z.string().min(1, "Mô tả không được để trống"),
  category: z.string().min(1, "Tên không được để trống"),
  levels: z.array(z.array(z.string())).optional(),
});

export const filteringAricleSchema = z.object({
  keyword: z.string().optional(),
  address: z.string().optional(),
  levels: z.array(z.array(z.string())).optional(),
});

export type ArticleFormValues = z.infer<typeof articleSchema>;
export type ArticleFilteringFormValues = z.infer<typeof filteringAricleSchema>;
