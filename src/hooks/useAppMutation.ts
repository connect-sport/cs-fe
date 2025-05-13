import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useAppMutation<TData, TVariables, TError = AxiosError>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables>
) {
  const mutation = useMutation<TData, TError, TVariables>({
    mutationFn,
    ...options,
  });

  const {
    mutate,
    mutateAsync,
    status,
    isSuccess,
    isError,
    error,
    data,
    reset,
  } = mutation;

  return {
    mutate,
    mutateAsync,
    isLoading: status === "pending",
    isIdle: status === "idle",
    isSuccess,
    isError,
    error,
    data,
    reset,
  };
}
// This custom hook is a wrapper around the useMutation hook from react-query.
// It allows you to define a mutation function and provides options for handling the mutation's state.
