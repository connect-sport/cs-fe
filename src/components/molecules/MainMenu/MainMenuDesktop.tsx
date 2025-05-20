"use client";

import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";

const MainMenuDesktop: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  if (isMobile) {
    return null;
  }

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { MainMenuDesktop };
