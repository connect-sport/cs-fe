import { Button } from "@mui/material";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "@/stores/contexts/ModalContext";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { useCategory } from "@/hooks/category/useCategory";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";

const CategoryAddButton: FC = () => {
  const { openModal, closeModal } = useModal();
  const { onRefetchCategories } = useCategory();
  const { showError } = useSnackbar();

  const handleAddCategory = (categoryId: string = "") => {
    openModal(MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY, {
      categoryId,
      onSuccess: () => {
        closeModal();
        onRefetchCategories();
      },
      onError: (message) => {
        showError(message);
      },
      onClose: () => console.log("closed"),
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      sx={{ mb: 2 }}
      onClick={() => handleAddCategory()}
    >
      Thêm mới
    </Button>
  );
};

export { CategoryAddButton };
