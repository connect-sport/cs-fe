import { Button } from "@mui/material";
import React, { FC } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "@/stores/contexts/ModalContext";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";
import { useMenu } from "@/hooks/menu/useMenu";

const MenuAddButton: FC = ({}) => {
  const { openModal, closeModal } = useModal();
  const { onRefetchMenus } = useMenu();
  const { showError, showSuccess } = useSnackbar();

  const handleAddMenu = () => {
    openModal(MODAL_KEYS.CREATE_OR_UPDATE_MENU, {
      menu: null,
      onSuccess: () => {
        closeModal();
        onRefetchMenus();
        showSuccess("Create category success");
      },
      onError: (message) => {
        showError(message);
      },
      onClose: () => closeModal(),
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      sx={{ mb: 2 }}
      onClick={() => handleAddMenu()}
    >
      Thêm mới
    </Button>
  );
};

export { MenuAddButton };
