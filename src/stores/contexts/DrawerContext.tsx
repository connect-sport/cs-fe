/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Drawer, DrawerProps } from "antd";
import { DrawerKey } from "@/constants/drawerContentMap";
import { DrawerComponentMap } from "@/components/organisms/Drawer";

type DrawerContextType = {
  openDrawer: (
    key: DrawerKey,
    props?: any,
    drawerProps?: Partial<DrawerProps>
  ) => void;
  closeDrawer: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );
  const [componentProps, setComponentProps] = useState<any>({});
  const [drawerProps, setDrawerProps] = useState<Partial<DrawerProps>>({});

  const closeDrawer = useCallback(() => setVisible(false), []);

  const openDrawer = useCallback(
    (key: DrawerKey, props = {}, drawerProps = {}) => {
      const Component = DrawerComponentMap[key];
      if (!Component) {
        console.warn(`Component for DrawerKey "${key}" not found.`);
        return;
      }
      setComponent(() => Component);
      setComponentProps({ ...props, onClose: closeDrawer });
      setDrawerProps(drawerProps);
      setVisible(true);
    },
    [closeDrawer]
  );

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      <Drawer
        open={visible}
        onClose={closeDrawer}
        destroyOnHidden
        {...drawerProps}
      >
        {Component && <Component {...componentProps} />}
      </Drawer>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error("useDrawer must be used within a DrawerProvider");
  return context;
};
