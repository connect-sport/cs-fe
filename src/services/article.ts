import { MAIN_ARTICLE_API } from "@/constants/api";
import {
  ArticleDto,
  ArticleListReq,
  ArticleReq,
  ArticleRes,
} from "@/dtos/article";
import { axiosInstance } from "@/libs/axios";

export const getArticlesByAlias = async (
  data: ArticleListReq
): Promise<ArticleRes> => {
  const res = await axiosInstance.post(`${MAIN_ARTICLE_API}`, data);
  return res.data.data as ArticleRes;
};

export const createArticleByAlias = async (
  alias: string,
  data: ArticleReq
): Promise<ArticleRes> => {
  const res = await axiosInstance.post(`${MAIN_ARTICLE_API}/${alias}`, data);
  return res.data;
};

export const updateArticleByAlias = async (
  alias: string,
  data: ArticleReq
): Promise<ArticleDto> => {
  const res = await axiosInstance.put(`${MAIN_ARTICLE_API}}/${alias}`, data);
  return res.data;
};

export const deleteArticleByAlias = async (
  alias: string,
  id: string
): Promise<{ success: boolean }> => {
  const res = await axiosInstance.delete(`${MAIN_ARTICLE_API}/${alias}/${id}`);
  return res.data;
};
