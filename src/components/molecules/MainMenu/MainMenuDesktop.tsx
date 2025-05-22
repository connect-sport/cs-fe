"use client";

import { HOME_PATH } from "@/constants/path";
import { MenuDto } from "@/dtos/menu.dto";
import { useMenu } from "@/hooks/menu/useMenu";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const MainMenuDesktop: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const router = useRouter();
  const { menus } = useMenu();

  const handleLogoClick = () => {
    router.push(HOME_PATH);
  };

  if (isMobile) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div
          className="text-xl font-bold text-gray-800 cursor-pointer"
          onClick={handleLogoClick}
        >
          Connect Sport
        </div>
        <ul className="flex space-x-8">
          {(menus || []).map((menu: MenuDto) => (
            <li key={menu._id}>
              <a
                href={menu.alias}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export { MainMenuDesktop };
