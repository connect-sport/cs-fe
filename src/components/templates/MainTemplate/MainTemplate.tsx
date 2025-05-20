import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { AppProvider } from "@/libs/app-provider";
import React from "react";

const MainTemplate = ({ children }: { children: React.ReactNode }) => (
  <AppProvider>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4"> {children} </main>
      <Footer />
    </div>
  </AppProvider>
);

export { MainTemplate };
