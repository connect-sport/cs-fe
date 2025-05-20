import { login } from "@/services/auth.service";
import { useAppMutation } from "../useAppMutation";

export const useLogin = () => {
  const { mutate, isLoading } = useAppMutation(login);

  return {
    login: mutate,
    isLoading,
  };
};
