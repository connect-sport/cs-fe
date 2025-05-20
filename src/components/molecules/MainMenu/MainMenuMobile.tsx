"use client";

import { MENU_DRAWER } from "@/constants/drawerContentMap";
import { useDrawer } from "@/stores/contexts/DrawerContext";
import { IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MainMenuMobile: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { openDrawerWithType } = useDrawer();

  const toggleDrawer = () => () => {
    openDrawerWithType(MENU_DRAWER);
  };

  if (!isMobile) {
    return null; // Render nothing if not on mobile
  }

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={toggleDrawer}
      className="mr-2"
    >
      <MenuIcon />
    </IconButton>
  );
};

export { MainMenuMobile };
