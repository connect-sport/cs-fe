import { ARTICLE_TYPE_OPTIONS } from "@/constants/article";
import { DISTRICTS } from "@/constants/districts";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { useArticle } from "@/hooks/article/useArticle";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { ArticleFormValues, articleSchema } from "@/schemas/article";
import { ModalPropsMap } from "@/types/modalProps";
import { isObject } from "lodash";
import { ArticleForm } from "../../Article";

const CreateAndEditArticleModal = ({
  article,
  onSuccess,
  onError,
  onClose,
}: ModalPropsMap[typeof MODAL_KEYS.CREATE_OR_UPDATE_ARTICLE]) => {
  const { onCreateArticle, isLoadingCreate } = useArticle(article?.alias);

  const onSubmit = async (data: ArticleFormValues) => {
    try {
      const result = await onCreateArticle({ id: article?.id, data });
      if (result) {
        onSuccess?.([result.data]);
      }
    } catch (error) {
      if (onError) {
        onError(isObject(error) ? (error as Error)?.message : error);
      }
    }
  };

  return (
    <RHFFormProvider<ArticleFormValues>
      schema={articleSchema}
      onSubmit={onSubmit}
      defaultValues={{
        title: ARTICLE_TYPE_OPTIONS[0].value,
        phoneNumber: "",
        address: DISTRICTS[0].value,
        description: "",
        category: article?.alias ?? "",
        level: [],
      }}
      className="w-full space-y-4 bg-white rounded"
    >
      <ArticleForm onClose={onClose} isLoading={isLoadingCreate} />
    </RHFFormProvider>
  );
};

export { CreateAndEditArticleModal };
