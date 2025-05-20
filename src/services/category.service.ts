import {
  CategoryDto,
  CategoryRes,
  CreateCategoryReq,
  DeleteCategoryReq,
  PaginatedCategoryListDto,
  UpdateCategoryReq,
} from "@/dtos/category.dto";
import { axiosInstance } from "@/libs/axios";

export const getCategories = async (): Promise<CategoryDto[]> => {
  const res = await axiosInstance.get("/main/categories");
  return res.data.data || [];
};

export const createCategory = async (
  data: CreateCategoryReq
): Promise<CategoryRes> => {
  const res = await axiosInstance.post("/main/category", data);
  return res.data;
};

export const updateCategory = async (
  param: UpdateCategoryReq
): Promise<CategoryRes> => {
  const res = await axiosInstance.post(
    `/main/category/${param.id}`,
    param.data
  );
  return res.data;
};

export const deleteCategory = async (
  id: DeleteCategoryReq
): Promise<CategoryRes> => {
  const res = await axiosInstance.delete(`/posts/${id}`);
  return res.data;
};

export const getPostListPaginated = async (
  page: number,
  limit: number = 10
): Promise<PaginatedCategoryListDto> => {
  const res = await axiosInstance.get(`/posts?page=${page}&limit=${limit}`);
  return {
    data: res.data,
    total: 10,
  } as PaginatedCategoryListDto;
};
