import { useQuery, UseQueryOptions, QueryKey } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useAppQuery<
  TQueryFnData,
  TError = AxiosError,
  TData = TQueryFnData
>(
  queryKey: QueryKey,
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery<TQueryFnData, TError, TData>({
    queryKey,
    queryFn,
    ...options,
  });
}
