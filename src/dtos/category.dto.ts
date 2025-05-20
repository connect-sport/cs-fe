import { z } from "zod";
import { PaginatedDto } from "./paginated.dto";
import { Reponse } from "./response";

export const deleteCategoryRequest = z.object({
  id: z.string(),
});

export const categoryRequest = deleteCategoryRequest.extend({
  data: z.object({
    name: z.string().min(1, "Tên không được để trống"),
    alias: z.string().min(1, "Tên không được để trống"),
  }),
});

export const CategoryDto = z.object({
  id: z.string(),
  name: z.string(),
  alias: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  __v: z.number(),
  _id: z.string(),
});

export const categoryResponse = Reponse.merge(
  z.object({
    data: CategoryDto,
  })
);

export const PaginatedCategoryListDto = z
  .object({
    data: z.array(CategoryDto),
  })
  .merge(PaginatedDto);

export type CategoryDto = z.infer<typeof CategoryDto>;
export type CreateCategoryReq = z.infer<typeof categoryRequest>;
export type UpdateCategoryReq = z.infer<typeof categoryRequest>;
export type DeleteCategoryReq = z.infer<typeof deleteCategoryRequest>;
export type CategoryRes = z.infer<typeof categoryResponse>;
export type PaginatedCategoryListDto = z.infer<typeof PaginatedCategoryListDto>;
