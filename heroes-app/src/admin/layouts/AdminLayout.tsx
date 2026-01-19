import React from "react";

import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-violet-400 ">
      {/* <NavBar /> */}
      <main className="flex-1 container mx-auto px-4 py-6 bg-gradient">
        <Outlet />
      </main>
    </div>
  );
};
