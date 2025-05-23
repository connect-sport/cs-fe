import React from "react";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import {
  ArticleFilteringFormValues,
  filteringAricleSchema,
} from "@/schemas/article";
import { ArticleFilteringForm } from "../../Article/ArticleFilteringForm";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { articleAction } from "@/reducers/article";

const FilterArticleDrawer = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: ArticleFilteringFormValues) => {
    dispatch(articleAction.setFilteringData({ data }));
  };

  return (
    <RHFFormProvider<ArticleFilteringFormValues>
      schema={filteringAricleSchema}
      onSubmit={onSubmit}
      defaultValues={{
        keyword: "",
        address: "",
        levels: [],
      }}
      className="w-full space-y-4 bg-white rounded"
    >
      <ArticleFilteringForm />
    </RHFFormProvider>
  );
};

export { FilterArticleDrawer };
