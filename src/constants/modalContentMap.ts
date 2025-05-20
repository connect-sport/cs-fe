export const MODAL_KEYS = {
  CREATE_OR_UPDATE_CATEGORY: "CREATE_OR_UPDATE_CATEGORY",
} as const;

export type ModalKey = keyof typeof MODAL_KEYS;
