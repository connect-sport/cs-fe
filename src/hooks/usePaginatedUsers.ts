import { useState } from "react";
import { QueryKey } from "@tanstack/react-query";
import { useAppQuery } from "./useAppQuery";

type UsePaginatedQueryOptions<T> = {
  queryKeyPrefix: QueryKey;
  queryFn: (page: number, limit: number) => Promise<T>;
  limit?: number;
};

export function usePaginatedQuery<T>({
  queryKeyPrefix,
  queryFn,
  limit = 10,
}: UsePaginatedQueryOptions<T & { total: number }>) {
  const [page, setPage] = useState(1);

  const query = useAppQuery(
    [...queryKeyPrefix, page],
    () => queryFn(page, limit),
    { staleTime: Infinity }
  );

  const totalPages = query.data ? Math.ceil(query.data.total / limit) : 1;

  return {
    ...query,
    page,
    setPage,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
    nextPage: () => setPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setPage((p) => Math.max(p - 1, 1)),
  };
}
