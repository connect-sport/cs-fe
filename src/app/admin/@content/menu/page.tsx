import { MenuPage } from "@/components/pages/Menu";
import React, { Suspense } from "react";

export default function MenuContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuPage />
    </Suspense>
  );
}
