import { useAppQuery } from "../useAppQuery";
import { useAppMutation } from "../useAppMutation";
import {
  CategoryRes,
  CreateCategoryReq,
  UpdateCategoryReq,
} from "@/dtos/category.dto";
import { createMenu, deleteMenu, getMenus, updateMenu } from "@/services/menu";

export const useMenu = () => {
  const {
    data: menus,
    isLoading,
    refetch: onRefetchMenus,
  } = useAppQuery(["getMenus"], getMenus, {
    select: (data) => data || [],
  });

  const { mutateAsync: mutateCreatingMenu, isLoading: isLoadingCreate } =
    useAppMutation<CreateCategoryReq, CategoryRes>(createMenu);

  const { mutateAsync: mutateUpdatingMenu, isLoading: isLoadingUpdate } =
    useAppMutation<UpdateCategoryReq, CategoryRes>(updateMenu);

  const { mutateAsync: mutateDeletingMenu, isLoading: isLoadingDelete } =
    useAppMutation<string, CategoryRes>(deleteMenu);

  const onCreateMenu = async (param: CreateCategoryReq) => {
    return await mutateCreatingMenu(param);
  };

  const onUpdateMenu = (param: UpdateCategoryReq) => {
    return mutateUpdatingMenu(param);
  };

  const onDeleteMenu = (id: string) => {
    return mutateDeletingMenu(id);
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
