import { logout } from "@/services/auth.service";
import { useAppMutation } from "../useAppMutation";

export const useLogout = () => {
  const { mutate, isLoading } = useAppMutation(logout);

  return {
    logout: mutate,
    isLoading,
  };
};
