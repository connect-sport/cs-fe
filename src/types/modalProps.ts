import { CategoryDto } from "@/dtos/category.dto";
import { MenuDto } from "@/dtos/menu.dto";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ModalPropsMap = {
  CREATE_OR_UPDATE_CATEGORY: {
    category: CategoryDto | null;
    onSuccess: (data: any) => void;
    onError: (err: any) => void;
    onClose: () => void;
  };
  DELETE_CATEGORY: {
    data: {
      id: string;
      name: string;
    };
    onSuccess: (data: any) => void;
    onError: (err: any) => void;
    onClose: () => void;
  };
  CREATE_OR_UPDATE_MENU: {
    menu: MenuDto | null;
    onSuccess: (data: any) => void;
    onError: (err: any) => void;
    onClose: () => void;
  };
  DELETE_MENU: {
    data: {
      id: string;
      name: string;
    };
    onSuccess: (data: any) => void;
    onError: (err: any) => void;
    onClose: () => void;
  };
};
