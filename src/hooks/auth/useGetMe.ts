import { getMe } from "@/services/auth.service";
import { useAppQuery } from "../useAppQuery";

export const useGetMe = () => {
  const { data, isLoading } = useAppQuery(["getMe"], getMe);

  return {
    data,
    isLoading,
  };
};
