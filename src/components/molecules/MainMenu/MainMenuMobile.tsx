"use client";

import { IconButton, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const MainMenuMobile: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (!isMobile) {
    return null; // Render nothing if not on mobile
  }

  return (
    <IconButton edge="start" color="inherit" aria-label="menu" className="mr-2">
      <MenuIcon />
    </IconButton>
  );
};

export { MainMenuMobile };
