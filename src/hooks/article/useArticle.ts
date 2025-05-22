import { useAppMutation } from "../useAppMutation";
import {
  createArticleByAlias,
  deleteArticleByAlias,
  getArticlesByAlias,
  updateArticleByAlias,
} from "@/services/article";
import {
  ArticleDto,
  ArticleListReq,
  ArticleReq,
  ArticleRes,
} from "@/dtos/article";

export const useArticle = (alias: string) => {
  const {
    mutateAsync: mutateGettingListArticle,
    isLoading: isLoadingGetList,
    data: dataArticles,
  } = useAppMutation<ArticleListReq, ArticleRes>((params) =>
    getArticlesByAlias(params)
  );

  const { mutateAsync: mutateCreatingArticle, isLoading: isLoadingCreate } =
    useAppMutation<ArticleReq, ArticleRes>((param) =>
      createArticleByAlias(alias, param)
    );

  const { mutateAsync: mutateUpdatingCategory, isLoading: isLoadingUpdate } =
    useAppMutation<ArticleReq, ArticleDto>((param) =>
      updateArticleByAlias(alias, param)
    );

  const { mutateAsync: mutateDeletingCategory, isLoading: isLoadingDelete } =
    useAppMutation<string, { success: boolean }>((id) =>
      deleteArticleByAlias(alias, id)
    );

  const onGetListArticle = async (param: ArticleListReq) => {
    return await mutateGettingListArticle(param);
  };

  const onCreateArticle = async (param: ArticleReq) => {
    return await mutateCreatingArticle(param);
  };

  const onUpdateArticle = (param: ArticleReq) => {
    return mutateUpdatingCategory(param);
  };

  const onDeleteArticle = (id: string) => {
    return mutateDeletingCategory(id);
  };

  return {
    isLoadingGetList,
    isLoadingCreate,
    isLoadingUpdate,
    isLoadingDelete,
    articles: dataArticles?.data || [],
    onGetListArticle,
    onCreateArticle,
    onUpdateArticle,
    onDeleteArticle,
  };
};
