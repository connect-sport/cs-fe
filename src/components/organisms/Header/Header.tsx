import React from "react";
import {
  MainMenuDesktop,
  MainMenuMobile,
} from "@/components/molecules/MainMenu";

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MainMenuMobile />
          <h1 className="text-xl font-bold">Connect Sport</h1>
        </div>
        <MainMenuDesktop />
      </div>
    </header>
  );
};

export { Header };
