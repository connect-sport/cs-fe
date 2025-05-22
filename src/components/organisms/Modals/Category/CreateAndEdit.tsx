import React, { useMemo } from "react";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { CategoryFormValues, categorySchema } from "@/schemas/category";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { useCategory } from "@/hooks/category/useCategory";
import { CreateCategoryReq } from "@/dtos/category.dto";
import { Button } from "@mui/material";
import { ModalPropsMap } from "@/types/modalProps";
import { isObject } from "lodash";
import { MODAL_KEYS } from "@/constants/modalContentMap";

const CreateAndEditCategoryModal = ({
  category,
  onSuccess,
  onError,
  onClose,
}: ModalPropsMap[typeof MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY]) => {
  const {
    onCreateCategory,
    onUpdateCategory,
    isLoadingCreate,
    isLoadingUpdate,
  } = useCategory();

  const onSubmit = async (data: CategoryFormValues) => {
    try {
      const result = category?._id
        ? await onUpdateCategory({ data, id: category._id })
        : await onCreateCategory({ data } as CreateCategoryReq);
      if (result) {
        onSuccess?.(result);
      }
    } catch (error) {
      if (onError) {
        onError(isObject(error) ? (error as Error)?.message : error);
      }
    }
  };

  const isLoading = useMemo(
    () => isLoadingCreate || isLoadingUpdate,
    [isLoadingCreate, isLoadingUpdate]
  );

  return (
    <RHFFormProvider<CategoryFormValues>
      schema={categorySchema}
      onSubmit={onSubmit}
      defaultValues={{
        name: category?.name ?? "",
        alias: category?.alias ?? "",
      }}
      className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
    >
      <div>
        <div className="mt-2">
          <RHFTextField
            name="name"
            label="Tên danh mục"
            placeholder="Nhập tên danh mục"
          />
        </div>
      </div>
      <div>
        <RHFTextField
          name="alias"
          label="Tên định danh"
          placeholder="Nhập tên định danh"
        />
      </div>
      <footer className="flex flex-row gap-2 justify-center">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button loading={isLoading} variant="contained" type="submit">
          {category?._id ? "Update" : "Create"}
        </Button>
      </footer>
    </RHFFormProvider>
  );
};

export { CreateAndEditCategoryModal };
