import React, { useMemo } from "react";
import { RHFFormProvider } from "@/hooks/form/useFormProvider";
import { RHFTextField } from "@/components/atoms/RHFInput";
import { Button } from "@mui/material";
import { ModalPropsMap } from "@/types/modalProps";
import { isObject } from "lodash";
import { useMenu } from "@/hooks/menu/useMenu";
import { CreateMenuReq } from "@/dtos/menu.dto";
import { MenuFormValues, menuSchema } from "@/schemas/menu";

const CreateAndEditMenuModal = ({
  menu,
  onSuccess,
  onError,
  onClose,
}: ModalPropsMap["CREATE_OR_UPDATE_MENU"]) => {
  const { onCreateMenu, onUpdateMenu, isLoadingCreate, isLoadingUpdate } =
    useMenu();

  const onSubmit = async (data: MenuFormValues) => {
    try {
      const result = menu?._id
        ? await onUpdateMenu({ data, id: menu._id })
        : await onCreateMenu({ data } as CreateMenuReq);
      if (result) {
        onSuccess?.(result);
      }
    } catch (error) {
      if (onError) {
        onError(isObject(error) ? (error as Error)?.message : error);
      }
    }
  };

  const isLoading = useMemo(
    () => isLoadingCreate || isLoadingUpdate,
    [isLoadingCreate, isLoadingUpdate]
  );

  return (
    <RHFFormProvider<MenuFormValues>
      schema={menuSchema}
      onSubmit={onSubmit}
      defaultValues={{
        name: menu?.name ?? "",
        alias: menu?.alias ?? "",
      }}
      className="w-full max-w-md p-8 space-y-4 bg-white rounded shadow-md"
    >
      <div>
        <div className="mt-2">
          <RHFTextField name="name" label="Menu" placeholder="Menu" />
        </div>
      </div>
      <div>
        <RHFTextField name="alias" label="Alias" placeholder="Alias" />
      </div>
      <footer className="flex flex-row gap-2 justify-center">
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button loading={isLoading} variant="contained" type="submit">
          {menu?._id ? "Update" : "Create"}
        </Button>
      </footer>
    </RHFFormProvider>
  );
};

export { CreateAndEditMenuModal };
