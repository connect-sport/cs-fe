"use client";

import { ModalKey } from "@/constants/modalContentMap";
import { ModalPropsMap } from "@/types/modalProps";
import { createContext, useContext, useState } from "react";

export type ModalConfig = {
  component: ModalKey;
  props?: unknown;
  onSuccess?: (data: unknown) => void;
  onError?: (err: unknown) => void;
};

type ModalState<K extends ModalKey = ModalKey> = {
  key: K;
  props: ModalPropsMap[K];
};

type OpenModal = <K extends ModalKey>(key: K, props: ModalPropsMap[K]) => void;

const ModalContext = createContext<{
  modal: ModalState | null;
  openModal: OpenModal;
  closeModal: () => void;
}>({
  modal: null,
  openModal: () => {
    throw new Error("Modal system chưa khởi tạo");
  },
  closeModal: () => {
    throw new Error("Modal system chưa khởi tạo");
  },
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalState | null>(null);

  const openModal: OpenModal = (key, props) => {
    setModal({ key, props } as ModalState);
  };

  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
