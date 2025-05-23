import { useAppQuery } from "../useAppQuery";
import { getAddresses } from "@/services/address";

export const useAddress = () => {
  const { data } = useAppQuery(["getAddress"], getAddresses);

  return {
    data: data || [],
  };
};
