"use client";

import React from "react";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import {
  ArticleFilteringFormValues,
  filteringAricleSchema,
} from "@/schemas/article";
import { ArticleFilteringForm } from "../../Article/ArticleFilteringForm";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { articleAction } from "@/reducers/article";
import { useDrawer } from "@/stores/contexts/DrawerContext";
import dayjs from "dayjs";

const FilterArticleDrawer = () => {
  const dispatch = useAppDispatch();
  const { closeDrawer } = useDrawer();

  const onSubmit = async (data: ArticleFilteringFormValues) => {
    closeDrawer();
    dispatch(
      articleAction.setFilteringData({
        data: {
          ...data,
          fromDateTime: data.fromDateTime?.toISOString(),
          toDateTime: data.toDateTime?.toISOString(),
        },
      })
    );
  };

  return (
    <RHFFormProvider<ArticleFilteringFormValues>
      schema={filteringAricleSchema}
      onSubmit={onSubmit}
      defaultValues={{
        keyword: "",
        address: "",
        levels: [],
        fromDateTime: dayjs(),
        toDateTime: dayjs().add(2, "hour"),
      }}
      className="w-full space-y-4 bg-white rounded"
    >
      <ArticleFilteringForm closeDrawer={() => onSubmit({})} />
    </RHFFormProvider>
  );
};

export { FilterArticleDrawer };
