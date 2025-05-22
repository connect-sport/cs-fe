import { UserDto } from "@/dtos/auth";
import { axiosInstance } from "@/libs/axios";

export const register = async (data: UserDto): Promise<UserDto> => {
  const res = await axiosInstance.post("auth/register", data);
  return res.data || {};
};

export const login = async (data: {
  email: string;
  password: string;
}): Promise<UserDto> => {
  const res = await axiosInstance.post("auth/login", data);
  return res.data;
};

export const logout = async (): Promise<null> => {
  const res = await axiosInstance.post("auth/logout");
  return res.data;
};

export const getMe = async (): Promise<null> => {
  const res = await axiosInstance.get("auth/me");
  return res.data;
};
