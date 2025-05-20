/* eslint-disable @typescript-eslint/no-explicit-any */
export type ModalPropsMap = {
  CREATE_OR_UPDATE_CATEGORY: {
    categoryId: string;
    onSuccess: (data: any) => void;
    onError: (err: any) => void;
    onClose: () => void;
  };
};
