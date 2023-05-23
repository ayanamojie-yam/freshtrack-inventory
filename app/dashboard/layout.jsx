"use client";

import Sidebar from "@/components/navigation-bar";
import Search from "@/components/searchbar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-row gap-4 min-h-screen bg-white">
      <Sidebar />
      <main>
        <Search />
        
        {children}</main>

      
    </div>
  );
};
export default DashboardLayout;
