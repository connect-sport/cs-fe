import { DRAWER_KEYS } from "@/constants/drawerContentMap";
import { useDrawer } from "@/stores/contexts/DrawerContext";
import { Fab } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export interface ButtonFilterArticleProps {
  alias: string;
}

const ButtonFilterArticle: React.FC<ButtonFilterArticleProps> = ({ alias }) => {
  const { openDrawer } = useDrawer();

  const handleClick = () => {
    openDrawer(DRAWER_KEYS.FILTER_ARTICLE, {
      alias,
      onClose: () => {
        // Handle any additional logic when the drawer is closed
      },
    });
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{
        position: "fixed",
        bottom: 100,
        right: 24,
        zIndex: 1300,
      }}
      onClick={handleClick}
    >
      <SearchIcon />
    </Fab>
  );
};

export { ButtonFilterArticle };
