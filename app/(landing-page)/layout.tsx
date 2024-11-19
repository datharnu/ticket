"use client";

import React from "react";

import Footer from "@/components/shared/footer";
import TawkChat from "../utils/Taw";
import Navbar from "@/components/shared/navbar";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen   ">
      <Navbar />
      <main className=" pb-10  mx-5  ">{children}</main>
      <div className="fixed bottom-10 right-10">
        <TawkChat />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
