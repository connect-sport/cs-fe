"use client";

import { RHFAutoComplete } from "@/components/atoms/RHFAutoComplete";
import { RHFDateTimeRangePicker } from "@/components/atoms/RHFDateTimeRangePicker";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { RHFSelectField } from "@/components/atoms/RHFSelect";
import { Address } from "@/components/molecules/Address";
import {
  ARTICLE_TYPE,
  ARTICLE_TYPE_OPTIONS,
  LEVELS_ARRAY,
} from "@/constants/article";
import { useCategory } from "@/hooks/category/useCategory";
import { Button } from "@mui/material";
import React, { useMemo } from "react";
import { useFormContext } from "react-hook-form";

export interface ArticleFormProps {
  isLoading?: boolean;
  onClose: () => void;
  alias?: string;
}

export const ArticleForm: React.FC<ArticleFormProps> = ({
  alias,
  isLoading,
  onClose,
}) => {
  const { categories } = useCategory();
  const { watch } = useFormContext();

  const watchTitle = watch("title");

  const isToggether = useMemo(
    () => watchTitle === ARTICLE_TYPE.TOGETHER,
    [watchTitle]
  );

  return (
    <>
      <div>
        <div className="my-2">
          <RHFSelectField
            name="title"
            options={ARTICLE_TYPE_OPTIONS.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
            label="Tiêu đề bài viết"
          />
        </div>
      </div>

      <div className="mb-2">
        <RHFSelectField
          options={(categories || [])
            .filter((category) => category.alias === alias)
            .map((category) => ({
              label: category.name,
              value: category.alias,
            }))}
          name="category"
          label="Danh mục"
        />
      </div>

      {isToggether && (
        <div>
          <div className="mb-2">
            <Address />
          </div>

          <div className="mb-2">
            <RHFAutoComplete
              name="levels"
              label="Chọn trình độ"
              options={LEVELS_ARRAY}
              multiple
            />
          </div>
          <div className="mb-2 flex gap-2 justify-between">
            <RHFDateTimeRangePicker
              name={["fromDateTime", "toDateTime"]}
              label="Chọn khoảng thời gian"
              required
            />
          </div>
        </div>
      )}

      <div className="mb-2">
        <RHFTextField
          type="number"
          name="phoneNumber"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại"
        />
      </div>

      <div>
        <RHFTextField
          type="textarea"
          minRows={10}
          name="description"
          label="Mô tả"
          placeholder="Nhập mô tả"
          className="w-full border border-gray-300 rounded-md p-2 resize-none"
        />
      </div>

      <footer className="flex flex-row gap-2 justify-center">
        <Button variant="outlined" onClick={onClose}>
          Hủy
        </Button>
        <Button loading={isLoading} variant="contained" type="submit">
          Tạo mới
        </Button>
      </footer>
    </>
  );
};
