"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "./query-client";
import { ReduxProvider } from "./redux-provider";
import { ReactQueryProvider } from "./react-query-provider";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import { SnackbarProvider } from "@/stores/contexts/SnackBarContext";
import { DrawerProvider } from "@/stores/contexts/DrawerContext";
import { ModalProvider } from "@/stores/contexts/ModalContext";
import { ModalRenderer } from "@/utils/ModalRenderer";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <ReactQueryProvider>
          <SnackbarProvider>
            <ModalProvider>
              <DrawerProvider>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {children}
                  <ReactQueryDevtools initialIsOpen={false} />
                  <ModalRenderer />
                </ThemeProvider>
              </DrawerProvider>
            </ModalProvider>
          </SnackbarProvider>
        </ReactQueryProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
