import { Footer } from "@/components/organisms/Footer";
import { AppProvider } from "@/libs/app-provider";
import React from "react";

const WithoutHeaderTemplate = ({ children }: { children: React.ReactNode }) => (
  <AppProvider>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4"> {children} </main>
      <Footer />
    </div>
  </AppProvider>
);

export { WithoutHeaderTemplate };
