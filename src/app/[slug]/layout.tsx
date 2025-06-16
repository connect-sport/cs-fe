import { MainTemplate } from "@/components/templates/MainTemplate";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SlugLayout({ children }: Props) {
  return <MainTemplate>{children}</MainTemplate>;
}
