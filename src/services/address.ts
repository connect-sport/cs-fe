import { ADDRESS_API } from "@/constants/api";
import { AddressDto } from "@/dtos/address";
import { axiosInstance } from "@/libs/axios";

export const getAddresses = async (): Promise<AddressDto> => {
  const res = await axiosInstance.get(`${ADDRESS_API}/all`);
  return res.data.data as AddressDto;
};
