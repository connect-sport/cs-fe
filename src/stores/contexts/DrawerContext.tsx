"use client";

import { DrawerContentType } from "@/constants/drawerContentMap";
import React, { createContext, useContext, useState } from "react";

type DrawerContextType = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  openDrawerWithType: (type: DrawerContentType) => void;
  contentType: DrawerContentType | null;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState<DrawerContentType | null>(
    null
  );

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => {
    setIsOpen(false);
    setContentType(null);
  };
  const openDrawerWithType = (type: DrawerContentType) => {
    setContentType(type);
    setIsOpen(true);
  };

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        openDrawer,
        closeDrawer,
        openDrawerWithType,
        contentType,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error("useDrawer must be used within a DrawerProvider");
  return context;
};
