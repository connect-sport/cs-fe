import { register } from "@/services/auth";
import { useAppMutation } from "../useAppMutation";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";

export const useRegisterUser = () => {
  const { showSuccess, showError } = useSnackbar();

  const { mutate, isSuccess, isLoading } = useAppMutation(register, {
    onSuccess: () => {
      showSuccess("Bạn đã đăng ký thành công");
    },
    onError: (error) => {
      console.error("Error during registration:", error);
      showError(error.message);
    },
  });

  return {
    register: mutate,
    isLoading,
    isSuccess,
  };
};
