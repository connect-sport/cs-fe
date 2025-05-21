import { MAIN_CATEGORY_API } from "@/constants/api";
import {
  CategoryDto,
  CategoryRes,
  CreateCategoryReq,
  UpdateCategoryReq,
} from "@/dtos/category.dto";
import { axiosInstance } from "@/libs/axios";

export const getCategories = async (): Promise<CategoryDto[]> => {
  const res = await axiosInstance.get(`${MAIN_CATEGORY_API}/all`);
  return res.data.data || [];
};

export const createCategory = async (
  data: CreateCategoryReq
): Promise<CategoryRes> => {
  const res = await axiosInstance.post(`${MAIN_CATEGORY_API}`, data);
  return res.data;
};

export const updateCategory = async (
  param: UpdateCategoryReq
): Promise<CategoryRes> => {
  const res = await axiosInstance.put(
    `${MAIN_CATEGORY_API}/${param.id}`,
    param.data
  );
  return res.data;
};

export const deleteCategory = async (id: string): Promise<CategoryRes> => {
  const res = await axiosInstance.delete(`${MAIN_CATEGORY_API}/${id}`);
  return res.data;
};
