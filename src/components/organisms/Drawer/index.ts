import { DrawerContentType, MENU_DRAWER } from "@/constants/drawerContentMap";
import React from "react";

const MenuDrawer = import("./Menu").then(
  (module) => module.MenuDrawer as unknown as React.ReactNode
);

export const drawerContentMap: Record<DrawerContentType, React.ReactNode> = {
  [MENU_DRAWER]: MenuDrawer,
};
