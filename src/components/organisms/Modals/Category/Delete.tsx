import { useCategory } from "@/hooks/category/useCategory";
import { ModalPropsMap } from "@/types/modalProps";
import { Button } from "@mui/material";
import React from "react";

const CategoryDeleteModal: React.FC<ModalPropsMap["DELETE_CATEGORY"]> = ({
  data,
  onSuccess,
  onError,
  onClose,
}) => {
  const { onDeleteCategory, isLoadingDelete } = useCategory();

  const onDelete = async () => {
    try {
      const result = await onDeleteCategory(data?.id || "");
      if (result) {
        onSuccess?.(result);
      }
    } catch (error) {
      if (onError) {
        onError(error);
      }
    }
  };

  return (
    <main className="text-center">
      <h2>Delete Category</h2>
      <p className="my-2">
        <span>Are you sure you want to delete the category</span>
        <strong className="ml-1">{data?.name || ""}</strong>?
      </p>
      <div className="flex flex-row gap-2 justify-center mt-3">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button
          loading={isLoadingDelete}
          loadingIndicator="Loading…"
          variant="outlined"
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </main>
  );
};

export { CategoryDeleteModal };
