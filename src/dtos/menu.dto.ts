import { z } from "zod";
import { Reponse } from "./response";

export const menuRequest = z.object({
  id: z.string().optional(),
  data: z.object({
    name: z.string().min(1, "Tên không được để trống"),
    alias: z.string().min(1, "Tên không được để trống"),
  }),
});

export const MenuDto = z.object({
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
    data: MenuDto,
  })
);

export type MenuDto = z.infer<typeof MenuDto>;
export type CreateMenuReq = z.infer<typeof menuRequest>;
export type UpdateMenuReq = z.infer<typeof menuRequest>;
export type MenuRes = z.infer<typeof categoryResponse>;
