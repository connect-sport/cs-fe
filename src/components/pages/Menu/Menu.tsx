"use client";

import React from "react";
import { MenuAddButton } from "@/components/organisms/Menu/components/MenuAddButton";
import { MenuTable } from "@/components/organisms/Menu/components/MenuTable";

const MenuPage: React.FC = () => {
  return (
    <main>
      <MenuAddButton />
      <MenuTable />
    </main>
  );
};

export { MenuPage };
