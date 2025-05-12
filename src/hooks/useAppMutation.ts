import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export function useAppMutation<TData, TVariables, TError = AxiosError>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables>
) {
  return useMutation<TData, TError, TVariables>({
    mutationFn,
    ...options,
  });
}
// This custom hook is a wrapper around the useMutation hook from react-query.
// It allows you to define a mutation function and provides options for handling the mutation's state.
