import { z } from "zod";
import { Reponse } from "./response";
import { CategoryDto } from "./category.dto";

export const articleRequest = z.object({
  id: z.string().optional(),
  data: z.object({
    title: z.string().min(1, "Tên không được để trống"),
    category: z.string().min(1, "Tên không được để trống"),
    phoneNumber: z.string().min(1, "Số điện thoại không được để trống"),
    address: z.string().min(1, "Địa chỉ không được để trống"),
    description: z.string().min(1, "Mô tả không được để trống"),
  }),
});

export const ArticleDto = z.object({
  id: z.string(),
  title: z.string(),
  category: CategoryDto,
  phoneNumber: z.string(),
  address: z.string(),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
  _id: z.string(),
});

export const articleListReq = z.object({
  alias: z.string(),
  page: z.number().optional(),
  limit: z.number().optional(),
  keyword: z.string().optional(),
});

export const articleResponse = Reponse.merge(
  z.object({
    data: z.array(ArticleDto),
  })
);

export type ArticleDto = z.infer<typeof ArticleDto>;
export type ArticleReq = z.infer<typeof articleRequest>;
export type ArticleRes = z.infer<typeof articleResponse>;
export type ArticleListReq = z.infer<typeof articleListReq>;
