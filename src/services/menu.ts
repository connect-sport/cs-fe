import { MAIN_MENU_API } from "@/constants/api";
import {
  CreateMenuReq,
  MenuDto,
  MenuRes,
  UpdateMenuReq,
} from "@/dtos/menu.dto";
import { axiosInstance } from "@/libs/axios";

export const getMenus = async (): Promise<MenuDto[]> => {
  const res = await axiosInstance.get(`${MAIN_MENU_API}/all`);
  return res.data.data || [];
};

export const createMenu = async (data: CreateMenuReq): Promise<MenuRes> => {
  const res = await axiosInstance.post(`${MAIN_MENU_API}`, data);
  return res.data;
};

export const updateMenu = async (param: UpdateMenuReq): Promise<MenuRes> => {
  const res = await axiosInstance.put(
    `${MAIN_MENU_API}/${param.id}`,
    param.data
  );
  return res.data;
};

export const deleteMenu = async (id: string): Promise<MenuRes> => {
  const res = await axiosInstance.delete(`${MAIN_MENU_API}/${id}`);
  return res.data;
};
