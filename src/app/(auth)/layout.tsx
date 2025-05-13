import { LayoutWithoutHeader } from "@/components/templates/LayoutWithoutHeader";
import React from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutWithoutHeader>{children}</LayoutWithoutHeader>;
}
