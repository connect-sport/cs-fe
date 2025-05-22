import { Fab } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useModal } from "@/stores/contexts/ModalContext";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { articleAction } from "@/reducers/article";
import { useAppSelector } from "@/hooks/useAppSelector";

type ButtonAddArticleProps = {
  alias: string;
};

const ButtonAddArticle: React.FC<ButtonAddArticleProps> = ({ alias }) => {
  const { openModal, closeModal } = useModal();
  const { showSuccess, showError } = useSnackbar();
  const dispatch = useAppDispatch();
  const { data: articlesData } = useAppSelector((state) => state.article);

  const handleClick = () => {
    openModal(MODAL_KEYS.CREATE_OR_UPDATE_ARTICLE, {
      article: { alias: alias || "" },
      onSuccess: (data) => {
        closeModal();
        showSuccess("Tạo bài viết thành công");
        dispatch(
          articleAction.setDataArticles({ data: [...articlesData, ...data] })
        );
      },
      onError: () => {
        closeModal();
        showError("Tạo bài viết thất bại");
      },
      onClose: () => {
        closeModal();
      },
    });
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1300,
      }}
      onClick={handleClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default ButtonAddArticle;
