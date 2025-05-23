import { MODAL_KEYS, ModalKey } from "@/constants/modalContentMap";
import { ModalPropsMap } from "@/types/modalProps";
import { CreateAndEditMenuModal, MenuDeleteModal } from "./Menu";
import { CategoryDeleteModal, CreateAndEditCategoryModal } from "./Category";
import { CreateAndEditArticleModal } from "./Article/CreateAndEdit";
import { DetailsArticleModal } from "./Article/Details";

type ModalComponentMap = {
  [K in ModalKey]: React.FC<ModalPropsMap[K]>;
};

export const MODAL_COMPONENTS: ModalComponentMap = {
  [MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY]: CreateAndEditCategoryModal,
  [MODAL_KEYS.DELETE_CATEGORY]: CategoryDeleteModal,
  [MODAL_KEYS.CREATE_OR_UPDATE_MENU]: CreateAndEditMenuModal,
  [MODAL_KEYS.DELETE_MENU]: MenuDeleteModal,
  [MODAL_KEYS.CREATE_OR_UPDATE_ARTICLE]: CreateAndEditArticleModal,
  [MODAL_KEYS.DETAILS_ARTICLE]: DetailsArticleModal,
};
