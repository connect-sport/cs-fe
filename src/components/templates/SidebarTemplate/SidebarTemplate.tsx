import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { AppProvider } from "@/libs/app-provider";
import React from "react";
import { Box, CssBaseline, Drawer, Toolbar } from "@mui/material";

const drawerWidth = 240;
const SidebarTemplate = ({
  children,
  Sidebar,
}: {
  children: React.ReactNode;
  Sidebar?: React.ReactNode;
}) => {
  return (
    <AppProvider>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>{Sidebar}</Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer />
    </AppProvider>
  );
};

export { SidebarTemplate };
