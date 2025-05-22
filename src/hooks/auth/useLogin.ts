import { login } from "@/services/auth";
import { useAppMutation } from "../useAppMutation";

export const useLogin = () => {
  const { mutate, isLoading } = useAppMutation(login);

  return {
    login: mutate,
    isLoading,
  };
};
