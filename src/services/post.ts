import { PaginatedPostListDto, PostDto } from "@/dtos/post.dto";
import { axiosInstance } from "@/libs/axios";

export const getPosts = async (): Promise<PostDto[]> => {
  const res = await axiosInstance.get("/posts");
  return res.data || [];
};

export const createPost = async (data: {
  name: string;
  email: string;
}): Promise<PostDto> => {
  const res = await axiosInstance.post("/posts", data);
  return res.data;
};

export const updatePost = async (
  id: string,
  data: { name: string; email: string }
): Promise<PostDto> => {
  const res = await axiosInstance.put(`/posts/${id}`, data);
  return res.data;
};

export const deletePost = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/posts/${id}`);
};

export const getPostListPaginated = async (
  page: number,
  limit: number = 10
): Promise<PaginatedPostListDto> => {
  const res = await axiosInstance.get(`/posts?page=${page}&limit=${limit}`);
  return {
    data: res.data,
    total: 10,
  } as PaginatedPostListDto;
};
