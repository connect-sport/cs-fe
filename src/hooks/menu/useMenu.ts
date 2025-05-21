import { useAppQuery } from "../useAppQuery";
import { useAppMutation } from "../useAppMutation";
import {
  CategoryRes,
  CreateCategoryReq,
  UpdateCategoryReq,
} from "@/dtos/category.dto";
import {
  createMenu,
  deleteMenu,
  getMenus,
  updateMenu,
} from "@/services/menu.service";

export const useMenu = () => {
  const {
    data: menus,
    isLoading,
    refetch: onRefetchMenus,
  } = useAppQuery(["getMenus"], getMenus, {
    select: (data) => data || [],
  });

  const { mutateAsync: mutateCreatingCategory, isLoading: isLoadingCreate } =
    useAppMutation<CreateCategoryReq, CategoryRes>(createMenu);

  const { mutateAsync: mutateUpdatingCategory, isLoading: isLoadingUpdate } =
    useAppMutation<UpdateCategoryReq, CategoryRes>(updateMenu);

  const { mutateAsync: mutateDeletingCategory, isLoading: isLoadingDelete } =
    useAppMutation<string, CategoryRes>(deleteMenu);

  const onCreateMenu = async (param: CreateCategoryReq) => {
    return await mutateCreatingCategory(param);
  };

  const onUpdateMenu = (param: UpdateCategoryReq) => {
    return mutateUpdatingCategory(param);
  };

  const onDeleteMenu = (id: string) => {
    return mutateDeletingCategory(id);
  };

  return {
    isLoading,
    menus,
    onRefetchMenus,
    onCreateMenu,
    onUpdateMenu,
    onDeleteMenu,
    isLoadingCreate,
    isLoadingUpdate,
    isLoadingDelete,
  };
};
