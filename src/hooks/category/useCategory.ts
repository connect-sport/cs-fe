import { useAppQuery } from "../useAppQuery";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/services/category.service";
import { useAppMutation } from "../useAppMutation";
import {
  CategoryRes,
  CreateCategoryReq,
  DeleteCategoryReq,
  UpdateCategoryReq,
} from "@/dtos/category.dto";

export const useCategory = () => {
  const {
    data: categories,
    isLoading,
    refetch: onRefetchCategories,
  } = useAppQuery(["getCategories"], getCategories, {
    select: (data) => data || [],
  });

  const { mutateAsync: mutateCreatingCategory, isLoading: isLoadingCreate } =
    useAppMutation<CreateCategoryReq, CategoryRes>(createCategory);

  const { mutateAsync: mutateUpdatingCategory, isLoading: isLoadingUpdate } =
    useAppMutation<UpdateCategoryReq, CategoryRes>(updateCategory);

  const { mutateAsync: mutateDeletingCategory, isLoading: isLoadingDelete } =
    useAppMutation<DeleteCategoryReq, CategoryRes>(deleteCategory);

  const onCreateCategory = async (param: CreateCategoryReq) => {
    return await mutateCreatingCategory(param);
  };

  const onUpdateCategory = (param: UpdateCategoryReq) => {
    return mutateUpdatingCategory(param);
  };

  const onDeleteCategory = (id: DeleteCategoryReq) => {
    return mutateDeletingCategory(id);
  };

  return {
    isLoading,
    categories,
    onRefetchCategories,
    onCreateCategory,
    onUpdateCategory,
    onDeleteCategory,
    isLoadingCreate,
    isLoadingUpdate,
    isLoadingDelete,
  };
};
