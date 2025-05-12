import { PaginatedPostListDto } from "@/dtos/post.dto";
import { usePaginatedQuery } from "../usePaginatedUsers";
import { getPostListPaginated } from "@/services/post.service";

export const usePaginatedPostList = (limit: number = 10) =>
  usePaginatedQuery<PaginatedPostListDto>({
    queryKeyPrefix: ["users"],
    queryFn: getPostListPaginated,
    limit,
  });
