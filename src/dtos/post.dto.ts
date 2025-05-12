import { z } from "zod";
import { PaginatedDto } from "./paginated.dto";

export const PostDto = z.object({
  id: z.string(),
  title: z.string(),
});

export const PaginatedPostListDto = z
  .object({
    data: z.array(PostDto),
  })
  .merge(PaginatedDto);

export type PostDto = z.infer<typeof PostDto>;
export type PaginatedPostListDto = z.infer<typeof PaginatedPostListDto>;
