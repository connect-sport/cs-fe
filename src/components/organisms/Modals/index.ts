import { MODAL_KEYS, ModalKey } from "@/constants/modalContentMap";
import UpdateAndEditCategoryModal from "./Category/UpdateAndEdit";
import { ModalPropsMap } from "@/types/modalProps";

type ModalComponentMap = {
  [K in ModalKey]: React.FC<ModalPropsMap[K]>;
};

export const MODAL_COMPONENTS: ModalComponentMap = {
  [MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY]: UpdateAndEditCategoryModal,
};
