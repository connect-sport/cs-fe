import React from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useLogout } from "@/hooks/auth/useLogout";

export const MenuDrawer = () => {
  const { logout } = useLogout();
  return (
    <List>
      <ListItem component={Button}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem component={Button}>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem component={Button}>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem component={Button} onClick={logout}>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
};
