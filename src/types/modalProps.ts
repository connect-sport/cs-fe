/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryDto } from "@/dtos/category.dto";
import { MenuDto } from "@/dtos/menu.dto";

export type ModalCallbackHandlers = {
  onSuccess: (data: any) => void;
  onError: (err: any) => void;
  onClose: () => void;
};

export type ModalPropsMap = {
  CREATE_OR_UPDATE_CATEGORY: {
    category?: CategoryDto | null;
  } & ModalCallbackHandlers;
  DELETE_CATEGORY: {
    data?: {
      id: string;
      name: string;
    };
  } & ModalCallbackHandlers;
  CREATE_OR_UPDATE_MENU: {
    menu?: MenuDto | null;
  } & ModalCallbackHandlers;
  DELETE_MENU: {
    data?: {
      id: string;
      name: string;
    };
  } & ModalCallbackHandlers;
  CREATE_OR_UPDATE_ARTICLE: {
    article?: any;
  } & ModalCallbackHandlers;
};
