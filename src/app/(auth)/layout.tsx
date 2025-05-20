import { WithoutHeaderTemplate } from "@/components/templates/WithoutHeaderTemplate";
import React from "react";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50">
      <WithoutHeaderTemplate>{children}</WithoutHeaderTemplate>
    </main>
  );
}
