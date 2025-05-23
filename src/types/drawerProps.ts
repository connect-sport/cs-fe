/* eslint-disable @typescript-eslint/no-explicit-any */
import { DRAWER_KEYS } from "@/constants/drawerContentMap";

export type DrawerCallbackHandlers = {
  onSuccess?: (data: any) => void;
  onError?: (err: any) => void;
  onClose: () => void;
};

export type DrawerPropsMap = {
  [DRAWER_KEYS.FILTER_ARTICLE]: {
    alias: string;
  } & DrawerCallbackHandlers;
};
