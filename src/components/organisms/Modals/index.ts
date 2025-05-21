import { MODAL_KEYS, ModalKey } from "@/constants/modalContentMap";
import { ModalPropsMap } from "@/types/modalProps";
import { MenuDeleteModal, UpdateAndEditMenuModal } from "./Menu";
import { CategoryDeleteModal, UpdateAndEditCategoryModal } from "./Category";

type ModalComponentMap = {
  [K in ModalKey]: React.FC<ModalPropsMap[K]>;
};

export const MODAL_COMPONENTS: ModalComponentMap = {
  [MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY]: UpdateAndEditCategoryModal,
  [MODAL_KEYS.DELETE_CATEGORY]: CategoryDeleteModal,
  [MODAL_KEYS.CREATE_OR_UPDATE_MENU]: UpdateAndEditMenuModal,
  [MODAL_KEYS.DELETE_MENU]: MenuDeleteModal,
};
