import React from "react";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { CategoryFormValues, categorySchema } from "@/schemas/category.schema";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { useCategory } from "@/hooks/category/useCategory";
import { CategoryRes, CreateCategoryReq } from "@/dtos/category.dto";

type Props = {
  categoryId?: string;
  onSuccess?: (data: CategoryRes) => void;
  onError?: (err: unknown) => void;
  onClose: () => void;
};

const UpdateAndEditCategoryModal = ({
  categoryId,
  onSuccess,
  onError,
  onClose,
}: Props) => {
  console.log("onError", onError);
  const { onCreateCategory } = useCategory();

  const onSubmit = async (data: CategoryFormValues) => {
    try {
      const result = await onCreateCategory({ data } as CreateCategoryReq);
      if (result) {
        onSuccess?.(result);
        onClose();
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <RHFFormProvider<CategoryFormValues>
      schema={categorySchema}
      onSubmit={onSubmit}
      defaultValues={{
        name: "",
        alias: "",
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
      <button
        type="submit"
        className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {false ? "Đang cập nhật..." : "Cập nhật"}
      </button>
    </RHFFormProvider>
  );
};

export default UpdateAndEditCategoryModal;
