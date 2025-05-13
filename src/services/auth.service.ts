import { UserDto } from "@/dtos/auth";
import { axiosInstance } from "@/libs/axios";

export const register = async (data: UserDto): Promise<UserDto> => {
  const res = await axiosInstance.post("auth/register", data);
  return res.data || {};
};

export const login = async (data: {
  name: string;
  email: string;
}): Promise<UserDto> => {
  const res = await axiosInstance.post("auth/login", data);
  return res.data;
};
