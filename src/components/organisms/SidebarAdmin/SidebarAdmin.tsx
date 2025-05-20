import { CATEGORY_ADMIN_PATH, MENU_ADMIN_PATH } from "@/constants/path";
import { ListItemText, MenuItem, MenuList, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const SidebarAdmin: FC = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemText>Cut</ListItemText>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ⌘X
        </Typography>
      </MenuItem>
      <MenuItem component={Link} href={MENU_ADMIN_PATH}>
        <ListItemText>Menu</ListItemText>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ⌘C
        </Typography>
      </MenuItem>
      <MenuItem component={Link} href={CATEGORY_ADMIN_PATH}>
        <ListItemText>Category</ListItemText>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ⌘V
        </Typography>
      </MenuItem>
    </MenuList>
  );
};

export { SidebarAdmin };
